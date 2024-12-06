---
title: Release notes for Genus 11.3.
description: User-visible changes to Genus from release 11.2 to 11.3.
author: jtroset
---

# Release notes for Genus 11.6

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

<!--ID 0c04bcb8-d810-4c5f-8c8a-121a07a3265a -->
**#23707 BREAKING CHANGE: Discontinuing support for Helm 2 charts. Switch to using Helm 3/oci charts.**

The Azure container registry containing our Helm charts and container images are dropping support for Helm 2 charts. Genus have supported Helm 3 since version 10.22, and we will stop publishing Helm 2 charts after version 10.5.

To switch over from deploying the old charts to the new charts, some changes must be done to the deploy pipelines or GitOps (Flux or ArgoCD) configuration.

If you are deploying with pipelines, make sure that the pipeline job run on version 2.6.5 or newer of the `genusbiz/genus-bootstrap` image.

If you are deploying with Flux or ArgoCD, make sure that the HelmRepository definition is of type: "oci", and that the url is "oci://genus.azurecr.io/genus/helm".

More information about the change can be found [here](https://learn.microsoft.com/en-us/azure/container-registry/container-registry-helm-repos).

<!--ID 4f8d34a9-1b3c-4c03-b93b-a60713f1878a -->
**#23708 Helm value validation when deploying Genus versions**

The Helm values will now be validated before deploying, and attempting to deploy with invalid values will no longer work (unless the flag `--skip-schema-validation` is set). 

Validation errors are displayed in the deploy log, or can be found using Version Deployment in Genus Operator.

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
<!--ID 21bde47c-946c-4c62-8128-38b101fb1a06 -->
**#23710 Service "message-subscription-service" renamed**

Any Helm values for message-subscription-service defined under genus-message-subscription-service, must be moved to genus-live-update-subscription-service

For example if you have the following in the Helm value files:

```yaml
genus-message-subscription-service:
  resources:
    requests: 
      memory: 200Mi
```

It should now look like this:

```yaml
genus-live-update-subscription-service:
  resources:
    requests: 
      memory: 200Mi
```

<!--rntype05-end   BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Major new functionality
<!--rntype06-start MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
There are no major new functionality in this release.
<!--rntype06-end   MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Minor new functionality
<!--rntype07-start MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 0c8ff7a4-f274-4b19-9e6a-5950480a38bd -->
**#23701 Effect "Download Tables as Excel File"**

A new effect has been added to "On Activate," replicating the table component's built-in Excel download functionality. This feature is now externalized, allowing you to connect it to any desired table

<!--ID fb553031-2ff1-4573-9764-d6bd0ae389a6 -->
**#23702 Conditional Expanded and Fullscreen for containers**

- Conditional Expanded for Control
    - A new field named Expanded has been introduced under the "General" section of the container. This enables conditional expansion or collapse of a container based on an expression. 
       When this field is used, the standard collapse toggle in the header is disabled, and the container's state is determined exclusively by this field.
- Conditional Full Screen for Control
    - A new field named Fullscreen has been added under the "General" section of the container. This allows you to conditionally toggle fullscreen mode for a container based on an expression. When this field is used, the standard fullscreen toggle in the header is disabled, and the container's state is controlled by this field instead.

<!--ID fccfbc55-56a8-481a-9242-2221d9dce081 -->
**#23703 Effect "Change Color Scheme"**

A new effect has been added to "On Activate," allowing you to switch the color scheme (Light Mode, Dark Mode, or Browser Default) when triggered.

<!--ID 8e1d9031-8af1-42c2-8ce2-87dedf176a3c -->
**#23704 Effect: "Show History"**

A new effect has been added to "On Activate," extending the built-in Show History functionality found in the app bar and context menu. This effect lets you select a specific dataset to connect, displaying only datasets where auditing is enabled.

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
