---
title: Release notes for Genus Apps release 2013.1.
description: User-visible changes to Genus Apps from release 2012.1 to 2013.1.
author: jtroset
---
# Release notes for version 2013.1

## Introduction

This document lists all user-visible changes to the Genus App Platform between releases 2012.1 and 2013.1.
 
This release note will be updated prior to the release and may also be updated as long as the release is available, e.g. with information of new patches or known issues. Please take note of the installation / upgrade comments, and the release notes change log.

## Installation and upgrading

Prior to upgrading to 2013.1, you must run the Genus Upgrade Assistant. The Upgrade Assistent warns you about things you must or should remodel as part of the coming upgrade. The Upgrade Assistant is available from the Actions menu inside Genus Studio in the latest patch of release 2012.1 (build number 15.4.14.38 or later).
 
Installations older than 2012.1 MUST first be upgraded to 2012.1 before running the Upgrade Assistant.
 
See our help documentation for general information about installing and upgrading the Genus App Platform.
 
**#18349 Version 2013.1 requires .NET Framework 4.5 on your application servers running Genus Server.**
 
**#18063 Support for Windows 8, Windows Server 2012, Microsoft SQL Server 2012**

Support for these operating systems and database versions have been added. Note however that support for Windows Server 2012 towards Oracle is pending Oracle's release of their Windows 2012 data provider (date unknown).

**#18674 SQL Server 2008 R2, SQL Server 2012, Oracle 11g, Oracle 11g R2**

It is now possible to explicitly declare the use of these database system versions in Genus Server Configuration. Support for SQL Server 2000 and 2005 have been removed.

**#17898 Database Access Software Requirements on GENUS Server**

The use of MySQL, Oracle and Sybase require specific versions of database access software.
 
Prior to upgrading, please read the README files accessible for our partners at versioning.genus.net (login required).
 
Irrespective of database vendor, there is no need to install any OLEDB Providers anymore.
 
* MySQL: The following MySql database component must be installed:

  * Connector/Net version 6.4.4.


* Oracle: The required Oracle Data Access Components version is ODAC 11.2 Release 5 (11.2.0.3.20).

  The following components must be installed for 64-bit versions of Windows Server:
  * Oracle Data Provider for .NET 4.0, version 11.2.0.3.20 (x64) Oracle.DataAccess.dll version 4.112.3.0
  * Oracle Data Provider for .NET 4.0, version 11.2.0.3.20 (x86) Oracle.DataAccess.dll version 4.112.3.0


  The following component must be installed for 32-bit versions of Windows Server:
  * Oracle Data Provider for .NET 4.0, version 11.2.0.3.20 (x86) Oracle.DataAccess.dll version 4.112.3.0


