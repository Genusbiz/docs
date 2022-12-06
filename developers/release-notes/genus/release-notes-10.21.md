---
title: Release notes for Genus 10.21.
description: User-visible changes to Genus from release 10.10 to 10.21.
author: jtroset
---

# Release notes for Genus 10.21

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

<!--ID 08ca042b-f997-aa94-52da-4b86bcb8d0bc -->

**#23585 It is now possible to reference Genus Releases using only major.minor version**

It is now possible to reference a Genus Release using only the major and minor part of the version number. As an example, it is now possible to say that you want to deploy version "10.19" of Genus, instead of specifying the whole version number; "10.19.0-beta.12".

When using this shorthand reference, you the latest version of Genus that matches the major and minor number is used. This means that you will probably get a new version of Genus every time you deploy, which might come with breaking changes. Using this reference in a production environment is therefore **not** recommended.

**Always specify the entire version number when deploying to a production environment.**

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
<!--ID ae331595-3d97-8eed-d02a-6a32d7ec2a2b -->

**#23584 Viewports uses the width of the area it is inserted into instead of width of web page**

The behavior for viewports has been changed so that the size it relates to is the size of the area a Page or component is inserted into.

If the Component or Page is inserted into a Dialog, Callout, Tab Control or Embedded Content, the width of this area will determine the breakpoint instead of the width of the web page. This may lead to unpredicted behavior in existing cases where different viewport breakpoints are already in use.

<!--rntype05-end   BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->

## Major new functionality

<!--rntype06-start MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->

There are no major new functionality in this release.

<!--rntype06-end   MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->

## Minor new functionality

<!--rntype07-start MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 707553fa-ba24-43c5-9645-7a4e55896002 -->

**#23568 Browser Title can now be assigned within a page in page settings (part of WCAG)**

<!--ID 5e5b48e6-87ad-40ce-a16c-e1d1ebffc1c5 -->

**#23569 New functions available in Expression Language**

- WebRuntime.currentApp().title() _- returns then title for the current app_
- WebRuntime.currentPage().title() _- returns then title for the current page_

Introduced so that you can include this information in a custom defined browser tab title in your app. Other relevant functions you can use is

- DataPartition.activeDataPartition().name() _- returns then name of the current data partition_
- Directory.name() _- returns the name of your app model_

<!--ID aaca762e-006b-21b2-3491-e87a1ecef7b4 -->

**#23575 Rating control available**

The Rating control has been added to the control library. The control might seem similary to the Slider control. Given a range of unmbers, the user can, for istance, set a score with this control.

<!--ID 75b5903c-785d-a788-5d9e-ce54b3e046a2 -->

**#23578 Relation Dropdown**

New control created - Relation Dropdown. Used to create relation objects. For instance the relation between an e-mail and a mailing list.

<!--ID b32c1b66-efe0-ea5a-3f11-003cd0c90323 -->

**#23579 Relation Chip**

New control created - Relation Chip. Used to create relation objects, as width the existing Relation Lookup and Dropdown.

<!--ID c17e5f37-a2ee-4654-b554-6f91ec09977e -->

**#23582 Dashboard: Actions can now be assigned Symbol and Screen Tip (Improved expressiveness and layout)**

<!--ID 5c09ae98-8a97-468f-9703-c78b7eea6dfd -->

**#23583 New Page Event: On Live Update**

On Live Update is added as a Data Event in page. The event can be used to trigger specified action on live update messages, and has the possibility to be triggered for (1) all event types, or (2) a scoped set of the following events types: Created, Modified or Deleted. In addition, the involved data can be fetched using dynamic hooks in the Data Event setup in the Data Exchange filtering.

An example usage of this may be a view page displaying your tasks, and when one of the entries is modified (by another user), a snackbar displays an information box saying that "Task 1 was updated, and is now in state Awaiting Review".

Note: Modified messages contains the updated data object, not the data object in the page where it is triggered.

Note 2: If you want to use this feature, remember to enable Live Update for the involved object class and enable "Subscribe to Live Update" for the data source in your module (but do consider the overhead live update message distribution puts on the system, use with care).

<!--rntype07-end   MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->

## Resolved issues

<!--rntype08-start RESOLVED ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID e451c7b2-608e-4aec-898b-ca9a54006a93 -->

**#23567 File-utility-service memory and performance optimizations**

File-utility-service now utilizes content-type headers when converting files. Additionaly, the "Combine Documents" effect has been revamped, reducing conversion time.

<!--ID b3977025-eefc-4524-ab7b-3ae0a90a6e77 -->

**#23574 Dashboard: Material UI icons has been replaced with Fluent UI and global Genus style has been added**

All material UI icons has been replaced with Fluent UI icons, and the global Genus theme has been applied to Dashboard runtime and designer.

This _may_ result in a slightly different visual apperance of existing dashboards.

Some of the changes includes:

- Font-size for the Body style has been reduced from 16px to 14px.
- Font-size used in the Action Bar is reduced from 16px to 14px, making the Action Bar more similar to action bars in other parts of Genus.
- Font-familiy is now Segoe UI Web.
- Font-weight is reduced for certain styles, making characters slimmer.

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
