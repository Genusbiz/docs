# Deploy app model changes

When you make changes in your [app model](../../../terminology.md#app-model) using Genus Studio, these changes have to be deployed to devices connected to your [Genus Services](../../../terminology.md#genus-services).

If the app model contains changes which have not been deployed, a message is displayed in an information bar located at the top of Genus Studio.

## Deploy to all

To deploy changes to all devices, open the **File** menu inside Genus Studio and click **Deploy the App Model to All...**. Inside this dialog you have the following options:

* **To deploy a new version in a specified number of minutes.**
* **To deploy a new version at a specified time.**
* **Whether to alert logged on users immediately or not.** For example, if a new version is deployed after work hours, it is no need to notify the currently signed in users. If a new version is deployed in less than 6 minutes, this setting will be ignored, and all signed in users are notified. Signed in users are always notified 5 minutes before the new version is deployed.
* **Specify which part of the version number to increase.** The version number for the app model is composed of three parts: Major-, minor- and release number, each separated by a period. For example, 2.5.13. The major number should be increased when there are significant changes in functionality, the minor number should be increased when only minor features or significant fixes have been added, and the release number should be increased when minor errors are fixed.

In Genus Desktop, the app model version number is displayed in the **File** / **Application** screen. In Genus Studio, the app model version number is displayed in the **General Settings** dialog accessible from the main (top) menu.

When the version is deployed, all signed in users are forced to restart their client. If deployment of a new version is scheduled, a message containing information regarding the time of deployment, is displayed in Genus Desktop. Behind the scenes, all Genus Services are restarted.

## Deploy locally to Genus Desktop

To test fixes and new functionality in your app model in Genus Desktop, a version of the app model can be deployed locally to your desktop computer. After the app model is deployed, you can start Genus Desktop to test changes before you deploy the app model to all devices.

To deploy locally, open the **File** menu inside Genus Studio and click **Deploy the App Model to this Computer**. Then restart Genus Desktop.

To revert to the "deployed to all" version, in the **File** menu inside Genus Studio, click **Remove Local Deployment of the App Model**, and then restart Genus Desktop.

The keyboard shortcut for deploying locally is CTRL+F9. The keyboard shortcut for restarting Genus Studio and Genus Desktop is CTRL+SHIFT+F5.