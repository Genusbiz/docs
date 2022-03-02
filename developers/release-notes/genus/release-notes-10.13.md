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

See also the following notes.

<!--ID 26b4d447-5580-4f69-b5a5-9bc439491b22 -->
**#23467 New microservice: Mail Service** (Services)

A new microservice called Mail Service have been added to Genus.

<!--rntype01-end   INSTALLATION / UPGRADE. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
<!-- release note type 2 is missing. That's ok.-->

## End-of-life functionality

End-of-life functionality is functionality that was available in the previous release, but is no longer available in this release.
<!--rntype03-start END-OF-LIFE. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 23b1dc25-32f0-4c13-89a2-34ebf0bd22f0 -->
**#23466 Discontinued support for database versions**

Genus has discontinued support for some older databases

* Microsoft SQL Server versions prior to 12
* ORACLE versions prior to 12c are no longer supported.

These database versions lack support for vital Genus functionality, and are no longer in active use by clients.

<!--rntype03-end   END-OF-LIFE. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Deprecated functionality

Deprecated functionality is available in this release, but will (most probably) no longer be available in the next release.
<!--rntype04-start DEPRECATED. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
There is no deprecated functionality in this release.
<!--rntype04-end   DEPRECATED. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Breaking changes

This section lists important changes introduced in this release. You will need to use this list in order to understand the changes you might need to make to your application to support the new release.
<!--rntype05-start BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID e08a6f3a-8b74-4861-86b9-afb7a81e81b0 -->
**#23477 Changed helm values** (Services)

We have changed how some of the configuration regarding the connection to database is done. The following changes must be made to all helm-value configuration files before updating to 10.13:

**Please note that some of the values have also changed name.**

These helm-values are removed:

```
genus-core-services:
  activeConnectionString: ''
  databaseActiveDb: ''
  databaseActiveSchema: ''
  descriptiveConnectionString: ''
  databaseDescriptiveDb: ''
  databaseDescriptiveSchema: ''
  databaseVendorVersion: ''
  databaseIsCaseInsensitive: ''
```

and are replaced by:

```
global:
  database:
    activeConnectionString: ""
    activeDb: ""
    activeSchema: ""
    descriptiveConnectionString: ""
    descriptiveDb: ""
    descriptiveSchema: ""
    vendorVersion: ""
    caseInsensitiveSearch: ""
```

<!--ID 12420123-35a2-42fd-8529-73c4fec98cb6 -->
**#23478 Changed helm values** (Operator)

We have changed how some of the configuration regarding the connection to database is done. The following changes must be made to all helm-value configuration files before updating to 10.13:

**Please note that some of the values have also changed name.**

These helm-values are removed:

```
genus-kubernetes-operator-service:
  dbType: ""
  descriptiveConnectionString: ""
  descriptiveSchema: ""
  activeConnectionString: ""
  activeSchema: ""
```

and are replaced by:

```
global:
  database:
    activeConnectionString: ""
    activeDb: ""
    activeSchema: ""
    descriptiveConnectionString: ""
    descriptiveDb: ""
    descriptiveSchema: ""
    vendorVersion: ""
    caseInsensitiveSearch: ""
```

**These values should be the same as for the Genus helm-charts. Especiallynote vendorVersion, which should have a different value than the old dbType**

<!--rntype05-end   BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Major new functionality
<!--rntype06-start MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID c8c57232-990f-4973-be20-453b2929c5af -->
**#23488 Introduce Global Styles** (Web)

Added a "Style Editor" where global styles can be created. These styles are available when creating Container and Button controls.

<!--rntype06-end   MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Minor new functionality
<!--rntype07-start MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 1d3ce605-7fae-4985-bca6-267ec3c4ba9d -->
**#23465 Visibility "Yes | No | For Specified Groups" added to Sitemap Components** (Studio;Web)

Visibility "Yes | No | For Specified Groups" added to Sitemap Components, allowing security group membership to control visibility of sitemap entries.

<!--ID 5735754a-ac0f-4d52-9dd9-e0d2d31a6dea -->
**#23470 Visibility and enabling of controls and page elements now allow scoping tospecified security groups** (Studio;Web)

Visibility and enabling on controls and page elements is extended to allow for scoping tospecified security groups. The setting is found by expanding Visible/Enabled in the page designer. Change Scope to "For Specified Groups" and select Security Groups, to restrict visibility/enabling.

<!--ID 8b14dadb-d6cd-4ad5-9da3-9c05e7ece796 -->
**#23472 Added placement option to Show Callout effect** (Studio;Web)

