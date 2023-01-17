import {
  MapContainer,
  TileLayer,
} from 'react-leaflet'
import { LatLngLiteral } from "leaflet";
import "leaflet/dist/leaflet.css";
import LocationMarker from './LocationMarker';
import styled from 'styled-components';


const MapWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Map = ({
  position,
  setPosition
}: {
  position: LatLngLiteral | null;
  setPosition: (newPos: LatLngLiteral) => void;
}): JSX.Element => <MapWrapper>
  <MapContainer
    center={{lat: 19.274919, lng: -99.147155}}
    zoom={13}
    style={{ width: 360, height: 320, zIndex: 1 }}
    dragging={false}
    scrollWheelZoom={false}
  >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <LocationMarker position={position} setPosition={setPosition} />
  </MapContainer>
</MapWrapper>;

export default Map;
