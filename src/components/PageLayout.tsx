import { useState } from "react";
import IpInputForm from "./IpInputForm";
import { SunData } from "../types/SunData";
import DataDisplay from "./DataInformation";

const PageLayout = () => {
  const [sunData, setSunData] = useState<SunData | undefined>();

  return (
    <>
      <div className="text-muted w-100 text-lg-center">
        Fill out the input below with your IP Address to get the time (in UTC) of the sunrise and
        sunset in your area!
      </div>
      <hr />
      <IpInputForm setSunData={setSunData} />
      <DataDisplay sunData={sunData} />
    </>
  );
};

export default PageLayout;
