# Genus Desktop Client - Installer Details

The Genus Desktop Client installer contains several files, and is executed in three layers:

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Layer</th>

<th>Main File</th>

<th>Technology</th>

<th>Description</th>

<th>Command Line Parameters</th>

</tr>

<tr>

<td>1</td>

<td>GenusSetup.exe</td>

<td>IExpress</td>

<td>Self-extracting EXE-file which contains all files necessary for installation by the two next layers.</td>

<td>

[http://support.microsoft.com/kb/197147](http://support.microsoft.com/kb/197147)

</td>

</tr>

<tr>

<td>2</td>

<td>

GenusInstaller.exe

</td>

<td>InstallShield</td>

<td>

The default name of the InstallShield executable file is "Setup.exe", which here has been renamed to "GenusInstaller.exe"

</td>

<td>

[http://helpnet.flexerasoftware.com / installshield20helplib / Content / helplibrary / IHelpSetup_EXECmdLine.htm](http://helpnet.flexerasoftware.com%20/%20installshield20helplib%20/%20Content%20/%20helplibrary%20/%20IHelpSetup_EXECmdLine.htm)

</td>

</tr>

<tr>

<td>3</td>

<td>

Genus.msi

</td>

<td>

Windows Installer

(MsiExec)

</td>

<td></td>

<td>

[http://msdn.microsoft.com/library/aa367988](http://msdn.microsoft.com/library/aa367988)

</td>

</tr>

</tbody>

</table>

Parameters can be passed to all three layers from the command line.

![ID70039CC1E68842B6.png](media/ID70039CC1E68842B6.png)

**GenusSetup.exe**  

The installation is started by executing GenusSetup.exe. Command line parameters can be used to control parts of its behaviour.

*   Normal installation:  <span style="FONT-STYLE: italic">GenusSetup.exe
*   Unpack all files in GenusSetup.exe to the specified folder:  <span style="FONT-STYLE: italic">GenusSetup.exe /c /t:<FolderPath>
*   Start installation with parameters passed to second layer:  <span style="FONT-STYLE: italic">GenusSetup.exe /c:"GenusInstaller.exe <InstallShield Setup.exe Command Line Parameters>"

**GenusInstaller.exe**

If parameters are passed to GenusInstaller.exe, parts of its behaviour can be controlled.

*   Print the available parameter options:  
    <span style="FONT-STYLE: italic">GenusSetup.exe /c:"GenusInstaller.exe /?"
*   Normal installation with English texts during installation:  
    <span style="FONT-STYLE: italic">GenusSetup.exe /c:"GenusInstaller.exe /L1033"
*   Normal installation with Norwegian texts during installation:  
    <span style="FONT-STYLE: italic">GenusSetup.exe /c:"GenusInstaller.exe /L1044"
*   Start installation with parameters passed to third layer (there is no space after/v):  
    <span style="FONT-STYLE: italic">GenusSetup.exe /c:"GenusInstaller.exe /s /v<Windows Installer Command Line Parameters>"

The parameter /v specifies the parameters passed to the Windows Installer, msiexec.exe, and define how the installation is executed. The /v command can be specified multiple times for giving multiple commands to Windows Installer. There is no space after the /v command.  

**Genus.msi**

If parameters are passed to MsiExec when executing Genus.msi, parts of its behaviour can be controlled.

*   Print the available parameter options:  
    <span style="FONT-STYLE: italic">GenusSetup.exe /c:"GenusInstaller.exe /s /v/?"

The following features are defined with various INSTALLLEVELs in Genus.msi:

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Feature</th>

<th>INSTALLLEVEL</th>

</tr>

<tr>

<td>Genus.exe</td>

<td>1</td>

</tr>

<tr>

<td>Add All Programs Menu Shortcut</td>

<td>1</td>

</tr>

<tr>

<td>Include All Languages</td>

<td>10</td>

</tr>

<tr>

<td>Enable Automatic Updates</td>

<td>80</td>

</tr>

<tr>

<td>Add Desktop Shortcut</td>

<td>200</td>

</tr>

</tbody>

</table>

These features can be included or excluded by specifying the Windows Installer parameter INSTALLLEVEL. When executing the installation, all features with install level <= the specified INSTALLLEVEL parameter are included. If no INSTALLEVEL is specified for an installation, the default level 100 is used.

**Examples**

*   Install Genus with full GUI without automatic updates:  
    <span style="FONT-STYLE: italic">GenusSetup.exe /c:"GenusInstaller.exe /vINSTALLLEVEL=10"
*   Install Genus with full GUI without automatic updates, but with minimal user interaction:  
    <span style="FONT-STYLE: italic">GenusSetup.exe /c:"GenusInstaller.exe /s /v/qb+ /vINSTALLLEVEL=10"
*   Combining all Windows Installer-parameters in one /v (note: double quotes and space):  
    <span style="FONT-STYLE: italic">GenusSetup.exe /c:"GenusInstaller.exe /s /v""/qb+ INSTALLLEVEL=10"""
*   Normal installation but with "InstallPerUser" (Only Windows 7 and above), not using "InstallPerMachine" which is default:  
    <span style="FONT-STYLE: italic">GenusSetup.exe /c:"GenusInstaller.exe /s /v""/qb+ ALLUSERS=2 MSIINSTALLPERUSER=1"""
*   A per-machine installation with install Genus in <FOLDERID_ProgramFilesX86>. Run command:  
    <span style="FONT-STYLE: italic">GenusSetup.exe /c:"GenusInstaller.exe /s /v/q /vINSTALLLEVEL=10"

**Installation Folder**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Installation Type</th>

<th>Installation Folder (ID)</th>

</tr>

<tr>

<td>Per-User Installation</td>

<td><FOLDERID_UserProgramFiles></td>

</tr>

<tr>

<td>Per-Machine Installation</td>

<td><FOLDERID_ProgramFilesX86></td>

</tr>

</tbody>

</table>

For more information on folders in both 32-bit and 64-bit Windows, see Known folders in Windows: [http://msdn.microsoft.com/library/dd378457](http://msdn.microsoft.com/library/dd378457).