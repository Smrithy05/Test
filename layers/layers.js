var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_DIGITALELEVATIONMODEL_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'DIGITAL ELEVATION MODEL<br />\
    <img src="styles/legend/DIGITALELEVATIONMODEL_2_0.png" /> 88<br />\
    <img src="styles/legend/DIGITALELEVATIONMODEL_2_1.png" /> 95<br />\
    <img src="styles/legend/DIGITALELEVATIONMODEL_2_2.png" /> 102<br />\
    <img src="styles/legend/DIGITALELEVATIONMODEL_2_3.png" /> 108<br />\
    <img src="styles/legend/DIGITALELEVATIONMODEL_2_4.png" /> 115<br />\
    <img src="styles/legend/DIGITALELEVATIONMODEL_2_5.png" /> 122<br />\
    <img src="styles/legend/DIGITALELEVATIONMODEL_2_6.png" /> 129<br />\
    <img src="styles/legend/DIGITALELEVATIONMODEL_2_7.png" /> 135<br />\
    <img src="styles/legend/DIGITALELEVATIONMODEL_2_8.png" /> 140<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DIGITALELEVATIONMODEL_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8539364.521861, 1198213.183124, 8546229.223793, 1203185.699806]
        })
    });
var lyr_DEM_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'DEM<br />\
    <img src="styles/legend/DEM_3_0.png" /> 88<br />\
    <img src="styles/legend/DEM_3_1.png" /> 140<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DEM_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8539364.521861, 1198213.183124, 8546229.223793, 1203185.699806]
        })
    });
var lyr_HILLSHADE_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'HILLSHADE<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/HILLSHADE_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8539364.521861, 1198213.183124, 8546229.223793, 1203185.699806]
        })
    });
var lyr_SLOPE_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'SLOPE<br />\
    <img src="styles/legend/SLOPE_5_0.png" /> 0<br />\
    <img src="styles/legend/SLOPE_5_1.png" /> 14.8279<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SLOPE_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8539337.075973, 1198174.183122, 8546257.663948, 1203224.859159]
        })
    });
var lyr_TOPOSHEET_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'TOPOSHEET<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/TOPOSHEET_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8539342.194894, 1198184.807107, 8546244.225962, 1203205.260749]
        })
    });
var format_SOIL_7 = new ol.format.GeoJSON();
var features_SOIL_7 = format_SOIL_7.readFeatures(json_SOIL_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SOIL_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SOIL_7.addFeatures(features_SOIL_7);
var lyr_SOIL_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SOIL_7, 
                style: style_SOIL_7,
                popuplayertitle: 'SOIL',
                interactive: true,
    title: 'SOIL<br />\
    <img src="styles/legend/SOIL_7_0.png" /> Black Soil<br />\
    <img src="styles/legend/SOIL_7_1.png" /> Hill Soil<br />\
    <img src="styles/legend/SOIL_7_2.png" /> <br />' });
var format_GEOLOGY_8 = new ol.format.GeoJSON();
var features_GEOLOGY_8 = format_GEOLOGY_8.readFeatures(json_GEOLOGY_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOLOGY_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOLOGY_8.addFeatures(features_GEOLOGY_8);
var lyr_GEOLOGY_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOLOGY_8, 
                style: style_GEOLOGY_8,
                popuplayertitle: 'GEOLOGY',
                interactive: true,
    title: 'GEOLOGY<br />\
    <img src="styles/legend/GEOLOGY_8_0.png" /> Charnockite group of rocks<br />\
    <img src="styles/legend/GEOLOGY_8_1.png" /> Migmatite Complex<br />\
    <img src="styles/legend/GEOLOGY_8_2.png" /> <br />' });
