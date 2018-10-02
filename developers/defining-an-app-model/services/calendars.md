---
title: Calendar sharing in Genus Apps
description: How to define Calendars using Genus Studio and using the API to subscribe to Calendar events on mobile devices or MS Outlook.
author: eriksandnes
---
# Calendars

_The content is under construction. We are sorry for the inconvenience._

Define Calendars in your application model, like customer meetings from your Genus CRM application or events from your Genus social app, and share them with others. Subscribe to Calendars by add an subscription on your mobile device, in your MS Outlook, or similar.

Calendars are shared read-only, but each shared item contains a link, so you can open your app and inspect or edit the Calendar item.

The Calendar is connected to an Object Class in Genus Apps containing the calendar events.

## URI path segments
See [Common URI path segments](common-uri-path-segments.md) for more information about the common URI path segments.

The URI for the Calendars service is `<common-path-segments>/webcal/<defined-path-segment>`, where _defined path segment_ is defined under on the Calendar instance in Genus Studio.