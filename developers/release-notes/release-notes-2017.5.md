---
title: Release notes for Genus Apps release 2017.5.
description: User-visible changes to Genus Apps from release 2017.4 to 2017.5.
author: jtroset
---
# Release notes for version 2017.5

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

See also the following notes.

<!--ID 3a15e3db-0491-4c05-a64b-c7db32d0d879 -->
**#22958 Genus Apps now requires .NET Framework 4.7** (Desktop;Services;Studio)

Genus Apps for Desktop and Genus Services now require .NET Framework 4.7 or newer.

<!--ID f7f23e69-89ba-4a36-8f5f-bfba99315331 -->
**#22959 Genus Services requires a new version of IBM Data Server Driver Package for accessing DB2 databases** (Services)

To access IBM DB2 databases Genus Services now requires "IBM Data Server Driver Package (Windows/x86-64 64 bit) Version 11.1 Mod2 Fix Pack2 iFix001"

For details, see https://docs.genus.no/developers/installation-and-configuration/system-requirements.html#database-access-software-requirements

<!--ID 84244177-f52f-4c6b-879e-a994ab896341 -->
**#22962 Genus App Platform changes name to Genus Apps**

Further, the following names have also been changed:
- Genus Apps to Genus Apps for Web (or "our web client")
- Genus Desktop to Genus Apps for Desktop (or "our desktop client")
- Genus App Services to Genus Services

These names are not changed:
- Genus Studio
- Genus Server

<!--ID 0f1ddd4a-1f4c-4e35-b89b-da1167ae7068 -->
**#22965 Reboot required after upgrade from an earlier version** (Services)

After upgrading from an earlier version of Genus App Services to Genus Services 2017.5 you have to reboot the application server or else Genus Services will not be able to write to the Windows event log.

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
<!--ID 568b45e9-f52b-4b09-a881-baf842230150 -->
**#22996 Support for Sybase will be removed** (Services)

Since Sybase is not used by our customers anymore, the support for this database system will be removed in Genus Apps release 2018.1. Support for Sybase may be reintroduced based on customer demand.

<!--rntype04-end   DEPRECATED. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Breaking changes

This section lists important changes introduced in this release. You will need to use this list in order to understand the changes you might need to make to your application to support the new release.
<!--rntype05-start BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID c4e9638b-955a-47f3-a79b-68b98aa55e65 -->
**#22968 Change in REST serialization** (Desktop;Studio;Web)

From version 2017.5 of Genus Apps, REST serialization is changed for fields that are not assigned either to a field in a data source or by a constant value. In earlier versions of Genus, these fields would be serialized with a null value, but from now on these fields will be omitted during serialization. In order to maintain the previous functionality, assign null-values to all fields that should be serialized.

<!--ID 69da89c1-34f2-4a55-ba6a-555111bbd578 -->
**#22976 Made changes to keyboard navigation - tabbing** (Web)

Added better support for keyboard navigation. It is now possible to tab to more controllers, including text, symbols and tab sheet tabs. Tab stop are now disabled for controllers where this makes sense, but this may lead to some cases where tab stop has to be turned on to achieve the wanted result. In some cases, i.e. group boxes with click actions, tab stop was inferred, but this now has to be enabled manually.

<!--ID e968eee4-fa90-4f68-afca-277018ea144d -->
**#22977 Changed serialization of font information in Html entered in the Html Editor** (Desktop)

The default font was not serialized in earlier versions of the component, and has caused problems when the Html has been used in other environments with other defaults. The serialization has now been changed so that the default font in the editor is included in the html-document to keep a consitent appearance when used outside Genus Apps.

<!--rntype05-end   BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Major new functionality
<!--rntype06-start MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID a89a32d3-0780-4650-958d-3d2b236d0ed5 -->
**#22952 New effect: Merge documents** (Desktop;Services)

Merges two or more documents into a single document. The output document can be saved as a PDF document or a Word document.

The documents which are merged can be stored in different file formats. During the merge operation documents are converted to the selected output format. For example, you can merge a Word document, text document, and a picture, and save the result as a PDF document.

Supported input file formats:

