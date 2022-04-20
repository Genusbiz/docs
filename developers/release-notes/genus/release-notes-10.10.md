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

<!--ID 30a27030-2159-4cb3-b288-1a3e6fb2742a -->
**#23441 New configuration of phone home variables** (Operator)

In order for Phone home to work, customer sample id and phone home API key values are required. Both will become available in Operations. Until then, contact the ES team if you need API values.

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

<!--ID 3d24f0bb-c966-40b4-b6c2-b4e39cc687d1 -->
**#23437 Move map marker with touch or right click** (Web)

It is now possible to move marker in Single Location Map by touch hold on a location on a phone, or right click and select "move marker here" on desktop.

<!--ID ec4b88a7-8ed9-40b9-9575-d51dae2701c4 -->
**#23438 Link to event logs from operator frontend** (Operator)

Operator frontend now has an "Event Log" button in the navigation pane. When the button is clicked, a new tab is opened in the browser with the event log for the current environment. The URL is collected from the environment variables which is set in the Helm chart.

<!--ID c733d477-365c-4023-8645-d5a4fe064b6a -->
**#23439 Revamp of Developer Tools and introduction of Data Source Inspector** (Web)

Data Source Inspector is now available as a tab in Developer Tools. 

This may be useful for: (1) viewing all entries for a given Data Source to find invalid entires preventing save, a situation typically cased by a create without return to an applicable data set, (2) allowing the Business Engineer to better understand how data is loaded and stored in memory.

Other remarkable changes:

- Layout is changed from grey to white, and a new table (techincal: using our own Table component, not <table>).
- Transition from Data Set to Data Source Inspector is available from the Summary view using a hyperlink. Useful if the Data Set and Data Source has different names.
- Icons are changed to give a more Fluent look and comply with Universal Design.
- Data Set and Data Source ID fields are hyphenated and available for copying using a button behind the value.
- Required fields are displayed with a trailing star (*) and primary key is displayed in bold.

<!--ID 3400df89-1754-44b6-ae53-88f6ff6d3ac9 -->
**#23445 Lookup now supports containing search**

When searching in a lookup field, the server now uses the default operator on the text field instead of always using starting with.

<!--rntype07-end   MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Resolved issues
<!--rntype08-start RESOLVED ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 3a5b4420-7cd5-4ddb-952e-791f39140824 -->
**#23462 Fixed problem registering dates in january in Date Input width Date and Time in separate controls** (Web)

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
