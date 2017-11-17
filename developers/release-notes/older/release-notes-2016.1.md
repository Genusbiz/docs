---
title: Release notes for Genus Apps release 2016.1.
description: User-visible changes to Genus Apps from release 2015.2 to 2016.1.
author: jtroset
---
# Release notes for version 2016.1

## Introduction

This document lists all user-visible changes to Genus App Platform between releases 2015.2 and 2016.1.
 
This release note will be updated prior to the release and may also be updated as long as the release is available, e.g. with information of new patches or known issues. Please take note of the installation / upgrade comments, and the release notes change log.
 
## Installation and upgrading
 
Prior to upgrading to 2016.1, you must:
* Upgrade to 2015.2. See the Release notes for 2015.2 for more information.
* Obtain a new Genus License File by contacting your Genus App Platform representative, as there is a breaking change in the license file name and format. See the Breaking Changes section for more information (release note #22683).
* Review the rest of the release notes for this release. Pay special attention to any issues in the sections Deprecated Functionality, Breaking Changes and Known Issues. You may have to perform manual tasks.
 
After upgrading to 2016.1, you must run the Genus Upgrade Assistant. The Upgrade Assistant is available from the Actions menu inside Genus Studio in 2016.1.
 
See our help documentation for general information about installing and upgrading Genus App Platform. We recommend reviewing the System Requirements help article.

**22662 - Services - Major change in the Genus App Services runtime environment**
 
Genus App Services 2016.1, version 16.2.32.0, introduces major changes in its runtime environment. Previously, Genus App Services (previously named Genus Server) used a hybrid runtime environment comprising 3 different hosts:
 
* Genus App Services Core Service ("GenusCoreService.dll"/"GenusServerCoreService.dll") was hosted by a 32 bit Windows Component Services (COM+) process (i.e. dllhst3g.dll/dllhost.exe)
 
* Execution of agents, scheduling, and the mail service ("Background Service") were initiated by a separate Windows Service process ("GenusServerBackgroundService.exe")
 
* The remaining parts were hosted in a separate 64 bit process, the "Genus Server Web Site AppPool" Internet Information Services (IIS) application pool (w3wp.exe)
 
In the new version all these features have been moved into the 64 bit "Genus Server Web Site AppPool" (Genus App Services Web Site AppPool) application pool (w3wp.exe).
 
**Installation**
 
Genus App Services now requires .NET Framework 4.6.1. The Genus App Services installation wizard will verify that .NET Framework 4.6.1 is properly installed or notify the user to download the required software from https://www.microsoft.com/download/details.aspx?id=49982.
 
The new Genus App Services runtime environment utilizes the "Application Initialization" feature that was introduced in Windows Server 2012. For servers running Windows Server 2008 R2 the Genus App Services installation wizard will tell the user to download and install the required "Application Initialization Module 1.0 for IIS 7.5" from https://bit.ly/appinit.
 
The first time you upgrade to Genus App Services to 2016.1, version 16.2.32.0 or later, you must run a separate post-installation script (located at https://versioning.genus.net/Versioning/016.002.032.000). Please read the README file for detailed instructions. Please note that -- unlike other scripts -- this must be run *after* the upgrade.
 
**Noticable changes**
 
Hosting and recycling is now fully controlled by the "Genus Server Web Site AppPool" (Genus App Services Web Site AppPool) Internet Information Services (IIS) application pool ("w3wp.exe"). Component Services (COM+) is no longer used. In order to configure lifetime and recycling please open the Genus App Services Management Console, select Internet Information Services (IIS) Manager (left-hand side), then Application Pools and "Genus App Services Web Site AppPool". The action pane at the right-hand side presents tasks for shutting down, starting, and recycling the Genus App Services w3wp.exe host process. Configuration of recycling conditions and other hosting settings may be done by clicking "Recycling..." and "Advanced Settings...". Please note that any changes in the configuration will be overwritten next time you install Genus App Services.
 
The Genus App Services Management Console entries for "Component Services" and "Services" have been removed (no longer used by Genus App Services). The "Certificates" entry is now a child node of the "Internet Information Services (IIS) Manager" entry.

**#22754 - - CefSharp is downgraded to stable version 47.0.4**

## End-of-life functionality

End-of-life functionality is functionality that was available in the previous release, but is no longer available in this release.
**#22485 - - Support for Windows Server 2008 and Windows Vista is removed**
 
Support is removed for both 32-bit and 64-bit editions.
 
**#22628 - Studio, Apps - SearchBox removed**
 
SearchBox for Genus Apps has been removed. Same functionality can be achieved with a TextEdit control combined with the new FilterData command and onValueChange event.
 
**#22661 - Desktop - Starting Genus Desktop without a data set**
 
This feature will no longer be supported. If a data set not is specified in the link, a dialog for selecting a data set is displayed at startup.
 
**#22669 - Studio - "Collapsed Label" property for the group box control in forms**
 
Replaced by support for adding summary fields to the group box title.
 
**#22750 - Desktop - User Alerts are discontinued**
 
User Alerts was used to notify the Owner or Delegate of an Agent of its scheduled/failed execution. This has to be replaced with another mechanism. User Alerts was used to notify the Owner or Delegate of an Email if it could not be sent due to an invalid addressee. Failed emails are now kept for 7 days to let a system owner handle them.

## Deprecated functionality

Deprecated functionality is available in this release, but will (most probably) no longer be available in the next release.
**#22705 - Apps, Desktop, Services, Studio - Support for Windows Server 2008 R2**
 
Support for Windows Server 2008 R2 will be removed in a near-future release.
 
**#22706 - Studio, Desktop, Apps, Services - Support for Microsoft SQL Server 2008 R2**
 
Support for Microsoft SQL Server 2008 R2 will be removed in a near-future release.
 
**#22719 - Desktop, Apps, Studio - Some symbols are deprecated**
 
These will be marked with a red frame and a red crossover line in Studio.

## Breaking changes

This section lists important changes introduced in this release. You will need to use this list in order to understand the changes you might need to make to your application to support the new release.
 
Note that Genus Mobile has changed name to Genus Apps and Genus Server has changed name to Genus App Services, in addition to Genus Application Framework changing name to Genus App Platform.

**#21805 - - Export without BOM (Byte Order Mark) removed in the Export Data effect**
 
Any use of encoding "UTF-8 without BOM" or "Unicode without BOM" must be replaced by consuming a service or invoking an executable file.
 
**#21806 - - Data Interpretation "Security Group" removed**
 
The "Security Group" Data Interpretation on an Object Class Property (available for Data Type = "Character or String", Data Size = 38) is removed.
 
**#22144 - - Comparision with NULL no longer translated to IS NULL / IS NOT NULL in SQL**
 
In previous versions, an expression such as "Person.Employer = Company" was translated to SQL as follows
 
a) If Company not was blank: Person.Employer = 'company-id'
b) Company was blank: Person.Employer IS NULL
 
Case b) is not correct since it would return all persons which not had an employer. IN SQL, comparision with NULL returns no rows. In this version case b is translated to
 
b) Person.Employer = NULL
 
**#22491 - - Send e-mail using an Open Form effect requires that MS Outlook is installed**
 
In previous versions a built-in window was displayed if MS Outlook not was installed on a computer.
 
To handle this situation (if necessary) you now have to define a custom Form to open and edit an e-mail message. As in previous versions you can use the Create a Mail Message effect to send the e-mail message (which does not requre that MS Outlook is installed).
 
To check whether MS Outlook is installed you can use the new function available on the Enviroment class in the Genus Application Framework Language: Environment.msOutlookInstalled.
 
**#22560 - Apps - System texts now in Norwegian on iOS**
 
System texts like "copy", "mark all" and "paste" are now shown in Norwegian if the iOS device is localized to Norway
 
**#22604 - Desktop - Refresh not always available in Forms**
 
The refresh button is not available if the form has one or more two way bounded data sources.
 
**#22641 - Studio - Save As on a Task does not any longer copy the task publications**
 
**#22644 - Studio, Services, Apps, Desktop - Compliancy to the new Windows Enforcement of Authenticode Code Signing and Timestamping**
 
Effective January 1, 2016, Windows (version 7 and higher) and Windows Server will no longer trust new code that is signed with a SHA-1 code signing certificate for "Mark-of-the-Web" related scenarios (e.g. files containing a digital signature) and that has been time-stamped with a value greater than January 1, 2016. This cut-off date applies to the code signing certificate itself.
 
This restriction will not apply to the timestamp certificate used to timestamp the code signing certificate or the certificate’s signature hash (thumbprint) until January 1, 2017. After this time, Windows will treat any code with a SHA-1 timestamp or SHA-1 signature hash (thumbprint) as if the code did not have a timestamp signature.
 
Since April 15, 2015, Genus has signed all our software with a SHA-256 code signing certificate. However, until January 29, 2016, the software has been signed with a SHA-1 hash and timestamped with a SHA-1 timestamp.
 
Based on the information available, please note the following consequences:
 
- Effective January 1, 2016, Genus App Platform versions lower than 2015.2, with a (patch) build date of January 1, 2016, or later, will be treated by Windows as if the software was unsigned.
 
- Effective January 1, 2017, Genus App Platform versions lower than 2015.2, with *any* build date, will be treated by Windows as if the software was unsigned.
 
- Effective January 1, 2017, Genus App Platform 2015.2 and higher versions, with a build date prior to January 29, 2016, will be treated by Windows as if the software was unsigned.
 
- Effective January 1, 2017, Genus App Platform 2015.2 and higher versions, with a build date of January 29, 2016, or later will be treated by Windows as fully compliant signed software.
 
See full description from Microsoft at http://social.technet.microsoft.com/wiki/contents/articles/32288.windows-enforcement-of-authenticode-code-signing-and-timestamping.aspx
 
**#22645 - Services, Desktop, Studio - .NET Framework Requirements for Genus Desktop 2016.1 and Genus Server 2016.1**
 
Genus Desktop 2016.1 and Genus Server 2016.1 will require .NET Framework 4.6.1 in order to run. The standard Genus Desktop and Genus App Services installers will ensure that the required .NET Framework version has been installed on the target computer, and direct the user to https://bit.ly/netfx461 to download the .NET Framework installer.
 
The .NET Framework 4.6.1 list of changes may be found here: https://github.com/Microsoft/dotnet/blob/master/releases/net461/dotnet461-changes.md
 
**#22683 - Services - A new license file must be issued by Genus AS and deployed on your server before upgrading**
 
Prior to this version Genus Server would require a "GenusApplicationFrameworkLicense.xml" file located in the "[CommonAppDataFolder]\Genus\Server\Config\" folder (typically translated into "C:\ProgramData\Genus\Server\Config\") in order to operate.
 
