---
title: Release notes for Genus 11.2.
description: User-visible changes to Genus from release 11.1 to 11.2.
author: jtroset
---

# Release notes for Genus 11.2

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

<!--ID 7f3aca95-ae93-7aa9-d11e-5554973ab627 -->

**#23647 Changes to Helm values regarding enabling of serviceMontiors and prometheusRules**

The helm value `global.servicemonior.enabled`, which is used to disable deployment of serviceMonitors in cases where Prometheus is **not** running in the cluster, is moved to the following location, and is accompanied by a similar setting for disabling prometheusRules. Please note the capitalization of M in serviceMonitor.

```
global:
  metrics:
    serviceMonitor:
      enabled: true (default) | false
    prometheusRule:
      enabled: true (default) | false
```

**This affectes both Genus 11.1 and Genus Operator 7.1.**

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
<!--ID c4e93764-d55e-d323-2419-d2035038c2cc -->

**#23646 Helm values: "true" and "false" are now booleans instead of strings in some cases**

In some cases where "true" and "false" helm values were strings, they are now booleans, meaning they must **not** be quoted.

The cases that will need to be updated are:

```
global:
  published: true|false
  enableSentry: true|false
  enabledDebugInformation: true|false
  reportSensitiveBreadcrumbsToSentry: true|false

```

<!--ID b91ed3ea-7f8f-954e-5f6e-968bf38c629e -->

**#23653 The "On Active" button in input fields will no longer be disabled when the input field has no value**

If the "On Activate" is connected to an input field, a button is added to the right of the input field, which can be clicked to run the action. Previously, this button was disabled when the field was empty. This decision should be made by the business engineer, not the platform. Therefore, this restriction has been removed.

<!--rntype05-end   BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->

## Major new functionality

<!--rntype06-start MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->

There are no major new functionality in this release.

<!--rntype06-end   MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->

## Minor new functionality

<!--rntype07-start MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID ef441a5c-e64f-a2a2-17f3-8e2b9f952886 -->

**#23645 Core-service now has 2 replicas and PDB enabled as default**

As of 11.1.0.alpha.5, the core service runs two replicas as default, when in a published runtime. Additionally, PodDisruptionBudged (PDB) is enabled as default, specifying that at least 1 instance of the core-service should be available at all times.

This should help prevent downtime in instances where Kubernetes reschedules the core-service pod to a different node.

It is important to note that when using PDB to specify minAvailable pods, there must be more than that minimum number of pods running. If that is not the case, the PDB will prevent nodes from draining, and potentially preventing Kubernetes from scaling the cluster properly.

<!--ID d72ecc5c-0b7f-76a6-e274-d93435058c6e -->

**#23649 Default LANG for core-service**

Default LANG is now set to nb_NO.UTF-8 in the core-service (and rest-soap-service, data-mart-query-service, scheduled-action-service and mq-subscriber-service).

This should help with any .toUpper()-issues for Norwegian characters, and correctly sort names starting with AA.

This setting can be overridden by setting the `global.lang` helm-value.

<!--ID b4db7a8c-4ba3-66fc-be1a-b2fac76e7292 -->

**#23650 Simplified Redis configuration**

We have redesigned how we use Redis for storing live update messages, trace log messages and -level and a couple of other properties. This means that the Redis instance in the origin, green and blue environments are no longer used, and is therefore removed.

This should result in lower infrastructure cost, and better persistance for the properties mentioned above.

<!--ID 1b8e02ac-a9c5-7460-8573-1d4db98750ef -->

**#23652 Identityprovider type MS Entra ID now supports samAccountName as account id property**

**MS Entra ID** (previously known as Azure AD) now supports **samAccountName** as account id property in addition to **upn**.
To use **samAccountName** one must add a new [ClaimsMappingPolicy](https://securecloud.blog/2019/06/06/add-samaccountname-to-azure-ad-access-token-jwt-with-claims-mapping-policy-and-avoiding-aadsts50146/) in Azure on the Authenticator app registration and set the property **acceptMappedClaims** to true in the app registration manifest.
Any other account id property value than **samAccountName** will fallback to **upn**.

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
