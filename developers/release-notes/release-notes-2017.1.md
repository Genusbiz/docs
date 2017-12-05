---
title: Release notes for Genus Apps release 2017.1.
description: User-visible changes to Genus Apps from release 2016.1 to 2017.1.
author: jtroset
---
# Release notes for version 2017.1

## Introduction

This document lists all user-visible changes to Genus Apps since the previous release.
 
This release note will be updated prior to the release and may also be updated as long as the release is available, e.g. with information of new patches or known issues. Please take note of the [installation and upgrading](#installation-and-upgrading) comments, and the release notes [change log](#change-log).

## Installation and upgrading
 
Prior to upgrading to this release, you must:
* Upgrade to the previous release. See the Release notes for the previous release for more information.
* Review the Expiry date of your Genus License File and install a new one if necessary.
* Review the rest of the release notes for this release. Pay special attention to any issues in the sections [Deprecated Functionality](#deprecated-functionality), [Breaking Changes](#breaking-changes) and [Known Issues](#known-issues). You may have to perform manual tasks.
* Please note that there does not exist any Genus Upgrade Assistant for this upgrade.
 
For general information about installing and upgrading Genus Apps, see [here](../installation-and-configuration/index.md). We especially recommend reviewing the [System Requirements](../installation-and-configuration/system-requirements.md) article.
<!--rntype01-start INSTALLATION / UPGRADE. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->

See also the following notes.

<!--ID c33176d2-dcd7-44b2-a949-7301cfc335a5 -->
**#22805 Can now specify domain when installing Genus Apps.** (Web)

If a domain is requried to log into Genus Apps, ie EXTERNAL/username, this can now be specified when installing Genus Apps, so users don't have to do it.

<!--ID a629c407-ceb8-4094-bdb9-35483ef200dd -->
**#22843 New requirement for Genus App Services for IBM DB2 access** (Services)

Genus App Services 2017.1 now requires "IBM Data Server Driver Package v11.1.1.1" (IBM Data Server Client Packages 11.1 Mod1 Fix Pack 1) to be preinstalled on your application server to successfully connect to IBM DB2 databases.

<!--rntype01-end   INSTALLATION / UPGRADE. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
<!-- release note type 2 is missing. That's ok.-->

## End-of-life functionality

End-of-life functionality is functionality that was available in the previous release, but is no longer available in this release.
<!--rntype03-start END-OF-LIFE. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 444ce65e-6c0d-40f2-94e0-12193eee197d -->
**#22839 Open HTML/Rich Text Editor in new window** (Desktop)

HTML and Rich Text editing was previously only available by opening a text edit dialog. From this release, HTML/Rich Text can be edited directly inside a Form. 
The Form command type "Open HTML/ Rich Text Editor" has been removed.

<!--rntype03-end   END-OF-LIFE. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Deprecated functionality

Deprecated functionality is available in this release, but will (most probably) no longer be available in the next release.
<!--rntype04-start DEPRECATED. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 3b2dcf9d-338e-40b7-b0d9-adf9cbaeabaa -->
**#22814 Internet Explorer support schedule** (Web)

Our system requirements for Genus Apps have been updated as follows:

Genus Apps runs on all major evergreen browsers on all devices, and as an app on iOS (8.x and later), Android (version 4.4 and later), Windows Phone 8.1, and Windows 8.1 and 10.

The term "evergreen browser" refers to web browsers that are automatically upgraded to future versions. We consider Mozilla Firefox, Google Chrome, Microsoft Edge and Apple Safari to be evergreen browsers.

Please note that Internet Explorer 11 and older versions are not considered evergreen. Our support schedule is as follows:
- Genus Apps 2016.1 or earlier: Internet Explorer 11 is supported.
- Genus Apps 2017.1: Internet Explorer 11 is supported for all functionality areas except Analysis (Genus Discovery). We recommend using an evergreen browser.
- Genus Apps 2017.2 and forward: Support for Internet Explorer may be removed based on usage. You may have to use an evergreen browser.

In general, support for operating systems and browsers with a market share of 5% or less is removed in the next release of Genus App Platform.

<!--rntype04-end   DEPRECATED. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Breaking changes

This section lists important changes introduced in this release. You will need to use this list in order to understand the changes you might need to make to your application to support the new release.
<!--rntype05-start BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 2719ffcc-f3c2-4835-8940-2209241630c7 -->
**#22756 Object class flags are no longer supported**

<!--ID 8bd57455-7909-43cc-aa08-fc69f938eb0c -->
**#22772 Keyboard shortcuts for displaying help documentation in Genus Desktop** (Desktop)

In previous versions you had to press CTRL+F1 to display custom help documentation for your application. Pressing F1 displayed the help documentation for Genus App Platform.

If you have specified a location for custom help documentation, this documentation is now considered as the first choice and displayed when users press F1. To display help on Genus App Platform, press CTRL+F1.

In applications which not specifies a location for custom help documentation the behaviour is unchanged. That is, help on Genus App Platform is displayed when users press F1.

<!--ID 18a8496b-575b-479e-af49-d00243cfe009 -->
**#22778 Removed support for third-party Pdf-generators** (Desktop)

Earlier versions of Genus Desktop based export to PDF-files on several third-party Pdf-generators. In order to have better control of Pdf-generation and remove dependencies to other software this support has been removed.

Pdf-generation is now based on the Pdf- and Xps-support built into Windows. In Windows 10, there is a builtin printer that may be used to generate Pdfs directly, while in older versions of Windows we use the builtin printer for Xps and use a library to convert this format to Pdf.

Note that the removal of support for third-party providers does not affect Pdf-generation when creating files in mail merge from a task or agent, as this is performed by the actual component that performs the merge operation.

<!--ID a80de157-484c-4562-9c54-d2c280d5c4e4 -->
**#22780 A form is now divided into App and Desktop** (Desktop;Studio;Web)

In practice, Apps and Desktop views were never created and maintained in the same Form by our customers. If a form with different kind of views exist (for test purposes or likewise), the conversion will notify the developer and set the form as a desktop form.

<!--ID 9ef20926-bc39-41a1-855d-a3cd68c4ecf5 -->
**#22791 Node Groups required for agents to run** (Services)

An Agent needs a Node Group to run on the server.

<!--ID 50484397-80fc-4b75-a2e2-cd0e29d0fbb1 -->
**#22819 No longer sets focus on first input element automatically when opening view** (Web)

This can be done with modelling instead, using set Focus command from On Open View.

<!--ID fb1b5e3e-2d4f-4173-a65f-7c56690c2be2 -->
**#22840 HTML/Rich Text editing inside a Form** (Desktop)

Existing Html and Rich Edit controls were previously always read-only as editing was enabled through the "Open HTML/ Rich Text Editor" command. Now, the control will allow editing unless read-only is set to true or the property is not available for modification. This change should be reviewed for all controls in use in current Forms.

Remove any usage of the "Open HTML/ Rich Text Editor". Affected Forms is identified by script [017.100.014.001]

<!--ID 62f460af-f9d8-4508-9db9-9356f32839a5 -->
**#22846 Multiple apply changes is no longer allowed** (Web)

Running apply changes while another apply changes request is ongoing will result in the second request to throw a command exception.

<!--ID a52cfb98-35be-4f5f-981c-efcf99b84464 -->
**#22851 Potential breaking change: Internet Host Name and Redirect Internet Host Name** (Desktop;Services;Studio)

Over time and across various components within Genus App Platform there has been an inconsistent use of the "Internet Host Name", specified in Genus Directory, compared to the local application server "Redirect Internet Host Name" configuration override. As of Genus App Platform 2017.1, the following applies. Please verify that this does not break existing Genus App Platform solutions.


"Internet Host Name"

By default, the Internet Host Name, as specified in the Genus Configuration tool and stored in the Genus Directory database, is used to redirect all client requests to an "official" URL. When a single application server is used, the Internet Host Name is used as the fully qualified domain name of the application server. When two or more application servers are located behind a load balancer, the Internet Host Name represents the fully qualified domain name of the load balancer.


"Redirect Internet Host Name"

In a few cases you want to add an application server that deviates from scenarios above: 

- In a load balanced scenario you may want to add an additional application server that should run web services only. In these cases you will specify that application server's address as a local override of the "Redirect Internet Host Name" in the Genus Config tool's Tools | Options menu. This will prevent calling clients from being redirected to the load balancer.

- In a test scenario you may have one official application server that responds to the Genus Directory Internet Host Name, but you would like to add another test server and prevent clients accessing this application server from being redirected to the official application server.

Please note that you should never specify a value for "Redirect Internet Host Name" if this would be the same as the "Internet Host Name".


Use of local host name (NetBIOS Name)

When Genus Desktop is started on the same application server that is hosting the solution being accessed, the host name will always be overridden to the local hostname (NetBIOS name) regardless of the value specified as "Internet Host Name" or "Redirect Internet Host Name". The rationale behind this is that the local host name will always work, whereas in a few cases a fully qualified internet host name may only work from external clients. For the same reason, when a task on the application server calls another web service over HTTP (SOAP or REST) within the same Genus Directory it will also use the local host name (NetBIOS name).


Shortcuts

When Genus Desktop or application server effects are sending object shortcuts by mail the Genus Directory Internet Host Name will always be used as host in the URLs created.

<!--ID 5f7deb97-8c9c-48c5-ae46-719bc6c28f53 -->
**#22866 Changes in the data binding setup for "Set a Fields Value"-command (App Forms)** (Web)

If a "Set a Fields Value"-command is associated with a control within a group which repeats content, the following rules apply when the command is bound to the data source which is repeated:

1) As opposed to the functionality in previous versions, an active object binding can no longer be defined. By default the value is assigned to the current object.
2) To assign the value to all objects, select the "Apply to All Objects" check box. In previous versions the active object binding was omitted to achieve this. 

