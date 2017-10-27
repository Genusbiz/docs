# Monitoring Genus Server

The Genus Services installation includes a Genus Services Management Console tailored for managing the Genus Services. This includes customized shortcuts to IIS, event viewer, services and certificates.

The monitoring of Genus Services is available on these elements (in decreasing order of importance):

**Event log**

Genus Services writes error events to the general Windows Server event log. Events may occur during upgrade of Genus Server, otherwise the event log be empty. Errors in network communication, database connection and application model are some of the events that may cause such errors in Genus Server.

In Genus Services Management Console, these can be located in the path Event Viewer (Local) | Applications and Services Logs | Genus Services. The application event log may also contain elements related to errors in Genus Server and should be checked on suspicion of error in Genus Services.

**Internet Information Services (IIS) log**

IIS logs all http(s) requests to Genus Server. Standard IIS log analyzer tools may perform analysis of these logs. The log files can be located at C:\ProgramData\Genus\Server\LogFiles.

**Check online status on Genus Server**

One or more web services can be modeled in Genus to verify that the system is online and that database connection can be established. These web services are be designed in partnership with the customer to ensure that all relevant checks are performed.