## Collection Types

A collection represents a group of objects, known as its elements. Some collections allow duplicate elements and others do not. Some are ordered and others unordered.

The following table shows the properties for each collection type:

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Collection Type</th>

<th>Elements Ordered by Position</th>

<th>Allows Element Duplicates</th>

</tr>

<tr>

<td>Bag</td>

<td>No</td>

<td>Yes</td>

</tr>

<tr>

<td>Ordered Set</td>

<td>Yes</td>

<td>No</td>

</tr>

<tr>

<td>Sequence</td>

<td>Yes</td>

<td>Yes</td>

</tr>

<tr>

<td>Set</td>

<td>No</td>

<td>No</td>

</tr>

</tbody>

</table>

The Collection type is the base class used by the concrete collection types: Bag, Sequence, Set, and Ordered Set.

The Collection type is a generic type, only used in the context of an concrete element type, i.e. collection of string elements (Collection of String), or collection of integer elements (Collection of Integer).

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Collection Descendant</th>

<th>Description</th>

<th>Example</th>

</tr>

<tr>

<td>**Bag**</td>

<td>A Collection that contains elements with no particular order (similar to Set), and (like Sequence) may contain duplicate elements.</td>

<td>

All the following expressions represent identical instances of Bag consisting of one 1, two 2s, and one 5, with no particular order.

*   Bag { 1, 2, 5, 2 }
*   Bag { 2, 1, 2, 5 }
*   Bag { 5, 2, 2, 1 }
*   Bag { 1, 2, 2, 5 }

</td>

</tr>

<tr>

<td>**Sequence**</td>

<td>A Collection that contains elements with an order (similar to OrderedSet), and (like Bag) may contain duplicate elements.</td>

<td>

All the following expressions all represent different instances of Sequence.

*   Sequence { 1, 2, 5, 2 }
*   Sequence { 2, 1, 2, 5 }
*   Sequence { 5, 2, 2, 1 }
*   Sequence { 1, 2, 2, 5 }

</td>

</tr>

<tr>

<td>**Set**</td>

<td>Collection that contains elements with no particular order (similar to Bag) and (like Ordered Set) does not contain duplicate elements.</td>

<td>

The following expressions represent identical instances of Set consisting of one 1, one 2, and one 5, with no particular order.

*   Set { 1, 2, 5, 2 }
*   Set { 1, 2, 5 }
*   Set { 5, 1, 2 }
*   Set { 5, 2, 1 }

</td>

</tr>

<tr>

<td>

**Ordered Set**

</td>

<td>A Collection that contains elements with an order (similar to Sequence), and (like Set) does not contain duplicate elements.</td>

<td>

All the following expressions all represent different instances of OrderedSet.

*   OrderedSet { 1, 2, 5 }
*   OrderedSet { 2, 1, 5 }
*   OrderedSet { 5, 2, 1 }

</td>

</tr>

</tbody>

</table>

Note that the operations that is provided for Collection also applies for Bag, Sequence, Set, and Ordered Set.

* * *

### Bag(<ElementType>) Type

The Bag(<ElementType>) type exposes the following members.

**Instance members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**asBag**</td>

<td>

_instance._asBag

Return Type: Bag(<ElementType>)

</td>

</tr>

<tr>

<td>**asOrderedSet**</td>

<td>

_instance._asOrderedSet

Return Type: OrderedSet(<ElementType>)

</td>

</tr>

<tr>

<td>**asSequence**</td>

<td>

_instance._asSequence

Return Type: Sequence(<ElementType>)

</td>

</tr>

<tr>

<td>**asSet**</td>

<td>

_instance._asSet

Return Type: Set(<ElementType>)

</td>

</tr>

<tr>

<td>**count**</td>

<td>

_instance._count

Return Type: Integer

</td>

</tr>

<tr>

<td>**count**</td>

<td>

_instance._count(_object_)

Return Type: Integer

<dl>

<dt>object</dt>

<dd>

Type: <ElementType>

</dd>

</dl>

</td>

</tr>

<tr>

<td>**emptyIfNull**</td>

<td>

_instance._emptyIfNull

Returns the empty collection if the instance is null; otherwise, the instance is returned.

Return Type: Bag(<ElementType>)

</td>

</tr>

<tr>

<td>**excludes**</td>

<td>

_instance._excludes(_object_)

Return Type: Boolean

<dl>

<dt>object</dt>

<dd>

Type: <ElementType>

</dd>

</dl>

</td>

</tr>

<tr>

<td>**excludesAll**</td>

<td>

_instance._excludesAll(_c2_)

Return Type: Boolean

<dl>

<dt>c2</dt>

<dd>

Type: Collection(<ElementType>)

</dd>

</dl>

</td>

</tr>

<tr>

<td>**excluding**</td>

<td>

_instance._excluding(_object_)

Return Type: Bag(<ElementType>)

<dl>

<dt>object</dt>

<dd>

Type: <ElementType>

</dd>

</dl>

</td>

</tr>

<tr>

<td>**exists**</td>

<td>

_instance._exists(_<iterator expression>_)

Returns TRUE if at least one Collection(<ElementType>) instance match the <iterator expression>, otherwise FALSE is returned.

Return Type: Boolean

<dl>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type <ElementType>.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**flatten**</td>

<td>

_instance._flatten

Return Type: Bag(<ElementType>)

</td>

</tr>

<tr>

<td>**flattenRecursive**</td>

<td>

_instance._flattenRecursive

Return Type: Bag(<ElementType>)

</td>

</tr>

<tr>

<td>**forAll**</td>

<td>

_instance._forAll(_<iterator expression>_)

Returns TRUE if all Collection(<ElementType>) instances match the <iterator expression>, otherwise FALSE is returned.

Return Type: Boolean

<dl>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type <ElementType>.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**includes**</td>

<td>

_instance._includes(_object_)

Return Type: Boolean

<dl>

<dt>object</dt>

<dd>

Type: <ElementType>

</dd>

</dl>

</td>

</tr>

<tr>

<td>**includesAll**</td>

<td>

_instance._includesAll(_c2_)

Return Type: Boolean

<dl>

<dt>c2</dt>

<dd>

Type: Collection(<ElementType>)

</dd>

</dl>

</td>

</tr>

<tr>

<td>**including**</td>

<td>

_instance._including(_object_)

Return Type: Bag(<ElementType>)

<dl>

<dt>object</dt>

<dd>

Type: <ElementType>

</dd>

</dl>

</td>

</tr>

<tr>

<td>**intersection**</td>

<td>

_instance._intersection(_b_)

Return Type: Bag(<ElementType>)

<dl>

<dt>b</dt>

<dd>

Type: Bag(<ElementType>)

</dd>

</dl>

</td>

</tr>

<tr>

<td>**intersection**</td>

<td>

_instance._intersection(_s_)

Return Type: Set(<ElementType>)

<dl>

<dt>s</dt>

<dd>

Type: Set(<ElementType>)

</dd>

</dl>

</td>

</tr>

<tr>

<td>**isEmpty**</td>

<td>

_instance._isEmpty

Return Type: Boolean

</td>

</tr>

<tr>

<td>**join**</td>

<td>

_instance._join(_joinWith__, <iterator expression>_)

Selects only those instances of <ElementType> that match the <iterator expression>.

Return Type: Bag(<ElementType>)

<dl>

<dt>joinWith</dt>

<dd>

Type: Collection(Object)

</dd>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type <ElementType>.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**join**</td>

<td>

_instance._join(_joinWith__, <iterator expression>_)

Selects only those instances of <ElementType> that match the <iterator expression>.

Return Type: Bag(<ElementType>)

<dl>

<dt>joinWith</dt>

<dd>

Type: Collection(Value)

</dd>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type <ElementType>.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**notEmpty**</td>

<td>

_instance._notEmpty

Return Type: Boolean

</td>

</tr>

<tr>

<td>**reject**</td>

<td>

_instance._reject(_<iterator expression>_)

Removes all instances of <ElementType> that match the <iterator expression>.

Return Type: Bag(<ElementType>)

<dl>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type <ElementType>.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**select**</td>

<td>

_instance._select(_<iterator expression>_)

