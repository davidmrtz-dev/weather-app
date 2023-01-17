import { Button, Drawer, Space } from 'antd';
import { LatLngLiteral } from 'leaflet';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { City, Content, mockResponse, WeatherResponse } from '../../@types';
import { getCitiesByLocation } from '../../api/core/GeoDB';
import Map from '../../components/map';
import Bottom from './bottom';
import Header from './header';
import styled from 'styled-components';


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

const LocationRequester = ({
  open,
  setPosition
}: {
  open: boolean;
  setPosition: (newPos: LatLngLiteral) => void;
}): JSX.Element => {

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setPosition({ lat: position.coords.latitude, lng: position.coords.longitude });
      });
    } else {
      // TODO: Set a default center
    }
  }, []);

  return(<Drawer
    placement={'left'}
    open={open}
    key={'top'}
    closable={false}
    style={{
      width: 360,
      height: '100%',
      position: 'absolute',
      left: 0,
      right: 0,
      marginLeft: 'auto',
      marginRight: 'auto'
    }}
    bodyStyle={{
      display: 'flex',
      flexDirection: 'column',
      boxShadow: 'none !important',
      background: 'linear-gradient(25deg, rgba(141,176,244,1) 35%, rgba(112,153,232,1) 100%)'
    }}
    contentWrapperStyle={{
      width: '100%',
      boxShadow: 'none'
    }}
  >
  </Drawer>
  );
};

export default Home;