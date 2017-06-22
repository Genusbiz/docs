## General Settings

**Name**

Display name for the Object Class.

**Composition**

Genus App Platform allows you to define an Object Class composed of other Object Classes to form a [composition](../../../../installation-and-configuration/composition.md "Composition"). To include the Object Class as part of a composition, in the **Part of Object Class** box, select the Object Class which represents the composition. In the **Parent/Child Property** box, select which property to use to determine the relationship between the Object Class and the composition. You can only select properties with a complex data interpretation equal to the selected composition. These settings are only available when the Object Class is [created](../create-a-new-object-domain.md).

The **Min Occurences** option determines the minimum number of objects of the Object Class reqired for the composion to be valid. For example, a <span style="FONT-STYLE: italic">company is required to have at least one <span style="FONT-STYLE: italic">address.

The **Max** **Occurences** option determines if the relationship between the composition and the Object Class is a one to one relationship (One), or a one to many relationship (Unbounded). For example, an <span style="FONT-STYLE: italic">automobile is composed of many <span style="FONT-STYLE: italic">wheels but only one <span style="FONT-STYLE: italic">engine (unless it is a hybrid electric-petroleum vehicle).

If the Object Class defines a simple relation between two Object Classes, for example, tags used to categorize pictures or files, you can specify a **Domain Property**. The domain property is used by Genus in forms and tables to ease the task of adding or removing a relation, and create new objects of the type given by the domain property. This setting is only available when the Object Class is [created](../create-a-new-object-domain.md). To filter which tags to be available, specify **Domain Condition**. This required that **Enable as Tag** is selected. For more information on how to set condition, see [Condition](../../../common-concepts/conditions.md).

In the example above, you would define three Object Classes: <span style="FONT-STYLE: italic">Picture, <span style="FONT-STYLE: italic">Picture Tag and <span style="FONT-STYLE: italic">Tag. <span style="FONT-STYLE: italic">Picture Tag has two outbound references, one to <span style="FONT-STYLE: italic">Picture and one to <span style="FONT-STYLE: italic">Tag, and is part of the <span style="FONT-STYLE: italic">Picture composition. The outbound reference to <span style="FONT-STYLE: italic">Tag is defined as the domain property. When the user selects one or more pictures in a table, commands for adding or removing tags are added to the shortcut menu. If a tag does not exist, the user can easily add a new tag and attach the new tag to a picture.

To disable commands for adding or removing relations in the shortcut menu, click to clear the **Enable as Tag** checkbox.****************

**Nested Data**

If data for an Object Class is organized in a parent-child relationship, you must specify which property that identifies this relationship. This is sometimes termed a [recursive](../../../../../terminology.md) or self-referential data structure, since it contains pointers or references to itself. At the first-, or top level in the structure, the objects has no reference to a parent object. To identify objects at this level, you must specify a condition. For example, <span style="FONT-STYLE: italic">parent has no value or <span style="FONT-STYLE: italic">level = 1.

Examples of recursive data structures are

*   A folder structure for organizing files and folders
*   A Work Breakdown Structure (WBS) for defining and organizing a project using a hierarchical tree structure
*   A descision tree

**Description**

Documentation of the purpose and content of the Object Class.