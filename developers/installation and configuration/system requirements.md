# System Requirements

See below for the system requirements for your personal computer running the Genus Client for Desktop, and the application server running Genus App Services.

## System requirements for Genus Apps

Genus Apps runs on all major evergreen browsers on all devices, and as an app on iOS (8.x and later), Android (version 4.4 and later), Windows Phone 8.1, and Windows 8.1 and 10.  

The term "evergreen browser" refers to web browsers that are automatically upgraded to future versions. We consider Mozilla Firefox, Google Chrome, Microsoft Edge and Apple Safari to be evergreen browsers.

Please note that Internet Explorer 11 and older versions are not considered evergreen. Our support schedule is as follows:

*   **Genus Apps 2016.1 or earlier**: Internet Explorer 11 is supported.
*   **Genus Apps 2016.2**: Internet Explorer 11 is supported for all functionality areas except Analysis (Genus Discovery). We recommend using an evergreen browser.
*   **Genus Apps 2017.1 and forward**: Support for Internet Explorer may be removed based on usage. You may have to use an evergreen browser.

In general, support for operating systems and browsers with a market share of 5% or less is removed in the next release of Genus App Platform.



## System requirements for the Genus Desktop client

The minimum hardware and software requirements for running a Genus Desktop client on your computer are listed below.

 <table>

<tbody>

<tr>

<th></th>

<th>

Genus App Platform

version 2015.2

</th>

<th>

Genus App Plattform

versions from 2016.1

</th>

</tr>

<tr>

<td>**Hardware Requirements**</td>

<td></td>

<td></td>

</tr>

<tr>

<td>

Monitor Resolution

</td>

<td>

1280 x 800

Certain components, like Genus Discovery,

requires higher resolution

(recommended 1920x1080 or higher)

</td>

<td>

1280 x 800

Certain components, like Genus Discovery,  
requires higher resolution  
(recommended 1920x1080 or higher)

</td>

</tr>

<tr>

<td>Computer</td>

<td>1 GHZ x86- or x64-bit processor</td>

<td>1 GHZ x64-bit processor</td>

</tr>

<tr>

<td>Memory (RAM)</td>

<td>1 GB</td>

<td>2 GB</td>

</tr>

<tr>

<td>Disk Space</td>

<td>500 MB</td>

<td>500 MB</td>

</tr>

<tr>

<td>**Software Requirements**</td>

<td></td>

<td></td>

</tr>

<tr>

<td>Operating System</td>

<td>Windows 10 (32-bit or 64-bit)  
Windows 8.1 (32-bit or 64-bit)  
Windows 8 (32-bit or 64-bit)  
Windows 7 (32-bit or 64-bit)  
Windows Server 2012 R2  
Windows Server 2012  
Windows Server 2008 R2 SP1  

all with .NET Framework 4.5 or later.</td>

<td>Windows 10 (64-bit)  
Windows 8.1 (64-bit)  
Windows 8 (64-bit)  
Windows 7 (64-bit)  
Windows Server 2012 R2  
Windows Server 2012  
Windows Server 2008 R2 SP1  

all with .NET Framework 4.6.1 or later.</td>

</tr>

</tbody>

</table> 

Integration with Microsoft Office is supported for both 32-bit and 64-bit editions of Microsoft Office.

The Genus document mail merge feature does <span style="FONT-STYLE: italic">not require Microsoft Word to be installed.

We recommend keeping your computer up to date with the latest updates and service packs from Microsoft. We also recommend using Genus together with Microsoft Office. The Genus Desktop client requires a Genus App Services installation on an application server, which will be provided for you by your system administrator or your business partner.

**Network Requirements**

The Genus Desktop client supports Web Proxy Auto-Discovery Protocol (WPAD) using DNS (not DHCP). Therefore, if WPAD is enabled in the network, it must be configured, at least, for DNS. If a strict WPAD, DHCP only, scheme is configured for all connections, the Genus Desktop client may not work. For information on startup performance in networks without WPAD, see [Improving Desktop Client Startup Performance](../guidelines and best practices/improving desktop client startup performance.md).