* Sybase: The following Sybase database client component must be installed:
  * Adaptive Server ADO.NET Data Provider for .NET Framework 4.0 - Sybase.AdoNet4.AseClient.dll, assembly version 4.157.401.0, file version 4.157.504.0 (Adaptive Server Enterprise 15.7 ESD#4)

**#18895 Installation of Genus Desktop on Windows XP and Vista as user without administrative privileges**

The installation of Genus Desktop requires administrative privileges on both Windows XP and Vista. For Windows 7 or later the end user may select between installing for all users (requires administrative privileges) or for the current user (doesn't require administrative privileges).

**#18911 Agent schedules without Data Set**

The Data Set Binding of an agent is either None or one specific Data Set (Genus Studio | Logic | Agents | an agent | Properties dialog). If the Data Set Binding is None, the agent will be run for all data sets (per design). We recommend you to review your agents Data Set Binding when upgrading, especially if you are introducing new data sets as part of the upgrade.
 
However, note that an agent schedule (Genus Studio | Logic | Agents | Execution Monitor) always is connected to a Data Set. We have reports of agent schedules which are not connected, i.e. a value of None, which is an error from a previous upgrade. Please review your agent schedules. Delete and recreate schedules with a Data Set of None (as observed in the Execution Monitor).
 
**#19012 Changed Genus Server installation folder - remember to change Scheduled Task for RecycleCoreService.vbs**

As part of the name change to Genus Server from Genus Logix Services (previous release 2012.1), the installation folder was changed. If your environment is set up with a Windows Scheduled Task running RecycleCoreService.vbs, please remember to change the Schedule Task to refer to the correct path (typically C:\Program Files (x86)\Genus\Server). See help article Tuning Web Service Performance, section Scheduled recycling of the Genus Core Service for more information.

## Patches

A patch is an update of a release. Each release have a build number in addition to the release number. The build number is identified by four sequences of numbers, like 15.4.22.30. A patch has an unchanged release number, but an increase in the build number.
 
### 15.5.14.8 (2013-04-09)

**#19181 Bug in conversion script resulting in some actions running only the first or last iteration**
 
Case: Actions within an enumerator which is executed conditionally with one of the options "On First Iteration" or "On Last Iteration", and one of the after run options "Exit", "Enumerate Next" or "End Enumerate".
 
Bug: There was a bug in the conversion script from release 2012.1 to 2013.1 (script 015.004.019.022), resulting in that most often only the first (or last) iteration is run, if the enumerator was executed conditionally. More generally, in such cases, the bug caused a redirect of execution for the first enumeration which satisfies the custom condition.
 
Example of erroneous conversion:
* Decision with custom condition
  * Auto generated decision for first or last iteration
    * Action 1
    * Action 2
    * ...
    * Action n

* Redirect execution

Example of correct conversion:
* Decision with custom condition
  * Auto generated decision for first or last iteration
    * Action 1
    * Action 2
    * ...
    * Action n
    * Redirect execution

The bug is corrected in release script 2013.1 / 015.004.019.022 (available for download by our partners).
 
Customers that already have upgraded beyond this point, must manually review their tasks and correct the error by moving (drag and drop) the Redirect exection step.

## End-of-life functionality

End-of-life functionality is functionality that was available in the previous release, but is no longer available in this release.

**#18674 SQL Server 2000 and SQL Server 2005**

Support for these versions of Microsoft SQL Server has been removed.

## Deprecated functionality

Deprecated functionality is available in this release, but will (most probably) no longer be available in the next release.
 
No functionality is currently identified as deprecated.

## Breaking changes

This section lists important changes introduced in this release. You will need to use this list in order to understand the changes you might need to make to your application to support the new release.

**#17947 Action Orchestration**

The new block- and control constructs introduced in this release extends and replaces existing functionality. The constructs provides a powerful toolbox to express business logic. The visualization of the execution flow is improved and replaced with a hierarchical view displaying all defined constructs.
 
Block constructs:
* Decision: Enables you to conditionally branch in your orchestration. Replaces the action construct in previous releases.
* Scope: Provides a logical group of constructs with the ability to commit objects changes made by effects inside the scope. That is, the persistent point is moved from the effect level to the scope level. E.g. to commit object changes made by a Modify Objects effect, you have to surround the effect with a scope.
* Enumerator: Enables your orchestration to enumerate objects in a data source, and replaces the data source option Run Actions Repeatedly for One Object at a Time. Initiating Actions are removed and replaced by constructs defined outside enumerators. Enumerators can be nested, i.e. you can define an enumerator within another enumerator.
* Catch Exception: Enables you to handle a thrown exception.
 
Control constructs:
* Redirect Execution: Enables you to define an execution jump, such as End Execution, Abort Execution, End Scope, Abort Scope, End Enumerate, and Enumerate Next.
* Throw Exception: Enables you to throw a custom exception which can be handled in a catch exception block.
 
Action Orchestration upgrade considerations:

The new action orchestration requires that actions contained in Tasks, Agents, Web Services, Rules and Security Rules are upgraded.
 
Most actions will be upgraded automatically, but some require manual conversion.
 
Automatic Conversion of Existing Actions:
* Initiating Actions. Expanded as separate scopes in the main sequence. The scopes are expanded before the first enumerator.
* Enumerating data sources. Data sources where the option Run Actions Repeatedly for One Object at a Time is replaced by enumerators. If this option is selected for more than one data source, the enumerators are nested.
* Actions. Actions which are executed conditionally are converted to a decision blocks. Actions which are executed unconditionally are converted to scopes (without commit).
* Effects. The persistent point is moved from the effect level to the scope level. Effects which previously committed object changes are surrounded with a scope where the commit option is activated. Settings, such as transaction time out, are copied from the effect to the scope. If an effect is contained within an action with no condition, and the action does not contain more than one effect, the commit options are copied to the action level, and the action is converted to a scope (to avoid unnecessary levels). If the data source which the effect operates is non-persistent, the effect is not surrounded with a scope. The following effects have the ability to commit object changes:

  * Create Objects
  * Modify Objects
  * Delete Objects
  * Create a Data Aggregate

* Run Option on Action. The options On First Iteration and On Last Iteration are replaced by the following conditions which are assigned to a decision block: ActionOrchestrator.CurrentEnumeration = 1, and ActionOrchestrator.CurrentEnumeration = ActionOrchestrator.TotalEnumerations. Other run options are converted to Redirect Excution control constructs.
 
To perform the automatic update, a Genus Update must be installed and executed as part of the 015.004.019.022 versioning script (accessible for all partners). Custom Data Sources will also be converted to object classes without a data provider. See #17946 for more information. Please refer to the versioning script for more details on how to run the update.
 
Manual Conversion of Existing Actions:

When you are upgrading actions, constructions which not can be converted automatically is logged to a file with instructions of what to do to fix the problem.
 
The following constructions have to be altered manually:
* Transaction Options. The transaction options Save Objects in Separate Transactions, and Stop if an Object could not be Saved are no longer available. To obtain the same functionality, surround the effect with an enumerator, and optionally add a Catch Exception block with a Redirect Execution control. Set the Execution Jump for the Redirect Execution control to Enumerate Next.
* Enumeration and Data Filter Dependencies. Data filters which refer to data sources with the option Run Actions Repeatedly for One Object at a Time are no longer valid and deleted. In previous versions, objects were automatically reloaded for each iteration.
  * In the following example, actions are repeated for all active companies. For each iteration, contacts are reloaded based on the current company:
    * Company: Company.State = Active
    * Contact: Contact.Company = Company
    * The data filter for the Contact data source will be deleted. To obtain the same functionality, add a Read Objects effect for Contact inside the Enumerator which enumerates companies.
  * You may also have the same dependency between an analysis data source and an object based data source. In previous versions the analysis was refreshed for each iteration. To obtain the same functionality, add a Run an Analysis effect inside an Enumerator.
* Run Options. If you are enumerating for more than one data source, the options Run on First Iteration, and Run on Last Iteration are ignored. To obtain the same functionality, move the effects outside all nested enumerators.
 
**#17946 Definition of unbound (non-persistent) Object Classes and Properties**

The concept Custom Data Source is replaced by object classes without a data provider. It is also possible to add unbound properties to a bound object class.
 
Upgrade considerations: The conversion of custom data sources are done as part of the Action Orchestration upgrade, see #17947 for more information.
 
This breaking change will be updated with more information later.
 
**#17342 Deleting objects in a Table**

The introduction of Forms requires a stricter interpretation of data binding for data sources. In release 2012.1 users were allowed to delete objects in a Table contained in a data source with one way binding. In addition, the delete operation was executed automatically even if the Auto Save option not was enabled for the Table. The main reason for configuring the Table with these settings was to write protect the table, but still enable users to delete objects (mimic old MOP behavior).
 
The behavior in the new release is as follows:
* If the data binding for the data source is one way, deleting an object is not persisted in the data base.
* The object is removed visually from the Table.
* Users will not be asked to save changes when the Table is closed.
 
If you want to write protect the table and still offer the possibility to delete objects, do as follows:
* General Settings: Enable the Auto Save option
* Data Source: Set the Data Binding equal to Two Way
* Layout: Set Protection – Read Only for the row to Always.
 
**#17219 Changed Behavior of Naming in Plot Charts**

Due to a reported issue of cluttered plot charts caused by always displaying the name of the points, the functionality in the chart component has been changed to address this issue. We advise that you check the impact on plot charts in your application where naming is desired. To learn more, see news article Changed Behavior of Naming in Plot Charts.
 
**#18107 / #18125 Shortcuts to Genus Studio**

Any of your old shortcuts for opening Genus Studio are not valid in 2013.1.

You have two alternatives for upgrading your old shortcuts:
1. Recommended: Open Genus Desktop 2013.1, in the Tools menu, click Options | Data Sets. In the Options dialog box, click the Data Sets tab. Select your data set, click Modify. In the Data Set dialog box, click Create shortcuts. In the Create Shortcuts dialog box, in the Location section, select e.g. Windows Desktop and click OK. If you want your shortcut placed anywhere else than your Windows Desktop or Windows Start Menu, locate your newly created shortcut and copy it to your location. As opposed to alternative 2 below, this URL will have encrypted parameters and be on a format similar to genusstudiolink:https://yourserver /yourdataset/?LinkData=zfpMT3GqMFbc66sMCvc8cTXoWNpR.
2. Manually change your shortcut genuslink:http://yourserver/yourdataset/?LinkType=OpenDirectory to genusstudiolink:http://yourserver/yourdataset/?LinkType=OpenStudio. If you change only to genusstudiolink, but forget changing OpenDirectory to OpenStudio, Genus Desktop will open instead of Genus Studio. If you forget this during the upgrade to 2013.1, you will in effect be trying to open Genus Desktop while still upgrading and will get the error message "Genus is currently being updated. Please try again later when the new version is available".
 
Note! Old shortcuts to Genus Studio created during an earlier installation and placed in your Windows Start Menu or Windows Desktop, automatically will change genuslink to genusstudiolink, but not change LinkType=OpenDirectory to LinkType=OpenStudio. For your shortcuts to 2013.1, you have to do this manually by one of the two alternatives above.
 
This is a breaking change, and please note:
* Genus Studio shortcuts created using the Tools | Options | Data Sets menu (within Genus Desktop) by Genus 2013.1 will not work for opening pre-2013.1 Genus Directory
* Similarly, old Genus Directory shortcuts created by Genus versions earlier than 2013.1 will not work with Genus Studio 2013.1.
 
**#18559 Data Filter on Custom Data Sources has been moved to the Open a Form effect**

Run the Upgrade Assistant to identify which data filters this applies to. After upgrading to 2013.1, locate the tasks in Genus Studio, open and save each one. This will move the data filters to the Open a Form effect inside each task.
 
**#17551 A bug fix in Genus Credential Store validation may result in login problems for existing Genus Desktop users**

Users must now have an Account Profile with Credential Store equal to the Default Credential Store in Genus Server Configuration to be able to log in. An Account Profile with an Credential Store = "Genus Directory" will be rejected on a Genus Server Configuration with a Default Credential Store = "Active Directory" and vice versa. System administrators need to make sure that no such inconsistencies exist in their application model.
 
**#18911 Agent Max Queue Time and Max Running Time are now required fields**

The fields are located in the Schedule dialog in the Execution Monitor in Genus Studio (Logic | Agents | Execution Monitor). We recommend going through your existing schedules and assign values to these fields. You will not be able to change existing agent schedules without assigning values to these fields.
 
**#19072 / #17642 / #17862 Changed security settings for Multi Object Fields (MOF)**

This applies to MOF fields in Single Object Pages (SOP). A MOF field requires a many-to-many relation between the "driving" object class (the SOP's object class) and the selectable object class (OC). The many-to-many relation must be expressed using a separate table, i.e. the model is DrivingOC - RelationOC - SelectableOC, where RelationOC refers to the DrivingOC's and SelectableOC's primary keys (PK) with the properties RelationOC.PKDrivingOC and RelationOC.PKSelectableOC.
 
Prior to 2013.1 the MOF field was set Read Only if the OC property RelationOC.PKDrivingOC had Read or Read and Modify on Create permissions. The latter made it possible to edit the MOF field when the SOP was in new mode.
 
From 2013.1 the MOF field uses the security settings of RelationOC, i.e. the security settings in use are moved from the OC property level to the OC level. The MOF field both creates and deletes objects in the RelationOC, requiring both Create and Delete access for the RelationOC.

## Major new functionality

**#16129 New effect for accessing account data from actions**

The need for accessing account data from actions was identified during development of a thin web client solution based on MVC .NET. To support role-based authorization in MVC .NET, we had to provide a way to authenticate an account and return some information about the account by defining a Web Service Operation. To solve this, a new built-in data source representing an account is now available in action-based concepts. To learn more, see the news article Accessing Account Data from Actions.
 
**#16401 New effect for sorting objects**

The new effect Sort Objects provides functionality for reordering objects within a data source, either by defining a sort order for one or more fields, or prompt users to sort objects. To learn more, see the news article New Effect - Sort Objects.
 
**#18758 Redesign of the Genus Studio Navigation pane**

To learn more, see the news article Genus Studio Navigation Pane Redesigned.
 
**#17705 Explore an analysis from an analysis**

It is now possible to open an analysis from inside an analysis, with data from the first analysis as filter to the second analysis.
 
**#14089 Introduced support for running multiple agents in parallel on the same Genus Server**

The maximum number of agents running in parallel is set in Genus Server Configuration | Tools | Options | Agent Service Threads. The default number of parallel threads (agents) is 1.

Increasing this number will increase the agent execution throughput, but may also consume CPU and memory by the same factor. Setting this number too high, may actually end up hurting your performance, because your server(s) may get overloaded, and also affect Genus Desktop Services, Genus App Services or other services.

Since your ideal number of Agent Service Threads is highly dependent on your application model and your server configuration, we cannot give any specific recommendations. We recommend you to test the performance in your test environment before applying any changes to your production environment.

The introduction of this functionality solves a problem with slow running agents delaying other agents.

**#17510 Introduced support for web service POX/JSON endpoints**

By specifying Envelope Version as None (in addition to the existing SOAP 1.1 and SOAP 1.2 alternatives) on a web service endpoint, it is now possible to communicate with a Genus web service without the use of SOAP.

The standard format is still XML, but without a SOAP "envelope", also called POX (Plain Old XML).
 
If the client (web service consumer) specifies a HTTP-header "Content-Type" and "Accept" and give these the values "application/json" (even better: "application/json; charset=utf-8") you will be able to use JSON instead of XML.
 
**#17342 Forms (Alpha)**

Forms will only will be released in an Alpha version as part of this release, since a feature complete version is considered unreachable during this release. Consequently, we are not able to test and ensure the necessary quality for a full release of Forms.
 
Selected partner projects will be allowed to use the Forms Alpha version for mainly prototyping during this release. All other usage, included not approved usage of the Forms Alpha version will not be supported.
 
Forms includes the following:
* Changing Color scheme similar to Microsoft Office (e.g. see File / Options / General in Microsoft Outlook 2010).
* Custom layout and organization of elements within a form, giving more flexibility in designing your forms.
* New common controls like Button, List Box, Table, Radio Button, Color Picker, Track Bar, Progress Bar, in addition to the existing Text- and Number Edit, Combo Box, Date Picker, Image Editor, Check Box, Html Editor and RTF Editor.
* New controls for Analysis, Reporting and Visualization like Chart and Pivot Table.
* New Timeline Control for visualizing chronological and sequential data.
* New Diagram Control for displaying graphical networks of connected data.
* Support for multiple and related data sources within the same form. Dependencies between data sources and controls are expressed by defining logic elements such as rules, data filters, and formulas.
* Improved dynamic content: Conditional formatting and protection of controls.
* Association of custom actions with controls.

## Minor new functionality

**#17769 Displaying group summaries for collapsed rows in a table**

By default, group summaries are displayed as the last row within an expanded group. In previous versions, summaries where hidden when the group was collapsed. If all groups were collapsed, only the total summaries were visible. To improve readability, group summaries are now always visible, even if a group is collapsed. To avoid conflict with group headers, group summaries are displayed on a separate row even if the group is collapsed.
 
**#16851 Converting a numeric value to a string using a format specifier**

Support for specifying a format when converting a numeric value to a string introduced in the Genus Language. Available for the numeric types Integer, Large Integer and Real. To learn more, see the news article Converting a Numeric Value to a String using a Format Specifier.
 
**#16897 Copy view in Table designer**

Functionality for copying table views are added to the Table designer, both to the shortcut menu and the designer tasks menu.
 
**#17417 Remove local deployment of Directory**

To test fixes and new functionality, Genus Studio offers local deployment of the Directory. However, there has not been any support for reverting to the officially deployed version of the Directory (other than removing the compiled Directory file manually). The new command Remove Local Deployment of Directory automates this task. The command is available both in Genus Studio and your application. To learn more, see the news article Remove Local Deployment of Directory.
 
**#16819 Security: Data set access**

Access to data sets are granted to security groups. To improve the overview of granted access, the shortcuts Data Sets and Grant Matrix/Data Set View are added in the Security group in the Genus Studio navigation pane.
 
**#17808 Support for MySQL and PostgreSQL as data providers**

Support for these to databases are added. To learn more, see the news articles Full Support for MySQL as Data Provider and PostgreSQL passed the Alpha test.
 
**#17508 Condition editor improvements**

The readability of large expression has been approved by adjusting indentation of sub-expressions and general layout. Drag and drop of expressions has been improved. The contents of fly-by-hints has been improved.

**#18558 Added support for substitutionGroup in XML Schema**

This makes it possible to use element substitution, i.e. that one element may be substituted by another.

**#16841 maxOccurs on choice in XML Schema**

Support has been added for maxOccurs on choice in XML Schema.

**#16833 Union in XML Schema**

Support has been added for the use of Union in XML Schema.

**#17592 Showing sum columns in table when group is collapsed**

Aggregated values are displayed in header when collapsed, if there is an aggregation row inside the group.

**#18048 Changing Agent scheduling without deploy**

It is now possible to change Agent Schedule, Max Running Time and Max Queue Time without performing a full Application Model deploy. Note that the Execution Monitor user interface is updated asynchronously (see Known Issues, section Tips and Hints, #18011 for more information).
 
**#17159 Search in Selection lists no longer replaces previous selected items**

This applies for Object Classes where both Allow Read All Objects and Read Once are selected (`Genus Studio | <an object class> | Data Provider`). When selecting objects for such Object Classes in Genus Desktop, e.g. from within a Single Object Page (SOP) field, a selection list dialog opens. Clicking Search opens a search dialog. Performing a search returns a table of search results. Previously, if you selected one or more objects among the search result objects, your selection would replace all objects back in e.g. the SOP field. The behavior is now changed, so that selected objects are added to any previously existing objects, and not replacing the objects.
 
**#18124 Added support for specifying data sources for Refiners in Table**

It is now possible to specify in the Table | Views section which data source a Refiner should influence.
 
**#15936 Creating a URL string from a general string**

The type member createSlugString has been added to our Url Type for creating a string that may be used directly as part of a URL based on a general string. Search for createSlugString in our online help documentation for more information.
 
**#16491 / #16898 Built-in functionality for filtering of data in table columns (properties) has been improved**

The table column header drop down now displays values in more levels / groups and in hierarchies. After upgrading to 2013.1, have a look at e.g. date, integer and text columns in one of your tables.
 
**#16913 Export Data Set has been added to the Analysis Data menu**

This command will export your analysis data (as tabular format) to Excel.
 
**#17248 Microsoft Outlook no longer disabled when sending email from Genus**

Your Genus Desktop client will still be disabled when sending email from Genus Desktop using Microsoft Outlook.

**#17541 Saved search properties no longer available in the Navigation Pane**

Properties on private shortcuts to Saved searches previously opened properties for Saved searches, i.e. the target of the shortcut. This could be misleading, making the user believe that he or she opened the properties of the shortcut itself, which again could make the user believe that the shortcut security was editable (which it isn't per design, it is locked to the user). In 2013.1, to change security for a Saved search, locate your Saved search in your list of searches, select Properties and the Security tab.
 
**#17142 The width of dropdowns in Search panes has been expanded**

The dropdown width automatically expands to the width of the widest content.
 
**#16923 Ranges of values in dropdowns in Search pane**

Ranges of values may now be selected by holding down Shift and clicking the left mouse button.
 
**#17044 Column filter and Find on this page cleared when running new searches and clicking Close search**

This was done to avoid confusion when switching between searching and Autofilter (Find on this Page).
 
**#15252 Introduced option for disabling client access WSDL**

New checkbox Metadata (WSDL) is available is added to the Web Service General tab in Genus Studio.
 
**#17466 Added new type members to the Statistics and CalendarTimeSpan types**

The members sum, average, min and max have been added.
 
**#17203 Added Enabling Condition on Delete action in Table**

This has been available for all operations except Delete up till now. Note that the Delete command is available in the Genus Desktop Edit main menu, implying that a Delete condition is evaluated quite often. Be careful not to model a too performance intensive condition.
 
**#17054 Logging of "Body out xml" in web service history**

The xml is now logged if the option Save Detailed Execution Trace in History is selected. The Consume a Web Service effect is also improved with regards to logging.
 
**#16896 New properties on the General File data source**

The data source has been extended with read only properties for width and height, e.g. to retrieve the width and height of images.
 
**#16648 Added Refresh on Activate on Navigation Pane shortcuts**

To be able to refresh contents each time a navigation pane shortcut is selected in Genus Desktop, an option has been added in the Edit Shortcut dialog. The option is only visible for modelers in Genus Studio.
 
**#12160 Added tryParseExact member to the CalendarTime type**

Converts the specified string representation of a date and time to its CalendarTime equivalent using the specified format and culture information. The format of the string representation must match the specified format exactly.
 
**#12106 Added Compose Text in the Create Object and Modify Object effects**

Compose Text is available from the Value dropdown inside the Field Properties dialog. Compose Text makes it possible to assign text values using Repeated Section and Embedded Section (available from the right click menu inside the Compose Text dialog).
 
**#12106 Added checkbox Append text to existing value in the Modify Object effect**

The option Append text to existing value has been added to the Modify Objects effect to make it possible to append text across enumerations. The option is available in the Field Properties dialog.
 
**#16748 Optimized security settings for web service endpoints**

During Genus Server installation windowsAuthentication authPersistNonNTLM="true" is now automatically set on your Genus application web site. This will avoid unnecessary round trips when using Windows authentication, reduce the load on the Genus Server and improve bandwidth utilization.
 
**#18554 Modern UI icons have been added to conditional formatting**

Available in Table | Layout, the Cell tab, Automatic Formatting, the Icon dropdown.
 
**#18101 On Language Evaluation Error has changed name**

New name is On Expression Evaluation Error.
 
**#16356 Added support for restrictions on reference fields of type Complex Association**

Available in Table | Layout, the Cell tab, in the Data Binding section. 
 
**#18743 Introduced Permissions Inherited from Outbound Reference**

In Genus Studio, on an Object Class, the Security tab, a dropdown has been added, making it possible to inherit permissions from objects referred to by the Object Class.
 
**#18728 Complex Association as Part of Composition**

In Genus Studio, on Object Class, there is introduced support for Complex Associations being Part of Composition.
 
**#18742 Adding groups for object classes connected through inbound properties, including complex assosiations**

In Genus Studio, in the effects Create Object(s) and Modify Object(s), it has been added support for adding groups which are not part of an object class' composition.
 
**#18929 Data Interpretation of a property automatically set to the Object Class if property is Primary Key**

In Genus Studio, in the Object Class Wizard, the behaviour has been changed to automatically set the Data Interpretation to the Object Class itself if the property is Primary Key.

## Bug fixes

**#17210 Genus Background Service not started automatically after reboot of server**

Only experienced on two servers. Delayed auto start after reboot has been added.
 
**#16889 Prevent deletion of old Genus Desktop installations**

It is possible to install Genus Desktop on computers by doing an administrative installation and actually place the application executable and extension files on a shared file server, like a network disk. In such cases Automatic Updates in Genus Server Configuration is turned off by the system administrator.
 
It is fixed a bug where Genus Desktop deleted installation files on the shared file server, if the Genus Desktop user had write access to the shared file server (typically system administrators) and if the desktop computer had more than one Genus Desktop version installed.
 
**#17711 On Before Modify rule on an Object Class didn’t run when creating a new object from Table**
 
**#16922 Removed automatic hiding of legend for bars when only one object were displayed in an analysis**
 
**#16903 Open with Default Application fails for large amounts of table data**

Failed when the product of rows and columns reached a certain limit depending on the data types and content, e.g. about 80 000 rows and 2 columns worked, but not e.g. 40 000 rows and 35 columns.
 
**#16860 Open with Default Application in an analysis didn’t show vertical axis dates correctly in Excel**

Happened if the date format wasn’t specified explicitly.
 
**#16710 Error when opening an Excel spreadsheet saved in 97-2003 format from Genus**

**#18363 The confirmation dialog for deletion includes counting of summary rows**

Happened when deleting from a table using ctrl + A. The correct numbers of objects were always deleted. Example: Displaying 29 for 27 objects if 2 summary rows.

**#17036 Formatting of row-bound columns in Table didn’t work**

In Table | Layout | a cell | the Cell tab and the Data Binding section, Occurrence has been added with the options One or Many. Selecting One will make the formatting take effect. Selecting Many will interpret the objects as references and formatting will be ignored.

**#17634 Saved searches based only on search pane criteria did not work when opened from the search field’s dropdown (Open Search or Ctrl + Shift + F3)**

The Saved search only worked as expected from the Search pane’s Open Search (available from the Tasks section). Editing of Saved searches based only on search pane criteria did not work. Saved searches based on Advanced search (i.e. conditions) did work, both executing and editing.

**#18630 Fixed bug in drag and drop of email from Outlook 2013 to Genus**
 
**#18570 Previous/next for weeks do not behave correctly for years where January 7 falls on a Monday**

Symptoms:
* Moving the reference date 2013-01-07 (week 2) one week back, results in week 52 in 2012.
* Moving the reference date 2013-12-31 (week 52) one week forward, results in week 2 in 2013.
* Moving the reference date 2013-12-31 to 2013-12-31, the week (52) will not change.

Last time this error occurred was in 2008. Earlier years the error has occurred are 2002, 1991, 1985, 1980, 1974. The error may occur in e.g. analysis, saved searches, tables and action logic using date arithmetic (condition with time function).
 
**#17151 Paste of lowercase text to a Convert to Uppercase property was not converted**

In Genus Studio, on an Object Class Property, the Display tab, Case Conversion may be set to Convert to Uppercase. The error made it possible to save lowercase text.
 
**#16689 Configuration of maximum buffer size was not taken into account for SOAP 1.1.**

This restricted web services message sizes to the default maximum size of 64 Kbytes. The buffer size was taken into account for SOAP 1.2.
 
**#18691 Ctrl + click on an email address in Genus Desktop crashed under certain circumstances**

The ctrl + click crashed if user didn't have security access to run the associated Send task.
 
**#17782 On Data Constraint Validation error messages are not user friendly**

The messages are now logged instead of shown to the user. A more user friendly message is displayed.
 
**#18274 Agents scheduled to run with Schedule Type equal to Once didn't run at all**
 
**#14323 The Max Running Time was not considered when running agents**
 
**#17220 Plot diagram in Analysis displays wrong name on axis (X axis vs. Y axis)**
 
**#17875 Error in validation of size of PNG files**

Size of disk file was incorrectly used in the validation, and not the size of the file after loading into Genus. The validation is the built-in validation comparing the file size to the Data Size assigned in the General tab for an Object Class Property.
 
**#17477 Genus Desktop becomes unresponsive after copying a picture three times**
 
**#17479 Cannot generate PDF on 64 bit Windows server using Ghostscript 9.00**

Seems like one must use 64-bit Ghostscript for 64-bit Windows and 32-bit Ghostscript for 32-bit Windows. Ghostscript filenames were changed from Ghostscript version 8.71 to 9.00, required a change in Genus Server.
 
**#18576 SQL syntax error given a certain combination of union, sorting and cutting (Read the first objects) towards Oracle**

The combination arose when introducing conditional security in a Read Objects effect with sorting and Read the first objects. The conditional security resulted in a union select with a syntax error.
 
**#18567 Improved resilience in handling of Content-Type when interpreting WSDLs / XSDs**

"Encoding" attributes on XML declaration nodes inside the XML data will now override "charset" given in "Content-Type" in the HTTP response.
 
**#18378 Unable to specify Category and Tag in the analysis Open dialog**
 
**#17401 Size limitation of 32 Kbytes for texts in the Set a Field's Value effect**
 
**#18823 On Data Constraint Validation exception not thrown for illegal integer values**

Trying to convert e.g. "a300" to an integer will now throw such an exception.
 
**#17308 Sums in analysis Y axis based on Values / Local filters are not shown**

Internally corrected lack of aggregation of value sets with grouping on axis lacking resolution.
 
**#17597 Removed duplicate Save as menu item in the Attachments right click menu**

In some cases Save as was duplicated, and the behavior of the two differed.
 
**#16723 Calculation of average in an analysis fails in some circumstances**

Selecting on screen a set of data in an analysis will automatically calculate Average, Cell Count, Sum and Numerical Count and display these values in the status bar at the bottom of the analysis window. In some rare circumstances with a very low standard deviation the calculation would fail with a EDivByZero exception.
 
**#18982 Run with Highest Privileges able to create objects without Create permission on Object Class**

## Known issues

**#17260 On Before Validate not handled in Single Object Pages (SOP)**

The On Before Validate rule is not triggered in Single Object Pages. The functionality is supported by Forms and since Forms is to replace SOPs, this error will not be corrected.
 
**#18067 The Oracle data type ROWID is not supported**

The Genus Server requires Oracle Data Provider for .NET, and this provider does not currently support this data type.
 
**#18791 Known issues in our RTF / html editor**

There exists several minor issues with our current editor, like:
The Bold button is activated when typing bold text, but not the Italic and Underline buttons.
Inserted pictures are automatically converted to the BMP file format without compression, which makes the RTF / html content demand a disproportionate hight amount of memory. We suggest avoiding including more than a few pictures, and reduce the size of the pictures before including them.
We are not happy with the quality of the current editor, and as part of our Forms project (currently in Alpha), our existing RTF / html editor is going to be replaced by a new one (we are changing from one RTF/html editor component vendor to another). Therefore, the issues mentioned above will not be corrected in the current release. We are sorry for any inconvenience this may cause.
 
**#17431 Reduced quality on images when printing from the Merge Data to a Document effect**

Happens for transparent images, like transparent PNG images, due to an error in one of our component vendor modules. The workaround is to replace the transparent image part with e.g. white background, or use formats like JPG (or BMP).
 
**#18794 Lack of logging of input data for web services calling a JSON endpoint**

This is corrected in 2013.2, but not in 2013.1. Workaround for 2013.1 is to open Genus Server Configuration, Tools | Options | Logging and turn on Extended Logging.

## Tips and hints

**#18011 The State and Next Run Time columns in the Agents Execution Monitor are not updated**

The Execution Monitor (located in Genus Studio | Logic | Agents) is not updated immediately for these columns. This is by design, since the agents are scheduled and run asynchronously by one or more of your Genus Servers. The Execution Monitor will be updated as soon as one of your Genus Servers detects the change. You may refresh your Execution Monitor by pressing F5.

**#16559 Slow updating of table for tasks deleting, changing and/or creating many table objects**

Deletes, changes and/or creations are as default reflected in the table user interface one by one, which is time consuming if a task perform many such operations, like several hundreds. To avoid the problem, select Refresh table when the task has finished in the table setup, available from Table Description | Events | General.
 
**#17296 Concurrency handling of documents stored as Image on SQL Server**

Our general concurrency handling is value based, i.e. our transaction engine checks the similarity of pre and post values when updating. Since image fields not are comparable, you may introduce concurrency handling in your Application Model by adding a hidden GUID field that changes when the document is changed. (A related subject is the comparison of e.g. Image/varbinary fields on SQL Server - check out the use of hashbytes by doing an Internet search.)
 
**#18021 Avoid doing comparisons between locale-dependent values and non-locale dependent ones**

We have received reports of comparisons working correctly when run on Genus Desktop, but failing when run on the Genus Server. The situation arises due to different locale settings on your Genus Desktop and your Genus Server, which may be correct and also may change over time. Therefore, avoid such comparisons. Locale dependent values are translatable strings, formatted dates and numbers, etc.
 
**#18938 Support for Ajax clients using "Application Request Routing" and "URL Rewrite"**

Two common challenges often arise when writing JavaScript-based clients calling Genus-based web services over POX/JSON end points: cross-site scripting (XSS) limitations and browser interception of HTTP 401 authentication responses. Both challenges may be resolved using the Internet Information Services (IIS) extensions "Application Request Routing" and "URL Rewrite". The latest versions of these extensions may be installed using the Microsoft Web Platform Installer. If more details are needed regarding configuration, please contact our support (reference #18938). Selected partners may look up #18938 in our issue handling system Actio themselves.

## Change log

* 2013-04-09 Added notes to Patches (15.5.14.8).
* 2013-03-15 Changed status to Release. Added notes to Breaking Changes (#19072 / #17642 / #17862).
* 2013-03-11 Added notes to Known Issues (#18794).
* 2013-03-06 Added notes to Installation / Upgrading (#19012).
* 2013-03-04 Changed status to Release Candidate. Added notes to Known Issues (Tips and Hints, #18938), Minor New Functionality (#18742, 18929) and Bug Fixes (#18982).
* 2013-02-22 Added notes to Breaking Changes (#18911) and Installation / Upgrading (#18911) (yes, same reference number on both), Known Issues (Tips and Hints, #18021).
* 2013-02-19 Added notes to Installation / Upgrading (#18895).
* 2013-02-14 Added notes to Minor new Functionality (#18743 and #18728), Bug Fixes (#18570 to #16723), Known Issues (#17431).
* 2013-02-13 Added notes to Bug Fixes (#17711 to #18630).
* 2013-02-12 Added notes to Minor new Functionality (#15252 to #16356).
* 2013-02-11 Added notes to Minor new Functionality. Added two new Breaking changes. Changed status to Beta.
* 2013-02-07 Added notes to Installation / Upgrading, End-of-Life Functionality, Major new Functionality and Known Issues.
* 2013-02-06 Improved the description of the breaking change #18107 / #18125 Shortcuts to Genus Studio.
* 2013-02-05 Restructured the layout of the release notes from one large article to one article per subject.
* 2013-01-29 Forms will only be released in an Alpha version.
* 2013-01-10 Added .NET Framework 4.5 requirement.
* 2012-11-22 Created.