var format_GEOMORPHOLOGY_9 = new ol.format.GeoJSON();
var features_GEOMORPHOLOGY_9 = format_GEOMORPHOLOGY_9.readFeatures(json_GEOMORPHOLOGY_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOMORPHOLOGY_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOMORPHOLOGY_9.addFeatures(features_GEOMORPHOLOGY_9);
var lyr_GEOMORPHOLOGY_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOMORPHOLOGY_9, 
                style: style_GEOMORPHOLOGY_9,
                popuplayertitle: 'GEOMORPHOLOGY',
                interactive: true,
    title: 'GEOMORPHOLOGY<br />\
    <img src="styles/legend/GEOMORPHOLOGY_9_0.png" /> Flood Plain<br />\
    <img src="styles/legend/GEOMORPHOLOGY_9_1.png" /> Pediplain<br />\
    <img src="styles/legend/GEOMORPHOLOGY_9_2.png" /> Plateau<br />\
    <img src="styles/legend/GEOMORPHOLOGY_9_3.png" /> Water Body<br />\
    <img src="styles/legend/GEOMORPHOLOGY_9_4.png" /> <br />' });
var format_BOUNDARY_10 = new ol.format.GeoJSON();
var features_BOUNDARY_10 = format_BOUNDARY_10.readFeatures(json_BOUNDARY_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BOUNDARY_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BOUNDARY_10.addFeatures(features_BOUNDARY_10);
var lyr_BOUNDARY_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BOUNDARY_10, 
                style: style_BOUNDARY_10,
                popuplayertitle: 'BOUNDARY',
                interactive: true,
                title: '<img src="styles/legend/BOUNDARY_10.png" /> BOUNDARY'
            });
var format_BUILDINGDATA_11 = new ol.format.GeoJSON();
var features_BUILDINGDATA_11 = format_BUILDINGDATA_11.readFeatures(json_BUILDINGDATA_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BUILDINGDATA_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUILDINGDATA_11.addFeatures(features_BUILDINGDATA_11);
var lyr_BUILDINGDATA_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BUILDINGDATA_11, 
                style: style_BUILDINGDATA_11,
                popuplayertitle: 'BUILDING DATA',
                interactive: true,
                title: '<img src="styles/legend/BUILDINGDATA_11.png" /> BUILDING DATA'
            });
var format_WATERBODY_12 = new ol.format.GeoJSON();
var features_WATERBODY_12 = format_WATERBODY_12.readFeatures(json_WATERBODY_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WATERBODY_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WATERBODY_12.addFeatures(features_WATERBODY_12);
var lyr_WATERBODY_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WATERBODY_12, 
                style: style_WATERBODY_12,
                popuplayertitle: 'WATERBODY',
                interactive: true,
                title: '<img src="styles/legend/WATERBODY_12.png" /> WATERBODY'
            });
var format_CONTOUR_13 = new ol.format.GeoJSON();
var features_CONTOUR_13 = format_CONTOUR_13.readFeatures(json_CONTOUR_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CONTOUR_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONTOUR_13.addFeatures(features_CONTOUR_13);
var lyr_CONTOUR_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONTOUR_13, 
                style: style_CONTOUR_13,
                popuplayertitle: 'CONTOUR',
                interactive: true,
                title: '<img src="styles/legend/CONTOUR_13.png" /> CONTOUR'
            });
var format_DRAINAGE_14 = new ol.format.GeoJSON();
var features_DRAINAGE_14 = format_DRAINAGE_14.readFeatures(json_DRAINAGE_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DRAINAGE_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRAINAGE_14.addFeatures(features_DRAINAGE_14);
var lyr_DRAINAGE_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRAINAGE_14, 
                style: style_DRAINAGE_14,
                popuplayertitle: 'DRAINAGE',
                interactive: true,
                title: '<img src="styles/legend/DRAINAGE_14.png" /> DRAINAGE'
            });
var format_streams_15 = new ol.format.GeoJSON();
var features_streams_15 = format_streams_15.readFeatures(json_streams_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_streams_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_streams_15.addFeatures(features_streams_15);
var lyr_streams_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_streams_15, 
                style: style_streams_15,
                popuplayertitle: 'streams',
                interactive: true,
                title: '<img src="styles/legend/streams_15.png" /> streams'
            });
var format_ROADS_16 = new ol.format.GeoJSON();
var features_ROADS_16 = format_ROADS_16.readFeatures(json_ROADS_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROADS_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROADS_16.addFeatures(features_ROADS_16);
var lyr_ROADS_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ROADS_16, 
                style: style_ROADS_16,
                popuplayertitle: 'ROADS',
                interactive: true,
                title: '<img src="styles/legend/ROADS_16.png" /> ROADS'
            });
