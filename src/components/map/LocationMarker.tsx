import {
  Marker,
  Popup,
  useMapEvents
} from 'react-leaflet'
import { LatLngLiteral, LocationEvent } from "leaflet";
import { useEffect, useState } from 'react';
import { ControledLayers } from './ControledLayers';
import { getGeocode } from '../../api/core/GoogleMaps';
import { LocEvent } from '../../@types';
import { icon } from '../../utils';

const LocationMarker = (): null | JSX.Element => {
  const [results, setResults] = useState<null | unknown []>(null);
  const [position, setPosition] = useState<null | LatLngLiteral>(null);

  const setGeocode = async(location: LatLngLiteral): Promise<void> => {
    const result = await getGeocode(location);
    setResults(result.results);
  };

  const map = useMapEvents({
    click() {
      if (!position) map.locate();
    },
    locationfound(e: LocationEvent & LocEvent) {
      const { latitude: lat, longitude: lng } = e;
      if (!position && lat && lng) {
        setPosition({ lat, lng });
        map.flyTo(e.latlng, map.getZoom());
      }
    },
  });

  useEffect(() => {
    if (position) {
      const newLng = position.lng + 0.1;
      setTimeout(()=>{
        map.flyTo({ lat: position.lat, lng: newLng});
      }, 5000);
      // setGeocode(position);
    }
  }, [position]);

  useEffect(() => {
    if (results) {
      console.log(results);
    }
  }, [results])

  return position === null ? null : (
    <>
      <Marker position={position} icon={icon}>
        <Popup>You are here</Popup>
      </Marker>
      <ControledLayers location={position}/>
    </>
  )
};

export default LocationMarker;
