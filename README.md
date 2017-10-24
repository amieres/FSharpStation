# FSharpStation
An editor for FSharp development, powered by Chrome, WebSharper &amp; CodeMirror

![alt text](https://raw.githubusercontent.com/amieres/FSharpStation/master/FSharpStation.PNG)

# Snippets, snippets, snippets.
F# Station represents a different paradigm of code organization.

Programming by snippets. 

Instead of files, organize your code in snippets, have them all in one place, 
select the ones you need, reuse the code in several projects and develop your own code base with your personal style.

# How to Install

- Download Zip File: https://github.com/amieres/FSharpStation/archive/master.zip
- UnZip somewhere
- Run with PowerShell: INSTALL FSharpStation.ps1
- Install .net Framework 4.6.1 SDK:  https://www.microsoft.com/en-us/download/details.aspx?id=49978

## To Run:

- Close Chrome to ensure a new instance is opened
- DoubleClick on: Open FSharpStation.cmd
- Open latest .fsjson file

# Evaluate F# (FSI)

- Go to snippet: FSSGlobal/F# Code/Snippets/Calculate primes
- Click on: Evaluate F#
- A little window that calculates prime numbers should pop up
- Test other snippets

Different from FSI only actual output is reported, so use printfn "%A" to show results.

# Run WebSharper 
- Go to snippet: FSSGlobal/WebSharper Code/WebSharper Snippets1/Demo Grid
- Select: New Browser (bottom right)
- Click on: Run WebSharper in...
- A new tab should open. It may be blocked by the popup blocker. Disable block for localhost:9010
- Run WebSharper opens a new browser with the WebSharper-generated JavaScript running.
- Select the JavaScript tab to view the actual JS code, after invoking WebSharper with "Compile WebSharper" or "Run WebSharper"

# Intellisense features
- Code checking. Double click on error message to jump to location
- Hints. Double click on word to get hint.
- Autocompletion. Alt-Space to activate.
- Find Definition button.

# To Save your work:
Saving a file is actually downloading it. For convenience is better to indicate where to save it everytime:
- Goto chrome://settings/
- Click on Advanced
- Select option "Ask where to save each file before downloading" 

# Preprocessor directives

## use #r and #I to reference your libraries

Place #r and #I directives anywhere in any snippet 

## #define

Even though it is not part of F# officially, F# Station lets you use #define directives to  define your own symbols.

It takes effect regardless of placement, even within #if #else #endif directives.

# ResizeObserver message:

### "You are using an unsupported command-line flag: --enable-blink-features=ResizeObserver. Stability and security will suffer."

F# Station uses ResizeObserver, still an experimental feature. 

To eliminate the message goto chrome://flags and enable: Experimental Web Platform features

# WIP
This is a work in progress. But it is already fully usable and fun to use. 

Try it.

Get code from the web, add your own, try new things and integrate them into your projects.

With new actions added every time FSharpStation can become a personal console of operations.

FSharpStation is fully developed using FSharpStation. 

Find the source code in the snippets: FSSGlobal/WebSharper Code/FSharpStation Code
