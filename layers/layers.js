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
var lyr_20210709_Maxar_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "2021-07-09_Maxar",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20210709_Maxar_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [5811114.916203, 7509143.440411, 5813165.021030, 7512557.581676]
                            })
                        });
var lyr_2022042800_00_2022042823_59_Sentinel2_L2A_True_color_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "2022-04-28-00_00_2022-04-28-23_59_Sentinel-2_L2A_True_color",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/2022042800_00_2022042823_59_Sentinel2_L2A_True_color_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [5811114.785616, 7509143.256952, 5813165.048256, 7512558.245499]
                            })
                        });
var lyr_2022050800_00_2022050823_59_Sentinel2_L2A_Highlight_Optimized_Natural_Color_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "2022-05-08-00_00_2022-05-08-23_59_Sentinel-2_L2A_Highlight_Optimized_Natural_Color",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/2022050800_00_2022050823_59_Sentinel2_L2A_Highlight_Optimized_Natural_Color_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [5811114.785616, 7509143.256952, 5813165.048256, 7512558.245499]
                            })
                        });
var lyr_2022052600_00_2022052623_59_Sentinel2_L2A_Highlight_Optimized_Natural_Color_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "2022-05-26-00_00_2022-05-26-23_59_Sentinel-2_L2A_Highlight_Optimized_Natural_Color",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/2022052600_00_2022052623_59_Sentinel2_L2A_Highlight_Optimized_Natural_Color_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [5811114.785616, 7509143.256952, 5813165.048256, 7512558.245499]
                            })
                        });
var lyr_2022062500_00_2022062523_59_Sentinel2_L2A_Highlight_Optimized_Natural_Color_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "2022-06-25-00_00_2022-06-25-23_59_Sentinel-2_L2A_Highlight_Optimized_Natural_Color",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/2022062500_00_2022062523_59_Sentinel2_L2A_Highlight_Optimized_Natural_Color_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [5811114.785616, 7509143.256952, 5813165.048256, 7512558.245499]
                            })
                        });
var lyr_2022072700_00_2022072723_59_Sentinel2_L2A_Highlight_Optimized_Natural_Color_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "2022-07-27-00_00_2022-07-27-23_59_Sentinel-2_L2A_Highlight_Optimized_Natural_Color",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/2022072700_00_2022072723_59_Sentinel2_L2A_Highlight_Optimized_Natural_Color_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [5811114.785616, 7509143.256952, 5813165.048256, 7512558.245499]
                            })
                        });
var lyr_2022080100_00_2022080123_59_Sentinel2_L2A_Highlight_Optimized_Natural_Color_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "2022-08-01-00_00_2022-08-01-23_59_Sentinel-2_L2A_Highlight_Optimized_Natural_Color",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/2022080100_00_2022080123_59_Sentinel2_L2A_Highlight_Optimized_Natural_Color_7.png",
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
                interactive: false,
                title: '<img src="styles/legend/Final_Field_bound_9.png" /> Final_Field_bound'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_20210709_Maxar_1.setVisible(true);lyr_2022042800_00_2022042823_59_Sentinel2_L2A_True_color_2.setVisible(true);lyr_2022050800_00_2022050823_59_Sentinel2_L2A_Highlight_Optimized_Natural_Color_3.setVisible(true);lyr_2022052600_00_2022052623_59_Sentinel2_L2A_Highlight_Optimized_Natural_Color_4.setVisible(true);lyr_2022062500_00_2022062523_59_Sentinel2_L2A_Highlight_Optimized_Natural_Color_5.setVisible(true);lyr_2022072700_00_2022072723_59_Sentinel2_L2A_Highlight_Optimized_Natural_Color_6.setVisible(true);lyr_2022080100_00_2022080123_59_Sentinel2_L2A_Highlight_Optimized_Natural_Color_7.setVisible(true);lyr_NDVI_01082022_2_8.setVisible(true);lyr_Final_Field_bound_9.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,lyr_20210709_Maxar_1,lyr_2022042800_00_2022042823_59_Sentinel2_L2A_True_color_2,lyr_2022050800_00_2022050823_59_Sentinel2_L2A_Highlight_Optimized_Natural_Color_3,lyr_2022052600_00_2022052623_59_Sentinel2_L2A_Highlight_Optimized_Natural_Color_4,lyr_2022062500_00_2022062523_59_Sentinel2_L2A_Highlight_Optimized_Natural_Color_5,lyr_2022072700_00_2022072723_59_Sentinel2_L2A_Highlight_Optimized_Natural_Color_6,lyr_2022080100_00_2022080123_59_Sentinel2_L2A_Highlight_Optimized_Natural_Color_7,lyr_NDVI_01082022_2_8,lyr_Final_Field_bound_9];
lyr_Final_Field_bound_9.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'area_1': 'area_1', 'Площа': 'Площа', });
lyr_Final_Field_bound_9.set('fieldImages', {'id': 'TextEdit', 'Area': '', 'area_1': '', 'Площа': '', });
lyr_Final_Field_bound_9.set('fieldLabels', {'id': 'no label', 'Area': 'no label', 'area_1': 'no label', 'Площа': 'no label', });
lyr_Final_Field_bound_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});