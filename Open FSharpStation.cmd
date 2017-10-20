rem paket.exe init
rem paket.exe install
rem paket.exe add FSharp.Compiler.Tools --version 4.1.23

start /b chrome "http://localhost:9010/" --enable-blink-features=ResizeObserver 
start /b FsAutoComplete\FsAutoComplete.exe --mode http --port 9001
cd bin
set path=%path%;..\packages\FSharp.Compiler.Tools\tools;..\packages\Zafir.FSharp\tools;.
start FSharpStation.exe