Existing commands are automatically updated according to these rules.

<!--rntype05-end   BREAKING. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Major new functionality
<!--rntype06-start MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID b535e2c1-6ead-495b-8652-fb9cb425bee4 -->
**#22834 Genus Discovery enhancements** (Desktop;Web)

The following Genus Discovery enhancements will be introduced in a beta version, restricted to selected partner projects:
- New Analysis Designer in Genus Desktop.
- Analysis Viewer available on web in addition to Genus Desktop.
- General performance improvements and support for larger Data Marts.
- New Analysis View Layout concept, designed to facilitate cross platform use. Note that this requires a re-design of view layout for (all) existing analyses.

<!--ID aae596a2-6db8-417a-9d80-5e64747b4d50 -->
**#22870 Improved support for import and export of JSON data** (Services;Studio)

In the previous version of Genus, import and export of JSON data were dependent on the structure of the datasource used in the import/export operation. To provide better flexibility, we have redesigned this functionality by providing a mapping mechanism that allows for more flexible JSON handling. The mapping mechanism is based on a template that describes the structure of the JSON data, and bindings that specify how data is mapped towards the JSON data. 

The new mapping mechanism is currently available in the REST Method editor for import of Request Body, in the Export Data effect when exporting to JSON, as well as in the Consume REST Service effect for both the Request Body and Response Handlers.

