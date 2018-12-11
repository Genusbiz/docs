---
title: Release notes for Genus release 2018.3.
description: User-visible changes to Genus from release 2018.2 to 2018.3.
author: jtroset
---
# Release notes for version 2018.3

## Introduction

This document lists all user-visible changes to Genus Apps since the previous release.
 
This release note will be updated prior to the release and may also be updated as long as the release is available, e.g. with information of new patches or known issues. Please take note of the [installation and upgrading](#installation-and-upgrading) comments, and the release notes [change log](#change-log).

## Installation and upgrading
 
Prior to upgrading to this release, you must:
* Upgrade to the previous release. See the Release notes for the previous release for more information.
* Review the Expiry date of your Genus License File and install a new one if necessary.
* Review the rest of the release notes for this release.
* Please note that there does not exist any Genus Upgrade Assistant for this upgrade.
 
For general information about installing and upgrading Genus Apps, see [here](../installation-and-configuration/index.md). We especially recommend reviewing the [System Requirements](../installation-and-configuration/system-requirements.md) article.

## Important issues in this release

There are currently no critical issues in this release.

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
<!--ID 9ff0a5a5-8c71-43e1-879d-cab2ad8167f0 -->
**#23151 Grouping of columns Multidimension table** (Desktop)

It is now possible to create a column group based on data in a Multidimensional table. For eksample when repeating over the day dimension, you can group the columns in Weeks (or Month).

<!--rntype06-end   MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Minor new functionality
<!--rntype07-start MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID f2042c91-d86d-41d4-84af-3cd2051b07b2 -->
**#23123 The "Consume a REST Service" effect supports Client Certificate and Server Certificate Validation** (Desktop;Services;Studio)

The **Consume a REST Service** effect now includes a new, optional **Certificate Thumbprint** field that can be used to attach a client certificate to the REST request. The certificate must be installed in the Windows certificate store and is referenced using its thumbprint (hexadecimal string). Please refer to the article [Consuming Web Services with certificate based authentication](https://docs.genus.no/developers/defining-an-app-model/services/web-services/consuming-web-services-with-certificate-based-authentication.html) for details about how to install a client certificate. Please note that, in contrast to consuming (SOAP based) web services, Genus Apps may consume REST services both on the client side and on the server side. The client certificate needs to be installed on the client side or on the server side accordingly, and needs to be accessible from the calling Windows account. You may use the Current User or the Local Machine certificate store, depending on your preferences.

A new **Server Certificate Validation** field is also introduced. In rare cases the server may present a certificate with a Common Name (CN) that deviates from the host part of the specified URL. Normally, this is an error and the request is rejected. In order to override this behavior you may use the Server Certificate Validation field to specify a substring that should be present in the server certificate's Subject field.

<!--ID 656dd3fe-525d-4c7a-a7fa-a36b232695e5 -->
**#23152 Consume a web service -- support for adding custom HTTP request headers** (Services;Studio)

The _Consume a web service_ effect now includes support for adding custom HTTP request headers. See the updated [documentation](https://docs.genus.no/developers/defining-an-app-model/logic/action-orchestration/actions/effects/consume-a-web-service.html).

<!--ID 1089ca77-a790-4e4d-a0e5-9bd2523e71a4 -->
**#23153 Analysis  Component: Subsets** (Desktop;Web)

Subset operators can now be hidden from the user. The operator Set has been renamed to Apply

<!--ID b1dbaceb-aff8-4450-8de2-66dce1e0d730 -->
**#23154 Analysis  Component :Selector** (Desktop;Web)

Default values for Show Excluded and Show Selected can now be selected in the designer.

<!--ID e20f2019-0228-4d95-a85c-c87c87f6407f -->
**#23155 Timeout secounds on File Upload effect** (Web)

It's now possible to set timeout for the File Upload effect

<!--ID 431a02f1-b9e3-4439-84a9-3552647aa537 -->
**#23156 Analysis  Component :Map** (Desktop;Web)

Made it possible to customize zoom settings for map. For more information : https://docs.genus.no/users/analyze-report-and-discover/analysis/designer/format-pane/component-specific.html#map

<!--ID ac004d16-2940-48c7-9a18-51e8e8617d45 -->
**#23157 component: Summary** (Desktop;Web)

Summary now has a new option under the heading "summary options"  called "display horizontally" and it does exactly that, instead of listing the selections in a list moving from top to bottom it is instead listed side by side left to right.

<!--rntype07-end   MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Resolved issues
<!--rntype08-start RESOLVED ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 340afc8d-8af5-46cc-8f20-d56a80893bd8 -->
**#23158 Analysis - Marking og exluded items in a pie chart**

Exluded items in a pie chart is now marked by a strikethrough of the item, and the tailing percentage is removed.

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
* 2018-11-30 Changed release stage from Beta to Release (builds starting with 18.30.50).
* 2018-08-18 Created (Beta stage) (builds starting with 18.30.5).
<!--changelog CHANGELOG. DO NOT CHANGE THIS TAG. ANY CHANGES BELOW WILL BE DELETED.-->
