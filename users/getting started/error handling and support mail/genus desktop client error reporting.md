## Genus Desktop Client Error Reporting

Genus Desktop Client Error Reporting enables you to track and address errors or warnings related to Genus Desktop Client, your operating system and other applications your Genus application is integrated with. If an error occurs, an error message dialog box will appear, where you will be able to send an email to your system administrator or support responsible, with error logs automatically attached.

To set up a predefined support email address, sign in to your Application Server using Remote Desktop Connection, or manually at your server machine's console. In the **Start** menu, point to **All programs**, point to **Genus App Services**, and then click **Genus Configuration** . Expand the folder for your Directory and then your **Data Sets**. Right click your Data Set, and then in the shortcut menu, click **Properties**. In the **Help and support** tab, in the section **Help Requests**, in the box **Recipient E-Mail Address**, enter your support email address. For more information on this setting, see [Genus Configuration - Data Set Properties - Help and Support](../../../developers/installation and configuration/configure and maintain genus server/genus server configuration/data set properties.md)

The error logs attached may be:  
- Log.txt: SQL log with the latest queries run.  
- Screendump.png: A screen dump of the user's desktop.  
- Exception.txt: A program code stack dump, if an Genus execution error occurred.  
- Bugreport.txt:

- Sysinfo.txt: Client (PC) system information.