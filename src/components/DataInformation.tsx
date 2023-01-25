import LocationMap from "./LocationMap";
import SunInformation from "./SunInformation";
import Validations from "./Validations";

const DataDisplay = () => {
  return (
    <div className="container">
      <SunInformation />
      <LocationMap />
      <Validations />
    </div>
  );
};

export default DataDisplay;
