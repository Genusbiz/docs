> [!NOTE]
> Archived content. The following content is valid for Genus Apps versions prior to 2017.4. Please see [here](../install-genus-desktop.md) for the most current content.

# Install Genus Desktop Clients Silently for Your Users

For deployment of the Genus Desktop Client in a corporate environment, there are two main approaches.

*   Let the users handle the installation and updates of the Genus Desktop Client themselves. This is an easy task, and many organisations choose this approach. For more information, see [Install Genus Desktop Client on Your Computer](install-genus-desktop-client-on-your-computer.md).
*   Handle the installation and updates of the Genus Desktop Client for the users, either because the user do not have the necessary permissions to install the client themselves, or just to simplify the work day for them.

There are several options for rolling out a program installations to many users on the Windows platform, some are inherent in the platform, and many third-party software vendors offer applications for this specific purpose. These will generally not be discussed here. Of the many possible scenarios for automatic installation, we will look at two approaches to shed light on the possibilities, without necessarily being complete.

**Standard silent installation.**

Utilize the standard mechanisms in the installation software to roll out the Genus Desktop Client silently to many users. For more information, see [Genus Desktop Client - Installer Details](genus-desktop-client--installer-details.md).

**Manual silent installation.**

Detailed technical information on the workings of the desktop client installer. This approach may be necessary when users do not have sufficient permissions on their own computer, or when several users share an installation on a terminal server. This approach is not recommended unless it is absoutely necessary.


## Genus Desktop Client Manual Silent Installation (Administrative Installation)

This information is intended for system adminstrators who want to deploy the Genus desktop client application in a corporate environment. This is necessary in environments where users do not have sufficient rights on their Personal Computers or laptops. It is also necessary in terminal services environments, where several users share a single Genus desktop client application installation. Genus does not recommend such an administrative installation if it is not absolutely required.

The scenario described here is to keep the Genus desktop client application executable file on a shared file server and deploy Windows Registry changes to the personal computers, laptops or similar.

Note that an upgrade of Genus Services may require a new deployment of Windows Registry changes (deletions, additions or actual changes), in addition to an update of the executable files. Genus recommends testing the deployment in a separate environment before deploying to production enviroments.

## Administrative Genus Desktop Client Installation - Installation Variables

Before running through the steps in the next section you need to decide on some installation variables in the Registry as follows. The use of brackets indicates a variable.

**[HKEY_USER_SELECTABLE]** is to be replaced with _HKEY_LOCAL_MACHINE_ if you want the installation to be available to all users on the machine ("Per-Machine" installation). Replace with _HKEY_CURRENT_USER_ if you want the installation to be available to a single user ("Per-User" installation).

**[INSTALLDIR]** is the Genus desktop client installation directory. The Genus desktop client installer program installs the executable under _**CSIDL_PROGRAM_FILES\Genus\Client\Genus.exe**_. CSIDL_PROGRAM_FILES is the standard installation directory for programs, typically being _**C:\Program Files**_ in an English version of Windows. With default settings in an English version of Windows, _[INSTALLDIR]Genus.exe_ will be expanded to _"C:\Program Files\Genus\Client\Genus.exe"_. Note the use of double backslashes in Registry files.

**[CSIDL_PROGRAMS]** is the Programs menu within the Windows Start menu for the current user. A typical value is _"C:\\Documents and Settings\\**user**\\Start Menu\\Programs"_ where **_user_** is the current user. Used in a "Per-User" installation.

**[CSIDL_COMMON_PROGRAMS]** is the Programs menu within the Windows Start menu for all users. A typical value is _"C:\Documents and Settings\All Users\Start Menu\Programs"_. Used in a **Per-Machine** installation.

**[CSIDL_DESKTOP]** is the desktop for the current user. A typical value is _"C:\\Documents and Settings\\**user**\\Desktop"_, where **_user_** is the current user. Used in a **Per-User** installation.

