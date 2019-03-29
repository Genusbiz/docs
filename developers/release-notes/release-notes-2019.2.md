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
* Upgrade to the previous release. See the Release notes for the previous release for more information.
* Review the Expiry date of your Genus License File and install a new one if necessary.
* Review the rest of the release notes for this release.
* Please note that there does not exist any Genus Upgrade Assistant for this upgrade.
 
For general information about installing and upgrading Genus Apps, see [here](../installation-and-configuration/index.md). We especially recommend reviewing the [System Requirements](../installation-and-configuration/system-requirements.md) article.

## Important issues in this release

There are currently no critical issues in this release.

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
There are no breaking changes in this release.
<!--rntype05-end   BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Major new functionality
<!--rntype06-start MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
There are no major new functionality in this release.
<!--rntype06-end   MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Minor new functionality
<!--rntype07-start MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 606ea95b-b89b-4bca-9f2d-20e29f78604f -->
**#23171 Implemented options to specify content type for Multipart requests in Consume Rest Service effect** (Desktop;Services)

It is now possible to specify the content type of both the root of multipart requests (typically multipart/form-data or multipart/mixed) and also for the individual parts og a multipart request.

<!--ID a45c231a-3fbd-46ca-97f7-0ec8d1917a7b -->
**#23172 Context menu closes on Escape and clicks** (Desktop)

The context menu (right-click menu) now closes on Escape and clicks

<!--ID 8bc8ea13-e641-4bfa-bf01-7114170c3a6e -->
**#23173 Better handling of "The data mart has new data"** (Desktop)

When  the data mart has new data, we load the new data and try to keep the current selection. A snackbar message notifies the user that "The Data Mart has been reloaded with new data".

<!--ID 8c5a44d5-d72d-44e3-a761-ad4bdab73fff -->
**#23174 Better handling of tile rendering errors** (Desktop;Studio)

If tile rendering fails due to an unknown error, we only display "Rendering tile failed" on the tile, instead of showing a modal/dialog you have to close.

<!--ID 25060f68-c16c-41e1-ba46-c03470799384 -->
**#23175 Display a message if a bookmark has been deleted** (Desktop)

A small message (snackbar) is shown to the user if he/she tries to open a bookmark that has been deleted (ie. does not exist).

<!--rntype07-end   MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Resolved issues
<!--rntype08-start RESOLVED ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 64225008-5d3f-4724-98ad-209428a3aae7 -->
**#23176 Removed option for creating formula in map layer values** (Studio)

Formulas for maps are not currently supported, but it was still possible to define formulas in map layer values. This possibility is now removed

<!--ID ce936e01-3fe3-4010-a8dd-ae8db39d4670 -->
**#23177 Bug fix: number format on formula value was cleared after editing formula** (Studio)

Number format on formula value formulas are no longer cleared after editing formulas

<!--ID a9b65be8-a1a9-4b28-95ce-3714f5d70a63 -->
**#23184 Theme** (Desktop;Web)

Modified the appearance of some dialogs to be more user-friendly.

<!--ID 1ac7b1be-ffbc-42c8-8f4f-36d4f4931b4b -->
**#23185 Transposed Table** (Desktop;Web)

Fixed an issue where transposed table would not display values.

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
* 2019-03-27 Created (builds starting with 18.45.1).
<!--changelog CHANGELOG. DO NOT CHANGE THIS TAG. ANY CHANGES BELOW WILL BE DELETED.-->
