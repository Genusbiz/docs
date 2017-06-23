# Guidelines for html table conversion

Tables converted from the old documentation are coded in html. Many of these can be converted to [markdown](https://en.wikipedia.org/wiki/Markdown) to simplify maintenance and imporve the readability of the markdown file.

There are some complex tables with cells containing images, long paragraphs and general complex structures where the conversion to markdown syntax will be difficult and may give the above mentioned advantages. These are best left "as is" for now, but the can be comressed to take less space, e.g. remove double newlines between html tags.

Cell content must be on a single line so when the cell contains newlines og lists they must be converted using html-code. See sections [newline in a markdown table](#newline-in-a-markdown-table) and [lists in a markdown table](#lists-in-a-markdown-table).

## Example of a table conversion

### Html table from a converted article
```html
<table style="WIDTH: 100%">
  <tbody>
    <tr>
      <th>Shortcut</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>CTRL+N</td>
      <td>New object
      </td>
    </tr>
    <tr>
      <td>CTRL+S</td>
      <td>Save changes</td>
    </tr>
  </tbody>
</table>
```


### Converted to markdown
```markdown
| Shortcut | Description   |
|----------|---------------|
| CTRL+N   | New object    |
| CTRL+S   | Save changes  |
```



## Newline in a markdown table
Newlines in table cells are created using html code ```<br>```.

### Example
```markdown
| Shortcut | Description                            |
|----------|----------------------------------------|
| CTRL+N   | New object<br><br>Inserts a new object |
| CTRL+S   | Save changes                           |
```
### Result
| Shortcut | Description                            |
|----------|----------------------------------------|
| CTRL+N   | New object<br><br>Inserts a new object |
| CTRL+S   | Save changes                           |


## Lists in a markdown table
Lists are converted using html code ```<ul>``` for _unnumbered lists_ or ```<ol>``` for _ordered lists_.```<li>```, and subsequently ```<li>``` for the bullet poiint inserts

### Example
```markdown
| List type  | Html code                                               |
|------------|---------------------------------------------------------|
| Unnumbered | <ul><li>Bullet point 1</li><li>Bullet point 2</li></ul> |
| Ordered    | <ol><li>Bullet point 1</li><li>Bullet point 2</li></ol> |
```
### Result
| List type  | Html code                                               |
|------------|---------------------------------------------------------|
| Unnumbered | <ul><li>Bullet point 1</li><li>Bullet point 2</li></ul> |
| Ordered    | <ol><li>Bullet point 1</li><li>Bullet point 2</li></ol> |