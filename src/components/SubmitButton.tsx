import { useEffect, useState } from "react";
import { getSunData } from "../utils/SubmitButton";
import { SunData } from "../types/SunData";

interface SubmitButtonProps {
  ipAddress?: string;
  setSunData: (response?: SunData) => void;
}

const SubmitButton = (props: SubmitButtonProps) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(!props.ipAddress);

  // Rerender button to enabled if IP Address is filled out
  useEffect(() => {
    setIsDisabled(!props.ipAddress);
  }, [props.ipAddress]);

  const updateSunData = async () => {
    setIsDisabled(true); // We don't want users hammering the button, so disable it while it makes it's calls

    const sunData = await getSunData(props.ipAddress!);
    props.setSunData(sunData);

    setIsDisabled(false); // Re-enable after the call succeeds/fails
  };

  return (
    <button
      disabled={isDisabled}
      onClick={() => updateSunData()}
      className="btn btn-primary w-100 py-3"
    >
      GO
    </button>
  );
};

export default SubmitButton;
