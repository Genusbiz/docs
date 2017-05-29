## Consuming a Genus Web Service from an External Client

Web services defined and published by Genus are made available to external consumers according to the endpoint settings. Endpoints support SOAP and POX/JSON. SOAP endpoints use standard Web Services Description Language version 1.1 (WSDL). WSDL is an XML-based language that provides a model for describing Web services.

**Browse Published Web Services**

Using your favorite web browser you can browse the list of published web services by navigating to https://<span style="FONT-STYLE: italic">yourserver/<span style="FONT-STYLE: italic">yourdataset/services/, where <span style="FONT-STYLE: italic">yourserver is the name of your Genus App Services server and <span style="FONT-STYLE: italic">yourdataset is the name of the virtual directory corresponding to a Genus [Data Set](../../defining-the-application-model/general-settings/data-sets.md). To see documentation on a single web service, click one of the web service listed or navigate to [https://yourserver/yourdataset/services/yourwebservice.svc](https://yourserver/yourdataset/services/yourwebservice.svc).

<span style="TEXT-DECORATION: underline">SOAP

The documentation for SOAP endpoints provides a simple code example describing how to generate a client proxy class and call the web service from a Microsoft .NET (Windows Communication Foundation) client. A link to the actual WSDL is also provided. The web services published with SOAP endpoints may be called by SOAP compliant clients of corresponding version.

<span style="TEXT-DECORATION: underline">POX/JSON

For POX/JSON endpoints the documentation provides examples with a request body and response body for both POX and JSON. A request schema and a response schema are also provided for POX.

**Access the Web Service from your Application**

When accessing a web service with both a SOAP endpoint and a JSON/POX endpoint, there is one URL for the SOAP endpoint and one URL for the POX/JSON endpoint.

<span style="TEXT-DECORATION: underline">SOAP

Depending on your preferred client platform you typically make the web service available to your client application by generating (proxy) classes based on the published WSDL.

If you are using Microsoft Visual Studio 2012 this is done by selecting **Add Service Reference...** from the **Project** menu. See [Consuming a Web Service from Microsoft Visual Studio](../../how-to/consuming-a-web-service-from-microsoft-visual-studio.md "Consuming a Web Service from Microsoft Visual Studio") for more details.

If you are using a different tool than Microsoft Visual Studio you may have to add a "?wsdl" at the end of the URLs above. Consult your tool's documentation for more information.

<span style="TEXT-DECORATION: underline">POX/JSON

When a HTTP client posts data to a web server, it should set the **Content-Type** HTTP request header to tell the server what type of data format the request body contains. Likewise, it should also set the appropriate value for the **Accept** HTTP request header in order to tell the server what type of data format the response body should contain. The following examples shows how to send and receive POX and JSON data:

*   POX request: POST [https://yourserver/yourvirtualdir/yourservice.svc/endpointaddress/youroperation](https://yourserver/yourvirtualdir/yourservice.svc/endpointaddress/youroperation) Content-Type: text/xml; charset=utf-8 Accept: text/xml
*   JSON request: POST [https://yourserver/yourvirtualdir/yourservice.svc/endpointaddress/youroperation](https://yourserver/yourvirtualdir/yourservice.svc/endpointaddress/youroperation) Content-Type: application/json; charset=utf-8 Accept: application/json

Please note that the Content-Type request header should include the character encoding used in the request body (e.g. "charset=utf8"). In the absence of a Content-Type or Accept header, XML format (POX) will be assumed.