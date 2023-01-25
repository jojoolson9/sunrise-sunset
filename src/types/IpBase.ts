export interface IpBaseResponse {
  data: {
    ip: string;
    hostname: string;
    type: string;
    range_type: {
      type: string;
      description: string;
    };
    connection: {
      asn: number;
      organization: string;
      isp: string;
      range: string;
    };
    location: LocationInformation;
    tlds: string[];
    timezone: {
      id: string;
      current_time: string;
      code: string;
      is_daylight_saving: boolean;
      gmt_offset: number;
    };
    security: {
      is_anonymous: boolean;
      is_bot: boolean;
      is_known_attacker: boolean;
      is_proxy: boolean;
      is_spam: boolean;
      is_tor: boolean;
      proxy_type: string;
      threat_score: number;
    };
    domains: {
      count: number;
      domains: string[];
    };
  };
}

export interface LocationInformation {
  geonames_id: number;
  latitude: number;
  longitude: number;
  zip: string;
  continent: {
    code: string;
    name: string;
    name_translated: string;
  };
  country: {
    alpha2: string;
    alpha3: string;
    calling_codes: string[];
    currencies: {
      symbol: string;
      name: string;
      symbol_native: string;
      decimal_digits: number;
      rounding: number;
      code: string;
      name_plural: string;
    }[];
    emoji: string;
    ioc: string;
    languages: {
      name: string;
      name_native: string;
    }[];
    name: string;
    name_translated: string;
    timezones: string[];
    is_in_european_union: boolean;
    fips: string;
    geonames_id: number;
    hasc_id: string;
    wikidata_id: string;
  };
  city: {
    fips: string;
    alpha2: null;
    geonames_id: number;
    hasc_id: null;
    wikidata_id: string;
    name: string;
    name_translated: string;
  };
  region: {
    fips: string;
    alpha2: string;
    geonames_id: number;
    hasc_id: string;
    wikidata_id: string;
    name: string;
    name_translated: string;
  };
}

export interface IpBaseErrorResponse {
  message: string;
  errors: {
    [key: string]: string[];
  };
  info: string;
}
