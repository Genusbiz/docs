---
title: Release notes for Genus Apps release 2014.2.
description: User-visible changes to Genus Apps from release 2014.1 to 2014.2.
author: jtroset
---
# Release notes for version 2014.2

## Introduction

This document lists all user-visible changes to Genus App Platform between releases 2014.1 and 2014.2.
 
This release note will be updated prior to the release and may also be updated as long as the release is available, e.g. with information of new patches or known issues. Please take note of the installation / upgrade comments, and the release notes change log.

## Installation and upgrading

Prior to upgrading to 2014.2, you must:
* Upgrade to 2014.1. See the Release notes for 2014.1 for more information.
* Review the Expiry date of your Genus License File and install a new one if necessary.
* Review the rest of the release notes for this release. Pay special attention to any issues in the sections Deprecated Functionality, Breaking Changes and Known Issues. You may have to perform manual tasks.
* Please note that there does not exist any Genus Upgrade Assistant for the 2014.1 to 2014.2 upgrade.
 
See our help documentation for general information about installing and upgrading the Genus App Platform. We recommend reviewing the System Requirements help article.
 
## End-of-life functionality

End-of-life functionality is functionality that was available in the previous release, but is no longer available in this release.

**#21414 Flagging of objects**
 
The built-in functionality supporting flagging of objects is removed. It is possible to replace this functionality by modelling your own structure and logic. For more information, see SQL version script 015.011.001.002.

## Deprecated functionality

Deprecated functionality is available in this release, but will (most probably) no longer be available in the next release.

**#21703 Last release to support versions of Microsoft Exchange older than Exchange Server 2007 SP1**
 
Release 2014.2 of Genus App Platform will be the last version to support versions of Exchange older than Exchange Server 2007 SP1.
 
If you have an older version of Exchange than 2007 SP1, you will need to disable Genus App Platform’s use of Exchange Web Services (EWS) in all your directories. This needs to be done by changing an option manually in your directories. Please contact us for more information and support. This feature will only be available in 2014.2.
 
If you have Exchange Server 2007 SP1 or later, but an older version than Exchange Server 2010 SP1, you will need to specify which version of Exchange you are using in Genus Server Configuration Tool (e-mail settings). This feature will be available in 2014.2 and later.
 
If you have modeled automatic saving of email in one of your applications, we recommend to upgrade your Exchange Server to version 2010 SP1 or later. The reason for this is as follows:
- Using Genus App Platform, it is possible to model automatic saving of emails sent (including replies) in your application.
- This mechanism works by listening to your “Sent items” folder on the Exchange Server.
- The mechanism is faster and more effective, starting from Exchange 2010 SP1, since a notification feature in Exchange is available and used for notifying Genus Desktop from Exchange Server.
- For older versions of Exchange Server than 2010 SP1, such an notification mechanism does not exist, and Genus Desktop is forced to ask (poll) the Exchange Server periodically. The end user will experience a slower response, i.e. it takes longer time from the email is sent, until it appears in the application.
 
See section “Major New Functionality” and release note #21683 for more information.

## Breaking changes

This section lists important changes introduced in this release. You will need to use this list in order to understand the changes you might need to make to your application to support the new release.

**#21153 Rules of type "On Before Read" are converted to "On After Read"**
 
"On Before Read" has no functionality that is not available in "On After Read". "On Before Read" has been removed.
 
**#21450 Modelled hierarchies are preferred over created hierarchies, all else being equal.**
 
Hierarchies can be modelled at the Data / Hierarchies node in Genus Studio. Hierarchies may also be created “behind the scenes” by checking “Allow this OC to be used as a dimension when aggregating data” on the Object Class. If an object class has two or more hierarchies modelled or created, the hierarchy used in search pane dropdowns, will be selected based on best-fit. Best fit is considered the hierarchy which contains the class at the lowest level. If a modelled hierarchy is equal to a created hierarchy, the modelled hierarchy will now be preferred in search drop boxes. Earlier the created hierarchy was preferred in such circumstances.
 
**#21547 Pressing the ENTER key in a search box edit control does not look up matching values**
 
Need to press CTRL+K to look up matching values. In the phased-out Single Object Page (SOP) technology, both key combinations were supported.
 
**#21654 New built-in Service and Guest user accounts**
 
Two new built-in user accounts have been introduced:
 
