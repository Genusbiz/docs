---
title: Genus Docs example article
description: An example article demonstrating the most common DocFX flavoured Markdown used in Genus Docs for Genus Apps
author: eriksandnes
---
```md
---
title: Genus Docs example article
description: An example article demonstrating the most common DocFX flavoured Markdown used in Genus Docs for Genus Apps
author: eriksandnes
---
```

# Example article
All articles should start with a meta data section for search engine optimization, see the article [metadata-for-search-engine-optimization](metadata-for-search-engine-optimization.md).

The first heading in an article should be an H1 heading. An article will typically start with a short paragraph describing the content of the article.

Remember to update the _toc.yml_ in _developers/_ or _users/_


## Usage of headers in an article
Subsequent headers are defined by using two or more hash characters in the heading. These headers will define bookmarks in the _In this article_ section in the upper right corner.

## Links
Here is a link to the [Genus AS](http://www.genus.no) web site, a link to the [lists](#lists) section within this article and a link to the section [ways to contribute](readme.md#ways-to-contribute) in the [readme](readme.md) article.


## Simple text formatting
*Italic* and **bold**, or if preferred _italic_ and __bold__.


## Lists

### Unnumbered

* Item 1
* Item 2
  - Sub-item 2.1   

### ordered list
Markdown does not support nested ordered lists, such as _1_, _2_ and _2.1_.

1. Item 1
2. Item 2
    - Sub-item 2.1


## Table

Column 1    | Column 2
------------|--------------
Contect 1   | Content 2


## Code block

    Ident by four space to create a code block.

    A code block can space over multiple paragraphs.

It is also possible to use three backthicks to start and end code blocks. These can also be syntax highlighted using a syntax format tag, such as _xml_ after the three starting backthicks.

```python
import time
# Quick, count to ten!
for i in range(10):
    # (but not *too* quick)
    time.sleep(0.5)
    print i
```

## Block quotes
> This is a block quote 
>  
> with multiple lines

## Note
> [!NOTE]
> This is a note

````

# Example article
All articles should start with a meta data section for search engine optimization, see the article [metadata-for-search-engine-optimization](metadata-for-search-engine-optimization.md).

The first heading in an article should be an H1 heading. An article will typically start with a short paragraph describing the content of the article.

Remember to update the _toc.yml_ in _developers/_ or _users/_


## Usage of headers in an article
Subsequent headers are defined by using two or more hash characters in the heading. These headers will define bookmarks in the _In this arictle_ section in the upper right corner.

## Links
Here is a link to the [Genus AS](http://www.genus.no) web site, a link to the [lists](#lists) section within this article and a link to the section [ways to contribute](readme.md#ways-to-contribute) in the [readme](readme.md) article.


## Simple text formatting
*Italic* and **bold**, or if preferred _italic_ and __bold__.


## Lists

### Unnumbered

* Item 1
* Item 2
  - Sub-item 2.1   

### ordered list
Markdown does not support nested ordered lists, such as _1_, _2_ and _2.1_.

1. Item 1
2. Item 2
    - Sub-item 2.1


## Table

Column 1    | Column 2
------------|--------------
Contect 1   | Content 2


## Code block

    Ident by four space to create a code block.

    A code block can space over multiple paragraphs.

It is also possible to use three backthicks to start and end code blocks. These can also be syntax highlighted using a syntax format tag, such as _xml_ after the three starting backthicks.

```python
import time
# Quick, count to ten!
for i in range(10):
    # (but not *too* quick)
    time.sleep(0.5)
    print i
```

## Block quotes
> This is a block quote 
>  
> with multiple lines

## Note
> [!NOTE]
> This is a note
