## Action Diagram

The diagram may be used as a tool to close the gap between business and IT. Invite customers to participate in the process of designing business rules.

Presenting action diagrams to new or existing customers will provide better insight in the capabilities of Action orchestration. Business rules are more easily human readable, and your customers may validate their business rules in the blink of an eye.

The diagram is just another way to present the logic of an action.

![ID6A0D6791EA374BF9.jpg](media/ID6A0D6791EA374BF9.jpg)

In this article

* * *

*   [Graphical Notation](#graphical-notation)

* * *

## Graphical Notation

The graphical notation is influenced by the Business Process Modeling Notation (BPMN). BPMN is a standardized graphical notation for drawing business processes in a workflow.

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Flow Sequence</th>

<th>Visual Element</th>

<th>Description</th>

</tr>

<tr>

<td>Normal Sequence</td>

<td>![ID3833A3C92EEC4BAF.png](media/ID3833A3C92EEC4BAF.png)</td>

<td>Normal order of execution</td>

</tr>

<tr>

<td>Interrupt Sequence</td>

<td>![ID8340E0DDB26C40DB.png](media/ID8340E0DDB26C40DB.png)</td>

<td>Interrupt of the normal order of execution. These can occur from the controls Redirect Execution and Throw Exception.</td>

</tr>

</tbody>

</table>

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>[Block](blocks.md)</th>

<th>Visual Element</th>

</tr>

<tr>

<td>[Decision](blocks/decision.md)</td>

<td>![ID67567C5A0A084985.png](media/ID67567C5A0A084985.png)</td>

</tr>

<tr>

<td>[Scope](blocks/scope.md)</td>

<td>![IDD24A45E9EC94438C.png](media/IDD24A45E9EC94438C.png)</td>

</tr>

<tr>

<td>[Enumerator](blocks/enumerator.md)</td>

<td>![IDF6844AA7EFFE4182.png](media/IDF6844AA7EFFE4182.png)</td>

</tr>

<tr>

<td>[While Loop](blocks/while-loop.md)</td>

<td>![ID2B8AF9AC9FBE451B.png](media/ID2B8AF9AC9FBE451B.png)</td>

</tr>

<tr>

<td>[Catch Exception](blocks/catch-exception.md)</td>

<td>![IDF77522273CC24ABD.png](media/IDF77522273CC24ABD.png)</td>

</tr>

</tbody>

</table>

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>[Control](controls.md)</th>

<th>Visual Element</th>

</tr>

<tr>

<td>

[Redirect Execution](controls/redirect-execution.md)

*   Exit Scope
*   End Execution
*   End Enumerate

</td>

<td>![ID4C59148CA8134EC8.png](media/ID4C59148CA8134EC8.png)</td>

</tr>

<tr>

<td>

[Redirect Execution](controls/redirect-execution.md)

*   Abort Scope
*   Abort Execution

</td>

<td>![ID3164757297E745EB.png](media/ID3164757297E745EB.png)</td>

</tr>

<tr>

<td>

[Redirect Execution](controls/redirect-execution.md)

*   Enumerate Next
*   Throw Catched Exception

</td>

<td>![IDC5073A368F574B6F.png](media/IDC5073A368F574B6F.png)</td>

</tr>

<tr>

<td>[Throw Exception](controls/throw-exception.md)</td>

<td>![ID72C608D888514A5B.png](media/ID72C608D888514A5B.png)</td>

</tr>

</tbody>

</table>

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>[Effect](effects.md)</th>

<th>Visual Elements</th>

</tr>

<tr>

<td>

[Effect](effects.md)

(general symbol used for most effect types)

</td>

<td>![ID04D859E4F7034A42.png](media/ID04D859E4F7034A42.png)</td>

</tr>

<tr>

<td>[Run a Task](effects/run-a-task.md)</td>

<td>![ID8CB1D210C7F14D8B.png](media/ID8CB1D210C7F14D8B.png)</td>

</tr>

</tbody>

</table>

