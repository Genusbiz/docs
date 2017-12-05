---
title: Release notes for Genus Apps release 2017.3.
description: User-visible changes to Genus Apps from release 2017.2 to 2017.3.
author: jtroset
---
# Release notes for version 2017.3

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
<!--ID 89ddd7b6-1a06-401e-9bdc-b50bdbe68550 -->
**#22905 The Export Data effect will no longer serialize empty arrays and objects in Json-format** (Desktop;Services)

<!--ID 5d551162-74b1-476e-8b2d-10a9264a5c67 -->
**#22914 Help documentation only available online** (Desktop;Documentation)

In previous versions, the Genus App Platform help documentation was bundled with the Genus App Services installation. Now, the help documentation is always available online at https://docs.genus.no. Or, if you are inside a firewall not allowing traffic to docs.genus.no, you may install the documentation at docs.genus.no in your network and point to such an url. Contact your Genus representative for more information on how to proceed.

<!--rntype05-end   BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Major new functionality
<!--rntype06-start MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID be6d8c7a-3ed4-42ec-b3fe-2f886528557c -->
**#22900 Added option to take picture in web browser using web cam.** (Web)

It is now possible to use the web cam directly in the browser to take a picture.

<!--ID 8109ea1e-5953-43bf-beff-7eb2e900bb7e -->
**#22903 Conditional Security in Analysis** (Desktop;Services;Web)

Conditional Security permissions will now be applied in Analysis.
Permissions are considered in object and aggregate requests.
The requested permission is "Find & List"

<!--ID 267914e3-a14c-48a5-8b2a-fa8fdba4ca6c -->
**#22909 Azure SQL Database is now supported** (Services)

See "Special Considerations for Azure SQL" in help documentation at https://docs.genus.no for up to date information on configuration and supported features.

<!--ID 4a58ca5b-f6ea-458f-901b-b1c0026815d2 -->
**#22918 Improved compliance to the WCAG 2.0 guidelines for accessibility** (Web)

In this release we have made several improvements to meet the guidelines set in the WCAG 2.0 standard. This includes:

* Improved support for keyboard navigation.
* Setting the language used on a website in the HTML
* Improved page titles

<!--rntype06-end   MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Minor new functionality
<!--rntype07-start MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 461c7d88-480d-4928-8827-db80a4507525 -->
**#22898 Symbol Position on a Button in a Form** (Desktop)

Now it's possible to set the Symbol Position to Left or Top on a Button.

<!--ID b9d89962-634f-4f45-8b1e-abdce613cd92 -->
**#22899 Non-alpha numeric characters are now permitted in full text queries.** (Desktop)

This means that it is possible to search for stuff like C# C++, etc.

<!--ID 96a49f37-f5eb-4207-8e44-21b96bce84e0 -->
**#22902 Find local references to a data source in actions** (Studio)

Added menu command for finding local references to a data source in actions. Available in editors for Task, Agent, Web Service, REST Resource Method and Rule.

If references are found you can optionally select to mark the references in the "Actions" list. To clear reference marking, select "Clear Reference Marking" in the shortcut menu.

<!--ID 207027b7-e1b9-4858-afd6-3343a5e15bda -->
**#22907 It is now possible to data bind marking a control as requried.** (Web)

This is visualized by appending a star " *" after the label of the controller.

<!--ID 104acfc2-8b3b-4f4a-846f-e2de432c012f -->
**#22910 Merge Data to a Document effect: Password protect a document** (Desktop)

Added support for encrypting documents of type *.docx, *.docm, *.dotx, and *.dotm with a password.

Passwords are case-sensitive. If you lose or forget a password, Word cannot recover your data.

<!--ID f3c3ca1d-1b05-4f97-941f-d18525c428f4 -->
**#22911 No longer stores password in localstorage when using remember me** (Services;Web)

Now uses cookie based remember me instead.

<!--ID 3d336107-7818-4351-a9b6-704818d85868 -->
**#22912 Added support for external data in the Xml Transform Effect** (Desktop;Services)

The effect now supports use of external data loaded from an url in addition to data loaded from the data sources of the effect.

<!--ID 46665b5e-3a35-4242-8e85-c1b5fa9b9a15 -->
**#22913 Support for B64 encoded server response** (Services;Web)

Genus Apps now support B64 encoded response from Genus Server. This can be enabled server side. This should only be enabled when strictly needed from a security point of view, as it comes with a performance penalty.

<!--ID 568fd03f-7de4-459d-97fe-b61252a9a2ee -->
**#22916 Users will now be warned if they will lose data when refreshing or leaving the page** (Web)

