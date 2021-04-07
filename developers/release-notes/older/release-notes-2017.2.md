---
title: Release notes for Genus Apps release 2017.2.
description: User-visible changes to Genus Apps from release 2017.1 to 2017.2.
author: jtroset
---

# Release notes for version 2017.2

## Introduction

This document lists all user-visible changes to Genus Apps since the previous release.

This release note will be updated prior to the release and may also be updated as long as the release is available, e.g. with information of new patches or known issues. Please take note of the [installation and upgrading](#installation-and-upgrading) comments, and the release notes [change log](#change-log).

## Installation and upgrading

Prior to upgrading to this release, you must:

- Upgrade to the previous release. See the Release notes for the previous release for more information.
- Review the Expiry date of your Genus License File and install a new one if necessary.
- Review the rest of the release notes for this release. Pay special attention to any issues in the sections [Deprecated Functionality](#deprecated-functionality), [Breaking Changes](#breaking-changes) and [Known Issues](#known-issues). You may have to perform manual tasks.
- Please note that there does not exist any Genus Upgrade Assistant for this upgrade.

For general information about installing and upgrading Genus Apps, see [here](../../installation-and-configuration/index.md). We especially recommend reviewing the [System Requirements](../../installation-and-configuration/system-requirements.md) article.

<!--rntype01-start INSTALLATION / UPGRADE. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->

See also the following notes.

<!--ID 76fd74c3-4076-4e21-9cf3-367b786b82a3 -->

**#22869 Enhanced security -- consequences for load-balanced scenarios** (Services)

Genus App Services 2017.2 introduces a new encryption key mechanism. The first time you upgrade an application server to Genus App Services 2017.2 a new, unique encryption key will be generated and stored in appSettingsOverrides.config. If this server is part of a load-balanced cluster of multiple application servers you will have to distribute the encryption settings ("DefaultCryptoServiceProvider:DecryptionKey" and "DefaultCryptoServiceProvider:ValidationKey") from the appSettingsOverrides.config file to the appSettingsOverrides.config file on the other application servers _before upgrading_ the other servers to Genus App Services 2017.2.

This procedure is a one-time operation only when upgrading from a pre-2017.2 version of Genus App Services.

<!--ID 1394384b-9dfb-4554-9154-19c9b64c3015 -->

**#22890 Genus App Platform 2017.2 Requires .NET Framework 4.6.2** (Desktop;Services;Studio)

Prior to upgrading to Genus App Platform 2017.2, please make sure that .NET Framework 4.6.2 is installed. The Genus Desktop installer and the Genus App Services installer check that the required .NET Framework has been installed before allowing upgrading to Genus App Platform 2017.2.

The appropriate redistributable installation may be downloaded from Microsoft, see https://bit.ly/netfx462

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
<!--ID 630d7521-c263-459c-9db5-e1be847225ec -->

**#22875 Tree map control in desktop forms discontinued** (Desktop)

Will be replaced by tree map visualization in analysis.

<!--rntype04-end   DEPRECATED. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->

## Breaking changes

This section lists important changes introduced in this release. You will need to use this list in order to understand the changes you might need to make to your application to support the new release.

<!--rntype05-start BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 195ea5c2-b9e1-4550-84c9-6cef3af6fd95 -->

**#22868 Open View Command runs On Form Load events** (Desktop)

On Form Load events will no longer be triggered when the Open View command is executed.

<!--ID 66796cf0-ee60-436e-9b81-757be9880440 -->

**#22882 Changed behaviour of collapsed groupboxes** (Desktop)

For group boxes that are defined with IsCollapsible turned on and Vertical Alignment set to stretch, the runtime behaviour is changed so that they will only required the height of the header. Until now, group boxes would occupy the same space regardless of whether they were collapsed or not. This change supports a more dynamic use of the available space in the forms.

<!--rntype05-end   BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->

## Major new functionality

<!--rntype06-start MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID aae596a2-6db8-417a-9d80-5e64747b4d50 -->

**#22870 Improved support for import and export of JSON data** (Services;Studio)

In the previous version of Genus, import and export of JSON data were dependent on the structure of the datasource used in the import/export operation. To provide better flexibility, we have redesigned this functionality by providing a mapping mechanism that allows for more flexible JSON handling. The mapping mechanism is based on a template that describes the structure of the JSON data, and bindings that specify how data is mapped towards the JSON data.

The new mapping mechanism is currently available in the REST Method editor for import of Request Body, in the Export Data effect when exporting to JSON, as well as in the Consume REST Service effect for both the Request Body and Response Handlers.

<!--ID 5c14fee5-f48d-42ef-9ab4-de50d27184d6 -->

**#22897 Summary of new features in Analysis** (Desktop;Studio;Web)

New option "Open an Analysis" from a Form or Table etc, keeping the context. This is the first step to incorporate Analysis as a step in a adaptable and user centric workflow.

New option "Show uncategorized values as" enables naming uncategorized values to include them in a category grouping.

New option "Show remaining values as" enables naming all remaining objects as a single entry in a chart when cutoff is in use.

More flexible grouping of aggregates, similar to the functionality in Reports. Each value can use individual paths to dimensions during aggregation, and the paths are no longer limited to the ones defined for selection filtering.

Layout validation feedback upon save is added in Designer. Errors are shown on tiles and views.

Added support for non-numeric values in Measure, Measure List, Value Chips and Text control types. The values are picked from the first and only selected object in the data source.

Cutoff support added to Table.

Actions can be invoked in context menu

Conditional colors in Measure, Measure List, Value Chips and Text control types.

New Action "Open analysis with same selection" opens an analysis using the same data mart and the current selection.

Better support for using images as background in a tile. Top-align, repeat, combination of image and color, etc.

Added sorting in dropdown control.

Added symbol picker in map point layer designer.

Added support for screen tip based on markdown with value merging in map.

Accumulative Time Balance calculation. Allows presentation of accumulated values over time, for example accumulated sales year to date.

Added font size and grid spacing options for entire analysis.

Added coloring support for map point series.

Added selection/qualified/excluded colors to themes.

Management support for operating Data Marts. For example, log of data mart loading with time consumption and row counts.

Bubble Chart as new visualization type (tile) to visualize three dimensions (values) of data.

Heatmap as new visualization type (tile) where individual values contained in a matrix are represented as colors.

<!--rntype06-end   MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->

## Minor new functionality

<!--rntype07-start MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 055c935d-b0d5-4766-8ec2-61b2849d1df7 -->

**#22856 Added support for Google Analytics** (Web)

Genus Apps for Web can now report page hits and events to Google Analytics given a Google Analytics Tracking ID

<!--ID 2f5825ef-e64b-48ad-ab73-ca39b0961065 -->

**#22872 It is now possible to mechanically scroll groups and views using the scroll control command** (Web)

<!--ID 1a07cfed-4b7c-42b0-9351-7a59e2098bf2 -->

**#22873 Scale web apps to screen size** (Web)

Wheter or not to scale a web app to the device screen size can now be specifed explicitly for tablets and phones

<!--ID 52c927d0-04f7-43b0-8622-ce27d427e0e4 -->

**#22874 Assigning symbols for table views in navigation pane** (Desktop)

It is now possible to assign a symbol for each table view in a shortcut to a table

<!--ID f5d6440f-7088-4203-9960-242c0bb3a778 -->

**#22876 Caption on controls in Forms** (Studio)

When changing a binding on a control, the setting of caption uses a more advanced calulation based on caption value before the binding was changed.

<!--ID 0605322c-fd25-4f0b-ab36-9c8dc226d74a -->

**#22877 Data Mart is now part of the discover concept** (Services)

Data Mart is now added in the discover concept. This means that we in desktop can create new, open existing data marts. And data marts are found in recent lists as Analysis.

<!--ID 5f2290cc-4b0c-4a0d-9074-9640ebd8d2b5 -->

**#22878 Added support for drag and drop on object in grid- and tree control (desktop form)** (Desktop)

On drop, single selected object is set in the data source which the control is bound to. To access the object in a task which is executed on drop ("Paste Special"), assign the current selected object to a data source in the task.

<!--ID 6850d92c-02a5-466f-ae26-efcdd31a2f0e -->

**#22879 Upload a File effect - support for uploading a file stored in a file data field** (Desktop)

Added support for uploading a file stored in a file data field. That is, the file can be uploaded directly from a file-based data source or an object class which contains file data.

Previous versions required that the file was stored on disk.

<!--ID 5aff0fa8-0520-4c0e-a4db-63226cf47ddb -->

**#22880 Changes to Add to Home Screen on iOS** (Web)

Opening a website from a shortcut that is added to the iOS homescreen will now open it as a regular web page in Safari, instead of as a web app. This makes it possible to change between the website in Safari, and other apps, without being logged out or returned to the app list screen.

<!--ID c1fcf68e-2f64-431c-b80a-bf11151a1ae3 -->

**#22884 Modify a User Account effect: Confirm old password** (Web)

Added optional field for assigning old password when a new password is set. The old password is verified against the stored password before a new password is set. If the old password does not match, the effect fails with exception "On Modify User Account Error".

<!--ID ef290309-62e8-4fb1-9f19-b2fb76608367 -->

**#22885 Automatic sign in again after deploy** (Web)

Users that are signed out of an app because of a deploy, and who have selected "Remember me", will now be signed back in again automatically.

<!--ID a4b3b057-f465-455b-ab72-8d5c49611250 -->

**#22892 Screen tip in maps is now based om markdown, with value field merging** (Desktop;Studio;Web)

<!--ID 5c5bfca1-d9e4-4441-a34a-adf10c75f78d -->

**#22893 Turn of Hibernate** (Desktop)

It is now possible to turn of hibernate on a inline table shortcut. The definition for hibernate goes like this: Hibernates the target for the shortcut after 30 minutes of inactivity. This mode reduces memory consumption and improves overall performance

<!--ID 9fbb15db-39a9-4c0e-b037-8db4dc3f8824 -->

**#22894 Added translations for elements in the ribbon control.** (Desktop)

<!--ID ad55980d-2973-4497-a2ab-6954807afbc4 -->

**#22895 Added support for editing Pdf-files from Genus** (Desktop)

We have now added support for editing Pdf-files stored as documents inside Genus in a similar way as the already existing support for editing Microsoft Office file formats. When a file is edited and saved in Adobe Reader or Acrobat Pro, the document is updated in Genus Desktop. As this functionality is bound to the application used for editing the Pdf-documents, the support is limited to only Adobe Reader and Acrobat Pro version X, XI and DC.

<!--ID 3802a6e0-8fb0-4f2a-bc1a-d0bcf357e896 -->

**#22896 Support for SQL Server FILESTREAM** (Services)

Genus App Platform now supports Microsoft SQL Server FILESTREAM feature (https://technet.microsoft.com/en-US/library/bb933993). Optimized file upload/download is implemented for the Genus App Platform FileData data Interpretation.

The administrator must enable FILESTREAM at the SQL Server Service, including "Enable FILESTREAM for Transact-SQL access", "Enable FILESTREAM for file I/O access" and "Allow remote clients access to FILESTREAM data". The data must be accessed using Windows Authentication, granting the Genus App Services computer account appropriate access to the data.

<!--ID b9d89962-634f-4f45-8b1e-abdce613cd92 -->

**#22899 Non-alpha numeric characters are now permitted in full text queries.** (Desktop)

This means that it is possible to search for stuff like C# C++, etc.

<!--rntype07-end   MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->

## Resolved issues

<!--rntype08-start RESOLVED ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID d8c70df5-3485-44c3-824b-176c9b681430 -->

**#22871 Fixed problem with images not showing when merging data with an Excel template to Html format** (Desktop)

<!--ID 1b8c2bdb-2d67-464a-beaf-7a95aa113638 -->

**#22881 Labels for input fields now point to the correct element in repeating sections.** (Web)

<!--ID f5606bb6-df8a-4c28-a13f-c0800a3fac6b -->

**#22883 Data of type (time) duration exported as text when a table is opened in Excel** (Desktop)

Excel has limited support for the time duration type. To be able to perform calculations on duration values in Excel, values are now converted to a number representing the total number of hours. That is, a duration value such as 2:30 is converted to 2.5.

<!--ID cbcc2a18-d77d-4d2c-9b9c-26b45b22d138 -->

**#22887 Evaluate call is now sent correctly on lost focus** (Web)

Fixed an issue where values were not evaluated correctly when a field lost focus.

<!--ID a3269ba9-cd88-4710-b59a-83ccef102bcc -->

**#22888 Fixed Automatic Column Width when exporting data to Excel in an Export Data effect** (Desktop)

<!--ID ea50ed35-4db6-41ff-906b-63384cda0b8b -->

**#22889 Not possible to navigate back in search results for Sign in History / Execution History in Studio** (Studio)

Added button for navigating back in search panel. Note that support for this feature is limited to MS SQL Server (version >=2012) and Oracle (version >= 12c).

<!--ID d92737eb-d37c-4730-89c3-15ea2d313b25 -->

**#22901 Implemented focus awareness when the main window had several open workfaces.** (Desktop)

<!--ID 557bcf77-0891-45e0-81d1-e9908ec4bca7 -->

**#22904 Stored contract name for Web Service Reference not valid** (Studio)

Applies to Web Service References created in release 2017.1 or 2017.2. Web Services References created in earlier versions are not affected.

To fix the problem, upgrade to the latest release of 2017.1 or 2017.2. Open the Web Service Reference, select contract, and then save your changes.

<!--ID f287e03c-4f05-4876-b5ae-58a4cb3088ff -->

**#22906 Fixed errors related to use of references to parent xml element in xml-datasources.** (Desktop)

<!--ID 6489e9f8-ee21-4c01-9a87-4ffaa9892b57 -->

**#22908 Read Objects effect: Read into calendar data source fails (e.g. Year, Quarter, Month)** (Desktop;Web)

Occurs given the following setup:

- The effect is contained in a local task in a form
- The calendar data source which objects are read into is defined at form level
- The data filter in the effect includes a reference to another calendar data source which is defined in the task

<!--ID 334d45a8-0316-4add-a864-f4be84fef274 -->

**#22915 Fixed problem that caused Genus to shut down when requesting available file operations from Windows.** (Desktop)

<!--ID 54e92015-9fb4-4f87-a889-d70fec4f7c44 -->

**#22917 Username, password and remember me are now preserved through upgrades of Genus Apps** (Web)

<!--ID f3ff4633-3af2-41fc-b80b-40cc79f30f0e -->

**#22919 Actions: Improved performance and reduced memory consumption when modifying large amounts of data** (Desktop;Services;Web)

Optimized memory consumption when modifying large amounts of data using a "Create Objects" or "Modify Objects" effect. In a real case example (100,000 objects) performance was improved by 50% and the memory peaked below 1GB.

<!--ID 7c8f8838-ac92-4998-8f84-09602f1668cc -->

**#22926 Improved errormessage propagated to client on server-exception** (Services;Web)

Expanded the exception returned when failing to deserialize an object in a Genus Apps request to include the inner exception message.

<!--ID 056258d4-6a11-4911-af75-7834537245ea -->

**#22928 Fixed error where a radio button would appear to be selected when it actually was not** (Web)

This could occour when making quick selections in radio button groups which had no prior selection.

<!--ID 08caeb60-4ed6-459e-a42f-c1bd4a21eeba -->

**#22939 IMPORTANT - Read Objects effect returns no objects** (Desktop;Web)

If data are read and written to the same data source, no objects are returned. Bug present in patches of release 2017.1, 2017.2, and 2017.3 built after 20.06.2017.

<!--ID f1ad1763-ff5a-4401-b21a-0c485d434199 -->

**#23000 Filters applied to a report data source are ignored when the report is opened** (Desktop)

Filters applied in a _Run a Report_ effect are ignored when the report is opened using an _Open a Form_ effect.

<!--ID d5fc6028-e07f-4480-988c-668caea957d7 -->

**#23030 Fixed problem starting up Genus caused by installation of KB4055002 on Windows 7 computers.** (Desktop)

<!--rntype08-end   RESOLVED ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->

## Known issues

Known issues are errors or lack of functionality. Known issues may be solved in a future release based on customer demand.

All Desktop Forms must be designed in a way that prevents Table and Report Controls from being hosted in scrollable areas of the Form. In most cases this could be catered for by stretch-aligning the Table/Report controls (including all parent groups of the Table/Report) within the Form, but there may also be other cases where other areas of a Form may cause scrollbars to appear in a group which includes a Table/Report control. When a Form has the problem described here, it will appear as the Table/Report is rendered floating above other controls in the window so that for instance the ribbon, status bar or other page content may be obscured. This will be a time limited restriction, and will be removed in a later release, when the changes in our user interface technology are completed. Any Table controls violating the requirement will have an undetermined behavior.

<!--rntype09-start KNOWN ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID e7518c90-26f0-49c6-b313-8b5700e76f26 -->

**#22886 Can no longer select null for not null-properties after making another selection (Combobox)** (Web)

It is now impossible to select null in a drop down list for properties who cant be null, after making another selection. This prevents displaying invalid states to users.

<!--rntype09-end   KNOWN ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->

## Tips and hints

Tips and hints are design decisions or answers to support questions that may be of general interest.

There are no tips and hints specifically targeting this release.

## Change log

- 2017-09-11 Updated with latest resolved issues.
- 2017-07-06 Updated with latest resolved issues.
- 2017-05-09 Updated with latest resolved issues and changed status from Release Candidate to Release.
- 2017-05-03 Added summary of Analysis enhancements in Major new functionality.
- 2017-05-02 Updated with latest Minor new functionality. Changed status from Beta to Release Candidate.
- 2017-04-24 Updated with latest Minor new functionality and Installation / upgrading. Changed status from Alpha to Beta.
- 2017-04-11 Updated with latest Minor new functionality, Resolved issues and Known issues.
- 2017-04-03 Updated with latest Minor new functionality and Resolved issues.
- 2017-03-27 Changed status from Pre-Alpha to Alpha.
- 2017-03-24 Created (Pre-Alpha).
<!--changelog CHANGELOG. DO NOT CHANGE THIS TAG. ANY CHANGES BELOW WILL BE DELETED.-->
