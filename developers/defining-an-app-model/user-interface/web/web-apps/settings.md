# Settings

## General

**Name**

The internal name of the app.

## Display

**Title**

The title displayed in the app bar.

**Logo URL**

A URL pointing to an image resource. The logo is displayed in the app bar.

**Theme**

Allows you to override the default theme specified for your app model or the current data set.


## App bar

**Show app bar**

Toggles visibility of the app bar.

## Navigation

**Path segment**

Appears at the end of the URL pointing to the app. Specifying a path segment such as **hours-reporting**, associates your app with a URL equal to *https://my-app-server/.../.../hours-reporting*.

**Entry point**

A web component, such as a form, which should be displayed when the app is launched.

**Drawer**

The navigation drawer provides access to destinations in your app. It can either be permanently on-screen, or controlled by the navigation menu icon in the app bar. The navigation drawer is displayed to the left side of the content.

Behavior | Description
---| ---|
Off | No drawer.
Temporary | Closed by default. The drawer opens modal by tapping the navigation menu icon in the app bar. A temporary drawer is primarily for use on mobile where screen space is limited.
Persistent | Closed by default. Opens by tapping the navigation menu icon in the app bar. Stays open until closed by the user. Appropriate for any display size larger than mobile.
Permanent | Always open. Appropriate for any display size larger than mobile.


**Menu layout**

The layout for the menu contained in the navigation drawer. A menu contains folders and entries to web components such as a form. A folder can contain both folders and entries. If the layout is set to **Nested**, entries can appear both at the root level of the menu, and underneath a folder. 

Layout | Description
---| ---|
Nested | When you have multiple levels of navigation, sibling entries should be nested underneath a folder. Recommended for deep navigation structures with many entries, and for enabling quick navigation between unrelated entries. By default the layout is set to **Nested**. However, you can easily build a simple one-level layout by adding entries to the root level in the menu.
Expanding | If you have a deep navigation hierarchy, you may expand that hierarchy within the navigation drawer. When a folder at the root level is selected, the content of the folder is expanded. If another folder previously was expanded, that folder is collapsed.
Cascading | If you have a deep navigational hierarchy, you may use cascading menus to expand the content of folders horizontally. Each collection of entries are presented in its own panel.

## Account

**Profile form**

Allows you to specify a form used for modify personal settings. The form is displayed when the user taps the **Profile** menu item in the app bar menu or the navigation drawer.


## Help

**URL**

A URL pointing to the help documentation for your app model.
