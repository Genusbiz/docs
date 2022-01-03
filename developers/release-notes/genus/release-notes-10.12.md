---
title: Release notes for Genus 10.12.
description: User-visible changes to Genus from release 10.11 to 10.12.
author: jtroset
---

# Release notes for Genus 10.12

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
<!--ID bee971cc-a102-4d65-9b33-4fd16457ffb9 -->
**#23454 Copy to Clipboard effect** (Web)

The Client Action libary has now been expanded with a Copy to Clipboard effect

<!--ID 81520653-6478-4bd0-9e99-2951252b4c13 -->
**#23458 Action Bar: Visible added as property for Ribbon Page and Section** (Web)

<!--rntype07-end   MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Resolved issues
<!--rntype08-start RESOLVED ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID d8dfad7a-80a3-4548-99f5-1eda1593997c -->
**#23442 Improved Sitemap experience** (Web)

The collapse and expand button is now an integrated part of the Sitemap, if the Sitemap is pinned. If not pinned or in mobile view, the collapse and expand button is part of the appbar. When the button is in the appbar, it will show/hide the Sitemap when clicked.

The pin/unpin button is only visible when the Sitemap is expanded.

The width of the Sitemap is now 300px to reduce variations in apperance when switching between apps or areas (width is 100% in mobile view).

<!--ID e0ef9ad6-5593-4239-80db-8d42ca964a40 -->
**#23452 Dashboard and Data Marts can now be changed by non app model admin users accounts** (Web)

<!--ID 4e2285ad-6a65-40e3-8378-8c718fff03e2 -->
**#23455 Buttons in the Filter Search Pane is always visible for the user.** (Web)

<!--ID d5b8126c-1a36-47f5-87f7-91bc485f7432 -->
**#23456 Fixed problem in Dropdown control with infinite wait indicator** (Web)

<!--ID 61384942-4696-4a82-ad98-30911498647e -->
**#23457 Fixed problem exporting objects to XML** (Services)

<!--ID 3bcb9c06-d80b-47c9-b03d-46ba7f60cbee -->
**#23460 Data marts does not always reload as expected** (Services)

In some situations datamarts did not reload as expected.
Could happen either because of new data or because datamart definitions where modified.
The problem was due to a communications issue between the data mart scheduler and the data marts.
The issue is fixed.

<!--ID 3a5b4420-7cd5-4ddb-952e-791f39140824 -->
**#23462 Fixed problem registering dates in january in Date Input width Date and Time in separate controls** (Web)

<!--ID 6d9677f3-9d46-4ea6-b2b3-ddf8837d781d -->
**#23463 Fixed error generating text or Html from template** (Desktop)

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
