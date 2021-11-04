---
title: Release notes for Genus Apps release 2013.2.
description: User-visible changes to Genus Apps from release 2013.1 to 2013.2.
author: jtroset
---
# Release notes for version 2013.2

## Introduction

This document lists all user-visible changes to the Genus App Platform between releases 2013.1 and 2013.2.
 
This release note will be updated prior to the release and may also be updated as long as the release is available, e.g. with information of new patches or known issues. Please take note of the installation / upgrade comments, and the release notes change log.

## Installation and upgrading

Prior to upgrading to 2013.2, you must:
* Upgrade to 2013.1. See the Release notes for 2013.1 for more information.
* Run the Genus Upgrade Assistant for 2013.2. The Upgrade Assistant is available from the Actions menu inside Genus Studio in the latest patch of release 2013.1 (version 15.5.14.23 or later). The Upgrade Assistant corrects transient errors in the storage of composition object classes in Genus Directory. Customers or partners participating in the Beta program, do not have to run the Upgrade Assistant, since the correction has been run automatically in all 2013.2 Beta versions.

See our help documentation for general information about installing and upgrading the Genus App Platform.
 
## Patches

A patch is an update of a release. Each release have a build number in addition to the release number. The build number is identified by four sequences of numbers, like 15.4.22.30. A patch has an unchanged release number, but an increase in the build number.
 
### Patch 15.7.2.32 (2014-02-19)
 
**#21415 DELETE key operational in Table even if the defined event handler is disabled**
 
The delete command is disabled in menus, but it is still possible to delete an object by pressing the DELETE key.
 
**#21459 Entering "@"-key changes to another entry in the navigation pane.**

**#21354 The dropdown in a DateTime field was showing 0001 as initial date**
 
In some cases when the value of a DateTime field was not set, the initial date in the dropdown was set to the year 0001. This is now fixed and if no date was selected initially, the calendar dropdown start with today's date.
 
### Patch 15.7.2.30 (2014-01-23)

**#21361 Automatic restart of crashed Agents has been improved**
 
If for some reason a running agent crashes due to an unknown database failure, the running agent didn't start automatically again. To get the agent running again, one had to delete a row in the directory database table g_agent_execution_request and disable->enable the agent. Unknown database failures are now handled. Further strengthening of automatic restart is expected in release 2014.2.
 
**#21357 Sorting of Duration did not take negative durations into consideration**
 
**#21346 Sorting of Grid control 1:N fields**
 
It is now possible to sort on such fields, and the objects within a 1:N field is also displayed sorted.
 
**#21339 Exception on Find on this Page (Refine) in Forms**
 
An exception was raised when using Find on this Page, if the first letter written matched the first letter in a row in a Table included in the Form.
 
**#21362 Error with Paste special of more than one file at a time in Windows 8.1**
 
**#21347 Empty required Checkbox controls didn't indicate missing invalid value**
 
A red frame is now bordering the text for Checkbox controls in such cases.
 
**#21343 Corrected faulty encoding behaviour in Export Data**
 
Nordic characters were not displayed correctly.
 
**#21389 NumberEdit control: Empty value interpreted as error**
 
Empty value is now correctly interpreted as a NULL value, without resulting in an invalid field.
 
**#21355 Table inline editing and Convert to uppercase/lowercase**
 
The property setting Convert to uppercase/lowercase was not honored in the Table control.
 
**#21393 Form: Exit on Cancel not regarded**
 
This would cause problems in e.g. dialogs with OK/Cancel buttons, where clicking Cancel would not exit further processing (but would e.g. move to the next step in a task).
 
### Patch 15.7.2.25 (2013-12-11)
 
**#21344 Conditions: Is any of unintentionally changed to Is none of and vice versa**
 
This error is corrected, and occurred only if your application model had used versions between 15.6.10.1 and 15.7.2.25, plus contained conditions with a repeating data type on the left side using Is any of or Is none of, and if you have opened and saved such conditions. All Application Model owners for all customers were immediately warned in an email when the error was discovered and corrected.
 
An example of a condition with a repeating data type on the left side is Project.Activity.State is any of Not Started or In Progress, where Project.Activity has a 1:n relationsship.
 
In comparison, the following condition does not have a repeating data type on the left side, and the error does not apply: Activity.State is any of Not Started or In Progress.
 
