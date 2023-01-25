import logo from "../images/sun.svg";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <div className="container">
        <span className="navbar-brand mb-0 h1">SunData</span>
        <img src={logo} width="30" height="30" alt="SunData's sun logo" />
      </div>
    </nav>
  );
};

export default NavBar;