Starting with 2016.1, version 16.2.102.0, Genus Server now require that a valid "GenusLicense.xml" file is located in the same folder. Before upgrading to this version you need to contact Genus AS and ask for an updated license file (issued per customer).
 
Upon receiving the new "GenusLicense.xml" file, please copy it into the mentioned folder, and then upgrade Genus Server. After a successful Genus Server upgrade you must delete the old "GenusApplicationFrameworkLicense.xml" file manually.
 
**#22685 - Services - RDBMS statistics is used to improve load performance and reduce memory footprint**
 
Database statistics is read from DB2, ORACLE and MSSQL when available. Updated statistics leads to good performance and reduced memory footprint. A maintenance plan for database statistice is vital for good results. To reduce read operations a local database statistics cache is used. The cache is used for 7 days configurable, or until a new model is deployed.
 
**#22691 - Services, Desktop, Apps - Changed functionality when reading unbound fields on bound data sources**
 
Given a unbound field on an object read from database: If it exists a "Default Calculation", this is calculated. It not, the field will be initialized to null. Previously these fields were not initialized.
 
**#22701 - Desktop - Changed setup for supporting AND and NOT in data marts**
 
To be able to define a control in an analysis used in AND or NOT selections, it was previously necessary to connect the selectable data source to a group in the other data source. From 2016.1 all data sources connected to an other data source via a many-to-many data source be used for the purpose. Connections to groups are no longer supported in 2016.1.
 
**#22720 - Desktop, Services - Updated third party libraries may break existing functionality**
 
The following third party packages have been updated and may break existing functionality. Please test any parts of your application that may be affected before deploying into production.
 
Export/import of Excel spreadsheets, E-mail messages, PDF document generation, Microsoft Project files, Word documents (including mail merge):
 
