# Restart Genus Services

1.  Sign in to your application server using Remote Desktop Connection, or manually at your server machine's console. In the **Start** menu, type "genus" and then click **Genus Configuration**.
2.  In the **Tools** menu, click **Restart Services**.

A restart of Genus Services involves recycling the **Genus Services Web Site AppPool** process hosted by Internet Information Services (IIS), flushing cached data and re-reading the new configuration information saved by the **Genus Configuration** application or by **Genus Studio**.

Note that signed in users are not affected by a restart, unless major changes (like modifying the name of virtual directories) has been done to the Genus app model.
