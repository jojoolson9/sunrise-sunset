import { IpBaseErrorResponse, LocationInformation } from "../types/IpBase";
import { SunData } from "../types/SunData";
import LocationMap from "./LocationMap";
import SunInformation from "./SunInformation";
import Validations from "./Validations";

interface DataDisplayProps {
  sunData?: SunData;
}

const DataDisplay = (props: DataDisplayProps) => {
  if (!props.sunData) {
    return <></>;
  }

  const { locationInformation, sunTimes } = props.sunData;

  return (
    <div className="container">
      <SunInformation location={locationInformation as LocationInformation} sun={sunTimes} />
      <LocationMap locationInformation={locationInformation as LocationInformation} />
      <Validations locationErrors={locationInformation as IpBaseErrorResponse} />
    </div>
  );
};

export default DataDisplay;
