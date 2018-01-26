# Genus Server Configuration

> [!NOTE]
> The term directory in this article refers to the usage of the term prior to release 2018.1 of Genus Apps. Both this article and Genus Apps will be updated to reflect the new definition of the term in a later release. See the definition of [directory](../../../terminology.md#directory) and [app model](../../../terminology.md#app-model) for more information.

> [!NOTE]
> All changes made in the Genus Configuration application have immediate effect. This should be considered if there are active users, or running features, like data marts, which will restart on changes.

The Genus Configuration application is installed on the application server as part of the app service installation. It lets you set up and configure the application server for your application.

To start the configuration application on the application server, press the windows button and type "genus configuration", and then start the application from the list.

The configuration is performed on three levels:

*   **Genus Services Options** that apply to the application server.
*   **Genus Directory Properties** that apply to a specific application model accessed through the application server.
*   **Genus Data Set Properties** that apply to a specific set of data for an application.

**Topics in "Genus Server Configuration"**
* [Options](genus-server-configuration/options.md)
* [Directory Properties](genus-server-configuration/directory-properties.md)
* [Data Set Properties](genus-server-configuration/data-set-properties.md)
