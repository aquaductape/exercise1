const map = L.map("mapid").setView([15.45, 18.73], 2);

L.tileLayer(
  "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
  {
    maxZoom: 20,
    attribution:
      '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
  }
).addTo(map);

const circle = L.circle([15.45, 18.73], {
  color: "blue",
  fillColor: "blue",
  fillOpacity: 0.2,
  radius: 16170000,
  // radius: 1017000,
}).addTo(map);

const airplaneIcon = L.icon({
  iconUrl: "../assets/img/airplaneIcon.svg",
  iconSize: [28, 28],
  color: "#fff",
  fillColor: "#fff",
  // iconAnchor: [0, 0],
  // popupAnchor: [-3, -76],
});

L.marker([15.45, 18.73], { icon: airplaneIcon }).addTo(map);