1) The "guest" user account. Anonymous Web Services run as this user. The "guest" account is member of the Everyone group. Other permissions and memberships must be granted as necessary. When moving to 2014.2 you need to review the use of any anonymous web services. If your application requires this functionality you have to enable the new "guest" user in Genus Studio and assign necessary permissions and memberships.
 
2) The "service" user account. All Logical Services that need to run within an authenticated context run as this user. As member of the Administrators group this user is already granted the necessary privileges and memberships. The built-in "service" user replaces the need for an application specific service user that was required by earlier versions of Genus Server. When moving to 2014.2 you need to migrate any use of the old application specific service user account (including any use of Active Directory computer accounts) to the new built-in user account. The application specific user account should then be removed.
 
**#21713 Alt+Down opens a Combo Box Drop Down**
 
Previously this was done by using a Ctrl+Up/Down key combination.

## Major new functionality

**#21365 Introduction of ID-Porten as Identity Provider for Genus Mobile**
 
ID-porten is the Norway's Agency for Public Management and eGovernment joint log-in solution for access to other public agencies within Norway. Genus supports ID-Porten as an Identity Provider for Genus Mobile. It is not possible to use ID-Porten for authentication within Genus Desktop, Genus Studio or Genus Server. To enable ID-Porten as an Identity Provider, check ID-Porten in your Account Profile in Genus Studio.
 
**#21682 New option on Scope: Execute Asynchronously**
 
The effects in the scope are not executed in sequence but are started in parallell. The scope waits to finish until all effect are finished. There are certain requirements for a scope to run asynchronously:
1. The Scope can only contain other blocks of the type Decision.
2. The Scope can only contain effects that support asynchronous execution; currently the Read Objects effect and the Consume a Web Service effect.
3. Any Read Objects effects within the scope must read data from a persistent data source, and not a memory based data source like code domains, time domains, or read from other data sources.
 
Known limitations: When consuming internal web services, these web services are executed synchronously.
 
**#21683 Major e-mail integration technology upgrade**
 
The underlying technology used for e-mail integration has been upgraded. Genus Desktop now supports Microsoft Outlook integration without depending on legacy MAPI code, utilizing Exchange Web Services (EWS) and providing MAPI independent file support for .MSG files. On Genus Server this opens up new possibilities, including support for running tasks with .MSG file import/export.
 
The new technology sustains the level of Microsoft Outlook integration you are used to, but provides a foundation for an even richer experience in the future.
 
The implications of the technology shift is outlined below.
 
Microsoft Office requirements: Until now Genus Desktop was restricted to integration with 32 bit Microsoft Office. With version 2014.2 Genus Desktop now integrates with both 32 bit and 64 bit editions of Microsoft Office.
 
Genus application model requirements: Each user account must have a valid e-mail address that is one of the e-mail addresses aliases available for the Active Directory user accessing the Exchange Server.
 
Exchange Server requirements:
- Genus Desktop now requires on-premises Exchange Server 2007 SP1 or better or Exchange Online. When using legacy Exchange Server versions older than Exchange 2010 SP1 the administrator needs to specify the correct Exchange Server version in the Genus Server Configuration Tool's e-mail settings.
- If you have an older version of Exchange than 2007 SP1, you will need to disable Genus App Platform’s use of Exchange Web Services (EWS) in all your directories. This needs to be done by changing an option manually in your directories. Please contact us for more information and support. This feature will only be available in 2014.2.
- Autodiscover must be enabled by publishing Service Connection Point (SCP) objects in Active Directory and/or by configuring DNS records and Exchange Server providing Autodiscover endpoints derived from the user's e-mail address domain: `"https://autodiscover." + domain + "/autodiscover/autodiscover.svc"` and/or `"https://" + domain + "/autodiscover/autodiscover.svc"`. The Autodiscover SCP objects and DNS records will typically be available if Microsoft's recommended procedures was followed during the Exchange Server installation.
- Exchange Web Services (EWS) access must be enabled on the Exchange Client Access Server for all users.
- If EWS restrictions are enabled on your Exchange Server (using EWSAllowList or EWSBlockList) you must allow access for the user agent string "ExchangeServicesClient/15.00.0913.015" or a higher version.
 