Selects only those instances of <ElementType> that match the <iterator expression>.

Return Type: Bag(<ElementType>)

<dl>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type <ElementType>.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**single**</td>

<td>

_instance._single

Returns the only element of a collection, and throws an exception if there is not exactly one element in the collection. To instead return a default value when the collection is empty, use SingleOrDefault.

Return Type: <ElementType>

</td>

</tr>

<tr>

<td>**singleOrDefault**</td>

<td>

_instance._singleOrDefault

Returns the only element of a collection, or a default value if the collection is empty. An exception is thrown if there is more than one element in the collection.

Return Type: <ElementType>

</td>

</tr>

<tr>

<td>**union**</td>

<td>

_instance._union(_b_)

Return Type: Bag(<ElementType>)

<dl>

<dt>b</dt>

<dd>

Type: Bag(<ElementType>)

</dd>

</dl>

</td>

</tr>

<tr>

<td>**union**</td>

<td>

_instance._union(_s_)

Return Type: Set(<ElementType>)

<dl>

<dt>s</dt>

<dd>

Type: Set(<ElementType>)

</dd>

</dl>

</td>

</tr>

</tbody>

</table>

* * *

### Collection(<ElementType>) Type

The Collection(<ElementType>) type exposes the following members.

**Instance members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**asBag**</td>

<td>

_instance._asBag

Return Type: Bag(<ElementType>)

</td>

</tr>

<tr>

<td>**asOrderedSet**</td>

<td>

_instance._asOrderedSet

Return Type: OrderedSet(<ElementType>)

</td>

</tr>

<tr>

<td>**asSequence**</td>

<td>

_instance._asSequence

Return Type: Sequence(<ElementType>)

</td>

</tr>

<tr>

<td>**asSet**</td>

<td>

_instance._asSet

Return Type: Set(<ElementType>)

</td>

</tr>

<tr>

<td>**count**</td>

<td>

_instance._count

Return Type: Integer

</td>

</tr>

<tr>

<td>**count**</td>

<td>

_instance._count(_object_)

Return Type: Integer

<dl>

<dt>object</dt>

<dd>

Type: <ElementType>

</dd>

</dl>

</td>

</tr>

<tr>

<td>**emptyIfNull**</td>

<td>

_instance._emptyIfNull

Returns the empty collection if the instance is null; otherwise, the instance is returned.

Return Type: Collection(<ElementType>)

</td>

</tr>

<tr>

<td>**excludes**</td>

<td>

_instance._excludes(_object_)

Return Type: Boolean

<dl>

<dt>object</dt>

<dd>

Type: <ElementType>

</dd>

</dl>

</td>

</tr>

<tr>

<td>**excludesAll**</td>

<td>

_instance._excludesAll(_c2_)

Return Type: Boolean

<dl>

<dt>c2</dt>

<dd>

Type: Collection(<ElementType>)

</dd>

</dl>

</td>

</tr>

<tr>

<td>**excluding**</td>

<td>

_instance._excluding(_object_)

Return Type: Collection(<ElementType>)

<dl>

<dt>object</dt>

<dd>

Type: <ElementType>

</dd>

</dl>

</td>

</tr>

<tr>

<td>**exists**</td>

<td>

_instance._exists(_<iterator expression>_)

Returns TRUE if at least one Collection(<ElementType>) instance match the <iterator expression>, otherwise FALSE is returned.

Return Type: Boolean

<dl>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type <ElementType>.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**forAll**</td>

<td>

_instance._forAll(_<iterator expression>_)

Returns TRUE if all Collection(<ElementType>) instances match the <iterator expression>, otherwise FALSE is returned.

Return Type: Boolean

<dl>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type <ElementType>.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**includes**</td>

<td>

_instance._includes(_object_)

Return Type: Boolean

<dl>

<dt>object</dt>

<dd>

Type: <ElementType>

</dd>

</dl>

</td>

</tr>

<tr>

<td>**includesAll**</td>

<td>

_instance._includesAll(_c2_)

Return Type: Boolean

<dl>

<dt>c2</dt>

<dd>

Type: Collection(<ElementType>)

</dd>

</dl>

</td>

</tr>

<tr>

<td>**including**</td>

<td>

_instance._including(_object_)

Return Type: Collection(<ElementType>)

<dl>

<dt>object</dt>

<dd>

Type: <ElementType>

</dd>

</dl>

</td>

</tr>

<tr>

<td>**isEmpty**</td>

<td>

_instance._isEmpty

Return Type: Boolean

</td>

</tr>

<tr>

<td>**join**</td>

<td>

_instance._join(_joinWith__, <iterator expression>_)

Selects only those instances of <ElementType> that match the <iterator expression>.

Return Type: Collection(<ElementType>)

<dl>

<dt>joinWith</dt>

<dd>

Type: Collection(Object)

</dd>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type <ElementType>.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**join**</td>

<td>

_instance._join(_joinWith__, <iterator expression>_)

Selects only those instances of <ElementType> that match the <iterator expression>.

Return Type: Collection(<ElementType>)

<dl>

<dt>joinWith</dt>

<dd>

Type: Collection(Value)

</dd>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type <ElementType>.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**notEmpty**</td>

<td>

_instance._notEmpty

Return Type: Boolean

</td>

</tr>

<tr>

<td>**reject**</td>

<td>

_instance._reject(_<iterator expression>_)

Removes all instances of <ElementType> that match the <iterator expression>.

Return Type: Collection(<ElementType>)

<dl>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type <ElementType>.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**select**</td>

<td>

_instance._select(_<iterator expression>_)

Selects only those instances of <ElementType> that match the <iterator expression>.

Return Type: Collection(<ElementType>)

<dl>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type <ElementType>.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**single**</td>

<td>

_instance._single

Returns the only element of a collection, and throws an exception if there is not exactly one element in the collection. To instead return a default value when the collection is empty, use SingleOrDefault.

Return Type: <ElementType>

</td>

</tr>

<tr>

<td>**singleOrDefault**</td>

<td>

_instance._singleOrDefault

Returns the only element of a collection, or a default value if the collection is empty. An exception is thrown if there is more than one element in the collection.

Return Type: <ElementType>

</td>

</tr>

</tbody>

</table>

* * *

### Collection(CalendarTimeSpan) Type

The Collection(CalendarTimeSpan) type exposes the following members.

**Instance members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**asBag**</td>

<td>

_instance._asBag

Return Type: Bag(CalendarTimeSpan)

</td>

</tr>

<tr>

<td>**asOrderedSet**</td>

<td>

_instance._asOrderedSet

Return Type: OrderedSet(CalendarTimeSpan)

</td>

</tr>

<tr>

<td>**asSequence**</td>

<td>

_instance._asSequence

Return Type: Sequence(CalendarTimeSpan)

</td>

</tr>

<tr>

<td>**asSet**</td>

<td>

_instance._asSet

Return Type: Set(CalendarTimeSpan)

</td>

</tr>

<tr>

<td>**average**</td>

<td>

_instance._average

Returns the average (arithmetic mean) of a collection of values.

Return Type: CalendarTimeSpan

</td>

</tr>

<tr>

<td>**count**</td>

<td>

_instance._count

Return Type: Integer

</td>

</tr>

<tr>

<td>**count**</td>

<td>

_instance._count(_object_)

Return Type: Integer

<dl>

<dt>object</dt>

<dd>

Type: CalendarTimeSpan

</dd>

</dl>

</td>

</tr>

<tr>

<td>**emptyIfNull**</td>

<td>

_instance._emptyIfNull

Returns the empty collection if the instance is null; otherwise, the instance is returned.

Return Type: Collection(CalendarTimeSpan)

</td>

</tr>

<tr>

<td>**excludes**</td>

<td>

_instance._excludes(_object_)

Return Type: Boolean

<dl>

<dt>object</dt>

<dd>

Type: CalendarTimeSpan

</dd>

</dl>

</td>

</tr>

<tr>

<td>**excludesAll**</td>

<td>

_instance._excludesAll(_c2_)

Return Type: Boolean

<dl>

<dt>c2</dt>

<dd>

Type: Collection(CalendarTimeSpan)

</dd>

