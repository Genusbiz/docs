# Terminal Server Optimizations

If you have many Genus users on your terminal server, you may fine tune the application start up time by pre-uploading the Genus directory cache files.

> [!NOTE]
> You must repeat this every time a new Genus directory is deployed. If this is done frequently, consider postponing the optimization until your Genus directory version is more stable.

You must first upload the Genus directory cache files by starting the Genus desktop client on the terminal server. The cache files are uploaded to the file directory _[CSIDL\_LOCAL\_APPDATA]\Genus\Client\\[{DATASET-GUID}]_.

Copy this directory, including subdirectories, to _[CSIDL\_COMMON\_APPDATA]\Genus\Client_, i.e. creating a file directory _[CSIDL\_COMMON\_APPDATA]\Genus\Client\\[{DATASET-GUID}]_.

At startup, Genus will now locate the cache files at the newly created file directory, and avoid uploading and saving these to every user profile file directory. The optimization will save some seconds startup time for each user, dependent of the size of your Genus directory. The optimization will also save terminal server CPU and a little disk space.

The following paths apply in the English version of Windows 8:

_CSIDL\_COMMON\_APPDATA = "C:\ProgramData"_

_CSIDL\_LOCAL\_APPDATA = "C:\Users\YOURUSERNAME\AppData\Local"_

Other versions of Windows, dependent of version number and language, may resolve to other paths.