User experience: When Genus Desktop is started on an Active Directory joined computer the user should not be able to notice any major change. When starting on a computer outside of your Active Directory domain you will notice that Genus Desktop needs to ask for the user's credentials in order to connect to the Exchange Server. If the user chooses to save the credentials Genus Desktop will store them in the Windows Credential Store and will use the saved credentials automatically next time without requiring any user interaction.
 
**#21684 Consume a REST Service**
 
New effect which support consuming REST services.
 
Key features:
- Method: Get|Put|Post|Delete
- User Name
- Password
- Headers
- Body
 
The response can be written to a data source on the following formats: Text|XML|JSON|General File. You can also disable validation of XML, and specify a root path for XML and JSON data.
 
**#21704 Genus Desktop: Introducing Genus Discovery for end users**
 
Genus Discovery (formerly named "Analysis View") is a flexible and intuitive graphical tool for exploring, analysing and sharing data and insight with other end users.
 
Genus Discovery consist of three parts:
1) Analysis aims at increased information availability for end-users, and provides capabilities for self-service visualizing and discovery. Analysis is not an Excel competitor. On the contrary, your discovered data may easily be exported and merged with Microsoft Office.
2) Data Marts: Tailored made Data Marts by modelers provide data containing a subset of data oriented to a specific business function or team. This makes it possible for end users to play safely with data relationships, without sacrificing data consistency and violating the definition of key performance indicators (KPIs).
3) Data Extract: Extracting your data for further use in other applications or documents, like exporting or merging with Microsoft Excel.
 
Analysis consolidates relevant data from multiple sources and enables you to explore the relations in your data. Visualize data by combining controls such as list boxes, combo boxes, charts, and grids, in a multi-page layout. Analysis will include a new Pivot Grid control. The Pivot Grid control will not be included in Forms as earlier announced.
 
Compared to other standalone BI software, the Analysis utilizes the data structure and logic already defined in your Application Model.
 
See the news article "Introducing Genus Discovery!" dated October 23rd, 2014, for more information.
 
**#21721 Single Sign-On (SSO) for Genus Mobile web**
 
Signing in to Genus Mobile web is now possible to setup as Single Sign-On with Active Directory. When installing Genus Mobile, select authentication type "AD (Single Sign-On enabled)".
 
The application server url must include "/sso" after the data set. (Example: `https://application.server.net/DataSetName/sso`)
 
A change in browser settings is required to make this work.

For IE, Chrome, Opera and Safari the website url must be added as Local Intranet site. Open Control Panel and navigate to Network and Internet -> Internet Properties -> Security -> Local intranet -> Sites -> Advanced.

For Firefox, write "about:config" in the address bar, search for "network.automatic-ntlm-auth.trusted-uris" and add the website url as value.

## Minor new functionality

**#21409 Removed non applicable columns in Computers listing under security in Studio**
 
Removed columns Account Profile, Mail Address, Last Successful Logon and No of Successful Logons in Studio/Security/Computers, since the listed computers always are Active Directory users.
 
**#21462 New Desktop Form Control - Symbol**
 
Symbols can be selected from a library containing more than 1,000 entries. The symbols are based on the Scaleable Vector Graphics (SVG) image format which can be scaled without losing quality.
 
The color of the symbol can be defined in the control setup, either as a static color, or a dynamic color by using automatic formatting. The control exposes a Click event. If one or more event handlers is defined for this event, the control will behave as a Button control.
 
**#21494 Postponed data validation when executing Actions**
 
The new option "Validate Data Constraints" can be defined on a Scope to control when objects are validated.
 
Values:
- After each step (default)
- At end of scope
- Before commit
 
Note that objects always are validated before commit independent of the settings on a scope.
 
The following effects validates objects, and will report an error unless they are defined inside a scope where Validate Data Constraints is set to "At end of scope" or "Before commit":
- Create Objects
- Modify Objects
- Import Data
- Create a Data Aggregate
 
See also our news archive and the news article "Deferring Data Validation when Running Effects".

**#21502 New language methods**
 
The StreamData class is extended with two methods, "fromBase64String" and "toBase64String". A new class, HashAlgorithm, has been introduced, enabling the creation of a hash, based on the contents of a StreamData instance.
 
**#21514 Improved readability of the column-filter dropdown in Table.**
 
The filter dropdown is changed so that only values applicable in the context of the currently filtered columns will be displayed. This improves readability when the the column contains a large number of distinct values.
 
