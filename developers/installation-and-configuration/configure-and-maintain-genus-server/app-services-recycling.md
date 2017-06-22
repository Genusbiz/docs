## App Services Recycling

 **The Core Service is been fully integrated into the Internet Information Services (IIS) Application Pool used by the Genus App Services Web Site.  

In order to configure application pooling properties, like when to recycle to host process, do the following:

1.  Sign in to your application server using Remote Desktop Connection, or manually at your server machine's console.
2.  In the Start menu, type "genus" and then click **Genus App Services Management Console**.
3.  In the top level tree view, select **Internet Information Services (IIS) Manager**
4.  In the second level tree view, select and expand the node representing your application server, and then select **Application Pools** below it.
5.  In the list of application pools, select **Genus App Services Web Site**.
6.  and use the appropriate actions from the ones that are listed.

Note: the **Shutdown Time Limit (seconds)** settings should be set high enough to allow any [agent](../../defining-the-app-model/logic/agents.md) to finish before it is terminated. In reality, this means that the time limit must accommodate for the longest running agent.

Genus specific configuration of the Core Service, like maximum number of concurrent Core Service request threads, is controlled by adding/editing relevant properties in the [appSettingsOverrides.config](tuning-web-service-performance.md) directly.  
**