---
title: Release notes for Genus Apps release 2015.1.
description: User-visible changes to Genus Apps from release 2014.2 to 2015.1.
author: jtroset
---
# Release notes for version 2015.1

## Introduction

This document lists all user-visible changes to Genus App Platform between releases 2014.2 and 2015.1.
 
This release note will be updated prior to the release and may also be updated as long as the release is available, e.g. with information of new patches or known issues. Please take note of the installation / upgrade comments, and the release notes change log.

## Installation and upgrading

Prior to upgrading to 2015.1, you must:
* Upgrade to 2014.2. See the Release notes for 2014.2 for more information.
* Review the Expiry date of your Genus License File and install a new one if necessary.
* Review the rest of the release notes for this release. Pay special attention to any issues in the sections Deprecated Functionality, Breaking Changes and Known Issues. You may have to perform manual tasks.
* Please note that there does not exist any Genus Upgrade Assistant for the 2014.2 to 2015.1 upgrade.
 
See our help documentation for general information about installing and upgrading the Genus App Platform. We recommend reviewing the System Requirements help article.
 
## End-of-life functionality

End-of-life functionality is functionality that was available in the previous release, but is no longer available in this release.
 
There is no end-of-life functionality in release 2015.1.

## Deprecated functionality

Deprecated functionality is available in this release, but will (most probably) no longer be available in the next release.
 
There are no deprecated functionality in release 2015.1.

## Breaking changes

This section lists important changes introduced in this release. You will need to use this list in order to understand the changes you might need to make to your application to support the new release.

**#21757 The size() function has been renamed**
 
The size() function previously available on collections has been renamed to count().
The size() function previously available on strings has been renamed to length().
 
Existing expressions using these functions will be corrected automatically.
 
**#21759 Some calculations now returns null instead of throwing exceptions**
 
Expressions on the form X / 0 (zero) will now return null instead of throwing an exception.
Expresssions otherwise resulting in a NaN (Not a Number), INF, or -INF (positive and negative Infinity) will return null.

Expressions otherwise resulting in an integer overflow exception will return null.
 
**#21764 Privilege "Log on as a service" is needed even if the user is member of the Administrators group**
 
In previous versions Genus Server automatically tried to execute or consume web services using "elevated permissions" (i.e. running as an Administrator) if the account was a member of the Administrators group. This has been changed such that account no longer runs elevated. Now, in order to execute or consume a web service, the account needs to be assigned the "Log on as a service" privilege explicitly through a group membership.

## Major new functionality

**#21777 Introducing a Map Control for displaying and navigating maps for use in Forms and Genus Discovery**
 
Use maps in Genus Discovery to visualize your geolocated data by markers and areas indicating values.
 
Use maps in Forms to display your geolocated data as markers and areas with task buttons and automatic formatting.
 
The Map Control includes the following functionality:
- Displaying symbols and object markers, with automatic formating of the markers. Marker size, color and opacity may be bound to data values. Heat maps may be made by binding size and opacity to aggregated data values.
- Navigating the map by zooming and panning.
- Map location selection (click) sets active object (in other Form controls), and vice versa.
- Marker selection (click) expands marker with task buttons.
- Support for multiple coordinate systems.
- Support for multiple map data sources, like OpenStreetMap, Google Maps, Bing and open and free geospatial data from Norway (see this link for more information) – and more.
- Support for multiple map layers.
- Support for any WMS-C server, including locally installed servers.
- Support for the GeoJSON format, a format for encoding collections of simple geographical features along with their non-spatial attributes, like points (e.g. addresses), line strings (e.g. streets) and polygons (e.g. countries and provinces).
 
**#21778 Extensions to Genus Discovery**
 
Use the Map Control to visualize your geolocated data.
 
Extending measures to include automatic formatting (foreground color/symbol).
 