**#21520 Enabled grouping on multiple columns in Table**
 
It is now possible to group on multiple columns in the Table control by right-clicking in a column header and select "Group By...". A dialog is displayed where the user can select multiple columns and set grouping options on the individual columns.
 
**#21525 Hiding builtin items such as "None" and "Select All" in combo box control.**
 
Introduced new property: Show Builtin Items.
 
**#21531 Datafilter Editor Dialog is now sizeable.**
 
**#21574 Genus Studio: Improved initialization of dialog for Active Object Selection.**
 
The dialog will interpret normal field operands and convert to Active Object Selection operands.
 
**#21620 When autosizing a table column, the max number of characters can now be specified.**
 
**#21621 Form Tab under mouse cursor is now selected during drag operation.**
 
When hovering over a tab during a drag operation, the tab will now be selected. This allows dropping data into the contents of the tab.
 
**#21630 It is now possible to set a custom name on all events in a table**
 
**#21636 Added File Encoding to Export To File Effect**
 
When exporting to .txt, .csv and .xml in the Export To File Effect, it is now possible to explicitly specify how the file should be encoded. Encoding can also be specified for the result of an Transform XML Data Effect. Possible encodings are ANSI, UTF-8 and Unicode with and without BOM (Byte Order Mark in the start of the file).
 
**#21645 Visibility Condition on Events in Table**
 
Visibility Condition is now available in addition to Conditional Enable. Using Visibility Condition you may decide e.g. that only events for a certain type of complex association will be made visible.
 
**#21646 A Group Box can now have a different label when it's collapsed**
 
Group Box now has a new property in Studio named "Collapsed Label".
 
**#21649 A new event 'Revert Changes' is now available for the developer of Forms**
 
**#21664 Images in Forms will be resized in cases where the image size is restricted**
 
The image size is controlled by the Data Size property on an Object Class Property.
 
**#21669 White Theme implemented in the Genus Desktop application.**
 
**#21675 File upload/download for DB2**
 
Upload and download of files to/from DB2 database is now possible.
 
**#21686 Start main window when opening a link**
 
The linked object gets started in a separate Form instead of the main window. Closing the Form caused the entire Genus Desktop process to be closed since there was no main window. Subsequent invokation of links caused a new process to be started, thus reading model, loading .net assemblies, etc.
 
Default behaviour is changed to loading the main window in the background. The main window is accessible through the tray menu or by pressing Ctrl+Shift+G. The old behaviour can be achieved by toggling the option "Start main window when opening a link" in Genus Desktop and Tools | Options.
 
**#21699 Keyboard navigation after entering a value in a Table**
 
It has been possible to select the behavior of the Enter key after editing a value in a Table cell. Previously it was possible to move to the next cell either below or to the right. A new option has now been added that will move focus to the next editable cell, corresponding to how the Tab key is handled. The option is available in "General Settings" in the Table Editor.
 
**#21701 Conditional tab stop in a table cell**
 
It is now possible to conditionally define if a table cell should be included in the tab order.
 
**#21702 Support for web service endpoints accepting client certificate authentication**
 
Genus App Platform now accepts X509 client certificates for web service authentication. The client certificate presented to the web service endpoint must correspond to an Active Directory account.
 
Please make sure that:
- The application server is an Active Directory domain member.
- The Active Directory Client Certificate Authentication feature is enabled: Open Internet Information Services (IIS) Manager, navigate to the server node, open the Authentication feature, select Active Directory Client Certificate Authentication and click the Enable action.
- An HTTPS binding on port 443 is enabled and configured for the Genus Server Web Site, as use of X509 client certificates mandates communication over HTTPS.
 
**#21707 New Settings for Customizing the Tab Control Layout**
 
The new settings Tab Style, Tab Location, and Tab Orientation provide the opportunity to customize the layout of tab headers. The default tab style supported in previous versions, Multi Line, is usually the preferred style. The new style, Single Line, in combination with the ability to specify the location of tab headers may improve readability if there are many tab headers, or if your Form contains nested tab controls.
 
Tab headers can be located on the top, bottom, left, or right side. The Single Line style also supports defining if tab headers are oriented vertically or horizontally.
 
Read our news archive and the news article "New Settings for Customizing the Tab Control Layout" to learn more.
 
**#21708 Support for IBM DB2 as Data Provider**
 
