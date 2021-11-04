---
title: Release notes for Genus 10.3.
description: User-visible changes to Genus from release 10.2 to 10.3.
author: jtroset
---
# Release notes for Genus 10.3

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
<!--ID a842f9c9-20a4-4eb5-b242-1a907f5324d3 -->
**#23286 Trace Log improvements** (Desktop;Services;Web)

- Added ability to persist logs
- Added utc to trace messages
- Synchronize traces across tabs
- Prettified logging from mega-service and data-mart-query-service

<!--ID dbb908bd-7c73-4e09-9c7e-0442318e16fd -->
**#23288 New control for web: HTML Editor** (Web)

- HTML-editor control with simple formatting incl. inserting picture

<!--rntype06-end   MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Minor new functionality
<!--rntype07-start MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID be1cc82f-9938-490b-b561-c7e465d15205 -->
**#23287 REST Throttling** (Services)

Limit number of threads running exposed REST-services. Set by variable RestMaxThreadCount

<!--ID 925bdef8-527a-403e-9c54-86736f8b8573 -->
**#23289 Hide Studio, Desktop and TraceLog links on mobile** (Web)

<!--ID a5ce4905-bd84-413b-8b2e-943c0954cce1 -->
**#23290 Open apps in new tab on CTRL-click in start page** (Web)

<!--ID aa742dea-799d-4001-a80a-bac932659dfa -->
**#23291 Validate Read Related filters in designers** (Web)

<!--ID cf2e1dca-ab60-4063-adf0-a78a122c37c1 -->
**#23292 Added Desktop Table and Form to Sitemap** (Web)

<!--ID 858bf382-d6f2-4f28-a016-f0dca145d10c -->
**#23293 Added effects: Open Desktop table and Open Desktop Form** (Web)

<!--ID ff3017f4-9f3d-4639-949a-617c2ebf16f1 -->
**#23294 Add Multi Filter to Filter menu in Table control** (Web)

<!--ID c932e13f-5ffa-4683-a622-b4c594f372f0 -->
**#23295 Allow customized Table views to be saved in local storage** (Web)

<!--ID f9821422-48e7-431f-b814-870afbbc7eb4 -->
**#23296 Make Table columns movable and add column settins to Table menu** (Web)

<!--ID 718a8573-7389-49b8-a00f-46bde31adac0 -->
**#23297 Enable custom grouping in Table control** (Web)

<!--ID 8968401c-6645-453d-b932-e94a0340dbb8 -->
**#23298 Improved support for responsive behaviour in search controls** (Web)

<!--ID 0be24149-2711-427b-9c1e-7cd9d9689c97 -->
**#23299 Reinterpret refined expression when selection is changed** (Web)

<!--ID c5f66759-2dcd-4f42-9bb3-278f187bb43f -->
**#23300 Add PWA splash screens for supported iOS devices** (Web)

<!--ID 11737e28-5e63-4da7-a4d3-0cd7221550dd -->
**#23301 Ability to downscale images on Upload Effect** (Web)

<!--ID 0e8056e6-3e3d-48d4-ae0a-144919f8f083 -->
**#23303 Added default MSXML error logging when loading XML from string** (Desktop;Services;Studio)

<!--ID a1fe2ab3-9b6d-4a4e-a83c-fb4d0ebccc61 -->
**#23304 MySQL: Handle custom trigger and timeout exceptions** (Services)

<!--ID bae3af00-85d3-490a-b39e-fcfba40f714c -->
**#23306 Show Data Set information in Data Filter dropdowns** (Web)

<!--ID a52a0a43-a058-4be6-9a72-6b27505560f0 -->
**#23307 Improved login performance when using Genus Native ID-provider (username / password)** (Desktop;Studio;Web)

<!--rntype07-end   MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Resolved issues
<!--rntype08-start RESOLVED ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 63d16644-cd39-4602-8815-fb7b77512524 -->
**#23310 "Auto Load data mart" did not work in 19.2** (Desktop)

To reproduce:
1) Make a schedule which starts at a time in the future
2) Check "Auto Load data mart"
3) Unload the data mart
4) Observe that using the data mart yields "Data mart not loaded" message

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
