# Configure Authentication for Genus Services

> [!NOTE]
> This article refers to the new authentication mechanisms for the next release of Genus Apps and is a work in progress. 

The new Genus authentication offers several ways to authenticate users, including third party identity providers like Twitter, Facebook, Google, etc. as well as Azure Active Directory, Genus Native and customer specific OAuth2 authentication. To use any of these identity providers one must register an app or authentication client with the desired identity providers and configure the authentication client correctly. Required information/setup for each provider include client ID, client secret and a callback URL which is generated and set up either by using their developer portals or by contacting the provider directly.

Genus supports the following identity providers:
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

The social media identity providers requires a developer account to register an authentication application. The Active Directory identity providers requires in-house setup. The BankID and ID-porten providers require registration/approval/agreement to utilize in addition to more configuration settings than the other identity providers, for instance URLs for authentication and user information. These identity providers also have different settings for test and production environments.

After registering and configuring with the desired providers, the setup for the identity providers can be done in Genus Studio under the Security settings. Some settings are not editable for all the identity providers.

Add the desired providers by selecting the provider type, set the display name and the description, and select the color for the logon button. In the _Config_ field, fill out the client ID, client secret, callback URL and other required information.

Each provider can be enabled/disabled. Multiple instances of the same provider type, except __Custom__, is not supported. 
