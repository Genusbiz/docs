---
title: Release notes for Genus 10.4.
description: User-visible changes to Genus from release 10.3 to 10.4.
author: jtroset
---

# Release notes for Genus 10.4

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
<!--ID df3051f0-7eca-4485-8960-b8e5554380d2 -->
**#23313 Changed items in Lookup to display a link and changed activation from Ctrl+Click to normal Click** (Web)

<!--rntype05-end   BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Major new functionality
<!--rntype06-start MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
There are no major new functionality in this release.
<!--rntype06-end   MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Minor new functionality
<!--rntype07-start MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 9699bac5-bad4-453c-b374-c85c2f6809d4 -->
**#23311 It is now possible to override Sentry DSN endpoints for all microservices**

<!--ID cef64fe5-931a-4fea-952a-72823734fd88 -->
**#23319 Added support for saving changes in Dashboard Designer using Ctrl+S** (Web)

<!--ID 315abe3d-c601-4877-861b-0ed3700fb256 -->
**#23320 Name of latest version from a database vendor is now suffixed with " or later"** (Studio)

This is to specify that support for version "n" also indicates support for versions later than "n"

<!--rntype07-end   MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Resolved issues
<!--rntype08-start RESOLVED ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 36854628-2b8c-4246-b03d-b766ffeb389b -->
**#23309 "On Value Changed"-Events did not trigger when page was opened as modal via client actions.** (Web)

<!--ID d56098da-dfde-43e0-9010-1d72da87878c -->
**#23312 Changed how Elasticsearch endpoints are configured in helm values** (Services)

Insead of having to provide both the host and the port, it is now configured in an array:
```
Old:
genus-core-services.elasticsearch.host: https://elastic.example.com
genus-core-services.elasticsearch.port: 9200 
New:
genus-core-services.elasticsearch.hosts: ["https://elastic.example.com:9200"]
```
This also makes it possible to provide several endpoints, which are used in a round robin fashion.

<!--ID d5cce205-2fcd-4262-99ae-6ebd00409ec1 -->
**#23314 App designer fails when adding an URL lik to sitemap** (Studio)

<!--ID 93da22f5-b1cc-4d86-ae04-294895fc7e03 -->
**#23315 Navigate to page in new tab displays a meesage if the current page contains unsaved data** (Web)

Should not be asked to save changes since the page is not abandoned or left.

<!--ID 1a5123e5-6595-4bf5-b62c-f931ff8f5f53 -->
**#23316 Parsing of expressions defined in Studio containing Norwegian specific letters fails on web** (Web)

Occurs if you have an object class containing a letter such as &aelig;, &oslash;, or &aring; which is referenced in an expression (e.g. a value formula or data validation defined in Studio).

<!--ID c4800c60-7ead-48f3-a1a0-65c51a26ab20 -->
**#23321 Border was not visible on Diagram items with white color** (Studio)

<!--ID 5d79f13a-7b4f-41bc-86ca-e746a9c12299 -->
**#23322 Fixed errors related to how Helper Text was displayed in various Web controls** (Web)

<!--ID b85eb3ba-341c-46de-a8c6-b119f5dec5c3 -->
**#23327 Fixed automatic naming of controls when added to Page** (Web)

<!--rntype08-end   RESOLVED ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Known issues

Known issues are errors or lack of functionality. Known issues may be solved in a future release based on customer demand.
<!--rntype09-start KNOWN ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 520555cb-7d35-4455-8b13-d544652a9e4e -->
**#23318 Fixed error in Theme editor when reading theme data** (Desktop)

<!--rntype09-end   KNOWN ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Tips and hints

Tips and hints are design decisions or answers to support questions that may be of general interest.

There are no tips and hints specifically targeting this release.

## Change log

- 2020-11-10 Created.
<!--changelog CHANGELOG. DO NOT CHANGE THIS TAG. ANY CHANGES BELOW WILL BE DELETED.-->
