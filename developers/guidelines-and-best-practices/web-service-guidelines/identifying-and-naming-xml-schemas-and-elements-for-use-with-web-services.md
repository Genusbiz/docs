# Identifying and Naming XML Schemas and Elements for use with Web Services

With a large number of Schemas, Web Services and Operations, it is important to follow a scheme for naming which makes it easy to maintain a reasonable overview of all the elements. These naming conventions also reduce complexity for web service consumers which develop clients. For more information, see [Consuming a Genus Web Service from an External Client](consuming-a-genus-web-service-from-an-external-client.md).

**Identifying and Naming the XML Schema used in a web service**

It is recommended to create one XML schema for each web service, and name the schema in a manner to clearly indicate which web service it is used with.

For example.

If the web service is named *PayrollTransactions*, the schema could be called *PayrollTransactionSchema*.

Often it can be neccessary to use the same complex types in schemas for different web services. To re-use these types across different web services, define the types in a separate schema and import it into the web service specific schemas.

**Naming the XML root elements used for request and response in a web service operation**

The root elements used with an operation should be named according to the operation name. The request element should have the same name as the operation, and the response element should have the same name as the operation followed by "Response".

For example:

For an operation named *GetItem*, the XML element used for the request should be named *GetItem*, and the XML element used for the response should be named *GetItemResponse*.

The same XML root element can therefore not be used for two different operations within the same web service. To use the same XML structure for two different operations, simply create extra elements, with the correct names, based on the same type.