If a user have unsaved data in a form, and attempts to either refresh or leave the page, they will now get a conrfirmation box first, to prevent loss of data.

<!--ID c4129a04-399a-48f4-8957-62862fb884bb -->
**#22937 Translating Named Search Fields in a Table** (Studio)

It is now possible to translate named search fields in a table view

<!--rntype07-end   MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Resolved issues
<!--rntype08-start RESOLVED ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 557bcf77-0891-45e0-81d1-e9908ec4bca7 -->
**#22904 Stored contract name for Web Service Reference not valid** (Studio)

Applies to Web Service References created in release 2017.1 or 2017.2. Web Services References created in earlier versions are not affected.

To fix the problem, upgrade to the latest release of 2017.1 or 2017.2. Open the Web Service Reference, select contract, and then save your changes.

<!--ID f287e03c-4f05-4876-b5ae-58a4cb3088ff -->
**#22906 Fixed errors related to use of references to parent xml element in xml-datasources.** (Desktop)

<!--ID 6489e9f8-ee21-4c01-9a87-4ffaa9892b57 -->
**#22908 Read Objects effect: Read into calendar data source fails (e.g. Year, Quarter, Month)** (Desktop;Web)

Occurs given the following setup:

* The effect is contained in a local task in a form
* The calendar data source which objects are read into is defined at form level
* The data filter in the effect includes a reference to another calendar data source which is defined in the task

<!--ID 334d45a8-0316-4add-a864-f4be84fef274 -->
**#22915 Fixed problem that caused Genus to shut down when requesting available file operations from Windows.** (Desktop)

<!--ID 54e92015-9fb4-4f87-a889-d70fec4f7c44 -->
**#22917 Username, password and remember me are now preserved through upgrades of Genus Apps** (Web)

<!--ID f3ff4633-3af2-41fc-b80b-40cc79f30f0e -->
**#22919 Actions: Improved performance and reduced memory consumption when modifying large amounts of data** (Desktop;Services;Web)

Optimized memory consumption when modifying large amounts of data using a "Create Objects" or "Modify Objects" effect. In a real case example (100,000 objects) performance was improved by 50% and the memory peaked below 1GB.

<!--ID 203058c5-a3db-40a0-8e6b-1d005eebabc1 -->
**#22923 Time shift in Analysis shifts the wrong way** (Desktop;Web)

It was discovered in 2017.3 that time shift was executed with a reversed sign. This applies only to release 2017.3. It does not apply to Reporter. The bug fix is included in version 17.230.49 or later.

<!--ID 7c8f8838-ac92-4998-8f84-09602f1668cc -->
**#22926 Improved errormessage propagated to client on server-exception** (Services;Web)

Expanded the exception returned when failing to deserialize an object in a Genus Apps request to include the inner exception message.

<!--ID 056258d4-6a11-4911-af75-7834537245ea -->
**#22928 Fixed error where a radio button would appear to be selected when it actually was not** (Web)

This could occour when making quick selections in radio button groups which had no prior selection.

<!--ID 0bf115b1-73c3-465b-8f10-2c73bc747876 -->
**#22933 Error in the Import Data effect and storing references** (Studio)

The fields for importing data was not stored in the reference finder xml, and fields in use could be deleted. This is now fixed.

<!--ID 08caeb60-4ed6-459e-a42f-c1bd4a21eeba -->
**#22939 IMPORTANT - Read Objects effect returns no objects** (Desktop;Web)

If data are read and written to the same data source, no objects are returned. Bug present in patches of release 2017.1, 2017.2, and 2017.3 built after 20.06.2017.

<!--rntype08-end   RESOLVED ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Known issues

Known issues are errors or lack of functionality. Known issues may be solved in a future release based on customer demand.
<!--rntype09-start KNOWN ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
There are no known issues in this release.
<!--rntype09-end   KNOWN ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Tips and hints

Tips and hints are design decisions or answers to support questions that may be of general interest.
 
There are no tips and hints specifically targeting this release.

## Change log

* 2017-09-11 Updated with latest resolved issues.
* 2017-08-11 Updated with latest resolved issues.
* 2017-07-06 Updated with latest resolved issues.
* 2017-06-19 Updated with latest release notes.
* 2017-06-14 Changed stage from Release Candidate to Release (builds starting with 17.230).
* 2017-06-08 Created.
<!--changelog CHANGELOG. DO NOT CHANGE THIS TAG. ANY CHANGES BELOW WILL BE DELETED.-->
