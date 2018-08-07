---
title: Object class diagram in Genus Studio
description: Introduction to essential functionality that is available in Genus Studio for visualizing and maintaining object models.
author: ablindblad
---

# Object class diagram

The object class diagram is a tool for visualizing and maintaining object models. Its main purpose is to facilitate architectural design, and to promote effective communication between application stakeholders. The tool allows you to visualize small, manageable parts of your object model, and it supports bi-directional synchronization between model and database. You are also free to create and edit object and property drafts. The aim of this article is to introduce essential functionality that is available in the object class diagram.

The object class diagram is found in the **Directory** tree of [Genus Studio](../getting-started/how-to-open-genus-studio.md), under **Data**.

![object_class_diagram_example.png](media/object_class_diagram_example.png "Object class diagram exmaple")


## Pages <a name="add-rearrange-delete-and-rename-pages"/>

Pages give you the opportunity to divide your object model into smaller, manageable subsets. By default, an empty diagram contains a single page named “Master”. The Master page contains all object classes and drafts defined in your app model.

By right-clicking a page tab, you can add, rearrange, delete and rename pages.



## Connectors

Connectors are lines connecting objects to each other in the diagram. You can change the style of these by right-clicking and selecting **Format Page**. Here you will be able to choose the **Line Style** (i.e. the shape of the lines) and the **Connection Style** (i.e. the location from where the lines are drawn) for the given page.

To change the default format settings used for new pages, navigate to the **Tools** menu and click **Diagram Options**.



## Adding object classes

To add an object class, right-click on a page and select **Object Classes** under **Insert**. In the window that emerges, you will be able to select (and deselect) objects to show, from a list of available object classes.

**Outbound or inbound references**

An object class (A) has an outbound reference to object class (B) if (A) contains a property with data interpretation equal to (B). For example, if an object class _Department_ has a property “Manager” with data interpretation _Employee_, then _Department_ has an outbound reference to _Employee_. Conversely, object class (A) has an inbound reference to (B) if (B) has a property with interpretation (A). In the example above, _Employee_ has an inbound reference to _Department_.

To add outbound or inbound object classes, right-click on a given object class, point to **Insert** and click **Outbound Object Classes**/**Inbound Object Classes**. Here you can select (or deselect) available object classes to display.



## Draft classes

Drafting of classes is a powerful means to create a low-cost, collaborative graphical design of your model. Bi-directional synchronization of drafts are supported through forward and reverse engineering.

To add a draft class, right-click on a page, point to **Insert** and click **Class (Draft)**. 

You can also replace a draft with an object class. If you do this, the draft – and all outbound references to it – are replaced with the selected object class. The draft itself will be permanently deleted from the diagram. Right-click on the page or a draft object, and select **Replace Draft**. You can choose to copy the draft descriptions to the replacement.



## Draft properties

As with classes, the diagram allows the user to draft properties. Properties can be drafted on both draft classes and object classes. 

To add a draft property, right-click on a class, point to **Insert** and select **Property (Draft)**. In the window that pops up, you will have to provide the property’s logical and physical (RDBMS) name and data type. You can also optionally write a description, and you must select whether the property is an outbound reference, if it is a primary key and if it can contain nulls.

**Tip**. To quickly insert a draft property, click to select a shape and then press CTRL+PLUS.

**Tip**. To quickly insert a property with an outbound reference to another class, click to select the shape for the outbound class, press ALT, and then drag the outbound class to the class where you want to insert the property.

**Tip**. To copy a property from another class, right-click the property which you want to copy, and then in the shortcut menu click **Copy**. Right-click the class you want to copy the property to, and then in the shortcut menu click **Paste**.



## Hide/Unhide properties and connectors

Properties and connectors can be hidden or made visible with the **Hide** and **Unhide** functionality which is available in the menu that opens when you right-click a property or a class. You can decide to hide/unhide single properties or defined property types. The visibility of properties and connectors can also be controlled under **Format Shape** in the same menu.



## Text boxes

Pages can have text boxes with descriptive information and comments. To add a text box, right-click on a page, point to **Insert**, and select **Text Box**.



## Shape clipboard

Shapes, e.g. object classes, can be copied and moved between pages, using standardized **Copy**, **Cut** and **Paste** functionality. 

To remove shapes from the current page, mark them and press DELETE. If you would like to delete the shapes permanently, i.e. from the master page and from all other pages, press SHIFT+DELETE instead. 

**Note.** You cannot move object classes from the master page to other pages. Also, if you delete a shape on the master page, it will be deleted permanently. 



## Format shapes

To change the look of the shapes in the diagram, right-click on the shapes that you want to format, and in the shortcut menu click **Format Shape**. You can change the background color of the shapes, hide or unhide information and descriptions, alternate between physical and logical names, etc. 

Graphics alterations, such as changing fill color, can also be done by copying the formatting from one shape to another. To do that, use **Paste Format** after **Copy**. You can also change the default format settings under **Diagram Settings** in the **Tools** menu.

Using the menu in the bottom right-corner of the diagram, you can zoom in and out and view the diagram in full screen mode.



## Shape containers

As a mean to increase the readability of your object model, the diagram allows you to group shapes “containers”. Select the shapes that you want to include in the container, right-click, point to **Insert** and click **Container**. You can drag shapes in and out of the container afterwards.



## Forward and reverse engineering 

Bi-directional synchronization of the object model and the database is supported through reverse and forward engineering. You will find this functionality under **Actions** in the main tool bar.

**Forward engineering**

The forward engineering functionality is used to propagate object model changes to the database. It automatically generates SQL-scripts that you can query the database with in order to update the database. You can choose which changes you want to include in the SQL script generation. 

**Reverse engineering**

The reverse engineering functionality helps you to identify, assess and manage changes between the object model and the database via synchronization of database tables and columns. New tables and columns are added as draft classes and properties. Only draft properties are affected by reverse engineering, i.e. if changes are made to a table column associated with an object class property, it will not be reflected in your diagram after reverse engineering. You can select which tables you want to update your object class diagram with.



## Shapes as picture in document

You can easily export pictures of your model to text documents, spreadsheets and presentations. To do so, simply use copy-paste. Select the shapes that you want to include, right-click, press **Copy** and paste it into your target document. 



## Keyboard shortcuts

Keyboard shortcuts available in the object class diagram are described in the article [Keyboard shortcuts for Genus Desktop Client](../user-interface/keyboard-shortcuts.md).
