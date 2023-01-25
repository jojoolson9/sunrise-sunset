import { LocationInformation } from "../types/IpBase";
import { SunriseSunsetResponse } from "../types/SunriseSunset";

interface SunInformationProps {
  location: LocationInformation;
  sun?: SunriseSunsetResponse;
}

const SunInformation = (props: SunInformationProps) => {
  if (!props.sun) {
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
        <h4 className="alert-heading">{formatLocation(props.location)}</h4>
        <br />
        The sun will rise at <b>{props.sun.sunrise} UTC</b>
        <br />
        The sun will set at <b>{props.sun.sunset} UTC</b>
        <br />
      </div>
    </div>
  );
};

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
