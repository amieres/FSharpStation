CodeMirror.defineMode('none', function ()
{

    function tokenBase(stream, state)
    {
        return 'variable';
    }

    return {
        startState: function () { return { tokenize: tokenBase, commentLevel: 0 }; },
        token: function (stream, state)
        {
		 return null;
            if (stream.eatSpace()) return null;
            return state.tokenize(stream, state);
        },

        blockCommentStart: "(*",
        blockCommentEnd: "*)"
    };
});

CodeMirror.defineMIME("text/plain", "none");