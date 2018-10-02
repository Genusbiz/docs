---
title: Web Service References in Genus Apps
description: Add Web Service References in Genus Studio for consuming Web Services to retreive metadata from the WSDL. Define endpoints and authentication for the service.
author: eriksandnes
---
# Web Service References

The Web Service Reference is a component that locally represents the exposed functionality of a Web Service. This representation is built by retrieving metadata from the WSDL published for the Web Service.

To create a Web Service Reference, do the following:

1.  [Open Genus Studio](../../getting-started/how-to-open-genus-studio.md).
2.  In the Directory tree, click the Web Services folder, and then on the toolbar, click New and then click **Web Service Reference**.
3.  In the **Name** box, type a name for the Web Service Reference.
4.  Select the location of the Web Service. You can call a Web Service published on your Application Server, or a Web Service published at a specified address. If you type an address, click **Update Metadata** to retrieve the description of the Web Service.
5.  If user authentication is required, type a user name and password in the **User Name** and **Password** boxes.
6.  If the Web Service requires certificate based authentication, you will be prompted for a **Certificate Thumbprint**. Follow the instructions in the [step-by-step procedure](consuming-web-services-with-certificate-based-authentication.md "Consuming Web Services with certificate based authentication") on how to install the certificate and retrieve the certificate thumbprint.
7.  In the **Contract** box, select the appropriate service contract.

You may browse the content of the selected service contract by examining the **Endpoints** and **Operations** tabs. The Operations tab shows **what** features the selected contract offers, and the Endpoints tab shows **how** the features are offered.  


## Endpoints

Available endpoints for the selected service contract are listed in the **Endpoints** tab. You may configure each endpoint with **alternate address** and **user credentials**.

Endpoints for external Web Services can be configured to use an alternate address. This may be useful if you wish to read the service contract from one location, and call the operation on another location.

To specify an alternate address, follow these steps:

1.  Click the **Endpoints** tab.
2.  Select the desired endpoint from the list of endpoints, and click **Modify**.
3.  In the **Alternate** box, type in the alternate endpoint address.
4.  Select the **Use Alternate Address** check box to enable the alternate endpoint address.

If the service provider requires user authentication, do the following:

1.  In the **Credential** **Type** box, select the preferred credential type.
2.  Type a user name and password in the **User Name** and **Password** boxes.
3.  If the Web Service requires certificate based authentication, the certificate must be installed on the application server. Follow the instructions in the [step-by-step procedure](consuming-web-services-with-certificate-based-authentication.md "Consuming Web Services with certificate based authentication") on how to install the certificate.
4.  In the **Certificate Thumbprint** box, type the certificate thumbprint found in the step-by-step procedure.  

To use another encoding than the default *UTF-8*, in the **Text Encoding** box enter the code for the encoding. For example, *ISO-8859-1*.

The Envelope Version box displays the applicable SOAP version for the external web service.

