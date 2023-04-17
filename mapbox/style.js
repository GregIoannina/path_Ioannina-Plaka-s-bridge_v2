
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "OSMStandard_0": {
            "type": "raster",
            "tiles": ["http://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "googlehybrid_1": {
            "type": "raster",
            "tiles": ["http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}"],
            "tileSize": 256
        },
        "_2": {
            "type": "geojson",
            "data": json__2
        }
                    ,
        "_3": {
            "type": "geojson",
            "data": json__3
        }
                    ,
        "_4": {
            "type": "geojson",
            "data": json__4
        }
                    ,
        "19451960_5": {
            "type": "geojson",
            "data": json_19451960_5
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#b46c6c"
            }
        },
        {
            "id": "lyr_OSMStandard_0_0",
            "type": "raster",
            "source": "OSMStandard_0"
        },
        {
            "id": "lyr_googlehybrid_1_1",
            "type": "raster",
            "source": "googlehybrid_1"
        },
        {
            "id": "lyr__2_0",
            "type": "line",
            "source": "_2",
            "layout": {},
            "paint": {'line-width': 3.214285714285714, 'line-opacity': 1.0, 'line-color': '#cce529'}
        }
,
        {
            "id": "lyr__3_0",
            "type": "line",
            "source": "_3",
            "layout": {},
            "paint": {'line-width': 4.285714285714286, 'line-opacity': 1.0, 'line-color': '#d641c0'}
        }
,
        {
            "id": "lyr__4_0",
            "type": "line",
            "source": "_4",
            "layout": {},
            "paint": {'line-width': 4.999999999999999, 'line-opacity': 1.0, 'line-color': '#35d8db'}
        }
,
        {
            "id": "lyr_19451960_5_0",
            "type": "line",
            "source": "19451960_5",
            "layout": {},
            "paint": {'line-width': 3.214285714285714, 'line-opacity': 1.0, 'line-color': '#e6a117'}
        }
],
}