## Genus App Services User Authentication

There exist two user authentication methods: **Custom Authentication** and **Active Directory Authentication**.

**Custom User Authentication**

Your application uses the default user account table provided by Genus App Services. You must manually add users by using your Genus desktop client application, and users must enter their user name and password each time they log on to your Genus desktop client application.

Custom Authentication is usually used when your Genus App Services application server is located in a DMZ.

**Active Directory User Authentication**

Your application integrates with Microsoft Windows authentication, and user information is interchanged with Genus App Services when a user logs on.

Active Directory Authentication makes it possible for users to log on automatically without a password dialog. To avoid the password dialog, the following requirements must be fulfilled:

*   The Genus App Services application server must be situated inside the same Active Directory Domain as your Genus desktop client applications.
*   Internet Options on the client computers must allow automatic log on. This is the standard setting for the zones Local Intranet and Trusted Sites.

The Genus App Services application server must always be a member of the Active Directory Domain which is to be used for authentication. If the Genus App Services application server is not a member of the Active Directory Domain, Custom Authentication must be used. This will typically be the situation if you Genus App Services application server is located in a DMZ.

If the Genus desktop client applications are not a part of an Active Directory Domain, or not part of the same Active Directory Domain as the Genus App Services application server, you can still use Active Directory Authentication. This, however, will always cause the users to be presented with a password dialog when they log on.