var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_20210709WV2_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "2021-07-09 WV2",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20210709WV2_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [5811114.916203, 7509143.440411, 5813165.021030, 7512557.581676]
                            })
                        });
var lyr_20220428S2_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "2022-04-28 S2",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20220428S2_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [5811114.785616, 7509143.256952, 5813165.048256, 7512558.245499]
                            })
                        });
var lyr_20220508S2_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "2022-05-08 S2",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20220508S2_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [5811114.785616, 7509143.256952, 5813165.048256, 7512558.245499]
                            })
                        });
var lyr_20220526S2_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "2022-05-26 S2",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20220526S2_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [5811114.785616, 7509143.256952, 5813165.048256, 7512558.245499]
                            })
                        });
var lyr_20220625S2_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "2022-06-25 S2",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20220625S2_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [5811114.785616, 7509143.256952, 5813165.048256, 7512558.245499]
                            })
                        });
var lyr_20220727S2_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "2022-07-27 S2",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20220727S2_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [5811114.785616, 7509143.256952, 5813165.048256, 7512558.245499]
                            })
                        });
var lyr_20220801S2_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "2022-08-01 S2",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20220801S2_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [5811114.785616, 7509143.256952, 5813165.048256, 7512558.245499]
                            })
                        });
var lyr_NDVI_01082022_S2_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI_01082022_S2",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI_01082022_S2_8.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [5811774.870242, 7510104.043154, 5812805.002219, 7511508.270150]
                            })
                        });
var lyr_20220806S2_9 = new ol.layer.Image({
                            opacity: 1,
                            title: "2022-08-06 S2",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20220806S2_9.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [5811114.785616, 7509143.256952, 5813165.048256, 7512558.245499]
                            })
                        });
var lyr_NDVI_06082022_S2_10 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI_06082022_S2",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI_06082022_S2_10.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [5811774.870242, 7510104.043154, 5812805.002219, 7511508.270150]
                            })
                        });
var lyr_20220831S2_11 = new ol.layer.Image({
                            opacity: 1,
                            title: "2022-08-31 S2",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20220831S2_11.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [5811114.785616, 7509143.256952, 5813165.048256, 7512558.245499]
                            })
                        });
var lyr_NDVI_31082022_S2_12 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI_31082022_S2",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI_31082022_S2_12.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [5811774.870242, 7510104.043154, 5812805.002219, 7511508.270150]
                            })
                        });
var lyr_20221003S2_13 = new ol.layer.Image({
                            opacity: 1,
                            title: "2022-10-03 S2",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20221003S2_13.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [5811114.785616, 7509143.256952, 5813165.048256, 7512558.245499]
                            })
                        });
var lyr_NDVI_03102022_S2_14 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI_03102022_S2",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI_03102022_S2_14.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [5811774.870131, 7510103.569754, 5812805.002108, 7511508.687048]
                            })
                        });
var lyr_20221028_15 = new ol.layer.Image({
                            opacity: 1,
                            title: "2022-10-28",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20221028_15.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [5811114.785616, 7509143.256952, 5813165.048256, 7512558.245499]
                            })
                        });
var lyr_NDVI_28102022_S2_16 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI_28102022_S2",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI_28102022_S2_16.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [5811774.870242, 7510103.569754, 5812805.002219, 7511508.687246]
                            })
                        });
var format_Final_Field_bound_17 = new ol.format.GeoJSON();
var features_Final_Field_bound_17 = format_Final_Field_bound_17.readFeatures(json_Final_Field_bound_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Final_Field_bound_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Final_Field_bound_17.addFeatures(features_Final_Field_bound_17);
var lyr_Final_Field_bound_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Final_Field_bound_17, 
                style: style_Final_Field_bound_17,
                interactive: true,
                title: '<img src="styles/legend/Final_Field_bound_17.png" /> Final_Field_bound'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_20210709WV2_1.setVisible(true);lyr_20220428S2_2.setVisible(true);lyr_20220508S2_3.setVisible(true);lyr_20220526S2_4.setVisible(true);lyr_20220625S2_5.setVisible(true);lyr_20220727S2_6.setVisible(true);lyr_20220801S2_7.setVisible(true);lyr_NDVI_01082022_S2_8.setVisible(true);lyr_20220806S2_9.setVisible(true);lyr_NDVI_06082022_S2_10.setVisible(true);lyr_20220831S2_11.setVisible(true);lyr_NDVI_31082022_S2_12.setVisible(true);lyr_20221003S2_13.setVisible(true);lyr_NDVI_03102022_S2_14.setVisible(true);lyr_20221028_15.setVisible(true);lyr_NDVI_28102022_S2_16.setVisible(true);lyr_Final_Field_bound_17.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_20210709WV2_1,lyr_20220428S2_2,lyr_20220508S2_3,lyr_20220526S2_4,lyr_20220625S2_5,lyr_20220727S2_6,lyr_20220801S2_7,lyr_NDVI_01082022_S2_8,lyr_20220806S2_9,lyr_NDVI_06082022_S2_10,lyr_20220831S2_11,lyr_NDVI_31082022_S2_12,lyr_20221003S2_13,lyr_NDVI_03102022_S2_14,lyr_20221028_15,lyr_NDVI_28102022_S2_16,lyr_Final_Field_bound_17];
lyr_Final_Field_bound_17.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'area_1': 'area_1', '??????????': '??????????', });
lyr_Final_Field_bound_17.set('fieldImages', {'id': 'TextEdit', 'Area': '', 'area_1': '', '??????????': '', });
lyr_Final_Field_bound_17.set('fieldLabels', {'id': 'no label', 'Area': 'no label', 'area_1': 'no label', '??????????': 'inline label', });
lyr_Final_Field_bound_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});