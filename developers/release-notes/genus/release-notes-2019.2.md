---
title: Release notes for Genus release 2019.2.
description: User-visible changes to Genus from release 2019.1 to 2019.2.
author: jtroset
---

# Release notes for version 2019.2

## Introduction

This document lists all user-visible changes to Genus Apps since the previous release.

This release note will be updated prior to the release and may also be updated as long as the release is available, e.g. with information of new patches or known issues. Please take note of the [installation and upgrading](#installation-and-upgrading) comments, and the release notes [change log](#change-log).

## Installation and upgrading

Prior to upgrading to this release, you must:

- Upgrade to the previous release. See the Release notes for the previous release for more information.
- Review the Expiry date of your Genus License File and install a new one if necessary.
- Review the rest of the release notes for this release.
- Please note that there does not exist any Genus Upgrade Assistant for this upgrade.

For general information about installing and upgrading Genus Apps, see [here](../../installation-and-configuration/index.md). We especially recommend reviewing the [System Requirements](../../installation-and-configuration/system-requirements.md) article.

## Important issues in this release

There are currently no critical issues in this release.

<!--rntype01-start INSTALLATION / UPGRADE. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->

<!--rntype01-end   INSTALLATION / UPGRADE. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
<!-- release note type 2 is missing. That's ok.-->

## End-of-life functionality

End-of-life functionality is functionality that was available in the previous release, but is no longer available in this release.
<!--rntype03-start END-OF-LIFE. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 57d04bda-a008-411e-98c0-1b21cca60f60 -->
**#23215 Gantt and Timeline controls**

Both the Gantt and Timeline user interface controls will be discontinued. Timeline functionality will be considered added in a later release, but tailored to better fit in with our other controls.

<!--ID b7416a52-aea1-4ba9-b6cf-1a986f66d511 -->
**#23273 Week numbers starting at 0** (Desktop;Studio)

From version 10, week numbers starting at zero is no longer supported.
In versions pre 10, check in calendar settings that  "Zero Week Day Limit" is 0

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
<!--ID a45c231a-3fbd-46ca-97f7-0ec8d1917a7b -->
**#23172 Context menu closes on Escape and clicks** (Desktop)

The context menu (right-click menu) now closes on Escape and clicks

<!--ID 466467f3-8914-48f2-aa9e-0050f4504dbe -->
**#23201 Handle special aggregation results in Discovery** (Desktop;Web)

Handle the special aggregation results NaN (ie. no observations), NegInfinity and Infinity

<!--ID b3a4412f-5087-42ea-b181-115eae4dc828 -->
**#23229 Prevent more than one value being grouped by Split by Category** (Desktop)

Can no longer define more than one value to be grouped by Split by Category in Analysis Designer. This introduces the concept of "Values not split by Category" for some tiles (i.e. all Column & Line types). In such existing tiles with two categories, all but one Value will now only be grouped by the primary Category.

<!--ID 4abcde43-ac14-4de0-971c-175a5059299f -->
**#23280 Add "Empty Selection" action to Dashboard action bar** (Desktop;Web)

<!--rntype07-end   MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Resolved issues
<!--rntype08-start RESOLVED ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 64225008-5d3f-4724-98ad-209428a3aae7 -->
**#23176 Removed option for creating formula in map layer values** (Studio)

Formulas for maps are not currently supported, but it was still possible to define formulas in map layer values. This possibility is now removed

<!--ID 462fd095-0318-463f-94c9-0ae81587d958 -->
**#23225 Fixed error when opening two email windows in sequence.** (Desktop)

<!--ID 599d0ff6-7683-4672-be10-0d33a9e630a7 -->
**#23238 Values for time dimensions sorted in alphabetical order in the column filter drop down in tables** (Desktop)

Values sorted in alphabetical order and not logical order. Values are now sorted by date.

<!--rntype08-end   RESOLVED ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Known issues

Known issues are errors or lack of functionality. Known issues may be solved in a future release based on customer demand.
<!--rntype09-start KNOWN ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 2101c06c-8121-4311-b4f0-0704812179a2 -->
**#23253 Fixed issue with camera integration in newest version of Android (native app)** (Web)

<!--rntype09-end   KNOWN ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Tips and hints

Tips and hints are design decisions or answers to support questions that may be of general interest.

There are no tips and hints specifically targeting this release.

## Change log

- 2019-04-01 Released (builds starting with 18.45.21).
- 2019-03-27 Created (builds starting with 18.45.1).
<!--changelog CHANGELOG. DO NOT CHANGE THIS TAG. ANY CHANGES BELOW WILL BE DELETED.-->
