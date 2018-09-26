---
title: Common URI path segments
description: URI path segments for REST, Calendar and Contact Lists services. 
author: eriksandnes
---
# Common URI path segments

_The content is under construction. We are sorry for the inconvenience._

The URI for all service types, excepts Web Services, consists of these common path segments `http(s)://<genus-apps-server-address>/<dataset>/api/<authentication-method>/<service-type>/<service-path-segment>`

Path segments:
* **Genus Apps server address** - Address to server running Genus Apps providing the API.
* **Dataset** - Dataset for which the API is defined
* **Authentication method** - Defines the authentication method for the servics. The following methods can be defined:
    * _public_ - Service have no authentication, the _guest_ account must be enabled.
    * _genus_ - Use Genus user authentication
    * _domain_ - Use Active Directory authentication. Single Sign On is enabled.
    * _domain/basic_ - Use basic Active Directory authentication. Single Sign On is disabled. User must provide log on information.
* **Service type** - Defines which service type in Genus Apps
    * _rest_ - [REST services](rest-services/index.md) exposed by Genus Apps.
    * _carddav_ - Shared [Contact lists](contact-lists.md)
    * _webcal_ - Shared [Calendars](calendars.md)
* **Service path segments** - Path segments defined in the specific service. More information on segment paths for the relevant service types are defined in respecive articles for these sevice types.