</dl>

</td>

</tr>

<tr>

<td>**excluding**</td>

<td>

_instance._excluding(_object_)

Return Type: Collection(CalendarTimeSpan)

<dl>

<dt>object</dt>

<dd>

Type: CalendarTimeSpan

</dd>

</dl>

</td>

</tr>

<tr>

<td>**excluding**</td>

<td>

_instance._excluding(_object_)

Return Type: Collection(Value)

<dl>

<dt>object</dt>

<dd>

Type: Value

</dd>

</dl>

</td>

</tr>

<tr>

<td>**exists**</td>

<td>

_instance._exists(_<iterator expression>_)

Returns TRUE if at least one Collection(CalendarTimeSpan) instance match the <iterator expression>, otherwise FALSE is returned.

Return Type: Boolean

<dl>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type CalendarTimeSpan.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**forAll**</td>

<td>

_instance._forAll(_<iterator expression>_)

Returns TRUE if all Collection(CalendarTimeSpan) instances match the <iterator expression>, otherwise FALSE is returned.

Return Type: Boolean

<dl>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type CalendarTimeSpan.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**includes**</td>

<td>

_instance._includes(_object_)

Return Type: Boolean

<dl>

<dt>object</dt>

<dd>

Type: CalendarTimeSpan

</dd>

</dl>

</td>

</tr>

<tr>

<td>**includesAll**</td>

<td>

_instance._includesAll(_c2_)

Return Type: Boolean

<dl>

<dt>c2</dt>

<dd>

Type: Collection(CalendarTimeSpan)

</dd>

</dl>

</td>

</tr>

<tr>

<td>**including**</td>

<td>

_instance._including(_object_)

Return Type: Collection(CalendarTimeSpan)

<dl>

<dt>object</dt>

<dd>

Type: CalendarTimeSpan

</dd>

</dl>

</td>

</tr>

<tr>

<td>**including**</td>

<td>

_instance._including(_object_)

Return Type: Collection(Value)

<dl>

<dt>object</dt>

<dd>

Type: Value

</dd>

</dl>

</td>

</tr>

<tr>

<td>**isEmpty**</td>

<td>

_instance._isEmpty

Return Type: Boolean

</td>

</tr>

<tr>

<td>**join**</td>

<td>

_instance._join(_joinWith__, <iterator expression>_)

Selects only those instances of CalendarTimeSpan that match the <iterator expression>.

Return Type: Collection(CalendarTimeSpan)

<dl>

<dt>joinWith</dt>

<dd>

Type: Collection(Object)

</dd>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type CalendarTimeSpan.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**join**</td>

<td>

_instance._join(_joinWith__, <iterator expression>_)

Selects only those instances of CalendarTimeSpan that match the <iterator expression>.

Return Type: Collection(CalendarTimeSpan)

<dl>

<dt>joinWith</dt>

<dd>

Type: Collection(Value)

</dd>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type CalendarTimeSpan.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**max**</td>

<td>

_instance._max

Returns the largest value in a collection of values.

Return Type: CalendarTimeSpan

</td>

</tr>

<tr>

<td>**min**</td>

<td>

_instance._min

Returns the smallest value in a collection of values.

Return Type: CalendarTimeSpan

</td>

</tr>

<tr>

<td>**notEmpty**</td>

<td>

_instance._notEmpty

Return Type: Boolean

</td>

</tr>

<tr>

<td>**reject**</td>

<td>

_instance._reject(_<iterator expression>_)

Removes all instances of CalendarTimeSpan that match the <iterator expression>.

Return Type: Collection(CalendarTimeSpan)

<dl>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type CalendarTimeSpan.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**select**</td>

<td>

_instance._select(_<iterator expression>_)

Selects only those instances of CalendarTimeSpan that match the <iterator expression>.

Return Type: Collection(CalendarTimeSpan)

<dl>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type CalendarTimeSpan.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**single**</td>

<td>

_instance._single

Returns the only element of a collection, and throws an exception if there is not exactly one element in the collection. To instead return a default value when the collection is empty, use SingleOrDefault.

Return Type: CalendarTimeSpan

</td>

</tr>

<tr>

<td>**singleOrDefault**</td>

<td>

_instance._singleOrDefault

Returns the only element of a collection, or a default value if the collection is empty. An exception is thrown if there is more than one element in the collection.

Return Type: CalendarTimeSpan

</td>

</tr>

<tr>

<td>**sum**</td>

<td>

_instance._sum

Returns the sum of a collection of values.

Return Type: CalendarTimeSpan

</td>

</tr>

<tr>

<td>**toString**</td>

<td>

_instance._toString

Returns a string representation of the values.

Return Type: String

</td>

</tr>

</tbody>

</table>

* * *

### Collection(Integer) Type

The Collection(Integer) type exposes the following members.

**Instance members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**asBag**</td>

<td>

_instance._asBag

Return Type: Bag(Integer)

</td>

</tr>

<tr>

<td>**asOrderedSet**</td>

<td>

_instance._asOrderedSet

Return Type: OrderedSet(Integer)

</td>

</tr>

<tr>

<td>**asSequence**</td>

<td>

_instance._asSequence

Return Type: Sequence(Integer)

</td>

</tr>

<tr>

<td>**asSet**</td>

<td>

_instance._asSet

Return Type: Set(Integer)

</td>

</tr>

<tr>

<td>**average**</td>

<td>

_instance._average

Returns the average (arithmetic mean) of a collection of values.

Return Type: Real

</td>

</tr>

<tr>

<td>**count**</td>

<td>

_instance._count

Return Type: Integer

</td>

</tr>

<tr>

<td>**count**</td>

<td>

_instance._count(_object_)

Return Type: Integer

<dl>

<dt>object</dt>

<dd>

Type: Integer

</dd>

</dl>

</td>

</tr>

<tr>

<td>**emptyIfNull**</td>

<td>

_instance._emptyIfNull

Returns the empty collection if the instance is null; otherwise, the instance is returned.

Return Type: Collection(Integer)

</td>

</tr>

<tr>

<td>**excludes**</td>

<td>

_instance._excludes(_object_)

Return Type: Boolean

<dl>

<dt>object</dt>

<dd>

Type: Integer

</dd>

</dl>

</td>

</tr>

<tr>

<td>**excludesAll**</td>

<td>

_instance._excludesAll(_c2_)

Return Type: Boolean

<dl>

<dt>c2</dt>

<dd>

Type: Collection(Integer)

</dd>

</dl>

</td>

</tr>

<tr>

<td>**excluding**</td>

<td>

_instance._excluding(_object_)

Return Type: Collection(Integer)

<dl>

<dt>object</dt>

<dd>

Type: Integer

</dd>

</dl>

</td>

</tr>

<tr>

<td>**excluding**</td>

<td>

_instance._excluding(_object_)

Return Type: Collection(Value)

<dl>

<dt>object</dt>

<dd>

Type: Value

</dd>

</dl>

</td>

</tr>

<tr>

<td>**exists**</td>

<td>

_instance._exists(_<iterator expression>_)

Returns TRUE if at least one Collection(Integer) instance match the <iterator expression>, otherwise FALSE is returned.

Return Type: Boolean

<dl>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type Integer.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**forAll**</td>

<td>

_instance._forAll(_<iterator expression>_)

Returns TRUE if all Collection(Integer) instances match the <iterator expression>, otherwise FALSE is returned.

Return Type: Boolean

<dl>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type Integer.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**includes**</td>

<td>

_instance._includes(_object_)

Return Type: Boolean

<dl>

<dt>object</dt>

<dd>

Type: Integer

</dd>

</dl>

</td>

</tr>

<tr>

<td>**includesAll**</td>

<td>

_instance._includesAll(_c2_)

Return Type: Boolean

<dl>

<dt>c2</dt>

<dd>

Type: Collection(Integer)

</dd>

</dl>

</td>

</tr>

<tr>

<td>**including**</td>

<td>

_instance._including(_object_)

Return Type: Collection(Integer)

<dl>

<dt>object</dt>

<dd>

Type: Integer

</dd>

</dl>

</td>

</tr>

<tr>

<td>**including**</td>

<td>