As new customers are signing on, support for additional data providers is added or completed. This time we have completed our support for IBM DB2 version 10.1 or later. DB2 traces its roots back to the beginning of the 1970s when Edgar F. Codd, a researcher working for IBM, described the theory of relational databases and in June 1970 published the model for data manipulation. So we are especially pleased to add DB2 to our list of data providers. Earlier we have announced support for MySQL and PostgreSQL, in addition to our support for Oracle, Microsoft SQL Server and Sybase ASE.
 
**#21709 New Application Color Scheme - White**
 
The color scheme provides a clean, new look with a flat and modern UI. The default color scheme has been changed from Blue to White (applied if no color scheme has been assigned). Read our news archive and the article "New Application Color Scheme - White" to learn more.
 
**#21710 Introducing while loop**
 
A while loop groups a set of actions and executes them several times, until the while condition is not fulfilled. If the while condition is not fulfulled on the first pass, the actions within the wile loop is never executed. See our help documentation and the article "While Loop" for more information.
 
**#21711 Introduced Vertical/Horizontal Scrollbar Visibility on Grid and Tree Form Controls**
 
The new properties controls the visibility of the scrollbar.
- Auto: The scrollbar is visible if it is needed.
- Hidden: The scrollbar is always hidden.
- Visible: The scrollbar is always visible.
 
The Auto option is convenient, but can in complex forms lead to performance issues.
 
**#21712 New properties for the Grid control: Best Fit Mode and Best Fit Max Row Count**
 
Best Fit Max Row Count: The maximum number of rows that is used when calculating the best fit. If no value is entered, all rows specified in the Best Fit Mode is used. This is a useful setting to increase performance, as best fit calculations for large data volumes can be time consuming.
 
Best Fit Mode: Specifies the way the column width is calculated. This is a default setting which can be overriden for individual columns.
- None: No best fit calculation is performed.
- All Rows: The column width is calculated based on text of all cells within this column.
- DistinctValues: The column width is calculated based on all distinct values in the underlying datasource.
- VisibleRows: The column width is calculated based on the values in the currently visible cells.
 
**#21714 "Show in Column Summary" added to Grid column**
 
Enables summaries under individual columns. This option can for example be disabled when the Show in Group Summary is enabled, to show summaries only for the groups and not a total for the columns.
 
**#21715 Introducing the On Activate event type on Grid**
 
To simplify the definition of a Grid, it handles certain events specially. Events with the On Activate event type handles double clicking or pressing enter in the grid. Often you want these events to open the item in a new window, but to also enable the Open in a new window menu, you are required to define the On Menu Item Click event type with the Open in a new window menu setting as well. To simplify the setup, the combination of the On Menu Item Click event type and the Open in a new window menu setting is therefore also triggered by double clicking and pressing enter in the grid, as long as there are no events with the On Activate event type defined.
 
**#21716 New privilege "Log on as a mobile user"**
 
Allows the user to log on to the Genus mobile client.
 
**#21717 Reset password**
 
To enable sending an e-mail with instructions for resetting a password, two new fields are added in the Genus Server Configuration tool. The fields are "Sender Name" and "Sender E-mail", and can be found under the "Help and Support" tab in the dataset config dialog. The fields are required to enable the mechanism.
 
**#21719 Table Column - new property for controlling whether end users can filter data**
 
An end user can invoke a column's filter drop down if this property is set to true. To prevent an end user from filtering data, set this property to false.
 
By default the value for this property is true (in previous versions column filtering was always allowed).
 
**#21727 Enhanced Editing Features in the Expression Editor**
 
During the development of Analysis for Genus Discovery, several improvements have been made to the expression editor used to define functions and conditions. The editor has previously been used by modelers in Genus Directory, but with the introduction of Analysis, end users are allowed to define functions by using the expression editor. The enhancements have been targeted to the autocomplete menu to make language references easy to access. Read the news article "Enhanced Editing Features in the Expression Editor" (gen.us/1wBoCkE) published October 27th 2014 for more information.
 
**#21737 Display description for a search folder in the filter pane**
 
By default, the criteria for a search folder is displayed in the filter pane when the search folder is opened in a table. However, the criteria may be complex to read and it would be more helpful to display the description for the search folder.
 
That is, if a description is defined, the description is now displayed in the filter pane, otherwise the criteria is displayed.
 
