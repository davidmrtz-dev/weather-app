import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
  LayerGroup,
  Circle,
  Rectangle,
  FeatureGroup,
  useMapEvents
} from 'react-leaflet'
import { LatLngExpression, LatLngBoundsExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useState } from 'react';

const LocationMarker = (): null | JSX.Element => {
  const icon = new L.Icon({
    iconUrl: "./marker.png",
    iconSize: new L.Point(25, 31),
    iconAnchor: [13, 41],
  });
  const [position, setPosition] = useState<null | LatLngExpression>(null)
  const map = useMapEvents({
    click() {
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
  const location: LatLngExpression = [28.261963, -108.262717];
  const rectangle: LatLngBoundsExpression = [
    [20.651892, -100.376030],
    [20.654572, -100.374549]
  ];
  const icon = new L.Icon({
    iconUrl: "./marker.png",
    iconSize: new L.Point(25, 31),
    iconAnchor: [13, 41],
  });

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
        <LayersControl.Overlay name="Marker with popup">
          <Marker position={location} icon={icon}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Layer group with circles">
          <LayerGroup>
            <Circle
              center={[20.651831, -100.361452]}
              pathOptions={{ fillColor: 'blue' }}
              radius={200}
            />
            <Circle
              center={[20.653467, -100.361506]}
              pathOptions={{ fillColor: 'red' }}
              radius={100}
              stroke={false}
            />
            <LayerGroup>
              <Circle
                center={[20.649763, -100.363533]}
                pathOptions={{ color: 'green', fillColor: 'green' }}
                radius={100}
              />
            </LayerGroup>
          </LayerGroup>
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Feature group">
          <FeatureGroup pathOptions={{ color: 'purple' }}>
            <Popup>Popup in FeatureGroup</Popup>
            <Circle center={[20.650172, -100.370905]} radius={200} />
            <Rectangle bounds={rectangle} />
          </FeatureGroup>
        </LayersControl.Overlay>
      </LayersControl>
      <LocationMarker />
    </MapContainer>
  );
};

export default Home;