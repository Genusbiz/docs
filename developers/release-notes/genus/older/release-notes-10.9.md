---
title: Release notes for Genus 10.9.
description: User-visible changes to Genus from release 10.8 to 10.9.
author: jtroset
---

# Release notes for Genus 10.9

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
<!--ID 7a9ddada-209e-4359-af51-77cce5467116 -->
**#23420 Operator: Environment availabilty scheduling requires Genus >= 10.9** (Operator)

Operator requires G_Directory column "dir_environmnent_availability_schedule" in order for environment availability scheduling to work. This was introduced with Genus 10.9.

See release note  [23417](genuslink:https://actio.genus.net/--/?LinkType=OpenLink&Version=1&Verb=open&ClassId=40891110&ObjectId=37931e20-9adc-4611-bfaf-8ae8042c19bf&DisplayName=23417%2010.9%20Environment%20availability%20schedule%20in%20Genus%20Operator) for further details.

<!--ID 7c2836f8-2b3c-49dc-ae15-9247fa6f8cab -->
**#23424 Old data mart load plan mechanism is removed** (Desktop)

The old data mart load plan is removed. It is replaced with the new load plan mechanism which offers declarative availability, with heuristic loading as an option.

Old load plans must manually be converted to new load plan setup.

<!--ID 1da83dd2-e7ef-4b10-9250-139c07c0f579 -->
**#23425 Updated third party libraries for file convesion and document merge (Aspose)** (Desktop;Web)

The following Aspose libraries have been updated:

- Aspose Cells: 21.7.0 => 21.9.0
- Aspose Email: 21.7.0 => 21.8.1
- Aspose Imaging: 21.8.0 => 21.9.0
- Aspose PDF: 21.7.0 => 21.9.0
- Aspose Tasks: 21.7.0 => 21.8.0
- Aspose Words: 21.8.0 => 21.9.0

File conversion results should be verified after upgrade.

<!--rntype05-end   BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Major new functionality
<!--rntype06-start MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 37931e20-9adc-4611-bfaf-8ae8042c19bf -->
**#23417 Environment availability schedule in Genus Operator** (Operator)

## **Experimental feature**: Environment availability schedule in Genus Operator
It is now possible to schedule availability windows for Active, Passive and Origin environments in Genus Operator. 

Enabling this functionality will allow operators to specify when the environments should be up, using Genus Operator.

To enable this functionality, set the helm value ``genus-kubernetes-operator-service.environmentAvailabilityControlEnabled`` to ``true``.

<!--ID 75eca5e4-1cc0-4420-842e-3fcaa101ecf6 -->
**#23421 Data Mart and Dashboard configuration has been moved from desktop to Analytics & Insights on web** (Desktop;Web)

<!--rntype06-end   MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Minor new functionality
<!--rntype07-start MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID c80f6f37-9bac-4177-9b76-f79e927614e1 -->
**#23426 New class types and functions in GX** (Web)

**New class type**

- *WebRuntime* - represents the runtime environment on the web client

**New functions**

- *WebRuntime.hasPersistableChanges()* - returns TRUE if there are any changes that can be persisted in the database.
- *WebRuntime.hasPersistableInvalidChanges()* - returns TRUE if there are any changes that can be persisted in the database, but som of the changes are invalid.
- *WebRuntime.currentPage().isOpenedAsModal* - returns TRUE if the current topmost page is opened modal.

<!--ID d680bfbc-0b39-43c9-8e6d-cbb03d983b84 -->
**#23427 Added functionality to scheduler component.** (Web)

The scheduler component now supports:
- Week and month view.
- Option to disable user's ability to change time resolution.
- Formatting on from and to date/time.

<!--ID cfdfb685-66a1-4d31-8610-81c4316c2eb3 -->
**#23428 Modify User Account effect - identity providers** (Studio)

Added setup for defining connected identity providers for an account. Providers can either be added or modifed, or replaced.

<!--ID 70abe90c-6214-418b-a52a-0199651c2fa0 -->
**#23429 New Page Data Event type: On Before Selection Changed** (Studio;Web)

On Before Selection Changed introduced as new Page Data Event type. This event type is executed before the selection is changed, and can hence be used to ensure data is handled and valid before the selection is changed by executing actions. These actions can for instance be Save Changes, Query Save Changes or a custom made Client Action.

Existing "On Selection Changed" events are converted to "On After Selection Changed".

<!--ID ee92872c-7f21-4c9f-a005-8678a4b5b2e3 -->
**#23430 New Table Property: Keep New Objects in Top of View** (Web)

Added new property to flag if new objects should be kept on top (regardless of Sort Order) in Table control.

<!--ID 70aa81dc-0c7a-4037-b783-84d76dc2443e -->
**#23431 It is now possible to define selection validations on data sets that are evaluated before selection.** (Web)

<!--ID 07daadf4-b097-4b32-8362-e237c5fe35ac -->
**#23440 Defaul value for "Lock Positon" flag is set to "true" in Dashboards** (Web)

This entails that the user will not be able to resize or move Tiles, unless the flag is manually set to "false"

<!--rntype07-end   MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Resolved issues
<!--rntype08-start RESOLVED ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 5a3883e6-90e2-4424-b3a5-18ddbf2bc0cc -->
**#23419 Fixed error importing into XML datasources based on schema with multiple root elements** (Studio)

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
