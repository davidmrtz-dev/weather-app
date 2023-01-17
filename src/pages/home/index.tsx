import { LatLngLiteral } from 'leaflet';
import { useEffect, useState } from 'react';
import { City, Content, mockResponse, WeatherResponse } from '../../@types';
import { getCitiesByLocation } from '../../api/core/GeoDB';
import Map from '../../components/map';
import Bottom from './bottom';
import Header from './header';
import { LocationRequester } from './location/LocationRequester';


const parseWeatherToContent = (data: WeatherResponse): Content => ({
  firstSection: data.weather ? data.weather[0] : undefined,
  secondSection: data.main,
  thirdSection: data.wind && data.rain && data.clouds ? {...data.wind, ...data.rain, ...data.clouds} : undefined
});

const Home = (): JSX.Element => {
  const [position, setPosition] = useState<null | LatLngLiteral>(null);
  const [nearCities, setNearCities] = useState<City []>([]);
  const [content, setContent] = useState<Content | null>(null);

  const getCities = async(location: LatLngLiteral): Promise<void> => {
    const result = await getCitiesByLocation(location, '100');
    setNearCities(result.data);
  };

  // useEffect(() => {
  //   setContent(parseWeatherToContent(mockResponse));
  //   getCities
  // }, []);

  return (
    <>
      <div style={{
        padding: '0 16px'
      }}>
        <Header content={content} />
        <Map position={position} />
        <Bottom
          nearCities={nearCities}
          setPosition={setPosition}
        />
      </div>
      <LocationRequester  {...{ open: !position, setPosition: setPosition }}/>
    </>
  );
};

export default Home;