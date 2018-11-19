# Consume a Web Service

With this effect you can query or submit data to a Web Service. Consuming a Web Service is sometimes also referred to as calling a Web Service.

Before you can consume a Web Service you need to set up a service contract with the Web Service provider. This is done by creating a **Web Service Reference**. Follow the instructions in the [step-by-step procedure](../../../../services/web-services/web-service-references.md "Web Service References") on how to create a Web Service Reference.

To consume a Web Service, do the following:

1.  In the **Name** box, optionally enter a name. The name is displayed in the action tree, if a name is not entered, a summary of the effect is displayed.
2.  In the **Description** box, optionally enter a description.
3.  Click the **General** tab.
4.  In the **Service Reference** box, select the Web Service Reference containing the Web Service you wish to consume.
5.  The **Endpoint** box is only available if you are consuming an external Web Service. Select the appropriate endpoint if the external service contract contains multiple endpoint configurations.
6.  In the **Operation** box, select which operation to call.
7.  Click the **Messages** tab.
8.  Bind the request (input) and response (output) messages exposed by the operation to an XML document from one of your data sources. To read more about the messages used in the Message Exchange Pattern, see [Request / Response Message Exchange Pattern](../../../../../guidelines-and-best-practices/web-service-guidelines/request--response-message-exchange-pattern.md "Request / Response Message Exchange Pattern"). You can view the XML schema definition for a message element by pressing the CTRL key, and then click the link in the Definition column.
9.  If the Web Service provides SOAP faults, the fault messages should be listed with the message type **SOAP Fault** along with the input and output messages. For each SOAP fault defined by the Web Service Reference, bind the fault element to a data source. To read more about handling SOAP faults when consuming a Web Service, see [Receiving and Handling SOAP Faults](../../../../services/web-services/soap-faults.md "Receiving and Handling SOAP Faults"). The data source containing the request message should be filled out before you call the Web Service. Use the [Create Object(s)](create-objects-and-modify-objects.md "Create Objects and Modify Objects") effect to fill out the data source containing the request message.
10.  Additional SOAP headers can be added to the request message. To read more about SOAP headers, see [SOAP Headers](../../../../services/web-services/create-a-web-service.md "SOAP Headers"). To add a SOAP header to the request message, click **Add** and select either a data source or a field containing character or string data. 
11.  You may also add HTTP headers to the request message. For each HTTP header to add, click **Add** and set **Name** and **Value**.

If you are consuming an external Web Service which normally exceeds the default timeout for your Application Model, you should specify the maximum allowed time the effect can run. To do this, do the following:

1.  Click the **Advanced** tab
2.  In the **Timeout** section, click **Allow the effect to run for**, and the type the maximum number of seconds the effect is allowed to run.
3.  If the Web Service provider is designed to process messages asynchronously, you can use **Rerun Attempts** to poll the Web Service until the result is returned. To do this:
4.  In the **Rerun Attempts** section, select the **If this condition is true** check box to enable rerun attempts.
5.  The effect will continuously call the Web Service as long as the specified condition is true. Click **Modify** to specify a [condition](../../../../common-concepts/conditions/index.md "Conditions").
6.  In the **Rerun every** box, type the number of seconds to sleep between each call.
7.  In the **Attempt to rerun** box, type the maximum number of rerun attempts for the effect. 

See Also

*   [Web Services](../../../../services/web-services/index.md)
*   [Create Objects and Modify Objects](create-objects-and-modify-objects.md)
