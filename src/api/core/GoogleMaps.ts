import * as Http from '../Https';
import { LatLngLiteral } from "leaflet";

const apiKey = 'AIzaSyBzaLAk-UDpkTvnFXOZIJehm0bKglvJQpM';

export const getGeocode = async (location: LatLngLiteral): Promise<any> => {
  const result = await Http.get(`/geocode/json?latlng=${location.lat},${location.lng}&key=${apiKey}`);
  return result.data;
};
