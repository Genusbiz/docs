---
title: Release notes for Genus release 2019.2.
description: User-visible changes to Genus from release 2019.1 to 2019.2.
author: jtroset
---
# Release notes for version 2019.2

## Introduction

This document lists all user-visible changes to Genus Apps since the previous release.
 
This release note will be updated prior to the release and may also be updated as long as the release is available, e.g. with information of new patches or known issues. Please take note of the [installation and upgrading](#installation-and-upgrading) comments, and the release notes [change log](#change-log).

## Installation and upgrading
 
Prior to upgrading to this release, you must:
* Upgrade to the previous release. See the Release notes for the previous release for more information.
* Review the Expiry date of your Genus License File and install a new one if necessary.
* Review the rest of the release notes for this release.
* Please note that there does not exist any Genus Upgrade Assistant for this upgrade.
 
For general information about installing and upgrading Genus Apps, see [here](../installation-and-configuration/index.md). We especially recommend reviewing the [System Requirements](../installation-and-configuration/system-requirements.md) article.

## Important issues in this release

There are currently no critical issues in this release.

<!--rntype01-start INSTALLATION / UPGRADE. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->

<!--rntype01-end   INSTALLATION / UPGRADE. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
<!-- release note type 2 is missing. That's ok.-->

## End-of-life functionality

End-of-life functionality is functionality that was available in the previous release, but is no longer available in this release.
<!--rntype03-start END-OF-LIFE. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 57d04bda-a008-411e-98c0-1b21cca60f60 -->
**#23215 Gantt and Timeline controls**

Both the Gantt and Timeline user interface controls will be discontinued. Timeline functionality will be considered added in a later release, but tailored to better fit in with our other controls.

<!--rntype03-end   END-OF-LIFE. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Deprecated functionality

Deprecated functionality is available in this release, but will (most probably) no longer be available in the next release.
<!--rntype04-start DEPRECATED. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
There is no deprecated functionality in this release.
<!--rntype04-end   DEPRECATED. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Breaking changes

This section lists important changes introduced in this release. You will need to use this list in order to understand the changes you might need to make to your application to support the new release.
<!--rntype05-start BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 3287e06b-fefb-4bb7-bbcd-446b10470cad -->
**#23210 Analyse** (Desktop;Web)

Modified permissions required to list analyses on web. In order for an analysis to show on web, we now require both FindAndList & ReadAndExecute.

<!--ID a75731f5-c5a7-4029-b0af-7ba954890f9f -->
**#23230 Line charts with a single category may lose some values** (Desktop)

Prior to this release, only the Lines chart had the possibility to group values by "Values" vs "Values not split by Category". 
It was possible to add values to the "Values" group even when no "Split by Category" was defined.
This was not supposed to be the case, so after this release, only the "Values not split by Category" group is available when only a single category is defined.
For Line charts with a single category, all values not defined in the "Values not split by Category" group will therefore now be gone.

<!--rntype05-end   BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Major new functionality
<!--rntype06-start MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
There are no major new functionality in this release.
<!--rntype06-end   MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Minor new functionality
<!--rntype07-start MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 606ea95b-b89b-4bca-9f2d-20e29f78604f -->
**#23171 Implemented options to specify content type for Multipart requests in Consume Rest Service effect** (Desktop;Services)

It is now possible to specify the content type of both the root of multipart requests (typically multipart/form-data or multipart/mixed) and also for the individual parts og a multipart request.

<!--ID a45c231a-3fbd-46ca-97f7-0ec8d1917a7b -->
**#23172 Context menu closes on Escape and clicks** (Desktop)

The context menu (right-click menu) now closes on Escape and clicks

<!--ID 8bc8ea13-e641-4bfa-bf01-7114170c3a6e -->
**#23173 Better handling of "The data mart has new data"** (Desktop)

When  the data mart has new data, we load the new data and try to keep the current selection. A snackbar message notifies the user that "The Data Mart has been reloaded with new data".

<!--ID 8c5a44d5-d72d-44e3-a761-ad4bdab73fff -->
**#23174 Better handling of tile rendering errors** (Desktop;Studio)

If tile rendering fails due to an unknown error, we only display "Rendering tile failed" on the tile, instead of showing a modal/dialog you have to close.

<!--ID 25060f68-c16c-41e1-ba46-c03470799384 -->
**#23175 Display a message if a bookmark has been deleted** (Desktop)

A small message (snackbar) is shown to the user if he/she tries to open a bookmark that has been deleted (ie. does not exist).

<!--ID 7ad63bbc-55f4-448b-953b-5d6c08cc3339 -->
**#23180 Sunburst can now be downloaded as an image**

<!--ID dcacd374-ea49-4137-a101-7609a5b6729d -->
**#23181 Added option to show details for fields when adding them to the published fields of a data mart**

<!--ID 5a0b8cfb-2397-4867-8bc5-e3f6a4e9531d -->
**#23194 Selections in Sankey** (Desktop;Web)

It is now possible to do selections in Sankey

<!--ID 466467f3-8914-48f2-aa9e-0050f4504dbe -->
**#23201 Handle special aggregation results in Discovery** (Desktop;Web)

Handle the special aggregation results NaN (ie. no observations), NegInfinity and Infinity

<!--ID 499511ae-8939-410a-8596-348b0b54f9c5 -->
**#23204 Subset added as option for mapping when opening tabls/forms/analysis** (Desktop;Web)

Added subset as a new mapping-type when specifying what data should be transferred when opening forms/tables from an analysis.

<!--ID 8e2d95d1-1721-43ba-a159-419e73284ff8 -->
**#23207 Added option to specify custom content-type in Export to File effect** (Desktop;Services)

To use this option, specify a value in Export to File effect -> Options -> Custom content-type. This option is only available if the effect exports data to Rest Response Body. In nothing specified here, the content-type is derived from the actual format of the exported data (as before).

<!--ID 6a02e15e-2185-40d9-89b3-c986476a992d -->
**#23209 Added option for showing week number in datepicker for Genus Mobile** (Web)

<!--ID 706f9879-4d8a-4ff7-9aa4-eb6b44ad3006 -->
**#23212 Analyses - Pointlayer** (Desktop)

Added new functionallity: Pointlayers can now be filtered on category subsets.

<!--ID 8e39167c-8612-49be-8b7c-fd27d7b458be -->
**#23213 Added Sizegrip on form for Local Objects** (Desktop)

<!--ID 9fa88834-1007-4950-b7a2-75bc1eb05952 -->
**#23220 Support for LDAP signing, sealing, and encryption (from version 18.45.75)** (Desktop;Services)

Back in August 2019 Microsoft released Security Advisory ADV190023 stating that a future Windows Update would change the default LDAP security policies. This would require an update from 3rd party software vendors to adjust to the new security requirements. After several revisions on this security advisory, Microsoft finally announced that

 > *"The March 10, 2020 updates, and updates in the foreseeable future, will not change LDAP signing or LDAP channel binding default policies or their registry equivalent on new or existing Active Directory domain controllers."*

Please refer to these articles for details:
 * https://portal.msrc.microsoft.com/en-us/security-guidance/advisory/ADV190023
 * https://support.microsoft.com/en-us/help/4520412/2020-ldap-channel-binding-and-ldap-signing-requirements-for-windows
 * https://techcommunity.microsoft.com/t5/core-infrastructure-and-security/ldap-channel-binding-and-ldap-signing-requirements-march-2020/ba-p/921536

In response to the original security advisory Genus has introduced new security settings to strengthen LDAP security. Even though Microsoft no longer will enforce new LDAP signing or channel binding by default, we strongly suggest applying the following appSettings configuration options introduced by this Genus release:

* **DirectoryContext:LdapAuthenticationType**: Allows the administrator to specify what authenticaion security flags that should be applied by Genus when acting as an LDAP client. The value is specified on the form "*Flag1* | *Flag2* | *...* | *FlagN*", where each flag is one of the values in the .NET Framework enum type [**System.DirectoryServices.AuthenticationTypes**](https://docs.microsoft.com/en-us/dotnet/api/system.directoryservices.authenticationtypes) and the bar character ("|") performs a *bitwise or* operation between these values. Please note that the **Encryption** (or **SecureSocketsLayer**, which is simply an alias for Encryption) is not possible to combine with **Signing** and **Sealing**. If you do not specify any flags Genus will default to "Secure | ReadonlyServer". The following examples are recommended alternatives that should be added to the `appSettings` section of `appSettingsOverrides.config`, located at `%ProgramFiles%\Genus\Server\wwwroot`:

   ```
   <add key="DirectoryContext:LdapAuthenticationType" value="Secure|ReadonlyServer|Encryption" />
   ```

   or

   ```
   <add key="DirectoryContext:LdapAuthenticationType" value="Secure|ReadonlyServer|Signing|Sealing" />
   ``` 

* **AuthenticationService:LdapEnforceLookup**: By default the Genus authentication service will try to avoid performing unnecessary LDAP queries during the authentication process. You may override this behavior by specifying

   ```
   <add key="AuthenticationService:LdapEnforceLookup" value="true" />
   ```

<!--ID b3a4412f-5087-42ea-b181-115eae4dc828 -->
**#23229 Prevent more than one value being grouped by Split by Category** (Desktop)

Can no longer define more than one value to be grouped by Split by Category in Analysis Designer. This introduces the concept of "Values not split by Category" for some tiles (i.e. all Column & Line types). In such existing tiles with two categories, all but one Value will now only be grouped by the primary Category.

<!--ID 914fe07c-46b6-49ae-92ce-24a1a0af38d1 -->
**#23232 Multiple datasets in separate databases in azure is supported** (Desktop)

There is still a problem with keeping data in separate databases in azure. This is related to the location of the account-table. Search in audit trail is therefore limited in multi-database azure solutions.

<!--ID d7627870-5968-41c6-ba80-6fa744ed46b1 -->
**#23247 Added suppport for reading and writing JSON arrays containing simple values** (Desktop;Services;Studio)

Earlier versions of Genus supported reding and writing JSON arrays containing objects which would be used for reading and creating objects in data sources.

Now it is also possible to read and write simple values, for instance strings. When reading a string from JSON, a new object will be created where the string is stored into the mapped field, while when writing JSON, data vill be read from the mapped field for each of the objects in the data source.

<!--rntype07-end   MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Resolved issues
<!--rntype08-start RESOLVED ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 64225008-5d3f-4724-98ad-209428a3aae7 -->
**#23176 Removed option for creating formula in map layer values** (Studio)

Formulas for maps are not currently supported, but it was still possible to define formulas in map layer values. This possibility is now removed

<!--ID ce936e01-3fe3-4010-a8dd-ae8db39d4670 -->
**#23177 Number format on formula value was cleared after editing formula** (Studio)

Number format on formula value formulas are no longer cleared after editing formulas

<!--ID d7d65bbb-55ea-4d5f-9fe6-d21371b37330 -->
**#23178 Resolved by reducing thread-locking when dumping call stacks on errors** (Desktop)

<!--ID 23ab62a2-3f1a-4451-ac67-74cc89b55241 -->
**#23179 Forced lower-case when specifying virtual directory for a dataset to avoid cookie-conflicts**

<!--ID e653b8e1-46c5-4dd4-8829-9ed81e537085 -->
**#23182 Fixed doble save as dialog when saving analysis**

<!--ID 9d48a32a-1f59-4c2c-8a28-f9361fdbe26f -->
**#23183 Fixed problem with escape key closing analysis window instead of popup or menu**

<!--ID a9b65be8-a1a9-4b28-95ce-3714f5d70a63 -->
**#23184 Theme** (Desktop;Web)

Modified the appearance of some dialogs to be more user-friendly.

<!--ID 1ac7b1be-ffbc-42c8-8f4f-36d4f4931b4b -->
**#23185 Transposed Table** (Desktop;Web)

Fixed an issue where transposed table would not display values.

<!--ID 9b958d69-d20e-419e-8947-db0b8b03943e -->
**#23186 Summary** (Desktop;Web)

Fixed an issue where NaN would be displayed as result, instead of the actual result.

<!--ID 26f44e3f-2b00-4310-82d9-77c5c5316493 -->
**#23188 Open Analysis** (Desktop;Web)

Fixed issues that could lead to the current selection not being properly applied when switching between different analysis.

<!--ID f67ef90b-51ac-4fb6-83ec-725fb17e64de -->
**#23189 Theme** (Desktop;Web)

Fixed an issue where the theme editor did not start properly, and modified the default theme

<!--ID a6d056f7-6a20-4452-8286-3128ca5b955e -->
**#23190 Variable Radius Pie** (Desktop;Web)

Fixed an issue where when making an selection, the wrong item would be selected

<!--ID eca11c27-15d9-4937-b4d0-c8756cf066a8 -->
**#23191 Improved hotspot- and heatmap-layer for maps in Analysis** (Desktop;Web)

The map layers now supports using aggregated values for intensity (heatmap), and size and color (hotspot). 

Heatmap now also supports filtering.

<!--ID 26c34e2a-e11d-4cb1-9aa6-7dc5ea7e1390 -->
**#23192 Clustering of points in maplayers now toggles correctly** (Desktop;Web)

Clustering of points in point-layer and hotspot-layer should now work as expected.

<!--ID b1acf31e-6d86-40a2-967c-920e3733db50 -->
**#23193 Icons on points in pointlayer for map in analsysis now displayed correctly** (Desktop;Web)

<!--ID 357a2c0e-924d-4995-b783-a98ad3a03a4e -->
**#23195 Floor & Ceiling** (Desktop;Web)

Fixed an issue where setting the floor equal to zero would cause the graph to display empty.

<!--ID 66738bf0-8272-409c-a8a6-e6c8f07a4803 -->
**#23196 Selector** (Desktop;Web)

Redesign of how the selector works in terms of applying selections in the global scope.

<!--ID 41bf5d6a-354c-4d76-a49b-faf6bc2e3231 -->
**#23197 Fixed issue where "Open in new window" did not appear in the right-click/context menu** (Desktop;Web)

<!--ID 8a3d9c61-86b9-4e64-b5dd-8af040711b9c -->
**#23198 Table** (Desktop;Web)

Fixed an issue where limit would always be set to 1, even if the user modified the value.

<!--ID 4ffc490c-cab5-44bd-8dca-97a3888009e4 -->
**#23199 Better error handling in Discovery** (Desktop;Web)

Improved error handling in Discovery. If an unknown error occured, the user won't be presented with unnecessary, technical error information

<!--ID a6a04adc-4b0e-47d9-bcf8-a59be5b6edc8 -->
**#23200 Column total for formula with "zero if missing"** (Desktop;Web)

Fixed an issue where a total aggregate (a sum) was not displayed for a column if any of the observations it was aggregating over was missing.

<!--ID 4fd53f02-9523-47dd-884c-43f1a66ac005 -->
**#23202 Browsing through objects in a form containing an RTF editor marks the objects as changed** (Desktop)

In a form containing an RTF editor the object is marked as changed when the user browses through objects using the next/previous functionality. The save button is immediately enabled, and it is not possible to go to the next or previous object before the object is saved.

<!--ID 9e3dc11f-9857-4490-85fe-6585f06b1540 -->
**#23203 Data validation error for an object class property containing an RTF document not displayed correctl** (Desktop)

If the data size is set for an object class property containing an RTF document, violation of the size is not displayed correctly by the RTF editor.

<!--ID 961d0ee6-4550-4270-9854-24451cf2e377 -->
**#23208 Fixed problems with search in Advanced Lookup Field** (Desktop)

Fixed error where search was not performed when user removed from search text using backspace and also problem that caused the search text to be cleared after the initial search.

<!--ID db3c4c53-e90c-481a-acd4-c202004d8e6e -->
**#23211 Analyses - Category subsets** (Desktop)

Fixed an issue which could have lead to invalid category filtering when applying multiple subsets.

<!--ID 7358410a-fef4-4b73-9551-5bf707b276ec -->
**#23219 Fixed incorrect handling of values in IntegerDateEdit** (Desktop)

The field's date was not used when displaying date picker and was not displayed after value was selected in date picker.

<!--ID 462fd095-0318-463f-94c9-0ae81587d958 -->
**#23225 Fixed error when opening two email windows in sequence.** (Desktop)

<!--ID 31dffc3f-5056-46f5-aa1e-226fcb0b7a47 -->
**#23228 Prevent losing Category objects from Split by Category when toggling fullscreen** (Desktop)

<!--ID e5d0ffda-012f-43ec-922f-cbfdd331f7df -->
**#23231 Line chart no longer lose values**

As described in an earlier release note, some Line charts would lose some values after a recent release. This is no longer the case.

<!--ID f3a13756-e463-45db-8390-7085f1eb0aaf -->
**#23234 Open a form from Context working again in Dashboard** (Desktop)

Opening a form from a Dashboard through "Context" no longer gives a "Selection is empty" error.

<!--ID 9a72bcdb-dd1d-426b-99a5-7423b969b8e8 -->
**#23235 Duplicate contextual tabs in ribbon** (Desktop)

Occurs when switching between a form with a visible contextual tab in the main window to another form or table by clicking on a shortcut. When switching back to the form, the contextual tab is duplicated.

<!--ID 456df900-6fc2-4a21-976a-9119479f273c -->
**#23236 Modal messages not displayed after executing "Invoke a File" effect.** (Desktop)

Effects such as *Show a Confirmation Message* and *Show a Message*, are not displayed if executed immediately after an *Invoke a File* effect when the option *Wait until the file is closed* is selected.

<!--ID 7cb133e7-5e86-4f0b-8061-c13829e7bb61 -->
**#23237 Genus terminates with an error when collapsing a group in a multidimensional table** (Desktop)

Occurs if a cell within a group is selected when the group is collapsed.

<!--ID 599d0ff6-7683-4672-be10-0d33a9e630a7 -->
**#23238 Values for time dimensions sorted in alphabetical order in the column filter drop down in tables** (Desktop)

Values sorted in alphabetical order and not logical order. Values are now sorted by date.

<!--ID 5002692b-9e46-45a2-abe6-31ff319bd53d -->
**#23239 Genus terminates with an error on right-click in the action flow diagram** (Studio)

<!--ID 6138a4ba-3b34-4800-b1db-e2922ecfd8ea -->
**#23240 Not possible to unhide search groups for an object class** (Studio)

If a group (1:N property) previously was hidden in the search setup fro an object class, it is not possible to unhide the group at a later point.

<!--ID 37abb71d-afda-49ec-9ee9-c21f7337b015 -->
**#23241 Font size for label ignored for input fields in forms** (Desktop)

Occurs if a control, such as a text edit, is placed on the second or any succeeding tab sheet.

<!--ID 75675874-ab3e-411c-846c-7deaaa05a3e6 -->
**#23242 Paste security on local tasks in a form does not paste security to all selected tasks** (Studio)

Security pasted to the first selected task.

<!--ID d17b1147-fd55-4403-8fa0-5292adc8978b -->
**#23243 Published field not available in expression for calculated field in data mart** (Desktop)

If a new field is published to a data source, the field is not available when writing expressions for calculated fields. Need to save the data mart and restart desktop to access the field. Occurs if the field is published using the context menu in the data view. However, If the field is published through the properties pane for the data source, the field is available immediately as expected.

<!--ID 45fc917a-a3d8-4d2f-a915-67c67e0c66f7 -->
**#23244 Pressing arrow keys in the IntegerTimeEdit control does not update the visual value** (Desktop)

Pressing the arrow keys should increase/decrease the current value to the nearest quarter. However, the visual value is not updated until the control loses focus.

<!--ID 674a5586-5b25-4c8d-b51f-303f4fdf2643 -->
**#23245 Genus terminates with an error when searching for data between two integer time values** (Desktop)

<!--ID 2863ffeb-d384-45f4-ab72-9c7c652ef0de -->
**#23246 Form corrupted if fields are dragged from data sources into a grid control** (Studio)

If the form is saved after columns have been created by dragging fields from data sources, it is no longer possible to open the form in Studio.

<!--ID 17a27d4c-9ce0-45ba-bbae-4a4435fe0174 -->
**#23249 Genus terminates sporadically if an unsaved document is closed** (Desktop)

Typical case to reproduce: Start Genus, open a MS Word Document (large file size). Do some changes. Close MS Word, and click "Yes" in the save changes confirmation dialog.

<!--rntype08-end   RESOLVED ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Known issues

Known issues are errors or lack of functionality. Known issues may be solved in a future release based on customer demand.
<!--rntype09-start KNOWN ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 82f3c111-175a-45ca-b57c-814418786998 -->
**#23233 Fixed error that randomly caused window to crash during initialization** (Desktop;Studio)

<!--ID c0f8dd28-eb63-4c13-a4a4-34a5f2b1c482 -->
**#23248 Fixed problem where the content of a table is obscured by search panel on smaller screens.** (Desktop)

<!--rntype09-end   KNOWN ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Tips and hints

Tips and hints are design decisions or answers to support questions that may be of general interest.
 
There are no tips and hints specifically targeting this release.

## Change log
* 2019-04-01 Released (builds starting with 18.45.21).
* 2019-03-27 Created (builds starting with 18.45.1).
<!--changelog CHANGELOG. DO NOT CHANGE THIS TAG. ANY CHANGES BELOW WILL BE DELETED.-->
