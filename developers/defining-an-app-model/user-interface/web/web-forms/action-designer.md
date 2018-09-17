#Action Designer 

The action designer allows business engineers to create an execution flow that calls effects
in the correct order with the inputs given and catches exceptions if any with a simple user interface.

## Action List
Create a new Action using the + button. 

Open an action by selecting it from the list. 

If an action is currently open, an existing action can be added by dragging it from the list.

## Tools

A node can be added to an open action by dragging it from the list.

### Blocks

#### Scope
Scope is a means of grouping nodes. Everything within a scope will execute in order from top to bottom. The scope itself can be run asynchronously or synchronously.
#### Decision
Decision evaluates a bound boolean to true or false. If true it executes like scope, otherwise it is ignored.
#### Iterator
Iterator takes a data binding with cardinality many, loops over the items, making available one single item per loop within the scope of the iterator.
#### Catch exception 
if an exception has been thrown earlier, the exception can be caught and handled by a catch exception.

### Execution flow

Execution flow node types can be used to alter the flow of an action

#### Redirect
TODO

#### Throw exception
Throw exception can be used to throw an exception which will later be caught by catch exception when one is encountered. 

### Effects

Effects create the consequences of an action
#### Create new object

#### Modify object

#### Delete objects

#### Run a client action

#### Run a local server action

#### Run a global server action

#### Navigate to app
Will open the default entry point of the app. Can be opened in a new tab.

#### Navigate to form
Opens a new form in the same app. Can be opened in a new tab.

#### Navigate to URL
Will open the given URL in either the same tab, or a new tab, depending on wether the "Open in new tab" box is checked.

#### Navigate back
Will navigate to the previous entry in the browser history.

#### Navigate forward
Will navigate to the next entry in the browser history.

#### Revert changes

#### Save changes

#### Sign out

#### Show settings

#### Write to log
Print to console will print the configured output to the log

## Action Composer

The action composer represents an action with a tree structure where nodes and other actions can be combined.
