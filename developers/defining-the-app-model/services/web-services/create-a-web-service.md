# Create a Web Service

1.  [Open Genus Studio](../../getting-started/index.md).
2.  In the **Directory** tree, click the **Web Services** folder and on the **toolbar**, click **New ****![IDC0B30334E8FE435F.ID27670CE148FD45ED.jpg](media/IDC0B30334E8FE435F.ID27670CE148FD45ED.jpg) and then click** **Web Service**.
3.  In the **Name** box, type a name for the Web Service. For guidelines on naming a web service, see [Identifying and Naming the Web Service](../../../guidelines-and-best-practices/web-service-guidelines/identifying-and-naming-the-web-service.md).
4.  In the **Namespace** box, type a namespace for the Web Service. By default, the namespace [http://tempuri.org/<name-of-web-service](http://tempuri.org/%3Cname-of-web-service)> is used for this purpose. While this is suitable for Web Services under development, published services should use a unique, permanent namespace. Your Web Service should be identified by a namespace that you control. For more guidelines and best practices on creating a namespace, see Web Service and [XML-Schema Namespaces](../../../guidelines-and-best-practices/web-service-guidelines/xml-and-web-service-namespaces.md).
5.  Optionally type a description in the **Description** box. This description will appear as an annotation in the WSDL. The description should reflect some of the underlying design principles. E.g. what are the common characteristics of the operations within this service etc.
6.  In the **Shared Service Data** section, you can select a Data Source to share data between operations. See [Define Shared Service Data](create-a-web-service.md) below.
7.  In the **Output Namespace Style** box, select the desired namespace prefix to be used for the output message. If the Web Service consumer does not prefer elements with namespace prefix, you should select the "Create unprefixed elements with default namespace".
8.  By default the metadata for the Web Service is available in the form of an entry in the list of services, and a WSDL. If you do not want to expose the metadata for the Web Service to external consumers, click to clear the **Metadata (WSDL) is available** check box. This option is typically enabled in a development phase, but for security reasons, the option should be disabled for Web Services that are in production. For information on accessing the WSDL see [Consuming a Genus Service from an External Client](../../../guidelines-and-best-practices/web-service-guidelines/consuming-a-genus-web-service-from-an-external-client.md).
9.  By default the Web Service is enabled and can be accessed by external consumers as soon as changes in your directory have been [deployed to all computers](../../getting-started/deploy-changes-in-the-directory.md). If you do not want to expose the Web Service to external consumers at this moment, click to clear the **Enabled** check box.


## Shared Service Data

To share data between operations, you can add a data source which can be accessed within all operations. The data source can also be used in the condition for validating SOAP header data sent as input.

To add a data source, follow these steps:

1.  Click the **General** tab.
2.  In the section **Shared Service Data**, click **Modify**.
3.  In the **Data Source** box, select a data source from your **Directory**.
4.  In the **Name** box, type a name for the data source.
5.  Optionally type a description in the **Description** box.
6.  Specify the number of objects the data source can contain. Click **Allow** **one object** if the data source only can contain one object. Click **Allow many objects** if the data source can contain more than one object.
7.  Select the **Cannot be blank** check box if data are required for the data source. If this constraint is violated, no operations will be executed. Do not use this constraint unless an empty set of data should be regarded as an error.
8.  Click **OK**.

Next you have to specify a data filter for the data source.

1.  Click **Filter Data**.
2.  Do one of the following:  
    * To select one or more objects, click **Select a specific set of objects**, and then click **Select**.  
    * To select one or more objects which satisfy a given condition, click **Select objects that meet the following condition**. Follow the instructions in the [step-by-step procedure](../../common-concepts/conditions.md "Conditions")[](../../logic/action-orchestration/define-a-conditional-formula.md "Define a Conditional Formula")on how to define a condition.  



## Endpoints

The main purpose of the Web Service endpoint is to provide the communication point accessed by the consumers. An endpoint is actively listening for incoming connections on a specific location (URI) using a specific protocol and data format. Endpoints support [SOAP](../../../../terminology.md), [POX](../../../../terminology.md), and [JSON](../../../../terminology.md).  

To successfully setup a Web Service, you should at least specify one endpoint.  

1.  Click the **Endpoints** tab.
2.  To add an **Endpoint** , click **Add** .
3.  In the **Name** box, type a name for the endpoint. For guidelines on naming a web service, see [Endpoint naming conventions](../../../guidelines-and-best-practices/web-service-guidelines/endpoint-naming-conventions.md) . The name must be unique within the Web Service.
4.  In the **Address** section, type the **Default** address of the endpoint.
5.  In the **Authentication** section, you should specify how the communication with the endpoint is authenticated.
6.  Click **Credential Type** to specify the message security type.  
    Note that if the Credential Type <span style="FONT-WEIGHT: normal; FONT-STYLE: italic">Anonymous is selected, the web service operations may be invoked by any unknown and potentially malicious client. When the Credential Type <span style="FONT-WEIGHT: normal; FONT-STYLE: italic">Anonymous is selected, the service is run as the built-in [Guest](../../security/security-groups-and-user-accounts.md) user.
7.  Click the desired **Credential Store** to specify the credential store to use for authentication.  
    Available option depends on the selected Credential Type.
8.  In the **Envelope Version**, select a version of SOAP, or select None to use POX or JSON. For more information on using POX and JSON, see [Consuming a Genus Web Service from an External Client](../../../guidelines-and-best-practices/web-service-guidelines/consuming-a-genus-web-service-from-an-external-client.md).

For further information on methods of authentication in Genus App Platform, see [Genus App Services User Authentication](../../logic/action-orchestration/actions/effects/genus-app-services-user-authentication.md "Genus App Services User Authentication").



## SOAP Headers

Communicating with a Web Service using SOAP follows a standard format. Part of this format is the data that is encoded in an XML document. The XML document consists of a root Envelope tag, which in turn consists of a required Body element and an optional Header element. The Body element includes the data specific to the message. The optional Header element can contain additional information not directly related to the particular message. Each child element of the Header element is called a SOAP header. One typical use for SOAP headers is to transfer contextual data. For example, if a message includes a digital signature, this signature will most likely be transferred in the SOAP header.

In a Web Service you can define the SOAP Headers received as input from consumers (Request SOAP Headers) and the headers returned (Response SOAP Headers) to consumers of the Web Service.

To add SOAP headers to your Web Service, follow these steps:

1.  Click the **SOAP Headers** tab.
2.  To add a SOAP header requested from consumers of the Web Service, in the **Request SOAP Headers** list, click **Add**.
3.  In the **SOAP Header** dialog box, select an XML schema from your Directory. If the XML schema contains multiple root elements, in the Root Element box, select which root element to use. Note that the namespace for the XML schema and the name of the root element must be unique within the Request SOAP Headers defined in the Web Service.
4.  Web Service requests can be validated by setting conditions on the Request SOAP Header. Any requests not satisfying the conditions are rejected. To specify a condition, in the section **"Reject requests where the SOAP headers do not satisfy...",**click **Modify** to specify a [condition](../../common-concepts/conditions.md "Conditions").
5.  To add a SOAP header returned to consumers of the Web Service, in the **Response SOAP Headers** list, click **Add**. Follow the instructions in step 3.

Note that consumers of the Web Service must provide data for all **Request SOAP Headers** defined in the Web Service. If data for a header is missing, the request is rejected.

The SOAP headers defined for the Web Service is available along with the data sources defined in the service's operations. For example, to return data for a **Response SOAP Header**, add an effect of type [Create Object(s)](../../logic/action-orchestration/actions/effects/create-objects-and-modify-objects.md "Create Objects and Modify Objects") to an action and select the **Response SOAP Header** as the data source. Operations, actions and effects are described below.  



## Operations

The core functionality of the Genus Web Services is implemented in the Operations. A brief introduction to Web Service Operations with some guidelines and best practices can be found in the article [Identifying and Naming the Service Operations](../../../guidelines-and-best-practices/web-service-guidelines/identifying-and-naming-the-web-service-operations.md).

To add an operation to your Web Service, follow these steps:

1.  Click the **Operations** tab.
2.  In the **Operations** list, click **Add**.
3.  In the **Name** box, type a name for the operation. The name of the operation must be unique within the Web Service and can only contain letters and numbers. The first character in the name must be a letter. For guidelines on naming the operation, see [Naming the service operations](../../../guidelines-and-best-practices/web-service-guidelines/identifying-and-naming-the-web-service.md).
4.  Optionally type a description in the Description box. This description will appear as an annotation to the operation in the WSDL.
5.  Next you need to configure the Request-Response messages used by the operation. To read more about this Message Exchange Pattern, see [Response Message Exchange Pattern](../../../guidelines-and-best-practices/web-service-guidelines/request--response-message-exchange-pattern.md). To define which data to request or return, Click the **Messages** tab and select an XML schema from your Directory. To select an XML schema, click **XML Schema**, and then click **Browse**. For information on naming of XML schemas used with web services, see [Identifying and Naming XML Schemas and Elements for use with Web Services](../../../guidelines-and-best-practices/web-service-guidelines/identifying-and-naming-xml-schemas-and-elements-for-use-with-web-services.md). For information on using namespaces for XML schemas and web services, see [XML and Web Service Namespaces](../../../guidelines-and-best-practices/web-service-guidelines/xml-and-web-service-namespaces.md).
6.  If you have selected an XML schema with multiple root elements, in the **Root Element** box, select which root element to use. For information on the naming of XML root elements used with web service operations, see [Identifying and Naming XML Schemas and Elements for use with Web Services](../../../guidelines-and-best-practices/web-service-guidelines/identifying-and-naming-xml-schemas-and-elements-for-use-with-web-services.md).

The XML schemas defining the data requested or returned to consumers is available along with the data sources defined for the operation. For example, you can filter your data sources based on the data received from consumers. To return data to consumers, add an effect of type [Create Object(s)](../../logic/action-orchestration/actions/effects/create-objects-and-modify-objects.md) to an action, and select the XML schema used to return data as the data source.  

**Specify Time to Live**  
The Time to Live option provides a simple mechanism for caching the operation response message. The default option, "Lifespan for request", is equivalent to disable the operation caching and forcing the application server to generate a new response each time.

In a number of cases response data is changed at a slow pace and/or may be expensive to compute. In such cases, you may choose to specify that the response should only be generated every X seconds.

Once a response has been generated, the same response will be returned if a returning user submits the same request on the same endpoint within the specified time interval. The feature is most useful and requires the least resources if the endpoint, for which the web service operation is called, is configured for anonymous access.

When a Time to Live value is specified, the response data is stored in memory for the specified time interval. Do consider the potential increase in memory consumption on the application server when enabling this feature.

**Defining Fault elements (Returning SOAP Faults to Web Service Consumers)**

To add one or more fault elements specifying the message format for any error messages that may be returned by an operation, do the following:

1.  In the **Fault Elements** list, click **Add**.
2.  Select an XML schema from your **Directory**.
3.  If you have selected an XML schema with multiple root elements, in the **Element** box, select which root element to use.

The defined fault elements are available along with the data sources defined for the operation. To return a SOAP fault trough one of the defined fault elements, you need to throw an On Web Service Fault exception inside the operation execution. For further information on returning SOAP faults, see [Returning SOAP Faults to Web Service Consumers](soap-faults.md).

**Validate the Request and Response XML**  
By default, XML data are not validated against the XML schemas defined by the request- and response message format for an operation. To turn validation on, select the **Validate XML Data for the Request and the Response** check box. If the request or the response contains invalid XML data, execution of the operation will fail. The parse error is logged in the event history for the Web Service.  
The XML schema validation may introduce some performance penalties. You should always consider this option, to reject invalid request messages, against the added complexity of safeguarding against invalid XML Data during operation execution.  

**Add Data Sources to an Operation**  
1\. Click the **Data Sources** tab.  
2\. Follow the instructions in the [step-by-step procedure](../../logic/action-orchestration/data-sources.md) for adding a new data source.  

**Add Actions to an Operation**  
1\. Click the **Actions** tab.  
2\. Follow the instructions in the [step-by-step procedure](../../logic/action-orchestration/actions.md) for adding a new action.  

