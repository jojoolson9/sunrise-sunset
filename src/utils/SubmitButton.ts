import axios from "axios";
import { LocationInformation, IpBaseErrorResponse } from "../types/IpBase";
import { SunriseSunsetResponse } from "../types/SunriseSunset";
import { SunData } from "../types/SunData";

// In general, it would be ideal to implement proper caching on all service
// calls so that repeated requests load instantly rather than having to make
// a full call again. In the past I have used node-cache.

export const getSunData = async (ipAddress: string): Promise<SunData | undefined> => {
  const locationInformation = await getLocationInformation(ipAddress);

  if (!locationInformation) {
    return;
  }

  const sunTimes = await getSunTimes(locationInformation as LocationInformation);
  return {
    locationInformation,
    sunTimes,
  };
};

export const getLocationInformation = async (
  ipAddress: string
): Promise<LocationInformation | IpBaseErrorResponse> => {
  try {
    const response = await axios.get(
      `https://api.ipbase.com/v2/info?apikey=WJCFtbb1MjRmMhHDOELfqVNRq9HDQJ5kPYaNxlAh&ip=${ipAddress}&language=en`
    );
    const location = response.data.data.location;
    return location;
  } catch (ex) {
    const errorResponse = (ex as any).response.data as IpBaseErrorResponse;
    return {
      ...errorResponse,
    };
  }
};

export const getSunTimes = async (
  locationInformation: LocationInformation
): Promise<SunriseSunsetResponse | undefined> => {
  const { latitude, longitude } = locationInformation;

  if (!longitude || !latitude) {
    return undefined;
  }

  try {
    const response = await axios.get(
      `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&date=today`
    );
    const times = response.data.results;
    return times;
  } catch (ex) {
    console.log(ex);
    return undefined;
  }
};
