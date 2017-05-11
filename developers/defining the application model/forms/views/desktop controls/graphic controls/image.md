## Image

This control displays an image in one of the following formats: Bitmap, JPEG, GIF, or PNG. The user can cut, copy, paste, delete, load or save an image.

**Properties**

See [Common Control Properties](../common control properties.md), in addition to the control specific properties below.

**General**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td>Stretch</td>

<td>

Specifies how the image is strethced to fill the available space.

**None**

The content preserves its original size.

**Fill**

The content is resized to fill the destination dimensions. The aspect ratio is not preserved.

**Uniform**

The content is resized to fit in the destination dimensions while it preserves its native aspect ratio.

**Uniform To Fill**

The content is resized to fill the destination dimensions while it preserves its native aspect ratio. If the aspect ratio of the destination rectangle differs from the source, the source content is clipped to fit in the destination dimensions.

</td>

</tr>

</tbody>

</table>