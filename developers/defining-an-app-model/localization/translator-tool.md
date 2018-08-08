# Translator 

## Installation 

## Usage
Translator gets a list of translations for a given appmodel and displays it in a grid. In online mode all changes in the grid are immediately reflected in the database. In offline mode (_Not implemented_) a local state is kept. The first four columns display namspace, key, description and the original language of the appmodel respectively, of these columns only description may be empty. The remaining columns displays existing languages for the appmodel. Cells in these columns may be empty, and these columns may be sorted manually by dragging the header.

### Hide/show language
To hide/show languages, use the righthand **Languages** menu to toggle desired languages.
The original language of the appmodel may not be hidden. All languages are shown by default.

### Add new namespace
To add a new namespace, hover the **+** button located bottom-right and click on **Add new namespace**.
An unused namespace will not be saved in the database.

### Add new language
To add a new language, hover the **+** button located bottom-right and click on **Add new language**.
It will be immidiatly displayed right of the original language. An unused language will not be saved in the database.

### Add new key
To add a new key, hover the **+** button located bottom-right and click on **Add new key**.
A namespace for the key is required, as well as an initial translation in the original language. A description may also be added.  
This proccess allows for the use of [markdown](#markdown) in the translation.  
Note that both namespace and key must be in the format ``/[A-Z0-9_]+/g``, this is automatically enforced by the program.

### Delete language
To delete a language, open the options menu located right in the toolbar and click **Delete language**.
This will delete all entries in all rows of the selected language. 

### Delete namespace 
To delete a namespace, open the options menu located right in the toolbar and click **Delete namespace**.
This will delete all entries in all rows of the selected namespace. 

### Delete key(s)
To delete a single or multiple keys, select the relevant keys in the grid (a row corresponds to a key), right click to open the context menu and click **Delete key(s)**.
This will delete all the selected keys, including entries in keys which are [hidden](#hideshow-language) from view. 

### Clear cell
To clear a cell right click on desired cell to open the context menu and click **Clear**, or mark the cell and press [**Delete**](#keyboard-actions)
Deletes the content of the selected cell. May not be used on the namspace, key, description or the original language columns.

### Edit cell
To edit a cell, either open the edit modal by pressing [**Enter**](#keyboard-actions) on desired cell, or inline edit by pressing [**F2**](#keyboard-actions) on desired cell. If text is written directly into a cell, the content will be overwritten, using an inline view. 
Note that if the cell is multilined (contains '\n') **F2** opens the edit modal and does not start inline edit.
It is not possible to disable multiline-mode if the cell is already multilined without removing all newlines.

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

**Note:** The use of ">" and "<" in multicolumn search is currently disabled because of interference with html.

### Markdown
To preview markdown of the translation, toggle the **Markdown** button located in the [edit modal](#edit-cell).
The preview is live.

### Import from file
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

The namespace json files contains an object consisting of key : value pairs. 

### Keyboard actions
| Description                                                                | Key press      |
| ---------------------------------------------------------------------------| -------------- |
| Sets focus in the search box                                               | Ctrl+F         |
| Opens edit modal on selected cell                                          | Enter          |
| Clears selected cell                                                       | Delete         |
| Starts inline edit on selected cell (works as Enter if cell is multilined) | F2             |
| Exit modal / inline edit                                                   | Esc            |
