import L from "leaflet";

export const icon = new L.Icon({
  iconUrl: "./marker.png",
  iconSize: new L.Point(25, 31),
  iconAnchor: [13, 17],
});

export const toCelsius = (n: number | undefined ) =>
  n ? (Math.abs(n) - 273.15).toFixed(2) : 0;