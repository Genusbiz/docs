# Component specific settings.

_The content is under construction. We are sorry for the inconvenience._

## Table

### Allow And-selections

## Map

### Min and Max zoom
Lower zoom levels means that the map shows entire continents, while higher zoom levels means that the map can show details of a city.
When we represent the world at zoom level zero, it’s 256 pixels wide and high. When we go into zoom level one, it doubles its width and height, and can be represented by four 256-pixel-by-256-pixel images.

At each zoom level, each tile is divided in four, and its size (length of the edge, given by the tileSize option) doubles, quadrupling the area. (in other words, the width and height of the world is 256·2zoomlevel pixels):

## Pie

### Pie Explosion

## Summary & Summary Modal

### Show Selected Only

### Display Horizontally

## Calendar Heatmap

### Highlight today (if visible)

This functionality is available on the Calendar Heatmap and will highlight todays date on the 
calendar if todays date in red if it is currently being displayed.

## XYCHarts

### Overlay columns

The Overlay columns option is available in Bars and Columns. If their are multiple values 
selected the columns or bars will usually display side by side. With this options enabled 
they will stack one in front of the other, saving space.

## Barrel, Ticker & Timer

### Interval (seconds)

The interval option is available within the Timer,Ticker and Barrel visualisations.

In Ticker the interval will determine how long it takes one item to pass over the tile.

In Timer the interval will determine the time until the analysis will refresh.

In Barrell the interval will determine how often the barrel will change.


## Delta and Ticker

### Calculate change with negative numbers

