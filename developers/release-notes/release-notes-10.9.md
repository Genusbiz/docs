---
title: Release notes for Genus 10.9.
description: User-visible changes to Genus from release 10.8 to 10.9.
author: jtroset
---

# Release notes for Genus 10.9

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
<!--ID 2d363791-ab84-4b6b-9825-579942d40698 -->

**#23410 Show Page title for a Embedded Content in a page** (Web)

Page title for embedded content now appears if Search is enabled or the switch is set to true for the embedded content.

<!--ID 74b9831b-b522-4cc5-be48-e3c19ff8487f -->

**#23415 Privilege for Open the Analytics and Insights app om the web** (Web)

A user must be in a security group with the privilegde Open Analytics and Instights to be able to access the app on the web

<!--rntype05-end   BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->

## Major new functionality

<!--rntype06-start MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 866c4eb6-1858-4864-b6ea-1c3596293e7b -->

**#23399 Audit Trail History on web** (Web)

Audit Trail History can now be viewed in the web client. The viewer is available in context menus and the Action Bar alongside Auditing and Permissions actions (right aligned in the Action Bar).

The viewer resembles the Audit Trail History viewer in Genus Desktop. Improvements to existing functionality includes pagination of events, more granular search, and the possibility to download Audit Trail History events as a spreadsheet.

<!--rntype06-end   MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->

## Minor new functionality

<!--rntype07-start MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 73b1138f-fd0d-4557-ae12-a09e2988f3d1 -->

**#23408 Added expression value to the options in StaticIconEdit** (Studio;Web)

<!--rntype07-end   MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->

## Resolved issues

<!--rntype08-start RESOLVED ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 0b5c29f9-6225-4579-a4fa-fff49ff3ba3b -->

**#23401 resolved the icon props properly in the cause of auto Icons, and icon now defaults to auto** (Web)

<!--ID 03f68525-dd81-40f3-adf6-eecb39c40bbb -->

**#23404 Added extra conditions to Relative date format, so it stops comparing hours when it's only a Date** (Web)

<!--ID c62c3bc8-1410-483d-a3b4-af3f411ef318 -->

**#23406 Added error message when the parent of a component is a repeating container** (Studio)

<!--ID 72a82934-88e2-4382-9a2f-8138b9885165 -->

**#23409 Improved visibility for connection lines in Class Diagram in Studio** (Studio)

<!--ID 11cfa45e-db55-456a-9090-ee8eb269d6dd -->

**#23416 Numeric Controls with custom format with percent was not handled correctly** (Web)

<!--rntype08-end   RESOLVED ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->

## Known issues

Known issues are errors or lack of functionality. Known issues may be solved in a future release based on customer demand.

<!--rntype09-start KNOWN ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->

There are no known issues in this release.

<!--rntype09-end   KNOWN ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->

## Tips and hints

Tips and hints are design decisions or answers to support questions that may be of general interest.

There are no tips and hints specifically targeting this release.

<!--changelog CHANGELOG. DO NOT CHANGE THIS TAG. ANY CHANGES BELOW WILL BE DELETED.-->
