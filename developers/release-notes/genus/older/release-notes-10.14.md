---
title: Release notes for Genus 10.14.
description: User-visible changes to Genus from release 10.13 to 10.14.
author: jtroset
---

# Release notes for Genus 10.14

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
<!--ID befa232b-80c0-4490-b231-202914eb0e04 -->
**#23499 Operator 6 requires Genus >= 10.14**

New label configuration requires Genus >= 10.14.

<!--rntype05-end   BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Major new functionality
<!--rntype06-start MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
There are no major new functionality in this release.
<!--rntype06-end   MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Minor new functionality
<!--rntype07-start MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 4be473ab-3e4b-4aea-b1a4-cafa3df536bd -->
**#23479 Available added to Client Action to allow scope of visibility/enabling to specified Security Groups**

Available added as setting to Client Action to allow scoping of visibility/enabling to specified Security Groups.

If Client Action is not available for the User, it will behave as follows:
- Hide Client Action from menus (Action Bar, Context Menus).
- Disable controls where Client Action is used as action (On Activate, On Drop, ++).
- Give a missing permissions warning if Client Action is used in Event Handlers (Navigate to Page, On Before/After Value Changed).
- Give a missing permissions warning if Client Action is called from another Client Action.

<!--ID 179113ec-c346-4a5c-ac4d-7a29419694d8 -->
**#23481 Display Callout is now available in onActivate in Display Field**

<!--ID 61bb6b79-55b0-47e0-bfb8-9795f37d1a8e -->
**#23490 Improved setup of Select Files in Page Designer**

- Added Placeholder text to indicate that no choice is equivalent to "all media types/all extensions".
- Added Helper Text describing the expected format of text input of Accepted File Extensions.
- File Extensions can be added using a multi selection lookup input with auto complete of "all" known filetypes.
- Now allowing only assignment of either: (1) Accepted Media Types, or (2) Accepted File Extensions. This is according to the way we validate files.
- Added Default values to allow Reset of values.

<!--ID e1cbf03a-d993-4467-9bb2-b1966e63a919 -->
**#23492 Badge Value is updated when Sitemap Entry is clicked**

<!--ID 4f95fc25-7bb2-4d8d-9070-030d5bd7e8e0 -->
**#23495 Start now functionality (one-time availability window)**

New button in Genus Operator availability schedule to instantly start up an environement outside of the availability schedule. A duration for how long the temporary window should last must be set.

<!--ID fe655de0-7f60-48db-8fe4-013e6933c8e1 -->
**#23496 It is now possible to edit existing availability windows**

<!--ID 4bae0e33-9a18-48ee-a191-5659acb1cef9 -->
**#23497 Availability window schedule is now automatically applied**

Changes made to the availability window schedule is now automatically applied to the environment, without having to click the "Apply"-button. 

To avoid the environment instantly going down when initially turning on the availability windows, a temporary half-hour availability window is automatically added in this case.

<!--ID 7b8c1aef-d75b-4bc2-b916-0e1fe81a60c3 -->
**#23500 Cumulative Values now available for all Categories**

Until now, the accumulation of Value data has only been available for Tiles with a temporal Category. Cumulative data has now been made available for all Tiles with one-dimensional Categories.

This is configured through the Data menu choice "Accumulation" in the Dashboard Designer.

<!--rntype07-end   MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Resolved issues
<!--rntype08-start RESOLVED ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 5bd02a22-7ae2-40c2-b67d-3d71bc07b9b7 -->
**#23480 Context menu is available by right click or ellipsis on resources in scheduler**

<!--ID 58dcfc1d-40d6-4f81-9bdb-c711223c685e -->
**#23482 Fixed proble with dialog not showing correctly when operned from a component from external module**

<!--ID f8c06221-4f93-484e-95d3-f36444751cc4 -->
**#23484 The setting Display Helper Text was not working for Display Field**

<!--ID 5a524988-b2ac-43dd-92c2-8acf12df775d -->
**#23491 ScreenTip on Buttons and Actions in Menus now uses title from action by default**

<!--ID 3e46c857-7937-40a3-b51b-cbe5401e0091 -->
**#23493 Client Action: Added missing reference to Data Filter and Data Sets for Read Related in Read Objects**

<!--ID fa296272-22c3-4957-889d-5a57fba55c6a -->
**#23494 Fixed runtime error when filtering in dropdown with numeric display values**

<!--ID d50a566b-9840-4b49-b8b7-7a02855d8a1d -->
**#23498 Operator scales pods correctly after model publication**

All resources (deployments/statefulSets) are scaled correctly after model publication.

<!--ID 9dc69ff8-1a6a-49c4-aecc-97845a643dc4 -->
**#23502 Handling of administrator membership is removed from user panel**

Modification of users in administrator group will only be possible from group administration

<!--ID a6600148-dec0-4a52-8a86-55e325e8f958 -->
**#23504 Summary row displayed undefined in columns with advanced rendering**

<!--ID ce6b8906-2f95-4f30-98f5-659708765a1a -->
**#23505 Improved Tab handling in Duration Input**

<!--ID 54086acb-5747-44b3-ab62-db161d7860ff -->
**#23506 Request to load names of Dashboards is only done when needed, reducing number of requests on startup**

<!--ID c5fa235f-506b-441e-ae94-dde7cbc5e446 -->
**#23508 Translated code domain members may cause errors when evaluating formulas on the web client**

**IMPORTANT**

If you have translated code domain members in your application model, you may experience errors when a formula defined on an object class property, such as a default or value formula, is evaluated on the web client.

The error would look something like 

*Invalid expression: timesheet.state = TimesheetState.draft. Errors: draft is not a construct of TimesheetStateClass.*

If you experience this error, please upgrade to version 10.14 or 10.15. Before you publish the application model, make sure that you do a minor change to an arbitrary object class, such as enter a temporary description, apply changes, remove the description, and then save changes.

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
