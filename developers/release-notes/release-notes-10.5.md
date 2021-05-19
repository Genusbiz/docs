---
title: Release notes for Genus 10.5.
description: User-visible changes to Genus from release 10.4 to 10.5.
author: jtroset
---

# Release notes for Genus 10.5

## Introduction

This document lists all user-visible changes to Genus since the previous release.

This release note will be updated prior to the release and may also be updated as long as the release is available, e.g. with information of new patches or known issues. Please take note of the [installation and upgrading](#installation-and-upgrading) comments, and the release notes [change log](#change-log).

## Installation and upgrading

Prior to upgrading to this release, you must:

- Upgrade to the previous release. See the Release notes for the previous release for more information.
- Review the Expiry date of your Genus License File and install a new one if necessary.
- Review the rest of the release notes for this release.
- Please note that there does not exist any Genus Upgrade Assistant for this upgrade.

<!--rntype01-start INSTALLATION / UPGRADE. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->

<!--rntype01-end   INSTALLATION / UPGRADE. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
<!-- release note type 2 is missing. That's ok.-->

## End-of-life functionality

End-of-life functionality is functionality that was available in the previous release, but is no longer available in this release.
<!--rntype03-start END-OF-LIFE. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
There are no end-of-life functionality identified in this release.
<!--rntype03-end   END-OF-LIFE. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Deprecated functionality

Deprecated functionality is available in this release, but will (most probably) no longer be available in the next release.
<!--rntype04-start DEPRECATED. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
There is no deprecated functionality in this release.
<!--rntype04-end   DEPRECATED. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Breaking changes

This section lists important changes introduced in this release. You will need to use this list in order to understand the changes you might need to make to your application to support the new release.
<!--rntype05-start BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 23cb93cf-2a7b-4739-b8e4-76d1c0f998ee -->
**#23324 Changes to helm values**

Several new helm values are added in Genus 10.5:

**global.modelIdentifier**

This value replaces *global.modelName*, which is no longer used. 

**global.dnsSuffix**

This value replaces *global.subDomain*, but should now contain the entire dnsSuffix (everything except the first part of the host name). This allows for more flexibility when creating host names.

I.E: If your namespace is runs at *namespace.cluster.example.com*, **global.dnsSuffix** should now be "cluster.example.com", whereas the old value *global.subDomain* would have been only "example.com"

**global.namespaceName**
The name of the namespace in which the chart are deployed. This is mainly used for validation purposes when deploying.

<!--ID ed8d27eb-863d-4bf7-b616-42f0586e3cf9 -->
**#23325 Changes in object links** (Desktop)

Moving from 19.X to 10.X links will normally change because of the introduction of cloud, and modifications to how dataset is represented in links. Links to objects and concepts will therefore normally no longer work.
Moving from 10.4 to 10.5 links will no longer contain their query parameters as an encrypted string, but as a human readable list of name value pairs. Links to objects and concepts made with versions <= 10.4 will therefore no longer work.

<!--ID c7b050f6-1136-4fde-9490-694fcb7d3af9 -->
**#23342 Operator relies on Endpoints to configure namespace routing** (Services)

Operator 4.0.0 relies on Endpoints to configure namespace routing. Endpoints can be assigned to namespaces in Studio. This requires Genus >= 10.5.

<!--rntype05-end   BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Major new functionality
<!--rntype06-start MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 20f60592-0649-4b7f-8294-252c195028f5 -->
**#23341 Operator allows routing to multiple active namespaces** (Services)

Operator 4.0.0 supports routing to multiple active namespaces. This requires Genus >= 10.5.

<!--rntype06-end   MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Minor new functionality
<!--rntype07-start MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID a8c32391-3b9d-4ea1-9e68-ea6905781553 -->
**#23336 Icon control now has options to set symbol conditionally** (Web)

<!--ID b56f58c9-c3ba-432c-b945-35301112e7fc -->
**#23338 Reset Button in View/Table control** (Web)

Add reset button in View/Table toolbar

<!--ID 08978d35-8ca4-487a-a1fa-b3ceb6e49ee9 -->
**#23339 Color Set on Table Cells** (Web)

Add Color Set property to Table Cells in View/Table control

<!--ID a8aacef6-35f1-45a9-ab01-719b181139a9 -->
**#23343 Redis Sentinel** (Services)

Genus now supports the use of sentinels when deploying Redis. In the case that number of replicas for Redis is greater than 2 the pods will contain an extra container with Redis Sentinel. This container will form a cluster of Redis Sentinel nodes, which will promote a new master in case the actual one fails.

<!--ID f1196ae4-7f20-4574-8508-7390eed1f12f -->
**#23347 New client action effect supporting sending mail messages: "Send a Mail Message"** (Web)

The content of the mail message, such as addressees, subject, body, and attachments, are defined using a data set based on a data source of type *Mail Message*. Typically you would fill out the content using a *Create a Object* effect or populate the data set from a dropped or selected msg-file. The effect creates an upload session so that attachments can be streamed to the server one by one in order to support large attachments.

<!--rntype07-end   MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Resolved issues
<!--rntype08-start RESOLVED ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID afdef7bf-2598-42cf-931b-104872a47e91 -->
**#23326 Required could not be saved for query parameter in Rest Service Editor** (Studio)

<!--ID b85eb3ba-341c-46de-a8c6-b119f5dec5c3 -->
**#23327 Fixed automatic naming of controls when added to Page** (Web)

<!--ID d68db030-affc-4614-80c9-6b9eee307f09 -->
**#23337 It was possible to enter invalid characters for name of control in Page Designer** (Web)

This was not intentionally and we are now preventing whitespace from being entered.

<!--ID b5a2c356-7f35-46f4-98b7-d15201b84dd7 -->
**#23340 Improved clipboard monitoring when copy is performed in the system** (Desktop)

<!--rntype08-end   RESOLVED ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Known issues

Known issues are errors or lack of functionality. Known issues may be solved in a future release based on customer demand.
<!--rntype09-start KNOWN ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
There are no known issues in this release.
<!--rntype09-end   KNOWN ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Tips and hints

Tips and hints are design decisions or answers to support questions that may be of general interest.

There are no tips and hints specifically targeting this release.

## Change log

- 2020-11-10 Created.
<!--changelog CHANGELOG. DO NOT CHANGE THIS TAG. ANY CHANGES BELOW WILL BE DELETED.-->
