import { getSunData } from "../utils/SubmitButton";
import { useAppContext } from "../state/AppContext";

const SubmitButton = () => {
  const {
    ipAddress,
    updateErrorState,
    updateLoadingState,
    loadingState,
    updateLocationInformation,
    updateSunTimes,
  } = useAppContext();

  const updateSunData = async () => {
    // We don't want users hammering the button, so disable it while it makes it's calls
    updateLoadingState(true);

    // We know ipAddress is defined, because otherwise the button would be disabled
    const sunData = await getSunData(ipAddress!);
    updateSunTimes(sunData?.sunTimes);
    updateLocationInformation(sunData?.locationInformation.locationInformation);
    updateErrorState(sunData?.locationInformation.errors);

    // Re-enable after the call succeeds/fails
    updateLoadingState(false);
  };

  return (
    <button
      disabled={loadingState || !ipAddress}
      onClick={() => updateSunData()}
      className="btn btn-primary w-100 py-3"
    >
      GO
    </button>
  );
};

export default SubmitButton;
