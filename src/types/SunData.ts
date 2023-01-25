import { IpBaseErrorResponse, LocationInformation } from "./IpBase";
import { SunriseSunsetResponse } from "./SunriseSunset";

export interface SunData {
  sunTimes?: SunriseSunsetResponse;
  locationInformation: {
    errors?: IpBaseErrorResponse;
    locationInformation?: LocationInformation;
  };
}
