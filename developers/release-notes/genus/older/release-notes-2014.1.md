---
title: Release notes for Genus Apps release 2014.1.
description: User-visible changes to Genus Apps from release 2013.2 to 2014.2
author: jtroset
---
# Release notes for version 2014.1

## Introduction

This document lists all user-visible changes to Genus App Platform between releases 2013.2 and 2014.1.
 
This release note will be updated prior to the release and may also be updated as long as the release is available, e.g. with information of new patches or known issues. Please take note of the installation / upgrade comments, and the release notes change log.

## Installation and upgrading

Prior to upgrading to 2014.1, you must:
* Upgrade to 2013.2. See the Release notes for 2013.2 for more information.
* Create a new environment and keep 2013.2 for reference, since this will be needed for manually converting Single Object Pages (SOP) to new Forms.
* Upgrade one of your environments to 2014.1
* Run the Genus Upgrade Assistant for 2014.1. The Upgrade Assistant is available from the Actions menu inside Genus Studio. The Upgrade Assistant will help you in the SOP to Forms conversion by displaying a text file with what needs to be converted.
* Use the output from the Upgrade Assistent as an aid while converting from SOP to Forms. Also use your 2013.2 version to view details about your old SOPs and any modeled rules on your SOPs.
* Review the Expiry date of your Genus License file and install a new one if necessary.
* Review the rest of the release notes for this release. Pay special attention to any issues in the Breaking Changes section.
 
See our help documentation for general information about installing and upgrading Genus App Platform. 
 
## End-of-life functionality

End-of-life functionality is functionality that was available in the previous release, but is no longer available in this release.
 
**#21320 The Single/Multiple Object Page concepts are removed and replaced by the Forms/Table concepts**
 
Your existing Single Object Pages (SOP) (possibly containing Multiple Object Pages) must be manually converted. See Installation/Upgrading in the menu to the left for more details.
 
**#21312 Built-in data exchange with Microsoft Project is removed**
 
The old data exchange must be replaced by modeling import/export effects. See #21363 for more information. Note that it is not longer a requirement to have MS Project installed on your client.
 
**#21364 Instance security is removed**
 
All use of instance security must manually be replaced by using conditional security. 

## Breaking changes

This section lists important changes introduced in this release. You will need to use this list in order to understand the changes you might need to make to your application to support the new release.

**#21060 Introducing Genus License files**
 
Here are the facts about Genus license files:
* A license file is required in order to start Genus App Platform.
* License files are issued per customer (owner) and not per application model, production environment, test environment or similar.
* The license file is a signed and readable XML file. Changing the license file without re-signing it, will make the license file useless and the Genus App Platform will not start.
* New license files are distributed by email from Genus AS when the expiry date approaches and if license fee payment has been received.
* License files do not need to be activated over Internet.
* License files usually have long validity, typically about 400 days.
* A license file contains the name of the owner (a Genus AS customer) of the license file and is tied to that owner.
* License files are traceable to the source (by reading the customer name inside the XML file) and is not to be distributed outside the owner's environment.
* Lost or misplaced license files may be black-listed by Genus AS. Black-listed license files will not be usable, i.e. your Genus App Platform will not start. So keep your Genus License files private to your organization.
* We recommend saving a copy of your license file in a safe location (other than your Genus Servers).
* License files are not required and not used for Genus releases prior to 2014.1.
* The license file must be installed on all your Genus Servers following the simple procedure below. This includes any development and test environments or similar.
 
The license is installed simply by saving the file on all your Genus Servers at this exact location:
`[CommonAppDataFolder]\Genus\Server\Config\GenusApplicationFrameworkLicense.xml`
 
The placeholder [CommonAppDataFolder] normally resolves to C:\ProgramData for all currently supported Microsoft Windows Server editions and versions, resulting in:
`C:\ProgramData\Genus\Server\Config\GenusApplicationFrameworkLicense.xml`
 
Check the following Windows Server registry key if you suspect that [CommonAppDataFolder] resolves to another location for your Windows Server:
`HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Shell Folders`
 
