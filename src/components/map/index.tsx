import {
  MapContainer,
  TileLayer,
} from 'react-leaflet'
import { LatLngLiteral } from "leaflet";
import "leaflet/dist/leaflet.css";
import LocationMarker from './LocationMarker';

const Map = (): JSX.Element => {
  const defaultLocation: LatLngLiteral = {lat: 19.274919, lng: -99.147155};

  return(
    <MapContainer
      center={defaultLocation}
      zoom={13}
      style={{ width: 500, height: 350, zIndex: 1 }}
      dragging={false}
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
