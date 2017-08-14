// Multiple markers
const markers = [
	["Domtoren, Utrecht", 52.090662, 5.121306],
	["Abraham Dolehof, Utrecht", 52.087832, 5.122463],
	["Springstraat, Utrecht", 52.089093, 5.118223],
	["Market Vredenburg, Utrecht", 52.092093, 5.114318],
	["Terrasjes Neude, Utrecht", 52.093147, 5.118656],
	["Stadhuisbrug, Utrecht", 52.091705, 5.119369]
];

// Info window content
const infoWindowContent = [
	[
		'<div class="info_content">' +
			"<h3>Domtoren</h3>" +
			'<img class="resize" src ="http://i.imgur.com/rm3jm6y.jpg" alt="The Domtoren">' +
			"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel mollis urna, et tempor justo. Vivamus pulvinar finibus turpis ut posuere. Nam non eros pulvinar, auctor nulla ac, varius orci. Sed sem dolor, consequat nec felis eget, egestas rhoncus orci. Quisque tempor elementum libero, quis ornare urna tempus sit amet.</p>" +
			"</div>"
	],
	[
		'<div class="info_content">' +
			"<h3>Abraham Dolehof</h3>" +
			'<img class="resize" src ="http://i.imgur.com/G8PIBYZ.jpg" alt="Abraham Dolehof">' +
			"<audio controls loop>" +
			'<source src="https://instaud.io/_/13Gx.mp3">' +
			"</audio>" +
			"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel mollis urna, et tempor justo. Vivamus pulvinar finibus turpis ut posuere. Nam non eros pulvinar, auctor nulla ac, varius orci. Sed sem dolor, consequat nec felis eget, egestas rhoncus orci. Quisque tempor elementum libero, quis ornare urna tempus sit amet.</p>" +
			"</div>"
	],
	[
		'<div class="info_content">' +
			"<h3>Springstraat</h3>" +
			'<img class="resize" src ="http://i.imgur.com/6BrY4NV.jpg" alt="Springstraat">' +
			"<audio controls loop>" +
			'<source src="https://instaud.io/_/13Gz.mp3">' +
			"</audio>" +
			"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel mollis urna, et tempor justo. Vivamus pulvinar finibus turpis ut posuere. Nam non eros pulvinar, auctor nulla ac, varius orci. Sed sem dolor, consequat nec felis eget, egestas rhoncus orci. Quisque tempor elementum libero, quis ornare urna tempus sit amet.</p>" +
			"</div>"
	],
	[
		'<div class="info_content">' +
			"<h3>Market Vredenburg</h3>" +
			'<img class="resize" src ="http://i.imgur.com/Co6Fy8g.jpg" alt="Market Vredenburg">' +
			"<audio controls loop>" +
			'<source src="https://instaud.io/_/13GA.mp3">' +
			"</audio>" +
			"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel mollis urna, et tempor justo. Vivamus pulvinar finibus turpis ut posuere. Nam non eros pulvinar, auctor nulla ac, varius orci. Sed sem dolor, consequat nec felis eget, egestas rhoncus orci. Quisque tempor elementum libero, quis ornare urna tempus sit amet.</p>" +
			"</div>"
	],
	[
		'<div class="info_content">' +
			"<h3>Terrasjes Neude</h3>" +
			'<img class="resize" src ="http://i.imgur.com/sjBtspo.jpg" alt="Terrasjes Neude">' +
			"<audio controls loop>" +
			'<source src="https://instaud.io/_/13GB.mp3">' +
			"</audio>" +
			"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel mollis urna, et tempor justo. Vivamus pulvinar finibus turpis ut posuere. Nam non eros pulvinar, auctor nulla ac, varius orci. Sed sem dolor, consequat nec felis eget, egestas rhoncus orci. Quisque tempor elementum libero, quis ornare urna tempus sit amet.</p>" +
			"</div>"
	],
	[
		'<div class="info_content">' +
			"<h3>Stadhuisbrug</h3>" +
			'<img class="resize" src ="http://i.imgur.com/uRzA4wG.jpg" alt="Stadhuisbrug">' +
			"<audio controls loop>" +
			'<source src="https://instaud.io/_/13GE.mp3">' +
			"</audio>" +
			"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel mollis urna, et tempor justo. Vivamus pulvinar finibus turpis ut posuere. Nam non eros pulvinar, auctor nulla ac, varius orci. Sed sem dolor, consequat nec felis eget, egestas rhoncus orci. Quisque tempor elementum libero, quis ornare urna tempus sit amet.</p>" +
			"</div>"
	]
];

// Labels array for custom markers
const labels = "123456789";

