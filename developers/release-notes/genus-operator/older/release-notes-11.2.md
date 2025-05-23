---
title: Release notes for Genus Operator 11.2
description: User-visible changes for Genus Operators
author: jtroset
---

# Release notes for Genus Operator 11.2

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
<!--ID 9d4819f2-d008-4c12-9507-88e2e24d20f2 -->
**#23663 Active and descriptive are now merged**

Active and descriptive are now merged. This means that any the following helm values must be updated after running script 46.0.23:

```
global:
  database:
    activeConnectionString      => appModelConnectionString
    activeDb                    => appModelDatabase
    activeSchema                => appModelSchema
    descriptiveConnectionString => DELETE
    descriptiveDb               => DELETE
    descriptiveSchema           => DELETE
```

The value for appModelSchema should also be updated to the new name of the merged schema.

<!--ID 7a6f20fd-785b-462c-9477-10d6bd15c044 -->
**#23675 Mail Merge (Word) has stricter decimal separator interpretation (third party)**

Mail Merge templates (Word based) with improper decimal separators may behave differently starting from 11.2. Previous versions of the third party library (Aspose) were seemingly more forgiving.

<!--rntype05-end   BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Major new functionality
<!--rntype06-start MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID fe3254e1-1189-4078-93f5-1308bca6794d -->
**#23668 Runtimes is moved from Studio to Operator**

The Runtimes page is removed from Genus Studio and its functionality is moved to Genus Operator. 

It is now possible to create, edit and delete Genus Runtimes from Genus Operator. 

The restart runtime function is removed. In cases where it is required to restart some or all the pods in a runtime, this can be done from Pods-table.

<!--ID 504cee10-a7d3-42dc-b68d-5286e720fc5e -->
**#23674 Genus Operator now supports signing in with MS Entra ID**

It is now possible to choose to sign in with MS Entra ID for Genus Operator. This requires first setting up an application in Azure, and then setting the Helm values described below.

To read about what to do in Azure, see the article "Setting up MS Entra ID (Azure AD) for login" in Community.

The following Helm values must be configured to use MS Entra ID:
```
global:
  auth:
    method: "MS Entra ID" # default is "Cookie"
    MSEntraId:
      tenantId: "{See article about where to find this value}"
      clientId: "{See article about where to find this value}"
      clientSecret: "{See article about where to find this value}"
      operatorGroupId: "{See article about where to find this value}"
      redirectUri: "{See article about where to find this value}"
```

<!--rntype06-end   MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Minor new functionality
<!--rntype07-start MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 8b0adace-c12b-439f-9534-6c203ed46efa -->
**#23666 Details, logs and events are moved for Pods and Workload Controllers in Operator**

Details, logs and events are now available by double-clicking on the the pod or workload controller, in Genus Operator.

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
