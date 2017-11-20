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

Genus Apps for Desktop and Genus Services now requires .NET Framework 4.7 or newer.

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
There is no deprecated functionality in this release.
<!--rntype04-end   DEPRECATED. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Breaking changes

This section lists important changes introduced in this release. You will need to use this list in order to understand the changes you might need to make to your application to support the new release.
<!--rntype05-start BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID c4e9638b-955a-47f3-a79b-68b98aa55e65 -->
**#22968 Change in REST serialization** (Apps;Desktop;Studio)

From version 2017.5 of Genus Apps, REST serialization is changed for fields that are not assigned either to a field in a data source or by a constant value. In earlier versions of Genus, these fields would be serialized with a null value, but from now on these fields will be omitted during serialization. In order to maintain the previous functionality, assign null-values to all fields that should be serialized.

<!--ID 69da89c1-34f2-4a55-ba6a-555111bbd578 -->
**#22976 Made changes to keyboard navigation - tabbing** (Apps)

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
**#22973 New effect: Write to log** (Apps;Desktop;Services)

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

<!--rntype07-end   MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Bug fixes
<!--rntype08-start BUG FIXES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 4bbd3e58-0da1-45e5-8ffa-58e4f6ab05f8 -->
**#22957 Improved rendering of Analysis and Map Control.** (Desktop;Studio)

In some situations the rendered output of these controls has appeared blurry, but this has now been improved by changing the method used for rendering the contents.

<!--ID b1a71131-e3e2-4df9-8764-b8d1fd90ca8e -->
**#22964 Fixed serialization of JSON where the Data Mapping contains fields without binding.** (Apps;Desktop;Services)

In cases where fields were not bound in the definition, the resulting JSON-data would be incomplete.

<!--rntype08-end   BUG FIXES. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
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

<!--rntype09-end   KNOWN ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Tips and hints

Tips and hints are design decisions or answers to support questions that may be of general interest.
 
There are no tips and hints specifically targeting this release.

## Change log

* 2017-11-06 Changed stage from Alpha to Beta (builds starting with 17.250.49 or later).
* 2017-11-03 Updated with installation/upgrade info, breaking changes, bug fixes, and minor new functionalities.
* 2017-10-27 Created (Alpha stage).
<!--changelog CHANGELOG. DO NOT CHANGE THIS TAG. ANY CHANGES BELOW WILL BE DELETED.-->
