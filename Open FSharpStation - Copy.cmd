setlocal enableextensions
cd /d "%~dp0"

rem paket.exe init
rem paket.exe install
rem paket.exe add FSharp.Compiler.Tools --version 4.1.23

rem start /b chrome --enable-blink-features=ResizeObserver "http://localhost:9005/" 
set path=%path%;"D:\Abe\CIPHERWorkspace\FSharpStation\packages\Test\FSharp.Core\lib\net45
start /b D:\Abe\CIPHERWorkspace\Repos\FsAutoComplete-master\src\FsAutoComplete\bin\Debug\net461\FsAutoComplete.exe --mode http --port 9001
cd bin
set path=%path%;%CD%\..\..\FSharpStation\packages\FSharp.Compiler.Tools\tools;%CD%\..\..\FSharpStation\WebSharperCompiler
start FSharpStation.exe
