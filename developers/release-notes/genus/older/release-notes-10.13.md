---
title: Release notes for Genus 10.13.
description: User-visible changes to Genus from release 10.12 to 10.13.
author: jtroset
---

# Release notes for Genus 10.13

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
<!--ID 1d3ce605-7fae-4985-bca6-267ec3c4ba9d -->
**#23465 Visibility "Yes | No | For Specified Groups" added to Sitemap Components** (Studio;Web)

Visibility "Yes | No | For Specified Groups" added to Sitemap Components, allowing security group membership to control visibility of sitemap entries.

<!--ID 5735754a-ac0f-4d52-9dd9-e0d2d31a6dea -->
**#23470 Visibility and enabling of controls and page elements now allow scoping tospecified security groups** (Studio;Web)

Visibility and enabling on controls and page elements is extended to allow for scoping tospecified security groups. The setting is found by expanding Visible/Enabled in the page designer. Change Scope to "For Specified Groups" and select Security Groups, to restrict visibility/enabling.

<!--ID 71500820-74d4-441c-a606-68cd6051cc0f -->
**#23486 Liveness- and Readiness-probe configuration options** (Services)

It is now possible to configure readinessProbe and livenessProbe for mega-service, datamart-query-service, as well as for redis.
The following values can be configured for both readinessProbe and livenessProbe:

* failureThreshold
* initialDelaySeconds
* periodSeconds
* timeoutSeconds
* successThreshold

See [helm-values descriptions](https://docs.genus.no/developers/installation-and-configuration/deploying-genus-10-on-kubernetes/genus/helm-values-description/genus-10.13.html) for how to do this.

<!--ID 7b8c1aef-d75b-4bc2-b916-0e1fe81a60c3 -->
**#23500 Cumulative Values now available for all Categories** (Web)

Until now, the accumulation of Value data has only been available for Tiles with a temporal Category. Cumulative data has now been made available for all Tiles with one-dimensional Categories.

This is configured through the Data menu choice "Accumulation" in the Dashboard Designer.

<!--rntype07-end   MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Resolved issues
<!--rntype08-start RESOLVED ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 2a85b846-323f-4dc3-9deb-b7092698b3db -->
**#23461 Entering invalid values into Integer Date Edit made the application crash** (Desktop)

<!--ID 6d9677f3-9d46-4ea6-b2b3-ddf8837d781d -->
**#23463 Fixed error generating text or Html from template** (Desktop)

<!--ID f2b287db-c2e9-4d18-bae7-5235e152414e -->
**#23469 Context is available on create new object in data filters** (Web)

<!--ID 1c76052b-7a0e-4718-bc38-b6fea7860586 -->
**#23475 Fixed initial width of dialog for entering field values when running an action** (Desktop)

<!--ID 58dcfc1d-40d6-4f81-9bdb-c711223c685e -->
**#23482 Fixed proble with dialog not showing correctly when operned from a component from external module** (Web)

<!--ID a6600148-dec0-4a52-8a86-55e325e8f958 -->
**#23504 Summary row displayed undefined in columns with advanced rendering** (Web)

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