**#21743 Execute the Refresh command from an event handler**
 
Added support for executing the Refresh command from an event handler in a form, such as the On Click event for a button control.
 
**#21749 New features in Advanced Expressions**
 
A new ?? operator has been introduced which makes it possible to write expressions like
 
X ?? Y
 
meaning that if X is not null the value of X is returned, otherwise the value of Y is returned.
 
**#21758 New !?? operator introduced in Advanced Expressions**
 
A new !?? operator has been introduced, making it possible to write expressions like
 
X !?? Y
 
meaning that if X is not null the value of Y is returned, otherwise null is returned. The !?? operator is related to the newly introduced ?? operator.
 
**#21762 Prevent that catched exceptions are logged in Windows event log as errors**
 
By default all exceptions that are thrown when running actions are logged as an error, even if the exception is catched and handled. To avoid that the Windows event log is filled up with expected and handled errors, exceptions are no longer logged if handled by a catch exception block.
 
**#21769 Handle errors such as wild card query errors in the Read Objects effect**
 
Introduced a new exception, "On Objects Read Error", raised by the Read Objects effect if data not could be read from storage. The cause of the error is stored in the field ActionOrchestrator.Error Message.

## Bug fixes

**#21277 Rendering of controls in Forms of type Dialog Box**
 
Upon opening some Forms of type Dialog Box, fields were initially made visible at the left side of the Form and then moved some millimeters towards right. This adjustment was visible for the user and has been corrected.
 
**#21400 The Save button was available in a Form when a required Rich Text field was empty.**
 
When clearing the content if a Rich Edit field, the validation status for the field was not updated and the Save button remained enabled although the contents were not actually valid.
 
**#21408 Invalid value in a Combo box**
 
When the old value in a Combo box is not in the drop-down list, we now clear the old value when clicking on the drop-down button.
 
**#21410 User settings for view width, view height and the task pane is now stored per view**
 
There was a bug in storing these settings for a user. The settings was stored per Form in stead of per View. This means that user settings like height, width and showing of task pane was the same for all Views within a Form. This is now stored per View since different Views usually have different sizes.
 
**#21416 Delete key operational in Table even if the defined event handler is disabled**
 
The delete command is disabled in menus, but it is still possible to delete an object by pressing the Delete key.
 
**#21423 Sorting/grouping defined in Basic View not applied in auto complete dialog for SearchBox Edit**
 
**#21425 Recent Searches list in Task Pane does not display the name of the data source**
 
Occurs when a new search term is added after a search is executed. The vertical scrollbar is hidden. If the Task Pane is resized, the list is updated correctly.
 
**#21434 Autofilter in the Refine task pane is now default False when opening a Form**
 
**#21456 Validation errors in Table controls were not indicated in tab control headers**
 
**#21473 Search Box control - Pressing the Enter key to perform a search closes the search dialog**
 
If an object is selected in the Search Result list, pressing the Enter key to perform a search closes the dialog and updates the Search Box with the current selected object. The behaviour is changed to avoid this. In addition, the current value in the Search Box control is not displayed in the Search Result list the first time the dialog is opened.
 
**#21479 When opening a Form as a dialog, an OK button is also visible before any changes have been done**
 
**#21490 Unexpected shutdown of Genus Desktop when registrating data in a new Table row**
 
When registrating data in a new row and the first cell the user is typing in, is a cell with a search button, Genus Desktop crashed when the user typed the start of the name and then pressed the Search button.
 
**#21499 Not possible to select a value from the autocomplete list in a text field by mouse click on a hint.**
 
**#21505 Incorrect font size in Forms when running Genus Desktop on computers with text size other than 100%**
 
**#21509 When trying to open a invalid URL in a Form, we now display an error message**
 
**#21512 OpenType fonts not available in the font list when setting default font for Rich Text Editor.**
 
**#21527 Scrollbar not displayed if a Grid contains exactly one row and that row exceeds the available area**
 
**#21568 Opening objects of changed identifier type by link resulted in a Genus Desktop crash**
 
When the unique identifier for an object has changed from e.g. string/integer to GUID, and we had a link to the old identifier, Genus Desktop crashed when trying to open the objekt due to invalid GUID format. This is now fixed by showing a message informing about the invalid link.
 
**#21577 When a Uniquness rule was violated, the File Upload effect failed**
 
