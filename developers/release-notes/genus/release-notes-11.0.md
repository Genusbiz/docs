---
title: Release notes for Genus 11.0.
description: User-visible changes to Genus from release 10.24 to 11.0.
author: jtroset
---

# Release notes for Genus 11.0

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

<!--ID 68febf68-b068-c1dd-4dc3-d8bc7c025513 -->
**#23618 Helm config volumesMounts changed to volumeMounts**

There was a typing error in the helm value for setting volumeMounts for datamartQueryService and CoreService. The correct spelling is "volumeMounts". If it says "volume**s**Mounts" in any config files, this must be changed to "volumeMounts".

This is relevant for application using client certificates or startup scripts.

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
<!--ID 46c69a0c-8a29-f133-82c9-63d0a526d91a -->
**#23634 Mega service is replaced by core-service**

After 10.23, the mega-service is no more. It is replaced by the core-service, which runs on Linux as default. Please update your helm-value config files accordingly.

If you wish to run the core-service on Windows, this can be done by setting the helm values like this:

```
genus-core-service:
  runOnWindows: true
```

<!--ID bb81312a-3ead-2412-5082-34dc94e9de05 -->
**#23636 Changes to global.timezone helm value  (Genus and Genus Operator)**

If the global.timezone helm value is specified in any of your helm value files, you will need to change this value in Genus 11.0, and Genus Operator 7.0.

We are moving from a volumeMount to an environment variable approach to setting the timezone in the containers. 

This means that were you before specified the path to the file specifying the timezone, now you must set the time zone code. This means that if it says ``global.timezone: "/usr/share/zoneinfo/Europe/Oslo"`` now, you should change it to ``global.timezone: "Europe/Oslo"``..

``Europe/Oslo`` is the default value. If this is your local timezone, you can delete it from your helm value files.

<!--ID 61ba9c1b-e6d2-30ec-a939-1491b8d7691c -->
**#23637 Genus 11.0.0-alpha.4 and later requires Genus Operator 7.0.0-rc.0 or newer**

Due to changes to how we authenticate with the docker repository, any versions after Genus 11.0.0-alpha.4 will require Genus Operator 7.0.0-rc.0 or newer to run in the same namespace in order to be allowed to pull images.

<!--ID de7d7ed9-b92e-e6b6-10ed-a4e4fa272fbe -->
**#23642 Stricter data type interpretation**

Is some cases, Genus has accepted a property to be modeled as a different type that the actual type in the database.

This is no longer permitted. Genus will stop, and an error message will be generated describing the problematic property/column.

Tip: Try https://<hostname>/--/api/session/studio/validation?format=md&level=error&rules=DataType

<!--ID 3cfca1e4-d0b5-80d8-99ff-f11eb5236a3e -->
**#23643 Genus 11.0.0-alpha.27 and later fails with deploy error:  no matches for kind "ServiceMonitor"**

Genus deploys servicemonitor-resouces which requires Prometheus to be installed in the Kubernetes cluster.    

If you get the following error on deploy Prometheus is not installed:
*Error: UPGRADE FAILED: [resource mapping not found for name: "klp-skade-origin-authentication-service-servicemonitor" namespace: "" from "": no matches for kind "ServiceMonitor" in version "monitoring.coreos.com/v1"*

**Solution is either to:**
- Install Prometheus in the cluster
- Set the following helm-value under global:
```
servicemonitor:
  enabled: false
```

<!--rntype05-end   BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Major new functionality
<!--rntype06-start MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID c8346668-3218-4386-bdd8-177666dde878 -->
**#23641 New effect: Split Document**

The Split Document effect separates pages in a document to new documents. It is the opposite of Combine Documents.

<!--ID ef32f590-ea52-5eac-76ef-2949ad03e51c -->
**#23644 Handling of REST and SOAP requests moved to its own microservice**

In version 11.0.0-beta.3, REST and SOAP requests are handled by a new microservice, called the rest-soap-service. 

This means that they are now processed independently of traffic coming from Genus Web, and should improve performance in cases where there is simultaneous traffic coming from both sources.

This also means that if you have made adjustsments to the default configuration for the core-service to handle heavy REST or SOAP traffic, these configuration changes should be made to the rest-soap-service instead.

<!--rntype06-end   MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Minor new functionality
<!--rntype07-start MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 02388a5d-ee79-f040-1a90-62ba4d97e271 -->
**#23632 Access to request/response data for REST services in action flow**

The *Action Orchestrator* object available in action flows extended to include request data for a published REST service and request/response data for last consumed REST service.

The data is structured into two groups: *Rest Service - Last Consumed* and *Rest Service - Published*:

-- **Rest Service - Published**

---- **Request**

------ Method

------ Path

------ Query String

------ **Headers**

-------- Name

-------- Value

------ **Content**

-------- Media Type

-------- String Data


-- **Rest Service - Last Consumed**

---- **Request**

------ Method

------ URL

------ **Headers**

-------- Name

-------- Value

------ **Content**

-------- Media Type

-------- String Data

---- **Response**

------ **Headers**

-------- Name

-------- Value

------ **Content**

-------- Media Type

-------- String Data

------ Status

------ Status Text

<!--ID 4d111b34-4114-bc01-8d0a-fb0ec1965a55 -->
**#23635 Model instance recycling is now configurable, and disabled as default**

Each application model instance will use more and more memory as it processes different requests and requires more parts of the model. In Genus 10.23 we added model instance recyling, which is a way to prevent excessive memory usage by the core service. This works by having each instance of the application model running in a core-service recycle after handling a certain amount of requests. 

This worked well for limiting the memory usage, but at the expense of performance and caching. 

In Genus 11.0, we are making some adjustsments to this functionality by turning it off as default, and making it configurable for those who want to use it.

**If you are noticing that the core-service is using excessive amounts of memory, consider doing the following adjustments to your helm value config:** Specify a min and a max value for how many requests each model instance should handle before getting recycled. Both a min and a max value is needed to have a degree of randomization for when the recycling happens, so not all the model instances will recycle at the same time.

```
global:
  modelInstanceRecycling:
    min: NNNN
    max: MMMM
```

<!--ID 3f7d17cd-9ca6-9850-cdc5-3bdbbdff11c8 -->
**#23638 Add contact information for bug reports**

If there is a crash in a Genus runtime, an automatic bug report is sent to Sentry. Often it is helpful for R to know who to contact if there is a need to discuss the bug or ask for more information regarding the case.

To provide this contact information, please use the helm value ``global.contact``, which can be either an email, name or phone number where R can reach someone responsible for the application.

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
