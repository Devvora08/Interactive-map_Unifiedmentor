//sidebar logic here

let btn = document.querySelector('#btn');
let sidebar = document.querySelector('.sidebar');

btn.onclick = function () {
    sidebar.classList.toggle('active');
}


    

//creating a Leaflet object L and using map class from html div

const attribution =  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Coded by Dev';

// const map = L.map('map').setView([22.9074872, 79.073], 5);


const darkLayer = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}', {
	minZoom: 0,
	maxZoom: 20,
	attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	ext: 'png'
});


const whiteLayer = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.{ext}', {
	minZoom: 0,
	maxZoom: 20,
	attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	ext: 'png'
})

const satelliteMap = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.{ext}', {
	minZoom: 0,
	maxZoom: 20,
	attribution: '&copy; CNES, Distribution Airbus DS, © Airbus DS, © PlanetObserver (Contains Copernicus Data) | &copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	ext: 'jpg'
})

const waterMap = L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.{ext}', {
	minZoom: 1,
	maxZoom: 16,
	attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	ext: 'jpg'
})


var googleTraffic = L.tileLayer('https://{s}.google.com/vt/lyrs=m@221097413,traffic&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    minZoom: 2,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
})

const googleMap = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});

var littleton = L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.'),
    denver    = L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.'),
    aurora    = L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.'),
    golden    = L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.');

var cities = L.layerGroup([littleton, denver, aurora, golden]);

var map = L.map('map', {
    center: [22.9074872, 79.073],
    zoom: 10,
    layers: [googleMap, cities]
});

var baseMaps = {
    "Main-map": googleMap,
    "Satellite-map":satelliteMap,
    "Watermap":waterMap,
    "Lightmap":whiteLayer,
    "DarkMap":darkLayer
};

var overlayMaps = {
    "Cities": cities
};

//var layerControl = L.control.layers(baseMaps).addTo(map);

//adding circle objects
// const circleLayer = L.circle([22.9074872, 79.073],
//     { 
//         radius:2000,
//         color:'grey',
//         fillColor:'grey',
//         fillOpacity:0.4
//      })
//     .addTo(map);


// //added rectangle object using bounds
// const bounds =  [[54.559322, -5.767822], [56.1210604, -3.021240]];

// const rectLayer = L.rectangle(bounds, {
//     color: "#ff7800"
// }).addTo(map);

// //added polygon shape and polyline objects using arrays
// latlngstwo = [
//     [[45.51, -122.68],
//      [37.77, -122.43],
//      [34.04, -118.2]],
   
// ];
// const latlngs = [[37, -109.05],[41, -109.03],[41, -102.05]];
// const polygon = L.polygon(latlngs).addTo(map);
// var polyline = L.polyline(latlngstwo, {color: 'red'}).addTo(map);

// //adding markers-circle
// const circleMarker = L.circleMarker([18.9206754172, 72.829527880],{
//     color:'black',
//     radius:6
// }).addTo(map);

// //default marker added now
// const marker = L.marker([24.2384743, 72.347474]).addTo(map);

// //adding a popup in marker
// marker.bindPopup('<h3>this is a popup</h3>');   //using a html markup to style the pop up

// // custom popup using our own icons
// const icon = L.icon({
//     iconUrl: "custommarker.png",
//     iconSize:[80,60]                       //give image url and sizes
// })

// L.marker([18.9206,72.82945], {
//     icon
// }).bindPopup('this is popup').addTo(map);        //give an object referencing the icon created above

const eateries = document.querySelector('#eateries');
eateries.addEventListener('change', (e)=>{
    if (e.target.checked) {
        map.addLayer(cities);  // Adds the eateries overlay to the map
    } else {
        map.removeLayer(cities);  // Removes the eateries overlay from the map
    }
})


//maplayer sidebar logic here

document.addEventListener('DOMContentLoaded', function() {
    // New variable for the right sidebar
    const rightSidebar = document.querySelector('.satellite'); // Assuming there's only one sidebar with the class 'satellite'
    const rightBtn = document.getElementById('btntwo'); // Button to toggle the right sidebar

    // Add event listener to toggle the right sidebar
    rightBtn.addEventListener('click', function() {
        rightSidebar.classList.toggle('open'); // Toggle the "open" class for right sidebar
    });
});

const radiobtn = document.querySelectorAll('.map-radio');
radiobtn.forEach(choice => {
    choice.addEventListener('change', e => {
        if(e.target.checked){
            const selectedRadio = e.target.id;
            switchLayer(selectedRadio);
        }
    })
});

function switchLayer(mapType) {
    map.eachLayer(layer => {
        if (layer instanceof L.TileLayer) {
            map.removeLayer(layer);
        }
    });

    switch (mapType) {
        case "satelliteMap":
            satelliteMap.addTo(map);
            console.log("Switched to Satellite Layer");
            break;
        case "googleMap":
            googleMap.addTo(map);
            console.log("Switched to Google Layer");
            break;
        case "trafficMap":
            googleTraffic.addTo(map);
            console.log("Switched to Traffic Layer");
            break;
        case "darkMap":
            darkLayer.addTo(map);
            console.log("Switched to Dark Layer");
            break;
        case "lightMap":
            whiteLayer.addTo(map);
            console.log("Switched to Light Layer");
            break;
        case "waterMap":
            waterMap.addTo(map);
            console.log("Switched to Water Layer");
            break;
        default:
            console.log("No valid layer selected");
            break;
    }
}


