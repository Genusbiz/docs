# Map

Maps can have one or more layers. Layers are either map tiles or data layers.

## Map tiles
### OSM
  Defaults to Open Street Map tiles, but other sources can be used by providing a server url, e.g.: ``http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png``
### WMS-C

## Data layers
All data layers (except geoJSON layer) requires a data source with a norhitng and easting property. The available layer type are:
### Point layer
This is the simplest layer. It shows points on the map and can be configured with a symbol and a symbol color.
### Hotspot layer
This layer shows circle markers that can be configured with data boun size and color.
### Heatmap layer
This layer is a heatmap of points that must have a value representing its intensity. Max and min intensity properties are optiononal, if none are set, the intensity will scale from the lowest to the highest value.
### GeoJSON layer
The GeoJSON layer draws GeoJSON features on the map. The GeoJSON features are provided by a link to a GeoJSON-file. The GeoJSON features are mapped to a data source using a property, and only features that are present in both the GeoJSON file and the data source are displayed. All GeoJSON properties can be shown in the screen tip, along with values.
