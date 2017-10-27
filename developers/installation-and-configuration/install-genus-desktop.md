---
title: Installing Genus Desktop
description: How to install Genus Desktop both in a per user environment and a shared computer environment, including terminal servers.
author: balmlid
---

# Installing Genus Desktop


## Genus Desktop and the Genus Desktop _launcher_

Unlike some products like Microsoft Office, Genus Desktop is designed to handle _multiple versions_ of the same client software simultaneously from the same computer or user profile. The way this is implemented is to install a special "launcher" executable that is responsible for downloading and managing the required client software versions in use.

When a user or an administrator installs "Genus Desktop", technically, only the Genus Desktop _launcher_ is installed. The launcher installation adds a "Genus Desktop" Start menu entry as well as necessary registry settings needed by the launcher. The launcher executable has a minimal footprint.

Whenever the user starts "Genus Desktop" the launcher kicks in, checks if the required version of Genus Desktop is present in the local cache, downloads and caches the executable (with its dependencies) in the user's local profile, if missing, and starts the required version of the Genus Desktop executable. Unless installed using the full administrative approach below, the launcher will also update itself automatically in the background. Compared to the launcher's rather minimal disk footprint the Genus Desktop executable's footprint is considerable larger.


## Installation options

We offer a wide range of options for deploying Genus Desktop in a corporate environment:

1. **Completely managed by the user**: Let the users handle the installation and updates of the Genus Desktop themselves. This is an easy task, and many organisations choose this approach. Once the launcher is installed, it will silently operate in the background without any user intervention. The launcher even updates itself automatically in the background without any need for user intervention.

2. **Completely managed by an administrator**: An administrator handles the installation and updates the Genus Desktop on behalf of the users, either because the user do not have the necessary permissions to install the software themselves, in order to reduce bandwidth requirements, or to save disk space on the terminal servers. Every time users need to access an updated version of Genus Desktop the administrator must ensure that the most recent launcher has been installed as well as download and pre-cache the Genus Desktop version.

3. **Initial deployment by Windows Installer (MSI), then completely managed by the user**: An administrator may deploy the per user installer (see option 1 above) using Group Policy/Microsoft System Center.

4. **Combining per user installation and administrator assisted pre-caching**: Let the users install and automatically update the launcher (using option 1 or option 3), but the administrator will pre-cache required Genus Desktop versions locally in use to save disk space and bandwidth.

5. **Custom deployment**: There are generally several other options for rolling out program installations to many users on the Windows platform, some are inherent in the platform, and many third-party software vendors offer dedicated products for this specific purpose. These will not be discussed here.

Installation options 1-4 are described in more detail below.

In the following a few special folders (shown as **[_\<SpecialFolderName\>_]**) are used. See [here][1] for a description. For a detailed description of the GenusLauncher.exe command line syntax, see [The Genus Desktop launcher command line](genus-launcher-command-line.md).


## Option 1: The installation is fully managed by the end-users

This is the recommended option. The end-users downloads and executes Setup.exe, e.g. by clicking on a link to **http(s)://_\<your_app_server_host_name_here\>_/download/Setup.exe** distributed by e-mail. If a legacy (pre-2017.4) version is installed, the user first needs to uninstall that version from Programs and Features (WinKey+R, appwiz.cpl) before running the Setup.exe for the new installer.

Setup.exe will install the Genus Desktop launcher (GenusLauncher.exe) in the user's local profile, located in the directory **[\[LocalApplicationData\]][1]\GenusLauncher**. The installer will also add a few registry keys and values in the HKEY\_CURRENT\_USER registry hive, including required configuration for the vendor specific protocol handlers "genuslink:" and "genusstudiolink:", and add an entry in the Programs Registry at **[HKEY\_CURRENT\_USER\Software\Microsoft\Windows\CurrentVersion\Uninstall\GenusLauncher]**. The installation is performed in the background without any user interaction. The launcher will also automatically update itself silently in the background.

A shortcut to GenusLauncher.exe will be added to the user's Start menu (**[\[StartMenu\]][1]\Genus\Genus Desktop.lnk**). The user may right-click this shortcut and select **Pin to Start** and/or **Pin to taskbar**. The pinned shortcut provides a Jump List (displayed by right-clicking the shortcut) as an alternative way of launching Genus Desktop.

Whenever a new version is required local cache folders are searched in the following order ("x.x.x.x" below represents the file version of the corresponding Genus.exe):

1. **[\[LocalApplicationData\]][1]\Genus\Client\VersionCache\x.x.x.x\Genus.exe**, the local per user cache folder used for automatic updates
1. **[\[CommonApplicationData\]][1]\Genus\Client\VersionCache\x.x.x.x\Genus.exe**, the local common cache folder used as the default folder for administrative downloads
1. **[\[INSTALLDIR\]][1]\x.x.x.x\Genus.exe**, the alternative local common cache folder that may be used for administrative downloads

If not found, the launcher will download and unpack the required version of Genus Desktop in the user's local cache folder (**[\[LocalApplicationData\]][1]\Genus\Client\VersionCache**) before starting Genus.exe.


## Option 2: The installation is fully managed by an administrator

In some corporate environments users do not have sufficient privileges on their personal computers or laptops. In terminal services environments, the administrator may also need to control the disk footprint, preventing multiple copies of Genus Desktop executables across user profiles. Genus does not recommend such an administrative installation if it is not absolutely required.

