#Action Designer 

The action designer allows business engineers to create an execution flow that calls effects
in the correct order with the inputs given and catches exceptions if any with a simple user interface.

## Action List
Create a new Action using the + button. 

Open an action by selecting it from the list. 

If an action is currently open, an existing action can be added by dragging it from the list.

## Nodes

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

#### Print to console
Print to console will print the configured output to the log

## Action Composer

The action composer represents an action with a tree structure where nodes and other actions can be combined.