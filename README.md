# Genus Apps&reg; documentation contributor guide
This is the publicly available documentation for the Genus Apps published at [docs.genus.no](https://docs.genus.no).

Feel free to contribute! See [Ways to contribute](#ways-to-contribute) on how to do it.

See www.genus.no for more general information about our products and our company.

## Guidelines
* Keep the articles short and to the point. But not too small - i.e. if you are describing a topic containing five concepts, each with 1-2 sections, it is probably better to collect these in one article to avoid unnecessary clicking and increase readability.
* It is nevertheless better to start out small and then iterate and evolve more content later.
* Commit consistent and complete articles. If it isn't possible, state clearly in the article that the content is unfinished, like the example below - and then return to finish it as soon as possible. And yes, write it in _italics_ (copy and paste the text below).
```
_The content is under construction. We are sorry for the inconvenience._
```
* If you are trying to improve upon an article, but find it hard to describe the functionality, it may be Genus Apps that needs improvement. Please let us know through your support channel!
* Use images sparingly, as these are hard to maintain over time. If you are submitting a screen shot, make sure that it doesn't contain any customer specific information. Use more images for _Users_ than _Developers_.
* Put images, templates, documents etc in a subfolder of your article. Always give the subfolder the name **media** (and *not* img, templates, documents or any other names...).
* If you are unsure of the article content, spelling, or otherwise, submit a pull request and our editors will help you out.
* Use [sentence case](https://en.wikipedia.org/wiki/Letter_case#Case_styles) almost everywhere, also in article main headings. The exception is proper nouns like Genus Apps, Genus Studio, Genus Apps for Web, Genus Apps for Desktop, and Genus Services - and of course other common, proper nouns like Windows, Wikipedia etc. Words like "app model", "navigation pane", "view button", "table", "data source" etc. are to be written in lowercase.
* Always use **bold** when refering to user interface elements - have a look [here](developers/defining-an-app-model/user-interface/navigation-pane.md) for an example.
* Use hyphens (-) in article file and folder names instead of spaces, since markdown previewers do not like spaces in article cross references. Example: "Genus-AS-Main-presentation.pptx". 
* The main article in each folder is to be named index.md. In this way, everyone refering to the subject contained in all the articles in this folder, may simply refer to this index.md article.
* Article main headers should be [H1](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#headers) (`# H1`), subheadings H2 (`## H2`) etc. Example [here](developers/defining-an-app-model/general-settings/data-sets.md).
* Each article should have metadata to improve visibility for web search engines (Search Engine Optimalization - SEO). Read more [here](metadata-for-search-engine-optimization.md).
* A template article is available containing the SEO-section and the first headings. Copy the content of the file to the new article and start editing. The template article is located in the root folder [here](template-article.md).
* If your article describes functionality available only in specific releases of Genus Apps, specify this inside the article. Example [here](developers/installation-and-configuration/system-requirements.md).

## Transition period guidelines
We are currently in a transition period from our old documentation structure. Most of the old documentation has been converted automatically, but a couple of things remain. We appreciate your assistance with the following:
* Remove the old "Topics" section at the bottom of each article. The left (and right) side menu should give you the topics. We do not want to maintain a third one manually.
* Change the term "Application" to "App".
* Convert Html tables to [Markdown tables](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#tables). Also see [guidelines for html table conversion](guidelines-for-html-table-conversion.md) for examples and guidelines for converting tables from the old documentation structure.
* Change header capitalisation to [sentence case](https://en.wikipedia.org/wiki/Letter_case#Case_styles). Example [here](developers/installation-and-configuration/system-requirements.md).
* Automatically converted media files have ended up with a GUID file name like "ID3C264089A1BE49C2.IDC90AF0450EE242F6.png". Please change to a "normal" descriptive name - or simply delete the file if it is a screen dump that is hard to maintain (ref. the guidelines regarding screen shots above).

## Known issues
* The selection highlighting in the right-side "In this article" (side affix) pane doesn't behave correctly for articles with many subheadings. Also, the last letters in the side affix headings are sometimes cut-off.

## Ways to contribute
You can submit updates to the Genus Apps documentation as follows:
* If your are making small changes, like adjusting content of an article, use the [GitHub](https://github.com/GenusAS/docs) user interface. Either find the article in this repository, or visit the article on [docs.genus.no](https://docs.genus.no) and click the "Improve this doc" link, which will take you to the article in GitHub.
* All articles are written in [markdown](https://en.wikipedia.org/wiki/Markdown). You may contribute directly by submitting pull requests. Employees of Genus may commit directly. All pull requests and commits are reviewed by the internal Genus editorial board.
* If you are making substantial changes to an existing article or a series of articles or adding several new articles, you may want to [do the work locally on your computer](editing-docs-locally.md).

Note that a commit automatically will trigger a rebuild of the docs site, which will be available at [docs.genus.no](https://docs.genus.no) in about 5 minutes.

Please provide any commit comments in English. It is not necessary to provide commit comments for minor changes like correcting spelling errors or similar.

## How to use markdown
All the articles in the repository use GitHub and DocFX flavored Markdown. Here is a list of resources.
* [Example article](example-article.md)
* [Markdown basics](https://help.github.com/articles/basic-writing-and-formatting-syntax/) (from GitHub)
* [DocFX flavoured Markdown](https://dotnet.github.io/docfx/spec/docfx_flavored_markdown.html)
* [Markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
* [Printable Markdown cheatsheet](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)

To link to a heading within an article, use # before the heading name, replacing any spaces with hyphens, like this link to the definition of the term [App Model](terminology.md#app-model) in the Terminology article:
```
[App Model](terminology.md#app-model)
```
Note that tab sheets are available in DocFX flavoured markdown. It is called [tabbed content](https://dotnet.github.io/docfx/spec/docfx_flavored_markdown.html?tabs=tabid-2%2Ctabid-b#tabbed-content). 