_instance._including(_object_)

Return Type: Collection(Value)

<dl>

<dt>object</dt>

<dd>

Type: Value

</dd>

</dl>

</td>

</tr>

<tr>

<td>**isEmpty**</td>

<td>

_instance._isEmpty

Return Type: Boolean

</td>

</tr>

<tr>

<td>**join**</td>

<td>

_instance._join(_joinWith__, <iterator expression>_)

Selects only those instances of Integer that match the <iterator expression>.

Return Type: Collection(Integer)

<dl>

<dt>joinWith</dt>

<dd>

Type: Collection(Object)

</dd>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type Integer.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**join**</td>

<td>

_instance._join(_joinWith__, <iterator expression>_)

Selects only those instances of Integer that match the <iterator expression>.

Return Type: Collection(Integer)

<dl>

<dt>joinWith</dt>

<dd>

Type: Collection(Value)

</dd>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type Integer.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**max**</td>

<td>

_instance._max

Returns the largest value in a collection of values.

Return Type: Integer

</td>

</tr>

<tr>

<td>**median**</td>

<td>

_instance._median

Returns the median of the given values. The median is the value in the middle of a collection of values; that is, half the values are greater than the median, and half are less.

Return Type: Real

</td>

</tr>

<tr>

<td>**min**</td>

<td>

_instance._min

Returns the smallest value in a collection of values.

Return Type: Integer

</td>

</tr>

<tr>

<td>**norm**</td>

<td>

_instance._norm

Returns the Euclidean "L-2" norm for the data values (the square root of the sum of squares).

Return Type: Real

</td>

</tr>

<tr>

<td>**notEmpty**</td>

<td>

_instance._notEmpty

Return Type: Boolean

</td>

</tr>

<tr>

<td>**percentileCont**</td>

<td>

_instance._percentileCont(_percentile__, sortOrder_)

Returns the percentile based on a continuous distribution of the data values. The result is interpolated and might not be equal to any of the specific data values.

Return Type: Real

<dl>

<dt>percentile</dt>

<dd>

Type: Real

The percentile to compute. The value must range between 0.0 and 1.0.

</dd>

<dt>sortOrder</dt>

<dd>

Type: SortOrder

The order applied when data values are sorted (ascending or descending).

</dd>

</dl>

</td>

</tr>

<tr>

<td>**reject**</td>

<td>

_instance._reject(_<iterator expression>_)

Removes all instances of Integer that match the <iterator expression>.

Return Type: Collection(Integer)

<dl>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type Integer.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**select**</td>

<td>

_instance._select(_<iterator expression>_)

Selects only those instances of Integer that match the <iterator expression>.

Return Type: Collection(Integer)

<dl>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type Integer.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**single**</td>

<td>

_instance._single

Returns the only element of a collection, and throws an exception if there is not exactly one element in the collection. To instead return a default value when the collection is empty, use SingleOrDefault.

Return Type: Integer

</td>

</tr>

<tr>

<td>**singleOrDefault**</td>

<td>

_instance._singleOrDefault

Returns the only element of a collection, or a default value if the collection is empty. An exception is thrown if there is more than one element in the collection.

Return Type: Integer

</td>

</tr>

<tr>

<td>**stdev**</td>

<td>

_instance._stdev

Estimates standard deviation based on a sample. The standard deviation is a measure of how widely values are dispersed from the average value (the mean).

Return Type: Real

</td>

</tr>

<tr>

<td>**stdevp**</td>

<td>

_instance._stdevp

Calculates standard deviation based on the entire population given as arguments. The standard deviation is a measure of how widely values are dispersed from the average value (the mean).

Return Type: Real

</td>

</tr>

<tr>

<td>**sum**</td>

<td>

_instance._sum

Returns the sum of a collection of values.

Return Type: Integer

</td>

</tr>

<tr>

<td>**sumsq**</td>

<td>

_instance._sumsq

Returns the sum of the squares of a collection of values.

Return Type: Integer

</td>

</tr>

<tr>

<td>**toString**</td>

<td>

_instance._toString

Returns a string representation of the values.

Return Type: String

</td>

</tr>

<tr>

<td>**var**</td>

<td>

_instance._var

Estimates variance based on a sample. Var assumes that its arguments are a sample of the population. If your data represents the entire population, then compute the variance using Varp.

Return Type: Real

</td>

</tr>

<tr>

<td>**varp**</td>

<td>

_instance._varp

Calculates variance based on the entire population. Varp assumes that its arguments are the entire population. If your data represents a sample of the population, then compute the variance using Var.

Return Type: Real

</td>

</tr>

<tr>

<td>**vart**</td>

<td>

_instance._vart

Returns the sum of the squares of the difference between each data value and the mean of the data values.

Return Type: Real

</td>

</tr>

</tbody>

</table>

* * *

### Collection(Real) Type

The Collection(Real) type exposes the following members.

**Instance members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**asBag**</td>

<td>

_instance._asBag

Return Type: Bag(Real)

</td>

</tr>

<tr>

<td>**asOrderedSet**</td>

<td>

_instance._asOrderedSet

Return Type: OrderedSet(Real)

</td>

</tr>

<tr>

<td>**asSequence**</td>

<td>

_instance._asSequence

Return Type: Sequence(Real)

</td>

</tr>

<tr>

<td>**asSet**</td>

<td>

_instance._asSet

Return Type: Set(Real)

</td>

</tr>

<tr>

<td>**average**</td>

<td>

_instance._average

Returns the average (arithmetic mean) of a collection of values.

Return Type: Real

</td>

</tr>

<tr>

<td>**count**</td>

<td>

_instance._count

Return Type: Integer

</td>

</tr>

<tr>

<td>**count**</td>

<td>

_instance._count(_object_)

Return Type: Integer

<dl>

<dt>object</dt>

<dd>

Type: Real

</dd>

</dl>

</td>

</tr>

<tr>

<td>**emptyIfNull**</td>

<td>

_instance._emptyIfNull

Returns the empty collection if the instance is null; otherwise, the instance is returned.

Return Type: Collection(Real)

</td>

</tr>

<tr>

<td>**excludes**</td>

<td>

_instance._excludes(_object_)

Return Type: Boolean

<dl>

<dt>object</dt>

<dd>

Type: Real

</dd>

</dl>

</td>

</tr>

<tr>

<td>**excludesAll**</td>

<td>

_instance._excludesAll(_c2_)

Return Type: Boolean

<dl>

<dt>c2</dt>

<dd>

Type: Collection(Real)

</dd>

</dl>

</td>

</tr>

<tr>

<td>**excluding**</td>

<td>

_instance._excluding(_object_)

Return Type: Collection(Real)

<dl>

<dt>object</dt>

<dd>

Type: Real

</dd>

</dl>

</td>

</tr>

<tr>

<td>**excluding**</td>

<td>

_instance._excluding(_object_)

Return Type: Collection(Value)

<dl>

<dt>object</dt>

<dd>

Type: Value

</dd>

</dl>

</td>

</tr>

<tr>

<td>**exists**</td>

<td>

_instance._exists(_<iterator expression>_)

Returns TRUE if at least one Collection(Real) instance match the <iterator expression>, otherwise FALSE is returned.

Return Type: Boolean

<dl>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type Real.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**forAll**</td>

<td>

_instance._forAll(_<iterator expression>_)

Returns TRUE if all Collection(Real) instances match the <iterator expression>, otherwise FALSE is returned.

Return Type: Boolean

<dl>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type Real.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**includes**</td>

<td>

_instance._includes(_object_)

Return Type: Boolean

<dl>

<dt>object</dt>

<dd>

Type: Real

</dd>

</dl>

</td>

</tr>

<tr>

<td>**includesAll**</td>

<td>

_instance._includesAll(_c2_)

Return Type: Boolean

<dl>

<dt>c2</dt>

<dd>

Type: Collection(Real)

</dd>

</dl>

</td>

</tr>

<tr>

<td>**including**</td>

<td>

_instance._including(_object_)

Return Type: Collection(Real)

<dl>

<dt>object</dt>

<dd>

Type: Real

</dd>

</dl>

</td>

</tr>

<tr>

<td>**including**</td>

