# Automatically delete old log files

Log files are written to a specific directory in your Genus Services environment. Over time these log files may occupy a lot of space on your server. If you want to delete old log files automatically, we recommend that you create a Windows Schedule Task that runs the VBScript below once every day.

To create the VBScript, copy the lines below, paste them into a blank text file and change the text file extension from .txt to .vbs. Then create a Windows Schedule Task which runs the .vbs file once every day.

````
'  
' Delete Genus Services log files.  
'  
l_strFolderEndingWithBackslash = "C:\ProgramData\Genus\Server\LogFiles\W3SVC2\"  
l_iDeleteFilesOlderThanDays = 14  

set l_oFileSysObj = CreateObject( "Scripting.FileSystemObject" )  
set l_oFolder = l_oFileSysObj.GetFolder( l_strFolderEndingWithBackslash )  
for each l_oFile in l_oFolder.Files  
if DateDiff( "d", l_oFile.DateLastModified, now ) > l_iDeleteFilesOlderThanDays then  
l_oFileSysObj.DeleteFile( l_strFolderEndingWithBackslash & l_oFile.name )  
end if  
next  
````

Note that the log folder path may be slightly different depending on the current web site configuration. The last number in the path corresponds to the web site id. In the example "C:\ProgramData\Genus\Server\LogFiles\W3SVC**2**\", the web site id is "**2**".