<!--rntype06-end   MAJOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Minor new functionality
<!--rntype07-start MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 7a807d48-b000-4802-a802-8efa8b1665e1 -->
**#22761 Mechanical create ribbon items for Object Class View** (Desktop)

Tasks published to the Run-verb in a publication are now available in Ribbon when viewing objects in a Object Class View

<!--ID 14038402-ff34-4239-afb2-555e9f0970fd -->
**#22767 Now shows a placeholder while waiting for candidates for radio button groups.** (Web)

<!--ID c01d8a15-d1ac-4584-b15b-47256d37c498 -->
**#22774 Min and Max CalendarTime functions added to Genus App Platform Advanced Expressions** (Desktop;Services;Studio;Web)

Returns the smallest or largest calendar time value in a collection of values.

<!--ID f88ca877-5feb-485c-aed1-cdd3292a4813 -->
**#22777 Database statistics optimization** (Desktop;Services;Web)

Genus App Platform now utilize database statistics for optimizing database queries. However, the process of loading the table and column statistics from the database may take some time. To alleviate this the database statistics will be cached to file both on the client side (Genus Desktop) and the server side (Genus App Services, also when serving Genus Apps clients). Genus App Services will regularily query the database for statistics in the background and update the data in a cache file on the server. A Genus Desktop client that does not find database statistics for a database table (invalidated after 7 days) in the local cache file will ask Genus App Services for updated statistics for the database table. To further optimize Genus App Services will even cache the response returned to the clients so that they may be reused by later queries.

<!--ID de820479-d4a2-4531-adbe-3619a606715a -->
**#22779 Automatic error reporting can be toggled on or off** (Services;Web)

Automatic error reporting to Sentry can now be turned off in the Genus Configuration Tool. It is enabled by default.

