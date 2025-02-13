---
title: Release notes for Genus 11.3.
description: User-visible changes to Genus from release 11.2 to 11.3.
author: jtroset
---

# Release notes for Genus 11.5

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
<!--ID 5fec7424-254f-4ca1-8468-d4721e0d2434 -->
**#23682 Audit Trail on built in types is deprecated**

These audit trails had limited value as long as they mostly consisted of modified xml documents.
Execution logs for appliccable types are still available, but now moved to a separate log.

<!--rntype03-end   END-OF-LIFE. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Deprecated functionality

Deprecated functionality is available in this release, but will (most probably) no longer be available in the next release.
<!--rntype04-start DEPRECATED. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
There is no deprecated functionality in this release.
<!--rntype04-end   DEPRECATED. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Breaking changes

This section lists important changes introduced in this release. You will need to use this list in order to understand the changes you might need to make to your application to support the new release.
<!--rntype05-start BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 76d44a7b-b27c-47c3-ac13-5539eb45c9d0 -->
**#23689 Log Cleanup Simplified**

Cleanup of logs, including **Audit Trail**, **Execute Log** and **Read Log**, was previously performed by modelling a **Scheduled Task** with **Delete Objects** effect.

This functionality is replaced with a much more elegant mechanism.

Simply open **Genus Studio** | **Settings** | **Logging**, and specify the number of days you want the information in the logs to live. Specify 0 days if you do *not* want automatic cleaning of any of the logs. The default value after upgrade is NULL which signifies 0 (no automatic cleaning).

Cleaning is done by deleting the 3 oldest logs at a time every 10 seconds to avoid locking of the table. Both the number of logs deleted per cycle and frequency is configurable.

Keep in mind that you should have a index (preferably clustered) sorted on created date to make sure the SQL-query is fast.

If you already have a custom log cleaning method consider removing it.

You should at the same time delete the old **Scheduled Actions**, as they will fail in this version.

<!--ID a018b99e-e82f-4500-904a-0b24830ebf63 -->
**#23690 All fields converted from Local time to UTC**

All date-time fields defined by Genus (not the ones you define in your model) will change from local time interpretation to being interpreted as utc.
In effect, all **Audit Trail** times and all fields of type "created date" and "modified date" will be off by the difference between the timezone defined on your installation and utc.
Scripts for converting the existing data will be provided, but due to potentially large volumes of data, it can be difficult to run this script as an update.
If the time difference is unimportant, leaving the history unchanged is an option.

<!--ID 27db6ba3-74c4-45ca-86b3-a8775b18037c -->
**#23691 Breaking Change Notice: Style Format Update**

Styles are now saved in a new format. When saving in either the Control Styles Editor or Style Settings Editor, the underlying data structure will permanently transition to this updated format.

<b>Important</b>: This change is irreversible. Once saved in the new format, control styles will not be compatible with previous versions (below 11.5).

<!--ID d7662f20-e668-4ccb-a93b-9e155e75589a -->
**#23696 Aggregate Reference Date now uses CalendarTime**

Aggregate reference date now expects its expression to resolve to **CalendarTime** instead of **Day**. 

Applications that run aggregates with the old reference date will crash.

To fix this, edit your aggregate data sets so that their reference date expressions return a CalendarTime object.

<!--ID 8b31e870-6803-4265-b929-93816dc91394 -->
**#23705 Public REST endpoints now uses Helm value global.allowedExternalOrigins to verify origin**

For clients using public Genus REST endpoints with cross-site requests it is now necessary to specify which origins that are allowed. The Helm value **global.allowedExternalOrigins** is an array containing every origin that will be accepted. The values here must match the origin header from the request. It is also possible to add '*' as a value, indicating then every origin is allowed (this is not recommended in must cases).

Example:
```yaml
global:
  allowedExternalOrigins:
    - https://example.com
    - https://example2.com
```

<!--ID 92930086-2026-4189-b755-b2583c7b8e2f -->
**#23711 Default typography has been updated**

The typographic styles available in Genus has evolved and matches the typography settings in Microsoft products again. In App Models where typography has not been modified, the appearance of some font styles will appear differently than previous versions. Check the typography used in your app models and update as needed. 

If you have already set your own typography styles, there is no need to change anything. 

If the font styles have changed and you want to return to the legacy styles, the typographic styles should be updated manually in Studio. Navigate to Web\Theming and Styling and select Fonts. The changes are listed below:

