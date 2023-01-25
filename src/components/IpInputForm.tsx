import SubmitButton from "./SubmitButton";
import TextInput from "./TextInput";
import LoadingMessage from "./LoadingMessage";

const IpInputForm = () => {
  return (
    <>
      <div className="row align-items-end mb-3">
        <div className="col-9">
          <TextInput />
        </div>
        <div className="col-3">
          <SubmitButton />
        </div>
      </div>
      <LoadingMessage />
    </>
  );
};

export default IpInputForm;