The toggle can be found under Tools -> Options -> App -> Enable automatic crash report

<!--ID 5b130e72-3b3a-4cc6-8aa6-0fdd6104f458 -->
**#22782 It is now possible to create email with Html body containing inline images.** (Desktop;Services)

In earlier versions images saved inline in the Html would not appear correctly in a email body. This is now handled so the images should appear correctly in the email.

<!--ID ef2fd84f-e774-4062-9ace-9f9b40b9cf3a -->
**#22784 Symbol Library has been updated** (Desktop;Studio;Web)

Symbols marked as deprecated in the previous release (2016.1) has been removed from the symbol library.

<!--ID 0b31a304-6de7-4ea4-a5c3-6f1278893165 -->
**#22789 Genus can now recieve files shared from other applications** (Web)

Files shared from other applications using the built in Share functionality in Android, can now be uploaded from the Genus App.

<!--ID 94bbcde0-3220-4fb3-9100-9bd65d30facc -->
**#22792 Added possibility to return Http Status Code from REST Method.** (Services;Studio)

It is now possible to specify Http Status code to return from a REST method. When execution of the internal actions defined in the method has returned successfully, the code specified in the field "Response Http Status Code" in the ActionOrchestrator data source is used as Response code for the Rest Method. If not specified, the method will return Http status code 200 OK.

<!--ID 4bcdd672-dbde-44fb-9eea-f291ea1de9a7 -->
**#22798 Open Table and Open Basic Table View from Form** (Desktop;Studio)

It is now possible to define commands for opening tables and basic table views in forms

<!--ID 71fcd82c-e8bc-423f-852f-7088afbdeaa9 -->
**#22799 Transfer objects between data sources when running actions** (Studio)

Added functionality to the "Read Objects" effect which allows transferring objects from one data source to another. Normally when data is read from another data source, objects are copied from the source to the target data source. Read objects are marked as synchronized with storage to avoid that uncommitted changes in the source are applied twice. 

In some cases you may want to move an object from one data source to another and keep the current state of the object (i.e. that the object is in creating or changing state). To do this, select the option "Transfer objects".

Example

Task 1

Data sources: 
1) All Transactions

Actions:
1) Scope (with commit)
  1.1) Run a Task: Task 2, two way binding to All Transactions


Task 2

Data sources:
1) Single Transaction (private)
2) All Transactions (public)

Actions:
1) Create Objects: Single Transaction
2)...some logic with the need to access the created object in Single Transaction before it is appended to All Transactions
3) Read Objects: All Transactions. Read all objects from datasource Single Transaction. Add and transfer objects.

The created object is not committed by Task 2, but appended to All Transactions which is committed by the scope defined in Task 1.

<!--ID d29ad9b5-4469-4b43-935c-cfa8a75bd87e -->
**#22806 Datepicker on web with mobile device** (Web)

When using the datepicker on web with a mobile device, it will now use the device's own date picker, instead of the jquery date picker.

<!--ID 975068b0-5c44-460e-ac38-bcb75fd74d94 -->
**#22811 Combobox candidates read optimization** (Web)

Candidates for comboboxes are now only read when the combobox is writeable, enabled and visible.

<!--ID 638a27f4-2e7a-419f-a7b5-06edbe2522f5 -->
**#22812 Add to Home screen is now supported on iOS and Android** (Web)

Users can now use the Add to Home screen-option when visiting a Genus Apps website to add a shortcut to their home screen, which will launch the website looking like an app, meaning there is no adress bar, it appears in the app switcher and Genus icon on the home screen.

For Android:
It is important to sign in to the site before adding it to the home screen. This to avoid the site returing to the sign in screen every time it is reopened. 

For iOS:
Unfortunately, native web apps added to the home screen will reload every time it is reopened. This means that the user will be returned to the log in screen every time the app is put in the background and reopened.

<!--ID 5fe39a3e-51de-4dcd-aa00-2eaace9501a9 -->
**#22820 App list now scales and disables zoom when viewing a website from a phone** (Web)

<!--ID b1db8b0a-accf-4cea-b743-416392bba0a4 -->
**#22823 Added option to link to a help document from the sign in page** (Web)

<!--ID b3a20aa2-88fa-4feb-a9ee-9ab41181ed35 -->
**#22824 Added option to use external reset password functionality, and allows reset password for AD** (Web)

