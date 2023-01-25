import logo from "../images/sun.svg";
import { useAppContext } from "../state/AppContext";

const NavBar = () => {
  const { locationInformation } = useAppContext();

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <div className="container">
        <div className="row justify-content-between align-items-center w-100">
          <div className="col-4 d-flex justify-content-start">
            <span className="navbar-brand mb-0 h1">SunData</span>
          </div>
          {/*
            Show the city you are in based on inputted IP, hidden on mobile because the nav
            gets too clustered on mobile
          */}
          <div className="col-4 d-md-flex d-none justify-content-center">
            {locationInformation ? (
              <div className="text-white">{locationInformation.city.name_translated}</div>
            ) : (
              <></>
            )}
          </div>
          <div className="col-4 d-flex justify-content-end pe-0">
            <img src={logo} width="30" height="30" alt="SunData's sun logo" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
