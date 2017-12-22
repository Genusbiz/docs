# Analysis configuration

Analysis allows for some special configuration overrides by defining a `config.json` file in the root directory of the analysis installation, i.e. at `C:\Program Files\Genus\Server\wwwroot\Discovery\` on the app server.

## Automatic error tracking and reporting
[!NOTE] This article is only relevant for Genus versions 17.5 and older. For newer versions of Genus, these settings have been moved to Studio. See https://docs.genus.no/developers/defining-an-app-model/general-settings/web-settings.html

We use [Sentry](https://sentry.io) for real time error tracking and reporting. If an analysis crashes, a crash report is sent to Sentry, and the developers are notified immediately. This helps the developers monitor and fix crashes effectively.

To disable Sentry (e.g. if your analysis runs in an environment without direct internet access), you must set the `disableSentry` property in the config file to `true`:
```
{
// ...other config
"disableSentry": true
}
```
### Report to custom Sentry project:
If you have set up and want to report errors to a custom Sentry project, you can specify the DSN of this project by setting a `sentryDSN` property on the config file:
```
{
// ...other config
"sentryDSN": "<your_custom_sentry_DSN_here>"
}
```

See also [Sentry's documentation](https://docs.sentry.io/quickstart/). 

## Custom Genus documentation site
[!NOTE] This article is only relevant for Genus versions 17.5 and older. For newer versions of Genus, these settings have been moved to Studio. See https://docs.genus.no/developers/defining-an-app-model/general-settings/web-settings.html

If you are using a custom Genus documentation site (e.g. if your analysis runs in an environment without direct internet access), you need to set a `genusDocsBaseURL` property in the config for the analysis to point to this instead of the default docs.genus.no:
```
{
// ...other config
"genusDocsBaseURL": "<your_custom_genus_docs_base_URL>"
}
```

## Authentication
As Analyses run in web apps, the same configuration ([Allowed Origins](../../../developers/installation-and-configuration/configure-and-maintain-genus-server/genus-server-configuration/directory-properties.md#allowed-origins), etc.) as done in Genus Apps is needed.
