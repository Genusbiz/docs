---
title: Create a REST service
description: Create a REST service in Genus Studio 
author: eriksandnes
---

# Create a REST service
_The content is under construction. We are sorry for the inconvenience._

Before creating a REST service, it is recommended be familiarized with naming conventions and recommended structures for building REST services, more information can be found in [REST service guidelines](../../../guidelines-and-best-practices/rest-service-guidelines.md).

## Define a REST service

### Create a new REST service
In Genus Studio, navigate to the REST Services in Services and click **New**. Specify _Name_ and _Path Segment_ for the service.

HTTP headers for request and response can defined here if applicable for all resources in the rest service, headers that only apply to specific resources or methods for resource can be specifed at the applicable level.

The _Description_ and _Support_ fields are specifed to provide [Metadata](rest-service-metadata.md) information for the service.

### Add a Resource
Right click on the REST service (top) node in the tree view, and select **Add Resource**. Specify _Path Segments_ for the resource, at least one is required to identify the resource. There are several types of path segments that can be specified. These can be divided into two main parts, descriptive (**Literal**) and parameters (**String**, **Integer**, **LargeInteger**, **Real**, **CalendarTime**, **Guid**). Descriptive path segments are used to specify resource types and operations. And parameter path segments are used to identify resources and can be mapped to fields in a Data Source when defining a [Method](#add-a-method) for the resource. 

Query parameters can be specified to receive additional parameters for request processing.

HTTP headers can be specified on the resource level if applicable for all methods on the resource.

The _Description_ fields are specifed to provide [Metadata](rest-service-metadata.md) information for the service. 

### Add a Method
Right click on the Resource node in the tree view, and select **Add GET**, **Add PUT**, **Add DELETE** or **Add POST**. Only instance for each method can be specified for a resource.

HTTP headers can be specified on the method level. All inherited HTTP headers are also available for mapping to Data Sources for processing. 

The _Summary_ and _Description_ fields are specifed to provide [Metadata](rest-service-metadata.md) information for the service. 

## Mapping parameters to a Data Source
Values of parameters in path segments, query parameters and HTTP headers can be mapped to a Data Source in Method. The mapping is completed automatically when specifiying a Data Source in the _Save to:_ or _Read from:_ dropdowns in the API tab on the method level. The Data Source must be added to the method in the _Data Sources_ tab, and in many instances a [Local object](../../logic/action-orchestration/data-sources/add-a-local-object-data-source.md) is the preferred Data Source. The mapping is performed based on the provider name of the properties on the Data Source.

## Security
Security is specified on the REST service level. Right click on the REST Service in main window, select _Properties_ and click on the _Security_ tab. Add the [Security Groups](../../security/security-groups-and-user-accounts.md) which should have access to consuming the REST service. To consume a REST service the users must have the [Privilege](../../security/security-privileges.md) _Consume a Web Service_.

## Auditing
Auditing is specified on the [Method](#add-a-method) level on the REST Service. Right click on the method and select _Properties_, click on the _History_ tab. If _Save detailed exectuion trace in history_ is specified, the HTTP body, headers and parameters are logged for both request and response. To view the the History on the method, click on the **Events...** button in the _History_ tab.

