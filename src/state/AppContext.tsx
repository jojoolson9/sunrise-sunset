import { createContext, useContext, useState } from "react";
import { IpBaseErrorResponse, LocationInformation } from "../types/IpBase";
import { SunriseSunsetResponse } from "../types/SunriseSunset";

export type AppContextProps = {
  ipAddress: string;
  updateIpAddress: (textInput: string) => void;

  loadingState: boolean;
  updateLoadingState: (loading: boolean) => void;

  locationInformation?: LocationInformation;
  updateLocationInformation: (information?: LocationInformation) => void;

  sunTimes?: SunriseSunsetResponse;
  updateSunTimes: (sunInformation?: SunriseSunsetResponse) => void;

  errorState?: IpBaseErrorResponse;
  updateErrorState: (errors?: IpBaseErrorResponse) => void;
};

// Initialize context
const AppContext = createContext({
  ipAddress: "",
  updateIpAddress: (textInput: string) => {},

  loadingState: false,
  updateLoadingState: (loading: boolean) => {},

  locationInformation: undefined,
  updateLocationInformation: (information?: LocationInformation) => {},

  sunTimes: undefined,
  updateSunTimes: (sunInformation?: SunriseSunsetResponse) => {},

  errorState: undefined,
  updateErrorState: (errors?: IpBaseErrorResponse) => {},
} as AppContextProps);

const AppProvider = (props: { children: any }) => {
  // This is a collection of all the relevant information needed
  // across the app. While this logic is pretty basic, it is 
  // good for handling more complex logic that may occur when
  // data is updated for more complex applications
  const [ipAddress, setIpAddress] = useState<string>("");
  const [loadingState, setLoadingState] = useState<boolean>(false);
  const [sunTimes, setSunTimes] = useState<SunriseSunsetResponse | undefined>();
  const [locationInformation, setLocationInformation] = useState<LocationInformation | undefined>();
  const [errorState, setErrorState] = useState<IpBaseErrorResponse | undefined>();

  // All the functions that can be used by the app to update the
  // state data.
  const updateIpAddress = (textInput: string) => {
    setIpAddress(textInput);
  };

  const updateLoadingState = (loading: boolean) => {
    setLoadingState(loading);
  };

  const updateSunTimes = (sunInformation?: SunriseSunsetResponse) => {
    setSunTimes(sunInformation);
  };

  const updateLocationInformation = (information?: LocationInformation) => {
    setLocationInformation(information);
  };

  const updateErrorState = (errors?: IpBaseErrorResponse) => {
    setErrorState(errors);
  };

  const appContextValue = {
    ipAddress,
    updateIpAddress,
    loadingState,
    updateLoadingState,
    sunTimes,
    updateSunTimes,
    locationInformation,
    updateLocationInformation,
    errorState,
    updateErrorState,
  } as AppContextProps;

  return <AppContext.Provider value={appContextValue}>{props.children}</AppContext.Provider>;
};

const useAppContext = () => useContext(AppContext);

export { AppContext, AppProvider, useAppContext };
