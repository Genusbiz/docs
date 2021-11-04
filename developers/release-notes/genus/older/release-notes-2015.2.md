---
title: Release notes for Genus Apps release 2015.2.
description: User-visible changes to Genus Apps from release 2015.1 to 2015.2.
author: jtroset
---
# Release notes for version 2015.2

## Introduction

This document lists all user-visible changes to Genus App Platform between releases 2015.1 and 2015.2.
 
This release note will be updated prior to the release and may also be updated as long as the release is available, e.g. with information of new patches or known issues. Please take note of the installation / upgrade comments, and the release notes change log.

## Installation and upgrading

Prior to upgrading to 2015.2, you must:
* Upgrade to 2015.1. See the Release notes for 2015.1 for more information.
* Review the Expiry date of your Genus License File and install a new one if necessary.
* Review the rest of the release notes for this release. Pay special attention to any issues in the sections Deprecated Functionality, Breaking Changes and Known Issues. You may have to perform manual tasks.
* Please note that there does not exist any Genus Upgrade Assistant for the 2015.1 to 2015.2 upgrade.

See our help documentation for general information about installing and upgrading the Genus App Platform. We recommend reviewing the System Requirements help article.

## End-of-life functionality

End-of-life functionality is functionality that was available in the previous release, but is no longer available in this release.

**#21790 The "new" verb for files is no longer supported**
 
The "new" command available from the shortcut menu Attachment in the Grid and Table controls, is no longer supported. You will need to replace the functionality by using the effect "Create a File".
 
**#21792 Removed Genus Mobile support for Windows 8 and Windows Phone 8**
 
Staring with version 2015.2, Genus Mobile will only support version 8.1 or newer on the Windows and Windows Phone plattforms.
 
**#22451 Data Interpretation "Free Text" is removed**
 
This was stored in BLOBs in the database. You must convert the data to e.g. Data Interpretation "Text". You will be warned during upgrade.

## Deprecated functionality

Deprecated functionality is available in this release, but will (most probably) no longer be available in the next release.

**#22464 Last release to support 32-bits Windows for Genus Desktop.**
 
Release 2015.2 is the last release to support 32-bits Windows for Genus Desktop, i.e. to support 32-bits editions of Windows 10, Windows 8.1, Windows 8, Windows 7, Windows Vista, and Windows Server 2008 terminal servers. The next release of Genus Desktop will only run on 64-bits Windows.
 
**#22468 Oracle 9 and 10 are deprecated as of 2015.2. The support will be removed in 2016.1**

## Breaking changes

This section lists important changes introduced in this release. You will need to use this list in order to understand the changes you might need to make to your application to support the new release.
 
**#21780 Property with interpretation "File Size" required to store file data**
 
If an object class contains a property with interpretation "File Data", a property for storing the corresponding file size is now required. In previous versions the only requirement was that the object class contained a property for storing the file name.
 
If your model does not satisfy this requirement, you will be informed when starting Genus Studio or Desktop.
 
Note that the column must be defined as nullable if files are uploaded from a mobile client, or if you are uploading large files using the "Upload a File" effect. Before a file can be uploaded, an object with empty file-data is inserted in your database. The file size is not updated until the file has been successfully uploaded.
 
See versioning script 015.022.004.001 for an example on how to add a file size column to a table.

## Major new functionality

**#21799 Introducing Actionflow**
 
Actionflow is a visual diagram extension to the existing Action Orchestration used in Tasks, Agents, Web Services and Rules. See news article "Introducing Action Flow" from May 2015 at www.genus.no / Product / News / News Archive for more information.
 
**#22289 Introducing support for IBM InfoSphere Guardium and QRadar**
 
Guardium Enable is added as option on a physical database connection in the Genus Server configuration tool.
 
**#22462 Integration with REST-based search services like Solr and Elasticsearch**
 
Extended functionality for federating (or combining) search and presentation of data from structured sources and unstructured/external sources:
- Includes the ability to read data into data sources by using logic defined in Tasks, and access to search fields from within the logic.
- Structured sources may be Object Classes in your Application Model.
- Unstructured/external sources may be open source enterprise search platforms such as Solr and Elasticsearch, i.e. for searching in large amounts of text documents.
 
**#22463 Genus Mobile enhancements**
 
Introducing support for modelling offline apps:
- Download your data before leaving the network.
- While offline:
- view your downloaded data, like text, dates, numbers, documents, pictures. Playback videos or sound recordings.
- add data by entering text or taking pictures. Record video or sound.
- Upload added data when you are back online.
- View added data on your app, on web or in Genus Desktop.
 