New operator (token “??”) to handle null values, like “sales.amount ?? 0”, meaning that if sales.amount is not null, sales amount is returned, otherwise 0. The operator is useful in situations where you want to avoid that expressions such as X + Y returns null if one of the operands are null.
 
**#21779 Introducing the following extensions to Genus Mobile**
 
New events “On Resume”, “On Suspend”, “On Browser Close” and “On Back”.
 
Support for caching of file data on server.
 
Support for default selection in Repeating Section (None, First, First if One).
 
Support for timer events.
 
Support for picture thumbnails.

## Minor new functionality

**#21732 Delete execution history for Agents**
 
Added support for deleting execution history for Agents in the Delete Objects effect. History can be deleted for all Agents, or a specified selection of Agents, which is older than a given number of days, months or years.
 
Age is calculated based on actual start time.
 
Executions which is in state Queued, Running, or Scheduled are not deleted.
 
**#21737 Display description for a search folder in the filter pane**
 
By default, the criteria for a search folder is displayed in the filter pane when the search folder is opened in a table. However, the criteria may be complex to read and it would be more helpful to display the description for the search folder.
 
That is, if a description is defined, the description is now displayed in the filter pane, otherwise the criteria is displayed.
 
**#21740 Added functions for encoding and decoding URL's**
 
Url.urlEncode() and Url.urlDecode() are now offered for encoding and decoding values that may be used as part of a URL.
 
**#21741 Show number of objects in header for a table**
 
A multidimension table can now show number of objects as part of the shortcut name and in the header
 
**#21742 Automatically hide a control in a Form if empty**
 
If the property "Hide If Empty" is set to true for a control, the control will automatically be hidden if the binding returns no data. Simplifies the setup and reduces the need to bind visibility to a boolean field (Mobile) or specify a visibility condition (Desktop) to hide a control which is empty.
 
Available for common controls, such as Text, Text Edit, Number Edit, Date Time Edit etc.
 
**#21743 Execute the Refresh command from an event handler**
 
Added support for executing the Refresh command from an event handler in a form, such as the On Click event for a button control.
 
**#21749 New features in Advanced Expressions**
 
A new ?? operator has been introduced which makes it possible to write expressions like
 
`X ?? Y`
 
meaning that if X is not null the value of X is returned, otherwise the value of Y is returned.
 
**#21750 Handle custom exceptions when consuming REST services**
 
Added functionality to the "Consume a Rest Service" effect to handle custom exceptions by defining one or more conditional response handlers.
 
**#21751 The floor() and ceiling() functions have been changed**
 
The "floor()" and "ceiling()" functions have changed due to problems with integer overflow.
 
Usage of the old "floor()" and "ceiling()" functions will be automatically renamed to "floorInteger()" og "ceilingInteger()". These functions still return a 32 bit integer.
 
New versions of the "floor()" and "ceiling()" functions have been added, returning a 64 bit integer. Please use the new functions in cases where values involved in the calculation may exceed the range of 32 bit integers.
 
**#21752 Option to include all or selected fields and groups in the body when consuming a rest service**
 
Effect: Consume a Rest Service
 
Added options for including all or selected fields and groups when the body is read from a data source.
 
**#21758 New !?? operator introduced in Advanced Expressions**
 
A new !?? operator has been introduced, making it possible to write expressions like
 
`X !?? Y`
 
meaning that if X is not null the value of Y is returned, otherwise null is returned. The !?? operator is related to the newly introduced ?? operator.
 
**#21762 Prevent that catched exceptions are logged in Windows event log as errors**
 
By default all exceptions that are thrown when running actions are logged as an error, even if the exception is catched and handled. To avoid that the Windows event log is filled up with expected and handled errors, exceptions are no longer logged if handled by a catch exception block.
 
**#21766 Default naming for data sources of type XML document**
 
Data source always named as "Schema" even if there is only one root element. Default name should be set equal to the name for the root element.
 
**#21767 Included Open, Save As and Delete commands in the shortcut menu for the Image control (Desktop)**
 
