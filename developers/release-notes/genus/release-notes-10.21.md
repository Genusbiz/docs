---
title: Release notes for Genus 10.21.
description: User-visible changes to Genus from release 10.20 to 10.21.
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

<!--rntype01-end   INSTALLATION / UPGRADE. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
<!-- release note type 2 is missing. That's ok.-->

## End-of-life functionality

End-of-life functionality is functionality that was available in the previous release, but is no longer available in this release.
<!--rntype03-start END-OF-LIFE. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 46382d97-a0b7-145e-911d-42d9809dd8b5 -->
**#23617 Discontinued support for async execution of effects within a scope**

Async execution was limited to effects of type *Read Objects* and *Consume a Web Service*, and was originally implemented to improve performance in the Politiagent app on Genus Mobile (solved in Genus 10 using a combination of message queues and live update). 

The reason for discontinuing the functionality is based on that it not works as intended in all situations, and should be solved using other patterns and constructions.

<!--rntype03-end   END-OF-LIFE. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Deprecated functionality

Deprecated functionality is available in this release, but will (most probably) no longer be available in the next release.
<!--rntype04-start DEPRECATED. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
There is no deprecated functionality in this release.
<!--rntype04-end   DEPRECATED. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Breaking changes

This section lists important changes introduced in this release. You will need to use this list in order to understand the changes you might need to make to your application to support the new release.
<!--rntype05-start BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 9d0298f0-13d2-45db-bb70-3248e37308f9 -->
**#23612 All code handling of previous style concept removed, old pages might need to recreate styles**

All code handling of previous style concept removed. Pages that used styling in Genus version < 10.18 and have not been actively saved in Genus version 10.18 - 10.20, will need to recreate styling in Genus version 10.21.

<!--ID 3cec9831-5181-dfc1-ea53-8ee94aadf7e9 -->
**#23615 "Navigate to" as pre-text before app/page to builtin "Navigate to App/Page" effects has been removed**

<!--ID 6e8f37d0-e2eb-4dc6-6023-8bdfa150a966 -->
**#23621 New CardDAV service is now available**

The new address book service (CardDAV) is available. As the old service will be taken down shortly, you will need to update the address book URL in order to keep using the service. 

New URL: https://{hostname}/-/carddav/addressbooks/{address list name}/  

Address list links can be found under My Account -> Address Lists. 
API-key is used for authentication, and can be created under My Account. Use the API-key as password when adding the address list.

See a guide for how to add an address list on an iPhone [here](https://www.namecheap.com/support/knowledgebase/article.aspx/9353/2171/how-to-configure-caldavcarddav-on-iphone).

<!--ID b88b617e-3815-6f60-84be-b771ac86e0c6 -->
**#23622 Default filter on page and component**

When a page or component is defined with default filter None, the page or component wil not show any data if you don't override the setting when the page or component is used. 

Before 10.21 we assumed that this setting was wrong when mandatory filter where set and converted the filter to all objects.

<!--rntype05-end   BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Major new functionality
<!--rntype06-start MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
There are no major new functionality in this release.
<!--rntype06-end   MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Minor new functionality
<!--rntype07-start MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID d3710c59-d5fc-528e-371c-e09bba2125f7 -->
**#23611 Extended support for translating elements of the app model using texts from dictionary**

Support for translating elements of the app model using texts from the dictionary has so far been limited to visual elements in web apps and pages. One important aspect is the ability to translate data structure elements, such as object classes and object class properties, which can be reflected in the UI wherever such elements are bound to visual controls without the need for selecting a text locally in your page.

The aim is to completely replace the old mechanism for translating the app model (available in Studio from the Tools menu - "Translations (V1 - generated dictionary)"). There are still some elements which uses the old mechanism for translations, e.g. visual elements in desktop tables and forms. However if you are building a new application which is 100% web based you should no longer need to use the old mechanism for translating your app model.

The following elements of your app model can now be translated by defining a reference to a text from your dictionary:

- Object Class - Name
- Object Class / Uniquness Constraint - Message
- Object Class / Consistency Contraint - Message
- Object Class / Delete Constraint - Message
- Object Class / View - Name
- Object Class / View / Field - Custom Name
- Object Class / Search Property / Custom Name
- Object Class / Browse Path - Name
- Object Class / Search Path - Name
- Object Class / Range Property - Name
- Object Class Property - Name
- Object Class Property - Screen Tip
- Object Class Property / Data Validation - Notification Message
- Code Domain - Name
- Code Domain / Data Entry - Name
- Code Domain / Data Entry - Screen Tip
- Module / Data Source - Name
- Module / Data Source / Field - Name
- Module / Data Source / Field - Screen Tip
- Calendar - Name
- Calendar - Description
- Contact List - Name
- Contact List - Description
- Class Connection - Name
- Account Profile - Message displayed if an account is disabled

<!--ID 98256d84-bdea-20c7-4db8-d4379fdac1ba -->
**#23613 GeoJSON and Geometry Layers added to Layer Map**

Two new layers are added to Layer Map: GeoJSON and Geometry.

##### GeoJSON
Can be connected through data binding to a file or through an URL through plain text or an expression. The layer will reload if the URL or databinding changes.

##### Geometry
Is created based on data internal in Genus. Is connected through a data binding and lat/lng fields. The order of the data is imperative to the quality of created polygons if no more configuration is made. In order to make creating areas based on data simpler, two "transformations" are available: Convex and Concave.
Details of these can be found by searching "(convex | concave) hull". They essentially "gift wrap" the points, making order of data less important.

All Geometry layers can be grouped by using a grouping field binding. This enables putting several polygons into one layer. If grouping field is defined and no group is found on a data point, the point will not be included in the layer.

<!--ID c6ebb9d2-3141-8543-a960-263423472a32 -->
**#23614 Inline Interactive Tabsheet Designer**

The tabsheet control is now inline and interactive in the page designer. Tabs can be added and rearranged directly within the control, and content is edited inline.

Existing tabsheet controls are converted: Page Tabs and Related Places Tabs produce tabs with an Embedded Content or Dashboard control depending on the content.

Minor Breaking Change: Tab titles of type Auto are converted. Page and Component tabs will be assigned the same title as before (note: not dynamically anymore as the content can contain more controls). Dashboards could not be converted, and thus the tab will be "Dashboard" and has to be updated manually (breaking).

<!--ID 2865a886-f9c7-a5bb-59a8-9858df1ff030 -->
**#23619 Added shift select**

Hold shift while selecting a sibling client action effect to select it together with all sibling effects in between it and the originally selected effect.

<!--ID cc443132-8241-452c-7e29-22629db4b17b -->
**#23620 Added more fine-grained ungroup functionality to decision effects**

If a decision effect is ungrouped, all grandchildren (children og then, else-if and else effects) will be ungrouped. If a then, else-if or an else-effect is ungrouped, only the children of that effect will be ungrouped.

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
