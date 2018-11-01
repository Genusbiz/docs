---
title: Consuming and exposing a web service (SOAP) in Genus Apps
description: Expose or consume a SOAP web service in Genus Studio. Define operations, definitions (schemas) and endpoints for web services and exposing these.
author: eriksandnes
---
# Web services

A Web Service can be defined as "a component of programmable application logic that can be accessed using standard web protocols". Generally speaking, a Web Service has inputs and outputs. It accepts some kind of request from the client and returns some result. The request and response messages are formatted according to the **Simple Object Access Protocol (SOAP)** specification. This is a W3C specification, and it is a format which describes the data that is sent over HTTP. Web Services can be accessed over a network, such as the Internet, and executed on a remote system hosting the requested services. Web service metadata is provided by publishing a **Web Service Description Language (WSDL)** document and corresponding XML Schema documents.

The SOAP standard offers a wide selection of various styles and flavors when it comes to the actual encoding of the SOAP message payloads. Genus Apps supports and is designed for publishing web services using the WSDL "document/literal wrapped" binding style.  

See Also

*   [Consume a Web Service](../../logic/action-orchestration/actions/effects/consume-a-web-service.md)
*   [Web Service Guidelines](../../../guidelines-and-best-practices/web-service-guidelines/index.md)

**Topics in "Web Services"**
* [Create a Web Service](create-a-web-service.md)
* [Web Service References](web-service-references.md)
* [SOAP Faults](soap-faults.md)
* [View the Execution History for a Web Service](view-the-execution-history-for-a-web-service.md)