**[CSIDL_COMMON_DESKTOP]** is the common desktop for all users. A typical value is _"C:\Documents and Settings\All Users\Desktop"_. Used in a **Per-Machine** installation.

**[Servername]** is a part of an URL referring to a server machine, eg _"myserver.mydomain.com"_.

**[Virtdir]** is a part of an URL describing a virtual directory, eg _**somedir**_ in _"myserver.mydomain.com/**somedir**/_

**[{DATASET-GUID}]** is an identifier for a dataset in your Genus Server installation, and used as a part of a directory name to ensure unique directory naming if your environment contains or is extended to multiple Genus Services datasets.



## Administrative Genus Desktop Client Installation - Step by Step

This step by step procedure equals the steps automatically done by the Genus desktop client installation program and the Genus desktop client upgrader.

**Step 1**

Decide on an installation root directory and create it, e.g. on a shared file server. Example: _**H:\\Programs\\Genus\\Client\\**_.

**Step 2**

Copy the version of the Genus desktop client executable to be deployed to this installation root directory, e.g. _**H:\Programs\Genus\Client\Genus.exe**_.

**Step 3**

In environments running multiple versions of Genus, you must make sure that both the newest and the older versions are located in the folders described in [Genus Desktop Client Installation Files Footprint](install-genus-desktop-client-on-your-computer.md).

**Step 4**

Genus installs custom URL protocol handlers for "genuslink" and "genusstudiolink", used for handling shortcuts inside the Genus desktop client application. The document types **.genus** (Content Type = **application/x-genus**) is used for downloading genuslink shortcuts from the server and opening them. The following text, with replacement of variables with their values, constitute Registry content which you can save to a file and deploy in your corporate environment:

```
Windows Registry Editor Version 5.00  

[HKEY_USER_SELECTABLE]  

[HKEY_USER_SELECTABLE\Software]  

[HKEY_USER_SELECTABLE\Software\Classes]  

[HKEY_USER_SELECTABLE\Software\Classes\genusfile]  
@="Genus Shortcut"  
"EditFlags"=dword:00010000  
"IsShortcut"=""  
"NeverShowExt"=""  

[HKEY_USER_SELECTABLE\Software\Classes\genusfile\DefaultIcon]  
@="\"[INSTALLDIR]Genus.exe\",0"  

[HKEY_USER_SELECTABLE\Software\Classes\genusfile\shell]  

[HKEY_USER_SELECTABLE\Software\Classes\genusfile\shell\open]  

[HKEY_USER_SELECTABLE\Software\Classes\genusfile\shell\open\command]  
@="\"[INSTALLDIR]Genus.exe\" \"%1\""  

[HKEY_USER_SELECTABLE\Software\Classes\genuslink]  
@="URL:Genus Link Protocol"  
"URL Protocol"=""  

[HKEY_USER_SELECTABLE\Software\Classes\genuslink\DefaultIcon]  
@="\"[INSTALLDIR]Genus.exe\",0"  

[HKEY_USER_SELECTABLE\Software\Classes\genuslink\shell]  

[HKEY_USER_SELECTABLE\Software\Classes\genuslink\shell\open]  

[HKEY_USER_SELECTABLE\Software\Classes\genuslink\shell\open\command]  
@="\"[INSTALLDIR]Genus.exe\" \"%1\""  

[HKEY_USER_SELECTABLE\Software\Classes\genusstudiolink]  
@="URL:Genus Studio Link Protocol"  
"URL Protocol"=""  

[HKEY_USER_SELECTABLE\Software\Classes\genusstudiolink\DefaultIcon]  
@="\"[INSTALLDIR]Genus.exe\",4"  

[HKEY_USER_SELECTABLE\Software\Classes\genusstudiolink\Shell]  

[HKEY_USER_SELECTABLE\Software\Classes\genusstudiolink\Shell\open]  

[HKEY_USER_SELECTABLE\Software\Classes\genusstudiolink\Shell\open\command]  
@="\"[INSTALLDIR]Genus.exe\" \"%1\""  

[HKEY_USER_SELECTABLE\Software\Classes\.genus]
@="genusfile"  
"Content-Type"="application/x-genus"  

[HKEY_USER_SELECTABLE\Software\Classes\MIME]  

[HKEY_USER_SELECTABLE\Software\Classes\MIME\Database]  

[HKEY_USER_SELECTABLE\Software\Classes\MIME\Database\Content Type]  

[HKEY_USER_SELECTABLE\Software\Classes\MIME\Database\Content Type\application/x-genus]  
"Extension"=".genus"  

[HKEY_USER_SELECTABLE\Software\Microsoft]  

[HKEY_USER_SELECTABLE\Software\Microsoft\Internet Explorer]  

[HKEY_USER_SELECTABLE\Software\Microsoft\Internet Explorer\ProtocolExecute]  

[HKEY_USER_SELECTABLE\Software\Microsoft\Internet Explorer\ProtocolExecute\genuslink]  
"WarnOnOpen"=dword:00000000  

[HKEY_USER_SELECTABLE\Software\Microsoft\Internet Explorer\ProtocolExecute\genusstudiolink]  
"WarnOnOpen"=dword:00000000  

[HKEY_USER_SELECTABLE\Software\Microsoft\Internet Explorer\Low Rights]  

[HKEY_USER_SELECTABLE\Software\Microsoft\Internet Explorer\Low Rights\ElevationPolicy]  

[HKEY_USER_SELECTABLE\Software\Microsoft\Internet Explorer\Low Rights\ElevationPolicy\{066FE867-F43C-4828-8A0D-F82D25D63426}]  
"Policy"=dword:00000003  
"AppName"="Genus.exe"  
"AppPath"="[INSTALLDIR]"  

```

