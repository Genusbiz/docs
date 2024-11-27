---
title: Release notes for Genus 11.3.
description: User-visible changes to Genus from release 11.2 to 11.3.
author: jtroset
---

# Release notes for Genus 11.4

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
<!--ID 77c7b851-9098-4ae2-aa96-cd6fed1a4ea6 -->
**#23679 Property Encoding is no longer supported**

This mechanism was used to handle binary data (varbinar, blob, etc) stored as Base64 in a database.

Genus will no longer produce such data.

If Genus needs to read binary data stored as Base64, use a vendor specific conversion (BASE64_DECODE, etc) on the field.

To detect if the mechanism is in use, query with SELECT * FROM g_object_class_property WHERE pen_tp <> 0

<!--rntype03-end   END-OF-LIFE. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Deprecated functionality

Deprecated functionality is available in this release, but will (most probably) no longer be available in the next release.
<!--rntype04-start DEPRECATED. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
There is no deprecated functionality in this release.
<!--rntype04-end   DEPRECATED. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Breaking changes

This section lists important changes introduced in this release. You will need to use this list in order to understand the changes you might need to make to your application to support the new release.
<!--rntype05-start BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 2fdcbc6e-f4e5-4e89-a171-55800ec9f34d -->
**#23677 Need to specify Sql Server 2022**

To handle DATETRUNC, *Sql Server 2022* is introduced as a vendor version.
Models with database vendor version set to *Sql Server 2016* running on 2022 **must change this setting**.

<!--ID 23508d6c-56a8-4dfd-80af-620bed13a445 -->
**#23680 Data Marts are now part of the published model**

Data marts must be edited in the origin runtime, and becomes available to other runtimes as part of a model publication.

<!--ID 2ccf36de-43b6-4b90-afdb-81363f9f0dc9 -->
**#23706 No objects filter will now be taken into account**

No objects filter will now be taken into account. In some cases, when transferring data to components, No Objects was ignored and all Objects in the data set was shown. 
This is now fixed, so in these cases the data set will no longer show any data.

<!--rntype05-end   BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Major new functionality
<!--rntype06-start MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
There are no major new functionality in this release.
<!--rntype06-end   MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Minor new functionality
<!--rntype07-start MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 1fd342a7-49c3-4a21-97b7-b7db6df0cc48 -->
**#23678 Auto Focus target changed on Dialog, Callout, and Sidebar**

The Dialog, Callout or Sidebar is now put in focus when opened, instead of its first descendent input control

<!--ID 55c922e9-8f35-4917-bbdd-72530cf0de3a -->
**#23681 User Management in Desktop**

Adding a new user from a table or form in desktop is now routed to the User Administration web app.
There is no direct mapping of user name, account profile, or such on the web (yet).
If this functionality is in demand, let ut know.

<!--rntype07-end   MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Resolved issues
<!--rntype08-start RESOLVED ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
There are no resolved issues in this release.
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
<!--changelog CHANGELOG. DO NOT CHANGE THIS TAG. ANY CHANGES BELOW WILL BE DELETED.-->