<td>

_instance._including(_object_)

Return Type: Collection(Value)

<dl>

<dt>object</dt>

<dd>

Type: Value

</dd>

</dl>

</td>

</tr>

<tr>

<td>**isEmpty**</td>

<td>

_instance._isEmpty

Return Type: Boolean

</td>

</tr>

<tr>

<td>**join**</td>

<td>

_instance._join(_joinWith__, <iterator expression>_)

Selects only those instances of Real that match the <iterator expression>.

Return Type: Collection(Real)

<dl>

<dt>joinWith</dt>

<dd>

Type: Collection(Object)

</dd>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type Real.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**join**</td>

<td>

_instance._join(_joinWith__, <iterator expression>_)

Selects only those instances of Real that match the <iterator expression>.

Return Type: Collection(Real)

<dl>

<dt>joinWith</dt>

<dd>

Type: Collection(Value)

</dd>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type Real.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**max**</td>

<td>

_instance._max

Returns the largest value in a collection of values.

Return Type: Real

</td>

</tr>

<tr>

<td>**median**</td>

<td>

_instance._median

Returns the median of the given values. The median is the value in the middle of a collection of values; that is, half the values are greater than the median, and half are less.

Return Type: Real

</td>

</tr>

<tr>

<td>**min**</td>

<td>

_instance._min

Returns the smallest value in a collection of values.

Return Type: Real

</td>

</tr>

<tr>

<td>**norm**</td>

<td>

_instance._norm

Returns the Euclidean "L-2" norm for the data values (the square root of the sum of squares).

Return Type: Real

</td>

</tr>

<tr>

<td>**notEmpty**</td>

<td>

_instance._notEmpty

Return Type: Boolean

</td>

</tr>

<tr>

<td>**percentileCont**</td>

<td>

_instance._percentileCont(_percentile__, sortOrder_)

Returns the percentile based on a continuous distribution of the data values. The result is interpolated and might not be equal to any of the specific data values.

Return Type: Real

<dl>

<dt>percentile</dt>

<dd>

Type: Real

The percentile to compute. The value must range between 0.0 and 1.0.

</dd>

<dt>sortOrder</dt>

<dd>

Type: SortOrder

The order applied when data values are sorted (ascending or descending).

</dd>

</dl>

</td>

</tr>

<tr>

<td>**reject**</td>

<td>

_instance._reject(_<iterator expression>_)

Removes all instances of Real that match the <iterator expression>.

Return Type: Collection(Real)

<dl>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type Real.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**select**</td>

<td>

_instance._select(_<iterator expression>_)

Selects only those instances of Real that match the <iterator expression>.

Return Type: Collection(Real)

<dl>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type Real.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**single**</td>

<td>

_instance._single

Returns the only element of a collection, and throws an exception if there is not exactly one element in the collection. To instead return a default value when the collection is empty, use SingleOrDefault.

Return Type: Real

</td>

</tr>

<tr>

<td>**singleOrDefault**</td>

<td>

_instance._singleOrDefault

Returns the only element of a collection, or a default value if the collection is empty. An exception is thrown if there is more than one element in the collection.

Return Type: Real

</td>

</tr>

<tr>

<td>**stdev**</td>

<td>

_instance._stdev

Estimates standard deviation based on a sample. The standard deviation is a measure of how widely values are dispersed from the average value (the mean).

Return Type: Real

</td>

</tr>

<tr>

<td>**stdevp**</td>

<td>

_instance._stdevp

Calculates standard deviation based on the entire population given as arguments. The standard deviation is a measure of how widely values are dispersed from the average value (the mean).

Return Type: Real

</td>

</tr>

<tr>

<td>**sum**</td>

<td>

_instance._sum

Returns the sum of a collection of values.

Return Type: Real

</td>

</tr>

<tr>

<td>**sumsq**</td>

<td>

_instance._sumsq

Returns the sum of the squares of a collection of values.

Return Type: Real

</td>

</tr>

<tr>

<td>**toString**</td>

<td>

_instance._toString

Returns a string representation of the values.

Return Type: String

</td>

</tr>

<tr>

<td>**var**</td>

<td>

_instance._var

Estimates variance based on a sample. Var assumes that its arguments are a sample of the population. If your data represents the entire population, then compute the variance using Varp.

Return Type: Real

</td>

</tr>

<tr>

<td>**varp**</td>

<td>

_instance._varp

Calculates variance based on the entire population. Varp assumes that its arguments are the entire population. If your data represents a sample of the population, then compute the variance using Var.

Return Type: Real

</td>

</tr>

<tr>

<td>**vart**</td>

<td>

_instance._vart

Returns the sum of the squares of the difference between each data value and the mean of the data values.

Return Type: Real

</td>

</tr>

</tbody>

</table>

* * *

### OrderedSet(<ElementType>) Type

The OrderedSet(<ElementType>) type exposes the following members.

**Instance members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**append**</td>

<td>

_instance._append(_object_)

Return Type: OrderedSet(<ElementType>)

<dl>

<dt>object</dt>

<dd>

Type: <ElementType>

</dd>

</dl>

</td>

</tr>

<tr>

<td>**asBag**</td>

<td>

_instance._asBag

Return Type: Bag(<ElementType>)

</td>

</tr>

<tr>

<td>**asOrderedSet**</td>

<td>

_instance._asOrderedSet

Return Type: OrderedSet(<ElementType>)

</td>

</tr>

<tr>

<td>**asSequence**</td>

<td>

_instance._asSequence

Return Type: Sequence(<ElementType>)

</td>

</tr>

<tr>

<td>**asSet**</td>

<td>

_instance._asSet

Return Type: Set(<ElementType>)

</td>

</tr>

<tr>

<td>**count**</td>

<td>

_instance._count

Return Type: Integer

</td>

</tr>

<tr>

<td>**count**</td>

<td>

_instance._count(_object_)

Return Type: Integer

<dl>

<dt>object</dt>

<dd>

Type: <ElementType>

</dd>

</dl>

</td>

</tr>

<tr>

<td>**emptyIfNull**</td>

<td>

_instance._emptyIfNull

Returns the empty collection if the instance is null; otherwise, the instance is returned.

Return Type: OrderedSet(<ElementType>)

</td>

</tr>

<tr>

<td>**excludes**</td>

<td>

_instance._excludes(_object_)

Return Type: Boolean

<dl>

<dt>object</dt>

<dd>

Type: <ElementType>

</dd>

</dl>

</td>

</tr>

<tr>

<td>**excludesAll**</td>

<td>

_instance._excludesAll(_c2_)

Return Type: Boolean

<dl>

<dt>c2</dt>

<dd>

Type: Collection(<ElementType>)

</dd>

</dl>

</td>

</tr>

<tr>

<td>**excluding**</td>

<td>

_instance._excluding(_object_)

Return Type: OrderedSet(<ElementType>)

<dl>

<dt>object</dt>

<dd>

Type: <ElementType>

</dd>

</dl>

</td>

</tr>

<tr>

<td>**exists**</td>

<td>

_instance._exists(_<iterator expression>_)

Returns TRUE if at least one Collection(<ElementType>) instance match the <iterator expression>, otherwise FALSE is returned.

Return Type: Boolean

<dl>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type <ElementType>.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**first**</td>

<td>

_instance._first

Returns the first element of an ordered set, and throws an exception if the ordered set contains no elements. To instead return a default value when the ordered set is empty, use FirstOrDefault.

Return Type: <ElementType>

</td>

</tr>

<tr>

<td>**firstOrDefault**</td>

<td>

_instance._firstOrDefault

Returns the first element of an ordered set, or a default value if the ordered set contains no elements.

Return Type: <ElementType>

</td>

</tr>

<tr>

<td>**flatten**</td>

<td>

_instance._flatten

Return Type: OrderedSet(<ElementType>)

</td>

</tr>

<tr>

<td>**flattenRecursive**</td>

<td>

_instance._flattenRecursive

Return Type: OrderedSet(<ElementType>)

</td>

</tr>

<tr>

<td>**forAll**</td>

<td>

_instance._forAll(_<iterator expression>_)

