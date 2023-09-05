---
title: Release notes for Genus 10.22.
description: User-visible changes to Genus from release 10.21 to 10.22.
author: jtroset
---

# Release notes for Genus 10.22

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
<!--ID 70e60267-4917-4429-6443-a550db480154 -->
**#23623 All instances of Genus for an application model must run in the same namespace in Kubernetes**

From version 10.22, every instance of the Genus runtime for a given application model must run in the same namespace. This is a **breaking change** from how it works before 10.22, where each instance ran in its own namespace; usually one each for origin, green and blue, as well as one for Genus Operator.  

Upgrading to this version will require a few minutes of downtime, and will require users to log in again.

This change will not impact performance or resource usage.

To upgrade to this version, a new namespace must be created using the genus-bootstrap image version 3.0.0 or later. Talk to Cloud Services for support with upgrading. This new namespace will replace the existing namespaces.

<!--rntype05-end   BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Major new functionality
<!--rntype06-start MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
There are no major new functionality in this release.
<!--rntype06-end   MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Minor new functionality
<!--rntype07-start MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 25b452f7-45d7-889c-b6ad-3f6d336d21a2 -->
**#23624 New Client Action Effect: Merge Data To a Document**

<b>Merge Data To a Document</b> is added as a new Client Action effect. The effect allows documents to be produced on the client using the File Utility Service directly, reducing the need for server roundtrips and transfering of file blobs to and from the server.
<br><br>

Excerpt from the Genus documentation:

*Merging data is the process of producing one or more (and potentially large number of) documents from a template and a data source.*

*The merge effect allows you to merge data to a Microsoft Word document or a Microsoft Excel workbook.*


*Merged documents may be saved in various formats, like variants of the native Microsoft Word and Microsoft Excel formats, but also formats like Adobe Portable Document Format (pdf), Html, Open Document and more.*

<!--ID caa3725e-a416-8337-6828-5b6617feed44 -->
**#23625 New Client Action Effect: Combine Documents**

<b>Combine Documents</b> is added as a new Client Action effect. The effect allows documents to be combined on the client using the File Utility Service directly, reducing the need for server roundtrips and transfering of file blobs to and from the server.
<br><br>

Excerpt from the Genus documentation:

*Combines two or more documents into a single document. The output document can be saved as a PDF document or a Word document.*

<!--ID 52a33d07-5e5d-f3bf-fef6-cf8a2419c085 -->
**#23626 New Client Action Effect: Create a File**

<b>Create a File</b> is added as a new Client Action effect. The effect allows files to be created on the client using the File Utility Service directly, reducing the need for server roundtrips and transfering of file blobs to and from the server.

<!--ID 70ac2a4d-670e-62d1-672f-07c61567882a -->
**#23627 General File can be assigned in the Open File effect, allowing files to be opened inline in browser**

<!--ID b0a9d131-e8a9-4902-8ab2-6b080427fe41 -->
**#23628 Preview of MS Office documents on web**

Support for previewing MS Office documents added to the File Preview control (Excel, Word, and Power Point).

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
