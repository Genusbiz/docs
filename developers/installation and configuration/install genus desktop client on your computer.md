## Install Genus Desktop Client on Your Computer

You can install the Genus desktop client using an internet address (URL) or an otherwise provided setup file.

Also, in corporate environments the Genus desktop client may be [preinstalled](install genus desktop clients silently for your users.md) for you by your system administrator. In such cases you only need to start the client. For more information, see [Starting the Genus Desktop Client](../../users/getting started/start the genus desktop client.md).

Note that any other running Genus desktop clients on your computer must be terminated before starting the Genus desktop client installation. The installation program will warn you if any other Genus desktop clients are running, and wait for you to terminate them.

In this article

* * *

*   [Install Genus Desktop Client Using the Genus Installer](#install-genus-desktop-client-using-the-genus-installer)

*   [Install Genus Desktop Client Using an Internet Address (URL)](#install-genus-desktop-client-using-an-internet-address-url)

*   [Install Genus Desktop Client Using a Provided Setup File](#install-genus-desktop-client-using-a-provided-setup-file)

*   [Install Genus Desktop Client on a Terminal Server](#install-genus-desktop-client-on-a-terminal-server)

*   [Genus Desktop Client Installation Files Footprint](#genus-desktop-client-installation-files-footprint)

*   [Genus Desktop Client Startup Logic](#genus-desktop-client-startup-logic)

*   [Uninstall Genus Desktop Client from Your Computer](#uninstall-genus-desktop-client-from-your-computer)

* * *

## Install Genus Desktop Client Using the Genus Installer

Normally your Genus desktop client application is installed using a provided Windows Installer-based installation program named _GenusSetup.exe_.

This installer program is provided to you by reference to setup directories in you local area network or by CD or DVD media, see [Install Genus Desktop Client Using a Provided Setup File](install genus desktop client on your computer.md) for more information.

This installer program can also be downloaded from an internet address, se [Install Genus Desktop Client Using an Internet Address (URL)](install genus desktop client on your computer.md) for more information.

In special cases, typically in corporate environments, you do not have enough rights on your computer to run the Genus Desktop Client Installer. In such cases the Genus desktop client application will be installed for you by your system administrator. See [Install Genus Desktop Client Silently for Your Users](install genus desktop clients silently for your users.md) for more information.

See below for technical information regarding the Genus Desktop Client Installer.

In this article

* * *

*   [Genus Desktop Client Installer](#genus-desktop-client-installer)

* * *



## Genus Desktop Client Installer

The Genus Desktop Client Installer is named _GenusSetup.exe_ and is a standard Windows Installer-based installation program.

When starting _GenusSetup.exe_, it unpacks installation files to a temporary directory and starts the installation with the option "ALLUSERS=2". This option makes the installer attempt an installation for all users ("Per-Machine") on your computer. If this does not succeed, a installation for the current user ("Per-User") will be attempted.

A system administrator may use the standard Genus Desktop Client Installer to install or deploy the Genus desktop client application to one or more computers. This will result in an all users ("Per-Machine") installation.

The Genus desktop client is self-updating, which means that when an user on a computer starts the Genus desktop client towards a Genus App Services with a different version than the client, a new version of the client will be downloaded and replace the old version. During such an update temporary directories may be created on the current installed directory, and the running version of the Genus desktop client will change its file name. The update involves running a Windows Installer based update of the current installation.

In cases where users lack the rights to perform the update, the automatic update feature may be turned off during the client installation. This may be the case in terminal services enviroments, where many users share the same client installation. To turn the automatic update feature off, point to "Enable Automatic Updates" in the step "Custom Setup" during installation, right click and turn off.

If a user must upgrade, but does not have sufficient rights, the user will be warned and asked to contact the system administrator.

If automatic updates are turned off, the installation must be updated by the system administrator every time the Genus App Services is upgraded.

After a Genus App Services upgrade on your server, the Genus Desktop Client Installer is available for download on the URL [https://yoursite.yourcompany.com/yourapplication/download/genussetup.exe](https://yoursite.yourcompany.com/yourapplication/download/genussetup.exe).

For more information about which registry-settings and shortcuts etc the Genus Desktop Client Installer creates or modifies, see [Administrative Installation of the Genus Desktop Client](install genus desktop clients silently for your users.md).



## Install Genus Desktop Client Using an Internet Address (URL) <a name="install-genus-desktop-client-using-an-internet-address-url"/>

Please follow these steps to install the Genus desktop client:

1.  Obtain an URL for your Genus application from your system administrator. Example: [https://yoursite.yourcompany.com/yourapplication/](https://yoursite.yourcompany.com/yourapplication/)
2.  Start your web browser and type the address into your web browser's address bar, followed by the text **download/genussetup.exe** and the click the refresh button. Example: [https://yoursite.yourcompany.com/yourapplication/download/genussetup.exe](https://yoursite.yourcompany.com/yourapplication/download/genussetup.exe).
3.  In any of your browser's security warning dialog boxes, click **Run** or otherwise accept the downloading and running of the software. Note! Only do this if you are sure of the address' publisher or source.
4.  The installation wizard will start.
5.  Follow the instructions on screen to complete the installation.

To start the Genus desktop client, see [Start the Genus Desktop Client](../../users/getting started/start the genus desktop client.md "Start the Genus Logix Client").

For technical details regarding the client installation, see



## Install Genus Desktop Client Using a Provided Setup File

The setup executable file is named **GenusSetup.exe** and may be provided to you by your system administrator on a CD/DVD or on a corporate file server.

1.  Locate the **GenusSetup.exe** file.
2.  Double click the **GenusSetup.exe** file to start the installation. An installation wizard will appear.
3.  Follow the instructions on screen to complete the installation.

To start the Genus desktop client, see [Start the Genus Desktop Client](../../users/getting started/start the genus desktop client.md).



## Install Genus Desktop Client on a Terminal Server

This information is intended for system administrators who want to deploy the Genus desktop client application on a Terminal Server.

On the Terminal Server, perform a Genus desktop client installation using an internet address or a provided setup file.

If the Genus Server is configured with automatic update, see [Configure Automatic Update](../../users/working in tables/configure automatic updates.md "Configure Automatic Updates") for considerations regarding terminal servers.

If you have many Genus users on your terminal server, you may fine tune the application start up time by pre-uploading the Genus directory cache files. See [Terminal Server Optimizations](../defining the application model/action orchestration/actions/effects/terminal server optimizations.md "Terminal Server Optimizations") for details.



## Genus Desktop Client Installation Files Footprint

The installation files footprint are the files on your computer that are part of a Genus desktop client installation.

The following types of files exist:

*   Application executable files
*   Application extension files
*   Application model cache file
*   Language translation cache files
*   Help files

Note that some of the files may not be present on your computer until you start your Genus desktop client the first time.  

**Application Executable Files**

The Genus desktop client consists of one executable file named <span style="FONT-STYLE: italic">genus.exe. The file is by default placed in the folder <span style="FONT-STYLE: italic">[CSIDL_PROGRAM_FILES](../../users/working in forms/advanced/csidl constant values for various microsoft windows versions.md "CSIDL Constant Values for Various Microsoft Windows Versions")\Genus\Client by the Genus desktop client installation program.

Note that it is possible to change the folder in the Genus desktop client installation program during the first time install on your computer.

**Application Extension Files**

The Genus desktop client consists of a set of application extension files (DLLs or Dynamic-link Libraries) placed in the same folder as the application executable file <span style="FONT-STYLE: italic">genus.exe:

*   [CSIDL_PROGRAM_FILES](../../users/working in forms/advanced/csidl constant values for various microsoft windows versions.md "CSIDL Constant Values for Various Microsoft Windows Versions")<span style="FONT-STYLE: italic">\Genus\Client , if the client was installed for all users.
*   [CSIDL_LOCAL_APPDATA](../../users/working in forms/advanced/csidl constant values for various microsoft windows versions.md "CSIDL Constant Values for Various Microsoft Windows Versions")<span style="FONT-STYLE: italic">\Programs\Genus\Client , if the client was installed for your user only.

Note that these files must be located in the same directory as the application executable file <span style="FONT-STYLE: italic">genus.exe. If you have changed the default folder in the Genus desktop installation program during first time install, the location of the application extension files will change accordingly.

**Application Model Cache File**

To improve performance, a copy of your application model is automatically stored on your client after the directory is deployed to all computers. This cache file is named <span style="FONT-STYLE: italic">DeployedDirectory.gcm and stored in the folder [CSIDL_LOCAL_APPDATA](../../users/working in forms/advanced/csidl constant values for various microsoft windows versions.md "CSIDL Constant Values for Various Microsoft Windows Versions")<span style="FONT-STYLE: italic">\Genus\Client\{<span style="FONT-STYLE: italic">[Directory GUID](../defining the application model/glossary.md)<span style="FONT-STYLE: italic">}.

An example on Windows 8 for a user with user name John is <span style="FONT-STYLE: italic">C:\Users\john\AppData\Local\Genus\Client\{826E89DC-BD93-4120-8198-0B6B2D459905}\DeployedDirectory.gcm.

The application model cache file is not present on your computer until you start your Genus desktop client the first time. However, if you are in a corporate environment, your system administrator may have [preinstalled](install genus desktop clients silently for your users.md) the file.

If you have changed the default folder in the Genus installation program during first time install, the location of the application model cache files will change accordingly.

The parts of your directory solely used by Genus Server on your application server are not cached on your client.

**Language Translation Cache Files**

Genus App Platform supports multiple natural languages, and there are two types of text strings that are translated.

First, the text strings which are a inherent in the Genus desktop client application, like the names of the **File** and **Edit** menus. The translations of these text strings are stored in one file per language in the folder [CSIDL_PROGRAM_FILES](../../users/working in forms/advanced/csidl constant values for various microsoft windows versions.md "CSIDL Constant Values for Various Microsoft Windows Versions")<span style="FONT-STYLE: italic">\Genus\Client\Translations, i.e. in a subfolder of the application executable folder.

An example of such a file on Windows 8 for a translation to Norwegian is <span style="FONT-STYLE: italic">C:\Program Files (x86)\Genus\Client\Translations\Genus.nb-NO.gct, where <span style="FONT-STYLE: italic">nb-NO is the culture name specifying the language and country. Note that if you have changed the default folder in the Genus installation program during first time install, the placement of the language translation cache files will change accordingly.

Secondly, any translated text strings part of your application model are stored in one file per language in the folder [CSIDL_LOCAL_APPDATA](../../users/working in forms/advanced/csidl constant values for various microsoft windows versions.md "CSIDL Constant Values for Various Microsoft Windows Versions")<span style="FONT-STYLE: italic">\Genus\Client\{<span style="FONT-STYLE: italic">[Directory GUID](../defining the application model/glossary.md)<span style="FONT-STYLE: italic">}\Translations. The translation files are named <span style="FONT-STYLE: italic">LanguageStrings.{Culture}.gct, where <span style="FONT-STYLE: italic">{Culture} is the culture name specifying the language and country.

An example of such a file on Windows 8 for a translation to Norwegian is <span style="FONT-STYLE: italic">C:\Users\john\AppData\Local\Genus\Client\{826E89DC-BD93-4120-8198-0B6B2D459905}\Translations\LanguageStrings.nb-NO.gct

**Help Files**

Help files are downloaded automatically to your computer the first time you invoke Genus Help.

Help files are stored in the folder [CSIDL_LOCAL_APPDATA](../../users/working in forms/advanced/csidl constant values for various microsoft windows versions.md "CSIDL Constant Values for Various Microsoft Windows Versions")<span style="FONT-STYLE: italic">\Genus\Client\{<span style="FONT-STYLE: italic">[Directory GUID](../defining the application model/glossary.md)<span style="FONT-STYLE: italic">}\HelpFiles\{Culture} on your computer.

<span style="FONT-STYLE: italic">{Culture} is the help text culture name specifying the language and sublanguage.

The folder contains the following files:

*   <span style="FONT-STYLE: italic">GenusHelp.chm: The help file in Microsoft Compiled HTML Help format.
*   <span style="FONT-STYLE: italic">Version.txt: A text file only containing the help file version number.

An example of a folder name on Windows 8 for a user with user name John and the US English help text (culture en-US) is <span style="FONT-STYLE: italic">C:\Users\john\AppData\Local\Genus\Client\{826E89DC-BD93-4120-8198-0B6B2D459905}\HelpFiles\en-US\

**Older versions of Application Executable Files, Application Extension Files and Language Translation Cache files**

In environments running multiple versions of Genus desktop clients, older versions are stored on your client. See [Genus Startup Logic](install genus desktop client on your computer.md) for more information.

*   If you have write access to [CSIDL_COMMON_APPDATA](../../users/working in forms/advanced/csidl constant values for various microsoft windows versions.md "CSIDL Constant Values for Various Microsoft Windows Versions"), older versions of the Application Executable Files are stored in the folder <span style="FONT-STYLE: italic">CSIDL_COMMON_APPDATA\Genus\Client\VersionCache\<Genus Version Number>.
*   If you do <span style="FONT-STYLE: italic">not have write access to <span style="FONT-STYLE: italic">CSIDL_COMMON_APPDATA, older versions are stored in the folder [CSIDL_LOCAL_APPDATA](../../users/working in forms/advanced/csidl constant values for various microsoft windows versions.md "CSIDL Constant Values for Various Microsoft Windows Versions")<span style="FONT-STYLE: italic">\Genus\Client\VersionCache\<Genus Version Number>.

Older versions of Application Extension Files and Language Translation Cache files are stored in subfolders following the pattern above.

If you have changed the default folder in the Genus installation program during first time install, the location of the files will change accordingly.

The actual version number of your Genus desktop client can be obtained by right-clicking your <span style="FONT-STYLE: italic">genus.exe file, select **Properties** and locate the **File Version** property. <span style="FONT-STYLE: italic"> 



## Genus Desktop Client Startup Logic

In complex environments with potentially multiple Genus versions, it is sometimes necessary for system administrators to know more about what takes place when the Genus desktop client starts up, for instance to troubleshoot any client startup problems for your end users.

**Application Model Cache File**

The Genus desktop client checks if there is an [Application Model Cache File](install genus desktop client on your computer.md) on your computer, containing a copy of your directory.

If there is, Genus compares the application model version with the version available on your application server, and updates the application model cache file if necessary.

If there is not, the application model cache file is downloaded from your application server.

If you have access to Genus Studio, you may force a deploy of the application model cache file to your computer. See [Deploy Changes in the Directory](../defining the application model/genus studio basics/deploy changes in the directory.md) for more information. In such cases, the local copy of the Application Model Cache File will be preferred and read on startup.

**Automatic Update of the Genus Desktop client**

Genus desktop clients may be [configured to automatically update](../../users/working in tables/configure automatic updates.md "Configure Automatic Updates") themselves.

If the Genus desktop client finds that the Genus Server on the application server run a <span style="FONT-STYLE: italic">newer version than itself, the following steps take place:

1.  The Genus dektop client setup executable file <span style="FONT-STYLE: italic">GenusSetup.exe is downloaded from the application server.
2.  The instance of the Genus desktop client which you started is terminated.
3.  The setup executable file is started automatically and an installation wizard will appear, and you must follow the instructions on screen to complete the upgrade.
4.  During this process, you are asked to start the Genus desktop client again after the installation is complete.

If the Genus desktop client finds that the Genus Server on the application server run an <span style="FONT-STYLE: italic">older version than itself, the following steps take place:

1.  If the older version already exists on the user's Personal Computer or laptop, the instance of the Genus desktop client which you started will be terminated, and the older version gets started.
2.  If the older version does not exists, a the old executable is downloaded from the application server and placed on a folder on your client computer. An upgrade installation is not necessary in such circumstances. The instance of the Genus desktop client which you started is then terminated, and the older version is started.

The newest version of the Genus desktop client consists of Application Executable Files, Application Extension Files and Language Translation Cache Files as described in [Genus Desktop Client Installation Files Footprint](install genus desktop client on your computer.md).

For a description of the location of older versions of the Genus desktop client, see [Genus Desktop Client Installation Files Footprint](install genus desktop client on your computer.md).  



## Uninstall Genus Desktop Client from Your Computer

On your computer, uninstall Genus desktop client by using the standard uninstall feature in Microsoft Windows. Specifically, in Windows 8, in the Windows **Start** menu, click **Control Panel**. In the **Control Panel**, click **Uninstall a program**, then locate <span style="FONT-STYLE: italic">Genus and click **Uninstall**.

**Known issue**

In rare cases the uninstall fail for unknown reasons, reporting lack of the original Genus installation file (<span style="FONT-STYLE: italic">Genus.msi).

Examples of error messages are <span style="FONT-STYLE: italic">"The installation source for this product is not available. Verify that the source exists and that you can access it" and <span style="FONT-STYLE: italic">"The older version of Genus cannot be removed. Contact your technical support group."

To resolve this issue, you need to download and run a utility from the <span style="FONT-STYLE: italic">Microsoft Fix It Solution Center, to <span style="FONT-STYLE: italic">Diagnose and fix program installing and uninstalling problems automatically. For more information, see [http://support.microsoft.com/mats/Program_Install_and_Uninstall/](http://support.microsoft.com/mats/Program_Install_and_Uninstall/).

Should the B+Microsoft Fix ItB; solution fail we recommend trying uninstalling the existing Genus Desktop version using Piriform CCleaner, see [https://www.piriform.com/ccleaner](https://www.piriform.com/ccleaner). Install CCleaner, then click **Tools** select **Uninstall**, look for any existing version of Genus Dektop in the list, and click **Uninstall**.

