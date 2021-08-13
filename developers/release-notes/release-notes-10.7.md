---
title: Release notes for Genus 10.7.
description: User-visible changes to Genus from release 10.6 to 10.7.
author: jtroset
---

# Release notes for Genus 10.7

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
<!--ID a579820f-f608-4f2f-91dc-a74a72e9ea54 -->
**#23385 Filtered Data Sets** (Web)

When creating objects in a Client Action, the object will no longer magically appear in a Filtered Data Set in a page based on the same Data Source. Use Client Action Interface to transfer the new Object to the page

<!--ID 2d6f34b4-ce9c-4d80-870d-e6ceeb6ce152 -->
**#23387 Two-factor authentication requires new environment secret** (Desktop;Services;Studio;Web)

<!--ID adde2580-31e0-4502-9ebb-7f871fbc89d2 -->
**#23391 Operator: Replaced kubernetes-operator-service with genus-operator**

Kubernetes-operator-service is replaced by genus-operator, which contains both backend and frontend services.

Read the documentation for how to configue the new Genus Operator [here](https://docs.genus.no/developers/installation-and-configuration/deploying-genus-10-on-kubernetes/genus-operator/index.html).

<!--rntype05-end   BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Major new functionality
<!--rntype06-start MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 9690cc4b-b0be-4164-b54a-40ebaf61bcb4 -->
**#23384 Filtered and Refined Data Sets** (Web)

There are now only to types of Data Sets, Filtered and Refined Data Sets. Member Data Sets are converted to Filtered Data Sets with no Objects as Default Filter.

This changed allow us to have multiple Filtered Data Sets (with different data filters) in one page.

<!--ID 5cedc210-f23a-4057-86ff-d1d859575688 -->
**#23392 Operator: Introduced GUI**

View and manage Kubernetes entities such as namespaces, deployments and pods with the new graphical user interface for operator.

This requires an update to the new Genus Operator helm chart, which should be deployed instead of the old genus-kubernetes-operator-service helm chart.

<!--rntype06-end   MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Minor new functionality
<!--rntype07-start MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 91963e07-ffc1-4dc2-ac6b-c943ce60fd26 -->
**#23371 Default icons are used on built-in actions in action bar if "Icon: Auto" is chosen.** (Web)

<!--ID c4416f61-eefa-4c07-bd3c-59e6faeebb00 -->
**#23377 Enable search and enable pagination are available on Navigate to Page effect.** (Web)

<!--ID 440751c4-000c-4560-b1c6-628dbd3a4609 -->
**#23393 Operator: Added routing rule to alleviate gateway service frontend traffic**

An ingress rule was added in order to bypass the gateway service for requests for static web-content. This should improve performance for routing calls to the various microservices.

<!--ID c7003ed5-cf1f-41ed-ade8-6ecf538fb75b -->
**#23397 A "Find References" button on the data set section of page- and action-designer.** (Web)

<!--ID fb549125-9fe7-464b-a320-d42173f4f793 -->
**#23398 Added dddd dd.mm.yyyy, ddd dd.mm.yyyy and a relative date that only counts days, not hours** (Web)

<!--rntype07-end   MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Resolved issues
<!--rntype08-start RESOLVED ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 96b300c2-3e65-4f91-9e3c-b9a834c36784 -->
**#23375 Incorrect warning in data mart designer for data source populated by a local action** (Desktop)

Warning: "Action used for populating data can not reference other data sources.". The warning is displayed even if there are no references. However, the data mart is loaded correctly.

<!--ID e3ab1ec8-6d78-4b72-8375-89dfa9da4535 -->
**#23376 GX: Function firstInDay for a calendar time value returns incorrect result** (Web)

The result is equal to the result returned by the function firstIn7DaysWeek.

<!--ID de21e76c-84b0-4261-ba1a-09899c7de85f -->
**#23379 Fixed problem in Page Designer when dragging fields into a table in Control View** (Studio)

<!--ID ca92bb0c-827b-4ee0-a962-b380667fb9d9 -->
**#23380 Improved filtering in Table Column on Web** (Web)

<!--ID f6114808-9324-424e-a265-9423de354f6b -->
**#23381 Fixed Reset Filter in Table Column so that the filter was completely cleared** (Web)

<!--ID b673010f-190b-401f-a9e8-d5fa221fbfd3 -->
**#23382 Fixed problem executing actions from Table Cell** (Web)

<!--ID 42341e7f-f210-46c2-97fb-6cf6d6e826a0 -->
**#23383 Fixed incorrect placement of selection rectangle i table editor in Page Designer** (Studio)

<!--ID 2257cd79-a8d5-479b-89c0-7124de23c216 -->
**#23386 Made the input field clickable so that you can mark text and delete it** (Web)

<!--ID cb2b9cd9-9781-4dd4-b908-2256773bddd7 -->
**#23388 Data sets are default collapsed under insert content in page designer.** (Studio)

A data set will be default expanded under insert content if it is the only data set. Expanded/collapsed state of data sets under insert content will now persist when navigating between locations in the page designer.

<!--ID 7a6bd2bf-9ad3-4953-8d5e-ca4c65e5be51 -->
**#23389 Improved support for using expressions in Display Field** (Studio;Web)

<!--ID e36d9726-bc1c-4a87-97a1-202cf3dc86ab -->
**#23390 Added elipsis overflow for the CompositionObjectValueAssignments table** (Studio)

<!--ID bbcda12e-5926-4c22-b857-37977661b8e1 -->
**#23394 Improved support for retaining user state when reloading data in Table** (Web)

<!--ID ad32ca63-7b67-48bd-9e19-76fdf91075d0 -->
**#23395 Dropdown did not use Display Format when sorting options** (Web)

<!--ID 0ece4499-0a58-421c-8066-de1c0e1a2723 -->
**#23396 Value formulas defined in a data source or object class not always recalculated on web** (Web)

The problem did occure if one value formula (A) was dependent of another value formula (B). In some cases formula A was recalculated before formula B, and the value for formula A did not change.

<!--ID ef9f6805-095c-46f7-ac6a-db4b2f18850c -->
**#23400 Find references and reference checks when deleting objects are more consistent.** (Web)

References to data sets and fields on data sets will also be regarded as indirect references to object classes, data sources, and their respective fields.

References found in data sets and event handlers now select the individual row of the respective data set or event handler, instead of just navigating to the data or event handler page.

<!--ID f1277b1e-ce1c-42f7-ae6c-f35ab46d1a70 -->
**#23402 Fixed issue where Table looses focus when inline editing objects in Creating state** (Web)

<!--ID 0689a2d5-8d79-491a-aba1-93f7debfad11 -->
**#23403 Fixed problem setting conditional colors on Table rows for new objects** (Web)

<!--rntype08-end   RESOLVED ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Known issues

Known issues are errors or lack of functionality. Known issues may be solved in a future release based on customer demand.
<!--rntype09-start KNOWN ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
There are no known issues in this release.
<!--rntype09-end   KNOWN ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Tips and hints

Tips and hints are design decisions or answers to support questions that may be of general interest.

There are no tips and hints specifically targeting this release.
<!--changelog CHANGELOG. DO NOT CHANGE THIS TAG. ANY CHANGES BELOW WILL BE DELETED.-->
