# Guide for showing an analysis on a website

This guide will demonstrate how to show a genus analysis on your webpage. There are certain 
requirements which are necesssary for this to be successfull which will be explained below.

To use this feature, the webpage where you would like to display the analysis must be on 
the same domain as the application which the analysis belongs to. The reason for this is that 
an iframe cant make cross domain requests, although there may be ways to work around this.

You must obtain the url of the analysis, by using the 'Preview in browser' feature in Genus 
Studio.

There is more than one way to accomplish this, but the main point is that an iframe must be 
placed where you would like the analysis to be displayed. The src property of the iframe must 
be set as the Url of the analysis. Then make some css changes to help it display correctly and 
remove the border which shows on iframes by default.

## Approach 1 - Javascript 

``` 
 var iframe = document.createElement('iframe');
 var analysisUrl = 'https://your.website.no/datasetname/discovery/viewer/#/dataset/datasetname/analysis/3eb7aae4-10df-4b5a-b8f5-d6c3ecc730d2'
 iframe.id = 'iframe1';
 iframe.src = analysisUrl
 document.body.appendChild(iframe);
```

## Approach 2 - HTML

```
<iframe src='https://your.website.no/datasetname/discovery/viewer/#/dataset/datasetname/analysis/3eb7aae4-10df-4b5a-b8f5-d6c3ecc730d2' id='iframe1'></iframe>
```

## CSS 

Some css is required to help the iframe and its contents display correctly. In this example 'body' 
is the container which holds the iframe.

```
body {
    margin: 0;
    overflow: hidden;
    padding: 10px;
}

#iframe1 {
    position: absolute;
    left: 0px;
    width: 100%;
    top: 0px;
    height: 100%;
    border-width: 0;
}

```


