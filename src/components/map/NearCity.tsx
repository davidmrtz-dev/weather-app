import { LatLngLiteral } from "leaflet";
import styled from "styled-components";
import { City } from "../../@types";

const CityContainer = styled.div`
  height: 100%;
  width: 625px;
  margin: 0 5px;
  background-color: white;
`;

const NearCity = ({
  city,
  onClick
}: {
  city: City;
  onClick: (pos: LatLngLiteral) => void;
}): JSX.Element => <CityContainer onClick={() => onClick({ lat: city.latitude, lng: city.longitude })}>
  <ul>
    <li>City: {city.city}</li>
    <li>Country: {city.country}</li>
    <li>Distance: {city.distance} km</li>
    <li>Population: {city.population}</li>
  </ul>
</CityContainer>;

export default NearCity;