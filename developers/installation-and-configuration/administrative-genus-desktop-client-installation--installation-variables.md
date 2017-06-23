# Administrative Genus Desktop Client Installation - Installation Variables

Before running through [Administrative Genus Desktop Client Installation - Step by Step](administrative-genus-desktop-client-installation--step-by-step.md "Administrative Genus Desktop Client Installation - Step by Step") you need to decide on some installation variables in the Registry as follows. The use of brackets indicates a variable.

**[HKEY\_USER\_SELECTABLE]** is to be replaced with HKEY\_LOCAL\_MACHINE if you want the installation to be available to all users on the machine ("Per-Machine" installation). Replace with HKEY\_CURRENT\_USER if you want the installation to be available to a single user ("Per-User" installation).

**[INSTALLDIR]** is the Genus desktop client installation directory. The Genus desktop client installer program installs the executable under _CSIDL\_PROGRAM\_FILES\Genus\Client\Genus.exeb_. CSIDL\_PROGRAM\_FILES is the standard installation directory for programs, typically being _C:\\Program Files_ in an english version of Windows. With default settings in an english version of Windows, _[INSTALLDIR]Genus.exe_ will be expanded to _"C:\\Program Files\\Genus\\Client\\Genus.exe"_. Note the use of double backslashes in Registry files.

**[CSIDL\_PROGRAMS]** is the Programs menu within the Windows Start menu for the current user. A typical value is _"C:\\Documents and Settings\\**user**\\Start Menu\\Programs"_ where **_user_** is the current user. Used in a "Per-User" installation.

**[CSIDL\_COMMON\_PROGRAMS]** is the Programs menu within the Windows Start menu for all users. A typical value is _"C:\\Documents and Settings\\All Users\\Start Menu\\Programs"_. Used in a Per-Machine installation.

**[CSIDL\_DESKTOP]** is the desktop for the current user. A typical value is _"C:\\Documents and Settings\\**user**\\Desktop"_, where **_user_** is the current user. Used in a Per-User installation.

**[CSIDL\_COMMON\_DESKTOP]** is the common desktop for all users. A typical value is _"C:\\Documents and Settings\\All Users\\Desktop"_. Used in a Per-Machine installation.

**[Servername]** is a part of an URL referring to a server machine, e.g. _"myserver.mydomain.comb"_.

**[Virtdir]** is a part of an URL describing a virtual directory, eg _**somedir**_ in _"myserver.mydomain.com//**somedir**_

**[{DATASET-GUID}]** is an identifier for a dataset in your Genus App Services installation, and used as a part of a directory name to ensure unique directory naming if your environment contains or is extended to multiple Genus App Services datasets.