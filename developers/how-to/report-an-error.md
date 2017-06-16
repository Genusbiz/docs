# How to report an error

Send error reports (bug reports) to your service desk, which almost _never_ is a Genus representative, since most 1. and 2. line support is handled by Genus customers themselves or through partners.

Always provide a detailed description of the error and the steps leading up to the error. See our [Guidelines for error reporting](#guidelines-for-error-reporting) below.

## Guidelines for error reporting

It is important that you as a developer or a user always attach a detailed description as possible and the steps that resulted in the error. Here are a couple of things to remember when reporting an error:

* Describe the steps to reproduce the bug.
* Make sure your Genus App Platform version is up to date, and that all underlying or connected software also is up to date.
* Provide the exact date and time the error occurred.
* Provide the address (URL) to your solution and the user name of the user who experienced the error.
* Check event logs on your Genus App Services server. Attach any relevant events from the logs to your error report.
* If you are using Genus Desktop, make sure to check event logs on your Windows 10 computer.
* If you have more than one error, create one report per error.

Please note that support or error incidents forwarded to Genus support may be rejected if these guidelines are not fully adhered to.

If you are a Genus employee, you are required to provide the steps to reproduce the error in a debug solution at Genus main offices. Remember to attach URL, username and password to the debug solution.

## Genus Apps error reporting

Genus Apps will automatically send crash reports to our real-time error tracking system (we are using [Sentry](https://sentry.io/)). This will help us correct the error. We often still need your error description, so do not forget to follow our [guidelines for error reporting](#guidelines-for-error-reporting).

Note that it is possible to turn off the real-time error tracking system per Genus solution, since not all solutions have internet access.

## Genus Desktop error reporting

If an error occurs, an error message dialog box will appear, where you will be able to send an email to your service desk, with error logs automatically attached.

The error logs attached may be:  
* Log.txt: SQL log with the latest queries run.  
* Screendump.png: A screen dump of the user's desktop.  
* Exception.txt: A program code stack dump, if an Genus execution error occurred.  
* Sysinfo.txt: Client (PC) system information.

We recommend to check any Windows event log information from the desktop computer.

We also recommend to check the Windows event log on the Genus App Services server to get the whole picture, since errors may originate from the server and not all message details may be transported to the desktop.

## Genus App Services error reporting

We recommend frequently viewing your Genus App Services server Windows event logs **Genus App Services** and **Application**. There should not be any errors or warnings in these logs.

We recommend monitoring these logs, since it may happen that Genus App Services logs events that is unnoticeable for your users, or your users experience incidents, but do not report them.

Some events may contain a lot of technical information. We recommend always reading the whole event description text in order to locate any readable clues to your problem at hand.

Some Windows events are expected during Genus App Services upgrades or Windows updates, since services tend to be unreachable for a short time during such operations. Therefore, always compare any events date and time with your maintenance windows.

## How to set up a support email address

To set up a predefined support email address, sign in to your server containing Genus App Services using a Remote Desktop Connection, or manually at your server machine's console.

Start the Genus Configuration tool and expand the folder for your Directory and then your Data Sets.

Right click your Data Set, and then in the shortcut menu, click Properties.

In the Help and support tab, in the section Help requests, in the box Recipient e-mail address, enter your service desk's email address.

For more information on this setting, see [Genus Configuration - Data Set Properties - Help and Support](../installation-and-configuration/configure-and-maintain-genus-server/genus-server-configuration/data-set-properties.md).