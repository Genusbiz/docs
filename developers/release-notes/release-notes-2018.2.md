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

To access IBM DB2 databases Genus Services 2018.2 (18.20.54.0 or later) now requires "IBM Data Server Driver Package (Windows/x86-64 64 bit) Version 11.1 Mod3 Fix Pack3 iFix001" ([v11.1.3fp3a_ntx64_dsdriver_EN.exe](https://www.ibm.com/support/fixcentral/swg/downloadFixes?parent=ibm~Information%2BManagement&product=ibm/Information+Management/IBM+Data+Server+Client+Packages&release=11.1.*&platform=Windows+64-bit,+x86&function=fixId&fixids=DSClients-ntx64-dsdriver-11.1.3031.295-FP003a&includeRequisites=1&includeSupersedes=0&downloadMethod=http)).

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

<!--ID 93a5edad-ffeb-4913-bfab-19d1c0fbd130 -->
**#23114 Changed implementation of round(), roundUp(), and roundDown() functions** (Desktop;Services;Studio)

The following functions did not round floating-point values in a consistent matter, and have been rewritten for correct behaviour:

* Math.round()
* Math.roundUp()
* Math.roundDown()
* Real.round()
* Real.roundUp()
* Real.roundDown()

The _round()_ function now produces a result corresponding to "Round half away from zero" as described in [this Wikipedia article](https://en.wikipedia.org/wiki/Rounding#Round_half_away_from_zero). The _roundUp()_ and the _roundDown()_ functions correspond to ["round away from zero"](https://en.wikipedia.org/wiki/Rounding#Rounding_away_from_zero) and ["round towards zero"](https://en.wikipedia.org/wiki/Rounding#Rounding_towards_zero), respectively.

A new rounding function, _roundHalfToEven()_, has also been introduced, corresponding to the ["Round half to even"](https://en.wikipedia.org/wiki/Rounding#Round_half_to_even) rounding form, also called "bankers' rounding":

* Math.roundHalfToEven()
* Real.roundHalfToEven()

This rounding form is useful if you are adding rounded numbers.

<!--ID a9f3f9c6-c47e-4452-805f-35d2de0b29dc -->
**#23116 Multiple appmodels per appserver are no longer supported.** (Services)

<!--ID 39fa641f-8f5b-45df-a30f-a877466c778d -->
**#23120 Menu item Open in new Window is renamed in Forms**

When a control only have one open command, Genus added the Open in New Window menu item. Now we use the name the of the command instead of a predefined tekst. This means that many grids and controls now will have a different name on the open menu item. This was necessary to changes because Open in new window was in some cases not the best name choice.
On controls that has checked the open the default Form option, the menu item will now show Open + name on the concept.

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

<!--ID 7c07712f-d064-4ef4-82e5-a6ec8f6512a4 -->
**#23111 Modelling connection to a Genus Search** (Desktop;Services)

It is now possible to create a column with data interpretation Search. The search can be executed in the table context menu and in the reference field context menu. A search can also be executed in the Run a Search effect.

<!--ID dc304c3c-c416-43f9-8188-d7a45e12c856 -->
**#23112 Run a Search effect** (Desktop;Services)

The Run a Search effect executes a Genus Search connected to a modeled object. The effect has three different result types. 1. Return the number of objects from the result. 2. For each result we can create a object and add object identifier and name. 3. Open the Search in Genus (this option will not work on a server)

<!--ID 4bb6f1bf-5954-4cf2-aacd-67a925e52750 -->
**#23113 Analysis  Heatmap** (Desktop)

Added support for user selection.

<!--ID d6cec9b3-90e3-45e6-9a5b-249f37ce2732 -->
**#23117 Object class dialog - live update section moved** (Studio)

* **Live Update** section located in the **Events** tab moved to the **Data Provider** tab
* **Events** tab renamed to **Auditing**
* Option **Live Update/Objects are updated automatically** renamed to [**Enable Live Update**](https://docs.genus.no/developers/defining-an-app-model/data/object-class/modify-an-object-or-identifier-domain/data-provider.html#enable-live-update)
* Option **Live Update/Objects are updated when this property is changed** renamed to [**Aging Property**](https://docs.genus.no/developers/defining-an-app-model/data/object-class/modify-an-object-or-identifier-domain/data-provider.html#aging-property)
* Option **Live Update/Objects are updated by user initiated action** removed

<!--ID 860c80ce-9587-413e-9f5a-9365d3f8c29b -->
**#23119 Markdown now works with static content in text fields** (Web)

<!--ID 06593f97-f981-4ee4-9684-1df5ce03cf1d -->
**#23121 Paste security** (Desktop)

Copy and Paste Security is now added as functions on all Discovery objects with security and on searches.

<!--ID 6d0879be-c085-4bb2-8032-7e7202ff4a5b -->
**#23122 New lookup field implemented** (Desktop)

A lookup field that can search and select data from one datasource (rest-service etc) and show reference to another datatype

<!--ID f2042c91-d86d-41d4-84af-3cd2051b07b2 -->
**#23123 The "Consume a REST Service" effect now supports Client Certificate authentication** (Desktop;Services;Studio)

The **Consume a REST Service** effect now includes a new, optional **Certificate Thumbprint** field that can be used to attach a client certificate to the REST request. The certificate must be installed in the Windows certificate store and is referenced using its thumbprint (hexadecimal string). Please refer to the article [Consuming Web Services with certificate based authentication](https://docs.genus.no/developers/defining-an-app-model/services/web-services/consuming-web-services-with-certificate-based-authentication.html) for details about how to install a client certificate. Please note that, in contrast to consuming (SOAP based) web services, Genus Apps may consume REST services both on the client side and on the server side. The client certificate needs to be installed on the client side or on the server side accordingly, and needs to be accessible from the calling Windows account. You may use the Current User or the Local Machine certificate store, depending on your preferences.

<!--ID a69920c0-d28c-4199-a527-fd8f2e3e3e5a -->
**#23124 Optimalization in the Create Objects effect** (Desktop;Studio)

When createing a large xml-document from multiple data sources with many objects we can use the Filter Connection option to make a filter connection between the data sources.

<!--ID 574a7c04-e2c3-4453-b9bf-305c72a9e51b -->
**#23126 Added support for merging Excel workbooks into a PDF document** (Desktop)

Support for merging Excel workbooks into a PDF or Word document added to the **Merge Documents** effect.

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

<!--ID c96d9a82-3ab8-457b-b8d5-7533ae38598d -->
**#23118 Analysis - Subsets** (Desktop)

Fixed an issue where if the user tried to apply selections (via subsets) to a datasource that was not directly used in the analysis. The selections would not be applied. 
This worked as expected in Genus 17.5 and older versions, but due to performance optimizations it stopped working in 18.1.

<!--ID af1f8f5d-8e37-4802-b614-f2ad3e542ac1 -->
**#23125 Preview of Word documents not updated on navigate** (Desktop)

When navigating to the next or previous object in a form containing a preview control, the preview is not updated if the attached file is of type MS Word document.

<!--rntype08-end   RESOLVED ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Known issues

Known issues are errors or lack of functionality. Known issues may be solved in a future release based on customer demand.
<!--rntype09-start KNOWN ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 46745b3b-f40b-4ab9-a4c4-bb193b720464 -->
**#23115 Datamarts is not compatible with solutions having multiple appmodels on an app server.** (Desktop;Services;Studio;Web)

Loading of datamarts in solutions where multiple appmodels are assigned to single app-servers may trigger random stability issues. Datamarts may stop and become unavailable when certain combinations of appmodel deploy and modifications to datamart occurs. 

Multiple appmodels per appserver is not supported when using datamarts.

<!--rntype09-end   KNOWN ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Tips and hints

Tips and hints are design decisions or answers to support questions that may be of general interest.
 
There are no tips and hints specifically targeting this release.

## Change log
* 2018-03-23 Created (Alpha stage).
<!--changelog CHANGELOG. DO NOT CHANGE THIS TAG. ANY CHANGES BELOW WILL BE DELETED.-->
