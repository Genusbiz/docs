## Defining Operands

The condition editor allows you to use a wide range of operands. For more information on the meaning of the operands, see [Conditions](../../conditions.md).

**Field or Group**

A field or a group can be selected from the available data sources in the current context. A field represents a simple value or a reference to another object, and can be a single value or a collection ([bag](../../advanced-expressions/collection-types.md)) of values. A group represents a single object or a bag of objects.

To use a field or group as operand, right click the operand and click **Select Field or Group**.

The data sources that are available in the current context are listed to the left. Some can contain only one object and some can contain many objects. When a data source is selected, the available fields and groups for the data source objects are listed to the right. 

<table style="WIDTH: 100%">

<tbody>

<tr>

<td>

The data source Employee can hold one object. The Employee.Employee State therefore contains one value.

![ID430B3947B8B9424E.png](media/ID430B3947B8B9424E.png)

</td>

<td>

The data source Internet Sales can hold many objects. The Internet Sales.Product therefore contains a bag of Products.

![ID9FD1004B6811491E.png](media/ID9FD1004B6811491E.png)

</td>

</tr>

<tr>

<td>

The data source Reseller Sales can contain many objects.

![ID8C3862068340498E.png](media/ID8C3862068340498E.png)

</td>

<td>

The data source Department can contain one object, but the group Employee under Department can contain many objects.

![ID9B26AB4CC0C54DB0.png](media/ID9B26AB4CC0C54DB0.png)

</td>

</tr>

</tbody>

</table>

**Active User Account**

To access the object associated with the currently signed in user, or fields from this object, right click the operand and click **Select Field or Group**, and then in the list of data sources select a data source suffixed **(User Account)**. There can be several such data sources available if the application is defined to support sign in for different user groups (for example employees and customer contacts). The top level of a user account data source always contains one object.

![ID2A01F73EFD87409D.png](media/ID2A01F73EFD87409D.png)

**Active Object Selection**

A condition defined inside a [Table](../../../user-interface/tables/index.md) or a [Form](../../../user-interface/forms/index.md) can access data sources and fields based on Active Object Selection, which are objects selected by the user in the user interface.

To access an active object selection, right click the operand and click **Active Object Selection**.  

![ID3D1651145DD7409B.png](media/ID3D1651145DD7409B.png)

Click the **...** button after the **Group** box, and select data source or group.

![ID58695F6430B449FD.png](media/ID58695F6430B449FD.png)

![IDCBD8F150A1814C48.png](media/IDCBD8F150A1814C48.png)

Click **Single Selected Object** if the selection should only be valid if one object is selected, or click **Selected Objects** if one or more objects are acceptable.

To access a field for the active object selection, click the **...** button after the **Field** box, and select a field.

![IDCDC32DB3393941F4.png](media/IDCDC32DB3393941F4.png)

![IDE785BD6BA7F2438B.png](media/IDE785BD6BA7F2438B.png)

**Code Domain**

To select one code domain value, right click the operand and select a value in the list.

![IDE9D8F1C49EB743DA.png](media/IDE9D8F1C49EB743DA.png)

![ID2AB7156BBD284D8D.png](media/ID2AB7156BBD284D8D.png)

To select many code domain values, right click the operand and select **Object Selection**.

![ID560C1F14FE964060.png](media/ID560C1F14FE964060.png)

Select the values to include, and click **OK**.

![ID2DCC6ADFB0D749E2.png](media/ID2DCC6ADFB0D749E2.png)

![ID963E357782064BE7.png](media/ID963E357782064BE7.png)

**Lookup**  

A lookup finds objects based on a separate condition, and the result is used as an operand in the condition.

If you want find Internet Sales for a set of Territories, and you do not have a data source or group with the specific territories, you can use a lookup. Right click the operand and select **Look up object(s)**.

![ID602D6B4663AA426E.png](media/ID602D6B4663AA426E.png)

A new condition window appears where the condition for the look up objects you want to find can be defined.

![IDF42048341CAE4ED2.png](media/IDF42048341CAE4ED2.png)

When you select a field or group, a lookup specific data source is available.

![IDA0D20E4B731C4407.png](media/IDA0D20E4B731C4407.png)

When the lookup condition is completed, click OK.

![ID28C9B2256304450E.png](media/ID28C9B2256304450E.png)

The completed condition with a lookup.

![ID517DB7B7E1B44474.png](media/ID517DB7B7E1B44474.png)

**Time Function**

A condition may use fields containing time, and often you want to express comparisons to relative time; "Employees hired last month".

To use a Time Function, right click the operand, and select **Time Function**.

![ID5D217A7618494D9E.png](media/ID5D217A7618494D9E.png)

In the Time Function window, advanced functions for relative time can be defined.

![IDCFC2D9B1219B4E7D.png](media/IDCFC2D9B1219B4E7D.png)

Often the starting point for a time function is today, but you can use other dates in the **Time Reference** box.

![ID47E7732DAA5E43F8.png](media/ID47E7732DAA5E43F8.png)

In the **Time Function** window, click **Add** to add a time offset.

![ID12CBC612F474448E.png](media/ID12CBC612F474448E.png)

To shift time, click **Shift**, and specify how many days, months, etc to shift, and whether to shift back or forward.

![ID49CCEB1DEA334C53.png](media/ID49CCEB1DEA334C53.png)  ![ID09A83B6E6C564D46.png](media/ID09A83B6E6C564D46.png)

To shift to the start or end of a period, click **Shift to** and specify whether to shift to the start or the end, and which period to use.

![ID0D41FAB4B74C4771.png](media/ID0D41FAB4B74C4771.png)  ![ID8182A19C75E54693.png](media/ID8182A19C75E54693.png)

Click ok to add the offset to the time function. Several steps can be added to make advanced functions.

![IDE0F1864889C94661.png](media/IDE0F1864889C94661.png)

Click OK to finish the time function.

![IDCF22EC2123D043C3.png](media/IDCF22EC2123D043C3.png)

**Formula**

A formula can contain simple calculations or advanced functions. For more information on formulas, see [Advanced Expressions](../../advanced-expressions.md).

To use a formula, right click the operand, and select **Enter a formula**.

![IDEBC097F9387740E8.png](media/IDEBC097F9387740E8.png)

In the formula window, enter the formula to use, and click **OK**.

![IDE9C2CD33AE1A421A.png](media/IDE9C2CD33AE1A421A.png)  ![IDD98D3095FF77431B.png](media/IDD98D3095FF77431B.png)

![ID51664F0CBB2B4B0C.png](media/ID51664F0CBB2B4B0C.png)

**Constant**  

A constant can be used as an operand when the data type for the other operand is a simple value.

To use a constant, right click the operand and select **Enter a number**, **Enter a text**, **Select a date**, etc, according to the date type of the operand.

![ID493CCA432198475B.png](media/ID493CCA432198475B.png)

If the constant data type is a date, in the **Select Date** window, select a date and click **OK**.

![IDE7877BF359A04A3A.png](media/IDE7877BF359A04A3A.png)

Otherwise, in the input field, enter the constant.

![ID15340DDE07C94D42.png](media/ID15340DDE07C94D42.png)

Click **OK**.

![ID64D0A0029E0841CD.png](media/ID64D0A0029E0841CD.png)