In addition added support for saving the image if the control is write protected.
 
**#21769 Handle errors such as wild card query errors in the Read Objects effect**
 
Introduced a new exception, "On Objects Read Error", raised by the Read Objects effect if data not could be read from storage. The cause of the error is stored in the field ActionOrchestrator.Error Message.
 
**#21774 Extended error details written to log when call to a REST Service fails**
 
In order to make it easier to troubleshoot calls to REST Services which fails, error details written to the log has been extended to include the following information:
 
Method (GET, PUT, POST, DELETE)
Request Headers
Request Body
Response (raw text)

## Bug fixes

**#21734 Date and number format is changed after data is merged to a document**
 
Occurs if the user's preferred culture not is the same as the culture derived from the current language settings in Genus Desktop. May also occur if a culture is defined in the "Merge Data to a Document" effect.
 
**#21738 Items in the column filter menu for the Grid control are not sorted**
 
Case for columns displaying a 1:N relationship, such as tags assigned to document objects.
 
**#21745 Label foreground color applied to the text in the search pane**
 
Case for the grid and list box controls in Analysis. E.g. if you have a dark background color you may want to set the label foreground color to white. Since the background color for the search pane by default is white, it is not possible to see the text entered in the search pane.
 
**#21746 Grid columns which are not initially selected are always visible**
 
Case in the Grid control in Analysis. Columns which are not initially selected should be hidden until selected by end users in the Field Chooser dialog.
 
**#21747 Columns not sorted correctly in Grid control**
 
Case in Analysis. Columns are sorted based on the visual order and not the order defined in the sort setup for the Grid control.
 
**#21748 ScreenTip defined for code domain values not displayed in ComboBox control**
 
**#21761 CTRL + click does not toggle selection in the Grid control**
 
Did not work if Selection Mode was set to Single (OK if Selection Mode was set to Multiple).
 
**#21763 Changes to an object done in a Task called from another Task not reflected in Form**
 
Case if a Task is run from a Form, and this Task (T1) calls another Task (T2) which modifies an object. The object which is modified is two-way bound from the Form to T1, and from T1 to T2.
 
**#21765 OK button initially disabled in Active Object Selection dialog**
 
Location: Expression Editor.
 
Right-click on a field in the expression, and then in the shortcut menu click Active Object Selection. The Active Object Selection dialog is displayed and data is automatically filled out based on the selected field. The OK button is disabled until the selection is modified. That is, it should be possible to save the selection immediately without doing any changes.
 
**#21770 Number format not applied when exporting data from Grid control to Excel**
 
**#21775 Margin ignored for Table control in Form**
 
Control displayed in correct position in Form Designer. Ignored when Form is opened in Genus Desktop.
 
**#21782 Adding a data source in Table Designer terminates the application**
 
Occurs if a data source is added by clicking on the "Add Data Source" link in the Task Pane. If a data source is added by selecting "Add Data Source" in the shortcut menu, the data source is added successfully.
 
**#21783 Optimalization of the Read Excel effect**
 
The speed of the Excel import into a data source has been improved. Improvement has in one case been reported down from 4 minutes to 4 seconds for reading 17 000 rows.
 
**#21784 Data Extract may now merge data from several Data Marts into one document**
 
If you upgrade, existing Data Extracts will be deleted.
 
If you want to keep a template, remember to open and save the template to file before you upgrade. In tasks using Data Extract effects, you must delete the Data Extract effect.
 
Run the following SQL scripts as part of the patch installation:
- truncate table g_data_extract_template
- truncate table g_data_extract
 
**#21791 Case conversion for field in data source of type local object ignored**
 
If a local object is opened in a form using a "Open a Form" effect, case conversion defined for a field is ignored.

## Known issues

Known issues are errors or lack of functionality. Known issues may be solved in a future release based on customer demand.

**#21756 Sent mail is not always automatically archived in Genus Desktop as expected**
 
