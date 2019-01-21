---
title: Translator 
description: Tool for translation of directory and model in Genus
author: jonaseikli
---
# Translator 

## Installation 

## Usage
Translator gets a list of translations for a given appmodel and displays it in a grid.All changes in the grid are immediately saved in the database. The first four columns display namspace, key, description and the original language of the appmodel respectively, of these columns only description may be empty. The remaining columns displays existing languages for the appmodel. Cells in these columns may be empty, and these columns may be sorted manually by dragging the header.


### Add new key
To add a new key, hover the **+** button located bottom-right and click on **Add new key**.
A namespace for the key is required, as well as an initial translation in the original language. A description may also be added.  
This proccess allows for the use of [markdown](#markdown) in the translation.  
Note that both namespace and key must be in the format ``/[A-Z0-9_]+/g``, this is automatically enforced by the program.

### Add new language
To add a new language, hover the **+** button located bottom-right and click on **Add new language**.
It will be immidiatly displayed right of the original language. An unused language will not be saved in the database.

### Delete language
To delete a language, right click the language table header, and select **Delete language**

### Delete namespace 
To delete a namespace, right click the namespace to be deleted and select **Delete namespace**.
This will delete all entries in all rows of the selected namespace. 

### Delete key(s)
To delete a single a key, select the key to be deleted and right click to open the context menu and click **Delete row**.
This will delete all the selected keys. 

### Clear cell
To clear a cell right click on desired cell to open the context menu and click **Delete translation**, or mark the cell and press [**Delete**](#keyboard-actions)
Deletes the content of the selected cell. May not be used on the namspace, key, description or the original language columns.

### Edit cell
To edit a cell, focus the cell and either press [**Enter**](#keyboard-actions), or manually focus the editing field on the right side of the screen. Input the translation and either click [**Ctrl+enter**](#keyboard-actions), or click the check mark button to save the change. Clicking the cross button will discard the changes.

### Display only untranslated rows
To display untranslated rows, click the **Show non-translated** toggle located in the toolbar.
Only keys that are untranslated for at least one of the shown languages (not including desc) are displayed.

### Display duplicates 
To display duplicates, click the **Show duplicates** toggle located in the toolbar.
Only keys that have same value in some shown langauge (not including desc) are displayed.

### Hide/show description
To hide/show the description column click the **Show description** toggle located in the toolbar.

### Search
To search use the search field located in the toolbar. The search is a multicolumn search, it is also possible to search for multiple words by separating the search words with a space.
To search in a specific column use the search field located below the column name.  
These two functions may be used simultaneously.

<!-- ### Import from file
To import from a zip file, open the options meny located right in the toolbar and click **Import from file**.
Click on **Choose File** and locate the desired zip file. The file has to use the i18n format explained in [Export to file](#export-to-file). 
Choose desired languages and namespaces and click **Import**.
Currently import will overwrite the data in the grid with the data from the file if it already exists, if not it will be appended. 

### Export to file
To export the grid to a zip file, open the options meny located right in the toolbar and click **Export to file**.
Choose desired languages and namespaces and click **Export**.
The file follows the i18n format:
* Language  
  * Namespace.json  
  * Namespace2.json  
    ...  
* Language2
  * Namespace.json  
    ...  
    
  ...

The namespace json files contain an object consisting of key : value pairs.  -->

### Keyboard actions
| Description                                                                | Key press               |
| ---------------------------------------------------------------------------| ----------------------- |
| Sets focus in the search box                                               | Ctrl+F                  |
| Opens edit modal on selected cell                                          | Enter                   |
| Save changes made in translation                                           | Ctrl+Enter              |
| Discard changes made in translation                                        | Esc                     |
| Clears selected cell                                                       | Delete                  |
| Add new key                                                                | Ctrl+Alt+N              |
| Add new language                                                           | Ctrl+Alt+L              |
| Toggle description                                                         | t -> d                  |
| Toggle dubplicates                                                         | t -> u                  |
| Toggle show non-translated                                                 | t -> t                  |

**Note** On Mac, Ctrl are replaced with Command key