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

const LocationMarker = (): null | JSX.Element => {
  const icon = new L.Icon({
    iconUrl: "./marker.png",
    iconSize: new L.Point(25, 31),
    iconAnchor: [13, 17],
  });
  const [position, setPosition] = useState<null | LatLngExpression>(null)
  const map = useMapEvents({
    dblclick() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })

  return position === null ? null : (
    <Marker position={position} icon={icon}>
      <Popup>You are here</Popup>
    </Marker>
  )
};

const Home = (): JSX.Element => {
  const location: LatLngExpression = [20.608544, -100.388853];
  return (
    <MapContainer
      center={location}
      zoom={13}
      style={{ width: "90%", height: 500 }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LayersControl position="topright">
        <LayersControl.Overlay name='Layer-1'>
          <Circle
            center={location}
            pathOptions={{ fillColor: 'blue' }}
            radius={1200}
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
      </LayersControl>
      <LocationMarker />
    </MapContainer>
  );
};

export default Home;