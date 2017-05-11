## Redirect Execution

Use this control to redirect the normal execution flow. Redirecting execution flow is useful to abort or break out of an [enumerator](../blocks/enumerator.md "Enumerator") or a [scope](../blocks/scope.md "Scope") in certain scenarios, and the control is therefore mostly used in combination with a [decision](../blocks/decision.md "Decision").

To redirect execution, do the following:

1.  In the **Name** box, optionally enter a name. The name is displayed in the action tree, if a name is not entered, a summary of the control is displayed.
2.  In the **Description** box,optionally enter a description.
3.  In the **Execution Jump** box, select the type of jump.

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Execution Jump</th>

<th>Description</th>

</tr>

<tr>

<td>None</td>

<td>Performs no jump. Resumes execution of the next step.</td>

</tr>

<tr>

<td>Enumerate Next</td>

<td>Resumes enumeration of the next object within the current enumerator. Succeeding steps within the enumerator are not executed for the the current object. Only applicable when within an enumerator, directly or nested inside other blocks.</td>

</tr>

<tr>

<td>

End Enumerate

</td>

<td>Forces a jump out of the current Enumerator. Succeeding steps within the enumerator are not executed for the current object. No other objects are enumerated. Note that this option only jumps out of the current Enumerator, and not out of any nested Enumerators outside it. Only applicable when within an enumerator, directly or nested inside other blocks.</td>

</tr>

<tr>

<td>

Exit Scope

</td>

<td>Forces a jump out of the current Scope. Succeeding steps within the scope are not executed. If specified, object changes are committed before the Scope is exited. Only applicable when within a scope, directly or nested inside other blocks.</td>

</tr>

<tr>

<td>Abort Scope</td>

<td>Forces a jump out of the current scope. Succeeding steps within the scope are not executed. Object changes are NOT committed before the Scope is aborted. Only applicable when within a scope, directly or nested inside other blocks.</td>

</tr>

<tr>

<td>End Execution</td>

<td>Forces a jump out of the current block and all nested blocks above it. If specified, object changes are commited before a Scope is exited.</td>

</tr>

<tr>

<td>Abort Execution</td>

<td>Forces a jump out of the current block and all nested blocks above it. Object changes are NOT committed before a Scope is aborted.</td>

</tr>

</tbody>

</table>