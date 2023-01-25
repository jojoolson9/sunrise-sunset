import { useState } from "react";
import SubmitButton from "./SubmitButton";
import TextInput from "./TextInput";
import { SunData } from "../types/SunData";

interface IpInputFormProps {
  setSunData: (response?: SunData) => void;
}

const IpInputForm = (props: IpInputFormProps) => {
  const [currentIp, setCurrentIp] = useState<string | undefined>();
  const handleInputChange = (inputText: string) => {
    setCurrentIp(inputText);
  };

  return (
    <div className="row align-items-end mb-3">
      <div className="col-9">
        <TextInput handleChange={handleInputChange} />
      </div>
      <div className="col-3">
        <SubmitButton ipAddress={currentIp} setSunData={props.setSunData} />
      </div>
    </div>
  );
};

export default IpInputForm;
