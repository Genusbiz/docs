---
title: Release notes for Genus 10.22.
description: User-visible changes to Genus from release 10.22 to 10.23.
author: jtroset
---

# Release notes for Genus 10.22

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
<!--ID 2b93e5dc-69ac-4587-9a6d-629c67879b5e -->
**#23662 End of life for agents and old message queue mechanism**

Agents and the former message queue mechanism will be replaced in the next version  by scheduled actions and a new message queue mechanism, respectively. Version 10.23 serves as a "transitional" release in this regard, enabling users to switch between the old and new mechanisms.

<!--rntype03-end   END-OF-LIFE. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Deprecated functionality

Deprecated functionality is available in this release, but will (most probably) no longer be available in the next release.
<!--rntype04-start DEPRECATED. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
There is no deprecated functionality in this release.
<!--rntype04-end   DEPRECATED. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Breaking changes

This section lists important changes introduced in this release. You will need to use this list in order to understand the changes you might need to make to your application to support the new release.
<!--rntype05-start BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID caab5952-5072-947f-67af-09b7cd38f082 -->
**#23631 New default "Command Timeout" for all linux-rdbms-vendors**

A default command timeout is introduced for all linux-rdbms-vendors.
The new default is 30 seconds.
Previous defaults could be vendor specific, even unlimited.
**Command Timeout** can be specified as a parameter, in seconds, on a **Physical Database Connection**.
Setting **Command Timeout** to a value <= 0 will result in no timeout.

<!--ID cb360a4b-36b8-a7e9-b836-f79c84271ec9 -->
**#23633 New IdPorten config property**

For identity provider IdPorten there is now a new required property: "idPortenEndsessionUrl"

The value should be the "end_session_endpoint" found in the .well-known documentation for IdPorten:
New IdPorten - test: https://test.idporten.no/.well-known/openid-configuration
New IdPorten - prod: https://idporten.no/.well-known/openid-configuration

Old IdPorten - test: https://oidc-ver2.difi.no/idporten-oidc-provider/.well-known/openid-configuration
Old IdPorten - prod: https://oidc.difi.no/idporten-oidc-provider/.well-known/openid-configuration

<!--rntype05-end   BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Major new functionality
<!--rntype06-start MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID c5326171-750e-f05d-cf4b-efadada22758 -->
**#23630 Purpose built services for handling message queues and scheduled tasks (agents)**

In 10.23 we are doing some changes to the genus-core-services-part of the Genus runtime. This leads to some breaking changes in the helm-values used to configure a runtime. 

We are preparing for changing how the handling of message queues and scheduled actions are being done. This will be moved from the core-service (or mega-service) to their own services. This will make it easier to handle requests comming from web or rest, without being affected by heavy processing jobs being triggered by scheduled actions (agents) or message queues. 

This means that whereas before there might be a need for a seperate runtime to handle agents, these jobs will now run on their own service, and should not affect web or desktop users.

To make these changes possible, we had to make some changes to the structure of the helm-charts, and how they are configured. Where before configuration for the mega-service and data-mart-query-service would be under "genus-core-services.megaService", it should now be under "genus-mega-service" directly on the root level of the config file. The same goes for the data-mart-query-service. 

For a full description of how the value-files shoud look, see https://docs.genus.no/developers/installation-and-configuration/deploying-genus-10-on-kubernetes/genus/helm-values-description/genus-10.23.html

**While the value-files are updated in 10.23, the existing queue-functionaly will continue to work as before. The new message-queue and scheduled actions are available as experimental features in this version.**

<!--rntype06-end   MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Minor new functionality
<!--rntype07-start MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID d8b066fd-b386-29c8-131c-bc9b7e2cb26b -->
**#23629 Initial view on Start Page has been changed**

The Start Page in Genus Web is initially displayed with large tile showing the app's names as well as the descriptions. 

Make sure your apps has a good description.

The overall functionality of the start page is otherwise not changed, so the size of the tiles can still be selected by the user and is retained between sessions (stored in the borwser's local storage).

<!--rntype07-end   MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Resolved issues
<!--rntype08-start RESOLVED ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
There are no resolved issues in this release.
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
<!--changelog CHANGELOG. DO NOT CHANGE THIS TAG. ANY CHANGES BELOW WILL BE DELETED.-->