NOTE! The format and name of the license file has been changed as of release 2016.1. Check our help documentation for more information.
 
**#21081 Requirements for Oracle and Sybase data access have changed**
 
Genus Server has updated requirements for accessing Oracle and Sybase databases:
Oracle data access requirement: Oracle Data Provider for .NET, ODAC 12c Release 2 (12.1.0.1.2). See "2014.1 - README - Oracle Data Access Components.mht" at https://versioning.genus.net/Versioning/README-Oracle/ for details (accessible for our partners).
Sybase data access requirement: Sybase Adaptive Server ADO.NET Data Provider 4.157.1212.0 (Sybase ASE 15.7 SP60). See "2014.1 - README - Sybase.mht" at https://versioning.genus.net/Versioning/README-Sybase/ for details (accessible for our partners).
 
**#21328 Genus Server requires .NET Framework 4.5.1**
 
This version of Genus Server requires that .NET Framework 4.5.1 is installed on your Microsoft Windows application server. Please download and install that version of the .NET Framework from http://bit.ly/netfx451.
 
**#21112 It is no longer possible to change Part of Composition**
 
Change to an Object Class Part Of Composition could lead to inconsistencies, and the functionality has therefore been removed. You may now only set Part of Composition when creating an object class.

## Major new functionality

**#21363 Strengthened MS Project Integration**
 
Instead of using the built-in data exchange mechanism (not longer available, see #21312), it is now possible to import and export data to MS Project files. The Genus built-in file type MS Project has been extended with more properties Also note that it is not longer a requirement to have MS Project installed on your client.
 
**#21365 Introduction of ID-porten as Identity Provider for Genus Mobile (web edition)**
 
ID-porten is Difi's (Norway's Agency for Public Management and eGovernment) joint log-in solution for access to other public agencies within Norway. Genus supports ID-porten as an Identity Provider for the web edition of Genus Mobile. It is not possible to use ID-porten for authentication within Genus Desktop, Genus Studio or Genus Server. To enable ID-porten as an Identity Provider, check ID-porten in your Account Profile in Genus Studio.
 
**#21292 Introducing the new form control Analysis**
 
A new Reporting and Visualization control for displaying Genus Analysis in Forms has been introduced.
 
**#21333 New Genus Desktop Gantt Control**
 
Use our new Gantt control for managing and visualizing hierarchical project planning data. For more information, see this news article.
 
**#21330 Support for upload/download of large files for Genus Desktop**
 
Genus now supports resource efficient upload and download of large files (tens to hundreds of megabytes) for Genus Desktop, using standard HTTP POST (multipart/form-data) and HTTP GET mechanisms. If you plan to extend your usage of Genus App Platform to handle large files, remember to check your database free space and growth settings (e.g. pay attention to settings like Database files Autogrowth in Microsoft SQL Server).

## Minor new functionality

**#21336 Introducing Form as preview pane in Table**
 
When creating a View on a Form, and before adding any controls to the Form, you may assign Style = Preview pane. It is not possibe to assign Events to any controls in such a View.

**#21279 Improved model names. Resolving of name conflicts.**
 
The following naming rules have been introduced to solve name conflicts:
* Name conflicts within an Object Class get the suffix "_mnc1..n" (short for model name conflict, followed by a number).
* Name conflicts within the type system (e.g. you have modeled the name "size" which also exist in the Genus Language) get the suffix "snc1..n" (system name conflict).
 
Improved naming of properties based on Class Connections and Inbound Properties. A property and a Class Connection with the name Nationality will be named `Nationality / Nationality_cc`, where cc is short for Class Connection. In general Class Connections will be named `<name>_cc` and Inbound Properties `<object class name>_<property name>_ip`.
 
**#21121 Support for the XML schema Include element has been added**
 
The Include element is used to add multiple schemas with the same target namespace to a document. See http://www.w3schools.com/schema/el_include.asp for more information.

**#21026 Recursive data sources available among Groups**
 