* Portable Document Format (*.pdf)
* Microsoft Word 97-2003 Document (*.doc)
* Microsoft Word Document (*.docx)
* Rich Text Format (*.rtf)
* Text Document (*.txt)
* HyperText Markup Language (*.html)
* XML Paper Specification (*.xps)
* OpenDocument Text (*.odt)
* JPEG Image (*.jpg)
* Portable Network Graphics (*png)
* Bitmap Image (*.bmp)
* Enhanced Metafile (*.emf)
* Tagged Image File Format (*.tiff)

For more information, see https://docs.genus.no/developers/defining-an-app-model/logic/action-orchestration/actions/effects/merge-documents.html

<!--ID c911c480-64c6-4e70-bd36-53d5e9b814cb -->
**#22953 Access to Discovery shortcuts** (Desktop)

In the previous version all users had access to all the shortcuts under the Discovery view button. In 2017.5, these shortcuts are handled as any other shortcuts and the business enginer can add and remove access. Genus update will give every one read and execute access to all the discovery shortcuts.

<!--ID c2b3fee3-d0d9-4d92-acd9-102e7bc8cfa1 -->
**#22981 New tile type Timeslider in analysis** (Desktop;Web)

The timeslider tile simplifies selecting a date range and manipulating that selection.

<!--ID 7dd5c983-0a85-4494-b2d5-c2cb89aa3bba -->
**#22982 New tile type Treemap in analysis** (Desktop;Web)

The Treemap tile is a great way of visualizing a two level breakdown of a value.

<!--ID e237f317-10d1-43c5-a310-af940d59c184 -->
**#22983 New tile type Sunburst in analysis** (Desktop;Web)

The Sunburst tile is a great way of visualizing a two level breakdown of a value.

<!--ID 864acfc0-b84c-4d68-b9ac-fecd6df03eef -->
**#22984 New tile type List in analysis** (Desktop;Web)

The List is a simplified table with a single column. The List requires a single category as its only configuration option. Is has no column header and no column alignment options.

<!--ID f505ee1c-2917-47fe-8f24-11d7700ad72b -->
**#22985 New tile type Subset in analysis** (Desktop;Web)

The Subset tile type allows using predefined subsets as quick way of selecting multiple objects in a single operation. The tile supports add, keep, remove and set operations on the selections.

<!--ID 6b7b8465-c8ab-4709-a124-56d83ff95007 -->
**#22986 New tile type Event Line in analysis** (Desktop;Web)

THe Event Line is a visualization of events as circles along a horizontal time axis.
The size of the circles can be bound to a value.
The position of the circles in vertical direction above the time axis can be bound to a value.
The color of the circles can be bound to a value.

<!--ID 07102e06-a332-499e-a3e0-416a27e9bdfa -->
**#22987 Completely revamped tile type Dropdown** (Desktop;Web)

The Dropdown tile is changed so that selections are made within a dialog instead of a dropdown. This makes the tile static in size and thus easier to configure.

<!--ID 0cc6781c-5f86-4422-a6a4-aa789c33a019 -->
**#22989 Analytics tab in tile designer** (Desktop;Web)

On the Analytics tile metrics like min, max, average and trend can be added to Line Charts (and more to come).

<!--ID 4aad4852-c722-44d4-9678-2418033e714c -->
**#22990 Require Selection on tile in analysis** (Desktop;Web)

A tile can set requirements to how many (min and max) objects must be selected of some type. The tile will not display until the requirement is met. The feature can be use to prevent meaningless results where a selection is required, or to prevent listing of large amounts of data.

<!--ID da68875b-3b70-4adf-a2f6-d2af9883d7e4 -->
**#22991 Ignore Selection on value in analysis** (Desktop;Web)

By using Ignore Selection on a value, a tile can display values for excluded objects. It has previously only been available in a formula on a calculated field.

<!--ID 2372d2ca-a866-43f8-b689-0a1c43f5dc8b -->
**#22992 Initial Selection in analysis** (Desktop;Web)

An Initial Selection can now be set on an analysis. Clicking reset will return to the initial selection.

<!--rntype06-end   MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Minor new functionality
<!--rntype07-start MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID ae64e275-6f90-44fe-a5ca-9dc01f6c1bad -->
**#22948 Required Selection** (Desktop)

