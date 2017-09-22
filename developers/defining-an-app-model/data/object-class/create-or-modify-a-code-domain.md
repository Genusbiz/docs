# Create or Modify a Code Domain

1.  [Open Genus Studio](../../getting-started/how-to-open-genus-studio.md).
2.  In the **Directory** tree, click the **Object Classes** folder.
3.  To create a new code domain, in the **File** menu, point to **New**, and then click **Code Domain**. To modify an exisiting code domain, right-click the code domain in the table to to the right, and then in the shortcut menu, click **Open**.
4.  In the **Name** box, type a name for the code domain.
5.  In the **Description** box, type a description for the code domain.
6.  To allow users to aggrgate data from other Object Classes along objects from this code domain, click the **Allow this Object Class to be used as a dimension when aggregating data** check box.
7.  To specify a symbol for the code domain, click **Change** in the **Symbol** box and select a bitmap file. Note that the size of the bitmap can be a maximum of 16x16 pixels.
8.  Click the **Data Entries** tab.
9.  In the **Data Type box**, click ![code_domain_data_type_selector.png](media/code_domain_data_type_selector.png) and select the data type for code values. Code values can be of type **Integer**_,_**String**or **Object Class_._** If code values are string based, in the **Data Size** box, type or select the maximum number of characters the code value can hold. To create a code domain used to [derive a complex type](../object-class-property/complex-association-data-interpretation-for-a-property.md "Complex Association Data Interpretation for a Property"), select **Object Class** in the **Data Type box**.
10.  In the **Data Entries** list, add new or modify existing codes. To add a new code, click **Add**. To modify an existing code, click **Modify**. If you have selected a simple data type, such as **Integer** or **String**, each code is defined by a code value, a display name and a screen tip. If you have selected **Object Class** as the data type, the code is defined by a reference to an Object Class in your Directory, and the name is the object class name, which can be modified within the code domain. Note that code value of type String which contains character as underscore (_) and period (.) is not valid.
11.  To change the order of the codes, select a code in the list, and then click **Move Up** or **Move Down**.
12.  Within a code domain, you can mark a code as default. The code marked as default will be used as the default value for properties on objects with a link to the code domain. To mark a code as default, select the code in the list, and then click **Set Default**.This option is not available for code domains with a data type equal to **Object Class**.

See Also

*   [Complex Association Data Interpretation for a Property](../object-class-property/complex-association-data-interpretation-for-a-property.md)