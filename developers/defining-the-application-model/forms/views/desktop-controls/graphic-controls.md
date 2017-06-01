# Graphic controls

See [Common Control Properties](common-control-properties.md), in addition to the control specific properties below.


## Image

This control displays an image in one of the following formats: Bitmap, JPEG, GIF, or PNG. The user can cut, copy, paste, delete, load or save an image.


Property |  Description
---------|---------------
Stretch  | Specifies how the image is strethced to fill the available space.<br><br><ul><li>**None** - The content preserves its original size.</li><li>**Fill** - The content is resized to fill the destination dimensions. The aspect ratio is not preserved.</li><li>**Uniform** - The content is resized to fit in the destination dimensions while it preserves its native aspect ratio.</li><li>**Uniform To Fill** - The content is resized to fill the destination dimensions while it preserves its native aspect ratio. If the aspect ratio of the destination rectangle differs from the source, the source content is clipped to fit in the destination dimensions.


## Symbol

The control displays a symbol which is fully scalable. The symbol to display is selected from a symbol library, and can be colored, either by picking a specific color, or by defining automatic formatting. The symbol can be made clickable by assigning and enabling On Click events to it.


Property |  Description
---------|---------------
Source   | The symbol to display.
Color    | The color for the symbol.
