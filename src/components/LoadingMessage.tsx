import { useAppContext } from "../state/AppContext";

const LoadingMessage = () => {
  const { ipAddress, loadingState } = useAppContext();

  // Adding a better loading display, like a spinner or something, would be nice!
  // Feel free to throttle your network to see how this loading message appears
  // more properly.
  return loadingState ? (
    <div className="row justify-content-center mb-3 w-100">
      <div className="col">{`Fetching your SunData for IP Address ${ipAddress}...`}</div>
    </div>
  ) : (
    <></>
  );
};

export default LoadingMessage;
