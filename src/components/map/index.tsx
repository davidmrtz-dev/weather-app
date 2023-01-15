import {
  MapContainer,
  TileLayer,
} from 'react-leaflet'
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import LocationMarker from './LocationMarker';

const Map = (): JSX.Element => {
  const defaultLocation: LatLngExpression = [19.274919, -99.147155];

  return(
    <MapContainer
      center={defaultLocation}
      zoom={13}
      style={{ width: "90%", height: 500 }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
  );
};

export default Map;