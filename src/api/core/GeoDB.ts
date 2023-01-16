import * as Http from '../Https';
import { LatLngLiteral } from "leaflet";

export const getCitiesByLocation = async (location: LatLngLiteral, radius: string): Promise<any> => {
  const result = await Http.get(
    `/locations/${location.lat}${location.lng}/nearbyCities`,
    { radius }
  );
  return result.data;
};