**Exchange Server Requirements**

Genus Desktop now requires on-premises Exchange Server 2007 SP1 or better or Exchange Online. When using legacy Exchange Server versions older than Exchange 2010 SP1 the administrator needs to specify the correct Exchange Server version in the Genus Configuration Tool's e-mail settings.

If you have an older version of Exchange than 2007 SP1, you will need to disable Genus App Platform?s use of Exchange Web Services (EWS) in all your directories. This needs to be done by changing an option manually in your directories. Please contact us for more information and support. This feature will only be available in 2014.2.

Autodiscover must be enabled by publishing Service Connection Point (SCP) objects in Active Directory and/or by configuring DNS records and Exchange Server providing Autodiscover endpoints derived from the user's e-mail address domain: "https://autodiscover." + domain + "/autodiscover/autodiscover.svc" and/or "https://" + domain + "/autodiscover/autodiscover.svc". The Autodiscover SCP objects and DNS records will typically be available if Microsoft's recommended procedures was followed during the Exchange Server installation.

Exchange Web Services (EWS) access must be enabled on the Exchange Client Access Server for all users.

If EWS restrictions are enabled on your Exchange Server (using EWSAllowList or EWSBlockList) you must allow access for the user agent string "ExchangeServicesClient/15.00.0913.015" or a higher version.

For more information on the integrations and other considerations, see [Microsoft Outlook Integrations](../how to/exchange data with other applications/microsoft outlook integrations.md).



## System requirements for an application server running Genus App Services

The minimum hardware and software requirements for an application server running Genus App Services are listed below.

**Hardware Requirements**

Monitor: Minimum 1024x768 screen resolution.

Computer: Minimum 1.4 GHz x64 processor with at least two cores.

Memory (RAM): Minimum 4 GB.

Hard disk space: Minimum 2 GB available.

The actual hardware requirements are dependent on your Genus application's functionality and your number of concurrent users, agents, web services etc. Please consult your Genus business partner for help in specifying your requirements. We also recommend examining Microsoft's requirements for your Windows Server edition.

We do <span style="FONT-STYLE: italic">not recommend running Genus App Services on the same server as your Relational Data Base Management System (RDBMS), but instead dedicate a separate server for the task.

The server may very well be a virtual server, but virtual servers are recommended to be configured to use more than one CPU core.

**Software Requirements**

Genus App Services runs on the following operating systems:

<table style="WIDTH: 100%">

<tbody>

<tr>

<td>**Genus App Platform**  
**version 2015.2**</td>

<td>**Genus App Platform**  
**versions from 2016.1**</td>

</tr>

<tr>

<td>

Windows Server 2012 R2

Windows Server 2012

Windows Server 2008 R2 SP1

all with .NET Framework 4.5.1 or later.

Server Core Role is not supported.

</td>

<td>

Windows Server 2016 (Server Core and Server with Desktop Experience)

Windows Server 2012 R2  
Windows Server 2012

Windows Server 2008 R2 SP1  

all with .NET Framework 4.6.1 or later.

Server Core Role is not supported for other versions than Windows Server 2016.

</td>

</tr>

</tbody>

</table>

We recommend using the latest version of Windows Server, and to keep your server up to date with the latest updates and service packs from Microsoft. Required server roles and features are automatically configured during installation of Genus App Services.

The Genus App Services document mail merge feature runs on the application server, but does <span style="FONT-STYLE: italic">not require Microsoft Word to be installed.

**Database Access Software Requirements**

The application server manages connectivity to the database layer, and communicates with the Relational Data Base Management System (RDBMS) using native .NET Data Providers for Microsoft SQL Server, Oracle, Sybase, MySQL, and DB2\. Other .NET native data providers will be added based on customer demand.

<span style="TEXT-DECORATION: underline">Microsoft SQL Server

 Genus App Services uses Microsoft's built-in ADO.NET Provider for SQL Server. No additional software on the application server is required.

<span style="TEXT-DECORATION: underline">Oracle 

