---
title: Release notes for Genus 10.4.
description: User-visible changes to Genus from release 10.3 to 10.4.
author: jtroset
---

# Release notes for Genus 10.4

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
<!--ID e1917c12-f88e-45ae-b185-4146fa5f12e8 -->
**#23328 Diagram component from yWorks in Desktop** (Desktop)

The component will be replaced in a later release by a new web diagram component

<!--rntype04-end   DEPRECATED. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Breaking changes

This section lists important changes introduced in this release. You will need to use this list in order to understand the changes you might need to make to your application to support the new release.
<!--rntype05-start BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID d56098da-dfde-43e0-9010-1d72da87878c -->
**#23312 Changed how Elasticsearch endpoints are configured in helm values** (Services)

Insead of having to provide both the host and the port, it is now configured in an array:
```
Old:
genus-core-services.elasticsearch.host: https://elastic.example.com
genus-core-services.elasticsearch.port: 9200 
New:
genus-core-services.elasticsearch.hosts: ["https://elastic.example.com:9200"]
```
This also makes it possible to provide several endpoints, which are used in a round robin fashion.

<!--rntype05-end   BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Major new functionality
<!--rntype06-start MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 40301205-9ebd-4fc4-9f2c-a228c0098cbe -->
**#23285 Trace Log improvements** (Desktop;Services;Web)

- Lots of technical, debugging and timer related trace entries removed
- New filtering attribute "requestId" added. Makes it possible to filter down to a single web api call in a multi threaded scenario (experimental)
- Trace level on server is default warning
- Trace level on server is now set in the Trace Log tool

<!--ID badb727a-d250-4fe0-9bb7-675f336fa023 -->
**#23332 Data Mart Load plan v2  GUI for scheduling on Web** (Desktop;Web)

Data mart load plans are now configured in the web interface. The configuration is greatly simplified. The load plan only states what time of a day the datamart should be available, and the maximum age of the data in it.
Old load plans are deprecated, but will still be considered in a transition period. The existence of a new load plan will make the old void.

<!--rntype06-end   MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Minor new functionality
<!--rntype07-start MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 00c46043-3233-41ee-8bd8-1ba97a29f81d -->
**#23284 Modified deserialization of non-modified objects in server side actions initiated from web client** (Web)

This new functionality changes behaviour in the following scenario:

- A web client calls a server side action.
- The server side action uses an unmodified object from the client as input.
- The unmodified object is available to the server from persistent storage (rdbms).

Previously the unmodified object was deserialized in the request.
Now only the identifier (and a version-stamp if such exists) is deserialized, the rest of the object is read from persistent storage.

Effect:

- If the non-modified object held by the client is outdated, and there is a version-stamp, an immediate concurrency report is returned to the client.
- If the non-modified object held by the client is outdated, and there is no version-stamp, the action is performed on the current version of the object.

Changes to consider in actions:

- Some modellers have added read-objects effects to the start of server actions to ensure updated objects. This should no longer be nescessary, thus improving performance.

<!--ID 9699bac5-bad4-453c-b374-c85c2f6809d4 -->
**#23311 It is now possible to override Sentry DSN endpoints for all microservices**

<!--ID cef64fe5-931a-4fea-952a-72823734fd88 -->
**#23319 Added support for saving changes in Dashboard Designer using Ctrl+S** (Web)

<!--ID 315abe3d-c601-4877-861b-0ed3700fb256 -->
**#23320 Name of latest version from a database vendor is now suffixed with " or later"** (Studio)

This is to specify that support for version "n" also indicates support for versions later than "n"

<!--ID bc533c72-1456-4212-a73e-4e952f780998 -->
**#23330 Open desktop table from Web** (Web)

It's now possible to create links to desktop tables in the sitemap. You can add multiple views just as easy as in the navigation pane. 

This is typically used for advanced tabels that uses functionality not supportet on Genus web.