function initMap() {
	var directionsService = new google.maps.DirectionsService();
	var directionsDisplay = new google.maps.DirectionsRenderer({
		suppressMarkers: true,
		suppressInfoWindows: true
	});

	var labelIndex = 0;

	var bounds = new google.maps.LatLngBounds();
	const mapOptions = {
		center: {
			lat: 43.2,
			lng: -79.8
		},
		zoom: 13,
		clickableIcons: false,
		styles: [
			{
				elementType: "geometry",
				stylers: [
					{
						color: "#ebe3cd"
					}
				]
			},
			{
				elementType: "labels.text.fill",
				stylers: [
					{
						color: "#523735"
					}
				]
			},
			{
				elementType: "labels.text.stroke",
				stylers: [
					{
						color: "#f5f1e6"
					}
				]
			},
			{
				featureType: "administrative",
				elementType: "geometry.stroke",
				stylers: [
					{
						color: "#c9b2a6"
					}
				]
			},
			{
				featureType: "administrative.land_parcel",
				elementType: "geometry.stroke",
				stylers: [
					{
						color: "#dcd2be"
					}
				]
			},
			{
				featureType: "administrative.land_parcel",
				elementType: "labels.text.fill",
				stylers: [
					{
						color: "#ae9e90"
					}
				]
			},
			{
				featureType: "landscape.natural",
				elementType: "geometry",
				stylers: [
					{
						color: "#dfd2ae"
					}
				]
			},
			{
				featureType: "poi",
				elementType: "geometry",
				stylers: [
					{
						color: "#dfd2ae"
					}
				]
			},
			{
				featureType: "poi",
				elementType: "labels.text.fill",
				stylers: [
					{
						color: "#93817c"
					}
				]
			},
			{
				featureType: "poi.park",
				elementType: "geometry.fill",
				stylers: [
					{
						color: "#a5b076"
					}
				]
			},
			{
				featureType: "poi.park",
				elementType: "labels.text.fill",
				stylers: [
					{
						color: "#447530"
					}
				]
			},
			{
				featureType: "road",
				elementType: "geometry",
				stylers: [
					{
						color: "#f5f1e6"
					}
				]
			},
			{
				featureType: "road.arterial",
				elementType: "geometry",
				stylers: [
					{
						color: "#fdfcf8"
					}
				]
			},
			{
				featureType: "road.highway",
				elementType: "geometry",
				stylers: [
					{
						color: "#f8c967"
					}
				]
			},
			{
				featureType: "road.highway",
				elementType: "geometry.stroke",
				stylers: [
					{
						color: "#e9bc62"
					}
				]
			},
			{
				featureType: "road.highway.controlled_access",
				elementType: "geometry",
				stylers: [
					{
						color: "#e98d58"
					}
				]
			},
			{
				featureType: "road.highway.controlled_access",
				elementType: "geometry.stroke",
				stylers: [
					{
						color: "#db8555"
					}
				]
			},
			{
				featureType: "road.local",
				elementType: "labels.text.fill",
				stylers: [
					{
						color: "#806b63"
					}
				]
			},
			{
				featureType: "transit.line",
				elementType: "geometry",
				stylers: [
					{
						color: "#dfd2ae"
					}
				]
			},
			{
				featureType: "transit.line",
				elementType: "labels.text.fill",
				stylers: [
					{
						color: "#8f7d77"
					}
				]
			},
			{
				featureType: "transit.line",
				elementType: "labels.text.stroke",
				stylers: [
					{
						color: "#ebe3cd"
					}
				]
			},
			{
				featureType: "transit.station",
				elementType: "geometry",
				stylers: [
					{
						color: "#dfd2ae"
					}
				]
			},
			{
				featureType: "water",
				elementType: "geometry.fill",
				stylers: [
					{
						color: "#b9d3c2"
					}
				]
			},
			{
				featureType: "water",
				elementType: "labels.text.fill",
				stylers: [
					{
						color: "#92998d"
					}
				]
			}
		]
	};

	// Display a new map on the page
	const map = new google.maps.Map(document.getElementById("map"), mapOptions);
	//map.setTilt(60);

	// Display multiple markers on the map
	var infoWindow = new google.maps.InfoWindow({
		maxWidth: 370
	});

	//var abc = ['abcddddd', 'asdf', 'adsfdgasdf', 'adsfs', 's'];

	// Loop through the markers array
	for (var i = 0; i < markers.length; i++) {
		var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
		bounds.extend(position);
		var marker = new google.maps.Marker({
			map: map,
			position: position,
			label: labels[labelIndex++ % labels.length],
			title: markers[i][0]
		});
		google.maps.event.addListener(
			marker,
			"click",
			(function(marker, i) {
				return function() {
					//console.log(infoWindowContent[i][0]);
					infoWindow.setContent(infoWindowContent[i][0]);
					infoWindow.open(map, marker);
				};
			})(marker, i)
		);
	}

	// Drawing the path between the markers
	directionsDisplay.setMap(map);
	calculateAndDisplayRoute(directionsService, directionsDisplay);

	// Center map to fit all markers on the screen
	map.fitBounds(bounds);
	map.setCenter(bounds.getCenter());
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
	var waypoints = [
		{
			location: {
				lat: markers[1][1],
				lng: markers[1][2]
			}
		},
		{
			location: {
				lat: markers[2][1],
				lng: markers[2][2]
			}
		},
		{
			location: {
				lat: markers[3][1],
				lng: markers[3][2]
			}
		},
		{
			location: {
				lat: 52.088098,
				lng: 5.119081
			}
		},
		{
			location: {
				lat: 52.092867,
				lng: 5.118712
			}
		},
		{
			location: {
				lat: 52.092734,
				lng: 5.119835
			}
		},
		{
			location: {
				lat: 52.092238,
				lng: 5.120003
			}
		},
		{
			location: {
				lat: 52.091595,
				lng: 5.120137
			}
		}
	];
	directionsService.route(
		{
			origin: {
				lat: markers[0][1],
				lng: markers[0][2]
			},
			destination: {
				lat: markers[5][1],
				lng: markers[5][2]
			},
			waypoints: waypoints,
			optimizeWaypoints: true,
			travelMode: "WALKING"
		},
		function(response, status) {
			if (status === "OK") {
				directionsDisplay.setDirections(response);
			}
		}
	);
}