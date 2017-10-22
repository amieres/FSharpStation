gci . -recurse | Unblock-File

.\paket.exe init
.\paket.exe install

echo ""
echo ""
echo "************************************************************************"
echo "*                                                                      *"
echo "*           Make sure .net Framework 4.6.1 SDK is installed            *"
echo "*    https://www.microsoft.com/en-us/download/details.aspx?id=49978    *"
echo "*                                                                      *"
echo "************************************************************************"
echo ""
echo ""
pause