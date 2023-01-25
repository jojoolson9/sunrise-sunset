import { useEffect } from "react";
import { LocationInformation } from "../types/IpBase";
// @ts-ignore - 3rd party does not export a types file for us :(
import * as OpenStreetMap from "osm";

import "../styles/LocationMap.scss";

interface LocationMapProps {
  locationInformation?: LocationInformation;
}

const LocationMap = (props: LocationMapProps) => {
  // Ideally this code is something prettier, but working with a third party package can be difficult ;)
  useEffect(() => {
    document.getElementById("location-map-image")?.remove();
    if (props.locationInformation?.longitude && props.locationInformation?.latitude) {
      const newMap = OpenStreetMap()
        .position(props.locationInformation.latitude, props.locationInformation.longitude)
        .show();
      newMap.setAttribute("id", "location-map-image");
      document.getElementById("location-map")?.append(newMap);
    }
  }, [props.locationInformation]); // only re-render when the location information changes

  return (
    <div className="row mb-1">
      <div id="location-map" className="container w-100 location-map" />
      {/* Adding some sort of loader functionality here would be nice */}
    </div>
  );
};

export default LocationMap;