<!--ID 09e8774f-2e1f-49bf-ae24-ce591273586b -->
**#23331 Permission panel on Genus Web**

A panel for adding and removing permissions to Data Marts and Dashboards are now available on Genus Web

<!--ID 605149e7-0527-4f85-95e1-5bfb78ecedf7 -->
**#23333 Improved thread handling** (Services)

Thread handling in services is optimized. The result is an improvement in response times when there is a high load on the service.

This feature is still experimental. To enable it, add ``__GDEF_CEH_THREAD_SLEEP_ONE__ and __BASIC_THREAD_POOL_SLEEP_ONE__`` to the experimental feature table

<!--ID 8e9aa527-3a40-49b9-a467-2c01b8f6067d -->
**#23334 Self-learning algorithm to reduce On Request Field-SQL queries** (Desktop;Services)

An optimization technique which reads only fields nescessary for an operation can sometimes miss on some fields, resulting in these fields having to be read in a separate query. A learing algorith is implemented to amend this, which results in improved performence in such cases.

<!--ID 43634257-fc51-4678-a704-6eac511621d8 -->
**#23335 Affinity scheduling** (Services)

When running a Kubernetes cluster with multiple nodes it is sometimes useful to spread critical resources across multiple nodes.  It can also be useful to schedule heavy computing tasks on multiple nodes where they will be executed more efficiently. 

Genus 10.4 now supports affinity scheduling for all pods. This can be turned on with the following settings:

.affinityScheduling.enabled 

.affinityScheduling.namespaceListForPodAntiAffinity

See https://docs.genus.no/developers/installation-and-configuration/install-genus-10/value-files/genus-10.4.html for more information

<!--ID 07daadf4-b097-4b32-8362-e237c5fe35ac -->
**#23440 Defaul value for "Lock Positon" flag is set to "true" in Dashboards** (Web)

This entails that the user will not be able to resize or move Tiles, unless the flag is manually set to "false"

<!--rntype07-end   MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Resolved issues
<!--rntype08-start RESOLVED ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 36854628-2b8c-4246-b03d-b766ffeb389b -->
**#23309 "On Value Changed"-Events did not trigger when page was opened as modal via client actions.** (Web)

<!--ID df3051f0-7eca-4485-8960-b8e5554380d2 -->
**#23313 Changed items in Lookup to display a link and changed activation from Ctrl+Click to normal Click** (Web)

<!--ID d5cce205-2fcd-4262-99ae-6ebd00409ec1 -->
**#23314 App designer fails when adding an URL lik to sitemap** (Studio)

<!--ID 93da22f5-b1cc-4d86-ae04-294895fc7e03 -->
**#23315 Navigate to page in new tab displays a meesage if the current page contains unsaved data** (Web)

Should not be asked to save changes since the page is not abandoned or left.

<!--ID 1a5123e5-6595-4bf5-b62c-f931ff8f5f53 -->
**#23316 Parsing of expressions defined in Studio containing Norwegian specific letters fails on web** (Web)

Occurs if you have an object class containing a letter such as &aelig;, &oslash;, or &aring; which is referenced in an expression (e.g. a value formula or data validation defined in Studio).

<!--ID 520555cb-7d35-4455-8b13-d544652a9e4e -->
**#23318 Fixed error in Theme editor when reading theme data.** (Desktop)

<!--ID c4800c60-7ead-48f3-a1a0-65c51a26ab20 -->
**#23321 Border was not visible on Diagram items with white color** (Studio)

<!--ID 5d79f13a-7b4f-41bc-86ca-e746a9c12299 -->
**#23322 Fixed errors related to how Helper Text was displayed in various Web controls** (Web)

<!--ID b85eb3ba-341c-46de-a8c6-b119f5dec5c3 -->
**#23327 Fixed automatic naming of controls when added to Page** (Web)

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

- 2020-11-10 Created.
<!--changelog CHANGELOG. DO NOT CHANGE THIS TAG. ANY CHANGES BELOW WILL BE DELETED.-->
