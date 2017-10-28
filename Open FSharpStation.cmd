rem paket.exe init
rem paket.exe install
rem paket.exe add FSharp.Compiler.Tools --version 4.1.23

start /b chrome --enable-blink-features=ResizeObserver "http://localhost:9010/" 
start /b FsAutoComplete\FsAutoComplete.exe --mode http --port 9001
cd bin
set path=%path%;..\packages\FSharp.Compiler.Tools\tools;..\ZafirCompiler
start FSharpStation.exe
