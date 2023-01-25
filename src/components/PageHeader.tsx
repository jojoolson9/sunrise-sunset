import logo from "../images/sun.svg";

const PageHeader = () => {
  return (
    <div className="row mt-5">
      <div className="col-2" />
      {/*
        It is always good to be thinking mobile-first when design/building a page.
        Included some additional thought/styling around this here to show familiarty
        with the responsive practices/implementations.

        Bootstrap actually has some rad flexibility between screen sizes... wish we
        had that in our design system at Vista ;)
       */}
      <div className="col-md-8 col-12 mt-md-5 mt-3">
        <div className="d-flex justify-content-center align-items-md-baseline align-items-start">
          <h1>Welcome to SunData</h1>
          <img alt="SunData logo" height="32px" width="32px" src={logo} className="ms-2" />
        </div>
      </div>
      <div className="col-2" />
    </div>
  );
};

export default PageHeader;