Returns TRUE if all Collection(<ElementType>) instances match the <iterator expression>, otherwise FALSE is returned.

Return Type: Boolean

<dl>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type <ElementType>.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**includes**</td>

<td>

_instance._includes(_object_)

Return Type: Boolean

<dl>

<dt>object</dt>

<dd>

Type: <ElementType>

</dd>

</dl>

</td>

</tr>

<tr>

<td>**includesAll**</td>

<td>

_instance._includesAll(_c2_)

Return Type: Boolean

<dl>

<dt>c2</dt>

<dd>

Type: Collection(<ElementType>)

</dd>

</dl>

</td>

</tr>

<tr>

<td>**including**</td>

<td>

_instance._including(_object_)

Return Type: OrderedSet(<ElementType>)

<dl>

<dt>object</dt>

<dd>

Type: <ElementType>

</dd>

</dl>

</td>

</tr>

<tr>

<td>**isEmpty**</td>

<td>

_instance._isEmpty

Return Type: Boolean

</td>

</tr>

<tr>

<td>**join**</td>

<td>

_instance._join(_joinWith__, <iterator expression>_)

Selects only those instances of <ElementType> that match the <iterator expression>.

Return Type: OrderedSet(<ElementType>)

<dl>

<dt>joinWith</dt>

<dd>

Type: Collection(Object)

</dd>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type <ElementType>.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**join**</td>

<td>

_instance._join(_joinWith__, <iterator expression>_)

Selects only those instances of <ElementType> that match the <iterator expression>.

Return Type: OrderedSet(<ElementType>)

<dl>

<dt>joinWith</dt>

<dd>

Type: Collection(Value)

</dd>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type <ElementType>.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**last**</td>

<td>

_instance._last

Returns the last element of a ordered set, and throws an exception if the ordered set contains no elements. To instead return a default value when the ordered set is empty, use LastOrDefault.

Return Type: <ElementType>

</td>

</tr>

<tr>

<td>**lastOrDefault**</td>

<td>

_instance._lastOrDefault

Returns the last element of an ordered set, or a default value if the ordered set contains no elements.

Return Type: <ElementType>

</td>

</tr>

<tr>

<td>**notEmpty**</td>

<td>

_instance._notEmpty

Return Type: Boolean

</td>

</tr>

<tr>

<td>**prepend**</td>

<td>

_instance._prepend(_object_)

Return Type: OrderedSet(<ElementType>)

<dl>

<dt>object</dt>

<dd>

Type: <ElementType>

</dd>

</dl>

</td>

</tr>

<tr>

<td>**reject**</td>

<td>

_instance._reject(_<iterator expression>_)

Removes all instances of <ElementType> that match the <iterator expression>.

Return Type: OrderedSet(<ElementType>)

<dl>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type <ElementType>.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**select**</td>

<td>

_instance._select(_<iterator expression>_)

Selects only those instances of <ElementType> that match the <iterator expression>.

Return Type: OrderedSet(<ElementType>)

<dl>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type <ElementType>.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**single**</td>

<td>

_instance._single

Returns the only element of a collection, and throws an exception if there is not exactly one element in the collection. To instead return a default value when the collection is empty, use SingleOrDefault.

Return Type: <ElementType>

</td>

</tr>

<tr>

<td>**singleOrDefault**</td>

<td>

_instance._singleOrDefault

Returns the only element of a collection, or a default value if the collection is empty. An exception is thrown if there is more than one element in the collection.

Return Type: <ElementType>

</td>

</tr>

</tbody>

</table>

* * *

### OrderedSet(Value) Type

The OrderedSet(Value) type exposes the following members.

**Instance members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**append**</td>

<td>

_instance._append(_object_)

Return Type: OrderedSet(Value)

<dl>

<dt>object</dt>

<dd>

Type: Value

</dd>

</dl>

</td>

</tr>

<tr>

<td>**emptyIfNull**</td>

<td>

_instance._emptyIfNull

Returns the empty collection if the instance is null; otherwise, the instance is returned.

Return Type: OrderedSet(Value)

</td>

</tr>

<tr>

<td>**excluding**</td>

<td>

_instance._excluding(_object_)

Return Type: OrderedSet(Value)

<dl>

<dt>object</dt>

<dd>

Type: Value

</dd>

</dl>

</td>

</tr>

<tr>

<td>**first**</td>

<td>

_instance._first

Returns the first element of an ordered set, and throws an exception if the ordered set contains no elements. To instead return a default value when the ordered set is empty, use FirstOrDefault.

Return Type: Value

</td>

</tr>

<tr>

<td>**firstOrDefault**</td>

<td>

_instance._firstOrDefault

Returns the first element of an ordered set, or a default value if the ordered set contains no elements.

Return Type: Value

</td>

</tr>

<tr>

<td>**flatten**</td>

<td>

_instance._flatten

Return Type: OrderedSet(Value)

</td>

</tr>

<tr>

<td>**flattenRecursive**</td>

<td>

_instance._flattenRecursive

Return Type: OrderedSet(Value)

</td>

</tr>

<tr>

<td>**including**</td>

<td>

_instance._including(_object_)

Return Type: OrderedSet(Value)

<dl>

<dt>object</dt>

<dd>

Type: Value

</dd>

</dl>

</td>

</tr>

<tr>

<td>**join**</td>

<td>

_instance._join(_joinWith__, <iterator expression>_)

Selects only those instances of Value that match the <iterator expression>.

Return Type: OrderedSet(Value)

<dl>

<dt>joinWith</dt>

<dd>

Type: Collection(Object)

</dd>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type Value.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**join**</td>

<td>

_instance._join(_joinWith__, <iterator expression>_)

Selects only those instances of Value that match the <iterator expression>.

Return Type: OrderedSet(Value)

<dl>

<dt>joinWith</dt>

<dd>

Type: Collection(Value)

</dd>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type Value.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**last**</td>

<td>

_instance._last

Returns the last element of a ordered set, and throws an exception if the ordered set contains no elements. To instead return a default value when the ordered set is empty, use LastOrDefault.

Return Type: Value

</td>

</tr>

<tr>

<td>**lastOrDefault**</td>

<td>

_instance._lastOrDefault

Returns the last element of an ordered set, or a default value if the ordered set contains no elements.

Return Type: Value

</td>

</tr>

<tr>

<td>**prepend**</td>

<td>

_instance._prepend(_object_)

Return Type: OrderedSet(Value)

<dl>

<dt>object</dt>

<dd>

Type: Value

</dd>

</dl>

</td>

</tr>

<tr>

<td>**reject**</td>

<td>

_instance._reject(_<iterator expression>_)

Removes all instances of Value that match the <iterator expression>.

Return Type: OrderedSet(Value)

<dl>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type Value.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**select**</td>

<td>

_instance._select(_<iterator expression>_)

Selects only those instances of Value that match the <iterator expression>.

Return Type: OrderedSet(Value)

<dl>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type Value.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**sort**</td>

<td>

_instance._sort(_ascending_)

Return Type: OrderedSet(Value)

<dl>

<dt>ascending</dt>

<dd>

Type: Boolean

</dd>

</dl>

</td>

</tr>

<tr>

<td>**toString**</td>

<td>

_instance._toString

Returns a string representation of the values.

Return Type: String

</td>

</tr>

</tbody>

</table>

* * *

### Sequence(<ElementType>) Type

The Sequence(<ElementType>) type exposes the following members.

**Instance members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**append**</td>

<td>

_instance._append(_object_)

Return Type: Sequence(<ElementType>)

<dl>

<dt>object</dt>

<dd>

Type: <ElementType>

</dd>

</dl>

</td>

</tr>

<tr>

<td>**asBag**</td>

<td>

_instance._asBag

Return Type: Bag(<ElementType>)

</td>

</tr>

<tr>

<td>**asOrderedSet**</td>

<td>

_instance._asOrderedSet

Return Type: OrderedSet(<ElementType>)

</td>

</tr>

<tr>

<td>**asSequence**</td>

<td>

_instance._asSequence

Return Type: Sequence(<ElementType>)

</td>

</tr>

<tr>

<td>**asSet**</td>

<td>

_instance._asSet

Return Type: Set(<ElementType>)

