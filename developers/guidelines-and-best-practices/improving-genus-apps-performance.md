# Improving Genus Apps performance

When modeling an app or web app, it is sometimes easy to forget that server side modeling also matters when it comes to end user performance.

This article discusses how to improve performance by providing some hints and tips regarding common performance bottlenecks. The article is intended for trusted users or users with app model admin rights, i.e. Genus Apps developers.  

## Execute audit trail

Audit trail on execute of tasks should only be used during debugging or testing. This applies for tasks of both local and public scopes. Turning on this option will result in considerably poorer performance, and it is therefore important to turn off this option for solutions that are in production environments. Also the **Save detailed execution trace in history** option should only be turned on for for debugging or testing purposes.

To turn Execute Auditing on or off for a Task, right-click the Task, and then in the shortcut menu, click **Properties**. Click the **History** tab, and check/clear the **Execute Event** check box in the **Auditing** section. For more information, see [Auditing](../defining-an-app-model/data/object-class/modify-an-object-or-identifier-domain/auditing.md).

## Security on tasks with local scope

Tasks in a Form with Local Scope are only available in the context of a Form. Because of this, there is no reason to have security twice - both for the Form and for the Task. We recommend that everyone with access to the Form should have access to the tasks as well. The most performance friendly way of doing this, is to give **Everyone** rights to **Find and List** and **Read and Execute** of the local tasks. This does of course not apply if not everyone with access to the Form should be able to use the task.  

## Logging on Genus server

In the Genus Configuration application, there are several options to turn on extended logging for various categories. To set which file the log should be written to, you must first create a .txt-file. The recommended place to put this file is: *C:\\ProgramData\\Genus\\Server\\LogFiles\\*. Click **Log to file**, and select the file.

The detailed logging is useful for debugging, testing and optimization of Genus Apps.

You should be able to understand the information that is logged, so that you can use it to optimize and find issues with your application. The categories **Core Event Handler** and **Data Validation** are most relevant for optimization purposes. **Web API** will give a lot of information that is useful for Genus App modelers.

To turn the logging on or off open the Genus Configuration program. On the Options menu, click **Log**. Under the **Log** tab, you can select which category you want more logging from, and also if you want the log to be written to a file.

The extended logging should be turned off when a solution is in production, as it reduces performance.