The error resulted in saving Is none of as Is any of and vica versa when opening and saving conditions for Table, Forms, Tasks, Agents etc. All customers using version 2013.2 had to upgrade to patch 15.7.2.25 or later and manually walk through the application model to check if conditions had changed.
 
We apologize for this.

## End-of-life functionality

End-of-life functionality is functionality that was available in the previous release, but is no longer available in this release.

**#20079 .NET Framework 4.5 is now required. End of support for Windows XP and Windows Server 2003 Terminal Server.**

The Genus Desktop client will require .NET Framework 4.5, thus removing support for Windows XP and Windows Server 2003 Terminal Server.
 
**#19760 Only object classes with primary key are allowed as Data sources in Forms and Tables**

## Deprecated functionality

Deprecated functionality is available in this release, but will (most probably) no longer be available in the next release.
 
**#20275 Removing the Single/Multiple Object Page concept**

The Single/Multiple Object Page concept (SOP/MOP) will not be removed in release 2013.2, but will be removed in the release following 2013.2 (with 100% certainty).

**#19260 Data type Image in SQL Server 2012 is deprecated**

This issue is not directly related to the Genus App Platform release, but of general interest to our customers and partners using Microsoft SQL Server. Please note that Microsoft has marked the BLOB data type Image as deprecated in SQL Server 2012. We recommend starting converting from Image to Varbinary(max) as soon as possible. See here for more information from Microsoft on converting binary data.

## Breaking changes

This section lists important changes introduced in this release. You will need to use this list in order to understand the changes you might need to make to your application to support the new release.
 
**#19626 / 16732 Single Object Page Rich Text/HTML Edit vs. Forms Rich Text/HTML Edit: Changes in storage formats**

The Single Object Page Rich Text/HTML Edit stores data in XHTML format. The new Forms Rich Text/HTML Edit reads XHTML, but stores data in HTML format. The transition is therefore transparent for all usage of such text data within your Genus based applications (same release required, though).
 
All external usage of text data needs to be analyzed, such as usage through web services or any direct database imports/exports.
 
The Single Object Page Rich Text/HTML Edit does not read the new format.
 
**#19935 Comparison of dates is made resolution-aware**

E.g. comparing the date 2013 to 2013-10-01 evaluates to less than instead of equal to.
 
**#20151 The effect Set a Field's Value does not longer implicitly assign NULL**

Earlier, if all conditions evaluated to false, the value NULL was assigned. This behaviour is changed, so that no assignment is done in such cases. If you want to assign NULL, you must explicitly do this (e.g. by using None - the condition always applies).
 
**#18618 A large number of repeated web services calls resulted in Out of memory on Genus Server**

This error is corrected and described in more detail in the Bug Fixes section of the release notes. Note the following changes:
* The process hosting Genus Server Core Service has changed name from dllhost.exe to dllhst3g.exe.
* Maximum Pool Size for Object Pooling is changed from 8 to 5.
* Application Pooling Pool Size is increased from 1 to 2.
* Your Constructor String is overwritten with new values. PreloadOnDemand and PreloadOnStartup will be set to False. If your application has used the preloading functionality, you must manually turn it on after upgrading.

## Major new functionality

**#20276 Introducing the first version of Genus Desktop Forms to replace the Single Object Page concept.**

The highlights of Forms are:
* Custom layout and organization of elements (controls) within a Form, giving a new world of design flexibility compared to the old Single Object Pages.
* New Diagram Control for displaying graphical networks of connected data.
* New Timeline Control for visualizing chronological and sequential data.
* New controls for Analysis, Reporting and Visualization like Chart and Treemap, as part of Forms (not replacing existing controls in Analyzer).
* Several new or updated common controls: Group, Group Box, Repeating Section, E-Mail Address Edit, Rich Text/Html Edit, Label, Number Edit, Password Edit, Text Edit, Text Popup Edit, URL Edit, Date/Time Edit, Combo Box, List Box, Search Box, Button, Check Box, Radio Button, Track Bar, Grid, Tree, File Browser Edit, File Name Edit, File Preview, File Size Edit, Folder Browser Edit and Image.
* Changing Color scheme similar to Microsoft Office (e.g. see File / Options / General in Microsoft Outlook 2010/2013).
* Support for multiple and related data sources within the same form. Dependencies between data sources and controls are expressed by defining logic elements such as rules, data filters, and formulas.
* Improved dynamic content: Conditional formatting and protection of controls.
* Association of custom actions with controls.

