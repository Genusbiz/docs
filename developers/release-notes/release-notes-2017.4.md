---
title: Release notes for Genus Apps release 2017.4.
description: User-visible changes to Genus Apps from release 2017.3 to 2017.4.
author: jtroset
---
# Release notes for version 2017.4

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

<!--ID 432f9c6c-0428-40e7-aacd-767cfde7cdec -->
**#22935 New Genus Launcher for Genus Desktop** (Desktop)

When upgrading to 2017.4, the new Genus Launcher will be available. 

To be able to use this, you must:
1. Uninstall Genus Desktop from "Programs and Features".
2. Download and open Setup.exe from https://appserver-url/download/setup.exe
3. Find "Genus Desktop" in the new "Genus"-folder in the Start Menu. Right click and choose "Pin to Start" and/or "More | Pin to taskbar".
4. Start Genus Desktop by using the Start Menu shortcut, the taskbar shortcut, your pre-existing shortcuts or by searching in the Start Menu.

If this is the first time ever you start Genus Desktop, you have to type in the url to the data set in the text field or click a provided link to the data set.

Genus Launcher will maintain a most used list of data sets in the launcher window as well as tasks list when right clicking the Genus Desktop shortcut in either the Start Menu or the taskbar.

The Genus Launcher will self-update if there is a new version and will maintain and update the required Genus Desktop versions for each data set the user needs.

For administrative installation / installation by an administrator, see this link: https://docs.genus.no/developers/installation-and-configuration/install-genus-desktop.html#option-2-the-installation-is-fully-managed-by-an-administrator

Note that the uninstall of the old installation and installation of the new launcher must be done manually by each user. If you have many users in your organization, please contact your Genus support representative and we may provide you with an automated reinstall specially configured for your environment.

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
There are no breaking changes in this release.
<!--rntype05-end   BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Major new functionality
<!--rntype06-start MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 543d1e49-a665-45ef-9c6c-eb5d08ed0ed8 -->
**#22936 Analysis improvements** (Apps;Desktop)

The following new visualizations will be introduced:
- Barrel Roll control: Scrolling list of category items with timer.
- Calendar View: Month based calendar for layout of day-bound events.
- Circle Packing: A layout of circles where the size of a circle correspond to a Value. The color may correspond to the grouping by a single Category, or to the Value. Useful for identifying deviating values. Actions can be applied to Header, Content, Button, and Context Menu.
- Circular progress: A circular progress shows one or two values grouped by a single category. The category objects appear in a layout of circular arcs. The graph is used to show progress towards a maximum value/goal.
- Deviation Table: Lists a percentage deviation between two values grouped by one category. The table shows the group name, current value and deviation.
- Report Grid: Offers placement of values in cells in order to achieve a custom layout not structured by dimensions or data, but "hard coded" in a row - column position.
- Sankey: A Sankey diagram is a flow diagram where the width of the links is proportional to the flow between the nodes. The diagram is used to present N-1 values grouped pairwise by N categories. The categories will be distributed along the horizontal axis, and appear as vertically stacked columns of category objects. Between each pair of adjacent categories, there will be links visualizing the aggregated value between the category objects. See here for more information.
- Sankey in maps: Movements can be displayed as lines in a map.
- Symbolic Distribution: A symbolic distribution can be used in two ways: 1) Visualizing a single value grouped by a single category 2) Visualizing one or more uncategorized values. A symbol picker can in both cases be applied to choose a symbol to represent the aggregated value(s).
- Single category field: Listing of values belonging to a category. Typically used for categories with a low number of values, like types.
- Three dimensional Grid: Presents bound data in a tabular format, where columns represent data fields and rows represent objects.  Numerous data management and layout customization features are supported.
- Ticker: A moving visualization of a value and its relation to a comparative value, e.g. stock or news tickers.
- Timer control: Visual countdown to reload of data.
- Word Cloud visualization.
 
The following new features will be introduced:
- Copy and paste formatting from one tile to another.
- Export of a tile to an image (PNG) file.
- Export of data from a tile to an Excel file.
- Audit trail on both changes and execution of Analysis.
- Parallel loading of data marts.
- Explore values by opening a form or a table.
- Compactness factor to accomodate different uses on different devices.
- Color key to group similar items
- Conditional Symbols to improve visualization effect.

<!--ID 4f774c8a-42c4-4db0-a13b-a0af627462f4 -->
**#22940 User defined table views** (Desktop;Studio)

When you define a table shortcut it is now possible to add multiple views. When the end user starts the shortcut he can change between the predefined views or create his own based on any of a predefined view. The end user can share his own view with other users by granting access in the Modify View dialog.

<!--ID 1522dd19-4193-44dc-a87e-de47203c7029 -->
**#22941 Improved editor for defining REST services** (Studio)

The REST service editor in Genus Studio has been updated to improve the process of defining REST services. The previous editor was build using separate dialogs for the service, resources and methods. This has now been integrated into a single view which gives a better overview of the API of the REST service and also how data is transferred between the service and underlying data sources used in the action sequence performing the underlying logic of a REST service method.

