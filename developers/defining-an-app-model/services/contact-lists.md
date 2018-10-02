---
title: Genus Apps Contact lists sharing
description: How to define Contact lists using Genus Studio and use the API to subscribe to the shared Contact Lists on devices.
author: eriksandnes
---
# Contact lists

_The content is under construction. We are sorry for the inconvenience._

Define a Contact List in Genus Apps by connecting it to an object class containing the Contacts. The Contact Lists can be subscribed to on mobile phones and other devices.

Contacts are shared read-only, but each shared item contains a link, so you can open your app and inspect or edit the Contact.

## URI path segments
See [Common URI path segments](common-uri-path-segments.md) for more information about the common URI path segments.

The URI for the Contact Lists service is `<common-path-segments>/carddav/<defined-path-segment>`, where _defined path segment_ is defined on the Contact List instance in Genus Studio.