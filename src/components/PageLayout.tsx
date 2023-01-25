import IpInputForm from "./IpInputForm";
import DataDisplay from "./DataInformation";

const PageLayout = () => {
  return (
    <>
      <div className="text-muted w-100 text-lg-center">
        Fill out the input below with your IP Address to get the time (in UTC) of the sunrise and
        sunset in your area!
      </div>
      <hr />
      <IpInputForm />
      <DataDisplay />
    </>
  );
};

export default PageLayout;