Improved layout setup, making it easier to model Mobile Forms.
 
Support for recording and playback of voice and video on iOS and Android.
 
Introducing cookie-based authentication.
 
Improved caching of static files (like pictures).
 
Introducing declarative property validation with visual feedback.

## Minor new functionality

**#21762 Prevent that catched exceptions are logged in Windows event log as errors**
 
By default all exceptions that are thrown when running actions are logged as an error, even if the exception is catched and handled. To avoid that the Windows event log is filled up with expected and handled errors, exceptions are no longer logged if handled by a catch exception block.
 
**#21771 Diagram: Added formatting options on Node Edges**
 
Following properties has been added to the Diagram Node Edge.
- Line type (Solid, Dash, Dash Dot etc.)
- Width
- End Arrow type
 
**#21772 Reintroducing design time preview of Diagram**
 
Design time preview of Diagram is reintroduced with some new features. Note: The preview only applies to the Diagram View marked as "Is Default". To preview other views, you should temporary alter this checkbox.
 
**#21785 Quick filtering of nodes to ease hide/show diagram content**
 
Introduced global list containing all diagram nodes and their visual representation (visible/hidden). The list is grouped by node type and provides textual filtering of object name.
 
**#21787 OnClick event available for text control in Form (Desktop)**
 
Event was already available in Analysis and for Text control in mobile form views.
 
**#21788 Display a symbol in a button control in Forms (Desktop)**
 
Symbol already available for mobile button control. Added support for desktop button control.
 
**#21789 Styling of button control in forms (Desktop)**
 
Introduced new property Style with the following values:
- Default: Standard command button.
- Transparent: Command button with a lightweight appearance.
 
The transparent style does not draw border or background until the user hovers over the button. The style is the same as the style used for buttons in ribbon.
 
**#21793 New language function to compute percentile (percentileCont)**
 
Returns the percentile based on a continuous distribution of the data values. The result is interpolated and might not be equal to any of the specific data values.
 
Available for collection of real or integer values, and as class function in the Statistics class.
 
**#21795 Hide columns which data are grouped by, in Grid and Tree control in Forms**
 
By default columns which data are grouped by are shown. The new property, Show Grouped Columns, allows you to hide such columns by setting the value to FALSE.
 
**#21800 Open referenced objects from a grid control**
 
Introduced the option "Open in Default Form" for grid columns bound to a field pointing to an object class. By default this option is set to TRUE. This option has also been introduced for columns in the table control. In previous versions you had to manually define an effect for each column to open a referenced object in a Form. You can still define an effect, but there is no need to do this as long as you want to use the default Form.
 
Referenced objects are displayed as hyperlinks.
 
**#21802 Introduced Instance View in Grant Matrix**
 
An Instance View has been added on the Grant Matrix node in the Security section in Genus Studio, making it possible to view which security groups and permissions different objects like Agents, Analysis, Reports etc. has been assigned to.
 
**#21815 Concurrency control introduced on schema editing**
 
If a conflict arises, one must restart Genus Studio to gain access, after the other user has released the schema.
 
**#21824 Performance optimization of complex associations in table**
 
Table columns with complex association's Target and Target Type will be read faster from the database.
 
**#21827 Diagram control offers move viewport by mouse**
 
The current viewport (the visible diagram area) can be changed by pressing Ctrl and dragging the mouse around while pressing the mouse button. The viewport will follow the mouse.
 
**#22064 Diagram Control - New layout on grouped nodes**
 
The visual layout of grouped nodes has been redesigned. In the new design, grouped nodes are visually organized into group rectangles without hiding the content (grouped nodes). Previously the grouped nodes was folded and hidden inside the group.
 
**#22162 Provide customization of label spacing on argument- axis (x-axis) in Chart control**
 
The automatically spacing between Calendar Time- axis labels be overridden by specifying a value for "Grid Spacing". E.g. A label displaying the name of the month is created for each 4th month if the "Auto Grid" option is enabled. To display a label for each month, disable the "Auto Grid", and specify "Grid Spacing = 1".
 
**#22163 Predefined Date Time formatting patterns has been harmonized with Microsoft .net Format Strings**
 
This provides a more intuitive way of specifying a custom Date and Time format on Chart axis labels.
 
**#22170 Execute History under History in Genus Studio has been improved**
 
Available for Agent, Web Services etc.
 
**#22199 Introducing a Commit option on the Delete effect in Forms**
 
Use case: Form without auto save (persistence), but where it exists other data sources edited by one way binding (i.e. changes on these shall not result in a save of the main object). Before introduction of this option, the same functionality had to be modeled by defining a task where data are transfered by one way binding. Further, in the task one had to define effects to confirm deletion (Show a Confirmation Message). We recommend you to review your model, to see if the option may remove som modeling.
 
