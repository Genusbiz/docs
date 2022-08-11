---
title: Release notes for Genus 10.18.
description: User-visible changes to Genus from release 10.17 to 10.18.
author: jtroset
---

# Release notes for Genus 10.18

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
<!--ID 1bdd0354-3dd1-4ec8-b3ff-028c085d60a5 -->
**#23545 Pie plot control is added** (Web)

Pie plot is added (as a doughnut). The control will be expanded to include doughnut and pie, to avoid creating too many similar controls.

The control does not aggregate itself, and depends on a binding with cardinality many and a number field. This field will be the displayed values in the plot.

<!--ID d32d21b5-55cb-45cd-ab0d-16d96f153cee -->
**#23546 Bar plot control is added** (Web)

Bar plot is added (as a columns, vertical bars). The control will be expanded to include horizontal bars, to avoid creating too many similar controls.

The control does not aggregate itself, and depends on a binding with cardinality many and a number field. This field will be the displayed values in the plot.

<!--ID 3fe3ee5e-0748-45cf-8b65-60abd3b2c376 -->
**#23554 Geolocation** (Studio;Web)

**Geolocation** has been added to allow the user to provide their location to the application. The user's location information can be used to plot their location on a map, or display personalized information relevant to their location.

For privacy reasons, the user is asked for permission to report location information. Usage of the user's location will trigger the browser to ask them for permission to access their location data. If they accept, then the browser will use the best available functionality on the device to access this information.

To comply with the guidelines of the Geolocation API and to be able to create applications asking for permission to view the user's location at the appropriate time (ie. when a map is displayed and the location is needed), the following new **client action effects** have been added:
- Start Monitor Geolocation Position (*Retrieve Once, Retrieve Each Time the Position of the Device Changes*)
- Stop Monitor Geolocation Position

The Geolocation is available in the expression language within the Geolocation class type. For example: Geolocation.coordinates().latitude()

To listen for changes to the position of the user a new Page Event has been added to the Page Designer: **On Position Changed**

<!--rntype06-end   MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Minor new functionality
<!--rntype07-start MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID b8ff4f37-78c5-4a75-b72f-ecd01b56ad83 -->
**#23547 Designers now display an information bar when opened in read-only mode, and an Enable Editing button** (Studio;Web)

<!--ID cfaa145a-e466-45e4-9a6e-69bc4645f980 -->
**#23548 New Data filter type for components** (Web)

We have added a new datafilter type for components in a page, called Data Binding. This filter binds the component data set to the page data set. This means that the two datasets are the same

<!--ID 43aacd62-1a20-4b16-9924-5d9ee5a7b8f3 -->
**#23550 Buffer for availability windows and active environment switching** (Operator)

It is now possible to configure a buffer time period for startup and shutdown of the environment. This buffer will effect when the environment goes up and down, which will improve the downtime both when switching between active and passive environment, and when entering an availability window. The buffer time period is configured in Genus Operator.

<!--ID 573cf579-cce7-4831-9fb3-478c95e69111 -->
**#23551 Relation Lookup** (Web)

The Chip Input control has changed name to Relation Lookup. Parent data set and parent field are now possible to model for the control, which makes it possible to, for instance, filter the control in a repetaing container.

<!--ID 7e3b0287-9e4f-4e6c-a415-8c6eefc774a1 -->
**#23552 Definition of default web page for an object class**

In the same way that you can specify a default desktop form for objects of a given type, you can specify a default web page of type form. The expression language has been extended to include a function which returns a link for a given object. The object is opened in the app given by the appPathSegment argument.

*<an-object>.defaultWebPageLink(appPathSegment:string) : URL*

<!--ID 1bb0fd88-61d3-4132-abb7-6d1cfeb9449a -->
**#23555 Renamed desktop effect "Merge Documents" to "Combine Documents"**

Based on terminology used by Adobe. Renamed to avoid confusion with *Merge Data to a Document* effect.

<!--ID ccdc8d29-477c-430d-859e-945b6be4f1a2 -->
**#23556 Renamed desktop effect "Process Message Queue" to "Manage Message Queue"**

<!--ID d8d66865-46de-421c-b47e-e56ff6ba593a -->
**#23557 Added drag and drop within organization chart** (Web)

Drag and drop has been added to the organizational chart control

OnDrop handlers have been added to each level of the organizational chart. The handlers are executed when other nodes are dropped on the respective level.
When defining onDrop, one can also choose valid "drag sources", which are the data sources (with the possibility of restricting to data sets) and cardinality that are allowed to drop.
When valid drag sources are defined, these will be made available as "Dragged Object(s)" in the action interface of the onDrop action on entries with data sources that match the valid drag sources.

It is permitted to modify valid drag sources so that one enters an invalid state in regard of the action interface. An error message will in this case be presented in the dialog, so that one knows a faulty state has been entered, allowing the business enigneer to correct the error. This will hopefiully make it easier to work, by not restricting changes, but rather inform if the changes introduce errors.

<!--ID f31f6ad6-ffa5-4c3b-b474-12c4bda2c240 -->
**#23558 Start Page Tile improvements: Context Menu, wrapping of titles and screen tip** (Web)

A context menu containing the following actions has been added to tiles in the start page:

- Open
- Open in New Tab
- Copy Link Address
- Show Small Tiles / Show Large Tiles
- Pin / Unpin

The pin/unpin button on start page tiles has been replaced with a "More Actions" button used to open the context menu. This is in accordance with universial design as actions are visible, easily available and more user friendly in cases where the user is performing navigation only by using the keyboard or is using the application on a mobile device.

The title of an app will now use two lines if necessary, and has a screen tip displaying the full name on hover.

<!--ID 975124ba-d770-4613-8f84-973f5c77cb51 -->
**#23559 Control Style: Hover and Focused/Selected Color Set added to Container Header** (Studio;Web)

Control style for container header now has the possibility to define a color set to be used on hover, and a color set to be used for the header when it is focused/selected (clicked).

<!--ID 8e7d5998-ebe0-49f3-bfbf-6b44b22489b7 -->
**#23560 Mark required** (Web)

Input controls can be marked required regardless of data validation. Marking can be set with a boolean flag, or by an expression.

<!--ID 97f9aea9-3326-4706-b1fd-a1ec20b221f5 -->
**#23561 Link control is added** (Web)

To better support page navigation, a Link control is added. The Link control can either hav a URL, or a Client Action conntected to it, supporting navigation either within the Genus page, or to another external web page.

<!--ID 81ba14b7-b243-4153-8ed0-78ec24f8e6d5 -->
**#23562 Password support for input fields** (Web)

Input field now has support for password fields. The property connected needs to have interpretation "password" for this to work correctly.

<!--rntype07-end   MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Resolved issues
<!--rntype08-start RESOLVED ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID f15493ff-fb9b-4453-b46f-2c4f189da097 -->
**#23543 Dashboard: Fit to Content and Default axis length options are removed, existing converted to Auto.** (Web)

<!--ID 1d3cff27-3615-47a5-bacf-05d0e7b99836 -->
**#23544 Improved UX for tables displaying "built-in" concepts (User Administration, Analytics & Insights,..)** (Web)

<!--ID 0392ca4d-0261-4e06-9cb1-0b4ed51a2507 -->
**#23553 IMPORTANT! Rules of type On Before Validate / On After Validate not executed on web**

Releated to rules defined for an object class. Rules defined on data source level within a module are executed as expected.

A patch is available both for release 10.17 and 10.16.

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
