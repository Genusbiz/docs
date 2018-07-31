# Configure Authentication for Genus Services

> [!NOTE]
> This article refers to the new authentication mechanisms for the next release of Genus Apps and is a work in progress. 

The new Genus authentication offers several ways to authentication users, including third party identity providers like Twitter, Facebook, Google, etc. as well as Azure Active Directory, Genus Native and customer specific OAuth2 authentication. To use any of these identity providers one must register with them and configure it correctly. Required information/setup for each provider include ClientID, ClientSecret and callback URLs which is generated and set up for each provider either by using their developer portals or by contacting the provider directly.

Genus offers the following identity providers:
- [Google](https://developers.google.com/identity/protocols/OAuth2)
- [Twitter](https://developer.twitter.com/en/docs/basics/developer-portal/guides/apps)
- [Facebook](https://developers.facebook.com/)
- [Github](https://github.com/settings/developers)
- [Instagram](https://www.instagram.com/developer/authentication/)
- Active Directory
- [Azure Active Directory](https://portal.azure.com)
- [BankID](https://www.bankid.no/bedrift/kom-i-gang/)
- [xID by BankID](https://www.bankid.no/bedrift/kom-i-gang/)
- [ID-Porten](https://samarbeid.difi.no/)
- Genus Native (username/password) (Forms Authentication)
- Custom OAuth2 authentication for customer specific authentication

After registrering and configurating with the desired providers, the setup for the identity providers can be done in Genus Studio under the Security settings.

Add the desired providers by selecting the provider type, set the display name and the description, select the color and [Font Awesome](https://fontawesome.com/) icon for the logon button. In the Config field, write the clientId, clientSecret, callback url and other required information.

Each provider can be enabled/disabled. Multiple instances of the same provider type, except __Custom__, is not supported. With __Custom__ a custom implementation code file is needed. This file must be uploaded to the authservice and the file name must be input in the configuration.