</td>

</tr>

<tr>

<td>**count**</td>

<td>

_instance._count

Return Type: Integer

</td>

</tr>

<tr>

<td>**count**</td>

<td>

_instance._count(_object_)

Return Type: Integer

<dl>

<dt>object</dt>

<dd>

Type: <ElementType>

</dd>

</dl>

</td>

</tr>

<tr>

<td>**emptyIfNull**</td>

<td>

_instance._emptyIfNull

Returns the empty collection if the instance is null; otherwise, the instance is returned.

Return Type: Sequence(<ElementType>)

</td>

</tr>

<tr>

<td>**excludes**</td>

<td>

_instance._excludes(_object_)

Return Type: Boolean

<dl>

<dt>object</dt>

<dd>

Type: <ElementType>

</dd>

</dl>

</td>

</tr>

<tr>

<td>**excludesAll**</td>

<td>

_instance._excludesAll(_c2_)

Return Type: Boolean

<dl>

<dt>c2</dt>

<dd>

Type: Collection(<ElementType>)

</dd>

</dl>

</td>

</tr>

<tr>

<td>**excluding**</td>

<td>

_instance._excluding(_object_)

Return Type: Sequence(<ElementType>)

<dl>

<dt>object</dt>

<dd>

Type: <ElementType>

</dd>

</dl>

</td>

</tr>

<tr>

<td>**exists**</td>

<td>

_instance._exists(_<iterator expression>_)

Returns TRUE if at least one Collection(<ElementType>) instance match the <iterator expression>, otherwise FALSE is returned.

Return Type: Boolean

<dl>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type <ElementType>.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**first**</td>

<td>

_instance._first

Returns the first element of a sequence, and throws an exception if the sequence contains no elements. To instead return a default value when the sequence is empty, use FirstOrDefault.

Return Type: <ElementType>

</td>

</tr>

<tr>

<td>**firstOrDefault**</td>

<td>

_instance._firstOrDefault

Returns the first element of a sequence, or a default value if the sequence contains no elements.

Return Type: <ElementType>

</td>

</tr>

<tr>

<td>**flatten**</td>

<td>

_instance._flatten

Return Type: Sequence(<ElementType>)

</td>

</tr>

<tr>

<td>**flattenRecursive**</td>

<td>

_instance._flattenRecursive

Return Type: Sequence(<ElementType>)

</td>

</tr>

<tr>

<td>**forAll**</td>

<td>

_instance._forAll(_<iterator expression>_)

Returns TRUE if all Collection(<ElementType>) instances match the <iterator expression>, otherwise FALSE is returned.

Return Type: Boolean

<dl>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type <ElementType>.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**includes**</td>

<td>

_instance._includes(_object_)

Return Type: Boolean

<dl>

<dt>object</dt>

<dd>

Type: <ElementType>

</dd>

</dl>

</td>

</tr>

<tr>

<td>**includesAll**</td>

<td>

_instance._includesAll(_c2_)

Return Type: Boolean

<dl>

<dt>c2</dt>

<dd>

Type: Collection(<ElementType>)

</dd>

</dl>

</td>

</tr>

<tr>

<td>**including**</td>

<td>

_instance._including(_object_)

Return Type: Sequence(<ElementType>)

<dl>

<dt>object</dt>

<dd>

Type: <ElementType>

</dd>

</dl>

</td>

</tr>

<tr>

<td>**isEmpty**</td>

<td>

_instance._isEmpty

Return Type: Boolean

</td>

</tr>

<tr>

<td>**join**</td>

<td>

_instance._join(_joinWith__, <iterator expression>_)

Selects only those instances of <ElementType> that match the <iterator expression>.

Return Type: Sequence(<ElementType>)

<dl>

<dt>joinWith</dt>

<dd>

Type: Collection(Object)

</dd>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type <ElementType>.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**join**</td>

<td>

_instance._join(_joinWith__, <iterator expression>_)

Selects only those instances of <ElementType> that match the <iterator expression>.

Return Type: Sequence(<ElementType>)

<dl>

<dt>joinWith</dt>

<dd>

Type: Collection(Value)

</dd>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type <ElementType>.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**last**</td>

<td>

_instance._last

Returns the last element of a sequence, and throws an exception if the sequence contains no elements. To instead return a default value when the sequence is empty, use LastOrDefault.

Return Type: <ElementType>

</td>

</tr>

<tr>

<td>**lastOrDefault**</td>

<td>

_instance._lastOrDefault

Returns the last element of a sequence, or a default value if the sequence contains no elements.

Return Type: <ElementType>

</td>

</tr>

<tr>

<td>**notEmpty**</td>

<td>

_instance._notEmpty

Return Type: Boolean

</td>

</tr>

<tr>

<td>**prepend**</td>

<td>

_instance._prepend(_object_)

Return Type: Sequence(<ElementType>)

<dl>

<dt>object</dt>

<dd>

Type: <ElementType>

</dd>

</dl>

</td>

</tr>

<tr>

<td>**reject**</td>

<td>

_instance._reject(_<iterator expression>_)

Removes all instances of <ElementType> that match the <iterator expression>.

Return Type: Sequence(<ElementType>)

<dl>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type <ElementType>.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**select**</td>

<td>

_instance._select(_<iterator expression>_)

Selects only those instances of <ElementType> that match the <iterator expression>.

Return Type: Sequence(<ElementType>)

<dl>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type <ElementType>.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**single**</td>

<td>

_instance._single

Returns the only element of a collection, and throws an exception if there is not exactly one element in the collection. To instead return a default value when the collection is empty, use SingleOrDefault.

Return Type: <ElementType>

</td>

</tr>

<tr>

<td>**singleOrDefault**</td>

<td>

_instance._singleOrDefault

Returns the only element of a collection, or a default value if the collection is empty. An exception is thrown if there is more than one element in the collection.

Return Type: <ElementType>

</td>

</tr>

</tbody>

</table>

* * *

### Sequence(Value) Type

The Sequence(Value) type exposes the following members.

**Instance members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**append**</td>

<td>

_instance._append(_object_)

Return Type: Sequence(Value)

<dl>

<dt>object</dt>

<dd>

Type: Value

</dd>

</dl>

</td>

</tr>

<tr>

<td>**emptyIfNull**</td>

<td>

_instance._emptyIfNull

Returns the empty collection if the instance is null; otherwise, the instance is returned.

Return Type: Sequence(Value)

</td>

</tr>

<tr>

<td>**excluding**</td>

<td>

_instance._excluding(_object_)

Return Type: Sequence(Value)

<dl>

<dt>object</dt>

<dd>

Type: Value

</dd>

</dl>

</td>

</tr>

<tr>

<td>**first**</td>

<td>

_instance._first

Returns the first element of a sequence, and throws an exception if the sequence contains no elements. To instead return a default value when the sequence is empty, use FirstOrDefault.

Return Type: Value

</td>

</tr>

<tr>

<td>**firstOrDefault**</td>

<td>

_instance._firstOrDefault

Returns the first element of a sequence, or a default value if the sequence contains no elements.

Return Type: Value

</td>

</tr>

<tr>

<td>**flatten**</td>

<td>

_instance._flatten

Return Type: Sequence(Value)

</td>

</tr>

<tr>

<td>**flattenRecursive**</td>

<td>

_instance._flattenRecursive

Return Type: Sequence(Value)

</td>

</tr>

<tr>

<td>**including**</td>

<td>

_instance._including(_object_)

Return Type: Sequence(Value)

<dl>

<dt>object</dt>

<dd>

Type: Value

</dd>

</dl>

</td>

</tr>

<tr>

<td>**join**</td>

<td>

_instance._join(_joinWith__, <iterator expression>_)

Selects only those instances of Value that match the <iterator expression>.

Return Type: Sequence(Value)

<dl>

<dt>joinWith</dt>

<dd>

Type: Collection(Object)

</dd>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type Value.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**join**</td>

<td>

_instance._join(_joinWith__, <iterator expression>_)

Selects only those instances of Value that match the <iterator expression>.

Return Type: Sequence(Value)

<dl>

<dt>joinWith</dt>

<dd>

Type: Collection(Value)

