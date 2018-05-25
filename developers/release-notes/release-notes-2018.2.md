---
title: Release notes for Genus Apps release 2018.2.
description: User-visible changes to Genus Apps from release 2018.1 to 2018.2.
author: jtroset
---
# Release notes for version 2018.2

## Introduction

This document lists all user-visible changes to Genus Apps since the previous release.
 
This release note will be updated prior to the release and may also be updated as long as the release is available, e.g. with information of new patches or known issues. Please take note of the [installation and upgrading](#installation-and-upgrading) comments, and the release notes [change log](#change-log).

## Installation and upgrading
 
Prior to upgrading to this release, you must:
* Upgrade to the previous release. See the Release notes for the previous release for more information.
* Review the Expiry date of your Genus License File and install a new one if necessary.
* Review the rest of the release notes for this release. Pay special attention to any issues in the sections [End-of-life functionality] (#end-of-life-functionality), [Deprecated Functionality](#deprecated-functionality), [Breaking Changes](#breaking-changes) and [Known Issues](#known-issues). You may have to perform manual tasks.
* Please note that there does not exist any Genus Upgrade Assistant for this upgrade.
 
For general information about installing and upgrading Genus Apps, see [here](../installation-and-configuration/index.md). We especially recommend reviewing the [System Requirements](../installation-and-configuration/system-requirements.md) article.

## Important issues in this release

> [!NOTE]
> This section address the most critical issues and information for this release. These issues may require you to take corrective action either before or immediately after installation.

There are currently no critical issues in this release.

<!--rntype01-start INSTALLATION / UPGRADE. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->

See also the following notes.

<!--ID 5cd19c87-84d3-43b1-b45b-8df71c62b4fb -->
**#23077 Genus Services requires a new version of IBM Data Server Driver Package for accessing DB2 databases** (Services)

To access IBM DB2 databases Genus Services 2018.2 (18.20.12.0 or later) now requires "IBM Data Server Driver Package (Windows/x86-64 64 bit) Version 11.1 Mod3 Fix Pack3 iFix003".

For details, see https://docs.genus.no/developers/installation-and-configuration/system-requirements.html#database-access-software-requirements.

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
<!--ID dda70fe8-7588-4616-865e-61163d995bad -->
**#23072 Analysis - Filters** (Desktop)

In older versions of Analysis, the same filter that was applied to the category, also needed to be applied to the value to get correct results. This has now been changed.  In version 18.2, filters applied to the category will also (by default), be applied to the value. This means its no longer necessary to apply the same filters on the value.

Note: This only applies to filters applied to categories in the Analysis Designer. If the filter is applied on the Data Source in the Data Mart. You will still need to apply the same filter to the value to get correct results.

<!--ID 0dd136da-13d3-4373-b6cc-d596814d40ad -->
**#23073 Trusted users replaced by app model admin rights** (Studio)

Users are no longer trusted on the app server, but granted app model admin rights in Genus Studio. To grant app model admin rights to a user, navigate to **Security/Users** in Genus Studio, open the user, and then select the **App Model Admin** check box. 

Admin rights can only be granted by users which have admin rights. That is, you need to grant admin rights to your own account manually before you can grant admin rights to users which previously were trusted. Detailed instructions are described in the script *018.020.005.001*.

<!--ID f974a29c-1de7-46f3-b830-7619e5e6b656 -->
**#23078 Changes in builtin email address validation** (Desktop;Web)

The builtin email validation check up to version 2018.1 has been to strict and prevented entering for instance nordic characters in the email adddresses. In order to support entering any character supported in an email address according to RFC 3696, we have changed the validation so that any character is allowed as long as the email address consists of a name and a domain separated by an @-sign. For customers that require a more strict validation, it is possible to add a validation rule for instance based on a regular expression for the email fields in the solution.

<!--ID 1b9ccda5-77b4-40e3-93cb-98fb8207ca77 -->
**#23084 Components used for export to MS Word, MS Excel and PDF has been updated** (Desktop;Services)

The third-party components used for generating Microsoft Word and Excel- documents and also for generating and converting Pdf-documents has been updated to the latest version and this may have impact on the resulting documents. This update was neccesary in order to keep our code up to date and to be able to get support from Aspose. We have earlier experienced that these updates has broken existing reports generated by Mail Merge in our customer solutions. Make sure the report generation is tested as part of the upgrade process to version 2018.2.

<!--ID b1c2e85c-65b0-4dc3-8f73-3804c9ecfbdd -->
**#23108 App Model Admin kan now testrun form, tasks, agents etc** (Desktop)

In previous versions only users added inn the App Administrator group could press File and App to test run tasks, Agents, Open Forms, call to Web Services and Call to Rest Services. This is now changed to all App Model Admins.

<!--rntype05-end   BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Major new functionality
<!--rntype06-start MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 94e01713-236f-4634-a499-d6c62522c958 -->
**#23076 "Administrators" security group renamed to "App Administrators"** (Studio)

Harmonisation of concepts after introducing app model admin rights (replacing access given to trusted users).

<!--rntype06-end   MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Minor new functionality
<!--rntype07-start MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 1bd30149-d953-436f-a62a-3cdc5361ca83 -->
**#23074 General settings in Genus Studio** (Studio)

Access to general settings moved from the ribbon to separate entries in the directory explorer: 

* **Settings**: Settings for the app model 
* **Data/Data Sets**: Settings for data sets

The UI has been simplified to a single page layout to improve usability.

Genus Configuration will soon be discontinued, and this is a preliminary step for moving the configuration of the app model to Genus Studio.

<!--ID fa21ffb2-28fd-48c1-9804-b7dbb9815208 -->
**#23075 Analysis themes replaced by web themes** (Studio;Web)

Analysis themes are replaced by web themes which are shared by all web-based components. Web themes are defined in Genus Studio, and you can assign a default theme both for the app model and for each data set.

Existing analysis themes will be converted to web themes when you upgrade to this version.

<!--ID 8c389863-0552-4574-91ee-64dfa74956ce -->
**#23080 Can now set default app for Genus Apps for Web installastion** (Web)

<!--ID 3c14caf5-4b10-4333-9467-e10bb48ef003 -->
**#23087 Analysis - New function: Math.abs** (Desktop)

Added support for Math.abs in the formula designer.

<!--ID b809a1ff-5dc1-41e4-b139-5f5c1d98eeef -->
**#23090 The Merge Data Effect can now be executed without specifying merge data source.** (Desktop;Services)

This is useful when the effect is used to convert a file without merging data.

<!--ID 5b5535af-78e8-43bc-a863-0d07c0062a96 -->
**#23091 Analysis - New action** (Desktop)

Added a new action - reload datamart. When pressed, the client will unload the current datamart, and reload with updated data.

<!--ID 7d11a5c1-1768-4bb4-85bc-5868c69fa30f -->
**#23097 &Aring;pen connected task in Run a Task effekt** (Studio)

It's now possible to open the connected task from the Run a Task effekt.

<!--rntype07-end   MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Resolved issues
<!--rntype08-start RESOLVED ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 683ce292-8c47-4484-adae-1d580e3b1f5b -->
**#23071 Error when changing views when a search field has focus in a table** (Desktop)

When a Number Search Field had focus and the user changed view, an error occured.

<!--ID 6e5cd458-59f7-4cc4-a650-88782b3a159a -->
**#23079 Fixed bug in wildcard SQL-generation** (Desktop)

When using advanced search, the wildcard operator returned an invalid SQL for fulltext index properties

<!--ID 87a176b0-15a7-4cc2-bbe2-a6f22a06a764 -->
**#23085 Error in evaluation of Month vs a Calendar time value** (Desktop)

When a Time object was evaluated against a calendar time, the operators greater than and less than returned the inverted value.

<!--ID 3f09eb98-b870-4ce1-96d2-856d5348a5b5 -->
**#23086 Improved file upload with Selection: Take a picture on Windows** (Web)

This should now behave the same as on iOS and Android, where there is a choice between using the camera and upload existing picture.

<!--ID 832762b1-1425-494f-bfe0-cb458561a84c -->
**#23088 Handle of invalid file for import data effect** (Desktop)

If we have a exce l file import and the user select a .JPG file a user friendly message is now displayed.

<!--ID a13c8332-f8ab-40e4-bb94-407b4eeaa988 -->
**#23089 Analysis - Data Mart loadtime** (Desktop)

{loadtime} can now be used in the text-control to get the timestamp of when the datamart was loaded.

<!--ID 7d4c851c-0249-41ac-a7c4-d77af51ac021 -->
**#23092 Remove Ribbon button when the user don't have access to the task** (Desktop)

When a command in a table or a form runs a local or global task we now remove the command from the Ribbon if the user don't have access to the task.

<!--ID adef3aac-4877-4aa7-9f6f-7fdcac35c3af -->
**#23093 Added user information in the Data Mart designer** (Desktop)

When the user changes a Data Mart, the user will now be notified that the changes will not take effect before the Data Mart designer is closed. The Reload Data Mart function do not relad the Mart description if the description is locked for edit.

<!--ID d1e0e626-c91c-4bee-8af5-120b6169667c -->
**#23095 Timeslider bug hvor den 'mister' mouseup event handleren sin** (Desktop)

<!--ID a8913f1c-caec-49c8-9017-d69cbe45f6e1 -->
**#23096 Analysis - Subset** (Desktop)

Fixed an issue where the analysis would never finish loading if initial selection was applied.

<!--ID 146985fb-7430-485a-b71b-efe6071bdf79 -->
**#23099 Analysis - Error handling** (Desktop)

Fixed an issue that would could lead to the analysis crashing upon getting a new authentication token.
All technical error messages are now also shown under a details-pane on the error-screen.

<!--ID b8a46cdc-097d-4d3f-a754-b050df3a2a38 -->
**#23101 Analysis - Loading data** (Desktop;Web)

Fixed an issue that in some cases could lead to longer load time when making seletions in an analysis.

<!--ID 75d51934-1685-4dd3-b332-8555de093ace -->
**#23102 When browsing the next object the old document was visible in the previewer.** (Desktop)

When showing a previewer while browsing objects the document from the previous object was visible if the new object file data was empty. We now display the message No Previewer Available.

<!--ID 30e9e7f5-5854-48c8-8bbb-af523db4c129 -->
**#23104 Isolation Level "Read Uncommitted" incorreectly ignored for database commands** (Services)

A side-effect of a code change introduced in Genus Services 2017.1 effectively disabled use of the isolation level "Read Uncommited" for all database commands.

A symptom of this issue has been experiences with database deadlock in high volume scenarios.

The issue has been corrected with the following Genus Services versions:

- 2018.2, file version 18.20.50.0 and later
- 2018.1, file version 18.10.164.0 and later

Oracle does not support Read Uncommitted and has hence not been affected by this issue.

<!--ID fda0534e-cbb0-45fc-b5a9-b987371d42ac -->
**#23105 Analysis - Missing translations** (Desktop;Web)

Added missing translations

<!--ID f55846e3-e9cb-4270-acdb-86b861e8f73d -->
**#23106 Analysis  Dropdown** (Desktop;Web)

Fixed an issue where actions would be applied to all objects, instead of only visible objects.

<!--ID c0b24b1b-44e7-471e-8abb-49c3472856b5 -->
**#23107 Analysis - Dropdown** (Desktop;Web)

Fixed an error with validating object state that caused some objects to not be visible in the list.

<!--ID 76926747-4438-4e31-ae65-e12d3de1c01b -->
**#23109 Analysis - Bookmarks** (Desktop;Web)

Fixed an error that caused bookmarks to not be available before the analysis was restarted.

<!--ID 34857736-5e49-4c17-8453-c005d183b5e8 -->
**#23110 UI Block now blocks all key presses in input fields** (Web)

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
* 2018-03-23 Created (Alpha stage).
<!--changelog CHANGELOG. DO NOT CHANGE THIS TAG. ANY CHANGES BELOW WILL BE DELETED.-->
