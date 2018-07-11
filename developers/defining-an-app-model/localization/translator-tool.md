# Translator 

## Installation 

## Usage
Translator gets a list of translations for a given appmodel and displays it in a grid to the user. All changes in the grid are immediately reflected in the database (_Not implemented_:, unless otherwise noted by the program). The three first columns display namspace, key and the original language of the appmodel respectively. The other columns may be sorted manually by dragging the header. 

### Hide language 
By accessing the righthand menu the user may select which languages to view.  
The original language of the appmodel may not be hidden. 

### Insert a new namespace-key pair 
The user may add any namespace-key pair which does not already exist. An initial translation for the original language is required. Neither namespace nor key may be edited after creation, if you wish to rename a key or a namespace use the [duplicate key](#duplicate-key) function and [delete](#delete) the old row.  
Note that both namespace and key must be in the format ``/[A-Z0-9_]+/g``, this is automatically enforced by the program.

### Duplicate key 
_Not implemented_ 

### Delete row 
By using the "DELETE SELECTED ROWS" button, all selected rows will be deleted, including entries in those rows which are [hidden](#hide-language) from view. 

### Search 
It is possible to search for text occurrence in all columns by using the topmost search box.  
It is also possible to search in a particular column by using the search bar located below the column name.  
These two functions may be used simultaneously. 

### Add a new language 
The user may add any language as a new column by using the "ADD LANGUAGE" field.  
A language without any entries in any key-namespace pair will not be saved to the next session. 

### Remove language 
_Not implemented_  
Removes all entries in all rows of a given language. 

### Remove key 
_Not implemented_  
Removes all entries in all rows of a given key. 

### Remove namespace 
_Not implemented_  
Removes all entries in all rows of a given namespace. 

### Display only untranslated rows 
_Not implemented_  
Display only rows which has not been translated for a given language 
