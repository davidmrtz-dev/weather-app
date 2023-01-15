import {
  Marker,
  Popup,
  LayersControl,
  Circle,
  useMapEvents
} from 'react-leaflet'
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useState } from 'react';
import { MapLayerColors } from '../../@types';

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
  })

  return position === null ? null : (
    <>
      <Marker position={position} icon={icon}>
        <Popup>You are here</Popup>
      </Marker>
      <ControledLayers location={position}/>
    </>
  )
};

const ControledLayers = ({ location }: { location: LatLngExpression}):JSX.Element => {
  return(<LayersControl position="topright">
    <ControledLayer
      name='Layer-1'
      location={location}
      color='green'
      fillColor='green'
      radius={2200}
      checked
    />
  </LayersControl>);
};

const ControledLayer = ({
  name,
  location,
  color,
  fillColor,
  radius,
  checked
}: {
  name: string;
  location: LatLngExpression,
  color: MapLayerColors,
  fillColor: MapLayerColors,
  radius: number,
  checked?: boolean
}): JSX.Element => <LayersControl.Overlay name={name} checked={checked}>
  <Circle
    center={location}
    pathOptions={{ color, fillColor}}
    radius={radius}
  />
</LayersControl.Overlay>;

export default LocationMarker;