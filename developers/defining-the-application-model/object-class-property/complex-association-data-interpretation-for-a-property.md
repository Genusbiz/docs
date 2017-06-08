## Complex Association Data Interpretation for a Property

Complex association is used as data interpretation when the property can represent any Object Class within a predefined set of Object Classes. A common use of complex association is an Object Class containing a single outbound reference to a varying number of Object Classes. For example, an Object Class which represents a document can be attached to an employee, a customer, a project or an activity.

To define a property with a complex association, follow these steps:

1.  Create a code domain containing one data entry for each Object Class the property can have an outbound reference to. To create a code domain, follow the steps described in the article [Create or Modify a Code Domain](../data/object-class/create-or-modify-a-code-domain.md). In the example above, you would create a code domain with four data entries, _Employee_, _Customer_, _Project_ and _Activity_. If you select **Object Class** as data type for the code domain, you are allowed to add Object Classes as data entries to the code domain.
2.  Next, add a property to your Object Class used for deriving the type of object the Object Class has an outbound reference to. Select **32-bit Integer** as data type, and the code domain created in step 1 as data interpretation for the property.
3.  Finally, add the property used for storing which object the Object Class has an outbound reference to. If not all objects are identified by the same data type, select **Character or String** as data type. Otherwise, select the common data type used to identify objects. Select **Complex Association** as data interpretation for the property. In the **Complex Interpretation Property** box, select the property created in step 2.

All identifiers used to reference objects in a complex association must be globally unique.

If an Object Class contains a property with a complex association, the Genus desktop client will automatically provide Browse Paths to all outbound Object Classes, and you can aggregate mesaures along all outbound Object Classes.