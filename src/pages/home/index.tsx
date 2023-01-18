import { LatLngLiteral } from 'leaflet';
import { useEffect, useState } from 'react';
import { City, Content, mockResponse, WeatherResponse } from '../../@types';
import { getCitiesByLocation } from '../../api/core/GeoDB';
import { LoadingMask } from '../../atoms/LoadingMask';
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
  const [region, setRegion] = useState('');
  const [updateTop, setUpdateTop] = useState(false);

  const getCities = async(location: LatLngLiteral): Promise<void> => {
    const result = await getCitiesByLocation(location, '100');
    setNearCities(result.data);
  };

  useEffect(() => {
    setTimeout(() => {
      setContent(parseWeatherToContent(mockResponse));
    }, 3000);
  }, []);

  useEffect(() => {
    if (position && content && nearCities.length === 0) getCities(position);
    if (nearCities.length > 0 && !region) setRegion(nearCities[0].region);
  }, [position, content, nearCities, region]);

  useEffect(() => {
    if (position) {
      setUpdateTop(true);
    }
  }, [position]);

  useEffect(() => {
    if (updateTop) {
      setTimeout(() => {
        setUpdateTop(false);
      }, 1000);
    }
  }, [updateTop])

  return (
    <>
      <div style={{
        padding: '0 16px'
      }}>
        {(content && position) ? (<>
          <Header
            content={content}
            region={region}
            updating={updateTop}
          />
          <Map position={position} />
          <Bottom
            nearCities={nearCities}
            setPosition={setPosition}
          />
        </>) : (<LoadingMask fixed />)}
      </div>
      <LocationRequester  {...{ open: !position, setPosition: setPosition }}/>
    </>
  );
};

export default Home;