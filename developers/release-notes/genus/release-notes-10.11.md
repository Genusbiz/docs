---
title: Release notes for Genus 10.11.
description: User-visible changes to Genus from release 10.10 to 10.11.
author: jtroset
---

# Release notes for Genus 10.11

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
<!--ID 07daadf4-b097-4b32-8362-e237c5fe35ac -->
**#23440 Defaul value for "Lock Positon" flag is set to "true" in Dashboards** (Web)

This entails that the user will not be able to resize or move Tiles, unless the flag is manually set to "false"

<!--ID f8b65ae8-8d79-4f9e-8728-fda751f25043 -->
**#23446 Previous/next master record navigation** (Web)

Enable browse objects is now available to allow previous/next master record navigation in Form opened from View.
The setting is assigned in the Navigate to Page action within the Page Designer of the View where the Form is to be opened from.

The Enable Browse Objects setting is visible when:

- (1) Navigate To Page is defined within the Page Designer
- (2) Source page is of layout type View and target page is of layout type Form
- (3) The object class of the source and target master data source is the same


Other minor changes:

- Naming for mechanical actions located in the right action bar is omitted to reduce size of the buttons. The action name is still visible in screentip on hover.
- Excess dividers are removed (leftDivider for leftCommandBarItems and vica versa).

**Note**: The Action Bar is only visible when it has defined actions in addition to the mechanical actions.

<!--ID f1048e0f-1009-4a5c-b014-080e0fc9f7ea -->
**#23449 View Kubernetes events** (Operator)

Operator now shows Kubernetes events. The events can reveal errors and warnings from namespaces associated with the model.

<!--rntype07-end   MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Resolved issues
<!--rntype08-start RESOLVED ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID a8ef4710-8ac2-4867-a884-f3272ec6fa93 -->
**#23443 Merged documents with Norwegian culture are now openable in Acrobat** (Services)

<!--ID dc426f89-ede6-4bfa-a1ca-7e074f03d9c4 -->
**#23444 It is now possible to change referenced data set on refined data sets if data source is the same.** (Studio)

<!--ID 4acc31f8-860b-489c-a275-870336593ea2 -->
**#23447 Control View pane: Only list applicable Viewport Areas for selected Viewport and in logical order** (Studio)

<!--ID 896de4be-b37a-4f47-a3d0-ff8d318897f4 -->
**#23448 Fixed error in Tab Control that rendered incorrect data when switching page** (Web)

<!--ID 81ef3479-da45-4899-b65b-1892d14fa2d9 -->
**#23450 Filter status was not always displayed correctly in Table Column** (Web)

<!--ID 4676cc5b-0093-419e-9033-407a4877a748 -->
**#23451 Improved tile menu in Dashboard Designer** (Web)

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
