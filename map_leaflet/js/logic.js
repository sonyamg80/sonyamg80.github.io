

// Creating our initial map object
// We set the longitude, latitude, and the starting zoom level
// This gets inserted into the div with an id of 'map'
var myMap = L.map("map-id", {
    center: [45.52, -122.67],
    center: [29.76, -95.37],
    zoom: 17
});

// Adding a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 20,
    id: "mapbox.streets",
    accessToken: API_KEY
}).addTo(myMap);






// // Store our API endpoint inside queryUrl
// // Getting data of all M2.5+ earthquakes from the past week
// var queryUrl = d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson");

// d3.json(queryUrl, function (data) {
//     // console.log(data)
//     createFeatures(data.features);
// });

// function createFeatures(earthquakeData) {

//     // Define a function we want to run once for each feature in the features array
//     // Give each feature a popup describing the place and time of the earthquake
//     function onEachFeature(feature, layer) {
//         layer.bindPopup("<h3>" + feature.properties.place +
//             "</h3><hr><p>" + new Date(feature.properties.time) + "</p>");
//     }

//     for (let i = 0; i < earthquakeData.length; i++) {

//         let color = "";
//         if (earthquakeData[i].mag < 5) {
//             color = "Orange";
//         }
//         else if (earthquakeData[i].mag < 4) {
//             color = "Yellow";
//         }
//         else if (earthquakeData[i].mag < 3) {
//             color = "green";
//         }
//         else {
//             color = "red"
//         }


//         L.circle()
//     }

//     // Create a GeoJSON layer containing the features array on the earthquakeData object
//     // Run the onEachFeature function once for each piece of data in the array
//     var earthquakes = L.geoJSON(earthquakeData, {
//         onEachFeature: onEachFeature
//     });

//     // Sending our earthquakes layer to the createMap function
//     createMap(earthquakes);
// }

// function createMap(earthquakes) {

//     // Define streetmap and darkmap layers
//     var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
//         attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//         maxZoom: 18,
//         id: "mapbox.streets",
//         accessToken: API_KEY
//     });

//     // Define a baseMaps object to hold our base layers
//     var baseMaps = {
//         "Street Map": streetmap,

//     };

//     // Create overlay object to hold our overlay layer
//     var overlayMaps = {
//         Earthquakes: earthquakes
//     };

//     // Create our map, giving it the streetmap and earthquakes layers to display on load
//     var myMap = L.map("map-id", {
//         center: [
//             37.09, -95.71
//         ],
//         zoom: 5,
//         layers: [streetmap, earthquakes]
//     });

//     // Create a layer control
//     // Pass in our baseMaps and overlayMaps
//     // Add the layer control to the map
//     L.control.layers(baseMaps, overlayMaps, {
//         collapsed: false
//     }).addTo(myMap);
// }
