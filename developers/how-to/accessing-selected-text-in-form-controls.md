# Accessing selected text in form controls

In some cases you might want to perform some logic based on the current selected text in a form control, such as executing a search or classify named entities in a text.

To do this, define a command targeting a task, and then attach the command to the *On Context Menu Item Click* event in a control supporting text selection. When the task is invoked from the context menu, the selected text can be accessed from the built-in *Action Orchestrator* data source within the task:

```
Action Orchestrator.Current Text Selection
```

Note that you cannot disable a command based on the value for the selected text. To determine what to do, define a decision block in the task.

Controls supporting text selection:

* E-Mail Address Edit
* File Preview (MS Word, MS Excel, PDF, text)
* HTML Edit
* Rich Edit
* Text
* Text Edit
* Text Popup Edit
* URL Edit