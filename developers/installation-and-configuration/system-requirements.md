# System requirements

## System requirements for Genus Apps for web (Genus Web)

Our web client runs on all major evergreen browsers on all devices.  

The term "evergreen browser" refers to web browsers that are automatically upgraded to future versions. We consider Mozilla Firefox, Google Chrome, Microsoft Edge and Apple Safari to be evergreen browsers.

Please note that Internet Explorer 11 and older versions are not considered evergreen. Our support schedule is as follows:

*   **Genus Apps 2016.1**: Internet Explorer 11 is supported.
*   **Genus Apps 2016.2**: Internet Explorer 11 is supported for all functionality areas except Analysis (Genus Discovery). We recommend using an evergreen browser.
*   **Genus Apps 2017.1 and forward**: Support for Internet Explorer may be removed based on usage. You may have to use an evergreen browser. When something does not appear, or looks wrong, in Internet Explorer, but looks good in other browsers, the solution may be to do some adjustments to your web app model. See [here](../guidelines-and-best-practices/genus-web-and-internet-explorer-11.md) for more information.

In general, support for operating systems and browsers with a market share of 5% or less is removed in the next release of our web client.

Genus Web requires a Genus Services installation on one or more application servers, which will be provided for you by your system administrator, your business partner or through a Genus Cloud Subscription.

## System requirements for Genus Apps for desktop (Genus Desktop)

The minimum hardware and software requirements for our desktop client are listed below.

### Hardware requirements

* Monitor resolution: 1280x800. Certain components, like Genus Discovery,  require higher resolution  (recommended 1920x1080 or higher)
* CPU: Minimum 1 GHZ x64 processor.
* Memory (RAM): Minimum 2 GB.
* Disk space: Minimum 500 MB available.

### Software requirements
Our desktop client runs on the following operating systems:

* Windows 10 (64-bit)
* Windows 8.1 (64-bit)
* Windows 8 (64-bit)
* Windows 7 (64-bit)
* Windows Server 2019 (Server Core and Server with Desktop Experience)
* Windows Server 2016 (Server Core and Server with Desktop Experience)
* Windows Server 2012 R2
* Windows Server 2012

Our desktop client requires the following minimum version of the .NET Framework:

* Genus Apps 2017.5 or later: .NET Framework 4.7 or later
* Genus Apps 2017.2-2017.4: .NET Framework 4.6.2 or later
* Genus Apps 2016.1-2017.1: .NET Framework 4.6.1 or later

Note that Genus Apps was named Genus App Platform prior to 2017.5.

To download the required version of the .NET Framework Runtime, visit https://dotnet.microsoft.com/download.

Integration with Microsoft Office is supported for both 32-bit and 64-bit editions of Microsoft Office.

The Genus document mail merge feature does not require Microsoft Word to be installed.

We recommend keeping your computer up to date with the latest updates and service packs from Microsoft. We also recommend using Genus together with Microsoft Office. Genus Desktop requires a Genus Services installation on one or more application servers, which will be provided for you by your system administrator, your business partner or through a Genus Cloud Subscription.

## System requirements for an application server running Genus Services

The minimum hardware and software requirements for an application server running Genus Services are listed below. Such application servers are also called Genus Servers.

### Server hardware or virtual server requirements

* Monitor resolution: Minimum 1024x768 screen resolution.
* CPU: Minimum 1.4 GHz x64 processor with at least two cores.
* Memory (RAM): Minimum 4 GB.
* Disk space: Minimum 2 GB available.

Note that these are the minimum requirements. The actual hardware requirements are dependent on your Genus solution's functionality and your number of concurrent users, agents, web services etc. Please consult your Genus business partner for help in specifying your requirements. We also recommend examining Microsoft's requirements for your Windows Server edition.

We do not recommend running Genus Services on the same server as your Relational Data Base Management System (RDBMS), but instead dedicate a separate server for the task.

### Software requirements

Genus Services runs on the operating systems given below.

Genus Apps 2019.2 or earlier:
* Windows Server 2019 (Server Core and Server with Desktop Experience)
* Windows Server 2016 (Server Core and Server with Desktop Experience)
* Windows Server 2012 R2
* Windows Server 2012
* Windows Server 2008 R2 SP1

Server Core Role is not supported for earlier versions than Windows Server 2016.

Genus Services requires the following minimum version of the .NET Framework:

* Genus Apps 2019.2 or later: .NET Framework 4.8 or later
* Genus Apps 2017.5 or later: .NET Framework 4.7 or later
* Genus Apps 2017.2-2017.4: .NET Framework 4.6.2 or later
* Genus Apps 2016.1-2017.1: .NET Framework 4.6.1 or later

Note that Genus Apps was named Genus App Platform prior to 2017.5.

To download the required version of the .NET Framework Runtime, visit https://dotnet.microsoft.com/download.

We recommend using the latest version of Windows Server, and to keep your server up to date with the latest updates and service packs from Microsoft. Required server roles and features are automatically configured during installation of Genus Services.

The Genus Services document mail merge feature runs on the application server, but does _not_ require Microsoft Word to be installed.

### Database access software requirements