<!--ID fa8182cc-7c12-451a-840e-009216e81524 -->
**#22826 Optimized loading of candidates for controls in repeating sections** (Web)

If a control in a repeating section will have the same candidates for every instance of the repeated section, it will now only read the candidates one time, instead of for every element.

<!--ID 95195b04-fe51-4ddb-b34d-f4f77365e167 -->
**#22827 Rename of the On Enter event** (Studio)

The On Enter event is renamed to On Enter Key Pressed

<!--ID 386cc1a1-3d14-4f0f-a94e-a38e3a589673 -->
**#22829 Change in implementation of natural language support** (Services)

Genus no longer instantiates multiple services to support multiple natural languages. Multi-language support is now realized through a single instance, which results in less server memory usage in multi natural language app models.

<!--ID 6a796123-b06c-464c-9ce2-30d8c7bfa3b4 -->
**#22832 Exended options for General File datafilter** (Desktop)

In a datafilter for a General File it is now possible to write file exensions exceptions in a text edit. This means that the exception is no longer restricted to a specifik set of files

<!--ID aa86eb14-a416-4049-a424-89a7300a354b -->
**#22835 CalendarTimeSpan.toString(format, culture) introduced** (Studio)

A new CalendarTimeSpan.toString() function overload has been introduced, allowing standard or custom format strings, as documented in the MSDN articles MSDN articles "Standard TimeSpan Format Strings" (https://msdn.microsoft.com/en-us/library/ee372286) and "Custom TimeSpan Format Strings" (https://msdn.microsoft.com/en-us/library/ee372287). The culture parameter may be used to specify a custom culture identifier (e.g. "nb-no") or the invariant or current culture.

<!--ID 221c89cd-c1ec-4768-aa59-0c9a98535f98 -->
**#22838 New desktop control Tokenizer Edit** (Desktop)

Tokenizer Edit is a new input control supporting multiple items. 
The main features of the Tokenizer Edit (compared to ComboBox Edit) are:
* Keyboard friendly lookup and modifying selected items. (similar to addressee field in outlook. Use Ctrl+k to force lookup)
* Simpler and more explicit configuration. There is no need to configure "Part of Object Class with Parent/ Child Property on the 'link table' OC.
* Configure control specific Default Values (on create) when a link object is created.
* Specify Search Restriction and Display name for lookup items.
The control shares some features with existing ComboBox Edit when configured with the Check Box -style and bound to a many-to-many relationship. 

Usage example.: A project has participants (person) with different roles (Role A, Role B, Role C etc.).
A Tokenizer Editor for each project role may be added to a project- form. Data Restriction on the control can ensure only persons with 'Role A' is presented in Role A listing. In the same way, a default value may be defined for Role A control. Adding a person to the Role A will automatically assign appropriate role to the relational link object.
The Tokenizer control properties 'Search Field', 'Search Restriction' and 'Display Name Field' provides customization of how to access and visualise Person items inside the control.

<!--ID afe6cc5d-8589-48b5-8673-93b223449626 -->
**#22841 HTML/Rich Text Editor now supports editing inside a Form** (Desktop)

Common text editing tools are provided through the ribbon bar. The external editor window for HTML/ Rich Text has been removed. See End-of-life Functionality and Breaking Change.

<!--ID 5a179626-d172-430f-ab9a-5a9f25188810 -->
**#22842 New desktop control Markdown Viewer** (Desktop)

The Markdown Viewer provides capability to render and display markdown text inside a Form.  The viewer supports 'basic' markdown syntax as specified in the CommonMark Spec.

<!--ID 16f0150a-ffbf-4279-b117-7ce485507241 -->
**#22845 Authentication with multiple Active Directory domains** (Desktop;Services;Studio;Web)

Genus App Services now offers authentication against multiple Active Directory domains simultaneously. Please make sure that your application server(s) is granted the necessary privileges to access the required domain controllers. You need to use a unique account identifier across your domains, so unless you can guarantee that sAMAccountName is unique across your domains, you should opt for objectGUID or objectSID as your account identifier.

<!--ID 7407f7a3-4409-43be-8f2e-1812f941f8a7 -->
**#22847 Reintroduced UTF8 encoding without BOM in the Export Data effect** (Desktop;Services;Web)

Support for UTF8 without BOM removed in version 2016.1.

<!--ID 464ece8e-478f-46f9-80db-d9b3d5a1a3f2 -->
**#22848 Implemented support for Roboto and Source Sans Pro font types in Genus Apps** (Web)

<!--ID f4e01d5c-32c1-4c44-973f-841923b1745c -->
**#22853 More input formats allowed when entering time of day in Forms and Table** (Desktop)

<!--ID 055c935d-b0d5-4766-8ec2-61b2849d1df7 -->
**#22856 Added support for Google Analytics** (Web)

Genus Apps for Web can now report page hits and events to Google Analytics given a Google Analytics Tracking ID

<!--ID 94d390bd-af59-4828-b75c-c612658b0ff7 -->
**#22857 Added option to set language for a solution as a parameter in the link** (Web)

<!--ID 0d9d2e0d-1449-4cc8-850f-d61cedb66a81 -->
**#22859 Allowed zooming in web apps on phones** (Web)

It is now possible to zoom in views that are made specifically for web on phone.

<!--ID 3364ee30-a267-4459-afa7-0869d506db5d -->
**#22861 Added support for specifying encoding in the "Import Data" effect** (Studio)

Applicable when importing text files. Available encodings: ANSI, UTF-8 and Unicode.

<!--ID a9a54980-7bb0-4fec-adf0-30d301db05f3 -->
**#22862 Information given by a user in http call will no longer be reflected in an error response.** (Services)

<!--ID 2d670202-c3da-4b04-8714-2f8b40137f1a -->
**#22863 On Before Active Object Change event implemented on Desktop** (Desktop)

The On Before Active Object Change event is implemented on Desktop. This even ocurres before a new selection is set.

<!--ID 2844d791-bf06-46d0-99f9-0f566a919c92 -->
**#22864 On Close Event** (Desktop;Web)

A new event, On Close, is implementet on Desktop and Apps. On Desktop this event is triggered before the Form is Closed. On Apps this event is connected to a View and will trigger when the connected view is closed. To implement the event when the app is Closed, connect the event to the default view

<!--ID d1341268-ad57-4388-a4a7-b197fcb91539 -->
**#22867 Users can now abort file upload at select source screen in apps.** (Web)

<!--ID c1fcf68e-2f64-431c-b80a-bf11151a1ae3 -->
**#22884 Modify a User Account effect: Confirm old password** (Web)

Added optional field for assigning old password when a new password is set. The old password is verified against the stored password before a new password is set. If the old password does not match, the effect fails with exception "On Modify User Account Error".

<!--ID 9fbb15db-39a9-4c0e-b037-8db4dc3f8824 -->
**#22894 Added translations for elements in the ribbon control.** (Desktop)

<!--ID b9d89962-634f-4f45-8b1e-abdce613cd92 -->
**#22899 Non-alpha numeric characters are now permitted in full text queries.** (Desktop)

This means that it is possible to search for stuff like C# C++, etc.

<!--rntype07-end   MINOR. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Resolved issues
<!--rntype08-start BUG FIXES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
<!--ID 527e2eaa-936d-405c-a382-c1b02b295a9e -->
**#22755 Zooming on websites on a phone** (Web)

When using a Genus web solution on a phone, opening an app that is web-desktop compatible (Form factor), will now enable zooming. If you change to an app that is not compatible with web-desktop, zooming will be disabled and locked. Changing back and forth now works correctly.

<!--ID 509d4ec8-ab74-42db-bf3f-723138f43d7c -->
**#22781 Fixed problem with saving images when saving the result of a mail merge in Html format** (Desktop;Services)

When saving the result of a mail merge as Html, the merge would fail if the document contained images. This is now fixed.

<!--ID d30aa311-90f2-4c2d-b87e-413502238fe2 -->
**#22810 Automatic refresh turned off after 30 minutes of inactivity** (Desktop)

Occurs if automatic refresh is turned on in a table or form opened from the navigation pane. As long as the table or form is active, automatic refresh runs as expected. However, if the user navigates to another entry, automatic refresh stops working after 30 minutes.

This behaviour was caused by the built in feature which hibernated the entry after 30 minutes of inactivity.

<!--ID c1574881-87f8-4923-b379-c579a926ccf1 -->
**#22828 There was lacking support for several languages in Apps** (Web)

Apps would only support a few cultures (nb-NO, nn-NO and en-GB). All 14 cultures supported by Services is now also supported by Apps. 

Furthermore; Apps no longer supports en-GB, as this is not one of the supported cultures in Services.

<!--ID 95ab51b5-b53e-489c-8d7e-0f0a40063fe2 -->
**#22830 Unable to open form in Studio after adding summary fields to a group box control** (Studio)

Occured if a summary field was bound to a field where the display name contained special characters such as as &aelig;, &oslash;, or &aring;.

<!--ID fdc42589-de88-4517-b967-e5391633ccdf -->
**#22831 Slow performance when evaluating a refiner mapped to a 1:N property** (Desktop)

When opening a table containing a refiner mapped to a 1:N property, such as Project.Assignments.Person, it takes a long time to load data. The impact on performance is exponential with increasing data volume.

The algorithm has been corrected, and evaluation of the refiner should now have a minimum impact on the time it takes to open the table.

<!--ID 9eaed518-9bd3-43de-99fb-ecb12dd07708 -->
**#22837 Enabling of buttons in Repeating Content** (Desktop)

To enable/disable a button within a Repeating Content, the enabling must be set on the button, not on the command. Since the same command is used in all the sections, the enable condition must be set on the button.

<!--ID 6854b35a-c356-403d-a667-be03e40c51dc -->
**#22844 Counter for shortcut defined with option "Show Number of Object on Start" not updated** (Desktop)

The counter is correct at start up, but not updated during execution unless the shortcut has been activated at some point.

<!--ID 3b150fee-ff6e-45e0-bda4-5952b6a4e042 -->
**#22849 The Open View command now uses the buttons settings on the view** (Desktop)

The Open View Command now reads the button's settings on the view. Previously this settings where only used by the dialog box

<!--ID 1c073486-386f-4559-a259-666a45c39e36 -->
**#22850 Fixed problem saving Reports with summary to Pdf.** (Desktop;Services)

<!--ID f14a4188-bed3-41ad-9e0a-80a7cd27cacf -->
**#22852 Mail messages exported to file is marked as "Draft"** (Desktop;Web)

Exporting a sent mail message to an msg-file using the "Export Data" effect marks the exported message as a draft. That is, if the message is opened in Outlook, it is not possible to reply or forward the message.

If you experience this problem with stored data in your application, e.g. that a sent message stored in a file data property is marked as a draft, do the following:

1) Upgrade your solution to a version higher than 16.100.108.0 (release 2016.1) / 17.100.89.0 (release 2017.1).
2) Create a task for converting the message:

