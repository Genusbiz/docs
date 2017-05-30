# Genus App Platform&reg; documentation contributor guide
This is the publically available documentation for the Genus App Platform published at [docs.genus.no](http://genusdocs.azurewebsites.net).

Feel free to contribute! See [Ways to contribute](#ways-to-contribute) on how to do it.

See www.genus.no for more general information about our products and our company.

Our guidelines are as follows:
* Keep the articles short and to the point.
* It is better to start out small and then iterate and evolve more content later.
* Commit consistent and complete articles. If it isn't possible, state clearly in the article that the content is unfinished. Please return to finish it as soon as possible.
* Use images sparingly, as these are hard to maintain over time. Put any images in the media subfolder of your article. If you are submitting a screen shot, make sure that it doesn't contain any customer specific information.
* If you are unsure of the article content, spelling, or otherwise, submit a pull request and our editors will help you out.
* Use [sentence case](https://en.wikipedia.org/wiki/Letter_case#Case_styles) almost everywhere, also in article main headings. The exception is proper nouns like those defined in the [Glossary](developers/defining-the-application-model/glossary.md) (Genus App Platform, Genus Apps etc). See example [here](https://github.com/GenusAS/docs/blob/master/developers/installation-and-configuration/system-requirements.md).
* Use hyphens (-) in article file and folder names, since the markdown previewers do not like spaces in article cross references.

## Ways to contribute

You can submit updates to the Genus App Platform documentation as follows:
* If your are making small changes, like adjusting content of an article, use the [GitHub](https://github.com/GenusAS/docs) user interface. Either find the article in this repository, or visit the article on [docs.genus.no](http://genusdocs.azurewebsites.net) and click the "Improve this doc" link, which will take you to the article in GitHub.
* All articles are written in [markdown](https://en.wikipedia.org/wiki/Markdown). You may contribute directly by submitting pull requests. Employees of Genus may commit directly. All pull requests and commits are reviewed by the internal Genus editorial board.
* If you are making substantial changes to an existing article or a series of articles or adding several new articles, you may want to [do the work locally on your computer](editing-docs-locally.md).

Note that a commit automatically will trigger a rebuild of the docs site, which will be available at [docs.genus.no](http://genusdocs.azurewebsites.net) in about 5 minutes.

Please provide any commit comments in English. It is not necessary to provide commit comments for minor changes like correcting spelling errors or similar.

## How to use markdown

All the articles in the repository use GitHub and DocFX flavored markdown. Here is a list of resources.
* [Markdown basics](https://help.github.com/articles/markdown-basics/) (from GitHub)
* [DocFX flavoured markdown](https://dotnet.github.io/docfx/spec/docfx_flavored_markdown.html)
* [Printable markdown cheatsheet](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)
