---
title: Release notes for Genus 10.6.
description: User-visible changes to Genus from release 10.5 to 10.6.
author: jtroset
---

# Release notes for Genus 10.6

## Introduction

This document lists all user-visible changes to Genus since the previous release.

This release note will be updated prior to the release and may also be updated as long as the release is available, e.g. with information of new patches or known issues. Please take note of the [installation and upgrading](#installation-and-upgrading) comments, and the release notes [change log](#change-log).

## Installation and upgrading

Prior to upgrading to this release, you must:

- Upgrade to the previous release. See the Release notes for the previous release for more information.
- Review the Expiry date of your Genus License File and install a new one if necessary.
- Review the rest of the release notes for this release.
- Please note that there does not exist any Genus Upgrade Assistant for this upgrade.

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
<!--ID 3d6d1744-0496-4086-9510-898570234055 -->
**#23348 Fixed bug in item spacing for repeating container** (Web)

Prior to 10.6, a bug caused Item Spacing for the Repeating Container-control to resolve "Auto" to 0 pixels, in contrast to the standard behaviour that resolves "Auto" to 8 pixels.
This has been corrected in 10.6, causing all Repeating Containers with Item Spacing "Auto" to have spacing larger than maybe first intended.
When upgrading to version 10.6, check all Pages where Repeating Container is in use and change the setting "Item Spacing" from "Auto" to "None" to retain an item spacing of 0 pixels.

<!--ID 4d272665-4040-4758-bd4d-d33a72749c64 -->
**#23349 The transition to Redis Sentinel requires Operator version >= 5.0.0** (Desktop;Web)

See release note 23343 for further details.

<!--ID e63f1012-b10a-4bc6-ba61-9d2443bd9fd1 -->
**#23350 Operator: The transition to Redis Sentinel requires Genus >= 10.6** (Desktop;Web)

See release note 23343 for details.

<!--rntype05-end   BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Major new functionality
<!--rntype06-start MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
There are no major new functionality in this release.
<!--rntype06-end   MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Minor new functionality
<!--rntype07-start MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 9d02ac5f-bc68-49e7-9f7e-310fbe5ca8ae -->
**#23345 Updated third party libraries for file conversion and document merge** (Desktop;Web)

Results from file conversions and document merge may be affected by Aspose upgrade.

Aspose.Cells 21.1.0 => 21.4.0
Aspose.Email 20.12.0 => 21.3.0
Aspose.Email (megaservice) 20.7.0 => 21.4.0
Aspose.Imaging 20.12.0 => 21.4.0
Aspose.PDF 21.1.0 => 21.4.0
Aspose.Tasks 21.1.0 => 21.4.0
Aspose.Words 21.1.0 => 21.4.0

<!--ID e6bd5307-248f-4f82-bc03-bc1b3066dc35 -->
**#23359 Title is shown in stead of name og Page in Sitemap** (Web)

When "auto" label is enabled for a Page in a Sitemap, the name of the page was displayed. The label will now be the title of the Page.

<!--ID 34fdb820-bbf0-414b-bb56-d04c17d57f43 -->
**#23363 Added year picker** (Web)

<!--ID fc90e6fd-35bf-4d0c-ba1b-7d12aab462b4 -->
**#23364 DateTime control** (Studio;Web)

<!--ID fa0a773b-9dbf-44c1-9890-6b274e5f6fbc -->
**#23373 More control shortcuts have been added to the DragMenu in the designer** (Web)

html editor for xhtml fields, selection lists, markdown editor, avatar, chip input

<!--rntype07-end   MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Resolved issues
<!--rntype08-start RESOLVED ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 3e911690-8daa-49f8-82e9-b4f373c3c168 -->
**#23344 Genus frequently shuts down with an error when I am browsing through OC properties in Studio** (Studio)

Occurs when an object class property is opened in Studio and the next/previous buttons are used to open an adjacent property.

<!--ID de54a2ea-f7a1-433d-bb05-fcd6655912b8 -->
**#23346 Fixed handling of database connectivity issues** (Services)

If the connection to a database dropped (e.g. due to nightly backups) Genus services would often fail to recover when the database came back online. During initialization (e.g. following a scheduled nightly process recycle) the Genus mega-service will now avoid caching data until successfully read from the database.

<!--ID 21d9d223-f929-421a-a638-d899f1028e5f -->
**#23354 Improved property editor for number format** (Studio;Web)

Improved information and added option to reset custom format from the format dialog.

<!--ID 81934ab0-44cc-4dfc-9a18-987109b187b1 -->
**#23355 Fixed problem with editing existing expressions in DataBinding in table cells** (Studio)

The editor expected the datatype to be string while any datatype should have been allowed.

<!--ID 6821c73c-a6c8-4811-bda2-558635c53d6b -->
**#23356 Improved visualization of column headers in Table to reduce amount of space required** (Web)

<!--ID 536bda0e-1618-4eb2-b6e5-0c4475508e3f -->
**#23357 New DateTime formats available for formatting datetime without seconds** (Web)

<!--ID a94967de-9eb9-4297-96a1-4f49daf3c39b -->
**#23358 Browse path generates incorrect table alias in SQL request**

Occurs if the browse path contains an expression using the "has value" or "has no value" operator.

<!--ID e44bdc35-0bff-40af-8201-fb3c4d2d4532 -->
**#23360 When exporting data to Excel files, columns are no longer automatically expanded** (Desktop;Services;Web)

When exporting data to Excel files, the file-utility-service will no longer automatically expand columns. This correction adheres to pre-Oak behaviour.

<!--ID e33e6a48-de2f-4936-a0ac-137be99dcaf9 -->
**#23361 Fixed sorting in SelectionList** (Web)

<!--ID dea3f0f4-60a6-41a7-b74c-655c2307f91d -->
**#23362 Fixed date picker opening when using date input field** (Web)

<!--ID 8cb49ea7-f483-4f48-9c0c-1fa2724c90df -->
**#23365 Fixed onActivate that did not work in Repeating Container initially** (Web)

<!--ID 4cb9c149-f500-4bac-b4f9-44fa3131cf96 -->
**#23366 Manul assignment of PK on web fails** (Web)

Fails with message "Identifier not assigned for new object of type <a-type>". Happens if a new object is created in a link in the sitemap, a data filter witin a page or using the navigate to page effect, and in the create object effect in a client action.

<!--ID bacd609a-92bf-4c5e-9494-ef1f64918df2 -->
**#23367 Binding of type expression in Display Field supports other datatypes than string** (Studio;Web)

<!--ID 2af9e59e-4d17-455c-9b11-371560563e46 -->
**#23370 Alignment in Display Field was not working** (Studio;Web)

<!--ID 50a17e33-36a9-4e53-b05d-5cfd0fd488b5 -->
**#23372 Show badge always false by default**

<!--rntype08-end   RESOLVED ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Known issues

Known issues are errors or lack of functionality. Known issues may be solved in a future release based on customer demand.
<!--rntype09-start KNOWN ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID c563c85c-0f40-49d4-803f-012d6dad46a1 -->
**#23353 Fixed issue where sorting in Table did not follow the user's settings for display format** (Web)

<!--rntype09-end   KNOWN ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Tips and hints

Tips and hints are design decisions or answers to support questions that may be of general interest.

There are no tips and hints specifically targeting this release.
<!--changelog CHANGELOG. DO NOT CHANGE THIS TAG. ANY CHANGES BELOW WILL BE DELETED.-->
