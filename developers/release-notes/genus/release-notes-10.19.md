---
title: Release notes for Genus 10.19.
description: User-visible changes to Genus from release 10.18 to 10.19.
author: jtroset
---

# Release notes for Genus 10.19

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
There are no breaking changes in this release.
<!--rntype05-end   BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Major new functionality
<!--rntype06-start MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
There are no major new functionality in this release.
<!--rntype06-end   MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Minor new functionality
<!--rntype07-start MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 707553fa-ba24-43c5-9645-7a4e55896002 -->
**#23568 Browser Title can now be assigned within a page in page settings (part of WCAG)** (Studio;Web)

<!--ID 5e5b48e6-87ad-40ce-a16c-e1d1ebffc1c5 -->
**#23569 New functions available in Expression Language**

- WebRuntime.currentApp().title() *- returns then title for the current app*
- WebRuntime.currentPage().title() *- returns then title for the current page*

Introduced so that you can include this information in a custom defined browser tab title in your app. Other relevant functions you can use is

- DataPartition.activeDataPartition().name() *- returns then name of the current data partition*
- Directory.name() *- returns the name of your app model*

<!--ID aaca762e-006b-21b2-3491-e87a1ecef7b4 -->
**#23575 Rating control available** (Web)

The Rating control has been added to the control library. The control might seem similary to the Slider control. Given a range of unmbers, the user can, for istance, set a score with this control.

<!--ID 75b5903c-785d-a788-5d9e-ce54b3e046a2 -->
**#23578 Relation Dropdown** (Web)

New control created - Relation Dropdown. Used to create relation objects. For instance the relation between an e-mail and a mailing list.

<!--ID b32c1b66-efe0-ea5a-3f11-003cd0c90323 -->
**#23579 Relation Chip** (Web)

New control created - Relation Chip. Used to create relation objects, as width the existing Relation Lookup and Dropdown.

<!--rntype07-end   MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Resolved issues
<!--rntype08-start RESOLVED ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID b3977025-eefc-4524-ab7b-3ae0a90a6e77 -->
**#23574 Dashboard: Material UI icons has been replaced with Fluent UI and global Genus style has been added** (Desktop;Studio;Web)

All material UI icons has been replaced with Fluent UI icons, and the global Genus theme has been applied to Dashboard runtime and designer.

This *may* result in a slightly different visual apperance of existing dashboards.


Some of the changes includes:

- Font-size for the Body style has been reduced from 16px to 14px.
- Font-size used in the Action Bar is reduced from 16px to 14px, making the Action Bar more similar to action bars in other parts of Genus.
- Font-familiy is now Segoe UI Web.
- Font-weight is reduced for certain styles, making characters slimmer.

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
