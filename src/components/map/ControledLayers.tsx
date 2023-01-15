import {
  LayersControl,
  Circle,
  FeatureGroup,
  Popup,
} from 'react-leaflet'
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapLayerColors } from '../../@types';

export const ControledLayers = ({ location }: { location: LatLngExpression}):JSX.Element => {
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
  <FeatureGroup pathOptions={{ color, fillColor }}>
    <Popup>Popup in FeatureGroup</Popup>
    <Circle
      center={location}
      radius={radius}
    />
  </FeatureGroup>
</LayersControl.Overlay>;
