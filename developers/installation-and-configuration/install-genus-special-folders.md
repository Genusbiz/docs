---
title: Installation special folders
description: Special folders used when installing Genus Desktop
author: balmlid
---

# Installation special folders

A few special folders are used during installation and is formatted like this  **[_\<SpecialFolderName\>_]** in the text. For complete list of the special folders, see https://docs.microsoft.com/en-us/dotnet/api/system.environment.specialfolder.

The following lists a few special folders and the values to which they typically resolve:

| Special folder name   | Typical value                                                         | Description   |
|-----------------------|-----------------------------------------------------------------------|---------------|
| CommonApplicationData | C:\ProgramData                                                        | The directory that serves as a common repository for application-specific data that is used by all users. | 
| CommonStartMenu       | C:\ProgramData\Microsoft\Windows\Start Menu                           | The file system directory that contains the programs and folders that appear on the Start menu for all users. |
| LocalApplicationData  | C:\Users\\_\<username\>_\AppData\Local                                | The directory that serves as a common repository for application-specific data that is used by the current, non-roaming user. |
| ProgramFiles          | C:\Program Files                                                      | The program files directory. |
| StartMenu             | C:\Users\\_\<username\>_\AppData<br>\Roaming\Microsoft\Windows\Start Menu | The directory that contains the current user's Start menu items. |

In addition to the special folder names listed above we also use the special name **[INSTALLDIR]** to represent the directory used to install GenusLauncher.exe. For an administrative installation, common for all users on a computer, this defaults to **[ProgramFiles]**\Genus\Launcher. For a per user installation this is always **[LocalApplicationData]**\GenusLauncher.


