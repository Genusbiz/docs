# Genus Server - Logical Services

Genus Services is composed of a number of logical services at that are either data set independent or [data set](../../defining-an-app-model/general-settings/data-sets.md) dependent. These services may be configured for each physical server by defining [nodes and node groups](../../defining-an-app-model/services/nodes-and-node-groups.md).

## Data Set Independent Services

**Mail Service**

*   This service provides server-based e-mail, and is used when server-side [actions](../../defining-an-app-model/logic/action-orchestration/actions.md) submits e-mail using SMTP.
*   Enable this service in order to send e-mails from server-side actions.
*   Settings for the mail service can be found in [general settings](../../defining-an-app-model/general-settings/index.md).

## Data Set Dependent Services

**Authentication Service**

*   This service is responsible for authenticating users, and depends on the Transaction Service for database access.
*   The service is used both by Genus desktop clients and internally by other services.

**Transaction Service** - _This service provides database access by executing SQL transactions_

*   This service is used both by Genus desktop clients and internally by other services. 

**Agent Service**

*   This service is responsible for executing [Agents](../../defining-an-app-model/logic/agents.md) at scheduled intervals.
*   The Agent Service should be enabled in order to execute Agents.

**Calendar Service**

*   This service is responsible for providing WebCal resources for [calendar](../../defining-an-app-model/services/calendars.md) sharing.
*   The Calendar Service should be enabled in order to publish WebCal resources. 

**Contact Service**

*   This service is responsible for providing CardDAV resources for [contact](../../defining-an-app-model/services/contact-lists.md) sharing.
*   The Contact Service should be enabled in order to publish CardDAV resources.

**Data Mart Service**

*   This service is responsible for loading Data Marts into memory at scheduled intervals, and providing access to the loaded data to clients.
*   The Data Mart Service should be enabled in order to run Analyses that use Data Marts. 

**REST Service**

*   This service is responsible for providing access to external REST services (consume) and to [REST services](../../defining-an-app-model/services/rest-services/index.md) created in Genus Studio (publish).
*   The REST Service should be enabled in order to publish or consume external REST services.

**Web Service**

*   This service is responsible for providing access to external [web services](../../defining-an-app-model/services/web-services/index.md) (consume) and to web services created in Genus Studio (publish).
*   The Web Service should be enabled in order to publish or consume external web services.

## Service User

The Logical Services that require a user account to operate, use the built in **[Service user](../../defining-an-app-model/security/security-groups-and-user-accounts.md).**

## Physical Windows Server Hosting of Logical Services

Internet Information Services is used to host the various logical services. The hosting may be monitored and customized by using the Genus Services Management Console.

A separate IIS Application Pool, the "Genus Services Web Site AppPool", is installed by the Genus Services Installer and is hosted in a separate w3wp.exe process. The "Genus Services Web Site" is installed by the Genus Services Installer and hosted by the "Genus Services Web Site AppPool".