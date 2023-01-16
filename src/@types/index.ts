export type MapLayerColors = 'red' | 'blue' | 'green';
export interface LocEvent {
  latitude?: number;
  longitude?: number;
};

export interface City {
  city: string;
  country: string;
  countryCode: string;
  distance: number;
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  population: number;
  region: string;
  regionCode: string;
  type: string;
  wikiDataId: string;
};