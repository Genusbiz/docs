---
title: Release notes for Genus 10.20.
description: User-visible changes to Genus from release 10.19 to 10.20.
author: jtroset
---

# Release notes for Genus 10.20

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

<!--ID 11f567d7-f302-987b-4a1d-52e672bdef07 -->
**#23591 Genus 10.20 requires Genus Operator >= 6.2**

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
<!--ID c886add8-fb8c-8b85-b27c-d863e75e6615 -->
**#23587 Helm value global.deployed renamed to global.published**

The helm value `global.deployed` is renamed to `global.published`. This value now accurately reflects what it represents - wether or not the namespace runs on a published version of the meta model. 

This value should be 'true' for green and blue namespaces, and 'false' for origin namespaces.

The old value is deprecated in 10.20, and will be removed in 10.21.

<!--rntype04-end   DEPRECATED. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Breaking changes

This section lists important changes introduced in this release. You will need to use this list in order to understand the changes you might need to make to your application to support the new release.
<!--rntype05-start BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID d5716b2b-5cd3-0357-4b46-ae4663d28347 -->
**#23589 Dashboard: Introducing Grid Layout**

We're introducing a new editing experience called grid layout in dashboard.

With grid layout, you'll have more flexibility and options for tile placement and resizing, opening up new possibilities for creative layouts. And most importantly, it will be easier to embed dashboards in pages and make the content size according to available space (stretch). Combined with viewports, each dashboard can now be tailor made to any surface.

Tile heigh and width can be specified as "auto", "number of pixels" or "number of fractions".

This is considered a breaking change as it converts old layout (based on static columns and rows) to the new grid layout. <br> We recommend users to open existing dashboards to inspect them after upgrading to this version.

