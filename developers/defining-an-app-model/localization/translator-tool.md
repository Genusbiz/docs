# Translator 

## Installation 

## Usage
Translator gets a list of translations for a given appmodel and displays it in a grid to the user. In online mode all changes in the grid are immediately reflected in the database. In offline mode (_Not implemented_) a local state is kept. The first four columns display namspace, key, description and the original language of the appmodel respectively, of these columns only description may be empty. The remaining columns displays existing languages for the appmodel. Cells in these columns may be empty, and these columns may be sorted manually by dragging the header.

### Hide language 
By accessing the righthand "Languages" menu, the user may select which languages to view.  
The original language of the appmodel may not be hidden. 

### Add a new namespace
By using the "Add new namespace" functionality located under the "+", the user may add a new namespace. An unused namespace will not be saved in the database.

### Add a new language
By using the "Add new language" functionality located under the "+", the user may add a new language. It will be immidiatly displayed right of the original language. An unused language will not be saved in the database.

### Insert a new namespace-key pair 
By using the "Add new key" functionality located on the "+" the user will be able to add a new namespace-key pair. An initial translation in the appmodel's original language is required. A description may also be added.  
This proccess allows for the use of [markdown](#markdown).  
Note that both namespace and key must be in the format ``/[A-Z0-9_]+/g``, this is automatically enforced by the program.

### Remove language 
Located in the options button, right in the toolbar. Removes all entries in all rows of the selected language. 

### Remove namespace 
Located in the options button, right in the toolbar. Removes all entries in all rows of the selected namespace. 

### Delete row(s)
Located in the context menu in the grid. Deletes all selected rows, including entries in rows which are [hidden](#hide-language) from view. 

### Clear cell
Located in the context menu in the grid. Deletes the content of the selected cell. May not be used on the namspace, key, description and the original language columns.

### Search 
The user may search for text occurrence in all columns by using the search box.  
It is also possible to search in a particular column by using the search bar located below the column name.  
These two functions may be used simultaneously. 

### Markdown
When editing a translation the user may choose to display the text as markdown by toggling the option on. The user 

### Export to file

### Import from file

### Display only untranslated rows 

### Display duplicates 

### Hide description
