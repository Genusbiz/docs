---
title: Release notes for Genus 10.10.
description: User-visible changes to Genus from release 10.9 to 10.10.
author: jtroset
---

# Release notes for Genus 10.10

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
<!--ID 16c3b386-d3d3-4430-97ec-b448b987e7e9 -->
**#23433 Genus** (Services;Studio;Web)

Genus now requires kubernetes version >= 1.19

<!--rntype05-end   BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Major new functionality
<!--rntype06-start MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
There are no major new functionality in this release.
<!--rntype06-end   MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Minor new functionality
<!--rntype07-start MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID d680bfbc-0b39-43c9-8e6d-cbb03d983b84 -->
**#23427 Added functionality to scheduler component.** (Web)

The scheduler component now supports:
- Week and month view.
- Option to disable user's ability to change time resolution.
- Formatting on from and to date/time.

<!--ID 70aa81dc-0c7a-4037-b783-84d76dc2443e -->
**#23431 It is now possible to define selection validations on data sets that are evaluated before selection.** (Web)

<!--ID 963965ac-b4e0-4228-a09a-02d91b9a5ea2 -->
**#23435 Sorting - page data sets** (Web)

Page data sets are now sorted by default on:
- Master data set
- Public
- Name

Added single column sorting by regular click on column header, or multi column sorting by holding shift while clicking column headers.

<!--ID 6b6a51c5-abb3-4380-a580-f94897e6ec64 -->
**#23436 Show Action Bar and Show Page Title added as properties to controls used to navigate to page** (Web)

Show Action Bar and Show Page Title added as properties to Sitemap, Embedded Content, Tab Control and Navigate to Page.

Show Page Title is dynamically assigned when selecting a target page. By default View shows the page title, while Form and Canvas does not.

If search is enabled or the page is added as part of a pages group in the sitemap, the page title is always shown.

<!--ID 3d24f0bb-c966-40b4-b6c2-b4e39cc687d1 -->
**#23437 Move map marker with touch or right click** (Web)

It is now possible to move marker in Single Location Map by touch hold on a location on a phone, or right click and select "move marker here" on desktop.

<!--ID ec4b88a7-8ed9-40b9-9575-d51dae2701c4 -->
**#23438 Link to event logs from operator frontend** (Operator)

Operator frontend now has an "Event Log" button in the navigation pane. When the button is clicked, a new tab is opened in the browser with the event log for the current environment. The URL is collected from the environment variables which is set in the Helm chart.

<!--rntype07-end   MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Resolved issues
<!--rntype08-start RESOLVED ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 0f7c702e-a83a-4d21-a710-f1243b0ea525 -->
**#23434 Minor fixes to the action debugger on web** (Web)

- The action debugger did not stop on breakpoints unless the debugger was selected in the dev tools sidebar. Behaviour changed so that the debugger will stop as long as the dev tools sidebar is opened.
- In some cases, the debugger did not display the correct client action when a breakpoint was reached.

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