<!--rntype06-end   MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Minor new functionality
<!--rntype07-start MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 3d5a80e2-11a2-4518-80ea-57fcfae79c22 -->
**#22920 Include the Genus protocol in links to objects** (Studio)

Links generated by using the function {an-object}.shortcut() in the Genus App Platform language does not include the Genus protocol "genuslink:". When a user click the link, the web browser is opened and the app server redirects the request to Genus Desktop. If the link contains the Genus protocol, Genus Desktop is launched immediately. The reason for not including the protocol in the link is to avoid hyperlink warning messages in Microsoft Office, e.g. when the link is included in a mail body or a Word document.

It is possible to disable hyperlink warning messages by adding the following key to the Windows Registry:

HKEY_CURRENT_USER\Software\Policies\Microsoft\Office\{xx.0}\Common\Security\Trusted Protocols\All Applications\genuslink:

In the subkey, replace "xx.0" with your Office version, e.g. 16.0 for Office 2016.

This cannot be done when Genus is installed since it requires that the user has admin privileges. However, you can include this setting in the Group Policy for your domain. 

To provide the ability to include the Genus protocol in a link to an object, the following function has been added to the Genus App Platform language:

{an-object}.shortcutInclGenusProtocol()

The existing "shortcut" function has been renamed to "shortcutExclGenusProtocol".

<!--ID 0f3d3ab2-ede3-4cb4-b8b1-7ae833992257 -->
**#22921 Added support for multipart/form-data request body in the "Consume Rest Service" effect.** (Services)

<!--ID 4b0331a1-3d5d-40b6-9c67-f6f370bec33d -->
**#22922 Extract XML as a string from an object of type "XML-document"** (Studio)

Added function "getString" to objects of type "XML-document" in the Genus App Platform language:

{xml-document}.getString(encoding, [createElementsWithNamespacePrefix])

encoding: UTF8 | UTF16
createElementsWithNamespacePrefix: bool (default TRUE)

<!--ID ef159911-43df-4761-8ea6-7aa35aa64ded -->
**#22924 Accessing deployment dates for the application model** (Studio)

Added the following fields in the "General Settings" dialog in Studio:

Last Deployment
Scheduled Deployment

In addition the field "Last Upgrade Script" was added to provide information about the version number for the last executed script in the directory DB.

<!--ID 92770ac9-3fff-40fb-9638-6bf842e25cf0 -->
**#22925 Bind "Checked Binding" in a command to a non-boolean field** (Studio)

Applies to commands in form and table.

In previous versions the binding was restricted to fields of type boolean. However, a command is often checked/unchecked given that a field has a value or has no value. Typically you would add a field to the data source with a data calculation such as

<a-field> has value

It is now possible to bind to a field of any data type. If the data type not equals boolean, the checked state is evaluated to true given that the field (or group) has a value. If you select "Negate Value" in the data binding setup, the checked state is evaluated to true given that the field has no value.

This is the same functionality as provided in app forms for boolean data bindings.

<!--ID 85d8acfc-8925-462c-b929-a6ed03a3d9e6 -->
**#22927 Highlight selected object in group which repeats content** (Desktop)

Applies to group/group box control in desktop forms.

To highlight selected object, activate the option "Highlight Selection" in the properties editor. Functionality already available in app forms.

<!--ID 5172684b-98bb-4712-a8b3-a5073c02874a -->
**#22929 Specification of timeout when running effects** (Desktop;Services)

Changed resolution from minutes to seconds.

Applies to all effects which allow specification of a timeout. In the current version a timeout can be specified for the following effects: 

Consume a Web Service
Export Data

<!--ID 6864927c-f46e-4e67-89e8-b26baf9747b5 -->
**#22932 Model objects in Recent Items** (Desktop)

It is now possible to see the last opened objects in the Recent Items list. The property Show in recent items is defined in the object class dialog in the explore page

<!--ID 4d83c530-4767-4eb4-9ee0-b631d3382a1d -->
**#22934 Adding columns to a grid by drag drop** (Studio)

It is now possible to add columns by dragging a field onto the Grid control as long as the field is from the same datasource as the Grid is bound to.

<!--ID c4129a04-399a-48f4-8957-62862fb884bb -->
**#22937 Translating Named Search Fields in a Table** (Studio)

It is now possible to translate named search fields in a table view

<!--ID 2f82483f-dc17-44a0-bd37-ea5e539089ce -->
**#22938 Copy text or image in a PDF file** (Desktop)

Added support for copying selected text or image in the file preview control available in desktop forms. Copying text requires that the PDF has been processed by OCR software.

<!--ID 7fe7f92f-2d8f-411b-9a66-e5bc12063b22 -->
**#22942 Why are my properties read when using a form or a table?** (Desktop)

It's now possible to trace why properties are in use. Check the Form and Table Field Usage trace option and Genus will add a line in the log describing why the property is added. If a property is used in multiple controls, the field will appear multiple times in the log.