* Heading 1: 32 Semi Bold (was 42 Light)
* Heading 2: 28  Semi Bold (was 28 Light)
* Heading 3: 24 Semi Bold (was 20 Light)
* Heading 4: 20 Semi Bold (was 17 Semi Bold)
* Heading 5: 16 Semi Bold (was 14 Semi Bold)
* Heading 6: 14 Semi Bold (was 14 Semi Bold)
* Subtitle 1: 14 Semi Bold (was 14 Semi Bold)
* Subtitle 2: 12 Semi Bold (was 12 Semi Bold)
* Body 1: 14 Regular (was 14 Regular)
* Body 2: 14, Regular (was 14 Regular) 
* Caption: 12 Regular (was 11 Regular)

<!--rntype05-end   BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Major new functionality
<!--rntype06-start MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
There are no major new functionality in this release.
<!--rntype06-end   MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Minor new functionality
<!--rntype07-start MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 373b22d4-8db5-4bb9-8a51-e82900910e6e -->
**#23684 Improvements in 2D Repeating Container**

To improve the preceived performance of 2D Repeating Container, we have added a few changes in the control that makes loading or scrolling feel smoother. Some of the new settings should be considered particularly for grids with distinct column and row headers. Part of goal with the improvements was to reduce the number of HTML elements added to the browser when using the 2D Repeating Container, as large data sets in the controls may be tough for the browser to handle.

- **When scrolling, rendering will be postponed until the scroll operation has finished**. This will prevent the current problems with hang during scroll in previous versions of the component.
- The new options **"Use Virtualization" and "Use Skeleton Loading" will give better control of appearance when loading and scrolling** a 2D Repeating Container. If Virtualization is turned on (default) cells outside the visible range will not be rendered. The setting "Use Skeleton Loading" (default on) will display a placeholder for cells until the content is loaded. If required, virtualization may be turned off, and all cells will be loaded initially. Setting this option allows smaller grids to be loaded completely from start, but may require more memory.  In all cases, cells positioned in a pinned row or column will be loaded initially. When using 2D Repeating Containers with large data sets, turning off "Use Skeleton Loading" will have an impact on performance, as the placeholder elements also contributes to the document size in the browser.
- **Rows and Columns can have Color Sets and borders**. This gives the ability to style the 2D Repeating container as a grid without having to set background and borders on individual cells. Color Set can also be set conditionally. Moving large parts of the styling from cells to rows and columns will have an impact on performance.
- The option **"Appear Interactive"** on grid cells will make the grid more alive. Appear Interactive will use the Color Set assigned to the cell and display the hover and focus states when the cell is hovered or if focus is set within the cell.
- **Conditions on Color Set, Enabled and Screen Tip** is now available on cells. This means that it may be possible to move logic from containers inside the cells resulting in smaller document sizes.
- **Visibility on columns and Rows**.
- **Keyboard Support** for navigation between cells using the Tab- or Arrow keys

<!--ID d59a8611-cb7f-4650-aab1-8de80a2a550f -->
**#23685 Find Usage of Action Effect and Control Types**

Added support for find usage of different server- and client effect types, and control types used in page and components. E.g. you can search for usage of a specific server action effect type, such as *Consume a REST Service*, located in global and local server actions, rules, REST services, and SOAP services. When opening an object containing the requested effect type, all effects of the given type is highlighted in the action flow.

To initiate a search, select *Find Usage* in the *Action* window menu in Studio.

<!--ID 88dc50e2-b78f-46bb-a6bc-62b2f76faf25 -->
**#23686 Highlight Usage of Effect Types in Server Actions**

To highlight where a given type of block or effect is located in the action flow, select *Highlight Usage* in the context menu in the pane containing blocks, controls, and effects.

<!--ID 5aeb2817-a316-43cd-8d19-043def500da7 -->
**#23688 Metrics for consume a REST service/SOAP service**

We have introduced two new metrics, **`genus_consume_rest_duration_ms`** and **`genus_consume_soap_duration_ms`**. Both measures the number of milliseconds spent waiting for the external REST or SOAP service to process a request. The metrics are named based on the effect name, so in order to monitor the performance of specific services you need to name the effects accordingly.

<!--ID e2b4e0a2-a12d-47d3-9f6a-24cf9af684db -->
**#23693 Server Inspector now reflects true runtime behavior**

The server inspector has been updated to display and read only the fields that an action impacts, ensuring that inspections now accurately reflect runtime behavior, consistent with or without debugging.

<!--ID bdfb14b4-b082-4a2b-b613-2d8ef2989579 -->
**#23694 Designers now open in Web**

Page, Client Action and App- designers now open in web browsers.  This allows the user to bookmark their favorite pages, apps and client actions. 

All editors opened in Web also open as read only.

<!--ID f5a98739-09b0-4058-86b6-4b694a9cc94b -->
**#23700 Support for Redis with standalone architecture**

It is now possible to connect to a Redis instance configured as standalone, as opposed to replication (sentinel).

<!--rntype07-end   MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Resolved issues
<!--rntype08-start RESOLVED ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
There are no resolved issues in this release.
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
