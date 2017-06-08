## Search and Organization

The search and organization features in the Directory Explorer help you readily find, sort and organize objects. The Directory Explorer combines elements such as:

*   **Metadata for objects**, used to find, organize and sort objects.
*   **Instant Search**, which is always available and find objects rapidly.
*   **Search Folders**, which makes it easy to find and organize objects. A Search Folder is simply a saved search with custom view settings. Opening a Search Folder runs your saved search.
*   **View Settings**. The layout for all views in the Directory Explorer can be customized to suit your preferences. A view is composed of fields and settings controlling the way objects are sorted and grouped. The settings are stored as part of your personal setup.
*   **Auto Filter**. Using Auto Filter to filter data is a quick and easy way to find and work with a subset of data in a table.


## Organize Your Objects in the Directory using Metadata

In addition to the actual content of an object, there is information about the object itself. Genus Studio keeps track of details about each object in the directory, for example when it was created and when it was last modified. You can also store extra details for an object, such as category, tags, comments, owner and delegate.

Maintaining metadata properties requires some up-front work, but it has a profound pay-off in a networked office where many users share objects. When you use the [advanced search pane](search-and-organization.md "Search") in Directory to find objects, you can search by any property for any object. In the **Directory** **Explorer** the various metadata properties can be used to sort and organize objects.

**Metadata that can be assigned to an object**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>[Groups](search-and-organization.md "Groups")[](search-and-organization.md "Groups")</td>

<td>Groups are primarily used to break up content into broadly identifiable selections. While not being highly effective for finding specific information, it can help users to filter out somewhat irrelevant data.</td>

</tr>

<tr>

<td>[Tags](search-and-organization.md "Tags")</td>

<td>A tag is a keyword or term which helps describe an object and allows it to be found by browsing or searching. You can assign as many tags as you want to an object.</td>

</tr>

<tr>

<td>Comments</td>

<td></td>

</tr>

<tr>

<td>Owner</td>

<td>The user which owns the object.</td>

</tr>

<tr>

<td>Delegate</td>

<td>The user which has been delegated ownership for the object.</td>

</tr>

</tbody>

</table>

To add or modify metadata for an object, in the **Directory Explorer**, do the following:

1.  Right-click the object, and then in the shortcut menu, click **Properties**.
2.  Click the **Details** tab.

To change **Owner** for one or more objects at once, in the **Directory Explorer**, right-click your selection of objects, and then in the shortcut menu, click **Set Owner**. Find the owner using the search dialog box and click **OK**.

To change **Delegate** for one or more objects at once, in the **Directory Explorer**, right-click your selection of objects, and then in the shortcut menu, click **Set Delegate**. Find the delegate using the search dialog box and click **OK**.



## Groups

Groups are primarily used to break up content into broadly identifiable selections. While not being highly effective for finding specific information, it can help users to filter out somewhat irrelevant data.

**Change Group for Objects**

<span style="FONT-STYLE: italic">Group one or more objects in the same group

1.  In the Directory Explorer, select the objects which you want to group.
2.  In the **Actions** menu, point to **Change Group**, and then click a group. If you do not want the selected objects to be grouped, click **None**.

<span style="FONT-STYLE: italic">Group one object using the property dialog box:

1.  In the Directory Explorer, right-click an object to apply properties, and then in the shortcut menu, click **Properties**.
2.  Click the **Details** tab.
3.  In the **Group** box, select a group from the list. If you want to create a new group, in the list, click **Create a New Group**.

**Add and Modify Categories**

1.  In the **Tools** menu, click **Groups** **and Tags**.
2.  Click the **Groups** tab.
3.  To add a new group, right-click a group and then in the shortcut menu, click **Create Group**.
4.  To rename a group, click a group and press the **F2** key.
5.  To remove a group, right-click a group and in the shortcut menu, click **Delete**.

Note that when you remove a group, the group is removed from all objects which have this category assigned.



## Tags

A tag is a keyword or term which helps describe an object and allows it to be found by browsing or searching. You can assign as many tags as you want to an object.

**Add Tags to Objects**

<span style="FONT-STYLE: italic">Tag one or more objects with the same tags:

1.  In the **Directory Explorer**, select the objects which you want to tag.
2.  In the **Actions** menu, click **Add Tag**.
3.  In the **Available Tags** list, click a tag and then click **Select**. To select more than one tag, press the CTRL key and click multiple tags.

If you want to create a new tag, click <span style="FONT-STYLE: italic; FONT-WEIGHT: bold">Create a New Tagin the **Available Tags** list.

<span style="FONT-STYLE: italic">Tag an object using the property dialog box:

1.  In the **Directory Explorer**, right-click an object to apply properties, and then in the shortcut menu, click **Properties**.
2.  Click the **Details** tab.
3.  In the **Tags** box, select one or more tags from the list. If you want to create a new tag, simply type the name of the new tag in the **Tags** box.

When you save a new object, you can tag the object from the **Tag** box in the **Save As** dialog.

**Remove Tags from Objects**

1.  In the **Directory Explorer**, right-click the objects which you want to remove a tag from, and then in the shortcut menu point to **Remove Tag** and click the tag you want to remove.

**Add and Modify Tags**

1.  In the **Tools** menu, click **Groups and Tags**.
2.  Click the **Tags** tab.
3.  In the **Tags** list, right-click a tag and in the shortcut menu click **Create Tag** and then type a name for the tag.

If you add a lot of tags, you might discover that it is difficult to keep track of a long list of tags. If you have group of related tags, you might want to nest them instead. Consider, for example, this set of tags in a resource management system:

*   Request
*   Order
*   Resource

You might want to nest these tags to a top-level tag named <span style="FONT-STYLE: italic">Staffing. When you search for objects tagged with <span style="FONT-STYLE: italic">Staffing, all objects tagged with the top-level tag and any of the nested tags are returned.

To nest tags, do one of the following:

*   Right-click the top-level tag, and then in the shortcut menu, click **Create Tag**.
*   Drag a tag that you want to be nested to the tag that you want to make the top-level tag.

**Tip**. To create a nested tag when typing tags in the **Details** tab in the property dialog box for an object, or in the **Save As** dialog box, use a slash (/). For example, type <span style="FONT-STYLE: italic">Staffing/Order to create the <span style="FONT-STYLE: italic">Order tag and nest it to the <span style="FONT-STYLE: italic">Staffing tag. If the <span style="FONT-STYLE: italic">Staffing tag does not already exist, it will be created automatically.



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

For more information on how to customize the layout for a view, see [View Settings](../../../users/working-in-tables/advanced/view-settings.md "View Settings")