<!--ID 1dd070ce-8ffb-403b-9663-f92b60ea51d0 -->
**#23476 Improved preview in Page Designer** (Studio)

The size of preview can now be adjusted by the user

<!--ID 0df8b2bb-2203-42df-8c67-91d061cc49e2 -->
**#23483 Default app** (Web)

It is now possible to define a default app for each endpoint specified in Genus Studio. When the user navigates to the endpoint, if a default app is specified the user will be redirected to this app, instead of the start page.

<!--ID f5cd680b-f2b4-4e5b-b3dd-4db843b5c3c4 -->
**#23485 Custom Host Web Page** (Web)

In earlier versions of Genus, if you wanted an app to appear as a part of any web content, you would have to mount Genus as an IFrame inside the customers content.
It is now possible to define a custom host web page for Genus.  This makes is so an app can appear more naturally inside the customers content.

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

<!--ID 78bee865-269c-4de2-a0b7-61bf3521bfa9 -->
**#23487 Added Visibility config to individual tabs in TabControl** (Web)

<!--ID d0e44272-a0a0-4f51-82f0-0ece292f7bac -->
**#23489 Required flag on client action data sets are split into "Binding Required" and "Data Required"** (Studio;Web)

By setting binding required and not data required, one will not be presented with an error message runtime if there is a lack of data. One can thus require a binding to be set for modelling purposes, while accepting no data runtime.

Data sets that were previously required are continued with both binding and data requried.

<!--ID 7b8c1aef-d75b-4bc2-b916-0e1fe81a60c3 -->
**#23500 Cumulative Values now available for all Categories** (Web)

Until now, the accumulation of Value data has only been available for Tiles with a temporal Category. Cumulative data has now been made available for all Tiles with one-dimensional Categories.

This is configured through the Data menu choice "Accumulation" in the Dashboard Designer.

<!--rntype07-end   MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Resolved issues
<!--rntype08-start RESOLVED ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 3bcb9c06-d80b-47c9-b03d-46ba7f60cbee -->
**#23460 Data marts does not always reload as expected** (Services)

In some situations datamarts did not reload as expected.
Could happen either because of new data or because datamart definitions where modified.
The problem was due to a communications issue between the data mart scheduler and the data marts.
The issue is fixed.

<!--ID 2a85b846-323f-4dc3-9deb-b7092698b3db -->
**#23461 Entering invalid values into Integer Date Edit made the application crash** (Desktop)

<!--ID 3a5b4420-7cd5-4ddb-952e-791f39140824 -->
**#23462 Fixed problem registering dates in january in Date Input width Date and Time in separate controls** (Web)

<!--ID 6d9677f3-9d46-4ea6-b2b3-ddf8837d781d -->
**#23463 Fixed error generating text or Html from template** (Desktop)

<!--ID 8e83f605-7b47-4832-928e-946d1a386b42 -->
**#23464 Resolved XML namespace handling in 3rd party XML library** (Services)

Genus 10.2 replaced a Windows specific XML library (MSXML) with another multi-platform library (OXML), but also introduced a bug in the XML namespace handling. This bug has now been resolved.

<!--ID 6037c90d-77db-4e5b-9550-ca050551d725 -->
**#23468 Organizational chart is more compact**

Non-sibling nodes previously had a spacing of x2, spacing of all nodes are now set to x1. This results in a much more compact chart.

<!--ID f2b287db-c2e9-4d18-bae7-5235e152414e -->
**#23469 Context is available on create new object in data filters** (Web)

<!--ID 60945cb2-09e9-4c4f-ac36-5a045c96e3d0 -->
**#23474 Badge was clipped in naviagation pane with long texts** (Web)

<!--ID 1c76052b-7a0e-4718-bc38-b6fea7860586 -->
**#23475 Fixed initial width of dialog for entering field values when running an action** (Desktop)

<!--ID 58dcfc1d-40d6-4f81-9bdb-c711223c685e -->
**#23482 Fixed proble with dialog not showing correctly when operned from a component from external module** (Web)

<!--ID 3e46c857-7937-40a3-b51b-cbe5401e0091 -->
**#23493 Client Action: Added missing reference to Data Filter and Data Sets for Read Related in Read Objects** (Studio)

<!--ID fa296272-22c3-4957-889d-5a57fba55c6a -->
**#23494 Fixed runtime error when filtering in dropdown with numeric display values** (Web)

<!--ID d4e54bcd-3394-49d2-9f06-8fb97b7e9b11 -->
**#23503 Click on Selection Chip now toggles selection** (Web)

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
