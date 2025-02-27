---
title: Registry Settings used by Genus Desktop
description: Documents the registy settings that is used by Genus Desktop.
author: balmlid
---

# Registry settings

Genus Desktop needs a few registry settings in order to operate. Most of these settings are automatically added to the registry by the Genus Desktop installer, while some optional settings may be added manually. 

## Registry settings created by the Genus Desktop installer
The following example shows the information added to the Windows registry during installation for the user _**MYUSER**_ using the default (per-user) Genus Desktop installation. The path ```C:\Users\MYUSER\AppData\Local\``` is actually the expansion of the <strong><a href="install-genus-special-folders.md">[LocalApplicationData]</a></strong> special folder, so depending on the Windows version and local folder redirection settings the actual value may differ from the example provided. The subdirectory name ```app-v.v.v``` is composed of the ```app-``` prefix and the three first digits of the most recent ```GenusLauncher.exe``` file version.

If an administrator would like to create a custom, machine-wide installation available for all users on a computer (e.g. a terminal server) he/she would have to modify this registry file. Unless stated otherwise below, one would replace ```HKEY_CURRENT_USER``` with ```HKEY_LOCAL_MACHINE```, and change all file paths to a common directory accessible for all users.

```ini
Windows Registry Editor Version 5.00

##############################################################
# Register the "genuslink" protocol handler for opening 
# Genus Desktop links.
##############################################################
[HKEY_CURRENT_USER\Software\Classes\genuslink]
@="URL:Genus Desktop Link Protocol"
"URL Protocol"=""

[HKEY_CURRENT_USER\Software\Classes\genuslink\DefaultIcon]
@="\"C:\\Users\\MYUSER\\AppData\\Local\\GenusLauncher\\app-v.v.v\\GenusApplicationIcon.ico\""

[HKEY_CURRENT_USER\Software\Classes\genuslink\shell\open\command]
@="\"C:\\Users\\MYUSER\\AppData\\Local\\GenusLauncher\\GenusLauncher.exe\" \"%1\""

##############################################################
# Register the "genusstudiolink" protocol handler for 
# opening Genus Studio links.
##############################################################
[HKEY_CURRENT_USER\Software\Classes\genusstudiolink]
@="URL:Genus Studio Link Protocol"
"URL Protocol"=""

[HKEY_CURRENT_USER\Software\Classes\genusstudiolink\DefaultIcon]
@="\"C:\\Users\\MYUSER\\AppData\\Local\\GenusLauncher\\app-v.v.v\\GenusStudioIcon.ico\""

[HKEY_CURRENT_USER\Software\Classes\genusstudiolink\shell\open\command]
@="\"C:\\Users\\MYUSER\\AppData\\Local\\GenusLauncher\\GenusLauncher.exe\" \"%1\""

##############################################################
# Switch off warning when Internet Explorer and Microsoft
# Edge opens GenusLauncher.exe using the "genuslink" or
# "genusstudiolink" protocols.
##############################################################
[HKEY_CURRENT_USER\Software\Microsoft\Internet Explorer\ProtocolExecute\genuslink]
"WarnOnOpen"=dword:00000000

[HKEY_CURRENT_USER\Software\Microsoft\Internet Explorer\ProtocolExecute\genusstudiolink]
"WarnOnOpen"=dword:00000000

[HKEY_CURRENT_USER\Software\Microsoft\Internet Explorer\Low Rights\ElevationPolicy\{0292A443-B955-477A-84FF-872E6685E8D2}]
"AppName"="GenusLauncher.exe"
"AppPath"="C:\\Users\\MYUSER\\AppData\\Local\\GenusLauncher"
"Policy"=dword:00000003

##############################################################
# Prevent pinning of running Genus.exe processes. This
# would not work anyway because Genus.exe receives a 
# new unique AppId each time a new process is started.
##############################################################
[HKEY_CURRENT_USER\Software\Classes\Applications\Genus.exe]
"IsHostApp"=""
"NoStartPage"=""

##############################################################
# Specify explicitly some GenusLauncher.exe properties. This
# helps us prevent displaying outdated names for shortcuts and
# browser warnings in the future due to Windows name caching in
# HKEY_CLASSES_ROOT\Local Settings\Software\Microsoft\Windows\Shell\MuiCache
##############################################################
[HKEY_CURRENT_USER\Software\Classes\Applications\GenusLauncher.exe]
"FriendlyAppName"="Genus Desktop"
"ApplicationCompany"="Genus AS"

