---
title: Genus Apps REST service metadata
description: Retrieval of REST service metadata as OpenAPI (yaml or json file) or WADL format. Definition of metadata for the REST service.
author: eriksandnes
---
# REST service metadata
Metadata for the REST Service can be obtained in two different formats; WADL and OpenAPI as JSON or YAML. The information in the metadata depends on information described by the modeller in Description fields in the REST Service in Genus Studio.

## WADL
The Web Application Description Language (WADL) is a the non-standarized REST equivalent of SOAP's Web Services Description Language (WSDL). The WADL can obtained from the URI `<service-name>/$metadata/wadl`.

## OpenAPI
Metadata described in the OpenAPI specification can be retrieced as a JSON or YAML file. The OpenAPI format can be obtained form the URI `<service-name>/$metadata/openapi?format=json|yaml`.
