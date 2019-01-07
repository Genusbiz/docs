---
title: Column grouping in Multidimensional Table
description: Column grouping in Multidimensional Table
author: sigbauk
---
# Column grouping in Multidimensional Table

Repeating Columns in Multidimensional tables can be grouped hierarchically.

In the following example, populations in some of the world’s largest cities are listed. “City” is a Repeating Column grouped by “Country”, which is further grouped by “Continent”, forming a hierarchy.

![Column_grouping__cities_ countries_ continents.png](media/Column_grouping__cities_ countries_ continents.png)

New groups can be added based on object type properties available at the current group level. For instance, if “Continent” in the above example had an object type property called “Planet”, it could be added as a new group that would appear above the continents. This can be repeated an arbitrary number of times.

### To group a Repeating Column
-	Right-click a Repeating Column or repeating Column Group and choose “Group”
-	Select the new cell that appeared, and set “Path to Column” to the desired (object type) property to group by
-	(Specify label property)