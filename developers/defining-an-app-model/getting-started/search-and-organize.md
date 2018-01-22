---
title: Genus Apps documentation
description: Search and organize model objects using metadata like groups, tags etc.
author: thomasatgenus
---
# Search and organize

The search and organize features in Genus Studio help you readily find, sort and organize your model objects.

A model object is one or more of your object classes, your forms, your web services etc.

In this article we are describing which data you can store about you model objects (i.e. [metadata](#metadata)). We then go into detail regarding the two most important kinds of metadata, namely [groups](#groups) and [tags](#tags), before describing searching for such metadata.

## Metadata

In addition to the actual content of a model object, there is information about the object itself. Genus Studio keeps track of details about each model object, for example when it was created and when it was last modified. You can also store extra details for an object, such as group membership, tags, comments, owner and delegate.

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

Model object selection is only available in _tables_ in Genus Studio (i.e. tables listing model objects and not the [table](../user-interface/tables/index.md) model object).

If you want to create a new group, right-click a model object, click **Properties**, and in the **Details** tab, click the Group drowdown and select **Create a New Group**.

You may also in the **Tools** menu select **Groups and Tags...**. This dialog allows you to create (by right-clicking), delete (by right-clicking) and renaming (press **F2**) both groups and tags.

Note that when you remove a group or tag, the group or tag is removed from all objects which have this group or tag assigned.

## Tags

A tag is a keyword or term which helps describe a model object and allows it to be found by browsing or searching. You can assign as many tags as you want to a model object.

To add tags to one or more model objects, select model objects, right-click the selection, and click **Add tag**.

You create and delete tags similar to creating and deleting **[Groups](#groups)**.

Tags may be nested. Searching for higher level tags will also return lower level tags. Nesting of tags are configured in the **Tools** / **Groups and Tags...** dialog by using drag & drop.

**Tip**: To create a nested tag when typing tags in the **Details** tab in the property dialog for a model object, or in the **Save As** dialog, use a slash (/). For example, type _Staffing/Order_. If the _Staffing_ tag does not already exist, it will be created automatically.

## Searching for data about your model objects

### Search box

In the search box located at the top right-corner of Genus Studio you can enter part of a word, a word, or a phrase. This rapidly searches names, metadata such as tags and groups, and other properties, and returns the objects found. For example, entering your name in the search box results in a list of objects related to you, objects where you are the owner or delegate, and objects you have created or modified.

Keyboard shortcut for the search box is CTRL+F.

### Search as you type

If you set focus in a column in the model object table in Genus Studio, searching will start as you type.
