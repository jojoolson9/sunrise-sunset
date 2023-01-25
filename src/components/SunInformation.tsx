import { useAppContext } from "../state/AppContext";
import { LocationInformation } from "../types/IpBase";
import { SunriseSunsetResponse } from "../types/SunriseSunset";

const SunInformation = () => {
  const { loadingState, sunTimes, locationInformation } = useAppContext();

  if (!showSunInformation(loadingState, sunTimes, locationInformation)) {
    return <></>;
  }

  // A designer could definitely come up with a prettier way to display
  // this information, but it highlights the important information in a
  // clean way.

  // It would also be good to understand whether the use case of this site
  // is to deliver the time in the relevant timezone of the IP, or whether
  // UTC is sufficient. Perhaps a future iteration would be offering that
  // conversion!

  // I would also add a loading state in a future iteration here so that
  // the experience is less sharp on the user.
  return (
    <div className="row">
      <div className="alert alert-success" role="alert">
        <h4 className="alert-heading">{formatLocation(locationInformation!)}</h4>
        <br />
        {/*
          The bang ! is used to indicate that we know for sure this will be defined.
          Since we make the check earlier to hide this component if there is no sun
          information, we know that, if it reaches this code, it is defined.
        */}
        The sun will rise at <b>{sunTimes!.sunrise} UTC</b>
        <br />
        The sun will set at <b>{sunTimes!.sunset} UTC</b>
        <br />
      </div>
    </div>
  );
};

const showSunInformation = (
  loadingState: boolean,
  sun?: SunriseSunsetResponse,
  locationInformation?: LocationInformation
) => {
  // If there is no sun information or if we are loading the new
  // sun information, we don't want to show the success alert
  return locationInformation && sun && sun.sunrise && sun.sunset && !loadingState;
};

// Pulled this logic out for cleaner visibility in the component
const formatLocation = (location: LocationInformation) => {
  let locationString = "";

  if (location?.zip) {
    locationString += `${location.zip}`;
  }

  ["city", "region", "country"].forEach((l) => {
    const typedL = l as "city" | "region" | "country";
    if (location?.[`${typedL}`]?.name_translated) {
      locationString =
        locationString.length > 0
          ? `${locationString} - ${location?.[`${typedL}`]?.name_translated}`
          : `${location?.[`${typedL}`]?.name_translated}`;
    }
  });

  if (locationString.length === 0) {
    locationString = "Unable to get location information";
  }

  return locationString;
};

export default SunInformation;
