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
* Review the rest of the release notes for this release. Pay special attention to any issues in the sections [End-of-life functionality] (#end-of-life-functionality), [Deprecated Functionality](#deprecated-functionality), [Breaking Changes](#breaking-changes) and [Known Issues](#known-issues). You may have to perform manual tasks.
* Please note that there does not exist any Genus Upgrade Assistant for this upgrade.
 
For general information about installing and upgrading Genus Apps, see [here](../installation-and-configuration/index.md). We especially recommend reviewing the [System Requirements](../installation-and-configuration/system-requirements.md) article.

## Important issues in this release
> [!NOTE]
> This section address the most critical issues and information for this release. These issues may require you to take corrective action either before or immediately after installation.

* **Link table in data mart no longer available.** Data marts that contains link tables must be manually converted to using selection filtering on connections in release 2017.5. It is not possible to edit or load data marts containing link tables in release 2018.1.

* **Don't leave faulty data mart load plans running on auto!** Each time it fails, it logs up to 1 MB. But since it may try to load every 2 minutes, it may amount to large volumes of data over time. See the article [Data mart problem solving and FAQ](../../users/analyze-report-and-discover/data-marts/data-mart-problemsolving-faq.md) for more information.

<!--rntype01-start INSTALLATION / UPGRADE. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->

See also the following notes.

<!--ID 5f765df6-eaaf-4f33-9243-de5e5a77d0ee -->
**#23026 Genus Services requires a new version of IBM Data Server Driver Package for accessing DB2 databases** (Services)

To access IBM DB2 databases Genus Services now requires "IBM Data Server Driver Package (Windows/x86-64 64 bit) Version 11.1 Mod2 Fix Pack2 iFix002"

For details, see https://docs.genus.no/developers/installation-and-configuration/system-requirements.html#database-access-software-requirements

<!--rntype01-end   INSTALLATION / UPGRADE. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
<!-- release note type 2 is missing. That's ok.-->

## End-of-life functionality

End-of-life functionality is functionality that was available in the previous release, but is no longer available in this release.
<!--rntype03-start END-OF-LIFE. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 97dcb628-3db3-44ea-b25e-d7232ec68943 -->
**#22997 The support for Sybase is removed** (Services)

Since Sybase is not used by our customers anymore, the support for this database system has been removed. Support for Sybase may be reintroduced based on customer demand.

<!--ID 838d4279-fd85-4a86-a44a-5f97f9503ccf -->
**#23041 Link Table in a Datamart is no longer available** (Desktop)

"Link Table" was used to resolve circular connections in a data mart. This is now solved by using "Selection Filtering" on Connections.

__IMPORTANT: Datamarts that contains link tables must be converted to using selection filtering in 2017.5 before upgrading to 2018.1__

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

<!--ID 4df127ce-f00a-4f45-9053-229c928f7192 -->
**#23040 Views in Analysis is deprecated** (Desktop)

In versions up to 2017.4 Views was a concept in an Analysis.
The functionality is still present in 2017.5, but it is not possible to add new Views to an Analysis.

All the functionality in Views is available by other means.
To migrate an analysis with Views, do the following:

1. Save one copy of the analysis for each view, say A1 and A2 for an analysis with two views.
2. In analysis A1, check all Actions which has a Command of Type Switch View. All of these must be converted to Open Analysis with Same Selection and point to A2. Do the same in analysis A2.
3. In analysis A1, remove view A2. In A2, remove A1.

<!--ID 083b5f1c-142d-471d-af22-7e6906d44eee -->
**#23060 XY- and pie chart control in forms** (Desktop)

Will be removed in next release. Replaced by functionality provided in analysis.

<!--ID 3b9044f3-0ad4-4c8b-abab-22ba8921fce7 -->
**#23061 Gantt control in forms** (Desktop)

Will be removed in next release. No plans for replacement of functionality.

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

<!--ID dbeaa5d2-9d04-42c3-8731-866e994d1f26 -->
**#23053 Symbols from image library is no longer loaded on Genus Services.** (Services)

Support for using symbols from the image library is no longer supported on Genus Services as the loading and caching mechanism for images is not supported on Windows Server. The usage of symbols on Genus Server is limited and should only affect symbols displayed in distribution of Reports in Agents. Genus Apps for desktop is not affected by this change.

<!--rntype05-end   BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Major new functionality
<!--rntype06-start MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 97261108-3334-4b86-a467-fe57da24b68b -->
**#23017 Added detail pane to tables** (Desktop)

When designing tables it's possible to add a detail pane. The detail pane can contain calculations and it can modify objects. Commands from the detail pane form can be added in the tables ribbon section.

<!--ID 6984adc8-d560-4c10-bebb-204d3a0f1c2c -->
**#23025 Requirements imposed by the General Data Protection Regulation (GDPR)** (Studio)

Support for reading and deleting audit trails introduced. For more information, see the Genus Apps documentation: 

* [Reading data into built-in data sources](https://docs.genus.no/developers/defining-an-app-model/logic/action-orchestration/actions/effects/read-objects.html#reading-data-into-built-in-data-sources)
* [Delete the event history for objects](https://docs.genus.no/developers/defining-an-app-model/logic/action-orchestration/actions/effects/delete-objects.html#delete-the-event-history-for-objects)

Read of audit trails was previously not supported. Deleting audit trails was supported, but the functionality has been extended with the following functionality:

* For object classes defined in your directory, it is possible to delete audit trails for a filtered set of objects.
* Delete audit trails irrespective of age.

<!--ID 1e83ec51-2905-4ba4-bef4-79d77e5847bf -->
**#23029 Access to selected text for controls in actions** (Desktop)

In some cases you might want to perform some logic based on the current selected text in a form control, such as executing a search or classify named entities in a text.

To do this, define a command targeting a task, and then attach the command to the *On Context Menu Item Click* event in a control supporting text selection. When the task is invoked from the context menu, the selected text can be accessed from the built-in *Action Orchestrator* data source within the task:

```
Action Orchestrator.Current Text Selection
```

Note that you cannot disable a command based on the value for the selected text. To determine what to do, define a decision block in the task.

Controls supporting text selection:

* E-Mail Address Edit
* File Preview (MS Word, MS Excel, PDF, text)
* HTML Edit
* Rich Edit
* Text
* Text Edit
* Text Popup Edit
* URL Edit

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

<!--ID decfb1ea-01b1-4fbe-a14a-d15d44943e54 -->
**#23032 Language support (Analysis)** (Desktop)

Implemented support for localization in Analysis. The user can choose between English and Norwegian.

<!--ID 61f84418-eef0-4ea7-9f7a-e2491a7d3bc7 -->
**#23038 The term "directory" replaced with "app model"** (Studio)

In general, a directory is a structured listing of information.

The terms *directory* and *app model* have been used interchangeably in Genus Apps, but from now on we distinguish between these two concepts.

The directory is now the structure of a Genus app model, as displayed in the left-side menu inside Genus Studio. An app model is data (about a model) stored in a database and accessible through this structure by using Genus Studio. For more information, see [https://docs.genus.no/terminology.html#app-model](https://docs.genus.no/terminology.html#app-model), [https://docs.genus.no/terminology.html#directory](https://docs.genus.no/terminology.html#directory).

<!--ID 4deaa4d7-6592-4268-a47c-88ab9640e69c -->
**#23042 Improved preview of Excel files in forms** (Desktop)

Replaced preview of Excel files in MHTML-format with native Excel file formats.

<!--ID 737c825d-3c06-4948-82ad-3aae233634ff -->
**#23044 View the current load state for data marts** (Desktop)

Added functionality for viewing the current load state for data marts on different nodes. Available from the shortcut menu **Load State** in the Discovery portal (Discovery/Data Marts).

<!--ID 20f03b82-2199-4d54-8aa5-7763bed6995f -->
**#23048 Generic Search now uses default operator** (Desktop)

Now Generic Search will use default search operatior for eatch field that is used. This means that some fields will generate starting with while others may create a like statement.

<!--ID fdc90ff2-915f-42a4-9e08-e0d01b229ec5 -->
**#23049 New operators on fulltext search** (Desktop)

We have added 3 new fulltext operatiors.

<!--ID c28a029e-f4bd-41ed-9542-3c03a52f7ba2 -->
**#23051 Added in-place editing of name in the directory explorer** (Studio)

In-place editing of name enabled for most objects in Studio. Restricted to objects such as analysis, report, and data mart in previous versions.

<!--ID 1a915677-d7f4-4528-9af3-d0eb23375113 -->
**#23052 Removed diagram view of the data mart from the analysis designer** (Desktop)

In previous versions it was not possible to open a data mart if it was locked by an analysis. This restriction has been removed, and you can open the data mart in a separate window even if it is locked by an analysis (the data mart wil automatically be write protected). From an analysis you can open the attached data mart from the **Actions** window menu.

The same functionality has been implemented for an analysis which is locked by a data mart.

<!--ID 9fafe4df-fbdd-4d26-82d5-266df7d5c7a7 -->
**#23054 Analysis - Selection history** (Desktop)

In older versions of analysis we kept 15 steps in our selection history.  When this limit was reached, the oldest entry would be deleted. This limitation is now removed. The creator of the analysis now needs to keep in mind that the history can grow unlimited, and should therefore be cleared (e.g. on switch analysis)

<!--ID f794010b-51bc-4df0-820d-db0d6bcd475d -->
**#23055 Added a function in Advanced Expressions that evaluates a textual expression as a number.** (Studio)

<!--ID 16a040f2-a842-4aee-aa58-98e8ae10fd10 -->
**#23058 Navigation Pane is updated with new content control** (Desktop)

<!--ID 8c389863-0552-4574-91ee-64dfa74956ce -->
**#23080 Can now set default app for Genus Apps for Web installastion** (Web)

<!--ID 85a31116-d113-45c4-8738-bcda12f4e90b -->
**#23081 Change in how Accelearor Search works** (Desktop)

In previous versions accelerator search added a wildecard operator at the end of each search word. We now use the default operator on the search field when determening if a wildcard operator is added or not.

<!--ID 3c14caf5-4b10-4333-9467-e10bb48ef003 -->
**#23087 Analysis - New function: Math.abs** (Desktop)

Added support for Math.abs in the formula designer.

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

<!--ID 50f959c7-4bba-4f8c-b51f-456828f798bf -->
**#23008 Fixed problem with serialization of non-ASCII characters when exporting JSON** (Desktop;Services)

Characters outside ASCII range (32-127) has been exported uising a Unicode escape format (\uXXXX) but this caused problems reading the exported text. The export method has been updated to handle non-ASCII characters by writing them using UTF-8 instead so that the JSON produced will be more readable.

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

<!--ID c0285032-2964-4aba-b89f-156b6769fb6c -->
**#23028 Dynamic table and join aliases are generated in a way that makes two structually equal queries equal** (Desktop;Services;Web)

By being equal the query execution plan cache on the server can be used

<!--ID d5fc6028-e07f-4480-988c-668caea957d7 -->
**#23030 Fixed problem starting up Genus caused by installation of KB4055002 on Windows 7 computers.** (Desktop)

<!--ID 5e79cb16-efd7-4ff8-aa02-8d46a2ddf9f9 -->
**#23031 Sort objects effect generates a SQL lookup for each branched field data are sorted by** (Desktop)

If data are sorted by a field contained in a referenced class, such as Person.Employer.Name, values are looked up in DB for each object in the data source before sorting. Values should have been read in one batch when the data source was populated.

<!--ID 9da72685-b0c9-448b-9442-73d163112855 -->
**#23033 Fixed issue where Android Tablets where interpreted as phones for the Play Store app**

This caused views created with the phone formfactor to be displayed on the tablets.

<!--ID abd2faa9-710c-496a-8c5f-f947b49cfd4e -->
**#23034 Analysis - Designer** (Desktop)

Value properties are no longer cleared when changing field value.

<!--ID dfd38d6a-ae72-4538-955b-07f84bd7887e -->
**#23035 Analysis - Designer** (Desktop)

Number format on value will no longer be reset to default when changing fields on value.

<!--ID aa4520f9-09ae-4cca-8c9a-dd52e67b56d0 -->
**#23037 Unable to add a calculated field to a local data source in a data mart** (Desktop)

* Add a new local data source to a data mart, and then add a calculated field. Genus terminates when you try to write an expression. In addition, the name of the data source is not updated correctly in the *Calculated Fields* list.
* Add a new local data source and then save and close the data mart designer. Reopen the data mart. The local data source is not available in the *Calculated Fields* list.

Note from R&D: Bugs not related to local data sources, but to the **Private** setting for data sources (which by default is selected for local data sources).

<!--ID 5d6215e6-ce3b-4498-8c56-076edbb8f4f0 -->
**#23039 Groups not available when defining criteria for a search folder** (Studio)

In the **Select Field or Group** dialog, groups are not available, and it is not possible express an exist condition.

<!--ID 35cc159e-3520-47fd-9714-4bd4a364a9cd -->
**#23043 Object class wizard: Incorrect interpretation of RBDMS data type varchar(max) and nvarchar(max)** (Studio)

Object class properties bound to columns of type *varchar(max)* and *nvarchar(max)* in MS SQL Server are by default assigned the data type *ANSI String*/*Unicode String*. The correct interpretation should be *Textual large object (ANSI)*/*Textual large object (Unicode)*.

<!--ID 89e1f45f-8118-4c5c-af99-aad41b1d2d3c -->
**#23046 (Analysis) Designer crash** (Desktop)

Fixed an error that caused the designer to throw an error. Also removed Switch View from the list of Action types. 
Already created actions with this type will still work as expected.

<!--ID 0ceb0794-4283-4b4e-99ae-eb559d5ea41b -->
**#23047 Analysis - Show Advanced Options** (Desktop)

Show Advanced Options has been removed from the designer. All advanced options are now shown by default.

<!--ID f86d457a-344e-49e6-9fb0-05608f4c0420 -->
**#23050 Fixed output from report to PDF when the report is empty.** (Desktop)

In cases where the report was empty, the report would not be exported to Pdf or printed. This caused print preview to be blank and tasks exporting data to Pdf to fail. The functionality is now changed so that output is produced, containing just the column headers of the report.

<!--ID 77838481-e52b-4412-b2e4-a2b7cd5b821a -->
**#23056 Analysis - Ignore Selection and XYCharts.** (Desktop)

Fixed an error that caused column charts to not get the correct color when ignore selection was enabled.

<!--ID dc437409-03f1-4a37-9648-7ce39275c2d7 -->
**#23057 Analysis - Initial Selection** (Desktop)

Fixed an issue where initial selection would not get applied properly.

<!--ID 8631294e-abe4-4304-a139-9e454afb389d -->
**#23059 Related local tasks are not automatically deleted when a data mart is deleted** (Desktop)

<!--ID 4afb48c3-5242-42d4-be5c-de26d4a7da00 -->
**#23062 Analysis - Context Menu** (Desktop)

Fixed an issue where the context menu would not close after being opened.

<!--ID 1efefc17-8929-45d2-ba8c-f5de5a0fcc8e -->
**#23063 Analysis - table sort icon** (Desktop)

Fixed an issue where the header text would overlap with the sort icon.

<!--ID 5cd1ca29-3763-4872-b9f1-4a7f5a6d491f -->
**#23064 Analysis - Fixed an issue where numeric values would not get right aligned.** (Desktop)

<!--ID 8214f03d-2590-4707-9c6e-da6ff52801d4 -->
**#23065 Analysis - Fixed an error with datalabels not working properly** (Desktop)

<!--ID 45b19ade-fc3c-4bf2-b414-4e470a5af270 -->
**#23066 Fixed an issue where objects removed from filtered lists removed en extra item** (Web)

<!--ID 5deab43b-3a44-495b-acca-cdd11f7a8338 -->
**#23067 Slow Automatic Formatting** (Desktop)

Fixed issue with slow Automatic Formatting

<!--ID b91a7562-427c-4527-8dff-b798fdd5abe0 -->
**#23068 Dialog Boxes displays title and button texts in the lauguage used in the Genus App.** (Desktop)

<!--ID 9969735c-97bf-4180-aca5-c74138ff1860 -->
**#23069 Fixed issue with invalid File Name when opening in default application** (Desktop)

<!--ID 3af6145b-b6a1-43e5-b7f7-cdfc7ac8c344 -->
**#23070 Edit-locks on Data Mart won't prohibit loading** (Services)

When a Data Mart is locked because somebody is modifying it, it will no longer fail to load on a server. Already running Data Marts will reload data only as sceduled. Altered structure for the Data Mart won't be read until the editor is closed and the edit-lock is released.

<!--ID 683ce292-8c47-4484-adae-1d580e3b1f5b -->
**#23071 Error when changing views when a search field has focus in a table** (Desktop)

When a Number Search Field had focus and the user changed view, an error occured.

<!--ID 6e5cd458-59f7-4cc4-a650-88782b3a159a -->
**#23079 Fixed bug in wildcard SQL-generation** (Desktop)

When using advanced search, the wildcard operator returned an invalid SQL for fulltext index properties

<!--ID 0d878203-6146-4033-bd28-8a6654e18fda -->
**#23082 Error in copying table shortcut** (Studio)

A table shotcut contains 1-N views. The copy shortcut function did not copy all the table views added to the shortcut, this is now fixed.

<!--ID 87a176b0-15a7-4cc2-bbe2-a6f22a06a764 -->
**#23085 Error in evaluation of Month vs a Calendar time value** (Desktop)

When a Time object was evaluated against a calendar time, the operators greater than and less than returned the inverted value.

<!--ID 832762b1-1425-494f-bfe0-cb458561a84c -->
**#23088 Handle of invalid file for import data effect** (Desktop)

If we have a exce l file import and the user select a .JPG file a user friendly message is now displayed.

<!--ID a13c8332-f8ab-40e4-bb94-407b4eeaa988 -->
**#23089 Analysis - Data Mart loadtime** (Desktop)

{loadtime} can now be used in the text-control to get the timestamp of when the datamart was loaded.

<!--ID 7d4c851c-0249-41ac-a7c4-d77af51ac021 -->
**#23092 Remove Ribbon button when the user don't have access to the task** (Desktop)

When a command in a table or a form runs a local or global task we now remove the command from the Ribbon if the user don't have access to the task.

<!--rntype08-end   RESOLVED ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Known issues

Known issues are errors or lack of functionality. Known issues may be solved in a future release based on customer demand.
<!--rntype09-start KNOWN ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID f7c2045e-836f-4f03-87c1-73eb4e43e1b6 -->
**#23036 No longer warns user about leaving the page when redirected to another page in sign out command** (Web)

<!--ID f8f0464e-6aa0-49f9-aa85-f307f97a0093 -->
**#23045 Fixed issue where anonymous applications could crash after upgrading** (Web)

<!--ID 3f09eb98-b870-4ce1-96d2-856d5348a5b5 -->
**#23086 Improved file upload with Selection: Take a picture on Windows** (Web)

This should now behave the same as on iOS and Android, where there is a choice between using the camera and upload existing picture.

<!--rntype09-end   KNOWN ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Tips and hints

Tips and hints are design decisions or answers to support questions that may be of general interest.
 
There are no tips and hints specifically targeting this release.

## Change log
* 2018-03-05 Changed release stage from Beta to Release Candidate (builds starting with 18.10.131).
* 2018-02-19 Changed release stage from Alpha to Beta (builds starting with 18.10.105).
* 2018-01-29 Changed release stage from Pre-alpha to Alpha (builds starting with 18.10.66).
* 2017-11-29 Builds for this release will start with version number 18.10.
* 2017-11-17 Created (Alpha stage).
<!--changelog CHANGELOG. DO NOT CHANGE THIS TAG. ANY CHANGES BELOW WILL BE DELETED.-->
