function initMap() {
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(maps, {
      center: {
        lat: 21.0332864,
        lng: -89.6395959
      },
      zoom: 17,
  });
}
