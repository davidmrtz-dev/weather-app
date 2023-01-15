import {
  Marker,
  Popup,
  useMapEvents
} from 'react-leaflet'
import { LatLngExpression } from "leaflet";
import L from "leaflet";
import { useState } from 'react';
import { ControledLayers } from './ControledLayers';

const LocationMarker = (): null | JSX.Element => {
  const icon = new L.Icon({
    iconUrl: "./marker.png",
    iconSize: new L.Point(25, 31),
    iconAnchor: [13, 17],
  });
  const [position, setPosition] = useState<null | LatLngExpression>(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
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