---
title: Release notes for Genus 11.3.
description: User-visible changes to Genus from release 11.2 to 11.3.
author: jtroset
---

# Release notes for Genus 11.6

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

There are no breaking changes in this release.

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
- The new options **"Use Virtualization" and "Use Skeleton Loading" will give better control of appearance when loading and scrolling** a 2D Repeating Container. If Virtualization is turned on (default) cells outside the visible range will not be rendered. The setting "Use Skeleton Loading" (default on) will display a placeholder for cells until the content is loaded. If required, virtualization may be turned off, and all cells will be loaded initially. Setting this option allows smaller grids to be loaded completely from start, but may require more memory. In all cases, cells positioned in a pinned row or column will be loaded initially. When using 2D Repeating Containers with large data sets, turning off "Use Skeleton Loading" will have an impact on performance, as the placeholder elements also contributes to the document size in the browser.
- **Rows and Columns can have Color Sets and borders**. This gives the ability to style the 2D Repeating container as a grid without having to set background and borders on individual cells. Color Set can also be set conditionally. Moving large parts of the styling from cells to rows and columns will have an impact on performance.
- The option **"Appear Interactive"** on grid cells will make the grid more alive. Appear Interactive will use the Color Set assigned to the cell and display the hover and focus states when the cell is hovered or if focus is set within the cell.

<!--ID d59a8611-cb7f-4650-aab1-8de80a2a550f -->

**#23685 Find Usage of Action Effect and Control Types**

Added support for find usage of different server- and client effect types, and control types used in page and components. E.g. you can search for usage of a specific server action effect type, such as _Consume a REST Service_, located in global and local server actions, rules, REST services, and SOAP services. When opening an object containing the requested effect type, all effects of the given type is highlighted in the action flow.

To initiate a search, select _Find Usage_ in the _Action_ window menu in Studio.

<!--ID 88dc50e2-b78f-46bb-a6bc-62b2f76faf25 -->

**#23686 Highlight Usage of Effect Types in Server Actions**

To highlight where a given type of block or effect is located in the action flow, select _Highlight Usage_ in the context menu in the pane containing blocks, controls, and effects.

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