**#21578 Genus Studio: Tables with Conditional Visibility on columns crashed when added in a Form**
 
**#21581 Error message displayed when not having access to Analysis in a Form**
 
When an user doesn't have access to an Analysis in a Form, an error message will be displayed instead of the Analysis.
 
**#21606 Group Boxes containing invalid fields do not show an error indication**
 
**#21608 "Hide Rows without Values" menu command in Table hides all rows inclusive rows with values**
 
**#21613 Refine option "Auto Filter" not applied when opening a Form in a new window**
 
Rows in grid controls are not hidden when entering a search term.
 
**#21622 Validation Warnings were not dispayed correctly in Combobox Edit**
 
Validations errors were always displayed marked with red symbol, no matter if the severity was Critical or Warning.
 
**#21628 Not possible to apply a column filter in Grid on columns containing multiple values**
 
E.g. document tags, mail recipients.
 
**#21632 Crash when opening a Form if a window with empty search content is already open**
 
Example: If you selected some objects in a table, clicked "Open in a New Window", and in the new window closed the table (but not the window), and thereafter double clicked on an object in the first table, you would experience a crash.
 
**#21638 An error occurred if a Form is closed with the ESC key when a drop down list still is visible**
 
**#21642 Default value for Integer Time Edit control is not set to current time**
 
The default value applied when pressing the Up or Down arrow key when the intial value is blank equals 00:00. Should be set to the current time.
 
**#21648 Genus Desktop terminated unexpectedly when searching is selected row was removed**
 
Happened when searching using Remove and the selected row was removed.
 
**#21652 Fixed an error when tagging multiple objects at the same time in a Table**
 
**#21685 Crash when dragging inside an empty grid in a form**
 
**#21694 Text not visible in Tree control when selected theme is Black.**
 
Occurs if font is automatic formatted. The text is displayed when a row is selected.
 
**#21706 The main form is empty if opened by pressing the keyboard shortcut CTRL+SHIFT+G**
 
Occurs if you start Genus Desktop with a shortcut to an object, such as an Analysis. In this case the main form containing the navigation- and task pane is not displayed initially, and must be activated from the tray or by pressing the keyboard shortcut CTRL+SHIFT+G.
 
**#21718 Numbers stored as text when saving the content of a Grid control to an Excel file**
 
**#21725 Data are requested for items in a combo box which is read only**
 
Request executed when control gets focus. If there are many items this results in an uneccesary delay since items never are required.
 
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
 
**#21770 Number format not applied when exporting data from Grid control to Excel**
 
**#21784 Data Extract may now merge data from several Data Marts into one document**
 
If you upgrade, existing Data Extracts will be deleted.
 
If you want to keep a template, remember to open and save the template to file before you upgrade. In tasks using Data Extract effects, you must delete the Data Extract effect.
 
Run the following SQL scripts as part of the patch installation:
- truncate table g_data_extract_template
- truncate table g_data_extract

## Known issues

Known issues are errors or lack of functionality. Known issues may be solved in a future release based on customer demand.

**#21395 The File Preview control does not support Excel 95 (file format BIFF7) or earlier**
 
**#21405 Selection of Multiple Values in Combo Box Control**
 
When one or more values are selected in a combo box control which allow multi selection, the user has to click the OK button displayed in the drop down list in order to update the object. In the old and phased-out Single Object Page (SOP) technology, it was possible to click inside the combo box control to accept the current selection. The control used in Forms does not support this functionality.
 
**#21670 Limitations when specifying alternate address for a web service reference endpoint**
 
Genus Studio allows you to override the endpoint address specified by the WSDL by configuring an alternate address. However, when specifying this address you cannot change the protocol part (i.e. you cannot change "http" to "https" or vice versa).
 
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
 
A new help article "Monitoring Genus Server" has been added and describe which elements we recommend monitoring, such as the Event log and the Genus Server Core Services (dllhst3g.exe).
 
Please have a look at the help article "Improving Desktop Client Startup Performance" if you experience startup issues. This is related to an environment with Web Proxy Auto-Discovery Protocol (WPAD) enabled.

## Change log

* 2014-10-17 Changed status from Release Candidate to Release (build 15.19.18.62)
* 2014-10-03 Changed status from Beta to Release Candidate.
* 2014-09-12 Changed status from Alpha til Beta.