var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// var myMap = L.map("map-id", {
//     center: [45.52, -122.67],
//     zoom: 13
// });



d3.json(queryUrl, function (data) {
    // console.log(data)
    createFeatures(data.features);
});

function createFeatures(earthquakedata) {

    // console.log(earthquakedata);
    function onEachFeature(features, layer) {
        layer.bindPopup("<h3>" + features.properties.place +
            "</h3><hr><p>" + new Date(features.properties.time) + "</p>");
    }


    var earthquake = L.geoJSON(earthquakedata, {

        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, {
                radius: 5 * feature.properties.mag,
                fillColor: colorRange(feature.properties.mag),
                color: "#000",
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8
            });
        },
        onEachFeature: onEachFeature

    });

    createMap(earthquake);
    // createMap(earthquake);
    // This gets inserted into the div with an id of 'map'

}

function createMap(earthquake) {


    var streetmap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        accessToken: API_KEY
    });

    var baseMap = {
        "street Map": streetmap,
    };

    var overlayMaps = {
        Earthquake: earthquake
    };


    var myMap = L.map("map-id", {
        center: [
            39.73, -104.98
        ],
        zoom: 7,
        layers: [streetmap, earthquake]
    });




    L.control.layers(baseMap, overlayMaps, {
        collapsed: false

    }).addTo(myMap);

    var legend = L.control({
        position: 'topright'
    });


    legend.onAdd = function (myMap) {

        var div = L.DomUtil.create('div', 'info legend'),
            grades = [0, 1, 2, 3, 4, 5];


        for (var i = 0; i < grades.length; i++) {
            div.innerHTML += '<i style="background:' + colorRange(grades[i] + 1) + '">&nbsp&nbsp&nbsp&nbsp</i> ' +
                grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
        }
        return div;
    };

    legend.addTo(myMap);






}

function colorRange(mag) {

    switch (true) {
        case mag >= 5.0:
            return 'red';
            break;

        case mag >= 4.0:
            return 'orange';
            break;


        case mag >= 3.0:
            return 'gold';
            break;

        case mag >= 2.0:
            return 'yellow';
            break;

        case mag >= 1.0:
            return 'turquoise';
            break;

        default:
            return 'green';

    };



};

function markerSize(mag) {
    return mag * 5;
};

$.getJSON('http://a.tiles.mapbox.com/v4/mapbox.streets/features.json?access_token=pk.eyJ1IjoianVyaW9zdGUyIiwiYSI6ImNraTl0eTJpdjAxMGUyeWw2MzAwYnJ5OTYifQ.xhgkx_MIPaic3Kp--gFX3w', function (data) {
  var geojson = L.geoJson(data).addTo(map);
  map.fitBounds(geojson.getBounds());
});



