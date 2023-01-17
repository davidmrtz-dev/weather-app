export type MapLayerColors = 'red' | 'blue' | 'green';

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

export interface ThirdSection extends Wind, Rain, Clouds {};
export interface Content {
  firstSection: Weather | undefined,
  secondSection: Main | undefined,
  thirdSection: ThirdSection | undefined;
}

export interface WeatherResponse {
  weather?: Weather [];
  main?: Main;
  wind?: Wind;
  rain?: Rain;
  clouds?: Clouds;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Main {
  temp?: number;
  feels_like?: number;
  temp_min?: number;
  pressure: number;
  temp_max?: number;
  humidity?: number;
  sea_level?: number;
  grnd_level?: number;
}

export interface Wind {
  speed?: number;
  deg?: number;
  gust?: number;
}

export interface Rain {
  '1h'?: number;
}

export interface Clouds {
  all: number;
}

export const mockResponse = {
  "coord": {
    "lon": 10.99,
    "lat": 44.34
  },
  "weather": [
    {
      "id": 501,
      "main": "Rain",
      "description": "moderate rain",
      "icon": "10d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 298.48,
    "feels_like": 298.74,
    "temp_min": 297.56,
    "temp_max": 300.05,
    "pressure": 1015,
    "humidity": 64,
    "sea_level": 1015,
    "grnd_level": 933
  },
  "visibility": 10000,
  "wind": {
    "speed": 0.62,
    "deg": 349,
    "gust": 1.18
  },
  "rain": {
    "1h": 3.16
  },
  "clouds": {
    "all": 100
  },
  "dt": 1661870592,
  "sys": {
    "type": 2,
    "id": 2075663,
    "country": "IT",
    "sunrise": 1661834187,
    "sunset": 1661882248
  },
  "timezone": 7200,
  "id": 3163858,
  "name": "Zocca",
  "cod": 200
};