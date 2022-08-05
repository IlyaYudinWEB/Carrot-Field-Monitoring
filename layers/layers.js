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
var lyr_NDVI_01082022_2_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI_01082022_2",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI_01082022_2_8.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [5811774.870242, 7510104.043154, 5812805.002219, 7511508.270150]
                            })
                        });
var format_Final_Field_bound_9 = new ol.format.GeoJSON();
var features_Final_Field_bound_9 = format_Final_Field_bound_9.readFeatures(json_Final_Field_bound_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Final_Field_bound_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Final_Field_bound_9.addFeatures(features_Final_Field_bound_9);
var lyr_Final_Field_bound_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Final_Field_bound_9, 
                style: style_Final_Field_bound_9,
                interactive: true,
                title: '<img src="styles/legend/Final_Field_bound_9.png" /> Final_Field_bound'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_20210709WV2_1.setVisible(true);lyr_20220428S2_2.setVisible(true);lyr_20220508S2_3.setVisible(true);lyr_20220526S2_4.setVisible(true);lyr_20220625S2_5.setVisible(true);lyr_20220727S2_6.setVisible(true);lyr_20220801S2_7.setVisible(true);lyr_NDVI_01082022_2_8.setVisible(true);lyr_Final_Field_bound_9.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_20210709WV2_1,lyr_20220428S2_2,lyr_20220508S2_3,lyr_20220526S2_4,lyr_20220625S2_5,lyr_20220727S2_6,lyr_20220801S2_7,lyr_NDVI_01082022_2_8,lyr_Final_Field_bound_9];
lyr_Final_Field_bound_9.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'area_1': 'area_1', 'Площа': 'Площа', });
lyr_Final_Field_bound_9.set('fieldImages', {'id': 'TextEdit', 'Area': '', 'area_1': '', 'Площа': '', });
lyr_Final_Field_bound_9.set('fieldLabels', {'id': 'no label', 'Area': 'no label', 'area_1': 'no label', 'Площа': 'no label', });
lyr_Final_Field_bound_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});