Self referencing data sources are now made available among Groups, e.g. data source Issue with property Related Issue.

**#21317 Allow In-place Edit and Display New Row have been added to Object Class Basic View**
 
This allows for creating and editing objects in Basic View for simple Object Classes, without need for creating a Form, which is handy in the required Single Object Page to Forms conversion (see the End-of-life Functionality section of the current Release Notes for more information).
 
**#21108 Our PDF storage format has been changed to PDF/A 1b**
 
This to be available on even more platforms and adhere to Norwegian government standards. See this link (in Norwegian) for more information: http://standard.difi.no/forvaltningsstandarder/anvendelsesomraade/arkiv-formater
 
**#21137 Introduced Time To Live for the Genus Desktop security cache**
 
In a business workflow where a user looses permissions (e.g. form goes read only), and later the same day regains permissions after some other user has done his or her task, the lost permission was cached until the Genus Desktop client was restartet. Time To Live has now been introduced to avoid this, and the Time To Live value has been set to 2 minutes.
 
**#21099 Introduced symbols on Form Tabs for marking invalid data**
 
Tabs containing invalid data are now marked by a symbol on the tab.
 
**#21020 Some SQL queries containing constant expressions are optimized**
 
Optimization has been done to reduce some SQL queries containing "constant expression = TRUE/FALSE" appearing as "1=1" or "1=0" in the Genus SQL log.
 
**#21287 New class function fromCalendarTime**
 
The class function fromCalendarTime has been introduced for all time dimensions for fetching a time object based on a date. This function is faster than a lookup and may be used for optimizing your tasks etc.
 
For example, this expression for fetching a week from a date:
`Week (Lookup).Week.is equal to ProjectEngagement (Team).Startdate.firstInWeek()`
 
may be replaced by (Enter a Formula):
`ApplicationFramework.Week.fromCalendarTime(ProjectEngagement (Team).Startdate)`
 
**#21368 Copy and Paste Security is now available for Local Task in a Form**
 
First you must select a Task in the Directory or locally in a Form you want to copy the permissions from. Copy the security by the Copy command (either by pressing Ctrl-C or right click and select Copy). Then select the Local Task you want to paste the security on and select the Paste Security command in the right button menu.
 
**#21374 New Effect Type introduced in Forms: Invoke a File**
 
To Invoke a Files default verb on for example Double Click in a Grid you must define a Invoke a File Event.
 
**#21377 New option in the Export Data effect**
 
The option Write Formatted has been added, which makes it possible to write XML with indentation and line shifts.

## Bug fixes

**#21286 Automatic restart of crashed Agents has been improved**
 
If for some reason a running agent crashes due to an unknown database failure, the running agent didn't start automatically again. To get the agent running again, one had to delete a row in the directory database table g_agent_execution_request and disable->enable the agent. Unknown database failures are now handled. Further strengthening of automatic restart is expected in release 2014.2.

**#21130 Sorting of Duration did not take negative durations into consideration**

**#21077 Sorting of Grid control 1:N fields**
 
It is now possible to sort on such fields, and the objects within a 1:N field is also displayed sorted.
 
**#21210 Exception on Find on this Page (Refine) in Forms**
 
An exception was raised when using Find on this Page, if the first letter written matched the first letter in a row in a Table included in the Form.
 
**#21231 Error with Paste special of more than one file at a time in Windows 8.1**
 
**#21102 Empty required Checkbox controls didn't indicate missing invalid value**
 
A red frame is now bordering the text for Checkbox controls in such cases.
 
**#21067 Corrected faulty encoding behaviour in Export Data**
 
Nordic characters were not displayed correctly.
 
**#21172 NumberEdit control: Empty value interpreted as error**
 
Empty value is now correctly interpreted as a NULL value, without resulting in an invalid field.
 
**#21128 Fixed error codes from Devexpress Control**
 
Warnings as a error code is not fully supported as a error code in Devexpress Controls. When receiving an error from the Control we must decode the error text instead of relying on the error code.
 
