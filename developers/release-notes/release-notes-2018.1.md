---
title: Release notes for Genus Apps release 2018.1.
description: User-visible changes to Genus Apps from release 2017.5 to 2018.1.
author: jtroset
---
# Release notes for version 2018.1

## Introduction

This document lists all user-visible changes to Genus Apps since the previous release.
 
This release note will be updated prior to the release and may also be updated as long as the release is available, e.g. with information of new patches or known issues. Please take note of the [installation and upgrading](#installation-and-upgrading) comments, and the release notes [change log](#change-log).

## Installation and upgrading
 
Prior to upgrading to this release, you must:
* Upgrade to the previous release. See the Release notes for the previous release for more information.
* Review the Expiry date of your Genus License File and install a new one if necessary.
* Review the rest of the release notes for this release. Pay special attention to any issues in the sections [Deprecated Functionality](#deprecated-functionality), [Breaking Changes](#breaking-changes) and [Known Issues](#known-issues). You may have to perform manual tasks.
* Please note that there does not exist any Genus Upgrade Assistant for this upgrade.
 
For general information about installing and upgrading Genus Apps, see [here](../installation-and-configuration/index.md). We especially recommend reviewing the [System Requirements](../installation-and-configuration/system-requirements.md) article.
<!--rntype01-start INSTALLATION / UPGRADE. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->

<!--rntype01-end   INSTALLATION / UPGRADE. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
<!-- release note type 2 is missing. That's ok.-->

## End-of-life functionality

End-of-life functionality is functionality that was available in the previous release, but is no longer available in this release.
<!--rntype03-start END-OF-LIFE. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 97dcb628-3db3-44ea-b25e-d7232ec68943 -->
**#22997 The support for Sybase is removed** (Services)

Since Sybase is not used by our customers anymore, the support for this database system has been removed. Support for Sybase may be reintroduced based on customer demand.

<!--rntype03-end   END-OF-LIFE. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Deprecated functionality

Deprecated functionality is available in this release, but will (most probably) no longer be available in the next release.
<!--rntype04-start DEPRECATED. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID b3c72df2-cb9d-4fe9-a30f-b56b82aaab69 -->
**#22994 Versions of Microsoft Windows Server older than 2016** (Services)

From the next release 2018.2, Genus Server will require Microsoft Windows Server 2016 for installation of Genus Services.

<!--ID a12a57fd-0fdd-4d29-9edf-1f7c18988de6 -->
**#23004 Removing on Lost Focus from ComboBox** (Web)

Removing on Lost Focus from Combobox, as it does not consistently across browsers, and in most cases, it is more correct to use on Value Changed.

<!--rntype04-end   DEPRECATED. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Breaking changes

This section lists important changes introduced in this release. You will need to use this list in order to understand the changes you might need to make to your application to support the new release.
<!--rntype05-start BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID c983fc7e-70ab-4206-9346-024282be871f -->
**#22998 Changed serialization to JSON for collection values** (Desktop;Services)

When serializing collection values to JSON, we would in earlier versjons serialize the values as a string containing all values of the collection separated with commas.
This has now been changed so that the values are serialized as an array with the values serialized in the correct data type.

<!--ID 72bb8b1d-40ec-4428-86f2-508474943531 -->
**#23022 Initial Catalog connection string property is automatically assigned if supported** (Services)

Unless the **Initial Catalog** connection string property is assigned explicitly when specifying [Data Link](https://docs.genus.no/developers/installation-and-configuration/configure-and-maintain-genus-server/genus-server-configuration/directory-properties.html#general) in the Genus Configuration tool, the Data Link **Database** property value will now be automatically used as Initial Catalog. The exception is Oracle databases (which does not support the Initial Catalog property).

<!--rntype05-end   BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Major new functionality
<!--rntype06-start MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 97261108-3334-4b86-a467-fe57da24b68b -->
**#23017 Added detail pane to tables** (Desktop)

When designing tables it's possible to add a detail pane. The detail pane can contain calculations and it can modify objects. Commands from the detail pane form can be added in the tables ribbon section.

<!--rntype06-end   MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Minor new functionality
<!--rntype07-start MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 1b2327c9-d594-4763-920c-70720283052d -->
**#23002 Added til to view name** (Studio)

Added a tip to view name when selection table views in different contexts

<!--ID 85793531-a348-4549-8c3c-ba2a47fc2123 -->
**#23007 (Analysis) Two dimensional grid now supports sorting** (Desktop)

The two dimensional grid can now be sorted on both horizontal and vertical category. The setting is available in the designer under "Format" -> "Sort and Limit"

<!--ID 591be5dd-b7ae-42ff-820c-c0eb37f70778 -->
**#23013 View symbol in the table header** (Desktop)

The table header now shows the view symbol if the shortcut gets its name from the target. If no symbol is defined in the table view, the shortcut symbol is used.

<!--ID d0895429-a142-4563-a0ca-0001e2872740 -->
**#23015 (Analysis) Data Point Labels** (Desktop)

The user can now specify custom data point labels. The option is available on Pie Chart and Doughnut Chart.

<!--ID 7b6ce845-eae7-4515-a792-aacbfc6f1ba2 -->
**#23024 Convert an integer value to a HTTP status code** (Studio)

Added function *fromInteger* to the HttpStatusCode enumeration defined in the Genus Apps language. The function converts an integer value to a HttpStatusCode:

```
HttpStatusCode.fromInteger(value : integer) : HttpStatusCode
```

One application of the function is to return a HttpStatusCode as a result of processing a request to a REST service defined in Genus Apps.

<!--ID 6984adc8-d560-4c10-bebb-204d3a0f1c2c -->
**#23025 Requirements imposed by the General Data Protection Regulation (GDPR)** (Studio)

Support for reading and deleting audit trails introduced. For more information, see the Genus Apps documentation: 

* [Reading data into built-in data sources](https://docs.genus.no/developers/defining-an-app-model/logic/action-orchestration/actions/effects/read-objects.html#reading-data-into-built-in-data-sources)
* [Delete the event history for objects](https://docs.genus.no/developers/defining-an-app-model/logic/action-orchestration/actions/effects/delete-objects.html#delete-the-event-history-for-objects)

Read of audit trails was previously not supported. Deleting audit trails was supported, but the functionality has been extended with the following functionality:

* For object classes defined in your directory, it is possible to delete audit trails for a filtered set of objects.
* Delete audit trails irrespective of age.

<!--rntype07-end   MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Resolved issues
<!--rntype08-start RESOLVED ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID e9c3af7e-32ef-4332-9b38-d09ef01899b4 -->
**#22999 (Analysis) New functionality  in dropdown component** (Desktop)

The dropdown component can now filter data runtime.   This can either be done by toggling "Show Excluded", which will remove disqualified objects, or by toggling "Show Selected", which will only show selected objects.

In addition, the following actions have been renamed on the component: 

Select All -> Select

Clear -> Deselect

Lock/Unlock Selection -> Lock/Unlock

<!--ID f1ad1763-ff5a-4401-b21a-0c485d434199 -->
**#23000 Filters applied to a report data source are ignored when the report is opened** (Desktop)

Filters applied in a *Run a Report* effect are ignored when the report is opened using an *Open a Form* effect.

<!--ID e49501ce-7bdb-488b-95c9-d5aec4fed08d -->
**#23001 Fixed rendering of Analysis and Maps in the desktop client** (Desktop)

The Analysis and Map control would sometimes not be rendered correctly in cases where the display scaling in Windows is set to other value than 100% due to a rounding error. This issue has now been corrected.

<!--ID 3533f01e-7eeb-49ad-a3a7-a7e11416b00f -->
**#23003 Fixed Select First syntax on DB2** (Desktop)

Some DB2 databases don't support Limit/offset. Change from using Limit to Fetch First xxx Rows Only

<!--ID a7a64fda-8a2c-40ce-b136-a38627bf29c8 -->
**#23005 Ignore selection in formulas** (Desktop)

Ignore selection will now work on formulas and formula values, regardless if the tile's category data source is affected by the selection

<!--ID db9bee1e-37d3-4fd2-a296-d0bc81cd4f5e -->
**#23006 Active object not nullified by combo box control** (Desktop)

Active object not nullfied when current selected item is cleared in a combo box control with binding type *Object*.

<!--ID d70f0f2d-3f55-44ac-acd1-a76152d6e366 -->
**#23009 Fixed problem with updating cells where the user don't have read access.** (Desktop)

If a property that the user dont have access to is listed, the column is removed. But if we have multiple rows, the column may still be created, but the cell for the given object is not created. If this object is updated we may try to update the column in the list and this caused Genus to crash.

<!--ID 919b8eda-dfd0-4237-a445-5e2d18d14ab7 -->
**#23010 Genus terminates when saving a data mart containing incomplete or invalid calculated fields** (Desktop)

<!--ID c5165b37-297c-48d3-b6d8-15c41162c041 -->
**#23011 Filter method for 16-bit integer object class properties is set to *None* as default** (Studio)

Changed behavior. By default the filter method is set to *Number and Text Operators* when the property is created. If the data interpretation is changed to *Boolean*, the filter method is set to *Boolean Operator*.

<!--ID f24d463b-d004-40dc-b17b-838b78ccad66 -->
**#23012 (Analysis) Background Image not being displayed on tile** (Desktop)

Fixed an issue that in some cases could lead to the background image not being displayed correctly.

<!--ID 8322e976-b3ba-49e3-a0d7-f14e8826acf5 -->
**#23014 Fixed problem with missing font in Windows 7** (Desktop)

Some symbols used in Genus are rendered by using a font supplied by the operating system. On some Windows 7 installations, the version of this font is missing some of the required symbols.
This issue has now been adressed by distributing the font with the software.

<!--ID a1b88005-8dc9-4f1b-b526-29f361caf933 -->
**#23018 Show number of objects in trackdown from a report** (Desktop)

When a table is opend in a stand alone window, the number of objects in the table is showed in the windows title if the option is checked in the table description.

<!--ID e64d5002-1401-400a-9a81-d6b7c487fe10 -->
**#23019 Number format for fields in a local object ignored** (Desktop)

Number format for fields ignored when a local object is displayed in a local object window from an open form effect.

<!--ID 240d7093-0d5e-4c5e-89e2-1c8e7ac49f1f -->
**#23020 Analysis configuration** (Desktop;Studio)

In version 17.5 and older, analysis could be configured by creating a config.json file in the root directory of the analysis installation, i.e. at C:\Program Files\Genus\Server\wwwroot\Discovery\ on the app server. These configurations have now been moved to Genus Studio. See https://docs.genus.no/developers/defining-an-app-model/general-settings/web-settings.html for more information.

<!--ID 2d8beb3a-e1fa-4848-a9f6-47b373356e4f -->
**#23021 New fields not available in table views** (Desktop)

Afther a user has customized fields in a view, the user must reset the current view to find new fields added by the Genus modeller. This problem is now fixed and all new fields will be added last in the available fields list

<!--ID 25e88936-4573-4e99-b35f-f2f49aff2223 -->
**#23023 Fixed an issue with the date picker on mobile devices** (Web)

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
* 2017-11-29 Builds for this release will start with version number 18.010.
* 2017-11-17 Created (Alpha stage).
<!--changelog CHANGELOG. DO NOT CHANGE THIS TAG. ANY CHANGES BELOW WILL BE DELETED.-->
