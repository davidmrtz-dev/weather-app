import * as Http from '../Https';
import { LatLngLiteral } from "leaflet";
import { City } from '../../@types';

export const getCitiesByLocation = async (location: LatLngLiteral, radius: string): Promise<{ data: City []}> => {
  const result = await Http.get(
    `/locations/${location.lat}${location.lng}/nearbyCities`,
    { radius }
  );
  return result.data;
};
