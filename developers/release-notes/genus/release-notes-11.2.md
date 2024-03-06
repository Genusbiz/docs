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
<!--ID b05bbeae-bccc-4816-a8a0-82cef1ab34d1 -->
**#23661 Width & height are removed from several actions, instead being determined by page preferred size**

Width and height are removed from the following client actions:
   * open page modal
   * open select objects dialog
   * show callout

Their sizing is now solely determined by the specified size of the contained page. In the case where the width or height of the page is specified as stretch, Genus now relies on "preferred width/height", found in the page config.

Combining preferred width/height with non-stretchy viewports is not intended.

Sizing specified by the contained page will not necessarily produce equal sizing as previous action configs. Layout introduced by these elements (e.g. modal borders, headers etc.) are additional to the page layout and size, whereas the previous configs determined the element's entire size.

Additionally, "Page / Component" controllers specified as fit-to-content will now use the preferred width/height of the page, if specified.

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

<!--rntype05-end   BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Major new functionality
<!--rntype06-start MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
There are no major new functionality in this release.
<!--rntype06-end   MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Minor new functionality
<!--rntype07-start MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 987319d9-0efa-46ea-8f86-b01a36ae8c80 -->
**#23667 Changes to how scaling of pods work after downtime/restart/publishing**

Previously, at the start of an availability window or after a restart of the runtime, Genus Operator would attempt to scale the microservices back to the number of replicas they would have before the downtime or the restart.

This functionality has been simplified, and now works as follows:

- If a deployment is scaled from Genus Operator, scale back to this value.
- If a deployment is scaled by a Horizontal Pod Autoscaler (HPA), scale to 1 and let the HPA take it from there.
- If none of the above, scale back to the default value set by the helm value when deploying Genus.

In practice, the result will be the same as before, **except** if a deployment is scaled by a third party, such as from Kubectl. Previously, Genus Operator would attempt to scale back to this value, but this is no longer the case.

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
