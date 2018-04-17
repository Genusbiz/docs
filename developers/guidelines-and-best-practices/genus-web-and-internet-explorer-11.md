# Genus Web and Internet Explorer 11

When creating forms that will be viewed in IE11, it is important to test this very thoroughly, as IE11 is in many cases more picky about the layout than Chrome, Firefox and Edge. This is especially true when it comes to vertical and horizontal alignment of groups. 

When something does not appear, or looks wrong, in IE11, but looks good in other browsers, the first thing that should be looked at is vertical and horizontal alignment. Make sure it is a sensible layout and make sure you understand how these properties translates to HTML and how the HTML works. For example; something that has item alignment bottom might appear over something that is aligned stretch or top, if the parent element is aligned top. 

If something does not appear at all, it might be because all elements are stretched, and so they depend on each other. The parent ask the child how big it should be, and the child ask the parent how much space it has. This is not handled well by IE11, but works in other browsers. This can be solved by either using some other alignment for one of them, or setting a specific height or width somewhere. 

Another problem that have been noticed is having a group with scroll content inside another group which also has scroll content.

Note that future support for Internet Explorer may be removed based on usage. See our [system requirements](../installation-and-configuration/system-requirements.md) for more information.
