import {
  MapContainer,
  TileLayer,
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

const Map = (): JSX.Element => {
  const defaultLocation: LatLngExpression = [19.274919, -99.147155];

  return(
    <MapContainer
      center={defaultLocation}
      zoom={13}
      style={{ width: "90%", height: 500 }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
  );
};

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
      <Layers location={position}/>
    </>
  )
};

const Layers = ({ location }: { location: LatLngExpression}):JSX.Element => {
  return(<LayersControl position="topright">
    <LayersControl.Overlay name='Layer-1' checked>
      <Circle
        center={location}
        pathOptions={{ fillColor: 'blue' }}
        radius={3200}
      />
    </LayersControl.Overlay>
    <LayersControl.Overlay name='Layer-2'>
        <Circle
          center={location}
          pathOptions={{ fillColor: 'red' }}
          radius={1100}
          stroke={false}
        />
    </LayersControl.Overlay>
    <LayersControl.Overlay name='Layer-3'>
      <Circle
        center={location}
        pathOptions={{ color: 'green', fillColor: 'green' }}
        radius={2200}
      />
    </LayersControl.Overlay>
  </LayersControl>);
};

export default Map;