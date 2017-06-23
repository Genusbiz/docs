# Deploy Changes in the Directory

When you make changes in your directory, these changes have to be deployed to computers connected to your application server(s). If the directory contains changes which have not been deployed, a message is displayed in the **Information Bar** located at the top of the Genus Studio window. To deploy changes, do the following:

1.  [Open Genus Studio](how-to-open-genus-studio.md).
2.  In the **File** menu, click **Deploy Directory to All**, or press CTRL+SHIFT+F5, and then in the **Genus Directory** dialog, select **Deploy Directory to All** and click **OK**.
3.  In the **Deploy Directory** dialog box, specify when the new version should be deployed. To deploy a new version in a specified number of minutes, click **Deploy new version in,** and then type or select a number of minutes. To deploy a new version at a specified time, click **Deploy new version on**, and then select a time.
4.  If you do not want to immediately alert signed in users that a new version is scheduled to be installed, click to clear the **Alert signed in users immediately** check box. For example, if a new version is deployed after work hours, it is no need to notify the currently signed in users. If a new version is deployed in less than 6 minutes, this setting will be ignored, and all signed in users are notified. Signed in users are always notified 5 minutes before the new version is deployed.
5.  Specify which part of the version number to increase. The version number for the directory is composed of three parts: Major-, minor- and release number, each separated by a period. For example, 2.5.13\. The major number should be increased when there are significant changes in functionality, the minor number should be increased when only minor features or significant fixes have been added, and the release number should be increased when minor errors are fixed.

The version number for the directory is displayed in the **About Genus App Platform** dialog box. To open the dialog box, in the **Help** menu, click **About Genus App Platform**. The version number and the date the directory was deployed are also displayed in the **General Settings** dialog box. To open this dialog box, in the **Directory** tree, right-click the entry **General Settings**, and then in the shortcut menu, click **Properties**.

When the version is deployed, all signed in users are forced to restart their client. If deployment of a new version is scheduled, a message containing information regarding the time of deployment, is displayed in the **Information Bar**.


## Local Directory

To test fixes and new functionality, a version of the application model can be deployed locally to your computer only. After the directory is deployed, you can start your Genus desktop client to test changes before the directory is deployed to all computers. To deploy a new version locally, do the following:

1.  [Open Genus Studio](how-to-open-genus-studio.md).
2.  In the **File** menu, click **Deploy Directory to This Computer**.
3.  Start the Genus desktop client. The text **Local Directory** is displayed on the status bar.

To revert to the officially deployed version of the application model, do one of the following:

1.  [Open Genus Studio](how-to-open-genus-studio.md).
2.  In the **File** menu, click **Remove Local Deployment of Directory**.
3.  Start the Genus desktop client. The text **Local Directory** is displayed on the status bar.

 or

1.  Open the Genus desktop client.
2.  Point to the text **Local Directory**on the status bar.
3.  Right-click to open the menu, and click **Remove Local Deployment of Directory**.
4.  Click **OK** to restart the Genus desktop client. 

