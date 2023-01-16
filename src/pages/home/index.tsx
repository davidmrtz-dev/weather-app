import { LatLngLiteral } from 'leaflet';
import { useEffect, useState } from 'react';
import { City } from '../../@types';
import { getCitiesByLocation } from '../../api/core/GeoDB';
import Map from '../../components/map';
import { Header } from './header/Header';

const Home = (): JSX.Element => {
  const defaultLocation: LatLngLiteral = {lat: 19.274919, lng: -99.147155};
  const [position, setPosition] = useState<null | LatLngLiteral>(null);
  const [nearCities, setNearCities] = useState<City []>([]);

  const getCities = async(location: LatLngLiteral): Promise<void> => {
    const result = await getCitiesByLocation(location, '100');
    setNearCities(result.data);
  };

  // useEffect(() => {
  //   if (position) {
  //     getCities(position);
  //   }
  // }, [position]);

  useEffect(() => {
    console.log('nearcities:', nearCities);
  }, [nearCities]);

  return (
    <div style={{
      padding: '0 16px'
    }}>
      <Header
        position={position}
      />
      <Map
        defaultLocation={defaultLocation}
        position={position}
        nearCities={nearCities}
        setPosition={setPosition}
      />
    </div>
  );
};

export default Home;