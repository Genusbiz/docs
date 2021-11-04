---
title: Release notes for Genus release 2019.1.
description: User-visible changes to Genus from release 2018.3 to 2019.1.
author: jtroset
---

# Release notes for version 2019.1

## Introduction

This document lists all user-visible changes to Genus Apps since the previous release.

This release note will be updated prior to the release and may also be updated as long as the release is available, e.g. with information of new patches or known issues. Please take note of the [installation and upgrading](#installation-and-upgrading) comments, and the release notes [change log](#change-log).

## Installation and upgrading

Prior to upgrading to this release, you must:

- Upgrade to the previous release. See the Release notes for the previous release for more information.
- Review the Expiry date of your Genus License File and install a new one if necessary.
- Review the rest of the release notes for this release.
- Please note that there does not exist any Genus Upgrade Assistant for this upgrade.

For general information about installing and upgrading Genus Apps, see [here](../../../installation-and-configuration/index.md). We especially recommend reviewing the [System Requirements](../../../installation-and-configuration/system-requirements.md) article.

## Important issues in this release

There are currently no critical issues in this release.

<!--rntype01-start INSTALLATION / UPGRADE. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->

<!--rntype01-end   INSTALLATION / UPGRADE. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
<!-- release note type 2 is missing. That's ok.-->

## End-of-life functionality

End-of-life functionality is functionality that was available in the previous release, but is no longer available in this release.

<!--rntype03-start END-OF-LIFE. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 57d04bda-a008-411e-98c0-1b21cca60f60 -->

**#23215 Gantt and Timeline controls**

Both the Gantt and Timeline user interface controls will be discontinued. Timeline functionality will be considered added in a later release, but tailored to better fit in with our other controls.

<!--rntype03-end   END-OF-LIFE. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->

## Deprecated functionality

Deprecated functionality is available in this release, but will (most probably) no longer be available in the next release.

<!--rntype04-start DEPRECATED. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->

There is no deprecated functionality in this release.

<!--rntype04-end   DEPRECATED. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->

## Breaking changes

This section lists important changes introduced in this release. You will need to use this list in order to understand the changes you might need to make to your application to support the new release.

<!--rntype05-start BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID f1eeb70e-0169-4998-bed9-ccb1dcee1c1d -->

**#23160 Change of internal memory manager**

We are changing memory manager in Genus Studio, Genus Desktop and some core services in Genus Services. Our tests have shown that the new one have better performance when parallel threads allocate/deallocate memory at the same time. This may result in a higher memory usage than the old one. The old one will still be used for debug purposes, and in practice be present in all Pre-Alpha and Alpha versions.

Before and after the upgrade, extra time should be allowed for testing the impact of the new memory manager with your specific app model. Memory footprint and general performance needs to be tested, both client-side (_Genus Desktop/Genus Studio_ -- Genus.exe) and server-side (the IIS worker process _Genus Services Web Site AppPool_, aka _"megaservice"_ -- w3wp.exe).

<!--rntype05-end   BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->

## Major new functionality

<!--rntype06-start MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->

There are no major new functionality in this release.

<!--rntype06-end   MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->

## Minor new functionality

<!--rntype07-start MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 09edb766-7197-4672-8121-bf67f69379d2 -->

**#23168 Added new ribbom item to RTF field** (Desktop)

Added insert table and insert picture ribbon items on the RTF control

<!--ID 8e39167c-8612-49be-8b7c-fd27d7b458be -->

**#23213 Added Sizegrip on form for Local Objects** (Desktop)

<!--rntype07-end   MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->

## Resolved issues

<!--rntype08-start RESOLVED ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID cbcdfa7d-7e6c-4c34-9f3e-ed1e70d514a0 -->

**#23164 Autorefresh on published reports** (Desktop)

If the Automatic Refresh option was set for a report published on an object, the report was first refreshed without the object as a filter, and then with object as a filter. The end result was correct, but the performance was not optimal.

<!--ID 8560fbc4-48e7-48ab-aee8-9bf7362a0fc4 -->

**#23165 Error in copying part objects in sub task** (Desktop)

Fixed error when creating part objects in a sub task and copying them back to the master task

<!--ID 21eaf2b1-108a-4344-8be5-9db4dcd46a99 -->

**#23167 Analysis: Resolved an issue with subtraction operator** (Desktop;Web)

If a formula defined in the analysis designer consisted of trailing subtractions, the output of the formula would be evaluated incorrect. For example: 100 50 25, would result in 75, instead of 25.

<!--ID cb022e0f-3b31-4c32-9175-92469fcaba5d -->

**#23169 Error in advanced lookup field** (Desktop)

Fixed problem with advanced lookup field. The lookup list did not always popup

<!--ID a306665a-8d17-4cae-b916-547856a643c7 -->

**#23170 Fixed bug where values were not deleted correctly in some cases** (Web)

<!--ID 4fd53f02-9523-47dd-884c-43f1a66ac005 -->

**#23202 Browsing through objects in a form containing an RTF editor marks the objects as changed** (Desktop)

In a form containing an RTF editor the object is marked as changed when the user browses through objects using the next/previous functionality. The save button is immediately enabled, and it is not possible to go to the next or previous object before the object is saved.

<!--ID 9e3dc11f-9857-4490-85fe-6585f06b1540 -->

**#23203 Data validation error for an object class property containing an RTF document not displayed correctl** (Desktop)

If the data size is set for an object class property containing an RTF document, violation of the size is not displayed correctly by the RTF editor.

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

- 2019-02-20 Released (builds starting with 18.40.1)
- 2019-01-25 Created.
<!--changelog CHANGELOG. DO NOT CHANGE THIS TAG. ANY CHANGES BELOW WILL BE DELETED.-->
