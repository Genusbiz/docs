## Configure Automatic Updates

[Start](../../developers/installation-and-configuration/configure-and-maintain-genus-server/how-to-start-the-genus-configuration-application.md "How to start the Genus Configuration application") the Genus App Services Configuration application.

In the console tree, expand the folder for your Directory. Click the **Data Sets** folder. Right-click your data set in the table to the right, and then in the shortcut menu, click **Properties**. Click the **Automatic Updates** tab.

Select **Automatically download new versions to Genus Desktop Clients** if your users have sufficient rights on their Personal Computers or laptops to install applications.

Select **New versions are installed and managed by a network administrator** if your users do not have sufficient rights. See [Administrative Client Installation](../../developers/installation-and-configuration/install-genus-desktop-clients-silently-for-your-users.md) for more information.

On terminal servers, special considerations may apply. If the Genus Server is configured with automatic update on your application server, and the terminal server users are not granted administrative rights, you need to turn off automatic update on your terminal server. To do this, in the installation wizard on your terminal server, on the **Setup Type** page, select **Custom**. On the **Custom Setup** page, set **Enable Automatic Updates** to **This feature will not be available**.