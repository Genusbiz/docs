---
title: The Genus Desktop launcher command line
description: How to use the GenusLauncher.exe command line, including how to install the Genus Desktop launcher as an administrator.
author: balmlid
---

# The Genus Desktop launcher command line

The Genus Desktop launcher executable, **GenusLauncher.exe**, is a multi-purpose executable. Its primary purpose is to launch the correct version of Genus Desktop (**Genus.exe**) and is normally installed with Setup.exe in a "Per User" installation scenario. If the Genus Desktop launcher is started without parameters it will prompt the user for an URL to be used and then launch the correct version of Genus Desktop. It may also be started with an URL argument directly or with one of the administrative commands. 

In the command line syntax below we use the following conventions:
* `<parameter description>` -- a mandatory command line parameter
* `[<parameter description>]` -- an optional command line parameter
* `--option1` -- a mandatory option named "option1"
* `--option1 | --option2` -- "option1" or "option2"
* `[--option1]` -- an optional option named "option1"

For an explanation of the special folders **[\<SpecialFolderName\>]** used below, see [here](install-genus-special-folders.md). 


## Executing without parameters

```batchfile
GenusLauncher.exe
```

Prompts the user for an URL to be used for launching Genus Desktop.


## Executing with a URL parameter

```batchfile
GenusLauncher.exe <URL>
```

Launches Genus Desktop with the specified URL (starting with "genuslink:", "genusstudiolink:", "http://", or "https://").


## Executing an administrative command

```batchfile
GenusLauncher.exe <command> [<command options>] [<other command arguments>]
```

Executes one of the following administrative installation **`<command>`** commands:

* **admin-install**
  ```batchfile
  GenusLauncher.exe admin-install --enable-auto-update|--disable-auto-update [<installation directory>]
  ```
  Installs the Genus Desktop launcher for all users. If `<installation directory>` is omitted,
  the installation directory is defaulted to **[\[ProgramFiles\]][1]\Genus\Launcher**. Installation
  information will be added to the registry under the key **[HKEY\_LOCAL\_MACHINE\Software\Microsoft\Windows\CurrentVersion\Uninstall\GenusLauncherAdmin]**.
  
  Specify the option `--enable-auto-update` in order to _allow_ end-users to download missing Genus 
  Desktop versions (e.g. because the administrator forgot to update the latest version) to the
  user's **[\[LocalApplicationData\]][1]** cache folder.

  Specify the option `--disable-auto-update` in order to _prevent_ end-users from (accidentally)
  updating Genus Desktop on their own, avoiding duplicating the software for every user's
  **[\[LocalApplicationData\]][1]** cache folder.

* **admin-uninstall**
  ```batchfile
  GenusLauncher.exe admin-uninstall
  ```
  Uninstalls the Genus Desktop launcher for all users, based on the information found at the
  registry key **[HKEY\_LOCAL\_MACHINE\Software\Microsoft\Windows\CurrentVersion\Uninstall\GenusLauncherAdmin]**.

* **admin-unpack**
  ```batchfile
  GenusLauncher.exe admin-unpack [--installdir] <source URL>
  ```
  Downloads Genus Desktop from the specified URL and unpacks the files at a version
  number-specific directory under **[\[CommonApplicationData\]][1]\Genus\Client\VersionCache**,
  if `--installdir` is omitted, or below the current installation directory (default location
  is **[\[ProgramFiles\]][1]\Genus\Launcher**) if `--installdir` is specified.
  
  The source URL is on the form
  **http(s)://_\<your_app_server_host_name_here\>_/_\<your_genus_dataset_virtual_directory_here\>_/**.

* **admin-version**
  ```batchfile
  GenusLauncher.exe admin-version
  ```
  Shows the current version of the started GenusLauncher.exee and the administratively installed version (if any)
  of the Genus Desktop launcher.

[1]: install-genus-special-folders.md