In a Tile, a "Required Selection" (RS), can be specified.
The RS specifies a minimum and maximum number of selected items from a data source.
If not fulfilled, the Tile with the RS will display a message: "Tile requires between <min> and <max> selections in datasource <datasource>

<!--ID e13068fd-a6df-4faa-a2a7-3ad10d2ea8e1 -->
**#22949 Retrieve text data from the clipboard** (Studio)

Added type Clipboard to the Genus Apps language. To retrieve text from the clipboard, use the getText() function exposed by the Clipboard type.

(Text can be set by using the "Copy to Clipboard" effect).

<!--ID 183e7754-c21a-4a52-9479-d175cc7e7f26 -->
**#22950 Desktop and app forms split in separate sub folders in Genus Studio** (Studio)

New structure:

Forms
- Desktop
- App

<!--ID 7dfec1cd-3705-4538-afbf-2c933aee40ac -->
**#22951 Changed implementation of ListBox control in Forms** (Desktop)

We have previously used a 3. party component but is now using the native control available in the WPF framework. The purpose of this change is to better take control of customization and improve performance.

<!--ID e568d56c-5c81-4986-bfa4-0eba13ae9a12 -->
**#22954 It is now possible to change the order of the Discovery view button** (Desktop)

<!--ID 69e5fd06-a6d8-4101-bd77-26ba87038942 -->
**#22955 Changed behavior when a new model og a software update requests restart** (Desktop;Studio)

When a new model is deployed or a new software version is installed, the application now automatically restarts and displays a notification after the restart to inform the user that the system has been updated.

<!--ID ab242f08-ab8e-467f-b1d3-4f5f8d96ec47 -->
**#22960 Context-sensitive help in Genus Studio** (Studio)

To provide faster access to relevant help topics in the Genus Apps documentation, topics have been mapped to different UI elements in Genus Studio. For example, pressing F1 in the directory explorer or a window, opens the documentation at a given topic. If there is no topic associated with an UI element, or an article has been moved, the request is redirected to the start page.

Some UI elements in Genus Apps for Desktop, such as the designers for analysis, report, data mart, and data extract, are also mapped to topics.

<!--ID e0fe7a95-2018-487c-b650-478dccefad0f -->
**#22961 Manage view in private shortcuts** (Desktop)

Mange view is now avaliable for both public and private shortcuts

<!--ID 0c47b3d9-76f9-44e4-8c46-4a9aec9ec0bf -->
**#22963 Added support for importing an EML file into a mail message data source** (Desktop)

Functionality provided by the "Import Data" effect.

<!--ID 95711a24-1b80-4643-b45c-f9febacb75af -->
**#22966 Remove macros in macro-enabled Excel e-mail attachments** (Desktop)

If an e-mail message is sent through a malware/spam filter which blocks attachments containing macros, the "Create a Mail Message" effect now provides an option for removing macros in macro-enabled Excel attachments before the e-mail message is sent.

Macros are removed by converting attachments saved in the xls, xlsm, or xltm format to the xlsx format.

<!--ID b853e0ef-34b0-4c03-b632-a22db59e7a77 -->
**#22967 Views moved to Home tab section** (Desktop)

The view section that contains table views is moved from the View tab section to the home section

<!--ID 7901c7e7-f176-4bb8-8285-86c3aa569424 -->
**#22973 New effect: Write to log** (Desktop;Services;Web)

Writes an entry at the end of the Genus Apps log. Entries can be logged at three levels: Trace, Warning, and Error.

Events of type Warning and Error are logged to the general Windows Server event log if the effect is executed on an application server. In addition, these events are logged in the execution history for the object containing the effect, such as a Task, Agent, Web Service, or Rest Service.

Traces are by default not logged in the execution history. To log traces, select the option "Save detailed execution trace in history" in the history setup for the object containing the effect.

For more information, see https://docs.genus.no/developers/defining-an-app-model/logic/action-orchestration/actions/effects/write-to-log.html.

<!--ID 00e4e61e-a60d-4450-b983-5624d9f02e92 -->
**#22974 New Data Mart or new Data Extract or new Analysis in studio** (Desktop)

