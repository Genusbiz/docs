---
title: Release notes for Genus 10.5.
description: User-visible changes to Genus from release 10.4 to 10.5.
author: jtroset
---

# Release notes for Genus 10.5

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
<!--ID b13c9736-4b44-4795-a9e9-7b0bdcb81978 -->

**#23271 Cross-Origin Resource Sharing (CORS)** (Services;Studio)

After upgrading to Genus 10 Update 1 you have to update the Cross-Origin Resource Sharing (CORS) settings in Genus Studio. Open Genus Studio, click Administration -> Settings, scroll down to "Cross-Origin Resource Sharing (CORS)" and enter all Origin URLs that should be allowed for this solution, e.g.

- https://xyz.company.com
- https://xyz-origin.company.com
- https://xyz-blue.company.com
- https://xyz-green.company.com

You may add a port or a wildcard port (':\*', i.e. meaning any port is allowed) like this:

- https://xyz.company.com:8443
- https://xyz.company.com:\*

Entering an Origin URL that contains a single wildcard character ('\*'), 'null', or '' is not supported.

<!--rntype05-end   BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->

## Major new functionality

<!--rntype06-start MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->

There are no major new functionality in this release.

<!--rntype06-end   MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->

## Minor new functionality

<!--rntype07-start MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->

There are no minor new functionality in this release.

<!--rntype07-end   MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->

## Resolved issues

<!--rntype08-start RESOLVED ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 6ac5898c-6574-4a37-ab8f-a42215e4a5ff -->

**#23267 Preview of mhtml file not updated when switching between files** (Desktop)

<!--ID c70a71e7-475b-4580-8914-789fd878a428 -->

**#23269 Corrected an error which occurred when plotting more than ~2000 objects in a chart** (Desktop)

<!--ID e2305fb5-623a-4d16-9cbc-6772af7cd783 -->

**#23272 Analysis Conditional Symbols and Text are no longer linked after duplicating a Tile** (Desktop)

After duplicating a Tile, conditional values were "linked" between the two tiles. Changing a conditional value in either the clone or the cloned, would change the value in both. This is no longer the case.

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

- 2020-11-10 Created.
<!--changelog CHANGELOG. DO NOT CHANGE THIS TAG. ANY CHANGES BELOW WILL BE DELETED.-->
