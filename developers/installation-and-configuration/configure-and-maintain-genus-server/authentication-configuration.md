# Configure Authentication for Genus Services

> [!NOTE]
> This article refers to the new authentication mechanisms for the next release of Genus Apps and is a work in progress. 

The new Genus authentication offers several ways to authentication users, including third party identity providers like Twitter, Facebook, Google, etc. as well as Azure Active Directory, Genus Native and customer specific OAuth2 authentication. To use any of these identity providers one must register an app or authentication client with them and configure it correctly. Required information/setup for each provider include ClientID, ClientSecret and a callback URL which is generated and set up either by using their developer portals or by contacting the provider directly.

Genus offers the following identity providers:
- [Google](https://developers.google.com/identity/protocols/OAuth2)
- [Twitter](https://developer.twitter.com/en/docs/basics/developer-portal/guides/apps)
- [Facebook](https://developers.facebook.com/)
- [Github](https://github.com/settings/developers)
- [Instagram](https://www.instagram.com/developer/authentication/)
- Active Directory (a user for reading users is needed, contact the administrator)
- [Azure Active Directory](https://portal.azure.com)
- [BankID](https://www.bankid.no/bedrift/kom-i-gang/)
- [xID by BankID](https://www.bankid.no/bedrift/kom-i-gang/)
- [ID-Porten](https://samarbeid.difi.no/)
- __Genus Native__ (username/password) (Forms Authentication)
- __Custom__ OAuth2 authentication for customer specific authentication

After registrering and configurated with the desired providers, the setup for the identity providers can be done in Genus Studio under the Security settings. Some settings are not editable for all the identity providers.

Add the desired providers by selecting the provider type, set the display name and the description, and select the color for the logon button. In the _Config_ field, fill out the clientId, clientSecret, callback url and other required information.

Each provider can be enabled/disabled. Multiple instances of the same provider type, except __Custom__, is not supported. With the __Custom__ provider type, a custom implementation javascript file is needed. This file must be uploaded to the authservice and the file name must be input in the configuration. Creating and uploading this file must be done by a developer based on the customer's identity provider setup. The start url for __Custom__ must also include the same name as used in the custom implementation file (example: "auth/custom" and "custom.strategy.js").
