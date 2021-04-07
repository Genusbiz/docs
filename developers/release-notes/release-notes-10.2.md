---
title: Release notes for Genus 10.2.
description: User-visible changes to Genus from release 10.1 to 10.2.
author: jtroset
---
# Release notes for Genus 10.2

## Introduction

This document lists all user-visible changes to Genus since the previous release.
 
This release note will be updated prior to the release and may also be updated as long as the release is available, e.g. with information of new patches or known issues. Please take note of the [installation and upgrading](#installation-and-upgrading) comments, and the release notes [change log](#change-log).

## Installation and upgrading
 
Prior to upgrading to this release, you must:
* Upgrade to the previous release. See the Release notes for the previous release for more information.
* Review the Expiry date of your Genus License File and install a new one if necessary.
* Review the rest of the release notes for this release.
* Please note that there does not exist any Genus Upgrade Assistant for this upgrade.
 
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
<!--ID f173a63f-0f77-4433-880f-b9f63b714741 -->
**#23277 Initial MySQL 5.7 support (Amazon Aurora)** (Desktop;Web)

MySQL is now a supported database vendor. This allows Amazon Aurora based solutions.

<!--rntype06-end   MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Minor new functionality
<!--rntype07-start MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 9c8421fd-ea52-4940-8a17-346697863a45 -->
**#23274 Added GX language features** (Desktop;Services;Studio)

A few new string functions have been introduced:

* **String.split(chunkSize)** -- Splits a string into chunks of a fixed size. Returns a sequence of strings. Depending on the current string length and the specified chunk size, the last string returned may be smaller than the specified chunk size.
* **String.characters()** -- Splits a string into a sequence of characters. This is the same as calling String.split(1).
* **String.characterValue()** -- Returns an integer representing the Unicode value of a character. Throws an exception if the specified string does not contain exactly one character.

A new iterator operation has been introduced:

* **collection.collect( *elem* | an expression using *elem* )** -- Iterates the collection and returns a sequence where each element has been transformed. The expression acts as a transform to be applied to each element.

A collection of type Sequence or OrderedSet returns a Sequence. A collection of type Set or Bag returns a Bag.

<!--rntype07-end   MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Resolved issues
<!--rntype08-start RESOLVED ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID accdd428-8aaf-4c8b-8c02-e6fb20b8be8e -->
**#23276 Table columns in Dashboard** (Desktop)

Problem with resizeing columns is now fixed and its easyer to set column widths.

<!--ID f6d898d4-26b9-41c7-91c2-c2b378c4bfbc -->
**#23278 Dashboards referencing deleted Dashboards no longer crash** (Desktop)

Dashboards referencing deleted Dashboards in an "Open Analysis" command, would crash on opening the designer, and on executing the Command.

<!--ID ab031844-edda-421a-9c91-5a4f1005df7f -->
**#23279 Period Shift now works in Dasbhoard Tables** (Desktop)

<!--ID 371410fc-b45a-415d-9fd5-95d468d7c859 -->
**#23281 Responses with SOAP headers annotated with attribute mustUnderstand="1" caused an exception** (Services)

When consuming a SOAP webservice one or more SOAP headers may be returned from the service. If the web service retunred one or more SOAP headers annotated with a mustUnderstand="1" attribute the Consume a Web Service effect would throw an exception and the consuming action would simply fail. This behavior has now been corrected. Please note that the consuming action must assume the responsibility of understanding SOAP headers with mustUnderstand="1".

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
* 2020-11-10 Created.
<!--changelog CHANGELOG. DO NOT CHANGE THIS TAG. ANY CHANGES BELOW WILL BE DELETED.-->
