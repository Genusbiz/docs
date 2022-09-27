---
title: Release notes for Genus 10.16.
description: User-visible changes to Genus from release 10.15 to 10.16.
author: jtroset
---

# Release notes for Genus 10.16

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
There are no breaking changes in this release.
<!--rntype05-end   BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Major new functionality
<!--rntype06-start MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
There are no major new functionality in this release.
<!--rntype06-end   MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Minor new functionality
<!--rntype07-start MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 63c68cbb-bf28-4966-9887-8107d350e1a2 -->
**#23512 Callout data is available in dev tools** (Web)

<!--ID d0115d82-6da0-4df0-b54b-645ff8a9713e -->
**#23516 App Context Title** (Studio;Web)

A **context title** can now be added to the app bar by using the **Set App Context Title** effect.  The context title can be used to display information relevant to the context, for instance which company you are currently viewing the application as.

<!--ID 932f21ea-f882-4feb-9e19-99322d50c496 -->
**#23522 Assign values to child objects in create/modify object effects on web (built-in file data sources)** (Studio;Web)

It is now possible to create child objects in the Create/Modify Object effect in the Client Action designer for built-in file data sources (General File, Mail Message, ...). This allows the creation of for instance To-addressees for a Mail Message on the client.

User Story:
As a BE I want to assign values to 1:N relationships in a mail message data set using the create or modify object effect in a client action so that I can send the mail message to a given set of recipients with attachments.

<!--ID 4e6d73c5-b018-4348-acbf-a0f00d73d2c1 -->
**#23523 Dashboard: Hide Excluded is added as option for Column Category for Two Dimensional Grid** (Studio;Web)

<!--ID 42544ede-4259-4be7-a314-168147a4f9c7 -->
**#23524 Dashboard: Delete action added to error tiles as context menu** (Studio;Web)

Tiles containing (programming) errors can now be deleted by the user, using the delete action in the error tile context menu.

<!--rntype07-end   MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Resolved issues
<!--rntype08-start RESOLVED ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 5de383e0-f37a-4bb4-a8af-12899dac895a -->
**#23510 New password was not filled in suggested password in "Repeat Password"** (Web)

<!--ID 8e9d7928-17d1-43e6-91e6-7a541a8e4c08 -->
**#23511 Dividers were not visible in Page Designer** (Web)

<!--ID ede35bb4-a5e6-4b6a-9c32-0cbf39883055 -->
**#23513 Page Designer crashed when using custom breakpoint sizes** (Studio)

<!--ID 892a94c8-99b2-4e6c-92d6-258a38318631 -->
**#23514 Height of Autocomplete list in DropDown is restricted to improve reading** (Desktop)

<!--ID ea613f1d-a298-4779-901c-334dcf7e5acc -->
**#23515 Default code domain member not assigned when creating a new object from a client action** (Web)

If a default value formula not is defined for a field pointing to a code domain, the code domain member flagged as default should be assigned.

<!--ID 502df74d-27b4-419d-be2b-d642dfe9dd84 -->
**#23517 Fixed export of DateTime to Excel** (Desktop)

<!--ID cad3c7db-4980-462d-ba0f-4a46d484eb4b -->
**#23518 Fixed input of percent numbers** (Web)

<!--ID 23cbfd83-989d-4056-85f0-de05cd35822e -->
**#23519 Width of dialogs in Dashboard Designer was too small** (Web)

<!--ID c3581f30-cba4-4fdf-98d0-93d256c276fd -->
**#23520 Events in scheduler now has a minimum width** (Web)

<!--ID 1d3cff27-3615-47a5-bacf-05d0e7b99836 -->
**#23544 Improved UX for tables displaying "built-in" concepts (User Administration, Analytics & Insights,..)** (Web)

<!--ID 0392ca4d-0261-4e06-9cb1-0b4ed51a2507 -->
**#23553 IMPORTANT! Rules of type On Before Validate / On After Validate not executed on web**

Releated to rules defined for an object class. Rules defined on data source level within a module are executed as expected.

A patch is available both for release 10.17 and 10.16.

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
