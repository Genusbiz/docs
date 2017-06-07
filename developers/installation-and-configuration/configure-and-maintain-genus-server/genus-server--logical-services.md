## Genus Server - Logical Services

Genus App Services is composed of a number of logical services at that are either data set independent or [data set](../../defining-the-application-model/general-settings/data-sets.md) dependent. These services may be configured for each physical server by defining [nodes and node groups](../../defining-the-application-model/nodes-and-node-groups.md).

**Data Set Independent Services**

<span style="FONT-STYLE: italic">Mail Service

*   This service provides server-based e-mail, and is used when server-side [actions](../../defining-the-application-model/action-orchestration/actions.md) submits e-mail using SMTP.
*   Enable this service in order to send e-mails from server-side actions.
*   Settings for the mail service can be found in [general settings](../../defining-the-application-model/general-settings.md).

**Data Set Dependent Services**

<span style="FONT-STYLE: italic">Authentication Service

*   This service is responsible for authenticating users, and depends on the Transaction Service for database access.
*   The service is used both by Genus desktop clients and internally by other services.

 <span style="FONT-STYLE: italic">Transaction Service <span style="FONT-STYLE: italic">*   This service provides database access by executing SQL transactions.
*   This service is used both by Genus desktop clients and internally by other services. 

Agent Service

*   This service is responsible for executing [Agents](../../defining-the-application-model/agents.md) at scheduled intervals.
*   The Agent Service should be enabled in order to execute Agents.

Calendar Service

*   This service is responsible for providing WebCal resources for calendar sharing.
*   The Calendar Service should be enabled in order to publish WebCal resources. 

<span style="FONT-STYLE: italic">Contact Service

*   This service is responsible for providing CardDAV resources for contact sharing.
*   The Contact Service should be enabled in order to publish CardDAV resources.

 <span style="FONT-STYLE: italic">Data Mart Service

*   This service is responsible for loading Data Marts into memory at scheduled intervals, and providing access to the loaded data to clients.
*   The Data Mart Service should be enabled in order to run Analyses that use Data Marts. 

 <span style="FONT-STYLE: italic">REST Service

*   This service is responsible for providing access to external REST services (consume) and to REST services created in Genus Studio (publish).
*   The REST Service should be enabled in order to publish or consume external REST services.

<span style="FONT-STYLE: italic">Web Service

*   This service is responsible for providing access to external [web services](../../defining-the-application-model/web-services.md) (consume) and to web services created in Genus Studio (publish).
*   The Web Service should be enabled in order to publish or consume external web services.

**Service User**

The Logical Services that require a user account to operate, use the built in **[Service user](../../defining-the-application-model/security/security-groups-and-user-accounts.md).**

****Physical Windows Server Hosting of Logical Services****

Internet Information Services is used to host the various logical services. The hosting may be monitored and customized by using the Genus App Services Management Console.

A separate IIS Application Pool, the "Genus App Services Web Site AppPool", is installed by the Genus App Services Installer and is hosted in a separate w3wp.exe process. The "Genus App Services Web Site" is installed by the Genus App Services Installer and hosted by the "Genus App Services Web Site AppPool".