Installation and maintenance of administrative installations is a two step procedure:

 1. Install or update the launcher

    Download GenusLauncher.exe from a server that has the correct version of Genus Services installed. The URL is on the form **http(s)://_\<your_app_server_host_name_here\>_/download/GenusLauncher.exe**. Check if the current version of the launcher (if already installed) is up to date by running the command line

    ```batchfile
    GenusLauncher.exe admin-version
    ```

    If the version is not up to date, or the launcher is not installed at all, install the launcher using the command line 

    ```batchfile
    GenusLauncher.exe admin-install --enable-auto-update
    ```

    (giving end-users permission to download missing versions of Genus Desktop to the user's local cache),  or

    ```batchfile
    GenusLauncher.exe admin-install --disable-auto-update
    ```

    (preventing end-users from downloading missing versions of Genus Desktop to the user's local cache). The Genus Desktop launcher will be installed under the default folder **[\[ProgramFiles\]][1]\Genus\Launcher**. If you want to install the Genus Desktop launcher in another folder, e.g. "X:\Genus\Launcher", add the folder name (in quotes) at the end of the command line.

    The installer will also add a few registry keys and values in the HKEY\_LOCAL\_MACHINE registry hive, including required configuration for the vendor specific protocol handlers "genuslink:" and "genusstudiolink:", and add an entry in the Programs Registry at **[HKEY\_LOCAL\_MACHINE\Software\Microsoft\Windows\CurrentVersion\Uninstall\GenusLauncherAdmin]**.

    > [!NOTE]
    > As an installation of the Genus Desktop launcher will typically handle multiple versions of Genus.exe, make sure that the launcher installation has the highest version number available. Please note that GenusLauncher.exe is versioned separately from Genus.exe.

 2. Pre-cache required version of Genus Desktop

    As described above, the Genus Desktop launcher looks for a locally cached version before it is downloaded from the server. In order to download and unpack Genus Desktop (Genus.exe and related files) run the command line

    ```batchfile
    GenusLauncher.exe admin-unpack <source URL>
    ```

    where `<source URL>` is on the form **http(s)://_\<your_app_server_host_name_here\>_/_\<your_genus_dataset_virtual_directory_here\>_/**. The command will download a component package containing Genus.exe and its related files and unpack the files at the folder **[\[CommonApplicationData\]][1]\Genus\Client\x.x.x.x**.

    If you rather prefer to put the cache within the GenusLauncher.exe installation folder, run the command line

    ```batchfile
    GenusLauncher.exe admin-unpack --installdir <source URL>
    ```

    instead. **However, we strongly discourage using the installation folder option (i.e. --installdir option) for caching Genus Desktop versions. The reason for this is that Windows locks executables that are currently in use, thereby making installing/updating/uninstalling of the launcher unreliable.**


## Option 3: Initial deployment by Windows Installer (MSI), then completely managed by the user

There is yet another option for installing Genus Desktop. This is only intended for IT administrators that need to distribute software using Windows Installer (MSI) packages, e.g. through Group Policy/Microsoft System Center. The Genus Desktop Windows Installer package deploys the per user installer under **[\[ProgramFilesX86\]][1]\Genus Desktop Installer** and creates an entry at registry key **HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\Windows\CurrentVersion\Run** that will start the per user installation with a "**[\[ProgramFilesX86\]][1]\Genus Desktop Installer\GenusLauncher.exe --checkInstall**" command whenever a user logs in. If Genus Desktop is not already installed for that user, it will be installed.

Please note that this is merely a way of deploying the standard per user installation, removing the need for users having to download and run the installation manually. Please also note that uninstalling the Windows Installer package will not remove Genus Desktop from user accounts.

The Windows Installer package may be downloaded from a server with Genus Services installed. The URL is on the form **http(s)://_\<your_app_server_host_name_here\>_/download/Setup.msi**.


## Option 4: Combining per user installation and administrator assisted pre-caching

If disk footprint in a shared computer environment (like a terminal server) is a major concern, but the end-users are allowed to perform installation on their local profile (i.e. option 1 or option 3), we recommend a combined approach: Let the users install and automatically update the launcher, but let the administrator pre-cache required Genus Desktop versions locally in use to save disk space and bandwidth.

The end-user will install (with Setup.exe) and update the installation in the background, and the administrator will pre-cache required Genus Desktop versions using the command line

```batchfile
GenusLauncher.exe admin-unpack <source URL>
```

The GenusLauncher.exe `admin-unpack` command is available even if the launcher is not administratively installed. Compared with option 1 or option 3 the only difference a user will experience is faster updates as the administrator has already provided cached versions on the local disk.

By default, the Genus Desktop launcher will download and cache any missing version of the Genus Desktop executable. In order to prevent this in any case (e.g. the administrator has failed to provide the required version in the common cache) you may want to add the following into the registry:

```batchfile
Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE]\Software\Genus]
"IsClientAutoUpdateEnabled"=dword:00000001
```

If the registry setting is added and the required version is missing the launcher will fail silently. For troubleshooting, see below.


## Troubleshooting

GenusLauncher.exe always logs to the text file **%TEMP%\GenusLauncher.exe.log**. The file should be used when you need to troubleshoot. During updating multiple instances of GenusLauncher.exe may be running simultaneously. In these cases the GenusLauncher.exe.log file may be locked and a separate log file named **%TEMP%\\\<some GUID\>GenusLauncher.exe.log** may be produced instead.

The per user installation of the Genus Desktop launcher uses [Squirrel](https://github.com/Squirrel/Squirrel.Windows) for installation and automatic updates. Squirrel produces its own log file, named **SquirrelSetup.log**, at several locations, including the following folders: **[\[LocalApplicationData\]][1]\SquirrelTemp**, **[\[LocalApplicationData\]][1]\GenusLauncher**, and **[\[LocalApplicationData\]][1]\GenusLauncher\packages\SquirrelTemp**.

[1]: install-genus-special-folders.md
