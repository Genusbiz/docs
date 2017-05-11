## Consuming a Web Service from Microsoft Visual Studio

To consume a Web Service from Microsoft Visual Studio 2012, select **Add Service Reference...** from the **Project** menu. Enter the address https://_yourserver/yourdataset_/services/_yourwebservice_.svc and click **Go**. In the **Namespace** box, change the default name to your preferred .NET namespace for the generated proxy classes. Then click **OK**.

Tip: If you want to consume _all_ or _most_ web services listed under https://_yourserver/yourdataset_/services/, you may enter that URL instead. This will make Visual Studio generate client proxy classes for _all_ web services in one operation. Another advantage is that it is a lot easier to update the client classes if the web services are changed at a later point in time.

Once generated it is easy to update the generated client proxy classes to reflect changes to the web service interface(s). In the Solution Explorer, navigate to Solution '_YourSolution_' -> _YourProject_ -> Service References -> _YourServiceReference_. Right-click on _YourServiceReference_ and select **Update Service Reference**.

In order to use the web service proxy classes generated above, you typically have to do the following:

1.  Import the generated web service namespace(s) in your code (i.e. by the "using" keyword in C#).
2.  Create an instance of your custom web service class, e.g. _yourwebserviceClient_.
3.  Assign credentials according to the authentication scheme used by the web service by setting _yourwebserviceClient._ClientCredentials.UserName.UserName and _yourwebserviceClient_.ClientCredentials.UserName.Password, or -- if Windows Authentication is used -- by setting _yourwebserviceClient._ClientCredentials.Windows.ClientCredential.
4.  Call the web service operation, e.g. _yourwebserviceClient.youroperation()_, passing any expected input parameters, and process any returned response.  

A code example written in C# is provided [here](../defining the application model/forms/views/desktop controls/reporting and visualization controls/chart/consuming a web service from microsoft visual studio  code example.md "Consuming a Web Service from Microsoft Visual Studio - Code Example").