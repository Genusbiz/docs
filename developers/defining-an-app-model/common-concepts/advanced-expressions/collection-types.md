# Collection types

A collection represents a group of objects, known as its elements. Some collections allow duplicate elements and others do not. Some are ordered and others unordered.

The following table shows the properties for each collection type:

Collection type | Elements ordered by position | Allows element duplicates
--- | --- | ---
Bag | No | Yes
Ordered Set | Yes | No
Sequence | Yes | Yes
Set | No | No

The Collection type is the base class used by the concrete collection types: Bag, Sequence, Set, and Ordered Set.

The Collection type is a generic type, only used in the context of an concrete element type, i.e. collection of string elements (Collection of String), or collection of integer elements (Collection of Integer).

Collection Descendant | Description | Example
--- | --- | ---
Bag | A Collection that contains elements with no particular order (similar to Set), and (like Sequence) may contain duplicate elements. | All the following expressions represent identical instances of Bag consisting of one 1, two 2s, and one 5, with no particular order.<br><br> Bag { 1, 2, 5, 2 }<br>Bag { 2, 1, 2, 5 }<br>Bag { 5, 2, 2, 1 }<br>Bag { 1, 2, 2, 5 }
Sequence | A Collection that contains elements with an order (similar to OrderedSet), and (like Bag) may contain duplicate elements. | All the following expressions all represent different instances of Sequence.<br><br>Sequence { 1, 2, 5, 2 }<br>Sequence { 2, 1, 2, 5 }<br>Sequence { 5, 2, 2, 1 }<br>Sequence { 1, 2, 2, 5 }
Set | Collection that contains elements with no particular order (similar to Bag) and (like Ordered Set) does not contain duplicate elements. | The following expressions represent identical instances of Set consisting of one 1, one 2, and one 5, with no particular order.<br><br>Set { 1, 2, 5, 2 }<br>Set { 1, 2, 5 }<br>Set { 5, 1, 2 }<br>Set { 5, 2, 1 }
Ordered Set | A Collection that contains elements with an order (similar to Sequence), and (like Set) does not contain duplicate elements.| All the following expressions all represent different instances of OrderedSet.<br><br>OrderedSet { 1, 2, 5 }<br>OrderedSet { 2, 1, 5 }<br>OrderedSet { 5, 2, 1 }

Note that the operations that is provided for Collection also applies for Bag, Sequence, Set, and Ordered Set.

All collection types are described in the article [Data types](data-types.md).