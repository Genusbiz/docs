---
title: Exchanging files and objects in Genus Apps
description: Exchanging files and objects between Genus Apps and other applications using files or clipboard (copy paste) using Tasks.
author: jtroset
---
# Exchanging files and objects

When exchanging data with other applications using copy and paste or export and import, the intermediate format is almost always represented by a file. For copy and paste operations, the file is temporary placed on the clipboard, while for export and import, the file is placed in the Windows file system.

To paste information from the clipboard in a Genus Desktop application, there must be a Task defined in the Studio for this purpose, and this task defines how the file is treated. The file can either be treated as a file, and for example be stored directly as such, or the file content can be read and interpreted based on the file format. In the latter case, the task can for example create an object defined in the Directory based on the properties of file content.

Similarly, an object defined in the directory can be copied to the clipboard by creating a file with the appropriate file format, based on the properties of the object.

See the table below for an example of how data can be exchanged between applications on different formats.

Format in Genus Apps                          | Intermediate Format | Format in Other Application     |
----------------------------------------------|---------------------|---------------------------------|
Appointment Object (defined in the Directory) | iCalendar File      | iCalendar File                  |
Appointment Object (defined in the Directory) | iCalendar File      | Microsoft Outlook Calendar Item |
iCalendar File                                | iCalendar File      | iCalendar File                  |
iCalendar File                                | iCalendar File      | Microsoft Outlook Calendar Item |

It is of course, not possible to know what file formats another application can interpret, or how it it will interpret them. So there may be many more available combinations than shown in the table above, based on which application it is.

The same considerations apply for export and import.
