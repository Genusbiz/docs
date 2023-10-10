# Configure Authentication for Genus Services

The new Genus authentication offers several ways to authenticate users, including third party identity providers like ID-Porten, BankID, etc. as well as Azure Active Directory, Genus Native and customer specific OAuth2 authentication. To use any of these identity providers one must register an app or authentication client with the desired identity providers and configure the authentication client correctly. Required information/setup for each provider include client ID, client secret and a callback URL which is generated and set up either by using their developer portals or by contacting the provider directly.

Genus supports the following identity providers:
<!--
- [Google](https://developers.google.com/identity/protocols/OAuth2)
- [Twitter](https://developer.twitter.com/en/docs/basics/developer-portal/guides/apps)
- [Facebook](https://developers.facebook.com/)
- [Github](https://github.com/settings/developers)
- [Instagram](https://www.instagram.com/developer/authentication/)
- [BankID](https://www.bankid.no/bedrift/kom-i-gang/)
- [xID by BankID](https://www.bankid.no/bedrift/kom-i-gang/)-->
- Active Directory Federation Services (a user for reading users is needed, contact the administrator)
- [Azure Active Directory](https://portal.azure.com)
- [ID-Porten](https://samarbeid.digdir.no/)
- [AnsattPorten](https://samarbeid.digdir.no/)
- __Genus Native__ (username/password) (Forms Authentication)
- __Custom__ OAuth2 authentication for customer specific authentication

<!-- The social media identity providers requires a developer account to register an authentication application.--> The Active Directory identity providers requires in-house setup. The BankID and ID-porten providers require registration/approval/agreement to utilize in addition to more configuration settings than the other identity providers, for instance URLs for authentication and user information. These identity providers also have different settings for test and production environments.

After registering and configuring with the desired providers, the setup for the identity providers can be done in Genus Studio under the Security settings. Some settings are not editable for all the identity providers.

Add the desired providers by selecting the provider type, set the display name and the description, and select the color for the logon button. In the _Config_ field, fill out the client ID, client secret, callback URL and other required information.
- For __Azure AD__:
  - _azureAdResource_ should be "00000003-0000-0000-c000-000000000000", i.e. [Microsoft Graph](https://www.shawntabrizi.com/aad/common-microsoft-resources-azure-active-directory/)
  - _azureAdTenant_ is the tenant the for Azure AD, i.e. "contoso.onmicrosoft.com
  - _azureAdCallbackUrl_ should be "/-/auth/azuread/callback"
- For __Active Directory FS__:
  - _adfsIssuer_ should be an url to the ADFS-server, i.e "https://adfs.example.com/adfs
  - _adfsAuthUrl_ should be "https://adfs.example.com/adfs/oauth2/authorize/"
  - _adfsTokenUrl_ should be "https://adfs.example.com/adfs/oauth2/token/"
  - _adfsUserInfo_ should be "https://adfs.example.com/adfs/userinfo"
  - _adfsCallbackUrl_ should be "/-/auth/adfs/callback"
- For __ID-Porten__ (see [prod .well-known](https://idporten.no/.well-known/openid-configuration) for production values and [test .well-known](https://test.idporten.no/.well-known/openid-configuration) for test values):
  - _idPortenIssuer_ should be "https://idporten.no"
  - _idPortenAuthUrl_ should be "https://login.idporten.no/authorize"
  - _idPortenTokenUrl_ should be "https://idporten.no/token"
  - _idPortenUserInfo_ should be "https://idporten.no/userinfo"
  - _idPortenAcrValues_ should be either "idporten-loa-substantial" or "idporten-loa-high". This indicates which [security level](https://eid.difi.no/en/security-and-privacy/different-levels-security) should be used.
  - _idPortenCallbackUrl_ should be "/-/auth/idporten/callback"
  - _idPortenEndsessionUrl_ should be "https://login.idporten.no/logout"
  - _idPortenPostLogoutUrl_ where to send the user after they log out
- For __Ansattorten__ (see [prod .well-known](https://ansattporten.no/.well-known/openid-configuration) for production values and [test .well-known](https://test.ansattporten.no/.well-known/openid-configuration) for test values):
  - _ansattPortenIssuer_ should be "https://idporten.no"
  - _ansattPortenAuthUrl_ should be "https://login.ansattporten.no/authorize"
  - _ansattPortenTokenUrl_ should be "https://ansattporten.no/token"
  - _ansattPortenUserInfo_ should be "https://ansattporten.no/userinfo"
  - _ansattPortenCallbackUrl_ should be "/-/auth/ansattporten/callback"
- __Genus Native__ has no extra config-settings
- __Custom__ requires creating a file by Genus experts.

Each provider can be enabled/disabled. Multiple instances of the same provider type, except __Custom__, is not supported.

Each provider can have two-factor authentication enabled, prompting the user to register Genus in an authenticator app.

Each user must be connected to the desired and enabled identityprovider with the correct Account Id from the identityprovider.
Users can be automatically generated at first sign in with an identity provider. To enable this the identity provider must be connected with an [Onboarding account profile](../../defining-an-app-model/security/account-profiles.md) which must have a connected [Security group](../../defining-an-app-model/security/security-groups-and-user-accounts.md). The security group's privileges determines what the new user is able to do. Not all necessary user information is provided from the identity providers and may be required to be completed afterwards.

Azure AD supports guest accounts. To use this in Genus, the Token configuration for the authenticator app in the Azure Portal must include __upn__ as an optional claim enabled for __Externally authenticated__ and __Replace hash marks__. The Account Id for a guest user with mail@example.com as email, must be on the format _mail\_example.com\_EXT\_@genusas.onmicrosoft.com_ registered on the user's identityprovider connection.
