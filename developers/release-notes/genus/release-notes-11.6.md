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

<!--ID 02059aa6-3f9f-4551-baca-ff20151060d4 -->
**#23714 Service "rest-soap-service" renamed**

Any Helm values for rest-soap-service defined under genus-rest-soap-service, must be moved to genus-exposed-web-service

For example if you have the following in the Helm value files:

```yaml
genus-rest-soap-service:
  resources:
    requests: 
      memory: 200Mi
```

It should now look like this:

```yaml
genus-exposed-web-service:
  resources:
    requests: 
      memory: 200Mi
```

<!--ID a6b5a479-3504-4630-a34f-1a75ccb66e4c -->
**#23715 Default value for repository.image for core-services now default to Linux only**

Previously the default value for `image.repository` for core-services depended on wether or not `runOnWindows` was true. This is no longer the case.

This means that if you have set `runOnWindows` to true, you must now also specify the `image.repository` value. The value here should be either "genus.azurecr.io/genus/images/core-service-ltsc2019" or "genus.azurecr.io/genus/images/core-service-ltsc2022", depending on the Windows version of your Windows nodes.

This concerns the microservices `genus-core-service`, `genus-mq-subscriber-service`, `genus-exposed-web-service`, `genus-scheduled-action-service` and `genus-data-mart-service`.

An example:
If you previously had
```yaml
genus-core-service:
  runOnWindows: true
```

You must now have
```yaml
genus-core-service: 
  runOnWindows: true
  image:
     repository: genus.azurecr.io/genus/images/core-service-ltsc2019
```

<!--ID 431c034a-badf-4e5b-85d4-c21def1d420d -->
**#23716 Service "trace-input-service" renamed**

Any Helm values for trace-input-service defined under genus-trace-input-service, must be moved to genus-tracelog-input-service

For example if you have the following in the Helm value files:

```yaml
genus-trace-input-service:
  resources:
    requests: 
      memory: 200Mi
```

It should now look like this:

```yaml
genus-tracelog-input-service:
  resources:
    requests: 
      memory: 200Mi
```

<!--rntype05-end   BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Major new functionality
<!--rntype06-start MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 9aece204-eaf2-44ae-b971-f6b009f4119d -->
**#23718 Pod scaling improvements in Genus Operator**

We have made several scaling-related improvements in this release.

* We have added new Helm values `disableOperatorScaling` (per microservice) and `global.disableOperatorScaling`. Setting this to true will cause the provided `replicaCount` to always be used, and no scaling will be done by Genus Operator. This includes scaling down outside of availability windows, so use this option with caution.
* Unless the Helm value described above is set to true, we no longer set the `replicas` property of the Kubernetes deployments. This means that deploying new Genus versions will no longer cause immediate up-and-down scaling of the various microservices.
* The default number of pod replicas has been adjusted. This means that if you have made no changes to `replicaCount` or scaled from Genus Operator, there will be 2 replicas running for the microservices that are critical for not perceiving downtime on the web. This should make deployments and other interruptions less noticeable to the end users. The Helm value `global.highAvailability` can be set for a runtime to cause all microservices to run with 2 replicas by default.
* It is now possible to enable and configure autoscaling in Genus Operator. This means it is no longer necessary to redeploy the runtime to turn this on or off.
* Genus Operator will now automatically create and delete [Pod Disruption Budgets](https://kubernetes.io/docs/concepts/workloads/pods/disruptions/#pod-disruption-budgets) (PDBs) depending on the number of replicas that are running. This should also help with minimizing the impact of interruptions and deployments of runtimes.

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
