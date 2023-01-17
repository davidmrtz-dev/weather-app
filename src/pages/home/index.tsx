import { LatLngLiteral } from 'leaflet';
import { useEffect, useState } from 'react';
import { City, Content, mockResponse, WeatherResponse } from '../../@types';
import { getCitiesByLocation } from '../../api/core/GeoDB';
import Map from '../../components/map';
import Bottom from './bottom';
import Header from './header';



const parseWeatherToContent = (data: WeatherResponse): Content => ({
  firstSection: data.weather ? data.weather[0] : undefined,
  secondSection: data.main,
  thirdSection: data.wind && data.rain && data.clouds ? {...data.wind, ...data.rain, ...data.clouds} : undefined
});

const Home = (): JSX.Element => {
  const defaultLocation: LatLngLiteral = {lat: 19.274919, lng: -99.147155};
  const [position, setPosition] = useState<null | LatLngLiteral>(null);
  const [nearCities, setNearCities] = useState<City []>([]);
  const [content, setContent] = useState<Content | null>(null);

  const getCities = async(location: LatLngLiteral): Promise<void> => {
    const result = await getCitiesByLocation(location, '100');
    setNearCities(result.data);
  };

  useEffect(() => {
    if (position) {
      setContent(parseWeatherToContent(mockResponse));
      // getCities(position);
    }
  }, [position]);

  useEffect(() => {
    if (content) {
    }
  }, [content]);

  useEffect(() => {
    console.log('nearcities:', nearCities);
  }, [nearCities]);

  return (
    <div style={{
      padding: '0 16px'
    }}>
      <Header
        position={position}
        content={content}
      />
      <Map
        defaultLocation={defaultLocation}
        position={position}
        nearCities={nearCities}
        setPosition={setPosition}
      />
      <Bottom />
    </div>
  );
};

export default Home;