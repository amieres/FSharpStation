/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { createCancelablePromise } from '../../../base/common/async.js';
import { debounceEvent, Emitter } from '../../../base/common/event.js';
import { dispose } from '../../../base/common/lifecycle.js';
import { TPromise } from '../../../base/common/winjs.base.js';
import { Range } from '../../common/core/range.js';
import { CodeActionProviderRegistry } from '../../common/modes.js';
import { RawContextKey } from '../../../platform/contextkey/common/contextkey.js';
import { getCodeActions } from './codeAction.js';
export var SUPPORTED_CODE_ACTIONS = new RawContextKey('supportedCodeAction', '');
var CodeActionOracle = /** @class */ (function () {
    function CodeActionOracle(_editor, _markerService, _signalChange, delay, _progressService) {
        if (delay === void 0) { delay = 250; }
        var _this = this;
        this._editor = _editor;
        this._markerService = _markerService;
        this._signalChange = _signalChange;
        this._progressService = _progressService;
        this._disposables = [];
        this._disposables.push(debounceEvent(this._markerService.onMarkerChanged, function (last, cur) { return last ? last.concat(cur) : cur; }, delay / 2)(function (e) { return _this._onMarkerChanges(e); }), debounceEvent(this._editor.onDidChangeCursorPosition, function (last, cur) { return cur; }, delay)(function (e) { return _this._onCursorChange(); }));
    }
    CodeActionOracle.prototype.dispose = function () {
        this._disposables = dispose(this._disposables);
    };
    CodeActionOracle.prototype.trigger = function (trigger) {
        var selection = this._getRangeOfSelectionUnlessWhitespaceEnclosed(trigger);
        return this._createEventAndSignalChange(trigger, selection);
    };
    CodeActionOracle.prototype._onMarkerChanges = function (resources) {
        var uri = this._editor.getModel().uri;
        for (var _i = 0, resources_1 = resources; _i < resources_1.length; _i++) {
            var resource = resources_1[_i];
            if (resource.toString() === uri.toString()) {
                this.trigger({ type: 'auto' });
                return;
            }
        }
    };
    CodeActionOracle.prototype._onCursorChange = function () {
        this.trigger({ type: 'auto' });
    };
    CodeActionOracle.prototype._getRangeOfMarker = function (selection) {
        var model = this._editor.getModel();
        for (var _i = 0, _a = this._markerService.read({ resource: model.uri }); _i < _a.length; _i++) {
            var marker = _a[_i];
            if (Range.intersectRanges(marker, selection)) {
                return Range.lift(marker);
            }
        }
        return undefined;
    };
    CodeActionOracle.prototype._getRangeOfSelectionUnlessWhitespaceEnclosed = function (trigger) {
        var model = this._editor.getModel();
        var selection = this._editor.getSelection();
        if (selection.isEmpty() && !(trigger.filter && trigger.filter.includeSourceActions)) {
            var _a = selection.getPosition(), lineNumber = _a.lineNumber, column = _a.column;
            var line = model.getLineContent(lineNumber);
            if (line.length === 0) {
                // empty line
                return undefined;
            }
            else if (column === 1) {
                // look only right
                if (/\s/.test(line[0])) {
                    return undefined;
                }
            }
            else if (column === model.getLineMaxColumn(lineNumber)) {
                // look only left
                if (/\s/.test(line[line.length - 1])) {
                    return undefined;
                }
            }
            else {
                // look left and right
                if (/\s/.test(line[column - 2]) && /\s/.test(line[column - 1])) {
                    return undefined;
                }
            }
        }
        return selection;
    };
    CodeActionOracle.prototype._createEventAndSignalChange = function (trigger, selection) {
        if (!selection) {
            // cancel
            this._signalChange({
                trigger: trigger,
                rangeOrSelection: undefined,
                position: undefined,
                actions: undefined,
            });
            return TPromise.as(undefined);
        }
        else {
            var model_1 = this._editor.getModel();
            var markerRange = this._getRangeOfMarker(selection);
            var position = markerRange ? markerRange.getStartPosition() : selection.getStartPosition();
            var actions = createCancelablePromise(function (token) { return getCodeActions(model_1, selection, trigger, token); });
            if (this._progressService && trigger.type === 'manual') {
                this._progressService.showWhile(TPromise.wrap(actions), 250);
            }
            this._signalChange({
                trigger: trigger,
                rangeOrSelection: selection,
                position: position,
                actions: actions
            });
            return actions;
        }
    };
    return CodeActionOracle;
}());
export { CodeActionOracle };
var CodeActionModel = /** @class */ (function () {
    function CodeActionModel(editor, markerService, contextKeyService, _progressService) {
        var _this = this;
        this._progressService = _progressService;
        this._onDidChangeFixes = new Emitter();
        this._disposables = [];
        this._editor = editor;
        this._markerService = markerService;
        this._supportedCodeActions = SUPPORTED_CODE_ACTIONS.bindTo(contextKeyService);
        this._disposables.push(this._editor.onDidChangeModel(function () { return _this._update(); }));
        this._disposables.push(this._editor.onDidChangeModelLanguage(function () { return _this._update(); }));
        this._disposables.push(CodeActionProviderRegistry.onDidChange(this._update, this));
        this._update();
    }
    CodeActionModel.prototype.dispose = function () {
        this._disposables = dispose(this._disposables);
        dispose(this._codeActionOracle);
    };
    Object.defineProperty(CodeActionModel.prototype, "onDidChangeFixes", {
        get: function () {
            return this._onDidChangeFixes.event;
        },
        enumerable: true,
        configurable: true
    });
    CodeActionModel.prototype._update = function () {
        var _this = this;
        if (this._codeActionOracle) {
            this._codeActionOracle.dispose();
            this._codeActionOracle = undefined;
            this._onDidChangeFixes.fire(undefined);
        }
        if (this._editor.getModel()
            && CodeActionProviderRegistry.has(this._editor.getModel())
            && !this._editor.getConfiguration().readOnly) {
            var supportedActions = [];
            for (var _i = 0, _a = CodeActionProviderRegistry.all(this._editor.getModel()); _i < _a.length; _i++) {
                var provider = _a[_i];
                if (Array.isArray(provider.providedCodeActionKinds)) {
                    supportedActions.push.apply(supportedActions, provider.providedCodeActionKinds);
                }
            }
            this._supportedCodeActions.set(supportedActions.join(' '));
            this._codeActionOracle = new CodeActionOracle(this._editor, this._markerService, function (p) { return _this._onDidChangeFixes.fire(p); }, undefined, this._progressService);
            this._codeActionOracle.trigger({ type: 'auto' });
        }
        else {
            this._supportedCodeActions.reset();
        }
    };
    CodeActionModel.prototype.trigger = function (trigger) {
        if (this._codeActionOracle) {
            return this._codeActionOracle.trigger(trigger);
        }
        return TPromise.as(undefined);
    };
    return CodeActionModel;
}());
export { CodeActionModel };
