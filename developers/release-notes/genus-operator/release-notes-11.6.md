---
title: Release notes for Genus Operator 11.6
description: User-visible changes for Genus Operators
author: jtroset
---

# Release notes for Genus Operator 11.6

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
<!--ID 3ef669ef-c9c7-4249-a90c-22ac9b8e1c2b -->
**#23709 Genus Operator dependency genus-kubernetes-operator-service renamed to genus-operator-service**

Any Helm values for Genus Operator defined under genus-kubernetes-operator-service, must be moved to to under genus-operator-service instead.

For example if you have the following in the Helm value files for genus operator:

```yaml
genus-kubernetes-operator-service:
  resources:
    requests: 
      memory: 200Mi
```

It should now look like this:

```yaml
genus-operator-service:
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
There are no minor new functionality in this release.
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