Import the message from the file data property into a data source of type "Mail Message" ("Import Data" effect). If you have stored a sent date in your object, modify the sent date on the mail message object to this date ("Modify Object" effect). Export the mail message object to an msg-file ("Export Data" effect). Import this file back into your mail message data source ("Import Data" effect). Set the file data property in your object equal to the "File.Data" property for the mail message object ("Modify Object" effect). Commit the changes.

<!--ID 987f04fa-dcb2-466a-9fe0-d32bd7ac2f0e -->
**#22854 Improved navigation with arrows and tab** (Web)

You will no longer lose focus when navigating with arrows or tab through radio button groups or input elements that needs evaluation

<!--ID 4b849280-e333-4c90-8785-b6dbe326da1f -->
**#22855 Fixed crash when Genus is started while another instance is closing down.** (Desktop)

<!--ID 85f2aabd-1727-4fe8-bee2-fa3fba775068 -->
**#22858 Studio now displays a message when a new version is installed** (Studio)

Genus Studio shows a message when a new version of Genus Aps is installed and the directory needs to be deployed before the application can start.

<!--ID ea981117-c2cc-434e-9a7f-7f7b2127a53d -->
**#22860 Export large reports to Excel** (Desktop)

Because of a bug in the export to excel large reports used very long time

<!--ID 607f27ec-3cca-4292-a370-a9a190529072 -->
**#22865 Genus Apps now works in private mode in Safari** (Web)

