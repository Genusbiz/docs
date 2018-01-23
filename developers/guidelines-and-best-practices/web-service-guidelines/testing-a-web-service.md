# Testing a Web Service

To test run a Web Service published on your application server, we recommend using a third- party software. The interoperability of the Web Service should be verified by a client not based on the WCF .NET Framework. E.g. soapUI. Be sure to [deploy](../../defining-an-app-model/getting-started/deploy-app-model-changes.md) any changes in the the definition of the Web Service before testing. A log containing the SQL statements and other info can be retrieved by running the Genus trace log utility on the server.

In addition, early testing can be performed by utilizing the Genus feature for test running a Web Service from a rich client. See below for more information.  


## Test Run a Web Service Operation from a desktop client

By performing a test from your desktop client, you can test an operation before the Web Service is published. Note that this is an actual execution, and not a simulation. If your operation is configured to manipulate data, the data is actually altered. 

If you have changed the definition of the Web Service, you must [deploy](../../defining-an-app-model/getting-started/deploy-app-model-changes.md) these changes to your computer ( [Deploy Directory to This Computer](../../defining-an-app-model/getting-started/deploy-app-model-changes.md)). 

 1.  Start your Genus desktop client.
2.  In the **File** menu, point to **Test Run** and then click **Web Service** .
3.  Follow the instructions in the **Test Run** wizard.

Note that it is important to follow the steps above in the given sequence. Do not change the definition of the web service or related parts of your application model after the deploy, and then do the test run. In such circumstances the test run might fail of subtle technical reasons.

By test running a Web Service operation on your rich client you can retrieve a log containing the SQL statements executed. The log is retrieved trough the Genus trace log utility.  

