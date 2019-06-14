import polygons from './map-polygons.js';
import styles from './map-styles.js';

const googleMapsScript = document.createElement('script');
googleMapsScript.src = 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap';
document.head.appendChild(googleMapsScript);

let map;

window.initMap = function() {

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 55.78, lng: 37.68},
    zoom: 9,
    disableDefaultUI: true,
    styles: styles,

  });

  Object.keys(polygons).forEach(function (item) {
    new google.maps.Polygon({
      paths: polygons[item],
      strokeColor: '#ff4343',
      strokeOpacity: 0,
      strokeWeight: 2,
      fillColor: '#ff4343',
      fillOpacity: 0.12
    }).setMap(map);
  });
}


export default Map;
