# GitHub contribution code

The release build of docs it build using the exported template. When a new versions of DocFX is released, there may be changes that are not effectuated without updating the _exported_templates. The exported template contains some customized code for showing contributors. Below is a step by step procedure for updating the exported template. All changes are done locally, tested and pushed to the repository.

**Local backup (optional)**
Copy the folder _exported_templates to a temporary location for backup and base for code changes.

Delete all content of _exported_templates

**Create a new default template**
Open a command window and navigate to your root catalog. Run the command docfx template export default.

**Insert contributors code**
Edit these three documents, _master.tmpl, docfx.css and docfx.js.

_\_master.tmpl_
Add
```xml
<div id="contributors"></div>
```
into the `<article>`-element, before the `{{!body}}`-tag.

_docfx.css_
Add
```css
#contributorimg{
    border-radius: 50%;
}
```
after the `a.disable:hover-element`

_docfx.js_
Add
```javascript
loadContributors();
```
after all initial function calls, last as of now is `renderTabs()`.

Add
```javascript
function containsName(array, login){
    var i =array.length; 
    while(i--){
        if(array[i].login == login){
            return true;
        }
    }
    return false;
}

function loadContributors() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            generateContributorIcons(JSON.parse(this.responseText));
        }
    };
    
    var relativePath = window.location.pathname.replace('.html','.md')
    if (relativePath==="/"){
        relativePath = "/index.md"
    };

    xhttp.open("GET", "https://api.github.com/repos/GenusBiz/docs/commits?path="+relativePath, true);
    xhttp.send();
}

function generateContributorIcons(list){
    var authors = []
    var lastCommit = list[0].commit.author.date.substr(0,10)
    for (var i=0; i<list.length; i++){
        if(!containsName(authors, list[i].author.login)){
            authors.push({
                name: list[i].commit.author.name,
                email: list[i].commit.author.email,
                login: list[i].author.login,
                avatarUrl: list[i].author.avatar_url,
                html_url: list[i].author.html_url,
                login: list[i].author.login
            });
        }
    }
    
    var lastcommitdate = document.createTextNode(lastCommit)
    var divider = document.createTextNode(' • ')
    var textContributors = document.createTextNode('Contributors ')
    document.getElementById("contributors").appendChild(lastcommitdate)
    document.getElementById("contributors").appendChild(divider)
    document.getElementById("contributors").appendChild(textContributors)
    
    for (var i=0; i<authors.length; i++){
        var img = document.createElement("IMG")
        img.src = authors[i].avatarUrl
        img.name = authors[i].name
        img.height = 28
        img.width = 28
        img.alt = authors[i].login
        img.id ="contributorimg"
        var a = document.createElement("a")
        a.href = authors[i].html_url
        a.alt = authors[i].login
        a.title = authors[i].name
        document.getElementById("contributors").appendChild(a).appendChild(img)
    }
}
```

after the windows.refresh() function declaration.

**Test changes**

Build the local docfx version with the template.
```cmd
docfx docfx.json -t _exported_templates\default --serve
```
And verify that the site is running correctly and that contributors are loaded.

**Commit changes**