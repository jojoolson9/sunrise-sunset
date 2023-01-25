import { useEffect } from "react";
import { useAppContext } from "../state/AppContext";
// @ts-ignore - 3rd party does not export a types file for us :(
import * as OpenStreetMap from "osm";

import "../styles/LocationMap.scss";

const LocationMap = () => {
  const { loadingState, locationInformation } = useAppContext();

  // Ideally this code is something prettier, but working with a third party package can be difficult ;)
  useEffect(() => {
    // Remove existing map when page is loading/information changes
    document.getElementById("location-map-image")?.remove();
    if (!loadingState && locationInformation?.longitude && locationInformation?.latitude) {
      const newMap = OpenStreetMap()
        .position(locationInformation.latitude, locationInformation.longitude)
        .show();
      newMap.setAttribute("id", "location-map-image");
      document.getElementById("location-map")?.append(newMap);
    }
    // only re-render when the loading state or location information changes
  }, [locationInformation, loadingState]);

  return (
    <div className="row mb-1">
      <div id="location-map" className="container w-100 location-map" />
    </div>
  );
};

export default LocationMap;