**Step 5**

The Genus desktop client installation program enables automatic update of the Genus desktop client application by adding the following information to the Registry:

```
Windows Registry Editor Version 5.00  

[HKEY_USER_SELECTABLE]  

[HKEY_USER_SELECTABLE\Software]  

[HKEY_USER_SELECTABLE\Software\Genus]  
"IsOfficeAutoUpdateEnabled"=dword:00000001  
```

If this information is omitted, automatic update of the Genus desktop client application is disabled.

**Step 6**

The Genus desktop client installation program adds a shortcut to the Genus desktop client application in the Windows Start menu as an URL file with the text _**genuslink:**_.

This file is saved on the following location for "Per-Machine" installations:

_CSIDL_COMMON_PROGRAMS\Genus Client\Genus.url_

For "Per-User" installations the file is saved on the following location:

_CSIDL_PROGRAMS\Genus Client\Genus.url_

**Step 7**

If the user, using the Genus desktop client installation program, chooses "Custom Setup", the user will be offered the possibility to create shortcuts to the Genus desktop client application on the desktop.

For "Per-Machine" installations: _CSIDL_COMMON_DESKTOP\Genus.url_.

For "Per-User" installations: _CSIDL_DESKTOP\Genus.url_.



## Administrative Genus Desktop Client Installation - Run Time Changes

The Genus Desktop client application makes modifications to the user's environment at run time as described below.

**1 Registry Keys and Values for Current User**

The Registry key **[HKEY_CURRENT_USER\Software\Genus]** and keys and values under this level are created and updated.

**2 Creation of Dataset Shortcuts**

If the user opens a new dataset, a shortcut to this dataset is added to the users Start menu:

_CSIDL_PROGRAMS\Genus Client\directory name - dataset name.url_

This URL file refers to _**genuslink:http://servername/virtdir**._

In a corporate enviroment with an administrative client installation, the shortcuts to all applicable datasets normally will be deployed by the system adminstrator, and not created run time, see [Administrative Client Installation](install-genus-desktop-clients-silently-for-your-users.md) for more information.