</dd>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type Value.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**last**</td>

<td>

_instance._last

Returns the last element of a sequence, and throws an exception if the sequence contains no elements. To instead return a default value when the sequence is empty, use LastOrDefault.

Return Type: Value

</td>

</tr>

<tr>

<td>**lastOrDefault**</td>

<td>

_instance._lastOrDefault

Returns the last element of a sequence, or a default value if the sequence contains no elements.

Return Type: Value

</td>

</tr>

<tr>

<td>**prepend**</td>

<td>

_instance._prepend(_object_)

Return Type: Sequence(Value)

<dl>

<dt>object</dt>

<dd>

Type: Value

</dd>

</dl>

</td>

</tr>

<tr>

<td>**reject**</td>

<td>

_instance._reject(_<iterator expression>_)

Removes all instances of Value that match the <iterator expression>.

Return Type: Sequence(Value)

<dl>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type Value.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**select**</td>

<td>

_instance._select(_<iterator expression>_)

Selects only those instances of Value that match the <iterator expression>.

Return Type: Sequence(Value)

<dl>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type Value.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**sort**</td>

<td>

_instance._sort(_ascending_)

Return Type: Sequence(Value)

<dl>

<dt>ascending</dt>

<dd>

Type: Boolean

</dd>

</dl>

</td>

</tr>

<tr>

<td>**toString**</td>

<td>

_instance._toString

Returns a string representation of the values.

Return Type: String

</td>

</tr>

</tbody>

</table>

* * *

### Set(<ElementType>) Type

The Set(<ElementType>) type exposes the following members.

**Instance members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**asBag**</td>

<td>

_instance._asBag

Return Type: Bag(<ElementType>)

</td>

</tr>

<tr>

<td>**asOrderedSet**</td>

<td>

_instance._asOrderedSet

Return Type: OrderedSet(<ElementType>)

</td>

</tr>

<tr>

<td>**asSequence**</td>

<td>

_instance._asSequence

Return Type: Sequence(<ElementType>)

</td>

</tr>

<tr>

<td>**asSet**</td>

<td>

_instance._asSet

Return Type: Set(<ElementType>)

</td>

</tr>

<tr>

<td>**count**</td>

<td>

_instance._count

Return Type: Integer

</td>

</tr>

<tr>

<td>**count**</td>

<td>

_instance._count(_object_)

Return Type: Integer

<dl>

<dt>object</dt>

<dd>

Type: <ElementType>

</dd>

</dl>

</td>

</tr>

<tr>

<td>**emptyIfNull**</td>

<td>

_instance._emptyIfNull

Returns the empty collection if the instance is null; otherwise, the instance is returned.

Return Type: Set(<ElementType>)

</td>

</tr>

<tr>

<td>**excludes**</td>

<td>

_instance._excludes(_object_)

Return Type: Boolean

<dl>

<dt>object</dt>

<dd>

Type: <ElementType>

</dd>

</dl>

</td>

</tr>

<tr>

<td>**excludesAll**</td>

<td>

_instance._excludesAll(_c2_)

Return Type: Boolean

<dl>

<dt>c2</dt>

<dd>

Type: Collection(<ElementType>)

</dd>

</dl>

</td>

</tr>

<tr>

<td>**excluding**</td>

<td>

_instance._excluding(_object_)

Return Type: Set(<ElementType>)

<dl>

<dt>object</dt>

<dd>

Type: <ElementType>

</dd>

</dl>

</td>

</tr>

<tr>

<td>**exists**</td>

<td>

_instance._exists(_<iterator expression>_)

Returns TRUE if at least one Collection(<ElementType>) instance match the <iterator expression>, otherwise FALSE is returned.

Return Type: Boolean

<dl>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type <ElementType>.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**flatten**</td>

<td>

_instance._flatten

Return Type: Set(<ElementType>)

</td>

</tr>

<tr>

<td>**flattenRecursive**</td>

<td>

_instance._flattenRecursive

Return Type: Set(<ElementType>)

</td>

</tr>

<tr>

<td>**forAll**</td>

<td>

_instance._forAll(_<iterator expression>_)

Returns TRUE if all Collection(<ElementType>) instances match the <iterator expression>, otherwise FALSE is returned.

Return Type: Boolean

<dl>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type <ElementType>.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**includes**</td>

<td>

_instance._includes(_object_)

Return Type: Boolean

<dl>

<dt>object</dt>

<dd>

Type: <ElementType>

</dd>

</dl>

</td>

</tr>

<tr>

<td>**includesAll**</td>

<td>

_instance._includesAll(_c2_)

Return Type: Boolean

<dl>

<dt>c2</dt>

<dd>

Type: Collection(<ElementType>)

</dd>

</dl>

</td>

</tr>

<tr>

<td>**including**</td>

<td>

_instance._including(_object_)

Return Type: Set(<ElementType>)

<dl>

<dt>object</dt>

<dd>

Type: <ElementType>

</dd>

</dl>

</td>

</tr>

<tr>

<td>**intersection**</td>

<td>

_instance._intersection(_b_)

Return Type: Set(<ElementType>)

<dl>

<dt>b</dt>

<dd>

Type: Bag(<ElementType>)

</dd>

</dl>

</td>

</tr>

<tr>

<td>**intersection**</td>

<td>

_instance._intersection(_s_)

Return Type: Set(<ElementType>)

<dl>

<dt>s</dt>

<dd>

Type: Set(<ElementType>)

</dd>

</dl>

</td>

</tr>

<tr>

<td>**isEmpty**</td>

<td>

_instance._isEmpty

Return Type: Boolean

</td>

</tr>

<tr>

<td>**join**</td>

<td>

_instance._join(_joinWith__, <iterator expression>_)

Selects only those instances of <ElementType> that match the <iterator expression>.

Return Type: Set(<ElementType>)

<dl>

<dt>joinWith</dt>

<dd>

Type: Collection(Object)

</dd>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type <ElementType>.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**join**</td>

<td>

_instance._join(_joinWith__, <iterator expression>_)

Selects only those instances of <ElementType> that match the <iterator expression>.

Return Type: Set(<ElementType>)

<dl>

<dt>joinWith</dt>

<dd>

Type: Collection(Value)

</dd>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type <ElementType>.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**minus**</td>

<td>

_instance._minus(_s_)

Return Type: Set(<ElementType>)

<dl>

<dt>s</dt>

<dd>

Type: Set(<ElementType>)

</dd>

</dl>

</td>

</tr>

<tr>

<td>**notEmpty**</td>

<td>

_instance._notEmpty

Return Type: Boolean

</td>

</tr>

<tr>

<td>**reject**</td>

<td>

_instance._reject(_<iterator expression>_)

Removes all instances of <ElementType> that match the <iterator expression>.

Return Type: Set(<ElementType>)

<dl>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type <ElementType>.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**select**</td>

<td>

_instance._select(_<iterator expression>_)

Selects only those instances of <ElementType> that match the <iterator expression>.

Return Type: Set(<ElementType>)

<dl>

<dt><iterator expression></dt>

<dd>

Type: <iterator expression>

An expression on the form "x | <some boolean expression using x>", where x is of type <ElementType>.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**single**</td>

<td>

_instance._single

Returns the only element of a collection, and throws an exception if there is not exactly one element in the collection. To instead return a default value when the collection is empty, use SingleOrDefault.

Return Type: <ElementType>

</td>

</tr>

<tr>

<td>**singleOrDefault**</td>

<td>

_instance._singleOrDefault

Returns the only element of a collection, or a default value if the collection is empty. An exception is thrown if there is more than one element in the collection.

Return Type: <ElementType>

</td>

</tr>

<tr>

<td>**union**</td>

<td>

_instance._union(_b_)

Return Type: Bag(<ElementType>)

<dl>

<dt>b</dt>

<dd>

Type: Bag(<ElementType>)

</dd>

</dl>

</td>

</tr>

<tr>

<td>**union**</td>

<td>

_instance._union(_s_)

Return Type: Set(<ElementType>)

<dl>

<dt>s</dt>

<dd>

Type: Set(<ElementType>)

</dd>

</dl>

</td>

</tr>

</tbody>

</table>