**#21127 Table inline editing and Convert to uppercase/lowercase**
 
The property setting Convert to uppercase/lowercase was not honored in the Table control.
 
**#21070 Errors in the Export Data effect**
 
This issue addressed three spooling errors:
* When using direct spooling, the extension .txt was always added to the file name specified in the task, regardless of whether the file name already specified a file extension.
* Custom format strings were not taken into account when using direct spooling to file. This is now fixed.
* For complect type fields, the output was different when spooling directly to file (using id) while normal export used object name. As the object name is not always available, both export methods now use the object id for complex type fields.
 
**#21066 Error fetching Start time, End time or Location from an Outlook MSG file**
 
Unable to retrieve values for these fields (and more) from Outlook Appointment objects (MSG file). The specification for the Outlook MSG format is somewhat unclear and this has resulted in errors when interpreting the contents of the fields in these files. The MSG format contains records in MAPI format and we discovered that some fields in the MSG files have dynamic field ids mapped to custom field names that we had not taken into account. These fields are among others Start/End Date and Location for appointments.
 
**#21385 Form: Exit on Cancel not regarded**
 
This would cause problems in e.g. dialogs with OK/Cancel buttons, where clicking Cancel would not exit further processing (but would e.g. move to the next step in a task).

## Known issues

Known issues are errors or lack of functionality. Known issues may be solved in a future release based on customer demand.

**#21136 Regarding Comboboxes containing more text than fits into the viewable area**
 
A Combox control will in such cases display the end of the text string instead of the beginning of the string, which may be considered contra-intuitive. However, this is the default behaviour as delivered by our UI control vendor, and a change of this behaviour is not on our current roadmap.

## Tips and hints

Tips and hints are design decisions or answers to support questions that may be of general interest.
 
**#21132 Why will Genus Desktop show the logon dialog 3 times when invalid logon attempts is set to a higher number, e.g. 5?**
 
If you are using Genus Native Identity Provider, you may assign "Account will lock out after X invalid logon attempts". If you are using Active Directory as Identity Provider, you may specify Account lockout threshold (number of invalid logon attempts) within your Active Directory. If you use either one and set attempts to e.g. 5, Genus Desktop will still only show the logon dialog 3 times on unsuccessful attempts and not a 4th time. To show the dialog a 4th time, you must first restart Genus Desktop. The "number of consecutive logon dialogs" are hard coded to 3 in order to be in line with e.g. Internet Explorer (and in general simplify our startup programming).
 
**#21113 Merging of dates to MS Word**
 
Note that the sequence of commands inside a MERGEFIELD is important. Merging a date using `"MERGEFIELD sometext  \* MERGEFORMAT \@ "dd.MM.yyyy"` must be replaced by `"MERGEFIELD sometext \@"dd.MM.yyyy" \* MERGEFORMAT"` in order to work.
 
**#21295 Selection of week by number**
 
Weeks in a Gregorian calender year can be numbered for each year. This style of numbering is commonly used in some European (e.g. Norway) and Asian countries, but rare elsewhere. According to Wikipedia at least six numberings are in use. Genus currently supports picking week numbers by searching or using a dropdown control, but ideally this ought to be solved more user friendly by picking a date or similar. Introduction of a week picker control will be considered in the future based on any introduction of standard controls from our UI component vendors. In the meantime, a workaround is to model a local data source with a rule assigning the week number based on the date. See also release notes section Minor new Functionality and #21287 New class function fromCalendarTime.

## Change log

* 2014-02-03 Final build branch/version is 15.9.7.5
* 2014-01-30 Added notes to Major new functionality (#21330), Minor new functionality (#21368, #21374, #21377), Bug fixes (#21172, #21128, #21127, #21070, #21066, #21385).
* 2014-01-27 Changed status to Release (build 15.9.7.1).
* 2014-01-20 Changed status from Beta to Release Candidate.
* 2014-01-03 Changed status from Alpha til Beta.
* 2013-12-16 Created (Alpha).
