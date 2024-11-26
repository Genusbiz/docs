---
title: Release notes for Genus Operator 11.3
description: User-visible changes for Genus Operators
author: jtroset
---

# Release notes for Genus Operator 11.5

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

See also the following notes.

<!--ID 95ba72ca-7133-4845-b818-46d8534dec2e -->
**#23683 Server Action Debugger (now Server Inspector) now requires a privilege to use**

The Server Action Debugger (now Server Inspector) now requires the privilege __Server Inspector__ to use. The feature flag \_\_GDEF_ACTION_DEBUGGER\_\_ that was used previously is depricated and is no longer in use.

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
<!--ID ac30fa68-4471-4beb-ad98-372e8e134db3 -->
**#23687 Grafana dashboards are now included with Genus Operator**

From version 11.5, the dashboards used by Grafana do monitor our microservices comes included in the same package with Genus Operator. 

We now recommend using kube-prometheus-stack for deploying monitoring tools, instead of genus-monitoring-stack. Read more details in the article Application Monitoring in Community.

<!--rntype05-end   BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Major new functionality
<!--rntype06-start MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 327b1515-c388-460a-bf2d-91ca1c3fb320 -->
**#23698 Version Deployment in Genus Operator**

It is now possible to deploy new versions of Genus and Genus Operator from Genus Operator. This can replace using pipelines for deploying, and also works with GitOps systems.

Read more details in the article: https://community.genus.net/linkhandler?linktype=object&pagelinkid=8b91a75a-627d-47b6-932e-e3ca95df812d&classid=1002916&objectid=2e6150bf-3e7a-47d5-a867-bdd0b4413478

<!--rntype06-end   MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Minor new functionality
<!--rntype07-start MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 4c136182-f223-4739-9914-cf6d367efbcb -->
**#23699 Configure maintenance periods in Genus Operator**

It is now possible to define a period in which the release is down for maintenance in Genus Operator. During this period, users who attempt to access any of the Endpoints will instead be redirected to a provided external URL.

<!--ID f5a98739-09b0-4058-86b6-4b694a9cc94b -->
**#23700 Support for Redis with standalone architecture**

It is now possible to connect to a Redis instance configured as standalone, as opposed to replication (sentinel).

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