The application server manages connectivity to the database layer, and communicates with the Relational Data Base Management System (RDBMS) using native .NET Data Providers for Microsoft SQL Server, Oracle, Sybase (up to Genus Apps 2018.1), MySQL, and DB2\. Other .NET native data providers will be added based on customer demand.

#### Microsoft SQL Server

 Genus Services uses Microsoft's built-in ADO.NET Provider for SQL Server. No additional software on the application server is required.

#### Oracle

Genus Services includes Oracle ODP.NET Managed Driver. No additional software on the application server is required.

Any other Oracle driver software on the application server must be completely uninstalled and removed, prior to the installation of Genus Services.

#### Sybase Adaptive Server Enterprise (ASE)

Sybase support depends on the version of Genus Apps:

* Genus Apps 2018.2 or later: The support for Sybase has been removed. The support may be reintroduced based on customer demand.

* Genus Apps 2018.1 or earlier: For Sybase database access Genus Services requires installation of Adaptive Server ADO.NET Data Provider for .NET Framework 4.0. The required version is a component included in Adaptive Server Enterprise (ASE), **EBF 21674: 15.7 SP60 - 64 Bit 15.7 17 Dec 2013 EBF/Patch**. Please make sure that the 64-bit version of the ADO.NET Data Provider is installed. The Adaptive Server ADO.NET Data Provider for .NET Framework 4.0 installs Sybase.AdoNet4.AseClient.dll, **assembly version 4.157.1212.0**.  

#### MySQL

For MySQL database access the **MySQL Connector/Net, version 6.4.4** must be installed on the application server.

#### IBM DB2

For IBM DB2 database access the "IBM Data Server Driver Package (Windows/x86-64 64 bit)" must be installed on your application server. Please download the appropriate version according to the list below from https://www.ibm.com/support/docview.wss?uid=swg27016878:

* Genus Apps 2018.2 or later: "IBM Data Server Driver Package (Windows/x86-64 64 bit) Version 11.1 Mod3 Fix Pack3 iFix001" ([v11.1.3fp3a_ntx64_dsdriver_EN.exe](https://www.ibm.com/support/fixcentral/swg/downloadFixes?parent=ibm~Information%2BManagement&product=ibm/Information+Management/IBM+Data+Server+Client+Packages&release=11.1.*&platform=Windows+64-bit,+x86&function=fixId&fixids=DSClients-ntx64-dsdriver-11.1.3031.295-FP003a&includeRequisites=1&includeSupersedes=0&downloadMethod=http)).
* Genus Apps 2018.1: "IBM Data Server Driver Package (Windows/x86-64 64 bit) Version 11.1 Mod2 Fix Pack2 iFix002" ([v11.1.2fp2b_ntx64_dsdriver_EN.exe](https://www.ibm.com/support/fixcentral/swg/downloadFixes?parent=ibm%2FInformation%20Management&product=ibm/Information+Management/IBM+Data+Server+Client+Packages&release=11.1.*&platform=Windows+64-bit,+x86&function=fixId&fixids=DSClients-ntx64-dsdriver-11.1.2022.1522-FP002b&includeRequisites=1&includeSupersedes=0&downloadMethod=http)).
* Genus Apps 2017.5: "IBM Data Server Driver Package (Windows/x86-64 64 bit) Version 11.1 Mod2 Fix Pack2 iFix001" ([v11.1.2fp2a_ntx64_dsdriver_EN.exe](http://www.ibm.com/support/fixcentral/swg/quickorder?parent=ibm%2FInformation%20Management&product=ibm/Information+Management/IBM+Data+Server+Client+Packages&release=11.1.*&platform=Windows+64-bit,+x86&function=fixId&fixids=DSClients-ntx64-dsdriver-11.1.2021.1452-FP002a&includeRequisites=1&includeSupersedes=0&downloadMethod=http&source=fc)).
* Genus Apps 2016.1-2017.4: "IBM Data Server Driver Package (Windows/x86-64 64 bit) Version 11.1 Mod1 Fix Pack 1" ([v11.1.1fp1_ntx64_dsdriver_EN.exe](http://www.ibm.com/support/fixcentral/swg/quickorder?parent=ibm%2FInformation%20Management&product=ibm/Information+Management/IBM+Data+Server+Client+Packages&release=11.1.*&platform=Windows+64-bit,+x86&function=fixId&fixids=DSClients-ntx64-dsdriver-11.1.1010.160-FP001&includeRequisites=1&includeSupersedes=0&downloadMethod=http&source=fc)).

## Supported database system vendors

Genus Apps version 2016.1 and later supports the following database system vendors. Use one of the supported database version strings to indicate your database version:

| **Database**         | **Supported database version**
| -------------------- | -------------------------------|-------------------
| Microsoft SQL Server | Microsoft SQL Server 2008 R2<br>Microsoft SQL Server 2012<br>Microsoft SQL Server 2014<br>Microsoft SQL Server 2016
| Microsoft Azure SQL  | Azure SQL V12
| MySQL                | MYSQL 5.5
| Oracle               | ORACLE 10.0g<br>ORACLE 11g<br>ORACLE 11g R2<br>ORACLE 12.1c
| DB2                  | DB2 10.1
