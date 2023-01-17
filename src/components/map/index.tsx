import {
  MapContainer,
  TileLayer,
} from 'react-leaflet'
import { LatLngLiteral } from "leaflet";
import "leaflet/dist/leaflet.css";
import LocationMarker from './LocationMarker';
import { City } from '../../@types';
import styled from 'styled-components';
import NearCity from './NearCity';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const CitiesContainer = styled.div`
  display: flex;
  background-color: gray;
`;

const MapWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Map = ({
  defaultLocation,
  position,
  nearCities,
  setPosition
}: {
  defaultLocation: LatLngLiteral;
  position: LatLngLiteral | null;
  nearCities: City [];
  setPosition: (newPos: LatLngLiteral) => void;
}): JSX.Element => <Container>
  <MapWrapper>
    <MapContainer
      center={defaultLocation}
      zoom={13}
      style={{ width: 360, height: 350, zIndex: 1 }}
      dragging={false}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker position={position} setPosition={setPosition} />
    </MapContainer>
  </MapWrapper>
  <CitiesContainer>
    {nearCities.length > 0 && nearCities.map((city: City) =>
      <NearCity city={city} onClick={setPosition} />)
    }
  </CitiesContainer>
</Container>;

export default Map;
