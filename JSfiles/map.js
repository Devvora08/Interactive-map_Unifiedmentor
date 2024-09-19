//sidebar logic here

let btn = document.querySelector('#btn');
let sidebar = document.querySelector('.sidebar');

btn.addEventListener('click',()=> {
    sidebar.classList.toggle('active');
    if(sidebar.classList.contains("active")){
        utilityBar.style.opacity = 0;
        rightSidebar.style.opacity = 0;
    }
    else{
        utilityBar.style.opacity = 1;
        rightSidebar.style.opacity = 1;
    }
});


    

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

// const eateries = document.querySelector('#eateries');
// eateries.addEventListener('change', (e)=>{
//     if (e.target.checked) {
//         map.addLayer(cities);  // Adds the eateries overlay to the map
//     } else {
//         map.removeLayer(cities);  // Removes the eateries overlay from the map
//     }
// })


//maplayer sidebar logic here


    // New variable for the right sidebar
const rightSidebar = document.querySelector('.satellite'); // Assuming there's only one sidebar with the class 'satellite'
const rightBtn = document.getElementById('btntwo'); // Button to toggle the right sidebar

// Add event listener to toggle the right sidebar
rightBtn.addEventListener('click', function() {
        rightSidebar.classList.toggle('open'); 
        if(rightSidebar.classList.contains('open')){
            sidebar.style.opacity = 0;
            utilityBar.style.opacity = 0;
        }
        else{
            sidebar.style.opacity = 1;
            utilityBar.style.opacity = 1;
        }
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

//utility bar slider logic here

const utilityBar = document.querySelector('.utility-bar'); 
const downBtn = document.getElementById('btnThree');

downBtn.addEventListener('click', ()=>{
    utilityBar.classList.toggle('downopen');
    if(utilityBar.classList.contains('downopen')){
        sidebar.style.opacity = 0;
        rightSidebar.style.opacity = 0;
    }
    else{
        sidebar.style.opacity = 1;
        rightSidebar.style.opacity = 1;
    }
})

const pinBtn = document.querySelectorAll('.pin-radio');
let selectedIcon = null;
let releted = null;

pinBtn.forEach(pin => {
    pin.addEventListener('change',e => {
        const selectedLabel = document.querySelector(`label[for="${e.target.id}"]`);
        const bgImage = window.getComputedStyle(selectedLabel).getPropertyValue('background-image');
        const imageUrl = bgImage.slice(5, -2); 
        const relativePath = imageUrl.replace(window.location.origin, '');

        const relativeUrl = relativePath.startsWith('/') ? relativePath.substring(1) : relativePath;
        related = relativeUrl;
         selectedIcon = L.icon({
            iconUrl: relativeUrl,
            iconSize: [70, 70], 
            iconAnchor: [35, 50], 
        });
        
        
    })
})

const popupForm = `
    <form id="popupForm">
        <label class="popLabel" for="popupTitle">Title:</label>
        <input type="text" id="popupTitle" name="popupTitle"><br>
        <label class="popLabel" for="popupContent">Content:</label>
        <textarea id="popupContent" name="popupContent" required></textarea><br>
        <button class="popSubmit" type="submit">Submit</button>
    </form>
`;


let count = 0; //initializing the count for short route, if reaches 2, implement short route function
let routeArray = [];
let resetBtn = document.querySelector('#resetRouteBtn');
let routingControl = null;
let markers = [];  //for the route pins, they need to be stored here so they can be deleted when reset from the map


console.log(resetBtn)
map.on('click', function(e) {

    if (selectedIcon && related!='customPins/homepin.png') {
        console.log(e.latlng.lat, e.latlng.lng);
        
        

        let newMarker = L.marker([e.latlng.lat, e.latlng.lng], { icon: selectedIcon })
        .bindPopup(popupForm, {
            offset: L.point(2, -16) // Adjust the popup offset
        })
        .addTo(map);

        newMarker.on('popupopen', function() {
            const popupForm = document.querySelector('#popupForm');
            popupForm.addEventListener('submit', function(event) {
                event.preventDefault(); // Prevent default form behavior

                const popupTitle = document.querySelector('#popupTitle').value;
                const popupContent = document.querySelector('#popupContent').value;

                // Set the content of the popup with title, content, and coordinates
                newMarker.setPopupContent(`
                    <b>${popupTitle}</b><br>${popupContent}<br>
                    Coordinates: ${e.latlng.lat.toFixed(5)}, ${e.latlng.lng.toFixed(5)}
                `).openPopup();
            });
        });
    }
    else if (selectedIcon && related == 'customPins/homepin.png' && count < 2) {
        let newMarker = L.marker([e.latlng.lat, e.latlng.lng], { icon: selectedIcon }).addTo(map);
        markers.push(newMarker);
        console.log('Adding coordinates:', e.latlng.lat, e.latlng.lng);
        routeArray.push([e.latlng.lat, e.latlng.lng]);
        count += 1;

        if (count == 2) {
            resetBtn.style.display = 'block'; // Show the reset button
            pinBtn.forEach(pin=> {
                pin.checked = false;     //unchecking every pin after reset
            }); 
            // Remove existing routing control if present
            if (routingControl) {
                map.removeControl(routingControl);
            }

            // Add new routing control
            routingControl = L.Routing.control({
                waypoints: [
                    L.latLng(routeArray[0][0], routeArray[0][1]),
                    L.latLng(routeArray[1][0], routeArray[1][1])
                ],
                createMarker: function() {
                    return null; // Prevent default markers from being added
                }
            }).addTo(map);
        }
    } else {
        console.log('No icon selected or too many pins');
    }
});

// Reset Route function
const resetRoute = () => {
    if (routingControl) {
        map.removeControl(routingControl); // Remove the route layer
        routingControl = null; // Clear reference to routing control
    }

    // Reset count and array
    count = 0;
    routeArray = [];
    markers.forEach(marker => {
        map.removeLayer(marker);
    });
    markers = [];

    // Hide the reset button
    resetBtn.style.display = 'none';  
    selectedIcon = null;
}

// Add event listener to the reset button
resetBtn.addEventListener('click', resetRoute);


//testing the search functionality
L.Control.geocoder().addTo(map);


const locateControl = L.control.locate({
    position: 'topleft',
    drawCircle: true, // Disable the circle around the location
    follow: true,      // Automatically follow the user location
    setView: false,
    
}).addTo(map);

// Handle the 'locationfound' event
map.on('locationfound', function(e) {
    // Use flyTo to move smoothly to the user's location
    map.flyTo(e.latlng, 12, {
        duration: 2, // Duration of the animation in seconds
        animate: true  // Ensure the animation is applied
    });
});

// Handle the 'locationerror' event
map.on('locationerror', function(e) {
    alert('Unable to locate you. Please check your location settings.');
});

// Add custom click event to locate control button
document.querySelector('.leaflet-control-locate').addEventListener('click', function() {
    map.locate({ setView: false, maxZoom: 16 });
});


//adding geojson files
let eatLayer;  
let monumentLayer;
let religiousLayer;
let touristLayer;


//custom icons for each layers
const eatIcon = L.icon({
    iconUrl: './geoJsonFiles/iconPhotos/eating.png',  // Path to your custom icon
    iconSize: [32, 32],                // Size of the icon [width, height]
    iconAnchor: [16, 32],              // Anchor point of the icon (so the point sits correctly on the map)
    popupAnchor: [0, -32]              // Position of the popup relative to the icon
});
const monumentIcon = L.icon({
    iconUrl: './geoJsonFiles/iconPhotos/monument.png',  // Path to your custom icon
    iconSize: [32, 32],                // Size of the icon [width, height]
    iconAnchor: [16, 32],              // Anchor point of the icon (so the point sits correctly on the map)
    popupAnchor: [0, -32]              // Position of the popup relative to the icon
});
const religiosIcon = L.icon({
    iconUrl: './geoJsonFiles/iconPhotos/religious.png',  // Path to your custom icon
    iconSize: [32, 32],                // Size of the icon [width, height]
    iconAnchor: [16, 32],              // Anchor point of the icon (so the point sits correctly on the map)
    popupAnchor: [0, -32]              // Position of the popup relative to the icon
});
const touristIcon = L.icon({
    iconUrl: './geoJsonFiles/iconPhotos/tourism.png',  // Path to your custom icon
    iconSize: [32, 32],                // Size of the icon [width, height]
    iconAnchor: [16, 32],              // Anchor point of the icon (so the point sits correctly on the map)
    popupAnchor: [0, -32]              // Position of the popup relative to the icon
});
//impelmenting selection logic for geojson file for each id

const eateries = document.querySelector('#eateries');
eateries.addEventListener('change', (e) => {
    if (e.target.checked) {
        eatLayer = L.geoJSON(eat, {
            pointToLayer: function (feature, latlng) {
                return L.marker(latlng, {icon: eatIcon});
            },
            style: function (feature) {
                return {color: feature.properties.color};  // Apply styles for non-point features
            }
        }).bindPopup(function (layer) {
            return layer.feature.properties.description;
        }).addTo(map);
    } else {
        // Remove the GeoJSON layer from the map if it's unchecked
        if (eatLayer) {
            map.removeLayer(eatLayer);
        }
    }
});

const monuments = document.querySelector('#monuments');
monuments.addEventListener('change', (e) => {
    if (e.target.checked) {
        monumentLayer = L.geoJSON(monument, {
            pointToLayer: function (feature, latlng) {
                return L.marker(latlng, {icon: monumentIcon});
            },
            style: function (feature) {
                return {color: feature.properties.color};  // Apply styles for non-point features
            }
        }).bindPopup(function (layer) {
            return layer.feature.properties.description;
        }).addTo(map);
    } else {
        // Remove the GeoJSON layer from the map if it's unchecked
        if (monumentLayer) {
            map.removeLayer(monumentLayer);
        }
    }
});

const religiousPlaces = document.querySelector('#religious-places');
religiousPlaces.addEventListener('change', (e) => {
    if (e.target.checked) {
        religiousLayer = L.geoJSON(religios, {
            pointToLayer: function (feature, latlng) {
                return L.marker(latlng, {icon: religiosIcon});
            },
            style: function (feature) {
                return {color: feature.properties.color}; 
            }
        }).bindPopup(function (layer) {
            return layer.feature.properties.description;
        }).addTo(map);
    } else {
        // Remove the GeoJSON layer from the map if it's unchecked
        if (religiousLayer) {
            map.removeLayer(religiousLayer);
        }
    }
});


const tourists = document.querySelector('#tourist-places');
tourists.addEventListener('change', (e) => {
    if (e.target.checked) {
        touristLayer = L.geoJSON(tourist, {
            pointToLayer: function (feature, latlng) {
                return L.marker(latlng, {icon: touristIcon});
            },
            style: function (feature) {
                return {color: feature.properties.color};  // Apply styles for non-point features
            }
        }).bindPopup(function (layer) {
            return layer.feature.properties.description;
        }).addTo(map);
    } else {
        // Remove the GeoJSON layer from the map if it's unchecked
        if (touristLayer) {
            map.removeLayer(touristLayer);
        }
    }
});

