import {
  Marker,
  Popup,
  useMapEvents
} from 'react-leaflet'
import { LatLngLiteral, LocationEvent } from "leaflet";
import { ControledLayers } from './ControledLayers';
import { LocEvent } from '../../@types';
import { icon } from '../../utils';

const LocationMarker = ({
  position,
  setPosition
}: {
  position: LatLngLiteral | null;
  setPosition: (pos: LatLngLiteral) => void;
}): null | JSX.Element => {
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
