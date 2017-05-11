## Restart Genus App Services

1.  Sign in to your application server using Remote Desktop Connection, or manually at your server machine's console. In the **Start** menu, type "genus" and then click **Genus Configuration**.
2.  In the **Tools** menu, click **Restart Services**.

A restart of Genus App Services involves recycling of COM+ applications, Windows services, and ASP.NET applications in use by Genus App Services, flushing cached data and re-reading the new configuration information saved by the **Genus Configuration** application.

Note that signed in users are not affected by a restart.