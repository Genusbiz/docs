# Options

To open the Genus Services options, in the **Genus Configuration** application, open the **Tools** menu, and select **Options**.


## General

**Max Received Message Size**

The maximum number of megabytes that can be downloaded from external web services.

This setting only applies when consuming external web services, i.e. running the "Consume a Web Service" effect where **Consume a web service published at this address** is selected. The setting does not apply when consuming internal web services.

You may need to increase the maximum received message size if the following runtime error occurs: _"System.ServiceModel.CommunicationException: The maximum message size quota for incoming messages (<current-number-of-bytes>) has been exceeded."_

_Default value: 40 megabytes_

**Request Compression**

Select this option if data should be compressed when data are transferred from the client to the application server. To reduce the CPU/memory load on the application server and the client, you can turn compression off. This would however require more bandwidth.

This setting does only apply to Genus desktop clients, not external web service clients.

_Default value: On_

**Max Transaction Result Size**

The maximum number of megabytes that can be returned by the transaction service when requesting data from the database. The size is calculated based on the SQL result set formatted as XML. Thus the size of the formatted SQL result set is slightly larger than the size of the original SQL result set.

Note that this setting only applies when users are searching for data. E.g., when a user requests detailed information for an object, this setting is ignored.

To avoid queries which requires a lot of memory usage and may cause the server to run out of memory, you should set this size limit to a value which covers the needs of a typical user.

_Default value: 40 megabytes_

**Response Compression**

Select this option if data should be compressed when data are transferred from the application server to the client. To reduce the CPU/memory load on the application server and the client, you can turn compression off. This would however require more bandwidth.

This setting applies to Genus desktop clients and other clients that indicates, using the standard HTTP "Accept-Encoding" header. that they accept compressed response data.

_Default value: On_

**SSL Offloading is used in front of the application server tier**  

Indicates that an SSL Offloader is used in front of the application server tier. By selecting this option Genus Desktop and Genus Apps will connect to Genus Services over HTTPS, but Genus Services will not redirect HTTP requests to HTTPS as it presumes that the SSL Offloader will guarantee that the HTTPS communication is terminated on the SSL Offloader. Please make sure that the SSL Offloader is configured to redirect all HTTP requests to HTTPS. Clients running iOS 9.x or later require either this option activated, or the **Redirect to secure Connection** option activated.

_Default value: Off_

**Provide Secure Genus Links**  

If selected, Genus Services and Genus Apps will use HTTPS when communicating with Genus Services. However, this requires that an HTTPS endpoint is available, by using SSL Offloading (see above) or that an HTTPS endpoint has been added to the Genus Services Web Site using the Internet Information Server (IIS) Manager.

_Default value: On_

**Redirect to Secure Connection**  

Ensures that all HTTP requests to Genus Server are rejected or redirected to HTTPS, if available. **IMPORTANT**: An HTTPS endpoint has to be added to the Genus Server Web Site using the Internet Information Server (IIS) Manager to make this work. If an HTTPS endpoint is not available the communication will automatically fall back to unsecured HTTP communication. **We strongly discourage this**. Clients running iOS 9.x or later require either this option activated, or the **SSL Offloading is used in front of the application server tier** option activated.  

_Default value: On_

**Agent Service Threads**  

Increasing this number will increase the agent execution throughput, but may also consume CPU and memory by the same factor. Setting this number too high, may actually end up hurting your performance, because your server(s) may get overloaded, and also affect Genus Desktop Services, Genus Services or other services. Since your ideal number of Agent Service Threads is highly dependent on your application model and your server configuration, we cannot give any specific recommendations. We recommend you to test the performance in your test environment before applying any changes to your production environment.

_Default value: 1_

**Redirect Internet Host Name**

Overrides the Internet Host Name specified in the [directiory properties](directory-properties.md).

In a load balanced scenario you may want to add an additional application server that should run web services only. In these cases you will specify the application server's address as a local override in the Redirect Internet Host Name. This will prevent clients from being redirected to the load balancer. In a test scenario you may have one production application server that responds to the official Internet Host Name, but you would like to add another test server and prevent clients accessing this application server from being redirected to the official application server.  

Please note that you should never specify a value for Redirect Internet Host Name, if this would be the same as the Internet Host Name.

There are some exceptions from the general rule on how host names are used. For more information, see [Host Name Usage Exceptions](../../../../users/navigate-view-modify-and-control/working-in-tables/host-name-usage-exceptions.md "Host Name Usage Exceptions").

_Default value: blank_



## App

**Session Token Lifetime**

The amount of time before a Session Token cookie expires.

_Default value: 20 minutes_

**Sliding Expiration Enabled**  

Sliding expiration resets the expiration time for a valid Session Token cookie if a client sends a request to the server and more than half of the Session Token Lifetime has elapsed. If the cookie expires, the user must re-authenticate. Setting the Sliding Expiration property to false can improve the security of an application by limiting the time for which an Session Token cookie is valid, based on the configured timeout value.

_Default value: On_

**Absolute Token Lifetime**

Applies only if Sliding Expiration has been enabled, and limits the maximum total amount of time a Session Token cookie may live. If the cookie expires, the user must re-authenticate.

_Default value: 2 hours_

**Minimum App Core Loader Versions**  

Specifies the minimum version number which is required for platform specific AppCoreLoader versions of the Genus App.  

_Default values: blank_

**Genus Server URL Override**  

Specifies the external URL from which Genus Services is visible from the Genus App. This URL may differ from Internet Host Name specified in Genus Directory. The URL must contain protocol and data set. For example: _https://demo.example.com/dataSet_.

**Enabled automatic crash report**

Toggles wether or not to use [Genus Apps error reporting](../../../how-to/report-an-error.md#genus-apps-error-reporting)


## Log

Logging of the server side operations is specified here. Logging can affect performance and should only be used for limited periods of time, for example for troubleshooting purposes.

**Log to File**

Specifies the file path and name to a file that the server writes a log to. If no file is specified, no logging is performed.

_Default value: blank_

**Choose level for extended logging**

Specifies the areas where extended logging should be used.

_Default values: blank_