Scenario 1:
 
Symptom: You start composing a new e-mail message from a Microsoft Outlook window opened by an effect in Genus Desktop. After submitting the e-mail message Genus Desktop is expected to save the sent message back into the application’s e-mail archive, but the e-mail message does not appear.
 
Possible cause: Genus Desktop will wait a maximum of 10 seconds for the e-mail message to be delivered to the user’s Sent Items folder. If e-mail delivery is delayed beyond this limit Genus Desktop will stop waiting and never save a copy into the application’s e-mail archive.
 
• Workaround, alternative 1: The system administrator may contact Genus Support to get a description on how to increase the default timeout. Timeouts for Outlook 2010 and Outlook 2013 may be configured independently.
 
• Workaround, alternative 2: Drag and drop the e-mail from your Outlook Sent Items folder into your Genus application.
 
Scenario 2:
 
Symptom: You start composing a new e-mail message from a Microsoft Outlook window opened by an effect in Genus Desktop. You then add an attachment to the e-mail message. After submitting the e-mail message Genus Desktop is expected to save the sent message back into the application’s e-mail archive, but the e-mail message does not appear.
 
Cause: When Genus Desktop opens an Outlook window it will wait until Microsoft Outlook releases a file lock on the message originally created by Genus Desktop. Normally, this happens when the Outlook window is closed. However, if the user adds an attachment to the message Outlook will make a copy of the opened e-mail message and then immediately release the original file lock. Hence, Genus Desktop will prematurely start waiting for the e-mail message to appear in the user’s Sent Items folder and then risk exceeding the timeout as described in Scenario 1.
 
Workarounds: Avoid adding the attachments or add attachments immediately before submitting the message. Alternatively, wait for the submitted e-mail message to arrive in your Outlook Sent Items folder and then drag and drop the message into your Genus application.
 
Scenario 3:
 
Symptom: You open an existing e-mail message from Genus Desktop, select Forward or Reply, and then submit this forwarded or replied message. After submitting the e-mail message Genus Desktop is expected to save the sent message back into the application’s e-mail archive, but the e-mail message fails to appear.
 
Possible Cause 1: Genus Desktop will wait a maximum of 10 seconds for the e-mail to be delivered in the user’s Sent Items folder. If e-mail delivery is delayed beyond this limit Genus Desktop will not save a copy into the application’s e-mail archive.
 
• Workaround, alternative 1: Leave the original e-mail window (the one from where you selected Reply or Forward) open. Genus Desktop will stop looking for e-mail messages appearing in the Sent Items folder 10 seconds after the original window is closed. Keep this window open until the sent e-mail message arrive in the application’s e-mail archive. Then close the window.
 
• Workaround, alternative 2: Drag and drop the missing e-mail message from the Microsoft Outlook Sent Items folder into your Genus application.
 
Possible Cause 2: Like Microsoft Outlook’s “Show as Conversations” view, Genus Desktop requires that the subject field in forwarded and replied e-mail messages is not edited by the user. If the subject field is has been changed Genus Desktop (and Microsoft Outlook) has no way of knowing that the two e-mail messages are part of the same conversation.
 
• Workaround: Leave the subject field unchanged when forwarding or replying to an e-mail message.
 
**#21773 Attempt to run a data extract from a Web Service or Agent fails**
 
Current versions do not support running the effect "Run a Data Extract" from a Web Service or Agent. Will be supported in a future version when data marts can be accessed from the application server (requires support for Unicode).
 
Removed support for defining the effect in a Web Service or Agent.

## Tips and hints

Tips and hints are design decisions or answers to support questions that may be of general interest.
 
No tips and hints specific for release 2015.1 have been added yet.

## Change log

* 2015-02-13 Changed status from Release Candidate to Release (build 15.21.11.00).
* 2015-01-26 Changed status from Beta to Release Candidate.
* 2015-01-05 Changed status from Alpha til Beta.
