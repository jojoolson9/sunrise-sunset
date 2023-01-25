import { useAppContext } from "../state/AppContext";

const Validations = () => {
  const { errorState } = useAppContext();
  // Adding proper validations for the response from sunrise-sunset
  // would be a good next step as well. I built out an example
  // using the response from the IP Base errors. I did not dig
  // extremely into the various status code responses, so this
  // error handling may not be extensive enough.
  if (!errorState?.message) {
    return <></>;
  }

  const { message, errors, info } = errorState;
  return (
    <div className="row">
      <div className="alert alert-danger" role="alert">
        <h4 className="alert-heading">{message}</h4>
        <ul>
          {Object.keys(errors || {})
            .map((errorKey) => {
              return errors[errorKey].map((err, i) => {
                return <li key={`error-${i}`}>{err}</li>;
              });
            })
            .flat()}
        </ul>
        {info}
      </div>
    </div>
  );
};

export default Validations;