When creating a new Data Mart, Data Extract or Analysis from Studio in a solution with multiple dataset, the user must first select a dataset before he or she can continue.

<!--ID ea4e307b-6730-46d3-b5b4-a01182f6f882 -->
**#22975 Adding a table's distribute commands in the ribbon on a Form** (Desktop)

When using a table in a Form the table's distribute commands are available in the context menu. Now it is possible to add these commands in the Forms ribbon. The commands work as any other command and are only available when the table is the active control.

<!--ID c01b3e0b-2d2c-4366-9f24-0af40797af1e -->
**#22979 Improvements to drafting in repeating section** (Web)

When drafting objects in repeating section, it is now possible to draft in two dimensions - with master key field and with another context.

<!--ID 16b75a52-cb45-4e02-b4b2-1d221bff224b -->
**#22980 Enable table views for user defined actions** (Desktop)

When defining Open Table actions in an analysis it is possible to select tables views with this option set. In version 2017.4 it was only possible to select a table, not which view to open.

<!--ID 1eed1152-5cab-4038-a47e-d63ee0512457 -->
**#22988 Enhanced tile type Markdown** (Desktop;Web)

The Markdown tile now accepts more variables, like analysisname, etc.

<!--ID 13852a52-09a6-46f3-9348-5b7d4d95f759 -->
**#22993 New action command Apply Selection in analysis** (Desktop;Web)

<!--ID 591be5dd-b7ae-42ff-820c-c0eb37f70778 -->
**#23013 View symbol in the table header** (Desktop)

The table header now shows the view symbol if the shortcut gets its name from the target. If no symbol is defined in the table view, the shortcut symbol is used.

<!--rntype07-end   MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Resolved issues
<!--rntype08-start RESOLVED ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 4bbd3e58-0da1-45e5-8ffa-58e4f6ab05f8 -->
**#22957 Improved rendering of Analysis and Map Control.** (Desktop;Studio)

In some situations the rendered output of these controls has appeared blurry, but this has now been improved by changing the method used for rendering the contents.

<!--ID b1a71131-e3e2-4df9-8764-b8d1fd90ca8e -->
**#22964 Fixed serialization of JSON where the Data Mapping contains fields without binding.** (Desktop;Services;Web)

In cases where fields were not bound in the definition, the resulting JSON-data would be incomplete.

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

<!--ID f24d463b-d004-40dc-b17b-838b78ccad66 -->
**#23012 (Analysis) Background Image not being displayed on tile** (Desktop)

Fixed an issue that in some cases could lead to the background image not being displayed correctly.

<!--ID 8322e976-b3ba-49e3-a0d7-f14e8826acf5 -->
**#23014 Fixed problem with missing font in Windows 7** (Desktop)

Some symbols used in Genus are rendered by using a font supplied by the operating system. On some Windows 7 installations, the version of this font is missing some of the required symbols.
This issue has now been adressed by distributing the font with the software.

<!--ID e64d5002-1401-400a-9a81-d6b7c487fe10 -->
**#23019 Number format for fields in a local object ignored** (Desktop)

Number format for fields ignored when a local object is displayed in a local object window from an open form effect.

<!--ID 2d8beb3a-e1fa-4848-a9f6-47b373356e4f -->
**#23021 New fields not available in table views** (Desktop)

Afther a user has customized fields in a view, the user must reset the current view to find new fields added by the Genus modeller. This problem is now fixed and all new fields will be added last in the available fields list

<!--ID 25e88936-4573-4e99-b35f-f2f49aff2223 -->
**#23023 Fixed an issue with the date picker on mobile devices** (Web)

<!--ID d5fc6028-e07f-4480-988c-668caea957d7 -->
**#23030 Fixed problem starting up Genus caused by installation of KB4055002 on Windows 7 computers.** (Desktop)

<!--ID 5e79cb16-efd7-4ff8-aa02-8d46a2ddf9f9 -->
**#23031 Sort objects effect generates a SQL lookup for each branched field data are sorted by** (Desktop)

