import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
  LayerGroup,
  Circle,
  Rectangle,
  FeatureGroup
} from 'react-leaflet'
import { LatLngExpression, LatLngBoundsExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const Home = (): JSX.Element => {
  const location: LatLngExpression = [47.2154556, -1.5644531];
  const rectangle: LatLngBoundsExpression = [
    [51.49, -0.08],
    [51.5, -0.06],
  ];
  const icon = new L.Icon({
    iconUrl: "./marker.png",
    iconSize: new L.Point(25, 31),
    iconAnchor: [13, 41],
  });

  return (
    <MapContainer
      center={location}
      zoom={13}
      style={{ width: "90%", height: 500 }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={location} icon={icon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Home;