**#22208 The Upload a file effect is now possible to run in an Agent**
 
The effect can be added if the option "Enable Run on App Server" is set.
 
**#22210 Added language functions IsValid, IsModified and IsPersisted**
 
IsValid returns true if the object is valid / consistent. IsModified returns true if the object has been modified since opening. IsPersisted returns true if the object has been saved. The functions are useful for activating/deactivating functionality or show/hide controls in a Form.
 
**#22233 Improved performance for download of picture previews**
 
**#22236 Introduced option Open in Default Form**
 
Available on table cells for complex types, Search Box/Combo Box with value or object binding, cells in grid. This reduced the need for defining events for opening forms. Please review your model to utilize this new option.
 
**#22258 Standardize on the use of the terms "Sign in" og "Sign out"**
 
"Log in" and similar has been replaced by a consistent usage of the "Sign in" and "Sign out" terms.
 
**#22264 Account Profile: Some unused options removed + some minor changes**
 
At the Identity Settings tab in Genus Studio:
- Native section: Removed Missing Account.
- The Active Directory section and the ID-porten section:
- Removed the code "Ask for confirmation..." in the Missing Account drop down.
- Same drop down: Changed the code "Reject" to "Reject Sign In Attempt"
- "Missing Account" changed to "On missing account".
- Common section:
- Changed name of "Default Security Group" to "Add new accounts to security group".
 
**#22266 Genus Studio: "Deploy Directory to All Computers" changed to "Deploy Directory to All"**
 
**#22277 Genus Studio: Viewing Execution History**
 
For Reports, Analysis, Data Extracts, Tasks, Agents and Web Services you can view the Execution History in separate columns. This is now default turned off (due to performance), but may be turned on per concept (Reports, Analysis etc) in the View menu.
 
**#22290 Logging of Search Audit Trail**
 
It is now possible to configure Search Audit Trail on Object Classes. The logging finds place on search, explore and when using accelerators.
 
**#22456 Changes in the Genus Mobile Server installation**
 
The installation technology has been changed from InstallShield to WiX.
 
**#22461 Added ability to define functions and subsets in the Data Extract setup.**
 
**#22466 Improved color tones for black/white prints of graphs and charts**
 
This is for Style = Black & White.
 
**#22467 Genus Desktop/Server protocol to ASP.NET Web API**
 
The Genus Desktop/Server protocol has been migrated from ASP.NET Web Services to ASP.NET Web API for read transactions, in order to improve performance and as part of technology consolidation.

## Bug fixes

**#21796 "Create Data" setup in Open Form effect assigns blank values**
 
If default values for one data source refers to another data source in the "Create Data" setup, values are set to blank.
 
**#21797 Not possible to copy objects back to a group on 3rd level or below**
 
Location: "Create Data" setup in an event handler with effect "Open a Form".
 
**#21798 Object Class properties are named with _mnc1 suffix in the formula editor**
 
_mnc = model name conflict. Occurs when a new property is added to an Object Class. If Studio is restarted, the naming is correct.
 
**#21823 Unneccessary re-evaluation of automatic formatting and flags**
 
Happened in some circumstances after running an action from a table. Bug fixed and performance improved.
 
**#22167 Map: Object distance in clusters with 2-3 objects are too small**
 
Changed positioning of two objects in cluster from horizontal to vertical to avoid labels overlapping.
 
Maps in Genus Mobile have a nonlinear size calculation for clusters resulting in larger object distances in small object count clusters.
 
**#22184 Incorrect name on email attachment**
 
The error occurred if the name was assigned from a second level property reference like "object.reference.file".
 
**#22213 General File Created date and Modified date didn't return correct values**

## Known issues

Known issues are errors or lack of functionality. Known issues may be solved in a future release based on customer demand.

**#22153 Consume a Web Service is called via Genus Server**
 
This will be changed to calling directly from Genus Desktop in a later edition. The effect Consume a REST Service is already executing the call directly from Genus Desktop.

## Tips and hints

Tips and hints are design decisions or answers to support questions that may be of general interest.
 
**#22145 Week control in Forms**
 
This can be modeled by using e.g. a TextEdit and DateEdit control in combination with the function `Week.fromCalendarTime(<a-date>)`.

## Change log

* 2015-09-11 Changed status from Release Candidate to Release (build 15.24.92.00).
* 2015-08-24 Changed status from Beta to Release Candidate.
* 2015-06-15 Changed status from Alpha til Beta.
