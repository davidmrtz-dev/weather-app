import {
  Marker,
  Popup,
  useMapEvents
} from 'react-leaflet'
import { LatLngLiteral, LocationEvent } from "leaflet";
import { useEffect, useState } from 'react';
import { ControledLayers } from './ControledLayers';
import { LocEvent } from '../../@types';
import { icon } from '../../utils';

const LocationMarker = (): null | JSX.Element => {
  const [position, setPosition] = useState<null | LatLngLiteral>(null);

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
      // const newLng = position.lng + 0.1;
      // setTimeout(()=>{
      //   map.flyTo({ lat: position.lat, lng: newLng});
      // }, 5000);
      // setGeocode(position);
    }
  }, [position]);

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