<!--ID 06d62fa5-9ca6-48a6-a988-c3b88a4d9d1b -->
**#22943 Unlock a file opened for editing** (Desktop)

Added "Unlock" action to the "File" context menu for objects containing file data. The action is available if a file is opened for editing on the current computer.

If the application where the file was opened for edit (e.g. MS Word, MS Outlook, Adobe) unexpectedly terminates, the Genus client will not receive any notification that the file was closed and it will still be locked for editing. In previous version the user had to restart Genus to unlock and re-open the file. The "Unlock" action simplifies this task.

<!--ID e4aa6ccb-e4ca-4b6c-8c85-85d5d71507a6 -->
**#22945 Improvements in Slide Show** (Desktop)

Added support for Slide Show in other windows that the main window, and improved rendering and implemented a floating toolbar for controlling the slide show.

<!--ID d5abbfcf-a0df-44db-aa69-9c7680199ade -->
**#22956 In a line chart, additional values can be added that are not categorized by the secondary category** (Desktop)

<!--ID 0c47b3d9-76f9-44e4-8c46-4a9aec9ec0bf -->
**#22963 Added support for importing an EML file into a mail message data source** (Desktop)

Functionality provided by the "Import Data" effect.

<!--ID b853e0ef-34b0-4c03-b632-a22db59e7a77 -->
**#22967 Views moved to Home tab section** (Desktop)

The view section that contains table views is moved from the View tab section to the home section

<!--rntype07-end   MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Bug fixes
<!--rntype08-start BUG FIXES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 54e92015-9fb4-4f87-a889-d70fec4f7c44 -->
**#22917 Username, password and remember me are now preserved through upgrades of Genus Apps** (Apps)

<!--ID f3ff4633-3af2-41fc-b80b-40cc79f30f0e -->
**#22919 Actions: Improved performance and reduced memory consumption when modifying large amounts of data** (Apps;Desktop;Services)

Optimized memory consumption when modifying large amounts of data using a "Create Objects" or "Modify Objects" effect. In a real case example (100,000 objects) performance was improved by 50% and the memory peaked below 1GB.

<!--ID 7c8f8838-ac92-4998-8f84-09602f1668cc -->
**#22926 Improved errormessage propagated to client on server-exception** (Apps;Services)

Expanded the exception returned when failing to deserialize an object in a Genus Apps request to include the inner exception message.

<!--ID 056258d4-6a11-4911-af75-7834537245ea -->
**#22928 Fixed error where a radio button would appear to be selected when it actually was not** (Apps)

This could occour when making quick selections in radio button groups which had no prior selection.

<!--ID 08caeb60-4ed6-459e-a42f-c1bd4a21eeba -->
**#22939 IMPORTANT - Read Objects effect returns no objects** (Apps;Desktop)

If data are read and written to the same data source, no objects are returned. Bug present in patches of release 2017.1, 2017.2, and 2017.3 built after 20.06.2017.

<!--ID b160c773-fc01-4d0e-82ee-c780644a546a -->
**#22946 Fixed problem where data source was not updated after change in Html Edit** (Desktop)

<!--ID ba0d9a17-3155-4807-a6b2-c879270f5cbd -->
**#22947 Reference in "Other Merge Fields" to report prevents delete** (Studio)

If the effect was deleted, the corresponding merge fields were not deleted (only if individual merge fields were deleted). This bug is fixed. However, to remove these references you need to do it manually.

Please contact Genus R&D for instructions through your support representative.

Tip:

SELECT g_report.name "Report Name",
       g_analysis_merge_field.anl_id "Report ID",
    g_task.tsk_name "Task Name",    
    g_analysis_merge_field.tsk_guid "Task ID",
    g_analysis_merge_field.amf_guid
FROM
 g_analysis_merge_field
 INNER JOIN g_report ON (g_analysis_merge_field.anl_id = g_report.id)
 INNER JOIN g_task ON (g_analysis_merge_field.tsk_guid = g_task.tsk_guid)
ORDER BY "Report Name", "Task Name" ASC

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
There are no known issues in this release.
<!--rntype09-end   KNOWN ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Tips and hints

Tips and hints are design decisions or answers to support questions that may be of general interest.
 
There are no tips and hints specifically targeting this release.

## Change log

* 2017-11-03 Updated with latest bug fixes.
* 2017-09-29 Changed stage to Release (build 17.240.211 or later). Updated with lates minor new functionalities and bug fixes.
* 2017-09-18 Changed stage from Beta to Release Candidate. Updated with latest minor new functionalities.
* 2017-09-11 Updated with latest major and minor new functionalities, and bug fixes.
* 2017-09-05 Changed stage from Alpha to Beta (builds starting with 17.240.85).
* 2017-08-15 Updated with latest major and minor new functionalities, and bug fixes.
* 2017-08-11 Created.
<!--changelog-start CHANGELOG. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--changelog-end   CHANGELOG. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
