# Metadata for search engine optimization (SEO) of Genus docs articles
The standard Genus metadata section looks like this:
  ```
  ---
  title: <page title displayed in search results. Include the brand Genus. Max. 60 chars.>
  description: <article description that is displayed in search results. 115 to 145 chars.>
  author: <your GitHub user alias, with correct capitalization.>
  ---
  ```
## Usage

The attribute names (_title_, _description_ etc.) are case sensitive.

Copy the section above to the beginning of each article (example [here](https://github.com/GenusAS/docs/edit/master/index.md)).

## Attributes and values

* **title**: Required; important for SEO. Title text appears in the browser tab and as the heading in a search result. Use up to 60 characters including spaces. Note that the site identifier *| Genus Docs* will automatically be added to your title value in the docs build process. 

* **description**: Required; important for SEO (relevance) and site functionality. The description should be at least 115 characters long to 145 characters maximum including spaces. Describe the purpose of your content so customers will know whether to choose it from a list of search results.

* **author**: Required, one value only. List the GitHub account for the primary author. Use your own account if you are unsure, or the account of the editor in charge of the article area (you should find her or his name in the index.md file for the area). Remember to get the capitalization right, it matters.
