# Redirect Execution

Use this control to redirect the normal execution flow. Redirecting execution flow is useful to abort or break out of an [enumerator](../blocks/enumerator.md "Enumerator") or a [scope](../blocks/scope.md "Scope") in certain scenarios, and the control is therefore mostly used in combination with a [decision](../blocks/decision.md "Decision").

To redirect execution, do the following:

1.  In the **Name** box, optionally enter a name. The name is displayed in the action tree, if a name is not entered, a summary of the control is displayed.
2.  In the **Description** box,optionally enter a description.
3.  In the **Execution Jump** box, select the type of jump.

Execution Jump  | Description |
----------------|-------------|
None            | Performs no jump. Resumes execution of the next step. |
Enumerate Next  | Resumes enumeration of the next object within the current enumerator. Succeeding steps within the enumerator are not executed for the the current object. Only applicable when within an enumerator, directly or nested inside other blocks. |
End Enumerate   | Forces a jump out of the current Enumerator. Succeeding steps within the enumerator are not executed for the current object. No other objects are enumerated. Note that this option only jumps out of the current Enumerator, and not out of any nested Enumerators outside it. Only applicable when within an enumerator, directly or nested inside other blocks. |
Exit Scope      | Forces a jump out of the current Scope. Succeeding steps within the scope are not executed. If specified, object changes are committed before the Scope is exited. Only applicable when within a scope, directly or nested inside other blocks. |
Abort Scope     | Forces a jump out of the current scope. Succeeding steps within the scope are not executed. Object changes are NOT committed before the Scope is aborted. Only applicable when within a scope, directly or nested inside other blocks.   |
End Execution   | Forces a jump out of the current block and all nested blocks above it. If specified, object changes are commited before a Scope is exited. |
Abort Execution | Forces a jump out of the current block and all nested blocks above it. Object changes are NOT committed before a Scope is aborted. |
