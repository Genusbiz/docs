## Simple Data Interpretations for a Property

**Boolean**

Data for the property represents a truth value, either TRUE or FALSE, coded 1 and 0, respectively. In Forms, you can use controls like radio buttons and check boxes to update the value for the property.

Data types: *16-bit Integer, 32-bit Integer, 64-bit Integer'

**Color**

Data for the property represents a color. In Forms, you can use controls for selecting a color code to update the value for the property.

Data types: *16-bit Integer, 32-bit Integer, 64-bit Integer*

**Date - (DD.MM).YYYY**

Data for the property represents an integer which can be interpreted as a date, month or year. The day and month part of the date is optional.

Data types: *16-bit Integer, 32-bit Integer, 64-bit Integer*

**Date - (MM).YYYY**

Data for the property represents an integer which can be interpreted as a month or year. The month part of the date is optional.

Data types: *16-bit Integer, 32-bit Integer, 64-bit Integer*

**Date - DD.MM.YYYY**

Data for the property represents an integer which can be interpreted as a date.

Data types: *16-bit Integer, 32-bit Integer, 64-bit Integer*

**Directory URL**

Data for the property represents a path to a folder located on a computer. In Forms, you can use controls for selecting a folder to update the value for the property.

Data types: *Character or String*

**Duration**

Data for the property represents a time interval specified as a number of hours and a number of minutes, for example is a time interval of 25 hours and 30 minutes visualized as "25:30".

Data types: *64-bit Integer*

**E-Mail**

Data for the property represents an e-mail address.

Data types: *Character or String*

**File Data**

Data for the property represents an embedded file. Used to attach a file to an object. In Forms, actions for working with the file will be supported based on the content of the file. Only one property in an Object Class can be defined with this interpretation. In addition, a property with interpretation **File Name** must be provided for the Object Class.

Data types: *Binary Fixed, Binary Large Object, Binary Variable, Textual Large Object*

**File Extension**

Data for the property represents the extension of an embedded file (**File Data**). Only one property in an Object Class can be defined with this interpretation.

Data types: *Character or String*

**File Name**

Data for the property represents the name of an embedded file (**File Data**). A property with this interpretation is required if a property with interpretation **File Data** is defined. Only one property in an Object Class can be defined with this interpretation.

Data types: *Character or String*

**File Read Only**

Data for the property represents the read only state of an embedded file (**File Data**). If the value of this property is True when the file is opened, the file is opened as read only. Only one property in an Object Class can be defined with this interpretation. The setting overrides any security settings defined for an object. Setting a file to read-only, even if users have permissions to modify the content, helps you to protect the file from accidental changes and deletion.

Data types: *Boolean*

**File Reference**

Data for the property represents a reference to an object containing a property with interpretation **File Data**. For example, the Object Class containing the actual file data is used for storing files for different types of objects. Only one property in an Object Class can be defined with this interpretation.

Data types: *Character or String, Float, 16-bit Integer, 32-bit Integer, 64-bit Integer*

**File Size**

Data for the property represents the size (bytes) of an embedded file (**File Data**). Only one property in an Object Class can be defined with this interpretation.

Data Types: *16-bit Integer, 32-bit Integer, 64-bit Integer*

**File URL**

Data for the property represents a path and name of a file located on a computer. In Forms, you can use controls for selecting a file to update the value for the property.

Data types: *Character or String*

**Free Text**

Data for the property represents unformatted text. Used to interpret binary data as character data, and to identify string data containing text representing more descriptive information, such as a comment.

Data types: *Binary Fixed, Binary Large Object, Binary Variable, Textual Large Object, Character or String*

**Identifier Counter**

Data for the property represent the next available identifier in an Object Class of type **Identifier Domain** containing a sequential counter. The value for the property is incremented by one each time an identifier is requested from the Identifier Domain.

Data Types: *16-bit Integer, 32-bit Integer, 64-bit Integer*

**Identifier State**

Data for the property represents the state of an identifier in an Object Class of type **Identifier Domain** containing a pool of identifiers. The state is used to mark an identifier as available or in use.

Data Types: *16-bit Integer, 32-bit Integer, 64-bit Integer*

**Internet URL**

Data for the property represents an Internet URL. In Forms, properties with this interpretation is displayed as hyperlinks.

Data types: *Character or String*

**Image**

Data for the property represents an image, for example a photo. In Forms, you can use an image control to display and update the value for the property.

Data types: *Binary Fixed, Binary Large Object, Binary Variable*

**Password**

Data for the property represents a password. In Forms, a special character is displayed in place of any entered text.

Data types: *Character or String*

**Rich Text Format**

Data for the property represents formatted text (RTF). In Forms, a Rich Text Edit control can be used to display and edit the text.

Data types: *Binary Fixed, Binary Large Object, Binary Variable*

**Rich Text Format (without embedded objects)**

Data for the property represents formatted text (RTF). The text does not contain embedded objects such as pictures. In Forms, a Rich Text Edit control can be used to display and edit the text.

Data types: *Binary Fixed, Binary Large Object, Binary Variable*

**Shape**

Data for the property represents a shape (square, circle, diamond, arrow left, arrow right, arrow up, arrow down, cross hair, cross hair left, cross hair right, cross hair up, cross hair down, bubble, gradient circle, cross, line, pie). Used to present data in a matrix control.

Data Types: *16-bit Integer, 32-bit Integer, 64-bit Integer*

**Thumbnail File Data**  
Data for the property represents an embedded png image file. Used on app platforms to upload a file with image content type, for use as a down scaled thumbnail. The image is down scaled to the pixel size specified in the Thumbnail Pixel Size property on the Object Class. Only one property in an Object Class can be defined with this interpretation.  

Data types: *Binary Fixed, Binary Large Object, Binary Variable, Textual Large Object  *

**Thumbnail File Size**  
Data for the property represents the size (bytes) of an embedded image file (Thumbnail File Data). Only one property in an Object Class can be defined with this interpretation.  

Data Types: *16-bit Integer, 32-bit Integer, 64-bit Integer  *

**Time (HH:MM)**

Data for the property represents an integer which can be interpreted as a time of the day.

Data Types: *16-bit Integer, 32-bit Integer, 64-bit Integer*