* Aspose.Cells 8.3.2.1 => 8.8.2.0 (See http://www.aspose.com/docs/display/cellsnet/Release+Notes)
* Aspose.Email 5.0.0.0 => 6.6.0.0 (See http://www.aspose.com/docs/display/emailnet/Release+Notes)
* Aspose.Pdf 10.1.0.0 => 11.7.0.0 (See http://www.aspose.com/docs/display/pdfnet/Release+Notes)
* Aspose.Tasks 8.0.0.0 => 9.4.1.0 (See http://www.aspose.com/docs/display/tasksnet/Release+Notes)
* Aspose.Words 15.1.0.0 => 16.4.0.0 (See http://www.aspose.com/docs/display/wordsnet/Release+Notes)
 
Visual rendering and interaction with maps:
 
* CefSharp.Common 39.0.0.1 => 49.0.1.0 (See https://www.nuget.org/packages/CefSharp.Common/49.0.1 and https://github.com/cefsharp/CefSharp/releases)
* CefSharp.Wpf 39.0.0.1 => 49.0.1.0 (See https://www.nuget.org/packages/CefSharp.Wpf/49.0.1 and https://github.com/cefsharp/CefSharp/releases)
* cef.redist.x64 3.2171.2069.0 => 3.2623.1401 (See https://www.nuget.org/packages/cef.redist.x64 and https://bitbucket.org/chromiumembedded/cef/issues)
 
Import/export of JSON documents:
 
* Newtonsoft.Json 6.0.8.18111 => 8.0.3.19514 (See https://www.nuget.org/packages/Newtonsoft.Json/8.0.3 and https://github.com/JamesNK/Newtonsoft.Json/releases)
 
Visual components for WPF [Timeline, Gantt]:
 
* UI for WPF Q2 2015 SP1 => R2 2016 SP1 (See http://www.telerik.com/support/whats-new/wpf/release-history)
 
Miscellaneous visual components for WPF:
 
* DevExpress DXperience v15.1.3 (v2015 vol 1.3) => v16.1.4 (v2016 vol 1.4) (See ".NET Products" and "WPF Controls" at https://www.devexpress.com/Support/WhatsNew/)
 
Visual rendering and interaction with Diagram:
 
* yFiles WPF 2.5.0.2 => 2.5.0.3 (See https://www.yworks.com/products/yfiles-wpf/changelog)
 
**#22725 - Services, Studio - Node and Node Groups must be configured in order for Services to work**
 
Configuration of Services has been moved from the Genus App Services Configuration tool to Genus Studio.
 
IMPORTANT: For a Genus App Services server to work in 2016.1, you MUST register it as a Node in Genus Studio, located in the Resources folder in the Genus Studio navigation pane.
 
**#22737 - Services - Hosting environment changed for Genus App Services 2016.1**
 
Genus Server 2015.2 or earlier utilized Component Services (COM+) for controlling component pooling and threading of the Genus Server Core Service.
 
Now, with Genus App Services 2016.1 the Core Service has been fully integrated into the Internet Information Services (IIS) Application Pool used by the Genus App Services Web Site. Hence, the Component Services configuration node has been removed from the updated Genus App Services Management Console.
 
In order to configure application pooling properties, like when to recycle to host process, please navigate to
 
Genus App Services Management Console | Internet Information Services | Application Pools | Genus App Services Web Site AppPool
 
and use the actions listed. Genus specific configuration of the Core Service, like maximum number of concurrent Core Service request threads, is controlled by adding/editing relevant properties in the appSettingsOverrides.config directly.
 
**#22739 - Studio - Change in use of personal permissions**
 
For Task, Agent, Web Service, REST Service, Calendar, Contact List and App personal permissions are discontinued. Only group permissions are allowed.
 
This will simplify testing, since the modeller is no longer given runtime permissions to own objects by default.
 
**#22748 - Apps, Desktop, Studio - A change in the Regular Expression component may behave differently from ealier versions of Genus**
 
In Genus version 2016.1 the internal component used for evaluating regular expressions has been replaced during the process of implementing unicode support. As there are syntax differences between implementations of regular expression components, some expressions may no longer work when upgrading to Genus 2016.1.
 
**#22749 - Services - COM+ constructor string "UsePerformanceLog=true" replaced by appSettingsOverrides.config setting.**
 
Genus Server 2015.2 used COM+ for hosting the Core Service. To enable performance logging for the Core Service a COM+ constructor string parameter was provided on the form "UsePerformanceLog=true".
 
As Genus App Services 2016.1 no longer use COM+ for hosting the Core Service, the setting has been moved to the appSettings section of web.config, named "CoreService:PerformanceLogEnabled", with a default value of "false". In order to enable the setting, please override this appSettings parameter in your appSettingsOverrides.config file:
 
```
<configuration>
<appSettings>
<add key="CoreService:PerformanceLogEnabled" value="true" />
[...]
</appSettings>
</configuration>
``` 
 
**#22751 - Desktop - Breaking Change: Reinstall of Genus Desktop 2016.1 required for early adopters**
 
Normally Genus Desktop will automatically detect that an upgrade is needed and make sure that the desktop app with the greatest file version is installed. However, occasionally, this default upgrade method fails. Due to problems with some third party components you will have to do the following on each computer with any pre-release version of Genus Desktop 2016.1:
 
1. Open the "Programs and Features" window, locate "Genus Desktop 2016.1", and select Uninstall.
2. Run GenusSetup.exe with a file version greater or equal to 16.100.21.0. The download URL is on the form http://your.genus.app.services.hostname/download/GenusSetup.exe.
 
Please note that you only need to take action if any pre-release of Genus Desktop 2016.1 has ever been installed on the computer. Computers with Genus Desktop 2015.2 will upgrade successfully to Genus Desktop 2016.1, version 16.100.21.0 or greater.
 
**#22763 - Apps, Services - Breaking change -- Enable TLS 1.2 on Windows Server 2008 R2**
 
Problem
 
As of iOS 10 Apple now requires that all HTTPS communication utilizes the TLS 1.2 protocol. However, this protocol is not enabled by default on Windows Server 2008 R2. Any iOS apps (including those running on the Genus App Platform) on devices with iOS 10 or greater will stop working when communicating over HTTPS with a server that is running on Windows Server 2008 R2 with default configuration.
 
Resolution
 
Any Windows Server 2008 R2 used by an app made with Genus App Platform must be reconfigured to enable the TLS 1.2 protocol. TLS 1.2 has improvements over previous versions of the TLS and SSL protocol which will improve your server's level of security.
 
Note 1: On Windows Server 2012 or greater TLS 1.2 is enabled by default and nothing needs to be done.
 
Note 2: If the HTTPS connection is intercepted by an SSL offloader og load balancer you may need to perform additional configuration to enable the TLS 1.2 protocol.
 
On your Windows Server 2008 R2, open Notepad, copy the lines below between (not including) the "------" markers below, paste into the Notepad window, and save the file as "TLS1.2.reg". Double-click on the file in order to apply the changes to the Windows Registry, then reboot your server.
 
Please refer to the "For later versions of Windows" section at https://support.microsoft.com/kb/245030 for full details.

``` 
Windows Registry Editor Version 5.00
 
[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols\TLS 1.2]
 
[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols\TLS 1.2\Client]
"DisabledByDefault"=dword:00000000
"Enabled"=dword:00000001
 
[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols\TLS 1.2\Server]
"DisabledByDefault"=dword:00000000
"Enabled"=dword:00000001
```
 
**#22786 - Desktop - New TabStop property defined for Group and GroupBox in Forms**
 
In GroupBox and Group, a new property TabStop has been defined to include the group in the tab-sequence and allow the actual group to gain focus. When adding a new GroupBox to a Form, TabStop will be enabled, while simple groups will not have this property enabled initially. For existing Forms, it will be necessary to set this property manually if TabStop is desired.
 
 
**#22793 - Apps, Services, Desktop - Withdraw breaking change #22144 - Comparison with NULL no longer translated to IS NULL / IS NOT NULL**
 
Comparison with NULL is now translated to IS NULL | IS NOT NULL when generating SQL from logic expressions.
 
Example:
 
Expression:
```
Person.Employer = Company
```

SQL:
a) Company has value: `Person.Employer = 'a-company-id'`
b) Company has no value: `Person.Employer IS NULL`
 
**#22797 - Desktop - Use of Hierarchies in table cells**
 
To use a hierarchy when pushing the search button on a table cell, a Hierachy must be defined on the cell. We no longer try to find a hierarchy automatically that fits.
 
**#22703 Oracle Managed Driver**
 
Genus Server 2016.1 greatly simplifies the installation task for Oracle users as compared to Genus App Services 2015.2 and earlier versions. Earlier versions required a manual and error-prone installation procedure for Oracle ODP.NET Unmanaged Driver (both 32 bit and 64 bit versions). The 2016.1 version now includes the new Oracle ODP.NET Managed Driver. As of this version, the required software is redistributed with Genus App Services. No extra download and installation is involved.
 
Requirements
 
Genus App Services 2016.1 introduces the following requirements:
 
* No Oracle driver has been globally installed (e.g. the configuration section name "oracle.manageddataaccess.client" is not globally defined). Any such global installation must be uninstalled.
* Any connection details in tnsnames.ora has to be converted to the EZ Connect connection string format.
 
Configuration
 
The configuration section <oracle.manageddataaccess.client> section may be customized according to the Oracle documentation “Oracle Data Provider for .NET, Managed Driver Configuration” (http://docs.oracle.com/cd/E63277_01/win.121/e63268/InstallManagedConfig.htm). Please note, however, that any changes made here will be overwritten next time Genus Server is installed.
 
All customizations are to be done here:
 
C:\Program Files\Genus\Server\wwwroot\Web.config

## Major new functionality

**#22503 - - The model can be translated to even more languages**
 
Genus now supports 14 different languages in the Translate Directory tool. More will be added on customer demand.
 
The support for multi-languages is finalized, and all parts of Genus supports Unicode.
 
**#22606 - Studio - Introduction of Read Only exception handling in Forms**
 
Layout Groups and field controls in Forms now has a new property, Ignore inherited Read Only.
 
For example, If you set the entire view to read only and one button has this property set, the button will ignore the Read Only from parent groups and the user are able to press the button.
 
If a Layout Group has this property set, then all controls in this layout group ignores if any parent Layout Groups are read only.
 
**#22607 - Studio - Converting events in Forms**
 
Forms (and Analysis) have now replaced Events with Commands and Events.
 
The layout of Commands is quite similar to the replaced events where one sets up what the command do.
 
E.g. an Open a Form command describes how to open the new Form. In Events, we define when the command should run. E.g. click of a button or the right button in a grid.
 
The advantage of dividing this up are many, but one of the obvious is reusability. You can now create a command that connects up both the right buttons in a list, Click on a Modify button and put the same command on a Ribbon button.
 
**#22608 - Studio - Combined commands in Forms**
 
Combined is a new command in a Form. This command contains other commands. By using a combined command for example in a right-button menu, you can run multiple commands. This was not possible earlier.
 
We have also removed Sort Commands (on Form level) that was used to set the order when you had more than one On Form Load command. To get the same functionality now, create a Combined Command with the other commands running sequentially inside this again. A Combined command may also contain other Combined commands.
 
**#22616 - Services, Apps - Trusted Zone Authentication**
 
A new Genus Apps authentication feature has been introduced for scenarios where Genus Server is protected within a trusted zone where all incoming HTTP(S) requests are routed through a reverse proxy server that handles the user authentication. The reverse proxy server will add a special HTTP header whose value is the identity of the authenticated user.
 
All Genus Apps requests must be sent to Genus Server on the form
 
https://myservername.mydomain.com/mydataset/api/public/mobile/......
 
where word “public” in the URL indicates that Genus Apps will not perform any authentication on its own.
 
In order to use Trusted Zone Authentication, the following configuration must be performed:
 
1. Enable automatic creation of native user accounts for the account profile to be used (only one account profile may allow this) by executing an SQL statement like
 
```
UPDATE g_account_profile SET allow_create_native_account = 1 WHERE .......
```
 
2. Add the following line in appSettingsOverrides.config file within the `<appSettings>` section:
 
```
<add key="TrustedZoneAuthentication:IdentityHeaderName" value="X-YourCustomHeaderName"/>
```
 
If appSettingsOverrides.config does not exist, create a new file named appSettingsOverrides.config located at the same directory as web.config (for 2016.1 this normally is C:\Program Files (x86)\Genus\Server\wwwroot) with the following content:
 
```
<?xml version="1.0" encoding="utf-8"?>
<appSettings>
<add key="TrustedZoneAuthentication:IdentityHeaderName" value="X-YourCustomHeaderName"/>
</appSettings>
```
 
IMPORTANT: In both cases, replace "X-YourCustomHeaderName" with a unique header name of your choice. The reverse proxy server must always remove any incoming instances of this header (to prevent compromising the security) and then add its own instance like
 
```
X-YourCustomHeaderName: account-ident-of-authenticated-user
```
 
where "X-YourCustomHeaderName" corresponds to your header name configured in appSettingsOverrides.config and "account-ident-of-authenticated-user" is the actual identity value from an external identity provider. The value will be matched against gd_account.acc_logon_name and if no matching instance is found a new account with the specified value will be created automatically.
 
**#22687 - Apps - New Command: Combined**
 
Combined command block opens the possibility to group other commands that are to be executed. It will execute all sub commands before moving on to the next command in line. It also has the option to execute all the containing commands asynchronous. Asynchronous operation should only be used on independent data as actual order of execution cannot be guaranteed.
 
**#22688 - Apps - New commands: Execute Command**
 
Execute command will let you invoke another command. This allows for more reusable logic and tidier structure of your application. Must be used with caution as it also makes it possible to create infinite loops.
 
 
**#22689 - Apps - New Commands: Throw Exception, Catch Exception, Redirect Execution**
 
Three new commands for custom exception handling allows for more client side logic and better end user experience.
 
Throw Exception: Use this to put a command execution chain in an error state. Running a command like this will make the application ignore any subsequent commands except for Catch Exception of matching type.
 
Catch Exception: This command will be executed if one of the preceding commands throws a matching exception type. In any normal situation, this command will be skipped. It behaves like a Combined command that can have multiple sub commands. It is useful for showing meaningful and application specific messages to the end user. Subsequent commands will be executed as normal unless Redirect Execution is used.
 
Redirect Execution: This special block can be used inside Catch Exception and will control the flow of execution.
 
**#22707 - - Genus Desktop goes 64-bit on Windows**
 
The old 32-bit Windows platform is left behind for good and the focus is solely on 64-bit editions of Windows 7 or later, in order to make things simpler for our customers and focus our energy on a single technology.
 
**#22708 - Desktop - Introducing Ribbon and a revamped Action user interface**
 
This huge packet of changes includes:
- Ribbon replaces the window menu and toolbar.
- Assign graphical symbols to your most important and most used actions and give them a visible place in your Ribbon.
- Define one or more additional Ribbon sections, and put seldom used actions there.
- Use contextual tabs in Ribbon to make commands easier to find.
- The task pane is in its entirety replaced by actions in Ribbon.
- New Navigation Pane with an MS Outlook-inspired navigation bar.
 
All modelleres at our partners and customers will be offered training session in modelling Desktop applications using Forms.
 
**#22709 - Desktop - Layout groups with repeating content introduced in Desktop similar to Apps**
 
Introducing layout groups with repeating content (“repeating section” or "repeating card"), similar to existing functionality on Genus Apps. This makes it possible to define an even more dynamic user interface by repeating layout groups bound to data vertically and/or horizontally in your desktop forms, like making a calendar.
 
**#22712 - Desktop, Apps, Studio - Today's custom symbols is replaced by a large symbol library**
 
Support for custom symbols will no longer be available.
 
**#22713 - Services - Introducing Calendar and Contact sharing**
 
Define Calendars in your application model, like customer meetings from your Genus CRM application or events from your Genus social app, and share them with others. Subscribe to calendars by add an subscription on your mobile device, in your MS Outlook, or similar.
 
Define Contacts in your application model, and share them to your mobile device or to MS Outlook, or similar.
 
Both Calendars and Contacts are shared read-only, but each shared item contains a link, so you can open your app and inspect or edit the Calendar item or the Contact.
 
**#22715 - Apps - Introducing drag & drop of objects**
 
**#22718 - Services - Genus Server changes name to Genus App Services, with the following enhancements**
 
Extending our support for consuming of HTTP RESTful services. Also, two types of exposed HTTP RESTful services will be available. One is a simple exposure of application data, which will be possible to turn on/off on each Object Class without requiring further modelling. The other is modelling of more complex services, similar to the existing modeling of SOAP based services. All our RESTful services use the JSON format.
 
New and improved Genus App Services installer built on the WiX Toolset.
 
Introducing administration of app services by defining nodes and logical grouping of nodes into groups. A node can be configured to run one or more app services. Directory objects such as data marts, web services, and agents, are deployed to a node group. Each member of a node group is connected to a node and a data set. Objects deployed to a node group is processed by any node within that group which provides the requested app service for a given data set.
 
**#22734 - Apps, Studio - Added functionality to scan barcodes and QR-codes**
 
Mobile apps (Android, iOS and Windows) can now use the built in camera to scan barcodes and QR-codes
 
**#22736 - - Integrated Symbol Library is now available for use in Genus.**
 
The integrated library of symbols is availabe for use in design of forms, ribbon, conditional formatting, apps and supercedes the previous options available where it was possible to add any symbol to the solution. The library is kept updated and contains a large number of high quality symbols for both desktop and apps use.
 
**#22746 - Desktop - Diagram Control now offers bookmark capabilities by storing selection and layout.**
 
The Diagram Control now offers persisting of node selection. The selection can both be stored with or without node position.
 
The bookmark storage is implemented through an arbitrary blob field defined in an object class, where selections are stored as named bookmarks per diagram view.
 
**#22821 - Services - Genus App Services now runs on Windows Server 2016**
 
Windows Server 2016 Standard and Windows Server 2016 Datacenter editions offer three installation options: Server Core (recommended by Microsoft), Server with Desktop Experience and Nano Server. Genus App Services now runs on Windows Server 2016, Server Core and Server with Desktop Experience. The Nano Server installation option is not supported.
 
Please note that the Server Core installation option does not include graphical tools like the Internet Information Services (IIS) Manager or the Event Viewer. Hence, you have to resort to command line (e.g. PowerShell) or remote administration (e.g. using management console installed on a remote computer). The Genus App Services installation wizard and the Genus Configuration tool, however, works with a graphical user interface (GUI) on both installation options.
 
See https://technet.microsoft.com/en-us/windows-server-docs/get-started/windows-server-2016 for more information on Windows Server 2016 installation options.
 
**#22697 SSO Configuration for Genus Apps for web**
 
Disclaimer:
* The description below is an example of configuration steps you need to perform and may have to be customized according to your deployment environment and security guidelines.
 
Scenario:
* You are configuring a solution using Genus Apps for Web.
* The user must be able to sign in automatically using default Windows credentials, i.e. SSO.
* Extra for delegation: The user’s credentials should be available for Kerberos delegation, i.e. Genus App Services (aka Genus Server) should be able to use the supplied credentials from the client’s request when calling external services as part of producing the response to the client.
 
Required configuration:
* Both the client computer and the servers hosting Genus App Services must be members of the same Active Directory domain.
* Configure SPN (Service Principal Name) for the Windows server(s) hosting Genus Apps for Web and Genus App Services, if the fully qualified hostname in the URL (“daserver”) being used is not identical to the NetBIOS hostname (“daserver1”):

   On your domain controller, open a Command Prompt and write the following in order to register SPN “http/daserver” for computer account “daserver1”:

   ```
   setspn -S http/daserver daserver1
   ```
 
   Please make sure that the DNS record for the fully qualified hostname (“daserver”) is defined as an A record, not a CNAME record.

   The SPN configuration described above applies when the Genus App Services Web Site AppPool is running using the default “Network Service” account. If multiple Genus App Services instances are located behind a load balancer you have to create a new, common domain account, e.g. “dauser”, configure each Genus App Services Web Site AppPool to using that account and then run the following alternative “setspn” command line (where “daserver” is the load balancer URL hostname):

   ```
   setspn -U -S http/daserver dauser
   ```
 
   For more documentation and examples on “setspn”, please refer to https://technet.microsoft.com/library/cc731241.
 
* Enable Integrated Windows Authentication for your client web browsers if URL hostname differs from the NetBIOS hostname:
 
   Enabling Intranet Zone used by Internet Explorer, Microsoft Edge, Google Chrome, and Chromium:
 
   * Alternative 1: Add the URL hostname to the Intranet Zone on each client computer: Open the “Internet Options” desktop app, select the Security property sheet, select the “Local intranet” security zone, click Sites, then Advanced. Enter the hostname in the “Add this website to the zone” textbox and click Add. The textbox accepts wildcard expressions like “*.mydomain.com”.
   * Alternative 2: Add a group policy on your domain controller under “Computer Configuration/Policies/Administrative Templates/Windows Components/Internet Explorer/Internet Control Panel/Security Page”. Enable “Site to Zone Assignment List” and enter the zone assignments with each hostname (or *.mydomain.com wildcard) as Value name and “1” as Value.
   * Please refer to https://technet.microsoft.com/en-us/itpro/internet-explorer/ie11-deploy-guide/group-policy-objects-and-ie11 for details.
 
* Google Chrome and/or Chromium only (not needed if “Intranet Zone” is configured as described above), see https://dev.chromium.org/administrators/policy-list-3#AuthServerWhitelist:
 
   * Alternative 1: Add one of the following registry entries, where “daserver” represents the URL’s fully qualified hostname, a comma-separated list of multiple names, or simply “*” (not recommended).

      * For Google Chrome:

      ```
      [HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Google\Chrome]
      "AuthServerWhitelist"="daserver"
      ```

      * For Chromium:

      ```
      [HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Chromium]
      "AuthServerWhitelist"="daserver"
      ```
   * Alternative 2: Use group policy, see https://dev.chromium.org/administrators/policy-list-3 for details.
 
* Enable Integrated Windows Authentication for Firefox:
 
   Configure the “network.negotiate-auth.trusted-uris” setting as described in

   * “Configuring Firefox to use Kerberos for SSO” at https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/5/html/Deployment_Guide/sso-config-firefox.html, and
“Integrated Authentication” at https://developer.mozilla.org/en-US/docs/Mozilla/Integrated_authentication
 
* Extra configuration needed for delegation:
 
   On your domain controller, open the Active Directory Users and Computers MMC, navigate to the computer object representing the server(s) to be added for delegation, select Properties and then the Delegation property sheet. Select “Trust this computer for delegation to any service (Kerberos only)” and click OK.
 
   Enable the Genus App Services setting “Authentication:ImpersonationEnabled” by adding the following to your appSettingsOverrides.config file:

´´´
<add key="Authentication:ImpersonationEnabled" value="true"/>
´´´
 
   Google Chrome and/or Chromium only: Enable the AuthNegotiateDelegateWhitelist setting (see https://dev.chromium.org/administrators/policy-list-3#AuthServerWhitelist):
   * Alternative 1: Add one of the following registry entries, where “daserver” represents the URL’s fully quailfied hostname, a comma-separated list of multiple names, “*.mydomain.com”, or simply “*” (not recommended).
   
   For Google Chrome:

   ```
   [HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Google\Chrome]
   "AuthNegotiateDelegateWhitelist"="daserver"
   ```

   For Chromium:

   ```
   [HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Chromium]
   "AuthNegotiateDelegateWhitelist"="daserver"
   ```
 
   * Alternative 2: Use group policy, see https://dev.chromium.org/administrators/policy-list-3 for details.
 
   Firefox only:

   * Configure the “network.negotiate-auth.delegation-uris” setting as described in

      “Configuring Firefox to use Kerberos for SSO” at https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/5/html/Deployment_Guide/sso-config-firefox.html, and
      “Integrated Authentication “ at https://developer.mozilla.org/en-US/docs/Mozilla/Integrated_authentication

## Minor new functionality

**#22185 - Apps - Camera picture quality**
 
Added support for modellers to set max height and width on pictures uploaded from camera.
 
**#22199 - - Introducing a Commit option on the Delete effect in Forms**
 
Use case: Form without auto save (persistence), but where it exists other data sources edited by one way binding (i.e. changes on these shall not result in a save of the main object). Before introduction of this option, the same functionality had to be modeled by defining a task where data are transfered by one way binding. Further, in the task one had to define effects to confirm deletion (Show a Confirmation Message). We recommend you to review your model, to see if the option may remove som modeling.
 
**#22277 - - Viewing Execution History**
 
For Reports, Analysis, Data Extracts, Tasks, Agents and Web Services you can view the Execution History in separate columns. This is now default turned off (due to performance), but may be turned on per concept (Reports, Analysis etc) in the View menu.
 
**#22500 - - Improved functionality for browsing through relational operators in Expression Editor**
 
It has been possible to change relational operators in the expression editor both by using the F2 key to select the next operator. The functionality has been improved by also enabling Shift+F2 to select the previous operator.
 
**#22502 - Studio, Desktop - New object functions in the Genus Application Framework Language**
 
The following function can be used to check wether an object is valid, is persisted (stored in the database), and is modified:
 
isValid
isPersisted
isModified
 
**#22505 - - Genus Desktop: Custom message box replaced by standard Windows message box**
 
Previous versions used a custom message box for displaying messages to the end user. This message box is now replaced by the standard built-in message box provided by Windows.
 
Note that since this is a system dialog all language strings are translated according to the settings on the computer and not the selected language in Genus (the custom message box translated all language strings according to the selected language in Genus).
 
**#22508 - Apps - Performance improvement in repeating section**
 
Repeating section controls with an explicitly set height and that exist inside a scrollable group will get a performance boost. This boost is mainly noticeable when the control is bound to a data source with a large number of objects in it.
 
**#22516 - Apps - Set active object in a selection with an effect**
 
The following new effects allow you to set the active object in a selection:
- No object
- Selected object (only when binded to code domain)
- First object
- Last object
- Next object
- Previous object
 
**#22518 - - Enable Browse Objects are now default true**
 
Occurs when datafilter in a Open Form event is set to One Way
 
**#22528 - - Removed limit on number of objects in lookup of objects entered in a multireference edit control.**
 
In earlier versions of Genus Desktop, the number of objects that could be looked up simultaniously when entering text in a multireference edit control was restricted due to limitations in older database implementations (size of LIKE expressions). This problem does not exist in current databases so the limit on lookups has now been removed.
 
**#22541 - - Genus Desktop: Performance optimization of opening large Forms**
 
**#22553 - - New Unicode escape sequences available in Genus advanced expression string literals**
 
Genus advanced expressions ("formulas") supports all C# string literals (https://msdn.microsoft.com/library/aa691090), both verbatim string literals (prefixed with @) and regular string literals. This includes "simple-escape-sequence" (see https://msdn.microsoft.com/library/aa691087), i.e. one of

`\' \" \\ \0 \a \b \f \n \r \t \v` 
 
As of version 2016.1 Genus advanced expressions now also includes escape sequences used to represent any Unicode character, i.e. "hexadecimal-escape-sequence" (see https://msdn.microsoft.com/library/aa691087)
 
`\x hex-digit hex-digit(opt) hex-digit(opt) hex-digit(opt)`
 
and "unicode-escape-sequence" (see https://msdn.microsoft.com/library/aa664669)
 
`\u hex-digit hex-digit hex-digit hex-digit`
`\U hex-digit hex-digit hex-digit hex-digit hex-digit hex-digit hex-digit hex-digit`
 
Please refer to the full "The C# Language Specification" (http://go.microsoft.com/fwlink/?LinkId=199552) for details.
 
**#22558 - Desktop - Add a title/icon to messages displayed by the Show a Message / Show a Confirmation Message effects**
 
Note that the title does not represents the dialog title, but is part of the message (main instruction).
 
Since Microsoft no longer recommends using the question-mark message icon which was displayed by the "Show a Confirmation Message" effect, you can now specifiy an icon in the setup for this effect. By default the effect does not display an icon.
 
Quote from MSDN:
_"The question-mark message icon is no longer recommended because it does not clearly represent a specific type of message and because the phrasing of a message as a question could apply to any message type. In addition, users can confuse the message symbol question mark with Help information."_
 
The "Show a Message" effect has always provided the possibility to specify an icon, but you can now also choose not to display an icon.
 
Applies to Genus Desktop.
 
**#22561 - Apps, Services, Studio, Desktop - Integer.toReal() and LargeInteger.toReal() introduced in Genus advanced expressions**
 
New type converter functions `Integer.toReal()` and `LargeInteger.toReal()` are introduced. Normally, expressions expecting a value of type Real already implicitly converts Integer and LargeInteger values to Real. However, in special cases you may want explicit control of a value's datatype by using the introduced toReal() functions.
 
**#22562 - - Allow running "Create a Data Aggregate" without binding any dimensions**
 
The effect does no longer require that dimensions in the base data source are bound to one or more fields in the data source which data are aggregated into. That is, it is now possible to extract a single aggregated measure, such as the maximum date, from a base data source.
 
**#22564 - Studio - Data Mart - Automatic publication of display name field for code domains**
 
When adding a code domain as a data source, the display name field is now automatically published.
 
**#22565 - - "Search Properties" setup for an Object Class - properties no longer expanded on double click**
 
Applies to Genus Studio.
 
**#22573 - Desktop - Improvements to the PDF previewer in Forms**
 
Added commands for
- Advancing to the next page / returning to the previous page
- Zooming (fit to page, fit to page width, actual size)
 
By default the document is zoomed so that the width of the page matches the width of the control.
 
In addtion the current page number and total number of pages are displayed.
 
**#22576 - Studio - Genus advanced expressions now calculates ISO 8601 Day of Week**
 
A new function "Iso8601DayOfWeek" is introduced in the Date and DateTime classes to complement the existing "DayOfWeek" function.
 
The existing "DayOfWeek" function returns Sunday = 1, Monday = 2, ..., Saturday = 7 (i.e. the first day of week is Sunday).
 
Based on the ISO 8601 standard the new "Iso8601DayOfWeek" function returns Monday = 1, Tuesday = 2, ..., Sunday = 7, i.e. using Monday as the first day of week.
 
**#22580 - Apps - Animated Open View effect for apps**
 
**#22581 - Apps - Animated Switch View effect for apps**
 
**#22587 - Studio - New functions for checking permissions to an object**
 
The following object functions has been added to the Genus Application Framework Language:
 
`hasModifyPermissions()`
`hasDeletePermissions()`
 
Can be used to check if a user has modify- or delete permissions to a given object. Returns TRUE if the user has the requested permissions.
 
**#22588 - Desktop - Extended customisation of Series Labels in Chart control**
 
The chart control now offers the numeric formatting specified on functions or object class properties when presented as Series Label. Hint: Series Labels are the textual visualisation of a series point within the chart.
 
**#22589 - Studio - Advanced expressions: New Stream functions FromBase64UrlString() and ToBase64UrlString() introduced**
 
Two new Stream functions have been added: FromBase64UrlString decodes a Base64Url encoded string and creates an instance of a binary Stream, while ToBase64UrlString takes a binary Stream and encodes the binary contents into a Base64Url string. The "Base64Url" encoding is almost identical to the "Base64" encoding, except that a Base64Url encoded string removes the original '=' character padding and replaces all occurrences of '+' by '-' and '/' by '_', such making the resulting string more URL friendly than the traditional Base64 encoding. See https://tools.ietf.org/html/rfc4648#section-5 for more information.
 
**#22590 - Desktop - Reintroduced filtering on fields in the Pivot control.**
 
Fields/(properties) can be bound to the row, column or filter- area. By using the Pivot- field chooser, a field can be moved between these areas.
 
**#22591 - Apps - New event handler: On Value Changed**
 
Genus Apps can now listen to one or more properties on an object and execute an action when the value on one of these properties change.
 
**#22595 - Apps - Introduced client side e-mail address validation on TextEdit control**
 
**#22605 - Studio - Introduced sequence number on symbols**
 
All symbols are now assigned a sequence number to make it possible to identify them across application models.
 
**#22609 - Desktop - Possible to open Form and Table in read only mode**
 
Press Ctrl + Shift when opening a Form or a Table to open them in read only mode.
 
**#22613 - Desktop - Management of formatting in grid reports has been moved into a separate dialog.**
 
**#22622 - Desktop, Services - New DateTime and CalendarTime functions added to Genus App Platform Advanced Expressions**
 
New functions have been added for conversion between Coordinated Universal Time (UTC) and local date and time:
 
- CalendarTime.convertLocalTimeToUtc(localTimeValue)
- CalendarTime.convertUtcToLocalTime(utcValue)
- DateTime.convertLocalTimeToUtc(localTimeValue)
- DateTime.convertUtcToLocalTime(utcValue)
 
Please see details below.
 
CalendarTime.convertLocalTimeToUtc(localTimeValue)
Converts the specified local date and time to Coordinated Universal Time (UTC).
 
Return Type: CalendarTime
 
localTimeValue
Type: CalendarTime
The local date and time to to be converted to Coordinated Universal Time (UTC).
 
CalendarTime.convertUtcToLocalTime(utcValue)
Converts the specified Coordinated Universal Time (UTC) value to the local date and time.
 
Return Type: CalendarTime
 
utcValue
Type: CalendarTime
The Coordinated Universal Time (UTC) value to be converted to local date and time.
 
DateTime.convertLocalTimeToUtc(localTimeValue)
Converts the specified local date and time to Coordinated Universal Time (UTC).
 
Return Type: DateTime
localTimeValue
Type: DateTime
The local date and time to to be converted to Coordinated Universal Time (UTC).
 
DateTime.convertUtcToLocalTime(utcValue)
Converts the specified Coordinated Universal Time (UTC) value to the local date and time.
 
Return Type: DateTime
utcValue
Type: DateTime
The Coordinated Universal Time (UTC) value to be converted to local date and time.
 
**#22623 - Studio - Updated hierarchy options**
 
Changed references from Analyzer to Reports in Hierarchy, Object Class and Object Class Properties dialogs.
 
**#22624 - Desktop - Added support for dragging emails from Outlook into FileName fields in Forms.**
 
**#22626 - Desktop - Introduced visibility property on layers in analysis map**
 
A Layer in a map has now a visibility property. If set to no, the layer will be kept invisible until the user explicitly turns it on.
 
**#22627 - Apps, Studio - FilterData command for Genus Apps**
 
A new client side filtering effect is now available for Genus Apps. This can be used to achieve same functionality as the SearchBox, but with greater design freedom. When applied to a data source, the data source will narrow down the output to all bound controls according to the filter input. It can filter on multiple fields using exact matching, string search (contains) and fuzzy matching. This effect will run on the client, making the filtering very fast.
 
**# 22629 - Studio - Services moved to a separate group in the Directory pane ("Services")**
 
The group contains three entries:
- Web Services (previously contained in the "Logic" group)
- Calendars (new)
- Contact Lists (new)
 
**#22632 - Desktop - Improved menu for file actions**
 
In the context-menus of file objects in Forms and Tables, Genus displays file actions for the files provided Windows. We have improved the way these actions are resolved so that the menu is more similar to the menu displayed in the Windows' File Explorer.
 
**#22640 - Studio - Commands defined with Control = Form are now always available**
 
These commands may be used across views. Previously these could only be used on Events defined on Control = Form.
 
**#22647 - Apps - Improved error message when user is disabled.**
 
**#22649 - Studio - Allow one-way or two-way binding from a persistent to a non-persistent data source**
 
It is now possible to bind a data source which is persistent (e.g. in a form) to a data source which not is persistent (e.g. in a task).
 
If data are bound one-way from a persistent to a non-persistent data source, there is no requirement that objects in the source are saved since the target cannot persist data.
 
**#22651 - Apps - It is now possible to hide apps from the appslist**
 
This can be used to hide apps which are only intended to be opened from a link with parameters.
 
**#22653 - Desktop - Setup for automatic refresh available in Analysis**
 
**#22655 - Studio - Introduced Default as a data filter option for public shortcuts**
 
When filtering a shortcut you will find Default available as an option. Default implies using the Form setup.
 
**#22657 - Studio - Find references now prevents deletion of published tasks**
 
To delete a task you have to delete or remove all places in which the task is in use. Previously task publication was considered a part of the object and deleted when you deleted the task. Now you will be notified that these task publications must be explicitly deleted if you try to delete a task.
 
**#22659 - Studio - Simpler selection of Data Interpretation.**
 
The Data Interpretation selection list in the Properties dialog is now a list where the Simple types comes before the Complex types, visually divided with a seperator.
 
**#22665 - Apps - Added support for 64 bit integer values**
 
**#22667 - Apps - Authentication suffix no longer required in URL on web**
 
When setting up a new web installation of Genus Apps, it is no longer required to put the authentication method as a suffix in the app server URL. That is, /an, /ad or /fe can be left out.
 
NOTE: This change only affects the web client; it is still required when adding servers on the Genus app client.
 
**#22668 - Studio, Desktop - Display summary fields in a group box title**
 
Applies to the group box control in forms (desktop).
 
Summary fields is used to provide quick access to information contained within a group box. The fields appear to the right in the group box title, and is by default displayed when the group box is collapsed.
 
A summary field is defined by providing a label and a data binding. By default the value is displayed in the group box title, and the label and value is displayed in the tool tip. However, you can choose to include the label in the group box title.
 
Summary fields replaces previous functionality provided by the "Collapsed Label" property.
 
**#22670 - Studio - Find Local Reference introduced in Form**
 
Data source, field, view, comand and task have a new menu item Find Local Reference, which returns any references to the object internally in the Form.
 
**#22680 - Apps - New set cursor (focus) command**
 
This command is available for all UI controls.
 
**#22681 - Desktop - Calendar Popup offers button for selecting "Today"/"Now"**
 
New implementation of DateTimeEdit control reintroduces "Today"/"Now" button in the calendar popup.
 
**#22682 - Desktop - Remove recent Searches from the recently used list**
 
It is possible to remove recent Searches by using the delete button next to the search in Ribbon.
 
**#22684 - Desktop, Services, Studio - New collection function "emptyIfNull()"**
 
In a few cases you have a collection that may be null but you want to treat it as an empty collection. A new advanced expression function has been introduced
 
`instance.emptyIfNull()`
 
which returns an empty collection if the instance is null. If the instance is not null the instance itself will be returned.
 
**#22692 - Desktop, Apps, Services - New Filter Type for population of data sources**
 
The filter type "Create Object" is now available for non-persistent data sources.
A single object, with its default values set, is created and put in State Synchronized.
The filtering type is a handy alternative to using a local task for creating a control object in a form.
 
**#22698 - Desktop - Number of recent objects to display**
 
It is now possible to configure per user the number of items available i previous searches, reports etc.
 
**#22699 - Desktop - Pin object to recent list**
 
It is now possible to pin / unpin objects (reports, analysis, searches) in the Recent Items lists.
 
**#22700 - Apps - New event type, On Before Active Object Changed**
 
With On Before Active Object Changed (available on Form level), you can perform commands before the selected datasource is recalculated. Applicable when wanting to perform commands before a datasource gets a new value, e.g. save current changes before a new selection is triggered.
 
**#22702 - Desktop - Improved Image Control**
 
The Image Control is now bindable to a thumbnail. The control will understand that the image is a thumbnail and fetch the original sized image when clicked. Fetch of the original sized image is done asynchonous towards our file service.
 
**#22704 - Studio - Bind text control in an analysis to data**
 
Enabled support for binding a text control to data. The control can be bound to any primitive or complex data type.
 
**#22710 - Desktop - Reengineered and improved edit controls**
 
Reengineered and improved edit controls (text, number, date, combo box), both in terms of user friendliness and speed.
 
**#22711 - Desktop - Collapsible groups in Forms**
 
Revamping collapsible groups in Forms, to make you able to reduce your number of tabs. The tab concept is not removed, rather it is extended with style "tab" or "group". You will be able to make collapsible group headings by assigning fields to the headings.
 
**#22714 - Apps, Desktop - Map Control Enhancements**
 
Meta model adjusted to more closely resemble the OpenLayers concepts.
Selection of multiple points or objects.
Binding of color to data.
 
**#22717 - Desktop - Improved Diagram Control**
 
Persistence of Node location.
Support for even higher amounts of data (nodes and edges).
Improved placement of edge labels.
Improved visual separation of edges.
 
**#22721 - Apps - Automatic reporting of unhandled exceptions in Genus Apps**
 
Genus Apps now has automatic reporting of unhandled exceptions/crashes. The report will be submitted to a third party vendor, but will only be accessible to the Apps developer team. This functionallity wil be enabled by default, but can be disabled with a server setting.
 
**#22722 - Studio - GPS-location stored in image files is now available in data sources of type General File**
 
**#22724 - Services - SQL Server 2016 is now supported by Genus.**
 
**#22726 - Studio - Sign In History**
 
In Studio | Security | Users, four new columns are added in the column group "Sign In History":
Last (date), Last month (number of sign ins), Last year (number of sign ins) and Total (number of sign ins).
The columns are initially not visible. Use Field Chooser.
 
**#22735 - Desktop - Support for custom keyboard shortcuts for commands defined in the ribbon.**
 
Custom keyboard shortcuts for commands is now available and can be defined in the "Customize Ribbon" dialog.
 
**#22741 - Apps, Desktop - One-way or two-way binding of subgroups from actions**
 
Added option "Current Object" in the data filter setup for a two-way or one-way bound data source. If "Current Object" is selected it is possible to filter data on a subgroup.
 
Provides similar functionality as the "Single Selected Object" option available in Forms and Table with a few restrictions:
 
- "Current Object" can only be applied at the root level in a data source, that is, the first junction in the binding setup.
- The data source cannot contain more than one object. That is, "Max Occurences" is set to "One" in the setup for the data source, or the effect is contained within a block which enumerates objects in the data source.
 
Example:
 
Task 1 - Deactivate Contacts
 
Data Sources:
Contacts, Max Occurences = "Unbounded"
 
 
Task 2 - Deactivate Company
 
Data Sources:
Company, Max Occurences = "One"
 
Actions:
Run a Task
Task: Deactivate Contacts
Data Filter: Two-way binding -> Deactivate Contacts.Contacts = Company.CurrentObject.Contacts
 
**#22742 - Desktop - Support for new symbols added in map for desktop**
 
**#22745 - Apps - New event type OnActiveObjectChange available for Genus Apps**
 
Client side event OnActiveObjectChange is available. This will enable the app to trigger command execution when active object in any data source changes. The event will trigger after any side effects, like filtering, of the selection change. If any of the commands executed refer to active object in the data source, it will get the new active object.
 
Will trigger in the following transitions:
1 -> 0
0 -> 1
1 -> 1 (different object)
1 ->many
many -> 1
 
**#22752 - - Default location for cross-session file cache**
 
Default location for cached data on a client can be overridden by specifying an environment variable or absolute path in HKEY_CURRENT_USER\SOFTWARE\Genus\Client\LocalAppData
 
**#22753 - Desktop - New Recent Items under Open Menu**
 
Under the Open Menu in the Files Menu, there is a new entry. Recent Items. This Entry lists all recent items across concepts in one list.
 
**#22757 - Desktop - The Diagram control has been extended with the following features**
 
These features are, both directly and indirectly, addressing issues related to performance while working with large graphs.
 
- Manuel position of nodes: Offers custom node layout by turning layout algorithm off
- Bookmark diagram layout: Node visibility, position and current layout algorithm is persisted per diagram view in a customer defined storage
- New panel for simplifying hide/ show of nodes and node types
- Performance optimization when working with large graph: Optimised selection and layout passes
- Initially hide all nodes of a specific type
- Expand selected on nodes – This supports the workflow of starting with an empty/small graph, and expanding the graph as you discover relevant connections
- Expand graph by including nearby selected nodes: In addition to include Inbound/ Outbound nodes, user may now select specific nodes from both in- and outbound edges
 
**#22759 - - Support for SSE4.2 instruction set**
 
In the SSE4.2 instruction set, some bit-counting operations are introduced which improves performance significantly, specially in analysis related operations.

Genus supports older processors, but with significant performance penalty.
 
**#22764 - Studio - Expand on double click removed as default action**
 
In the tabular view for directory objects which contains subfolders, the object is no longer expanded on double click. E.g. if you double click on an Object Class, the default action which opens the Object Class dialog is run. If you want to expand subfolders, right-click the object, and then in the shortcut menu select "Expand" (keyboard shortcut: SHIFT+ENTER).
 
**#22765 - Studio - Genus Studio - Reorganized directory tree entries**
 
1) "Nodes" and "Node Groups" moved from group "Resources" to "Services".
2) "Sign in History" moved from group "History" to "Security".
3) "Execute History" moved from group "History" to "Services".
 
"Resources" and "History" groups removed.
 
**#22770 - Studio - Custom colors and color selection history is now saved between sessions.**
 
**#22771 - Studio - Fixed paste into color-fields in Form Designer**
 
The color fields now supports common string color representations, includung #RRGGBB, #RGB RRGGBB, "rgb(rrr,ggg,bbb)" and Html colour names.
 
**#22802 - Desktop - Width for the navigation pane in Desktop stored in user account settings**
 
**#22809 - Desktop - Discover Button in the View page in Ribbon**
 
The Discover Toogle button is located under the View Page in the ribbon and can also be accessed by Ctrl-D. The discover page contains Recent Items, Open and New actions
 
**#22817 - Desktop - Improved support for creating shortcuts**
 
To improve the process of creating shortcuts in the navigation pane to objects, the navigation pane will keep the current workface open when the "Shortcuts" pane is selected. We have also added support for dragging objects into the "Shortcuts" pane in addition to the existing copy/paste functionality.
 
**#22818 - Services - It is now possible to specify timeout for tasks inside combines**
 
Default timeout is 45 seconds. This can now be changed for Run a task/Run a local task commands.

## Bug fixes

**#22188 - Services, Desktop - Execution of effects within a scope with "Enable Raw Create" fails**
 
Occurs if an exception is thrown by an effect and there are uncommited objects in creating state on the stack. When objects are rolled back, the execution terminates immediately and succeeding exception handler blocks are not executed.
 
**#22279 - - "Set a Fields Value" effect does not throw "On Insufficient Sercurity Permissions" exception**
 
If a user has insufficent permissions to modify an object the effect fails with an unhandled exception and Genus is shut down. A succeeding catch exception block which handles the "On Insufficient Security Permissions" exception is never executed.
 
**#22486 - - When browsing objects in a Form the form could browse to a deleted object**
 
When opening an Object, the browse list is copied to the Form. If an objeckt in the browse list is deleted the Form would be empty when the user browed to the deleted object.
 
**#22493 - Desktop - In Genus Studio, in some cases an exception occurred when a table was added to a Form**
 
**#22495 - - Connecting to data sources in Data Mart using a group causes access violation**
 
Not allowed to connect data sources by a group. Case handled.
 
**#22496 - Apps - Forgot password - search on e-mail address is not case insensitive**
 
Error occured on RDBMS such as Oracle which not supports case insensitive search.
 
**#22501 - - Genus Desktop: Fixed visualization of duration value zero**
 
There was an error in the visualization of durations with value zero (0) in Table and Duration Edit. This error has now been fixed so the value will be displayed as "0:00". Duration fields without value will still be displayed as blank.
 
**#22511 - - Genus Desktop: Combo Box / Search Box controls in Form**
 
Height not adjusted when font size is changed.
 
**#22512 - - Genus Desktop: Integer Time Edit control in Form - crash when the arrow up key is pressed**
 
Occured if the current value was between 23:46 and 23:59.
 
**#22513 - - Integer Time Edit control in Form - pressing the arrow down key does not set the value correct**
 
Genus Desktop: When the arrow up key is pressed, the value is set to the neares quarter. E.g. pressing the arrow up key on value 23:25 sets the value to 23:30. If the arrow down key is pressed, the value is set to 23:00 and not 23:15 which is correct.
 
**#22517 - - Error importing XML documents with punctuation mark in the namespace**
 
**#22519 - Studio - Genus Studio: Error changing property datatype when a datacalculation is defined**
 
**#22521 - Desktop - Genus Desktop: Fixed Access Voilation when switching between Forms.**
 
In some cases when opening several instances of the same form, the controls would be positioned incorrectly and an access violation error would occur when the window was closed.
 
**#22527 - - Genus Desktop: Added support for negative duration values**
 
The Duration datatype supports negative values, but it has not been possible to enter negative values in the user interface. This issue has now been fixed.
 
**#22532 - - ETags in mobile requests will now contain information so that a change in permissions is reflected**
 
**#22535 - - Genus Desktop: Columns not fitted correctly in Grid control**
 
Occurred when the Auto Width property was set to TRUE. All columns except the last column are collapsed to minimum width.
 
**#22537 - Desktop, Services - File upload from Genus Desktop hangs intermittently**
 
Under certain circumstances upload of large files would hang. This has been corrected.
 
**#22538 - Apps - Genus Mobile: Internet Explorer vertical stretch issue**
 
Occurred for controls inside container with dynamic height
 
**#22542 - - Empty e-mail attachments would make Genus Desktop crash**
 
File attachments containing 0 bytes would make Genus crash with an System.ArgumentNullException. This has been fixed.
 
**#22543 - Apps - Genus Mobile: Download confimation on windows fixed**
 
Confirmation box is no longer showed multiple times on top of each other on windows when downloading files.
 
**#22545 - - Genus Desktop: Number of objects always displayed in title for list box control in Analysis**
 
Deactivating the option Show No of Objects had no effect.
 
**#22548 - - Genus Desktop: Not possible to drag objects between grid controls in Forms.**
 
E.g. drag a person object from one grid to another.
 
**#22550 - Apps - Scaling of sign in screen on web for mobile devices**
 
The sign in screen for web sites will now scale correctly when used on mobile devices.
 
**#22552 - Desktop - Genus Desktop: Fixed Acess Violation when switching views in a Form with visible validation errors.**
 
**#22554 - - Genus Desktop: Users was given to much access when editing tasks**
 
Users was given to much access when editing the task, when det flag "Enable Modify by Users without Version Deployment" was set.
 
**#22555 - Apps - Error resulting in white screen on login is corrected**
 
Sometimes an error while logging in would result in a white screen. You will now be returned to the login screen instead.
 
**#22556 - Apps - Genus Mobile: Will now open in correct orientation on iPad**
 
Will now open in correct orientation on iPad when reopening the app in landscape
 
**#22557 - Desktop - Genus Desktop: Number format ignored in grid control for 64-bit integer values**
 
**#22559 - Apps - Genus Mobile: No longer redirects when javascript is disabled**
 
In stead of redirecting the user to another site to show the warning message, the message is now shown in the main document. This resolves an issue where redirects are also disabled.
 
**#22563 - Studio - Fixed Access Violation when using the Tab Key to move between fields in the Forms Property Editor**
 
Applies to Genus Studio.
 
**#22566 - Studio - Fixed problem with disappearing white space in templated texts.**
 
Genus Studio: In various effects it is possible to create text templates where parts of the texts are evaluated run-time, for instance when creating the message in the "Show a Message"-effect. In some cases, whitespace in these templates would not be displayed in the editor due to how the templates are stored. This issue has now been fixed.
 
**#22567 - Desktop - Genus Desktop: Window title not updated when switching view in a form**
 
**#22568 - Studio - Genus Studio: Error when opening local rules in Forms from reference finder**
 
**#22569 - - "Upload a File" effect does not clean up if upload fails**
 
If the upload fails, the newly created file object is not deleted.
 
**#22570 - - Genus Studio: isValid() function not available for objects of type "Local Object"**

**#22571 - - Corrected error in SQL joiner**
 
In some cases, the joiner will use inner joins where not required. Happens if driving table A is joined with table B, and B is joined with table C and D, and a property restriction is placed on D.
 
**#22572 - Desktop - Modified autosave logic such that local and persistent objects has the same behaviour**
 
**#22574 - Desktop - Not possible to hide maximize button for map control in analysis**
 
Property not available in the control setup, but the button is always shown when running the analysis.
 
**#22575 - Desktop - Analysis fails on refresh after a new object has been created**
 
Occurs if a newly created object satisfies the condition stated by a data filter in a data mart, and data for a previously opened analysis is refreshed by the end user.
 
**#22577 - Desktop - Local task published to the Copy menu in a Form fails on copying data to the clipboard**
 
Works fine if you are using a global task.
 
**#22578 - Desktop - Incorrect rendering of disabled check boxes**
 
Check boxes weren't rendered grey when disabled.
 
**#22579 - Desktop - Auto save in Form with time lag ignored**
 
Changes are saved immediately even if auto save is set up to save changes on a periodic basis, such as every 5 minutes. Occurs in the following cases:
 
- A rule triggered on the "On After Validate" event is executed.
- A previously invalid object enters a valid state.
 
**#22582 - Apps - Issue with logging out when using federated authentication is fixed**
 
**#22583 - Desktop - Preview of mail message fails with exception "The header name has an unexcepted character"**
 
The exception is now handled by the preview control. The reason for this exception is that data for an attachment not corresponds to the content type for the attachment.
 
**#22584 - Desktop - Opening an e-mail message if MS Outlook not is installed on the client causes a system crash**
 
**#22585 - Desktop - "Open a Form" effect terminates execution if the Yes button is clicked.**
 
Occurs if the option "Wait until the form is closed" is selected, and the form which is opened contains a Yes and a No button. When the user clicks the Yes button, execution is terminated and succeeding actions are not executed.
 
Works as expected if the form contains an OK and a Cancel button.
 
**#22586 - Apps - Removed wrong validation on user name when requesting a password change**
 
**#22592 - Desktop - The application hangs when an Analysis is opened for edit**
 
May occur in an Analysis containing multiple charts located in tab sheets. If the height of the window is to small to display the entire chart, the calculation of the desired size for the chart results in a recursive layout update which may take from a few seconds to several minutes to process.
 
**#22594 - Desktop - Allow Horizontal/Vertical Sizing not available for Group/Group Box control in Analysis**
 
**#22596 - Studio - Fixed issue with saving contacts with photos to vCard format.**
 
Genus crashed when trying to save contacts with photos because the format of the photo was not resolved correctly. This issue has now been resolved.
 
**#22597 - Desktop - Opening a URL from the URL Edit control fails with an error message**
 
Occurs if the URL not specifies a scheme, such as http, or a www prefix. E.g. "joejuice.com".
 
**#22598 - Studio - Changing view on a table view for an object class is not saved**
 
Location: Property dialog for an object class, tab sheet "Explore", section "Views".
 
**#22599 - Studio - Genus Studio terminates when opening a form after an object class has been changed**
 
Occurs if the form has been opened and then closed before an object class is modified and saved. The second time the form is opened the application terminates.
 
**#22601 - Apps - Fixed automatic sign in with ssoAD**
 
Will now sign in automatically instead of having to click the button
 
**#22602 - Studio - isModifed() / isValid() functions does not work if an object contained in a sub group is modified**
 
**#22611 - Desktop - Application terminates when using Week and Month in list box in Analysis**
 
If one added a week or month dimension in a list box, the application terminated if one selected an item.
 
**#22612 - Apps - Sorting based on reference property**
 
Sorting of repeating sections based on a reference property without an explicit sort order set will now sort on object name.
 
**#22614 - Studio - Consume a REST Service effect: Body does not accept data sources with occurences = "Unbounded"**
 
Should be possible to select a data source with occurences = "Unbounded" if the body is on JSON format.
 
**#22615 - Services - Genus App Services leaks memory when a local task is executed by an app**
 
Case observed in an app which main purpose is to search for different types of objects given a search term. After some hours the server runs out of memory.
 
The leak is present both in Genus Desktop and Genus App Services, and is related to repeated execution of Tasks, Agents, and Web Services. Memory consumption increases if there are many data sources/logical expressions involved, e.g. when running a local Task defined in a complex Form.
 
The test case contained 68 data sources.
 
**#22617 - Desktop, Apps, Services - Fixed AV that occured when selecting a date in Create Object Effect.**
 
**#22618 - Desktop - Auto save interval in a Form is not calculated correctly**
 
If the first changes are triggered by objects which is two-way bound (e.g. opening another Form or running a global Task), the auto save interval is not set. However if a change was triggered by a control bound to a field, the interval is set correctly.
 
When changes are auto saved for the first time, the interval is set to 3 seconds. That is, all succeeding changes are saved immediately.
 
**#22620 - Apps - Fixed issue with reset password not working.**
 
The JSON object with the new password couldn't be parsed due to missing quotation marks.
 
**#22621 - Apps, Services, Desktop - Corrected invalid week numbers generated by invalid default values**
 
In models with fixed 52-week year, a default value in the calendar settings produced invalid week numbers because of an invalid default value in "Zero Week Day Limit". The error is corrected and patched.
 
**#22625 - Studio - Fixed Access Violation when formatting text in effect controls.**
 
**#22631 - Desktop - The application terminates when opening a file from the File Name Edit control in Forms**
 
Occured when a file was selected for a newly created object or an existing object which previously did not reference a file. A releated bug was that all file operations were directed to the file on the stored object.
 
**#22634 - Desktop - Selected objects in a form not updated when objects are deleted by a task**
 
If selected objects in a form are deleted by executing a task where the objects are two-way bound, the objects are still marked as selected after they have been deleted.
 
That is, they are no longer visible in the UI, but if you write a logical expression testing whether selected objects has a value, this expression will return TRUE.
 
**#22635 - Studio - Number of objects not updated in label for grid control on interactive filtering**
 
If a column filter is applied, or data is filtered by "Find on this Page", the label displays total number of objects present in the data source and not the number of visible rows.
 
**#22637 - Studio - Access to all Named Search Fields from all views in a table**
 
In a table with many views and Named Search Fields, all search fields where accessible when opening the field selector or using Rested Fields.
 
**#22639 - Studio - When updating a row on a command in Table, the save button was not enabled**
 
**#22642 - Desktop - Crash when deleting object in multidimensional table**
 
In a multidimensional table, cell may contain entire objects. If Auto save was enabled in a table and a delete in a cell case reference finder to prevent the deletion of the object, Genus would crash. This is now handled and a message is displayed to the user .
 
**#22646 - Studio - Genus Studio terminates when adding a bound or unbound property in the Object Class Diagram**
 
**#22648 - Apps, Desktop - Functions or condtions which refers to another function with active object selection not updated**
 
Example 1:
 
A data source, DS-A, contains a function field of type boolean named Flag. The value is calculated based on selection in another data source, DS-B, such as:
 
DS-B.SelectedObjects has value
 
A command defined in a form should be enabled given that Flag-function returns the value TRUE. The condition for the command is expressed as
 
DS-A.Flag = TRUE
 
If selected objects in DS-B is changed, the Flag-function is updated correctly. However, the command is not enabled/disabled correctly because the condition is never reevaluated.
 
**#22650 - Desktop - Foreground color defined in automatic formatting not applied when row is selected in a grid control**
 
**#22652 - Desktop - Values for dervied fields in a form not updated if modfied by a two-way bound form or task**
 
E.g.
 
The following fields are displayed in a form (A):
 
- Person.Department
- Person.Department.Manager
 
where the value for Manager is derived from Department.
 
Person.Department is updated by opening another form (B) where users can select a department. The person data source is two-way bound.
 
When a department is selected in form (B), the Person.Department field is updated, the form is closed, and values are copied back to the initiating form (A).
 
The value for Person.Deparment is displayed correctly in form (A), but the value for the derived field, Person.Department.Manager, displays the previous stored value.
 
If Person.Department is updated directly by using a control such as a combo box or search box, both fields are updated correctly.
 
**#22654 - Desktop - Disabled tasks are not longer executable**
 
It was possible to execute disabled tasks if these were connected to an enabled command started by an event (not from the UI). E.g. OnFormLoad, OnViewLoad, OnActiveObjectChanged etc.
 
**#22656 - Desktop - CTRL+click on cell in grid opens form without a master object**
 
Occurs if the row previously was selected and the user presses the CTRL key and clicks on a cell which contains an object reference.
 
**#22658 - Studio - References used in a condition with exist were not reported**
 
**#22660 - Studio - Reference finder error**
 
It was possible to delete a data source used in a task, since reference finder cached references on first run (and later ignored cached references).
 
**#22663 - Desktop - No longer possible to delete Forms opened for edit**
 
You will now get an error message if you try to delete a Form opened for edit in a different window in the same user session.
 
**#22664 - Desktop - Refiners i Forms were not always displayed or updated**
 
In certain circumstances Refiners were evaluated before the data source it was based on, was populated. We now make sure all data sources are populated before we start Refiner evaluation.
 
**#22666 - Desktop - Validation colors on Radio Button controls**
 
The colour scheme used by the Radio Button control has been harmonized with other Form controls.
 
Error are visualized by a red border.
Warning are visualized by a yellow border.
Information are visualized by a blue border.
 
**#22671 - Apps - Removes white space before, between and after number input value**
 
**#22672 - Studio - First row initially selected in grid control with default selection = "None"**
 
In a grid control with selection mode "Single", the first row is always selected even if default selection is set to "None". Works as expected if selection mode is set to "Multiple".
 
**#22673 - Studio - Fixed an error that prevented selection av fields from iterator variables in the expression editor**
 
**#22674 - Studio - Changing Root Element in the schema data source in Form may lead to a crash**
 
The error occurred in certain circumstances in the Form Designer when changing the root data source in a schema in the data source setup.
 
**#22675 - Desktop - Best fit of columns in the grid control adjusts all columns to a minimum width.**
 
Occurs occasionally if data are refreshed by pressing the Refresh button in a form, or when browsing to the next or previous object.
 
**#22676 - Desktop - Crash on refresh if unsaved changes**
 
If you had unsaved changes in memory and clicked Refresh, you got a question if you wanted to save or not. If you clicked OK, Genus Desktop crashed in certain circumstances.
 
**#22677 - Studio - Fixed error in interpretation of conditions containing exists operators**
 
When a condition with an exists operator was entered manually in the expression editor, the operators in these expressions would be interpreted as "not exists" when opened later. This was due to an error during load of these expressions, and has now been fixed.
 
**#22678 - Desktop - Fixed problem with incorrect display language in Forms after exporting table to Excel Format.**
 
**#22679 - Desktop - Fixed problem with extra whitespace between elements in text editors in Tasks.**
 
**#22693 - Desktop - Analysis - data not displayed for a chart series or table connected to a selection group**
 
**#22694 - Desktop - Analysis - initial selection for list boxes applied across selection groups**
 
Occurs if two listboxes are bound to the same data source and connected to different selection groups.
 
**#22695 - Desktop - Automatic Format in Form didn't save references**
 
Automatic Format didn't save references, making it possible to delete properties used in formatting.
 
**#22723 - Desktop, Studio - Resources used by the Map Control are released when closing Forms**
 
**#22727 - - Local object window: Large integer not supported**
 
Local object window opened from an "Open Form" effect does not accept entering values of type large integer.
 
**#22728 - Desktop - Reevaluate Automatic Formats on selection changed**
 
When a format in one data source was based on Selected Object in another data source, it was not reevaluated when the selection changed.
 
**#22729 - Desktop - Filter field in Reporter is too small**
 
Size of field now automatically adjusts to its contents.
 
**#22730 - Desktop - Fixed AV when switching folder in a navigation pane entry with layout of type Horizontal Folders**
 
**#22731 - Desktop - Fixed problem with progress dialog not closing when using Explore in Report Tool.**
 
**#22732 - Desktop - Right-click in map control on Desktop displays two context menus**
 
Not possible to close the second context menu (containing items such as Back, Forward, Print..., View Source) unless an item is selected. The second context menu should not have been displayed.
 
**#22733 - Desktop - Orientation in EXIF-metadata is now handled correctly so that images are displayed right side up.**
 
**#22738 - Desktop, Services - Fixed problem with incorrect decoding of text in Html Templates**
 
The problem was related to using html tags as text in Html templates. Some tags were decoded twice so the html would show up with errors.
 
**#22740 - Studio - Deleting History**
 
The delete History effect did not delete history for Part of composition objects. This is now fixed.
 
**#22743 - Desktop - Incomplete initial rendering of chart in some circumstances**
 
The chart was presented incompletely when initialization occurred while the chart was hidden/not visible (e.g. located inside a tab sheet). This issue has been resolved for both Pie and XY Chart.
 
**#22744 - Desktop - Fixed performance issue when opening a Table in Default Application (Excel)**
 
**#22747 - Apps, Services, Studio, Desktop - Fixed error in RegEx.Replace that returned wrong results.**
 
The RegEx engine was updated in Genus from version 2015.2 to version 2016.1. After this update, the RegEx.Replace function would return only the match string instead of the full input string with substitutions, and in case of no match, the result would be an empty string. These errors has now been fixed so the original functionality is now restored.
 
**#22758 - - Fixed error in font scaling causing some window content to display text in large font.**
 
**#22760 - Apps - Fixed error where android tablets were treated as phones**
 
Android tablet devices would be treated as phone devices in 2015.2 since the last version. This is now corrected.
 
**#22762 - Desktop - Fixed missing highlighting of search matches in multireference fields in Table.**
 
**#22766 - Desktop, Studio - It's now possible to don't show row count in header**
 
The Flag Show Number of Objects is now possible to uncheck for plain tables.
 
**#22768 - Apps - Using the command Create Object now works in repeating content**
 
The command Create Object can now be used in the context of repeating content.
 
**#22769 - Apps, Services - Data restriction on drop downs now also work when restricted by another object**
 
When using data restriction on controls that have members, other objects can now be used to restrict the selection of members.
 
**#22773 - Apps - Fixed issue with IndexSizeError in IE11**
 
Corrected an issue where SVGs did not have height and width in IE11, which caused an error in the map controller.
 
**#22775 - Desktop - Fixed problem setting focus to the first element in form when opened.**
 
**# 22776 - Desktop - Plain text extracted from RTF includes metadata such as author**
 
RTF data stored by the Rich Text Edit control in forms stores metadata such as author, operator, and version. If plain text was extracted by using the "toPlainText" function available in Genus advanced expressions, metadata were included in the result string.
 
Metadata are now removed from the result string.
 
**#22783 - Desktop - Fixed problem where main window is brought to front when dialog is displayed.**
 
**#22785 - Desktop - Fixed problem rendering some controls when running Genus using Remote Desktop**
 
**#22787 - Apps - Datepicker is no longer showed for read only date edit fields (web)**
 
**#22788 - Studio, Desktop - Copy Shortcut available**
 
Copy shortcut is now available under all commands in Ribbon setup
 
**#22790 - Desktop - Fixed problem with Ctrl+Tab in Tab Control that would cause move to wrong tab.**
 
**#22794 - Apps - Setting radio buttons to read only will now disable them, instead of doing nothing.**
 
**#22795 - Desktop - Error converting Complex Associations to integer types**
 
It is now possible to convert a Complex Association value into an integer value type
 
**#22796 - Desktop - Error evaluation local rules defined on a table used in a Form**
 
When using a table in a form, local data validations defined on a field in the table caused an access violation. The problem is now fixed.
 
**#22803 - Desktop - Fixed problem where report contents was not visible initially on a multimonitor computer.**
 
**#22804 - Desktop - Fixed restoring window positions for windows that were saved in maximized state.**
 
**#22807 - Studio - Fixed problem with whitespace being removed when using "compose text".**
 
**#22808 - Desktop - Search Button in the View page in ribbon**
 
The Search Panel is back, and can be opend with the toggle Search button under the View Page in ribbon. Shortcut key for toogle is Ctrl-E.
 
**#22813 - Desktop - Fixed problem with dialogs disappearing behind the main Report Tool window.**
 
**#22815 - Apps - Date pickers now work in repeating sections, and it is now possible to set time as well.**
 
**#22816 - Desktop - Memory leak detected in patch for release 2016.1 - version 16.100.62.0, date 14.11.2016**
 
Related to Forms in Genus Desktop. Fixed in version 16.100.78.0, date 22.11.2016. We recommend that you upgrade to the latest patch of release 2016.1, which at the time of writing is 16.100.84.0, date 28.11.2016.
 
**#22822 - Desktop - Error when pasting large audio files into a table/grid**
 
Failed if duration of the file exceeded 214 seconds.
 
**#22830 - Studio - Unable to open form in Studio after adding summary fields to a group box control**
 
Occured if a summary field was bound to a field where the display name contained special characters such as as æ, ø, or å.
 
**#22831 - Desktop - Slow performance when evaluating a refiner mapped to a 1:N property**
 
When opening a table containing a refiner mapped to a 1:N property, such as Project.Assignments.Person, it takes a long time to load data. The impact on performance is exponential with increasing data volume.
 
The algorithm has been corrected, and evaluation of the refiner should now have a minimum impact on the time it takes to open the table.
 
**#22837 - Desktop - Enabling of buttons in Repeating Content**
 
To enable/disable a button within a Repeating Content, the enabling must be set on the button, not on the command. Since the same command is used in all the sections, the enable condition must be set on the button.
 
**#22850 - Desktop, Services - Fixed problem saving Reports with summary to Pdf.**
 
**#22852 - Desktop, Apps - Mail messages exported to file is marked as "Draft"**
 
Exporting a sent mail message to an msg-file using the "Export Data" effect marks the exported message as a draft. That is, if the message is opened in Outlook, it is not possible to reply or forward the message.
 
If you experience this problem with stored data in your application, e.g. that a sent message stored in a file data property is marked as a draft, do the following:
 
1) Upgrade your solution to a version higher than 16.100.108.0 (release 2016.1) / 17.100.89.0 (release 2017.1).
2) Create a task for converting the message:
 
Import the message from the file data property into a data source of type "Mail Message" ("Import Data" effect). If you have stored a sent date in your object, modify the sent date on the mail message object to this date ("Modify Object" effect). Export the mail message object to an msg-file ("Export Data" effect). Import this file back into your mail message data source ("Import Data" effect). Set the file data property in your object equal to the "File.Data" property for the mail message object ("Modify Object" effect). Commit the changes.
 
**#22855 - Desktop - Fixed crash when Genus is started while another instance is closing down.**
 
**#22860 - Desktop - Export large reports to Excel**
 
Because of a bug in the export to excel large reports used very long time

## Known issues

Known issues are errors or lack of functionality. Known issues may be solved in a future release based on customer demand.
 
Note that support for the open authorization standard OAuth2 has been introduced in release 2016.1, but only supported in a Beta version for selected customer projects.
 
Due to changes in our desktop user interface technology, all Forms must be designed in a way that prevents Table and Report Controls from being hosted in scrollable areas of the Form. In most cases this could be catered for by stretch-aligning the Table/Report controls (including all parent groups of the Table/Report) within the Form, but there may also be other cases where other areas of a Form may cause scrollbars to appear in a group which includes a Table/Report control. When a Form has the problem described here, it will appear as the Table/Report is rendered floating above other controls in the window so that for instance the ribbon, status bar or other page content may be obscured. This will be a time limited restriction, and will be removed in a later release, when the changes in our user interface technology are completed. Any Table controls violating the requirement will have an undetermined behavior.

## Tips and hints

Tips and hints are design decisions or answers to support questions that may be of general interest.
 
There are no tips and hints specifically targeting release 2016.1.

## Change log

* 2017-02-10 Updated with latest Bug Fixes.
* 2016-12-20 Updated with latest Minor new Functionality and Bug fixes.
* 2016-10-24 New items added to Breaking Change (#22793) and Bug fixes.
* 2016-10-11 New items added to Minor New Functionality and Bug fixes.
* 2016-09-21 New items added. Changed status from Release Candidate to Release (builds starting with 016.100).
* 2016-09-05 New items added to Major and Minor New Functionality and Breaking Changes. Changed status from Beta to Release Candidate.
* 2016-06-29 New items added to Minor New Functionality, Bug Fixes and Breaking Changes.
* 2016-06-13 Changed status from Alpha to Beta.
* 2016-06-10 Published a bunch of release notes.
* 2016-04-19 Changed status from Pre-alpha to Alpha.
* 2015-11-23 Created (Pre-alpha).