<!--ID d8c70df5-3485-44c3-824b-176c9b681430 -->
**#22871 Fixed problem with images not showing when merging data with an Excel template to Html format** (Desktop)

<!--ID f5606bb6-df8a-4c28-a13f-c0800a3fac6b -->
**#22883 Data of type (time) duration exported as text when a table is opened in Excel** (Desktop)

Excel has limited support for the time duration type. To be able to perform calculations on duration values in Excel, values are now converted to a number representing the total number of hours. That is, a duration value such as 2:30 is converted to 2.5.

<!--ID cbcc2a18-d77d-4d2c-9b9c-26b45b22d138 -->
**#22887 Evaluate call is now sent correctly on lost focus** (Web)

Fixed an issue where values were not evaluated correctly when a field lost focus.

<!--ID a3269ba9-cd88-4710-b59a-83ccef102bcc -->
**#22888 Fixed Automatic Column Width when exporting data to Excel in an Export Data effect** (Desktop)

<!--ID 557bcf77-0891-45e0-81d1-e9908ec4bca7 -->
**#22904 Stored contract name for Web Service Reference not valid** (Studio)

Applies to Web Service References created in release 2017.1 or 2017.2. Web Services References created in earlier versions are not affected.

To fix the problem, upgrade to the latest release of 2017.1 or 2017.2. Open the Web Service Reference, select contract, and then save your changes.

