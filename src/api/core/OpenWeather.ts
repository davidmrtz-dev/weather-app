import * as Http from '../Https';
import { LatLngLiteral } from "leaflet";
import { WeatherResponse } from '../../@types';

export const getWeatherByLocation = async (location: LatLngLiteral): Promise<{ data: WeatherResponse}> => {
  const result = await Http.get(
    `/locations/${location.lat}${location.lng}/nearbyCities`
  );
  return result.data;
};
