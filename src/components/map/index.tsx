import {
  MapContainer,
  TileLayer,
} from 'react-leaflet'
import { LatLngLiteral } from "leaflet";
import "leaflet/dist/leaflet.css";
import LocationMarker from './LocationMarker';
import { useEffect, useState } from 'react';
import { getCitiesByLocation } from '../../api/core/GeoDB';
import { City } from '../../@types';
import styled from 'styled-components';
import NearCity from './NearCity';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const CitiesContainer = styled.div`
  background-color: gray;
  display: flex;
`;

const MapWrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Map = (): JSX.Element => {
  const defaultLocation: LatLngLiteral = {lat: 19.274919, lng: -99.147155};
  const [position, setPosition] = useState<null | LatLngLiteral>(null);
  const [nearCities, setNearCities] = useState<City []>([]);

  const getCities = async(location: LatLngLiteral): Promise<void> => {
    const result = await getCitiesByLocation(location, '100');
    setNearCities(result.data);
  };

  useEffect(() => {
    if (position) {
      getCities(position);
    }
  }, [position]);

  useEffect(() => {
    console.log('nearcities:', nearCities);
  }, [nearCities]);

  return(
    <Container>
      <CitiesContainer>
        {nearCities.length > 0 && nearCities.map((city: City) =>
          <NearCity city={city} onClick={setPosition} />)
        }
      </CitiesContainer>
      <MapWrapper>
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
          <LocationMarker position={position} setPosition={setPosition} />
        </MapContainer>
      </MapWrapper>
    </Container>
  );
};

export default Map;
