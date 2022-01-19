---
title: Release notes for Genus 10.13.
description: User-visible changes to Genus from release 10.12 to 10.13.
author: jtroset
---

# Release notes for Genus 10.13

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
<!--ID 23b1dc25-32f0-4c13-89a2-34ebf0bd22f0 -->
**#23466 Discontinued support for database versions**

Genus has discontinued support for some older databases

* Microsoft SQL Server versions prior to 12
* ORACLE versions prior to 12c are no longer supported.

These database versions lack support for vital Genus functionality, and are no longer in active use by clients.

<!--rntype03-end   END-OF-LIFE. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Deprecated functionality

Deprecated functionality is available in this release, but will (most probably) no longer be available in the next release.
<!--rntype04-start DEPRECATED. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
There is no deprecated functionality in this release.
<!--rntype04-end   DEPRECATED. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Breaking changes

This section lists important changes introduced in this release. You will need to use this list in order to understand the changes you might need to make to your application to support the new release.
<!--rntype05-start BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
There are no breaking changes in this release.
<!--rntype05-end   BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Major new functionality
<!--rntype06-start MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
There are no major new functionality in this release.
<!--rntype06-end   MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Minor new functionality
<!--rntype07-start MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 1d3ce605-7fae-4985-bca6-267ec3c4ba9d -->
**#23465 Visibility "Yes | No | For Specified Groups" added to Sitemap Components** (Studio;Web)

Visibility "Yes | No | For Specified Groups" added to Sitemap Components, allowing security group membership to control visibility of sitemap entries.

<!--rntype07-end   MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Resolved issues
<!--rntype08-start RESOLVED ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 3bcb9c06-d80b-47c9-b03d-46ba7f60cbee -->
**#23460 Data marts does not always reload as expected** (Services)

In some situations datamarts did not reload as expected.
Could happen either because of new data or because datamart definitions where modified.
The problem was due to a communications issue between the data mart scheduler and the data marts.
The issue is fixed.

<!--ID 2a85b846-323f-4dc3-9deb-b7092698b3db -->
**#23461 Entering invalid values into Integer Date Edit made the application crash** (Desktop)

<!--ID 3a5b4420-7cd5-4ddb-952e-791f39140824 -->
**#23462 Fixed problem registering dates in january in Date Input width Date and Time in separate controls** (Web)

<!--ID 6d9677f3-9d46-4ea6-b2b3-ddf8837d781d -->
**#23463 Fixed error generating text or Html from template** (Desktop)

<!--ID 8e83f605-7b47-4832-928e-946d1a386b42 -->
**#23464 Resolved XML namespace handling in 3rd party XML library** (Services)

Genus 10.2 replaced a Windows specific XML library (MSXML) with another multi-platform library (OXML), but also introduced a bug in the XML namespace handling. This bug has now been resolved.

<!--ID 6037c90d-77db-4e5b-9550-ca050551d725 -->
**#23468 Organizational chart is more compact**

Non-sibling nodes previously had a spacing of x2, spacing of all nodes are now set to x1. This results in a much more compact chart.

<!--ID f2b287db-c2e9-4d18-bae7-5235e152414e -->
**#23469 Context is available on create new object in data filters** (Web)

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