![](https://www.gravatar.com/userimage/176784465/c623065bf7750c410a087ed67cd93360?size=1000)

Grid Layout fundementals: https://css-tricks.com/snippets/css/complete-guide-grid/

<!--rntype05-end   BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Major new functionality
<!--rntype06-start MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 4e44ddd6-04d4-e302-3a65-2ed0d6e53335 -->
**#23592 Org chart: Sibling levels, styling, navigation and more**

<p>Several features have been added to the organizational chart.</p>

**Sibling levels**
<p>The configurability of levels have improved. Each level must now define its parent level, thereby defining the order of levels. Two levels can have the same parent level and thus be combined at the same depth in the chart.</p>

**Styling**
<p>Border styling has been added to both control and distinct levels. The styling cascades, meaning that styling properties configured on the control can be overridden on levels independently.</p>

**Navigation by pan, zoom, and keyboard**
<p>The scroll bars have been replaced by panning, yielding a more natural way to navigate the chart. Zooming has been added.</p>
<p>Panning and zooming are both available through keyboard navigation:<br>

* Panning is done with arrow keys or "h", "j", "k", and "l".
* Zooming is done with +/-.
* Return to default zoom and position (upper left corner) is done with "Esc".
* Return to default position is done with "c".<br>

The "c" shortcut is prone to change, i.e. being reassigned to centering on the focused node. The reset to default will then get a different shortcut.

A description of the ways it is possible to navigate the org chart could be necessary, but this is left to be modeled if desirable.
</p>

**Expression in title and description**
<p>Naming and description can now be configured using exprssions.</p>

<!--ID 40e31128-23b7-db38-9096-edb79c439959 -->
**#23607 New Pan and Zoom Effect**

A pan and zoom effect has been added to On Activate on buttons and on event handlers.  The effect is not available On Navigate To Page, due to the map not being available when this event is run. Initial view of Layer Maps can be defined with configurations in the control.

The effect supports three strategies for interracting with the map:
1. Auto: Fits all the markers in the map into view. It is based on data and not the markers themselves, so the effect will work on new data even though the markers have not been rendered yet. 
2. Coordinate and zoom: Displays the provided coordinates and zoom. If zoom is not provided, a default of 14 is used.  
3. Bounds: Displays the view defined by four coordinates. The fields are provided as north, west, south and east, but if i.e. north and south are switched, their coordinates will still define a bounding box in latitude.

<!--rntype06-end   MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Minor new functionality
<!--rntype07-start MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID b00313e4-7b2b-34d8-32cd-f16927ccb727 -->
**#23588 Added new GX language features**

## New JsonWebToken class

A new class, **JsonWebToken**, has been introduced with the following functions and properties:

**Type members**

* **createFromToken(token)** 
  - Creates an instance of JsonWebToken based on the string representation of a JSON Web Token (JWT).

* **createToken(headerAsJsonString, claimsAsJsonString, signatureAlgorithm, privateKey, expandKeyFromEnvironment)**
  - Creates an instance of *JsonWebToken* based on the specified claims and signing algoithm/key. The *headerAsJsonString* and the *claimsAsJsonString* parameter is a valid JSON format string containing the header and claims as defined by [RFC 7519](https://www.rfc-editor.org/rfc/rfc7519). The *headerAsJsonString* parameter may be null or an empty string if no additional header data is required by the specified signature algorithm. The *signatureAlgorithm* may be one of the following values: "HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "ES256", "ES256K", "ES384", and "ES512". To keep the *privateKey* a secret the *expandKeyFromEnvironment* parameter should be set to *true* (default) indicating that the *privateKey* parameter contains an expression using environment variable(s) on the form *"%SOME_ENVIRONMENT_VARIABLE%"*; otherwise, *false*, to indicate that the vaule of *privateKey* is to be used directly. 

  * **NOTE:** 

    * Specifying the private key directly as a string value is strongly discouraged in a production environment. Please use a separate store for secrets (like Vault) and make the value available as an environment variable instead.
    * The algorithms "HS256", "HS384", "HS512" (HMAC+SHA256/384/512) are *symmetric*, using a secret key for both signing and signature verification. Any string is accepted as signing key, but make sure that you provide a strong cryptographic key.

    * The other algorithms, "RS256", "RS384", "RS512" (RSA) and "ES256", "ES256K", "ES384", "ES512" (ECDSA), are all asymmetric and accepts a **private key in PEM format** for signing and a **public key in PEM format** for signature verification. **For more information on the PEM format, see [here](https://www.howtouselinux.com/post/ssl-certificate-pem-file)**.

**Instance members**

* **verifyTokenSignature(publicKey, expandKeyFromEnvironment)** 
  - Verifies the signature of a signed JSON Web Token (JWT) and returns a boolean value *true* or *false* to indicate the result. The *publicKey* and *expandKeyFromEnvironment* parameters are used like *privateKey* and *expandKeyFromEnvironment* above.

* **toString()** 
  - Returns the JsonWebToken instance as a JSON Web Token (JWT) string.

* **headerAsJsonString** (property) 
  - The header part of the JSON Web Token (JWT) formatted as a string on JSON format.

* **claimsAsJsonString** (property) 
  - The claims part of the JSON Web Token (JWT) formatted as a string on JSON format.

* **signature** (property) 
  - The signature part of the JSON Web Token (JWT) formatted as a Bsee64 URL endcoded string.

## New CalendarTime functions

JWT claims contain date and time using the **Unix time** format, specified as the number of seconds that have elapsed since the Unix epoch (excluding leap seconds). The Unix epoch is 00:00:00 UTC on 1 January 1970.

To support interoperability with Genus two new functions have been added to *CalendarTime* to provide conversion between CalendarTime and Unix time.

**Type member**

* **fromUnixTime(unixTime, returnAsUtc)** 
  - returns a *CalendarTime* instance based on the specified 64-bit integer "unixTime" parameter value. *returnAsUtc* is a boolean value of *true* if the returned *CalendarTime* value should be based on UTC or *false* if the value should be based on local time.

**Instance member**

* **toUnixTime(inputIsUtc)** 
  - returns a 64-bit integer representing Unix time value based on a *CalendarTime* instance. *inputIsUtc* is a boolean value of *true* if the *CalendarTime* value is based on UTC or *false* if the *CalendarTime* value represents local time.

<!--ID b0c672c9-9acd-4638-a622-87ef10cf80ff -->
**#23590 Added new GX language features**

Features introduced in order to support starting an app with custom query parameters which can be parsed and included in logic at startup.

**Access to the browser URL** 

*WebRuntime.browserURL(): URL*

Returns a value of type URL.


**Extract the value for a given query parameter in an URL**

*<url-value>.queryParameterByName(<name: string>): string | null*

Returns a string or null. Note that the name of the parameter is case sensitive.

So, to extract the value for a query parameter for the current browser URL you can write

*WebRuntime.browserURL().queryParameterByName(<a-name>)*

If the url of your page is "https://example.com/?searchTerm=abc", *queryParameterByName("searchTerm")* would return the string "abc".

<!--ID 0712296a-5ee4-6b89-22ba-f35b92b62728 -->
**#23594 Sorting Apps**

It's now possible to the Apps on the start page by selection the Sort option on the Apps node in studio

<!--ID df68913e-1ea5-a55c-9ae2-82cf052b5cb4 -->
**#23595 General Files can now be downloaded using the Download File effect**

An example usage may be a call to a Server Action to create a mail merge document in a General File, which is transfered out to the Client Action and then to be downloaded on the client.

Tech note: The filedata is stored in blob storage, and is fetched directly to avoid/reduce use of the database.

<!--ID aabf33de-b275-c91b-bdc7-09a0837ea9ac -->
**#23596 Time Zone can now be assigned for a Data Mart Load Plan availability window**

<!--ID 81dda9a9-9e02-1a2c-ad0f-4d355202e965 -->
**#23598 Client action designer multi select**

By holding ctrl while selecting a new effect node in a client action designer tree, you can now select more than one node. Ctrl-pressing an previously selected node will unselect it. 

Multi select is relevant for highlighting several nodes at once, grouping nodes together and for deleting more than one node at once.

<!--ID f27ae635-ba19-382a-2ddb-a4961c9e6648 -->
**#23599 Improved "esc" key shortcut in client action designer**

Previously when pressing the "esc" key in the client action designer tree, it would just unselect the selected node. Pressing "esc" now will select the nearest parent node to the selected node, similarly to pressing "esc" in the page designer.

If multiple nodes are selected, the selection will be cleared

<!--ID 104488d4-0099-24fa-95d3-8e26dfd7ca4e -->
**#23600 Added while nodes to client action**

In the list of block nodes in the client action designer, you can now choose a while node. A while node acts like a while loop and expects child nodes within it. In the while node edit panel, one enters a boolean expression. The while node will evaluate the expression, and if it evaluates to "true" the child nodes will be sequentially executed. After all child nodes are executed, it will evaluate the expression once more and repeat untill the expression evaluates to false.

Break and continue nodes are supported. If a break node is executed within a while node, the execution will break out of the loop. If a continue node is executed, the remaining child nodes will not be executed, and a new loop cycle will start.

<!--ID 967bf7e3-6a27-f44c-1846-81547ca72fbc -->
**#23602 More varied cursor modes on Layer Map**

The cursor on Layer Map is now a [pointer](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor#:~:text=information%20is%20available.-,pointer,-The%20cursor%20is)  when On Location Click is defined, [move](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor#:~:text=to%20be%20copied.-,move,-Something%20is%20to) symbol when panning map by dragging with the mouse and [grab](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor#:~:text=be%20carried%20out.-,grab,-Something%20can%20be) when On Location Click is not defined (as previous default)

<!--ID 728c84d2-385d-45b2-129c-22cf9cfcc8f4 -->
**#23604 Callout on Layer Map markers**

Callout has been added to  On Activate on markers in Layer Maps

<!--ID c6bec097-0e5c-8415-6251-2d7c5671f78c -->
**#23608 More options to initialize map**

New configurations for initializing map has been added. These are the same strategies as for the pan and zoom effect also introduced in this released. See that release note entry for more information.

The initialization will, in contrast to the effect, try to use as much as possible of the data to initialize correctly. I.e. if only two values in the bound is available, this will be interpreted as a coordinate. If all initialization values fail, the map still defaults to Blindern with zoom 14.

<!--ID d01a35f1-ef93-2a11-9c75-2ed446970cbc -->
**#23610 Internal pan and zoom in Organizational Chart**

The Org Chart is now zoomable and pannable, both with mouse and keys.

Keys:
- **+**/**-** for zooming
- **arrows** or **h**, **j** ,**k** ,**l** for panning
- panning is reset to origin with **c**
- pan and zoom is reset to origin with **esc**

<!--rntype07-end   MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Resolved issues
<!--rntype08-start RESOLVED ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID c8136416-703d-4e26-67ce-cb81c76fe943 -->
**#23593 Live Update Subscription is required in the module.**

The live update subscription must now be turned on in the module to receive live update messages.
Due to a previous error, we received Live Update messages on data sources even though this was not switched on in the Module.

Some solutions that listen to Live Update messages may no longer receive them cause of this fix.

<!--ID b117d2e3-2ef8-b16c-3755-b60e3cfd930a -->
**#23601 Fixed end scope effect node behaviour**

The end scope effect node in the client action designer tree will now only end a sequence of node executions of it is within a scope node.

<!--ID ad11676e-d50e-4ed1-ccad-610ab55bf249 -->
**#23605 Corrected wrong marker colors**

Fixes an error where colors on markers only resulted in default regardless of configurations.

<!--ID 5a7fa8c2-983e-2357-71de-2f9116585431 -->
**#23606 Correct position of map markers**

Previously, map markers rendered so that the lower left corner of the bounding box of the markers were placed on the defined coordinates. This resulted in weird behaviours when zooming and placing markers.

The coordinates now match the point of the marker.

<!--ID ae5155bc-25b0-04df-c413-34083b769847 -->
**#23609 Improved clustering in Layer Map**

Markers in expanded clusters are now possible to click without collapsing.

The distance between markers in expanded clusters have been increased to avoid overlapping markers.

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
