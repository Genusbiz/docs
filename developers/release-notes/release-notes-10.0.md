---
title: Release notes for Genus 10.0.
description: User-visible changes to Genus from release 2019.2 to 10.0.
author: jtroset
---
# Release notes for Genus 10.0

## Introduction

This document lists all user-visible changes to Genus since the previous release.
 
This release note will be updated prior to the release and may also be updated as long as the release is available, e.g. with information of new patches or known issues. Please take note of the [installation and upgrading](#installation-and-upgrading) comments, and the release notes [change log](#change-log).

## Installation and upgrading
 
Prior to upgrading to this release, you must:
* Upgrade to the previous release. See the Release notes for the previous release for more information.
* Review the Expiry date of your Genus License File and install a new one if necessary.
* Review the rest of the release notes for this release.
* Please note that there does not exist any Genus Upgrade Assistant for this upgrade.
 
<!--rntype01-start INSTALLATION / UPGRADE. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->

<!--rntype01-end   INSTALLATION / UPGRADE. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
<!-- release note type 2 is missing. That's ok.-->

## End-of-life functionality

End-of-life functionality is functionality that was available in the previous release, but is no longer available in this release.
<!--rntype03-start END-OF-LIFE. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 08b820fb-6f60-45c7-b503-d6cae5d87b0f -->
**#23161 Discontinued Calendar Settings** (Studio)

* **Use Non-Calendar Year**: Alternate/Fiscal year, etc. is no longer supported.
* **Varying Number of Weeks**: Min and max now fixed to 4 in accordance with ISO 8601. Option is no longer supported.
* **Zero Week Day Limit**: This is no longer supported.

<!--ID f5364f89-b91f-425a-8b0a-bc34a1023278 -->
**#23163 Discontinued support for data type "Timespan" and interpretation "Time"**

To detect data type "Timespan" run the following: select * from g_object_class_property where dtp_tp = 10

To detect interpretation "Time" run the following: select * from g_object_class_property where pdi_tp = 1032

<!--ID 1ba35ca6-652a-4d62-88d3-d825c0eecf01 -->
**#23166 Discontinued data type "Timespan" and interpretation "Time of Day"**

These were not in use and have thus been discontinued.

<!--ID 0b580224-2162-46c1-be4a-d254e50fd4e2 -->
**#23217 Genus Mobile discontinued**

Genus Mobile is no longer supported, and apps developed in previous releases will not run when upgrading to Genus 10 or later.

<!--ID f50af1ae-8ce6-438b-a932-80b8a6497cdc -->
**#23218 Search folders (generic objects) discontinued**

Search folders containing generic objects no longer supported. This type of folder provided the ability to save a search returning objects of type Genus Report.

<!--ID 1f5fbbe6-636c-45e5-af91-96c5d78a15ea -->
**#23226 Direct printout of merged document in "Merge Data to a Document" effect no longer supported.** (Desktop)

File conversion and merge operations has been moved to a microservice, and therefore the *Print Document* option providing the ability to print the merged document has been removed. You will receive a warning when executing an effect where this option is selected.

<!--ID 243586ea-2331-4fac-9790-878e263ecc1b -->
**#23227 Open a Form effect: Open print settings window no longer supported.** (Desktop)

Previously used for direct printout from the *Merge Data to a Document* effect. Functionality no longer supported. See release note #23226. You will receive a warning when executing an effect attempting to open a print settings window.

<!--rntype03-end   END-OF-LIFE. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Deprecated functionality

Deprecated functionality is available in this release, but will (most probably) no longer be available in the next release.
<!--rntype04-start DEPRECATED. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
There is no deprecated functionality in this release.
<!--rntype04-end   DEPRECATED. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Breaking changes

This section lists important changes introduced in this release. You will need to use this list in order to understand the changes you might need to make to your application to support the new release.
<!--rntype05-start BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 8734ab15-90c6-4a24-a3ce-e4b3f56633d0 -->
**#23159 Support for Computer account type has been removed** (Services;Studio)

Genus 10 removes support for Computer accounts. Before upgrading to Genus 10, you have to do the following:

1. Verify if any clients authenticate using its Active Directory computer account. This may be the case when an external service consumes a REST or SOAP web service that is published by your model. Change this into using Genus Directory accounts instead.

2. Delete all computer accounts: Open Genus Studio, Directory, Security, Computers, select all entries and select Delete.

<!--ID 85a6cff5-d9ae-408e-b62e-39564c72e019 -->
**#23206 Data Mart Load Plans no longer belongs to a Node Group**

Nodes and Node Groups are no longer in use. They where used for load balancing and for binding a Load Plan to a single Data Set. The load balancing is now handled by the Kubernetes infrastructure. A Load Plan has a new field "Data Set" which should be used if the Load Plan is only valid in a single Data Set. If not specified, the Load Plan is used in all Data Sets. Load Plans and their Data Set binding, through a Node, needs to be inspected before upgrading to Genus 10, so that they can be corrected. If a Load Plan was member of a Node Group which contained Nodes for multiple Data Sets, but not all, multiple Load Plans needs to be created, one for each of the Data Sets where it should be used.

<!--ID 3287e06b-fefb-4bb7-bbcd-446b10470cad -->
**#23210 Analyse - Change in required permissions** (Desktop;Web)

Modified permissions required to list analyses on web. In order for an analysis to show on web, we now require both FindAndList & ReadAndExecute.

<!--ID 4300aaaa-bbbe-446e-a499-89d0c00870fa -->
**#23250 Analysis: Show Column Total rows for Formula columns is once again based on the defined Formula** (Desktop)

Show Column Total rows based on a Formula column no longer "overrides" defaults to a raw sum of all values in the column. Instead, the Total row calculated the Formula value based on the total of all Formula values.

For simple formulas, these two numbers would be the same, but this is not always the case for more advanced formulas.

<!--ID 271fe8e2-ca3c-4fae-a454-8e98cadc8def -->
**#23251 Analysis: Add option to override Column total with sum for Formula columns** (Desktop)

When showing Column total in Formula columns, the aggregate value no longer default to a raw sum. Instead, the Formula is executed with the sum of all values used in the Formula.

We have now introduced a flag for these columns, to override this behaviour with "raw summing". When the flag is raised, the Formula values are treated as raw values and summed to create the aggregate row value.

<!--ID e6dd10ed-4c51-46c4-8f7f-1a615f5325b5 -->
**#23264 Permissions required to execute rest api methods** (Services)

Pre Genus 10 permissions where granted at the rest api level. In Genus 10, permissions are granted for each rest api method. Existing rest-api's will not be callable until permissions are granted.

<!--rntype05-end   BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Major new functionality
<!--rntype06-start MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 16fedd5d-f8dd-4918-82b7-29350a13cb1a -->
**#23260 Changes in terminology for main concepts (Oak)** (Studio)

The following concepts have been renamed

* Analysis -> Dashboard
* Report -> Analysis
* Task -> Action
* Web Service -> SOAP Service

<!--rntype06-end   MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Minor new functionality
<!--rntype07-start MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 5fe955c0-ffba-4949-b49a-125ed6b18a85 -->
**#23146 Upper and lower bounds on numeric fields** (Studio)

Upper and lower bounds can be specified as constants on numeric fields.

<!--ID 8e45d0a2-04da-42d1-84a2-876ef9f0fc29 -->
**#23147 Checking App Model and Database consistency** (Studio)

Genus Studio has a action 'Check App Model and Database consistency'. This functions reads database information for tables and columns and compare it with the App Model and vice versa. The end result is written to a markdown file and opend in the assosiated application. The function is also available on a single object class.

<!--ID e41e873e-3268-4d62-a094-93d5f8257e52 -->
**#23149 Improved the support mail subject** (Desktop)

The support mail subject has been improved by describing all attachments and refering to GDPR when sending sensitive information.

<!--ID c0b579ad-c646-4d11-8af0-434f64a57654 -->
**#23150 External Interface on the datasource** (Studio)

All datasources will now have an External Interface section describing how data kan be moved to and from a Task/Form when it's used in an effect or a command.

<!--ID 8bc8ea13-e641-4bfa-bf01-7114170c3a6e -->
**#23173 Better handling of "The data mart has new data"** (Desktop)

When the data mart has new data, we load the new data and try to keep the current selection. A snackbar message notifies the user that "The Data Mart has been reloaded with new data".

<!--ID 4d726cf4-90cc-41c4-aa97-35f171ddf3ad -->
**#23216 Analyses - Reorder Values on Tiles with multiple Value Groups** (Web)

It is now possible to change the order of Values for all Tiles in the Analysis designer. Earlier, this was not possible for Tiles with multiple Value Groups (e.g. Line and Sankey charts).

It is also possible to drag Values between differen Value Groups.

<!--ID b3a4412f-5087-42ea-b181-115eae4dc828 -->
**#23229 Prevent more than one value being grouped by Split by Category** (Desktop)

Can no longer define more than one value to be grouped by Split by Category in Analysis Designer. This introduces the concept of "Values not split by Category" for some tiles (i.e. all Column & Line types). In such existing tiles with two categories, all but one Value will now only be grouped by the primary Category.

<!--ID 914fe07c-46b6-49ae-92ce-24a1a0af38d1 -->
**#23232 Multiple datasets in separate databases in Azure are supported** (Desktop)

However, there is still a problem with keeping data in separate databases in Azure. This is related to the location of the account table. Search in audit trail is therefore limited in multi-database Azure solutions.

<!--ID d7627870-5968-41c6-ba80-6fa744ed46b1 -->
**#23247 Added support for reading and writing JSON arrays containing simple values**

Earlier versions of Genus supported reading and writing JSON arrays containing objects which would be used for reading and creating objects in data sources.

Now it is also possible to read and write simple values, for instance strings. When reading a string from JSON, a new object will be created where the string is stored into the mapped field, while when writing JSON, data vill be read from the mapped field for each of the objects in the data source.

<!--ID 37e4bb68-01ea-464e-b6ff-b0f1beae0186 -->
**#23262 Sorting of Row Columns in 3D Grid disabled** (Web)

Sorting is now only enabled for "Column Category" of Three Dimensional Grid. It is no longer enabled for "Row Category" and "Row Data".

<!--ID 4abcde43-ac14-4de0-971c-175a5059299f -->
**#23280 Add "Empty Selection" action to Dashboard action bar** (Desktop;Web)

<!--rntype07-end   MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Resolved issues
<!--rntype08-start RESOLVED ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 7358410a-fef4-4b73-9551-5bf707b276ec -->
**#23219 Fixed incorrect handling of values in IntegerDateEdit** (Desktop)

The field's date was not used when displaying date picker and was not displayed after value was selected in date picker.

<!--ID 462fd095-0318-463f-94c9-0ae81587d958 -->
**#23225 Fixed error when opening two email windows in sequence.** (Desktop)

<!--ID 31dffc3f-5056-46f5-aa1e-226fcb0b7a47 -->
**#23228 Prevent losing Category objects from Split by Category when toggling fullscreen** (Desktop)

<!--ID 82f3c111-175a-45ca-b57c-814418786998 -->
**#23233 Fixed error that randomly caused window to crash during initialization** (Desktop;Studio)

<!--ID 456df900-6fc2-4a21-976a-9119479f273c -->
**#23236 Modal messages not displayed after executing "Invoke a File" effect.** (Desktop)

Effects such as *Show a Confirmation Message* and *Show a Message*, are not displayed if executed immediately after an *Invoke a File* effect when the option *Wait until the file is closed* is selected.

<!--ID 7cb133e7-5e86-4f0b-8061-c13829e7bb61 -->
**#23237 Genus terminates with an error when collapsing a group in a multidimensional table** (Desktop)

Occurs if a cell within a group is selected when the group is collapsed.

<!--ID 599d0ff6-7683-4672-be10-0d33a9e630a7 -->
**#23238 Values for time dimensions sorted in alphabetical order in the column filter drop down in tables** (Desktop)

Values sorted in alphabetical order and not logical order. Values are now sorted by date.

<!--ID 5002692b-9e46-45a2-abe6-31ff319bd53d -->
**#23239 Genus terminates with an error on right-click in the action flow diagram** (Studio)

<!--ID 6138a4ba-3b34-4800-b1db-e2922ecfd8ea -->
**#23240 Not possible to unhide search groups for an object class** (Studio)

If a group (1:N property) previously was hidden in the search setup fro an object class, it is not possible to unhide the group at a later point.

<!--ID 37abb71d-afda-49ec-9ee9-c21f7337b015 -->
**#23241 Font size for label ignored for input fields in forms** (Desktop)

Occurs if a control, such as a text edit, is placed on the second or any succeeding tab sheet.

<!--ID 75675874-ab3e-411c-846c-7deaaa05a3e6 -->
**#23242 Paste security on local tasks in a form does not paste security to all selected tasks** (Studio)

Security pasted to the first selected task.

<!--ID d17b1147-fd55-4403-8fa0-5292adc8978b -->
**#23243 Published field not available in expression for calculated field in data mart** (Desktop)

If a new field is published to a data source, the field is not available when writing expressions for calculated fields. Need to save the data mart and restart desktop to access the field. Occurs if the field is published using the context menu in the data view. However, If the field is published through the properties pane for the data source, the field is available immediately as expected.

<!--ID 45fc917a-a3d8-4d2f-a915-67c67e0c66f7 -->
**#23244 Pressing arrow keys in the IntegerTimeEdit control does not update the visual value** (Desktop)

Pressing the arrow keys should increase/decrease the current value to the nearest quarter. However, the visual value is not updated until the control loses focus.

<!--ID 674a5586-5b25-4c8d-b51f-303f4fdf2643 -->
**#23245 Genus terminates with an error when searching for data between two integer time values** (Desktop)

<!--ID 2863ffeb-d384-45f4-ab72-9c7c652ef0de -->
**#23246 Form corrupted if fields are dragged from data sources into a grid control** (Studio)

If the form is saved after columns have been created by dragging fields from data sources, it is no longer possible to open the form in Studio.

<!--ID c0f8dd28-eb63-4c13-a4a4-34a5f2b1c482 -->
**#23248 Fixed problem where the content of a table is obscured by search panel on smaller screens.** (Desktop)

<!--ID 17a27d4c-9ce0-45ba-bbae-4a4435fe0174 -->
**#23249 Genus terminates sporadically if an unsaved document is closed** (Desktop)

Typical case to reproduce: Start Genus, open a MS Word Document (large file size). Do some changes. Close MS Word, and click "Yes" in the save changes confirmation dialog.

<!--ID 583a41ac-1d4b-44ac-8809-4945d4e8544e -->
**#23252 Fixed colouring of Data Series** (Desktop)

Colouring of Data Series is once again working

<!--ID a0a1acf8-f8b3-4290-9da7-2805d5ff8bab -->
**#23255 Genus terminates when closing a form containing a diagram control** (Desktop)

<!--ID 8bbc1a83-6c47-499f-8088-2b195e4ab779 -->
**#23256 Color Range no longer show inaccurate colors** (Desktop)

Previously, one had to scroll to the bottom of a Table with Color Range, to ensure that the correct colors were shown. This is no longer the case.

<!--ID 5603f0fb-7709-48a3-b1aa-8ee75c3c22ed -->
**#23258 Opening Forms and Tables through Dashboard context working** (Desktop)

Opening Forms and Tables through Dashboard context now works. This seems to only have worked in some special cases before, but should now work for all OCs

<!--ID 95422a32-bfbd-4028-92aa-d77a727f42fa -->
**#23263 All Dashboard selections of disqualified objects now reset selections in other data sources** (Desktop)

When selecting a disqualified object in a Dashboard, all selections in other data sources should be reset. Previously, this was only enforced when selecting a single object. Now, other selections are reset for all selections involving one or more disqualified objects.

<!--ID 38744102-6527-4b3f-96bc-542c48e05fef -->
**#23266 Numbers exported to Excel as strings in the grid control** (Desktop)

Case if a number format not was assigned to an OC property or grid column.

<!--ID c70a71e7-475b-4580-8914-789fd878a428 -->
**#23269 Corrected an error which occurred when plotting more than ~2000 objects in a chart** (Desktop)

<!--rntype08-end   RESOLVED ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Known issues

Known issues are errors or lack of functionality. Known issues may be solved in a future release based on customer demand.
<!--rntype09-start KNOWN ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 96c33bd6-09c9-4beb-9780-62bd007bab74 -->
**#23259 Object Classes with Permissions = None can not be opened from Dasboard selections** (Desktop)

If the ID field of an Object Class has "Maximum permissions that can be granted" set to "None", it will not be possible to open Forms/Tables based on Dashboard selections on that OC. The Dashboard client will not be able to read the IDs of the objects, and consequently cannot open the objects.

This seems to be the case for multiple OCs in older Genus solutions. Business Engineers adding Dashboards to existing solutions should therefore be aware of this peculiarity.

<!--rntype09-end   KNOWN ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Tips and hints

Tips and hints are design decisions or answers to support questions that may be of general interest.
 
There are no tips and hints specifically targeting this release.

## Change log
* 2020-11-10 Created.
<!--changelog CHANGELOG. DO NOT CHANGE THIS TAG. ANY CHANGES BELOW WILL BE DELETED.-->
