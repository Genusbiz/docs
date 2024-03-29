---
title: Release notes for Genus Operator 7.1
description: User-visible changes for Genus Operators
author: jtroset
---

# Release notes for Genus Operator 7.1

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

The helm value ``global.servicemonior.enabled``, which is used to disable deployment of serviceMonitors in cases where Prometheus is **not** running in the cluster, is moved to the following location, and is accompanied by a similar setting for disabling prometheusRules. Please note the capitalization of M in serviceMonitor.

```
global:
  metrics:
    serviceMonitor:
      enabled: true (default) | false
    prometheusRule:
      enabled: true (default) | false
```

**This affectes both Genus 11.1 and Genus Operator 7.1.**

<!--ID 1df954e5-1cef-4bc1-8fee-fb3eb8ecfa8a -->
**#23658 Change in versioning strategy for Genus Opeartor**

Starting with the version following 7.1 of Genus Operator, the version number will match the version number of Genus. 

This means that the next version will be 11.2, and that version of Operator will work with the 11.2 version of Genus. In the future, all version numbers of Genus and Genus Operator will be 1:1.

The reason for this is that we are working on moving some functionality from Genus Studio to Genus Operator, and for this to work, the versions will be tightly coupled and will need to be upgraded at the same time.

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
<!--ID b05906d3-a519-f890-5bc2-e3b0df15e575 -->
**#23648 Genus Operator scales down Scheduled Action service and Rest-Soap-service as described**

Starting in 7.1, Genus Operator will start scaling down the Scheduled Action and Rest-Soap services when these services are disabled in the Runtimes page. 

Please make sure that the Runtimes are configured correctly before upgrading to this version, to avoid any unwanted downtime.

<!--rntype05-end   BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Major new functionality
<!--rntype06-start MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID b44fd9d7-c16d-b7c7-3292-2bb0247f78c7 -->
**#23651 Improvements to Availability windows**

Availability windows have been improved in several ways:

####  New availability editor
It should now be easier to create and edit availability windows. The new editor can create several availability windows at the same time. This should make it a lot easier to create weekly schedules.

#### Enabling/disabling windows
It is now possible to disable availability windows without deleting them.

#### Timezone
Availability windows are now created with timezone information. This means that going to and from daylight saving time should no longer impact the availability windows, as long as the correct timezone is specified.

#### Backwards compatible
All old availability windows will continue to function as before. However, it is recommended to create new availability windows with the correct timezone, as all old windows are created in UTC.

#### Better information regarding environment status
The information regarding current status of the different runtimes should be easier to see and understand. It should also be clearer whether or not an environment is set to be always up, or if it uses a schedule.

<!--rntype06-end   MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Minor new functionality
<!--rntype07-start MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 8bb483ce-ee9d-b94a-10dd-e54fbab288fb -->
**#23654 Added metrics and resource utilization to pods**

Operator now displasy CPU and memory usage metrics in the pod table. In addition, it will show a percentage of the usage and the set requests and limits. These metrics will give the user a quick overview of the resources of pods in an environment. 

In order for Operator to have access to these metrics, the Kubernetes role is exended and access rights to the api resource `metrics.k8s.io` is added.

If the Helm value `global.rbac.create` is set to `false` in the Helm value file, meaning that RBAC is set up manually, the following changes needs to be applied to get access to the new functionality: In the `role`-definition, add  `metrics.k8s.io` to the list of `apiGroups` . 

If this change is not applied, the metric fields will be empty, and an error message is logged to the Operator pod.

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
