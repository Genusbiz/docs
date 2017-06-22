## Consuming Web Services with certificate based authentication

In order to consume web services that require certificate based authentication, the certificate must be installed on the application server and made accessible to the identity under which the IIS Application Pool **Genus App Services Web Site AppPool** is running. You will also need the Certificate Thumbprint to identify the certificate at a later stage.

To set up certificate based authentication, follow the steps below:

**Installing the certificate**

1.  Open the **Genus App Services Management Console**.
2.  Navigate to **Genus App Services | Certificates (Local Computer) | Personal | Certificates**, right-click and select **All Tasks | Import**...
3.  In the **Welcome to the Certificate Import Wizard**, click **Next**.
4.  On the **File to Import** page, click **Browse**...
5.  In the **Open** dialog, change the file name filter box to the appropriate format (typical *Personal Information Exchange (\*.pfx, \*.p12)), select the file and click **Open***.
6.  Back in the **File to Import** page, click **Next**.
7.  On the **Password** page, enter the certificate password. Click to clear the **Enable** strong private key protection box. Then click **Next**.
8.  On the **Certificate Store** page, select **Automatically select the certificate store based on the type of certificate** and click **Next**.
9.  On the **Completing the Certificate Import Wizard** page, click **Finish**.

**Granting private key access to the Network Service account**

The certificate must be accessible to the identity under which the IIS Application Pool **Genus App Services Web Site AppPool** is running. The default identity assigned during Genus App Services installation is **Network Service**. In the following it is assumed that the identity used is Network Service. Please follow these steps:

1.  Open the Genus App Services Management Console.
2.  Navigate to the **Genus App Services | Certificates (Local Computer) | Personal | Certificates** folder.
3.  Locate the imported certificate, right-click and select **All Tasks | Manage Private Keys**.
4.  In the **Permissions** dialog, click **Add**...
5.  In the **Select Users, Computers, Service Accounts, or Groups** dialog, type *NETWORK SERVICE* and click OK.
6.  In the **Group or user names list**, click **NETWORK SERVICE**.
7.  In the **Permissions for NETWORK SERVICE** box, click to clear the **Full control** check box and keep the **Read** check box selected.
8.  Click **OK**.

**Finding the Certificate Thumbprint**

  You will need the certificate thumbprint to identify which certificate to be used during client authentication. Please do the following in order to copy the certificate thumbprint:  

1.  Open the Genus App Services Management Console.
2.  Navigate to the **Genus App Services | Certificates (Local Computer) | Personal | Certificates** folder.
3.  Locate the imported certificate, right-click and select **Open**.
4.  Click **Details** and select **Properties Only** in the **Show** list.
5.  Select **Thumbprint**, navigate to the box below that displays the thumbprint as a hexadecimal digits, press CTRL+A to select the contents, and then CTRL+C to copy the selected text to the clipboard.
6.  Click **OK**.

**Create a Web Service Reference**

To update metadata for the Web Service Reference used to consume the web service, you need the certificate thumbprint found in the previous step. The thumbprint must also be filled out for the endpoints offered by the service.