var format_ROADScopy_17 = new ol.format.GeoJSON();
var features_ROADScopy_17 = format_ROADScopy_17.readFeatures(json_ROADScopy_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROADScopy_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROADScopy_17.addFeatures(features_ROADScopy_17);
var lyr_ROADScopy_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ROADScopy_17, 
                style: style_ROADScopy_17,
                popuplayertitle: 'ROADS copy',
                interactive: true,
                title: '<img src="styles/legend/ROADScopy_17.png" /> ROADS copy'
            });
var format_POLTICALMAP_18 = new ol.format.GeoJSON();
var features_POLTICALMAP_18 = format_POLTICALMAP_18.readFeatures(json_POLTICALMAP_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLTICALMAP_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLTICALMAP_18.addFeatures(features_POLTICALMAP_18);
var lyr_POLTICALMAP_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POLTICALMAP_18, 
                style: style_POLTICALMAP_18,
                popuplayertitle: 'POLTICAL MAP',
                interactive: true,
    title: 'POLTICAL MAP<br />\
    <img src="styles/legend/POLTICALMAP_18_0.png" /> AMBALAPPARAMBU<br />\
    <img src="styles/legend/POLTICALMAP_18_1.png" /> CHIRAVATTOM<br />\
    <img src="styles/legend/POLTICALMAP_18_2.png" /> CHOORIKKAD<br />\
    <img src="styles/legend/POLTICALMAP_18_3.png" /> COOLIMUTTOM<br />\
    <img src="styles/legend/POLTICALMAP_18_4.png" /> KALLUKOOTTIYAL<br />\
    <img src="styles/legend/POLTICALMAP_18_5.png" /> KAVASSERIKULAMBU<br />\
    <img src="styles/legend/POLTICALMAP_18_6.png" /> MANTHAPARAMBU<br />\
    <img src="styles/legend/POLTICALMAP_18_7.png" /> NEDUMPURA<br />\
    <img src="styles/legend/POLTICALMAP_18_8.png" /> NELLUKUTHUPARA<br />\
    <img src="styles/legend/POLTICALMAP_18_9.png" /> PANAYUR<br />\
    <img src="styles/legend/POLTICALMAP_18_10.png" /> PLAPULLY<br />\
    <img src="styles/legend/POLTICALMAP_18_11.png" /> POOTHAMPULLY<br />\
    <img src="styles/legend/POLTICALMAP_18_12.png" /> PUTHUKKUDY<br />\
    <img src="styles/legend/POLTICALMAP_18_13.png" /> VERKOLY<br />\
    <img src="styles/legend/POLTICALMAP_18_14.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_DIGITALELEVATIONMODEL_2.setVisible(true);lyr_DEM_3.setVisible(true);lyr_HILLSHADE_4.setVisible(true);lyr_SLOPE_5.setVisible(true);lyr_TOPOSHEET_6.setVisible(true);lyr_SOIL_7.setVisible(true);lyr_GEOLOGY_8.setVisible(true);lyr_GEOMORPHOLOGY_9.setVisible(true);lyr_BOUNDARY_10.setVisible(true);lyr_BUILDINGDATA_11.setVisible(true);lyr_WATERBODY_12.setVisible(true);lyr_CONTOUR_13.setVisible(true);lyr_DRAINAGE_14.setVisible(true);lyr_streams_15.setVisible(true);lyr_ROADS_16.setVisible(true);lyr_ROADScopy_17.setVisible(true);lyr_POLTICALMAP_18.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_DIGITALELEVATIONMODEL_2,lyr_DEM_3,lyr_HILLSHADE_4,lyr_SLOPE_5,lyr_TOPOSHEET_6,lyr_SOIL_7,lyr_GEOLOGY_8,lyr_GEOMORPHOLOGY_9,lyr_BOUNDARY_10,lyr_BUILDINGDATA_11,lyr_WATERBODY_12,lyr_CONTOUR_13,lyr_DRAINAGE_14,lyr_streams_15,lyr_ROADS_16,lyr_ROADScopy_17,lyr_POLTICALMAP_18];
lyr_SOIL_7.set('fieldAliases', {'id': 'id', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'SOIL': 'SOIL', });
lyr_GEOLOGY_8.set('fieldAliases', {'ROCK_GROUP': 'ROCK_GROUP', 'NAME': 'NAME', });
lyr_GEOMORPHOLOGY_9.set('fieldAliases', {'NAME': 'NAME', 'TYPE1': 'TYPE1', 'TYPE2': 'TYPE2', });
lyr_BOUNDARY_10.set('fieldAliases', {'id': 'id', });
lyr_BUILDINGDATA_11.set('fieldAliases', {'source': 'source', 'height': 'height', });
lyr_WATERBODY_12.set('fieldAliases', {'osm_id': 'osm_id', 'osm_way_id': 'osm_way_id', 'name': 'name', 'type': 'type', 'aeroway': 'aeroway', 'amenity': 'amenity', 'admin_leve': 'admin_leve', 'barrier': 'barrier', 'boundary': 'boundary', 'building': 'building', 'craft': 'craft', 'geological': 'geological', 'historic': 'historic', 'land_area': 'land_area', 'landuse': 'landuse', 'leisure': 'leisure', 'man_made': 'man_made', 'military': 'military', 'natural': 'natural', 'office': 'office', 'place': 'place', 'shop': 'shop', 'sport': 'sport', 'tourism': 'tourism', 'other_tags': 'other_tags', });
lyr_CONTOUR_13.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_DRAINAGE_14.set('fieldAliases', {'ORDER1': 'ORDER1', });
lyr_streams_15.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_ROADS_16.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_ROADScopy_17.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_POLTICALMAP_18.set('fieldAliases', {'gml_parent': 'gml_parent', 'gml_pare_1': 'gml_pare_1', 'gml_id': 'gml_id', 'geom': 'geom', 'District': 'District', 'LSGD': 'LSGD', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', 'Lsgd_Type': 'Lsgd_Type', 'Created_Da': 'Created_Da', 'Surveyor': 'Surveyor', 'Mob_No': 'Mob_No', 'Remarks': 'Remarks', '_distLsgd': '_distLsgd', 'OBJECTID': 'OBJECTID', '_result': '_result', '_ulid': '_ulid', '_distLsgd2': '_distLsgd2', });
lyr_SOIL_7.set('fieldImages', {'id': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'SOIL': 'TextEdit', });
lyr_GEOLOGY_8.set('fieldImages', {'ROCK_GROUP': 'TextEdit', 'NAME': 'TextEdit', });
lyr_GEOMORPHOLOGY_9.set('fieldImages', {'NAME': 'TextEdit', 'TYPE1': 'TextEdit', 'TYPE2': 'TextEdit', });
lyr_BOUNDARY_10.set('fieldImages', {'id': 'TextEdit', });
lyr_BUILDINGDATA_11.set('fieldImages', {'source': 'TextEdit', 'height': 'TextEdit', });
lyr_WATERBODY_12.set('fieldImages', {'osm_id': 'TextEdit', 'osm_way_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'aeroway': 'TextEdit', 'amenity': 'TextEdit', 'admin_leve': 'TextEdit', 'barrier': 'TextEdit', 'boundary': 'TextEdit', 'building': 'TextEdit', 'craft': 'TextEdit', 'geological': 'TextEdit', 'historic': 'TextEdit', 'land_area': 'TextEdit', 'landuse': 'TextEdit', 'leisure': 'TextEdit', 'man_made': 'TextEdit', 'military': 'TextEdit', 'natural': 'TextEdit', 'office': 'TextEdit', 'place': 'TextEdit', 'shop': 'TextEdit', 'sport': 'TextEdit', 'tourism': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_CONTOUR_13.set('fieldImages', {'fid': '', 'ID': '', 'ELEV': '', });
lyr_DRAINAGE_14.set('fieldImages', {'ORDER1': 'Range', });
lyr_streams_15.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'highway': 'TextEdit', 'waterway': 'TextEdit', 'aerialway': 'TextEdit', 'barrier': 'TextEdit', 'man_made': 'TextEdit', 'railway': 'TextEdit', 'z_order': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_ROADS_16.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'highway': 'TextEdit', 'waterway': 'TextEdit', 'aerialway': 'TextEdit', 'barrier': 'TextEdit', 'man_made': 'TextEdit', 'railway': 'TextEdit', 'z_order': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_ROADScopy_17.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'highway': 'TextEdit', 'waterway': 'TextEdit', 'aerialway': 'TextEdit', 'barrier': 'TextEdit', 'man_made': 'TextEdit', 'railway': 'TextEdit', 'z_order': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_POLTICALMAP_18.set('fieldImages', {'gml_parent': 'TextEdit', 'gml_pare_1': 'TextEdit', 'gml_id': 'TextEdit', 'geom': 'TextEdit', 'District': 'TextEdit', 'LSGD': 'TextEdit', 'Ward_Name': 'TextEdit', 'Ward_No': 'TextEdit', 'Lsgd_Type': 'TextEdit', 'Created_Da': 'TextEdit', 'Surveyor': 'TextEdit', 'Mob_No': 'TextEdit', 'Remarks': 'TextEdit', '_distLsgd': 'TextEdit', 'OBJECTID': 'TextEdit', '_result': 'TextEdit', '_ulid': 'TextEdit', '_distLsgd2': 'TextEdit', });
lyr_SOIL_7.set('fieldLabels', {'id': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'SOIL': 'inline label - visible with data', });
lyr_GEOLOGY_8.set('fieldLabels', {'ROCK_GROUP': 'inline label - visible with data', 'NAME': 'no label', });
lyr_GEOMORPHOLOGY_9.set('fieldLabels', {'NAME': 'no label', 'TYPE1': 'inline label - visible with data', 'TYPE2': 'no label', });
lyr_BOUNDARY_10.set('fieldLabels', {'id': 'no label', });
lyr_BUILDINGDATA_11.set('fieldLabels', {'source': 'no label', 'height': 'no label', });
lyr_WATERBODY_12.set('fieldLabels', {'osm_id': 'no label', 'osm_way_id': 'no label', 'name': 'inline label - visible with data', 'type': 'inline label - always visible', 'aeroway': 'no label', 'amenity': 'no label', 'admin_leve': 'no label', 'barrier': 'no label', 'boundary': 'no label', 'building': 'no label', 'craft': 'no label', 'geological': 'no label', 'historic': 'no label', 'land_area': 'no label', 'landuse': 'no label', 'leisure': 'no label', 'man_made': 'no label', 'military': 'no label', 'natural': 'no label', 'office': 'no label', 'place': 'no label', 'shop': 'no label', 'sport': 'no label', 'tourism': 'no label', 'other_tags': 'no label', });
lyr_CONTOUR_13.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'inline label - visible with data', });
lyr_DRAINAGE_14.set('fieldLabels', {'ORDER1': 'no label', });
lyr_streams_15.set('fieldLabels', {'osm_id': 'no label', 'name': 'inline label - visible with data', 'highway': 'no label', 'waterway': 'no label', 'aerialway': 'no label', 'barrier': 'no label', 'man_made': 'no label', 'railway': 'no label', 'z_order': 'no label', 'other_tags': 'no label', });
lyr_ROADS_16.set('fieldLabels', {'osm_id': 'no label', 'name': 'inline label - visible with data', 'highway': 'no label', 'waterway': 'no label', 'aerialway': 'no label', 'barrier': 'no label', 'man_made': 'no label', 'railway': 'no label', 'z_order': 'no label', 'other_tags': 'no label', });
lyr_ROADScopy_17.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'highway': 'no label', 'waterway': 'no label', 'aerialway': 'no label', 'barrier': 'no label', 'man_made': 'no label', 'railway': 'no label', 'z_order': 'no label', 'other_tags': 'no label', });
lyr_POLTICALMAP_18.set('fieldLabels', {'gml_parent': 'no label', 'gml_pare_1': 'no label', 'gml_id': 'no label', 'geom': 'no label', 'District': 'no label', 'LSGD': 'no label', 'Ward_Name': 'inline label - visible with data', 'Ward_No': 'no label', 'Lsgd_Type': 'no label', 'Created_Da': 'no label', 'Surveyor': 'no label', 'Mob_No': 'no label', 'Remarks': 'no label', '_distLsgd': 'no label', 'OBJECTID': 'no label', '_result': 'no label', '_ulid': 'no label', '_distLsgd2': 'no label', });
lyr_POLTICALMAP_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});