[HKEY_CURRENT_USER\Software\Classes\Applications\GenusLauncher.exe\shell\open\command]
@="\"C:\\Users\\MYUSER\\AppData\\Local\\GenusLauncher\\GenusLauncher.exe\" \"%1\""
```

## Additional Group Policy settings improving integration with Microsoft Office, Microsoft Edge, and Google Chrome

We recommend that the system administrator should deploy the following Group Policy registry settings in order to provide a better user experience when clicking links using the "genuslink" or the "genusstudiolink" from commonly used desktop apps, including Microsoft Office products (e.g. Microsoft Outlook), Microsoft Edge, and Google Chrome. The standard Genus Desktop installer will check if the user is capable of running elevated with administrative privileges. If this is the case the installer will try to add these settings during installation. In order to prevent the need for elevation we recommend that the system administrator rather deploys corresponding Group Policy settings administratively.

Please note that the Microsoft Edge and Google Chrome registry settings are automatically installed only with the Genus Desktop installer (GenusLauncher.exe) version 19.2.12 or higher.

_In the following example the placeholder **```xx.0```** represents the version number of the currently installed version of Microsoft Office. E.g. for Microsoft Office 365 and  Microsoft Office 2016 this version number is **```16.0```**. Please not that this is a per-user setting only and there exists no HKEY\_LOCAL\_MACHINE counterpart._

```ini
Windows Registry Editor Version 5.00

################################################################################
# Microsoft Office (including Microsoft Outlook), Microsoft Edge, and Google
# Chrome shows a warning message each time a link with a custom protocol is 
# clicked. To prevent this message Microsoft and Google provides registry 
# settings that may be added per Office version or Web browser and the URL
# protocol. 
#
# For more information on Microsoft Office policy settings, see
# https://support.microsoft.com/kb/925757 for details. Remember # to replace 
# "xx.0" below. Please note that this is only a HKEY_CURRENT_USER setting. 
# Attempting to make this a global setting by changing to HKEY_LOCAL_MACHINE 
# will have no effect.
#
# For more information on Microsoft Edge policy settings, see
# https://docs.microsoft.com/en-us/deployedge/microsoft-edge-policies#urlallowlist
# You *may* replace HKEY_CURRENT_USER with HKEY_LOCAL_MACHINE for this setting.
#
# For more information on Google Chrome policy settings, see
# https://cloud.google.com/docs/chrome-enterprise/policies/?policy=URLWhitelist
# You *may* replace HKEY_CURRENT_USER with HKEY_LOCAL_MACHINE for this setting.
################################################################################

# Replace "xx.0" in the following with the actual Microsoft Office version, e.g. "16.0" for Microsoft Office 2016.
[HKEY_CURRENT_USER\Software\Policies\Microsoft\Office\xx.0\Common\Security\Trusted Protocols\All Applications\genuslink:]

# Replace "xx.0" in the following with the actual Microsoft Office version, e.g. "16.0" for Microsoft Office 2016.
[HKEY_CURRENT_USER\Software\Policies\Microsoft\Office\xx.0\Common\Security\Trusted Protocols\All Applications\genusstudiolink:]

# If "1" or "2" below is already in use, replace with any available unique numeric name.
[HKEY_CURRENT_USER\Software\Policies\Google\Chrome\URLAllowlist]
"1"="genuslink:*"
"2"="genusstudiolink:*"

# If "1" or "2" below is already in use, replace with any available unique numeric name.
[HKEY_CURRENT_USER\Software\Policies\Microsoft\Edge\URLAllowlist]
"1"="genuslink:*"
"2"="genusstudiolink:*"
```

## Enable or disable automatic client updates

In order to prevent a user from downloading updates of the full Genus Desktop client (Genus.exe and dependencies) it is possible to add the following to the registry:

```ini
Windows Registry Editor Version 5.00

[HKEY_CURRENT_USER\Software\Genus]
"IsClientAutoUpdateEnabled"=dword:00000000
```
It is also possible to introduce the following HKEY\_LOCAL\_MACHINE registry setting once per computer instead:

```ini
Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\Software\Genus]
"IsClientAutoUpdateEnabled"=dword:00000000
```
