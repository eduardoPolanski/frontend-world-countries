export interface ResponseCountries {
  data: Data;
  account_id: number;
}

interface Data {
  boards: Board[];
}

export interface Board {
  items_page: Itemspage;
}

interface Itemspage {
  items: Item[];
}

interface Item {
  column_values: Columnvalue[];
  id: string;
  name: string;
}

interface Columnvalue {
  id: string;
  text: string;
}

export interface CountryData {
  name: string;
  region: string;
  subregion: string;
  capital: string;
  location: string;
  internationalCountryCode: string;
  countryCode: string;
  url: string;
  phone_code: string;
  currency: string;
  currency_name: string;
  timezones: Timezone[];
  latitude: string;
  longitude: string;
  population: string;
  area: string;
  populationDensity: string;
  netMigration: string;
  gpd: string;
  birthrate: string;
  deathrate: string;
}

interface Timezone {
  zoneName: string;
  gmtOffset: number;
  gmtOffsetName: string;
  abbreviation: string;
  tzName: string;
}
