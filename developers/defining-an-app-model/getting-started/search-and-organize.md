---
title: Genus Apps documentation
description: Search and organize model objects using metadata like groups, tags etc.
author: thomasatgenus
---
# Search and organize

The search and organize features in Genus Studio help you readily find, sort and organize your model objects.

A model object is one or more of your object classes, your forms, your web services etc.

## Metadata

In addition to the actual content of a model object, there is information about the object itself. Genus Studio keeps track of details about each model object, for example when it was created and when it was last modified. You can also store extra details for an object, such as category, tags, comments, owner and delegate.

Metadata that can be assigned to a model object:

| Name        | Description                      |
| ----------- | -------------------------------- |
| Groups      | Groups are primarily used to break up content into broadly identifiable selections. While not being highly effective for finding specific information, it can help users to filter out somewhat irrelevant data. |
| Tags        | A tag is a keyword or term which helps describe an object and allows it to be found by browsing or searching. You can assign as many tags as you want to a model object. |
| Comments    | |
| Owner       | |
| Delegate    | The user which has been delegated ownership for the object. |

To add or modify metadata for a model object, right-click the model object, click **Properties** and locate the **Details** tab.

## Groups

Groups are primarily used to break up content into broadly identifiable selections. While not being highly effective for finding specific information, it can help you  filter out somewhat irrelevant data.

To group one or more model objects in the same group, select model objects, right-click the selection, and click **Change Group**. If you do not want the selected objects to be grouped, click **None**.

Model object selection is only available in _tables_ listing model objects.

If you want to create a new group, right-click a model object, click **Properties**, and in the **Details** tab, click the Group drowdown and select **Create a New Group**.

You may also in the **Tools** menu select **Groups and Tags...**. This dialog allows you to create (by right-clicking), delete (by right-clicking) and renaming (press **F2**) both groups and tags.

Note that when you remove a group or tag, the group or tag is removed from all objects which have this group or tag assigned.

## Tags

A tag is a keyword or term which helps describe a model object and allows it to be found by browsing or searching. You can assign as many tags as you want to a model object.

To add tags to one or more model objects, select model objects, right-click the selection, and click **Add tag**.

You create and delete tags similar to creating and deleting **[Groups](#groups)**.

Tags may be nested. Searching for higher level tags will also return lower level tags. Nesting of tags are configured in the **Tools** / **Groups and Tags...** dialog by using drag & drop.

**Tip**. To create a nested tag when typing tags in the **Details** tab in the property dialog for a model object, or in the **Save As** dialog, use a slash (/). For example, type _Staffing/Order_. If the _Staffing_ tag does not already exist, it will be created automatically.


## Search

**Instant Search**

In the **Instant Search** box located at the top right-corner of the **Directory Explorer** window you can enter part of a word, a word, or a phrase. Instant Search rapidly searches names, metadata such as tags and categories, and other properties, and returns the objects found. For example, entering your name in the Instant Search Field results in a list of objects related to you, objects where you are the owner or delegate, and objects you have created or modified.

**Advanced Search**

If you want to search more selectively, you can use **Advanced Search** to specify which properties to search. To open the **Advanced Search** pane, in the **Instant Search** pane, click **Advanced Search**![IDD26AE9CB627245CE.ID5FCF2C2BADC34346.jpg](media/IDD26AE9CB627245CE.ID5FCF2C2BADC34346.jpg).

In the search fields, type your search text. In some search fields, such as date and account fields, you can select predefined search values such as **Me**, **Last Week, This Year** etc. To change the search operator (equal to, containing etc.) for a field, click the name of the field, and then in the list, click an operator.

To display more search fields, click **Fields** and then in the list, click a field. To remove a search field, click the name of the field, and then in the list, click **Remove**. The setup is saved in your personal profile, and persists after you exit and restart the Genus desktop client.

**Reuse a Recent Search**

To reuse a recent search, click the arrow in the **Instant Search** box, in the menu point to **Recent Searches**, and then click a search. Genus Studio displays up to 10 of your most recent searches.

**Clear a Search**

In the **Instant Search** box, click **Clear**![IDD26AE9CB627245CE.ID8FDE482FA4BF458B.jpg](media/IDD26AE9CB627245CE.ID8FDE482FA4BF458B.jpg).

**Search as You Type**

By default, Genus will start to search as you type, and there is no need to press Enter to display results. If you want to disable this feature, click the arrow in the **Instant Search** box, and then in the menu, click to clear the **Instant Search** option. To start searching, click the arrow in the **Instant Search** box, and then in the menu, click **Search Now**.



## View Settings

The layout for all views in the Directory Explorer can be customized to suit your preferences. A view is composed of fields and settings controlling the way objects are sorted and grouped. The settings are stored as part of your personal setup.

For more information on how to customize the layout for a view, see [View Settings](../../../users/navigate-view-modify-and-control/working-in-tables/advanced/view-settings.md "View Settings")

