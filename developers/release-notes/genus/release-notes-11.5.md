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
<!--ID b56a108e-9757-4a41-a1bd-568e2db28ef1 -->

**#23673 Breaking change in Pie Plot and Bar, Line, Area (Bar Plot)**

<b>The setup and meta model for these two chart controls is now altered in a way leading to a breaking change. The controls will need re-modelling. </b>

<h3>Short version:</h3>
The business engineer now needs to set a MANDATORY category, by choosing an object reference field from the main data binding of the control/data series. This effectively removes auto categories, i.e. there being a 1-1 relationship between a category and an object/data row in the main data binding. (Automatic generation of the categories). 
<br/>
<br/>
<h3>Longer version:</h3>
<h4>Pie Plot:</h4>
Previously, one could use <b>auto categories</b> by having each "pie" in the chart originating from an object in the data binding. Now, after choosing a data binding, the business engineer has to choose a <b>category object reference</b> from a drop down (whose options are generated from the different reference fields available on the object class of the data binding).
<br/>
<br/>
The business engineer then must choose one of two options for the categories: <b>Specified in data set</b> or <b>Derived from data</b>. 
<br/>
<br/>
If Specified in data set is chosen, a data set of the same data source type must be chosen. The "pies" in the chart will then correspond 1-1 to objects in the chosen data set. Even if no object from the main data binding "points" to the category, the category will still be present in the pie, legend, and value labels, as an "empty pie".
<br/>
<br/>
If Derived from data is chosen, no data set needs to be chosen. The only categories (pies) which will appear will be the ones referenced as field values from objects in the main data binding. 
<br/>
<br/>
Another new config in the pie plot is the <b>Data may contain duplicates per category</b> switch. If enabled, the business engineer must choose a <b>local aggregation method</b> (sum, min or max) for handling the mapping of duplicate value objects into a single category. If disabled, and duplicates still occur in the runtime data, the pie plot will be replaced by an inline error message box. (Duplicates in the data prevents the use of functionality for exploring the source data of an Aggregate Object Class.)
<br/>
<br/>
<h4>Bar, Line, Area:</h4>
The changes in this control are similar but distributed in the category edit and data series edit modal. 
<br/>
<br/>
As presently, the business engineer defines categories, value axes and data series separately in each their own modal. Choosing a category composition, category data set vs. derived categories and potentially a category data set is done in the category configuration. Allowing duplicate data per category and potentially a local aggregation method is done in the data series configuration. 
<br/>
<br/>
Choosing a category field in each data series is now mandatory, rather than only required when a non-auto category was chosen as the axis category.
<br/>
<br/>
<h5>Remark:</h5>
The data set in context in the page designer will be affected by the categories being derived or not, and whether the control/data series allows duplicate data entries per category. 
<br/>
<br/>
Selection is also affected by the same two parameters.

<!--rntype05-end   BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->

## Major new functionality

<!--rntype06-start MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->

There are no major new functionality in this release.

<!--rntype06-end   MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->

## Minor new functionality

<!--rntype07-start MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->

There are no minor new functionality in this release.

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
