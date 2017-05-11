## SOAP Faults

During execution of a Web Service operation, errors may occur that could result in a disruption of the normal execution flow. These errors are often referred to as exceptions. Exceptions that are not handled by [Exception Handlers](../action orchestration/exception handling.md "Exception Handlers") within the action orchestration are returned to the Web Service consumer as a response message containing a Windows Communication Foundation (WCF) exception.

If the consumer is expected to take some action when a request fails, you should return a SOAP Fault instead of the WCF Exception. To return a SOAP Fault you need to handle the exception inside the action orchestration, and then create a SOAP Fault that is recognized and agreed upon by both parties.

In this article

* * *

*   [Returning SOAP Faults to Web Service Consumers](#returning-soap-faults-to-web-service-consumers)

*   [Receiving and Handling SOAP Faults](#receiving-and-handling-soap-faults)

*   [Translation of SOAP Faults for POX/JSON](#translation-of-soap-faults-for-pox-json)

* * *

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



## Translation of SOAP Faults for POX/JSON <a name="translation-of-soap-faults-for-pox-json"/>

Generally speaking, there exists no standardized format to be used for returning a SOAP fault that has been created on the server side to a client that consumes a web service using a POX/JSON endpoint. For SOAP faults that originates from Genus App Platform web services, however, we have defined a data format that will be used for this purpose.

**POX**

Data returned as Content-Type "text/xml" or "application/xml".

The data returned will be a <WebFault> element according to the following XML Schema:

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Consolas; COLOR: #000000"><?xml version="1.0"?>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Consolas; COLOR: #000000"><xs:schema xmlns:tns="http://schemas.genus.net/2013/02/WebFault"

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Consolas; COLOR: #000000">elementFormDefault="qualified"

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Consolas; COLOR: #000000">targetNamespace="http://schemas.genus.net/2013/02/WebFault"

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Consolas; COLOR: #000000">xmlns:xs="http://www.w3.org/2001/XMLSchema"

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Consolas; COLOR: #000000">xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Consolas; COLOR: #000000"><xs:complexType name="WebFault">

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Consolas; COLOR: #000000"><xs:sequence>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Consolas; COLOR: #000000"><xs:element minOccurs="0" name="Message" nillable="true" type="xs:string" />

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Consolas; COLOR: #000000"><xs:element minOccurs="0" name="DetailName" nillable="true" type="xs:string" />

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Consolas; COLOR: #000000"><xs:element minOccurs="0" name="DetailNamespace" nillable="true" type="xs:string" />

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Consolas; COLOR: #000000"><xs:element minOccurs="0" name="Detail" nillable="true" type="xs:anyType" />

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Consolas; COLOR: #000000"></xs:sequence>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Consolas; COLOR: #000000"></xs:complexType>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Consolas; COLOR: #000000"><xs:element name="WebFault" nillable="true" type="tns:WebFault" />

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Consolas; COLOR: #000000"></xs:schema>

An example of such a POX response with a custom <MyFault> SOAP Fault detail sub-element is shown below:

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Consolas; COLOR: #000000"><WebFault xmlns="http://schemas.genus.net/2013/02/WebFault"

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Consolas; COLOR: #000000">xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Consolas; COLOR: #000000"><Message>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Consolas; COLOR: #000000">This is a message

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Consolas; COLOR: #000000"></Message>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Consolas; COLOR: #000000"><DetailName>MyFault</DetailName>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Consolas; COLOR: #000000"><DetailNamespace>http://tempuri.org/MyFaultNamespace</DetailNamespace>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Consolas; COLOR: #000000"><Detail xsi:type="a:MyFaultType" xmlns:a="http://tempuri.org/MyFaultNamespace">

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Consolas; COLOR: #000000"><a:MyDetailItem1>some value</a:MyDetailItem1>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Consolas; COLOR: #000000"><a:MyDetailItem2>some other value</a:MyDetailItem2>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Consolas; COLOR: #000000"></Detail>

<span style="FONT-SIZE: 10pt; FONT-FAMILY: Consolas; COLOR: #000000"></WebFault>

The elements are explained below:

*   **Message**: contains the original SOAP Fault message, corresponding to the SOAP 1.1 <faultstring> element or the first <Text> element contained in a SOAP 1.2 <Reason> element.
*   **DetailName**: contains the local name of the sub-element of the SOAP 1.1 <detail> element or the SOAP 1.2 <Detail> element. If no <detail> (or <Detail>) element exists this value is xsi:nil.
*   **DetailNamespace**: contains the namespace URI of the sub-element of the SOAP 1.1 <detail> element or the SOAP 1.2 <Detail> element. If no <detail> (or <Detail>) element exists this value is xsi:nil.
*   **Detail**: contains the contents of the SOAP 1.1 <detail> element or the SOAP 1.2 <Detail> element. A xsi:type attribute is used to indicate the actual XML type.

The client may use the Message value to display the original error message. The DetailName/DetailNamespace values may be used to detect the type of SOAP fault that was thrown by the web service, and the Detail value represents the actual detail document returned.  

**JSON**

Data returned as Content-Type "text/json" or "application/json".  

A JSON response, corresponding to the POX example above, will be the following:  

<span lang="EN-US" style="FONT-SIZE: 10pt; FONT-FAMILY: Consolas; COLOR: black; mso-fareast-font-family: 'Times New Roman'; mso-ansi-language: EN-US">{

<span lang="EN-US" style="FONT-SIZE: 10pt; FONT-FAMILY: Consolas; COLOR: black; mso-fareast-font-family: 'Times New Roman'; mso-ansi-language: EN-US"><span style="mso-spacerun: yes">"Message":"This is a message",

<span lang="EN-US" style="FONT-SIZE: 10pt; FONT-FAMILY: Consolas; COLOR: black; mso-fareast-font-family: 'Times New Roman'; mso-ansi-language: EN-US"><span style="mso-spacerun: yes">"DetailName":"MyFault",

<span lang="EN-US" style="FONT-SIZE: 10pt; FONT-FAMILY: Consolas; COLOR: black; mso-fareast-font-family: 'Times New Roman'; mso-ansi-language: EN-US"><span style="mso-spacerun: yes">"DetailNamespace":"http://tempuri.org/MyFaultNamespace",

<span lang="EN-US" style="FONT-SIZE: 10pt; FONT-FAMILY: Consolas; COLOR: black; mso-fareast-font-family: 'Times New Roman'; mso-ansi-language: EN-US"><span style="mso-spacerun: yes">"Detail":

<span lang="EN-US" style="FONT-SIZE: 10pt; FONT-FAMILY: Consolas; COLOR: black; mso-fareast-font-family: 'Times New Roman'; mso-ansi-language: EN-US"><span style="mso-spacerun: yes">{

<span lang="EN-US" style="FONT-SIZE: 10pt; FONT-FAMILY: Consolas; COLOR: black; mso-fareast-font-family: 'Times New Roman'; mso-ansi-language: EN-US"><span style="mso-spacerun: yes">"__type", "MyFaultType:http://tempuri.org/MyFaultNamespace",

<span lang="EN-US" style="FONT-SIZE: 10pt; FONT-FAMILY: Consolas; COLOR: black; mso-fareast-font-family: 'Times New Roman'; mso-ansi-language: EN-US"><span style="mso-spacerun: yes">"MyDetailItem1", "some value",

<span lang="EN-US" style="FONT-SIZE: 10pt; FONT-FAMILY: Consolas; COLOR: black; mso-fareast-font-family: 'Times New Roman'; mso-ansi-language: EN-US"><span style="mso-spacerun: yes">"MyDetailItemN", "some other value",

<span lang="EN-US" style="FONT-SIZE: 10pt; FONT-FAMILY: Consolas; COLOR: black; mso-fareast-font-family: 'Times New Roman'; mso-ansi-language: EN-US"><span style="mso-spacerun: yes">}

<span lang="EN-US" style="FONT-SIZE: 10pt; FONT-FAMILY: Consolas; COLOR: black; mso-fareast-font-family: 'Times New Roman'; mso-ansi-language: EN-US">}