If data are sorted by a field contained in a referenced class, such as Person.Employer.Name, values are looked up in DB for each object in the data source before sorting. Values should have been read in one batch when the data source was populated.

<!--ID 9da72685-b0c9-448b-9442-73d163112855 -->
**#23033 Fixed issue where Android Tablets where interpreted as phones for the Play Store app**

This caused views created with the phone formfactor to be displayed on the tablets.

<!--ID aa4520f9-09ae-4cca-8c9a-dd52e67b56d0 -->
**#23037 Unable to add a calculated field to a local data source in a data mart** (Desktop)

* Add a new local data source to a data mart, and then add a calculated field. Genus terminates when you try to write an expression. In addition, the name of the data source is not updated correctly in the *Calculated Fields* list.
* Add a new local data source and then save and close the data mart designer. Reopen the data mart. The local data source is not available in the *Calculated Fields* list.

Note from R&D: Bugs not related to local data sources, but to the **Private** setting for data sources (which by default is selected for local data sources).

<!--ID 5d6215e6-ce3b-4498-8c56-076edbb8f4f0 -->
**#23039 Groups not available when defining criteria for a search folder** (Studio)

In the **Select Field or Group** dialog, groups are not available, and it is not possible express an exist condition.

<!--ID dc437409-03f1-4a37-9648-7ce39275c2d7 -->
**#23057 Analysis - Initial Selection** (Desktop)

Fixed an issue where initial selection would not get applied properly.

<!--ID 8631294e-abe4-4304-a139-9e454afb389d -->
**#23059 Related local tasks are not automatically deleted when a data mart is deleted** (Desktop)

<!--ID 9969735c-97bf-4180-aca5-c74138ff1860 -->
**#23069 Fixed issue with invalid File Name when opening in default application** (Desktop)

<!--ID d168f1e2-1362-48ba-8853-f81c0030a602 -->
**#23083 Analysis - Crash when creating a new analysis** (Desktop)

Fixed an issue where if the user pressed save before the analysis-designer was initialized, the analysis would crash. This issue is not present in later versions of Genus Apps.

<!--ID ee74b58d-03e9-4361-937b-9b3d8c8726b9 -->
**#23100 Analysis - Switch analysis** (Desktop)

Fixed an issue with switch analysis that could lead to the destination analysis never loading data, and therefor never be ready for user input.

<!--rntype08-end   RESOLVED ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Known issues

Known issues are errors or lack of functionality. Known issues may be solved in a future release based on customer demand.
<!--rntype09-start KNOWN ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 295f03ed-94f9-4516-81d5-6e831609e3b0 -->
**#22978 Null/not null coalescing operator (?? and !??) precedence is counterintuitive** (Studio)

The operator precedence of the "null coalescing" and "not null coalescing" operators (?? and !??) is counterintuitive but aligns with languages like C#.

See
* https://docs.genus.no/developers/defining-an-app-model/common-concepts/advanced-expressions/operators-and-precedence.html
* https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/
* https://www.codeproject.com/Tips/721145/Beware-The-null-coalescing-operator-is-low-in-the

<!--ID f7c2045e-836f-4f03-87c1-73eb4e43e1b6 -->
**#23036 No longer warns user about leaving the page when redirected to another page in sign out command** (Web)

<!--ID f8f0464e-6aa0-49f9-aa85-f307f97a0093 -->
**#23045 Fixed issue where anonymous applications could crash after upgrading** (Web)

<!--rntype09-end   KNOWN ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Tips and hints

Tips and hints are design decisions or answers to support questions that may be of general interest.
 
There are no tips and hints specifically targeting this release.

## Change log

* 2017-12-04 Changed stage to Release (builds starting with 17.250.88 or later).
* 2017-11-21 Changed stage from Beta to Release Candidate (builds starting with 17.250.74 or later).
* 2017-11-06 Changed stage from Alpha to Beta (builds starting with 17.250.49 or later).
* 2017-11-03 Updated with installation/upgrade info, breaking changes, resolved issues, and minor new functionalities.
* 2017-10-27 Created (Alpha stage).
<!--changelog CHANGELOG. DO NOT CHANGE THIS TAG. ANY CHANGES BELOW WILL BE DELETED.-->
