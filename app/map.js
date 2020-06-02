const mymap = L.map("mapid").setView([21.505, -0.09], 1);

L.tileLayer(
  "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
  {
    maxZoom: 20,
    attribution:
      '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
  }
).addTo(mymap);

var circle = L.circle([51.508, -0.11], {
  color: "blue",
  fillColor: "blue",
  fillOpacity: 0.2,
  radius: 16170000,
}).addTo(mymap);