<!--ID f287e03c-4f05-4876-b5ae-58a4cb3088ff -->
**#22906 Fixed errors related to use of references to parent xml element in xml-datasources.** (Desktop)

<!--ID 6489e9f8-ee21-4c01-9a87-4ffaa9892b57 -->
**#22908 Read Objects effect: Read into calendar data source fails (e.g. Year, Quarter, Month)** (Desktop;Web)

Occurs given the following setup:

* The effect is contained in a local task in a form
* The calendar data source which objects are read into is defined at form level
* The data filter in the effect includes a reference to another calendar data source which is defined in the task

<!--ID 334d45a8-0316-4add-a864-f4be84fef274 -->
**#22915 Fixed problem that caused Genus to shut down when requesting available file operations from Windows.** (Desktop)

<!--ID 54e92015-9fb4-4f87-a889-d70fec4f7c44 -->
**#22917 Username, password and remember me are now preserved through upgrades of Genus Apps** (Web)

<!--ID f3ff4633-3af2-41fc-b80b-40cc79f30f0e -->
**#22919 Actions: Improved performance and reduced memory consumption when modifying large amounts of data** (Desktop;Services;Web)

Optimized memory consumption when modifying large amounts of data using a "Create Objects" or "Modify Objects" effect. In a real case example (100,000 objects) performance was improved by 50% and the memory peaked below 1GB.

<!--ID 7c8f8838-ac92-4998-8f84-09602f1668cc -->
**#22926 Improved errormessage propagated to client on server-exception** (Services;Web)

Expanded the exception returned when failing to deserialize an object in a Genus Apps request to include the inner exception message.

<!--ID 056258d4-6a11-4911-af75-7834537245ea -->
**#22928 Fixed error where a radio button would appear to be selected when it actually was not** (Web)

This could occour when making quick selections in radio button groups which had no prior selection.

<!--ID 08caeb60-4ed6-459e-a42f-c1bd4a21eeba -->
**#22939 IMPORTANT - Read Objects effect returns no objects** (Desktop;Web)

If data are read and written to the same data source, no objects are returned. Bug present in patches of release 2017.1, 2017.2, and 2017.3 built after 20.06.2017.

<!--rntype08-end   BUG FIXES. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Known issues

Known issues are errors or lack of functionality. Known issues may be solved in a future release based on customer demand.
<!--rntype09-start KNOWN ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->
There are no known issues in this release.
<!--rntype09-end   KNOWN ISSUES. DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->
## Tips and hints

Tips and hints are design decisions or answers to support questions that may be of general interest.
 
There are no tips and hints specifically targeting this release.

## Change log

* 2017-09-11 Updated with latest Resolved issues.
* 2017-07-06 Updated with latest Resolved issues.
* 2017-04-11 Updated with latest Resolved issues.
* 2017-04-03 Updated with latest Minor new functionality and Resolved issues.
* 2017-03-06 Changed status to Release (builds starting with 017.100). New items added to Breaking changes, Resolved issues and Minor new functionalitities.
* 2017-02-10 Changed status from Beta to Release Candidate. Updated with latest release notes (Installation/upgrading, Breaking changes, Minor new functionality, Resolved issues).
* 2017-01-03 Updated with latest release notes (Minor new functionality).
* 2016-12-27 Changed status from Alpha to Beta.
* 2016-12-20 Updated with latest Minor new functionality and Resolved issues.
* 2016-12-06 Created (Alpha).
<!--changelog CHANGELOG. DO NOT CHANGE THIS TAG. ANY CHANGES BELOW WILL BE DELETED.-->