<table style="WIDTH: 100%">

<tbody>

<tr>

<td>

**Genus App Platform**

**version 2015.2**

</td>

<td>

**Genus App Platform**  
**versions from 2016.1**

</td>

</tr>

<tr>

<td> In order to access Oracle databases Genus App Services requires that **Oracle Data Access Components, ODAC 12c Release 2 (12.1.0.1.2)** be installed on the application server. For **64 bit** versions of Windows Server **both the 64 bit and the 32 bit versions** of the Oracle Data Access Components is required:

*   ODAC 12.1.0.1.2, 64 bit version, ODAC121012Xcopy_x64.zip, downloaded from [http://bit.ly/ODAC64](http://bit.ly/ODAC64)
*   ODAC 12.1.0.1.2, 32 bit version, ODAC121012Xcopy_32bit.zip, downloaded from [http://bit.ly/ODAC32](http://bit.ly/ODAC32)

For the **32 bit** version of Windows Server 2008 only the **32 bit version** of the Oracle Data Access Components is required:  

*   ODAC 12.1.0.1.2, 32 bit version, ODAC121012Xcopy_32bit.zip, downloaded from [http://bit.ly/ODAC32](http://bit.ly/ODAC32)

For both 64 bit and the 32 bit versions you only need to install the **odp.net4** component. This will install the required Oracle.DataAccess.dll, **assembly version 4.121.1.0**.   </td>

<td>

Genus App Services includes Oracle ODP.NET Managed Driver.

No additional software on the application server is required.

Any other Oracle driver software on the application server must be completely uninstalled and removed, prior to the installation of Genus App Services.

</td>

</tr>

</tbody>

</table>

<span style="TEXT-DECORATION: underline">Sybase

For Sybase database access Genus App Services requires installation of Adaptive Server ADO.NET Data Provider for .NET Framework 4.0\. The required version is a component included in Adaptive Server Enterprise (ASE), **EBF 21674: 15.7 SP60 - 64 Bit 15.7 17 Dec 2013 EBF/Patch**.  

As opposed to Oracle ODAC you only need to install the 64 bit version of the ADO.NET Data Provider on 64 bit versions of Windows Server. For the 32 bit version of Windows Server 2008 the 32 bit version of the ADO.NET Provider is required.  

The Adaptive Server ADO.NET Data Provider for .NET Framework 4.0 installs Sybase.AdoNet4.AseClient.dll, **assembly version 4.157.1212.0**.  

<span style="TEXT-DECORATION: underline">MySQL

For MySQL database access the **MySQL Connector/Net, version 6.4.4** must be installed on the application server. MySQL Connector/Net is a fully managed provider, meaning that it does not depend on 32 bit or 64 bit versions of Windows Server.

<span style="TEXT-DECORATION: underline">DB2  

For DB2 database access the "IBM Data Server Driver Package (Windows/x86-64 64 bit) V11.1.1 Fix Pack 1" must be installed on your application server.  
The required package can be downloaded from [https://www.ibm.com/support/docview.wss?uid=swg27016878](https://www.ibm.com/support/docview.wss?uid=swg27016878) (select Version 11.1, Mod1 Fix Pack 1).



## Supported database system vendors

Genus App Platform supports the following database system vendors:

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Database</th>

<th>

Genus App Platform

version 2015.2

</th>

<th>Genus App Platform  
version 2016.1</th>

</tr>

<tr>

<td>Microsoft SQL Server</td>

<td>2008 or newer</td>

<td>2008 or newer</td>

</tr>

<tr>

<td>MySQL</td>

<td>5.5 or newer</td>

<td>5.5 or newer</td>

</tr>

<tr>

<td>Oracle</td>

<td>9i or newer</td>

<td>10g or newer</td>

</tr>

<tr>

<td>Sybase ASE</td>

<td>12.5.3 or newer</td>

<td>12.5.3 or newer</td>

</tr>

<tr>

<td>DB2</td>

<td>10.1 or newer</td>

<td>10.1 or newer</td>

</tr>

</tbody>

</table>