For more information, see our online help documentation and Forms articles.
 
Some of our news articles describe specific Forms-related topics:
* [New TreeMap Data Visualization Control](http://www.genus.biz/?PageClass=GenusWeb.WebApp.NewsArticleArchivePage&PageCommand=Open&PageKey=366f6159-aaa9-4517-81cc-6061ee65bfa1&PageParam.ObjectID=9fde699e-8ea5-4899-b857-cd6a93db218a)
* [Latest Features Introduced in Forms](http://www.genus.biz/?PageClass=GenusWeb.WebApp.NewsArticleArchivePage&PageCommand=Open&PageKey=366f6159-aaa9-4517-81cc-6061ee65bfa1&PageParam.ObjectID=38ba0d9a-e777-4f34-a233-e2389c43e821)
* [Scroll the Content inside a Group or Group Box](http://www.genus.biz/?PageClass=GenusWeb.WebApp.NewsArticleArchivePage&PageCommand=Open&PageKey=366f6159-aaa9-4517-81cc-6061ee65bfa1&PageParam.ObjectID=c36d5ad8-2be3-463e-abb9-8de29d075ee9)
* [Designing Conditional Visible Groups in a Form](http://www.genus.biz/?PageClass=GenusWeb.WebApp.NewsArticleArchivePage&PageCommand=Open&PageKey=366f6159-aaa9-4517-81cc-6061ee65bfa1&PageParam.ObjectID=81b10ff8-5008-4793-a3c3-5c7d51242bdd)
* [Styling a Group Box as an Expandable Label](http://www.genus.biz/?PageClass=GenusWeb.WebApp.NewsArticleArchivePage&PageCommand=Open&PageKey=366f6159-aaa9-4517-81cc-6061ee65bfa1&PageParam.ObjectID=d5af6023-e9fe-41bf-950a-82c9d20b931f)
 
**#19670 New and improved Condition Editor with support for parenthesis**

The ability to support parenthesis simplifies the definition of complex conditions, but also have a great impact when considering performance for database queries. So you should consider redefining complex conditions which are executed frequently, such as conditions applied for Object Classes with conditional security.
 
Features:
* Improved readability
* Text (document) layout
* Color highlighting and font styling to emphasize different elements
* Group expressions within parentheses
* Explicit iterator variables. Iterator variables are generated for expressions such as an exist expression
* Easy access to reorganize the condition by moving expressions and groups
* One set of buttons for adding and deleting groups and expressions

Read [this](http://www.genus.biz/?PageClass=GenusWeb.WebApp.NewsArticleArchivePage&PageCommand=Open&PageKey=366f6159-aaa9-4517-81cc-6061ee65bfa1&PageParam.ObjectID=ec16d093-867b-47f7-bbe6-60a19177a30f) news article to learn more.
 
**#13337 The effect Import Data from File has been renamed to Import Data and is not limited to a local files anymore**

The effect now supports import by specyfing an Url via HTTP GET, making it possible to retrieve data from RESTful web services. Both JSON and XML are supported. See this news article for more information.

## Minor new functionality

**#7738 Support for enumerating data source groups has been introduced.**
 
**#18934 Support for Complex Association as Search Field has been added.**

It is now possible to mark a search property of data interpretation Complex Association as a Search Field (Genus Studio | <an Object Class> | Search | section Search Properties).
 
**#19006 Added Enable Raw Create and Disable Live Update on Scope**

Enable Raw Create removes the created object from the memory cache after usage. Disable Live Update turns off updating of displayed objects and similar on the Genus Desktop client, to increase performance. The features have been added to make it possible to e.g. export huge amounts of data from Genus Desktop without filling up memory and with improved performance.

**#19308 The Copy menu in Grid has been divided in Copy > Selected Rows | Selected Cell**

**#19521 Override Deadlock Avoidance has been added on Scope to control transaction step order**

Genus will most probably run the transactions alphabetically based on the object class name to decrease the possibility for deadlocks. Selecting Override Deadlock Avoidance will run the transactions in the action sequence order set up by you.

**#18910 Support for upload/download of large files for HTTP clients**

Genus now supports resource efficient upload and download of large files (tens to hundreds of megabytes) for HTTP clients, using standard HTTP POST (multipart/form-data) and HTTP GET mechanisms.

**#20027 The memory evaluation performance of conditions has been improved**

**#19214 Possible to turn off XML schema validation**

Introduced option Validate XML Data in the Settings tab of the Import Data effect. Validation is turned on as default.

**#19162 Outbound Reference Constraint for Object Class Properties with Data Interpretation = Complex Association**

Specifying Outbound Reference Constraint (including option for Cascade Delete) for Complex Associations is now possible.

**#20221 Added new constructor and new properties to the Url type**

New constructor: Url.new(scheme, host [, port] [, path] [, query] [, fragment]). Creates a new instance of the Url class with the specified scheme, host, port number, path, query string, and fragment identifier. Return Type: Url
 
New properties: Url.Scheme, Url.Host, Url.Port, Url.Path, Url.Query, Url.Fragment.
 
Please refer to our online help documentation for more details.
 
**#20213 Added Expand All to Grid with Detailed View**

Expand All has been added. Please use Expand All with caution, as it may be performance and memory demanding.

**#19550 New exception Catch Data Validation has been added**

The exception is thrown e.g. when creating an object and a required property is left blank.

**#19549 New exception On Cardinality Violation has been added**

The exception is thrown e.g. when a data filter returns more than one object when only one object is allowed.

**#19095 New exception On File Read Error has been added**

The exception is thrown e.g. when an Import Data effect fails.

**#19415 Specyfing time format for seconds is now allowed for the type Duration**

**#19073 Changed behaviour for running a Generic Search with no defined search fields**

A warning is now displayed. Earlier behaviour was to return no results and no warnings.

**#19590 Support for JSON File has been added to the Data Export effect**
 
**#19812 Added support for turning off Link Audit Trail for Complex Association properties**

**#19743 A new function String.Join has been added to the Genus language**

String.join(separator, values, includeNullOrEmpty). Concatenates all the elements of a string collection, using the specified separator between each element. Return Type: String. The parameter includeNullOrEmpty makes it possible to include even collection elements that are null or the empty string.
 
Please refer to our online help documentation for more details.

**#18977 Support has been added for changing name on Code Domain values used with Complex Association**

Earlier the Object Class name was used, which turned out to not be sufficient in all circumstances. Assign a blank value to use the name of the Object Class.

**#19587 The amount of information stored in the audit trail for a deleted object is reduced.**

Only identifier and name are now stored.

**#19302 Support for browse paths to complex associations has been added**

**#18683 The if-then-else construct introduced to support writing conditional expressions in the Genus App Platform Language.**

See [this](http://www.genus.biz/?PageClass=GenusWeb.WebApp.NewsArticleArchivePage&PageCommand=Open&PageKey=366f6159-aaa9-4517-81cc-6061ee65bfa1&PageParam.ObjectID=e3fe0aaa-0ba5-4c9d-8bc9-89087619c5a6) news article for more information.

**#18753 Options introduced for Scope in Actions to improve performance during bulk updates (Disable Audit Trail, Disable Live Update, Silent Create Objects)**

## Bug fixes

**#19268 The Grid control now supports Copy**

The Copy command available from the Grid's right click menu now saves object identifiers to the clipboard.

**#19779 Delete Objects effect: Not possible to delete objects without integrity check even if all outbound reference constraints pointing to the data source are disabled**

The effect did not consider outbound reference constraints when evaluating if objects could be deleted without integrity check. If a constraint is disabled, the reference is now ignored.

**#19333 Open in default program from a Grid crashed the second time if not closing Excel**

**#19838 Deletion of objects with complex association references failed in some circumstances**

Deletion failed if more than one object was deleted and the objects referred to alternate object classes (i.e. not the same object type for all objects to be deleted) through the complex association.

**#19098 Uniqueness check didn't behave correctly in all circumstances**

A uniqueness constraint with impact "Notify user and ask for confirmation to proceed" didn't show a user message and didn't commit changes from a Create objects effect being part of a task ("sub task") called from an other task.

**#19000 Export to CSV didn't work when accessing properties several levels of reference outside the "main" object class**

The references were multiple n:1 references to a group defined through a search path (class connection).

**#20164 The operators "Has value" and "Has no value" for compositions (1:N) have been reintroduced**

These operators are again available for multi select properties in the search pane, in addition to the "Any of" operator.

**#19152 Properties outside security access accessible through Advanced search**

Such properties were not visible in Forms, Tables etc, but were accessible for search (but not display of content) through Advanced search.

**#18618 A large number of repeated web services calls resulted in Out of memory on Genus Server**

The Out of memory situation was a consequence of how the memory manager allocated and kept allocated memory. After a large number of repeated web service calls, the memory usage stabilized.
 
Several changes have been introduced to prevent such errors in the future:
* Maximum available memory for Genus Server Core Service has been expanded from 2 GB to 4 GB on 64-bit operating systems. To make this change possible, the process hosting Genus Server Core Service has changed name from dllhost.exe to dllhst3g.exe.
* The number of parallell calls allowed per Core Service process is reduced from 7 to 4, i.e. Maximum Pool Size for Object Pooling is changed from 8 to 5.
* The Constructor String parameter PoolSize is reduced from 8 to 4 (in line with the change above).
* Number of Core Service processes is increased from 1 to 2, i.e. Application Pooling Pool Size is increased from 1 to 2.
 
Note! Upgrading to this release overwrites your Constructor String with the new value. PreloadOnDemand and PreloadOnStartup will be set to False. If your application has used the preloading functionality, you must manually turn it on after upgrading.

## Known issues

Known issues are errors or lack of functionality. Known issues may be solved in a future release based on customer demand.

**#19188 Interpretation of XML elements of type String with maxOccurs=unbounded**

If the XML contains more than one value, only the last value will be returned.

**#16726 The Single Object Page Html editor adds extra line shifts when marking text as bold in some circumstances**

Adding two lines, then marking one of the lines using the mouse and then clicking bold in the editor menu, results in an extra line shift being inserted. The Single Object Page is deprecated, and the error will not be corrected. The Html editor is replaced by a new editor as part of Forms. The new editor does not have this error.

**#20235 Genus Directory on Oracle does not handle storage of too long strings in Cyrillic in some circumstances**

E.g. storage of strings to the audit trail with a length longer than 1/2 of the string length defined in the database. A workaround is to redefine selected Genus Directory database table strings from varchar2(nn) to varchar2(nn char).

## Tips and hints

Tips and hints are design decisions or answers to support questions that may be of general interest.
 
**#19968 It is not allowed to use OR in mandatory filters**

Data filters on data sources for tables (including tables in forms) and views do not allow the use of OR, since each data filter must add conditions to the data filters in the same context. Addition of data filters using AND satisfies performance and technical requirements. Addition of data filters using OR would be performance vulnerable and generally hard to support as part of Genus App Platform.

**#19764 Inheritance of instance security through a part of composition based on complex association is not supported**

Searching for objects part of such a composition, will display the objects, even if the instance security of the composition object states otherwise. There are technical reasons for this limitation (related to performance, due to the need of multiple SQL joins towards all possible composition object classes). However, such security requirements may be solved by conditional security.

**#20066 In Analysis, Alternate Background Color (Format | Sheet) is applied before Hide Empty Rows (Format | Sheet)**

This is by design, to be able to assign the same background color to repeating groups of facts.
 
**#20022 In Genus Studio, the Gantt Task Depedency is visible as a Code Domain among Object Classes**

This is by design. Gantt Task Dependency is a built-in code to be used by object classes modeling dependencies between tasks in a Form's Gantt control.

## Change log

* 2014-02-21 Added notes to Patches (15.7.2.32)
* 2014-01-23 Added notes to Patches (15.7.2.30).
* 2013-12-11 Added notes to Patches (15.7.2.25).
* 2013-10-29 Final build branch/version is 15.7.2.x
* 2013-10-10 Added missing notes to Minor New Functionality (#18683,#18753). Added reference to Forms-related news articles in Major New Functionality.
* 2013-10-09 Changed status to Release. Build version 15.7.1.12.
* 2013-10-02 Changed status from Beta to Release Candidate. Added notes to Breaking Changes.
* 2013-09-02 Changed status from Alpha to Beta.
* 2013-03-04 Changed status from Draft to Alpha.
* 2013-02-11 Created.
