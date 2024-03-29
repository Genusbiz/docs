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

See also the following notes.

<!--ID bd5be0bf-ecde-4105-8c41-f0dd7e314df0 -->
**#23549 Containerd**

Genus version 10.17 now supports Containerd as runtime environment for containers. Containerd is the default container runtime for AKS version 1.23 and higher.

To run Kubernetes version 1.23 and higher we recommend upgrading to 10.17.

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
**#23532 Dashboard: Limit to N values requires sorting of the involved Data Source**

The "Limit to N values" option has to be used in combination with sorting, else the result is not deterministic. We now enforce this by showing an error message in the tile, if Limit to N values is assigned without sorting. The error is displayed both designtime and runtime, hence **BREAKING**.

The setting is located in the "Sort and limit" section of the Format tab.

Prior to this, some tile visualizations would limit the data (randomly) and others would return the whole data set without limiting it.

**All dashboard defined in the appmodel should be opened after upgrade to verify that the setup is valid.**

<!--rntype05-end   BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Major new functionality
<!--rntype06-start MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 037a3f26-2619-4149-be4e-459d81c60fb8 -->
**#23534 Automatically verify the model after upgrading Genus**

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
**#23528 Dashboard: Improved error handling in Dashboard Tiles**

Errors are displayed in the same fashion in the designer and runtime (errors is listed in the footer of the tile).

In addition, errors caused by no valid path between value and category is displayed in the designer to proactively prevent Bad Request-error runtime. Bad Request errors are displayed within the affected tile to allow better pinpointing of the error locations (prior to this the whole dashboard would diplay an error and could not be used).

<!--ID 3014df5b-4695-4771-9b5d-56aa3428d5c5 -->
**#23531 Dashboard: List tile now supports subset for filtering the category data source**

<!--ID 649ae4b7-1111-43c1-90aa-c03f5c402573 -->
**#23535 Dashboard: Sizing of columns in table related tiles is now default automatically given by value**

<!--ID 1bd9a352-cb9f-4582-9efc-9c2b8a114e33 -->
**#23539 Name for Data Set changed to Data Partition**

Name changed both to avoid conflict with data sets used in web pages and client actions (partitioning data in a data source), and introduce a more precise term. Technically speaking Genus can partition data by using schemas/different databases (e.g. Visma) or horizontally by filtering on a global dimension (e.g. Agresso).

<!--ID 756585a7-7d4d-4d38-b801-3807b06e9bf2 -->
**#23540 Developer Tools: User interaction is disabled when paused on breakpoint in debugging an action.**

<!--rntype07-end   MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Resolved issues
<!--rntype08-start RESOLVED ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 2722f502-677e-42a2-b4e4-c5e85c229439 -->
**#23527 Missing value formatting in Grid Heatmap fixed**

<!--ID dafddb4f-c92b-42ff-aeff-9695f4e63dd1 -->
**#23529 Dashboard: Bug in Download as Excel Workbook in Grid Heatmap and Bubbles corrected**

<!--ID 313e5a9c-3aa6-4c91-95b8-bdec7dffe899 -->
**#23530 Dashboard: Bubbles tooltip corrected (displayed undefined prior to fix)**

<!--ID 2c86256d-6db5-446c-b333-69300bbbb5b4 -->
**#23533 Dashboard: Refine data in Table-tile on given subset(s), before "Limit to N values" is applied.**

<!--ID 138f88db-f350-4756-b983-c13d436e1776 -->
**#23536 Uncategorized values can now be used to summarize values which are not part of the category grouping**

<!--ID 346d709a-a661-442b-8cc3-a7b28253efa7 -->
**#23537 Possible to add duplicate dictionary texts with the same namespace and value**

Produces the following error if referenced in the expression language: "Duplicate constructs with name <dictionary-text-name> found in DictionaryTextClass. The name has to be unique. Right-hand-side is invalid or undefined".

<!--ID bcf3747e-ad8b-4219-b3ef-08c01868a239 -->
**#23538 The function Directory.currentLanguage() in the expression language returns incorrect result on web**

An expression such as Directory.currentLanguage() = NaturalLanguage.norwegian_Bokm&aring;l_Norway does always return false even if the current language equals Norwegian Bokm&aring;l. Works on desktop, but not in the web client.

<!--ID 961aa96e-0696-42dc-8f58-239e8e32c6e2 -->
**#23541 Dashboard: Selection for dashboard embedded in modal page is now assigned correctly**

<!--ID 8a33aaa1-e340-49ef-aca9-bc14522aaaf6 -->
**#23542 Value for dictionary translations truncated after 60 characters**

Changed to variable-length character string.

<!--ID 1d3cff27-3615-47a5-bacf-05d0e7b99836 -->
**#23544 Improved UX for tables displaying "built-in" concepts (User Administration, Analytics & Insights,..)**

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
