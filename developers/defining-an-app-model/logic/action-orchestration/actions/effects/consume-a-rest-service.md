---
title: Consuming a REST Service
description: Article Describing the configuration elements of a Consume REST Service effect
author: henrikmj
---

# Consuming a REST Service

To consume a REST Service, do the following:

* Enter the address of the REST service to be consumed and the method that will be used. If required by the REST service, you may also specify credentials, using user name and password, or by entering a [client certificate](../../../../services/web-services/consuming-web-services-with-certificate-based-authentication.md) thumbprint.
* In rare cases the server may present a certificate with a Common Name (CN) that deviates from the host part of the specified URL. Normally, this is an error and the request is rejected. In order to override this behavior you may use the Server Certificate Validation field to specify a substring that should be present in the server certificate's Subject field.
* If required by the REST service, enter custom HTTP headers using the syntax defined for [Header Field Definitions](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html). All headers must be named, and the value part must be separated from the name by a colon, ```header-name:header-value```. Place each header on a separate line. Control characters and delimiting characters such as " ( ) , / : ; < = > ? @ [ \ ] { }, SPACE and TAB are not allowed in the name of the header. The following is an example on how to enter two custom headers:

  ```
  SenderID:976098897
  File:invoice.xml
  ```

* For methods that supports a body in the request, define a body based on either a composed text, output from a data source or as a multipart body based on multiple fields. The GET and DELETE methods do not support sending a body in the request.
* If the call to the REST service succeeds, the results may be handled conditionally by a Response Handler based on the HTTP result code returned from the method call. The Response Handler defines how the returned data should be stored back into a data source.

See [this](../../../../services/rest-services/index.md) article for more background information.
		
## Defining the Request Body

The request body may be defined by composing a text, extract data in XML-, JSON- or raw format from a data source or in special cases build a multipart body if the service requires this.

To create a body by composing a text, see the article [Generate Dynamic Values for Text Fields](../generate-dynamic-values-for-text-fields.md "Generate Dynamic Values for Text Fields") for more information.

There are several ways to include data from data sources in the request body:
* To create a body containing XML, use an XML-data source and configure the output options according to the requirements in the REST service.
* To create a body containing JSON, create a template for the output and bind data from the data source to this template.
* In addition it is also possible to use the contents from a File-data source in the request body.

Some REST services requires the request body to be defined in multipart/form format which is a format with multiple fields in the body which may be defined by combining multiple body definitions. For more information on the multipart/form-data format, see: http://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.2

## Defining a Response Handler

A Response Handler is used for handling the response from a call to a REST service. Use a condition to determine which responses that will be handled by each handler. The Response Handler is used to save the contents of the response into a data source.
Based on the Content-Type of the body, the data in the response can be used to populate data sources of type XML, JSON, File, or import to a field in a data source.

* For data of type JSON, a mapping is used to read the JSON dat into a data source besed on the rules in the mapping. It is possible to import only part of the JSON by entering a path from the root object.

* For data of type XML, data will be read into the selected XML data source by using the schema for the data source, and it is also possible to perform an XML-validation on the data against the schema for the data source. It is also possible to enter an offset path using XPath syntax. 

* For data of type Text it is possible to import data into a data source of type File or to a field of type Text. 
 
* For data of type General File it is possible to import data into a data source of type File. 

In general, the actual format of the response body should match the expected format of the Response Handler, but it is possible to override this setting and allow the Response Handler to use a format not matching the expected format.
