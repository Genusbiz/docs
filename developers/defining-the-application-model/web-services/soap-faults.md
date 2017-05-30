# SOAP Faults

During execution of a Web Service operation, errors may occur that could result in a disruption of the normal execution flow. These errors are often referred to as exceptions. Exceptions that are not handled by [Exception Handlers](../action-orchestration/exception-handling.md "Exception Handlers") within the action orchestration are returned to the Web Service consumer as a response message containing a Windows Communication Foundation (WCF) exception.

If the consumer is expected to take some action when a request fails, you should return a SOAP Fault instead of the WCF Exception. To return a SOAP Fault you need to handle the exception inside the action orchestration, and then create a SOAP Fault that is recognized and agreed upon by both parties.


## Returning SOAP Faults to Web Service Consumers

You should always start by defining the error conditions the consumer of your service should know about. Then the custom content of the SOAP faults for those error conditions can be defined. In the process of defining SOAP faults, it is important to separate error conditions and bugs in the web service from the formal error conversation you have with the consumer.  

To return a SOAP fault from a Web Service operation, do the following:

1.  To create the fault XML document, add a **Create Objects** effect.
2.  In the **Data Source** box, select one of the **Fault Elements** defined on the **Messages** tab of the operation.
3.  Assign values to elements in the fault XML document.
4.  Add a **Throw an Exception** effect.
5.  In the **Exception** box, select **On Web Service Fault**.
6.  In the **Fault XML Document** box, select the fault XML document of your choice.
7.  In the **Error Message** box, enter an explanation of the fault.

When the **On Web Service Fault** exception is thrown, succeeding actions will not be executed, and execution of the operation is terminated (unless you have added an exception handler catching the exception).  



## Receiving and Handling SOAP Faults

When the Consume a Web Service effect calls an operation within the Web Service, the server-side execution may encounter errors. The **On Web Service Fault** exception type is designed to handle exceptions raised within the operation.

In some cases the Web Service consumer are expected to take action based upon the error message returned by the Web Service provider. These error messages are known as **SOAP faults**.

If the Web Service is configured to return SOAP faults (defined in WSDL), the data source bound to the SOAP fault message receives the fault XML document returned by the Web Service. To handle the fault, add an exception handler for the **On Web Service Fault** exception type.  



## Translation of SOAP Faults for POX/JSON

Generally speaking, there exists no standardized format to be used for returning a SOAP fault that has been created on the server side to a client that consumes a web service using a POX/JSON endpoint. For SOAP faults that originates from Genus App Platform web services, however, we have defined a data format that will be used for this purpose.

### POX

Data returned as Content-Type "text/xml" or "application/xml".

The data returned will be a <WebFault> element according to the following XML Schema:

```xml
<?xml version="1.0"?>
<xs:schema xmlns:tns="http://schemas.genus.net/2013/02/WebFault" elementFormDefault="qualified" targetNamespace="http://schemas.genus.net/2013/02/WebFault" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <xs:complexType name="WebFault">
    <xs:sequence>
      <xs:element minOccurs="0" name="Message" nillable="true" type="xs:string" />
      <xs:element minOccurs="0" name="DetailName" nillable="true" type="xs:string" />
      <xs:element minOccurs="0" name="DetailNamespace" nillable="true" type="xs:string" />
      <xs:element minOccurs="0" name="Detail" nillable="true" type="xs:anyType" />
    </xs:sequence>
  </xs:complexType>
  <xs:element name="WebFault" nillable="true" type="tns:WebFault" />
</xs:schema>
```

An example of such a POX response with a custom <MyFault> SOAP Fault detail sub-element is shown below:

```xml
<WebFault xmlns="http://schemas.genus.net/2013/02/WebFault" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <Message>This is a message</Message>
  <DetailName>MyFault</DetailName>
  <DetailNamespace>http://tempuri.org/MyFaultNamespace</DetailNamespace>
  <Detail xsi:type="a:MyFaultType" xmlns:a="http://tempuri.org/MyFaultNamespace">
    <a:MyDetailItem1>some value</a:MyDetailItem1>
    <a:MyDetailItem2>some other value</a:MyDetailItem2>
  </Detail>
</WebFault>
```

The elements are explained below:

*   **Message**: contains the original SOAP Fault message, corresponding to the SOAP 1.1 <faultstring> element or the first <Text> element contained in a SOAP 1.2 <Reason> element.
*   **DetailName**: contains the local name of the sub-element of the SOAP 1.1 <detail> element or the SOAP 1.2 <Detail> element. If no <detail> (or <Detail>) element exists this value is xsi:nil.
*   **DetailNamespace**: contains the namespace URI of the sub-element of the SOAP 1.1 <detail> element or the SOAP 1.2 <Detail> element. If no <detail> (or <Detail>) element exists this value is xsi:nil.
*   **Detail**: contains the contents of the SOAP 1.1 <detail> element or the SOAP 1.2 <Detail> element. A xsi:type attribute is used to indicate the actual XML type.

The client may use the Message value to display the original error message. The DetailName/DetailNamespace values may be used to detect the type of SOAP fault that was thrown by the web service, and the Detail value represents the actual detail document returned.  

### JSON

Data returned as Content-Type "text/json" or "application/json".  

A JSON response, corresponding to the POX example above, will be the following:  

```json
{
    "Message":"This is a message",
    "DetailName":"MyFault",
    "DetailNamespace":"http://tempuri.org/MyFaultNamespace",
    "Detail":
        {
            "__type", "MyFaultType:http://tempuri.org/MyFaultNamespace",
            "MyDetailItem1", "some value",
            "MyDetailItemN", "some other value",
        }
}

