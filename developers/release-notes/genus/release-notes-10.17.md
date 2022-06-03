---
title: Release notes for Genus 10.17.
description: User-visible changes to Genus from release 10.16 to 10.17.
author: jtroset
---

# Release notes for Genus 10.17

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
<!--ID 617742ea-601c-43c4-8655-eabb667ada88 -->
**#23532 Dashboard: Limit to N values requires sorting of the involved Data Source** (Studio;Web)

The "Limit to N values" option has to be used in combination with sorting, else the result is not deterministic. We now enforce this by showing an error message in the tile, if Limit to N values is assigned without sorting. The error is displayed both designtime and runtime, hence **BREAKING**.

The setting is located in the "Sort and limit" section of the Format tab.

Prior to this, some tile visualizations would limit the data (randomly) and others would return the whole data set without limiting it.

**All dashboard defined in the appmodel should be opened after upgrade to verify that the setup is valid.**

<!--rntype05-end   BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Major new functionality
<!--rntype06-start MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 037a3f26-2619-4149-be4e-459d81c60fb8 -->
**#23534 Automatically verify the model after upgrading Genus** (Services)

A new feature called the verify-model-job has been added.

This is an automatic Kubernetes-job that runs after Genus is deployed to Kubernetes. It uses existing config parameters to run Genus Meta Model Manager and verify that the meta model is looking good. The database is checked for any missing and unknown tables and columns and the results are printed to the log of the verify-model-pod, which can be lated in Operator. 

The job is opt-in the 10.17 (might be changed to opt-out later), and can be enabled by setting the follwing helm-value:

```
global:
  jobs:
    verifyModel:
      enabled: true
```

<!--rntype06-end   MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Minor new functionality
<!--rntype07-start MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID c3d4340b-1ebd-4cc1-b3a4-fe251f9606ef -->
**#23528 Dashboard: Improved error handling in Dashboard Tiles** (Studio;Web)

Errors are displayed in the same fashion in the designer and runtime (errors is listed in the footer of the tile).

In addition, errors caused by no valid path between value and category is displayed in the designer to proactively prevent Bad Request-error runtime. Bad Request errors are displayed within the affected tile to allow better pinpointing of the error locations (prior to this the whole dashboard would diplay an error and could not be used).

<!--ID 3014df5b-4695-4771-9b5d-56aa3428d5c5 -->
**#23531 Dashboard: List tile now supports subset for filtering the category data source** (Web)

<!--ID 649ae4b7-1111-43c1-90aa-c03f5c402573 -->
**#23535 Dashboard: Sizing of columns in table related tiles is now default automatically given by value** (Studio;Web)

<!--rntype07-end   MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Resolved issues
<!--rntype08-start RESOLVED ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 2722f502-677e-42a2-b4e4-c5e85c229439 -->
**#23527 Missing value formatting in Grid Heatmap fixed** (Web)

<!--ID dafddb4f-c92b-42ff-aeff-9695f4e63dd1 -->
**#23529 Dashboard: Bug in Download as Excel Workbook in Grid Heatmap and Bubbles corrected** (Web)

<!--ID 313e5a9c-3aa6-4c91-95b8-bdec7dffe899 -->
**#23530 Dashboard: Bubbles tooltip corrected (displayed undefined prior to fix)** (Web)

<!--ID 2c86256d-6db5-446c-b333-69300bbbb5b4 -->
**#23533 Dashboard: Refine data in Table-tile on given subset(s), before "Limit to N values" is applied.** (Studio;Web)

<!--ID 138f88db-f350-4756-b983-c13d436e1776 -->
**#23536 Uncategorized values can now be used to summarize values which are not part of the category grouping** (Studio;Web)

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
