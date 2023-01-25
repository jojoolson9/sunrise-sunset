import PageLayout from "./PageLayout";
import PageHeader from "./PageHeader";
import NavBar from "./NavBar";

// While this file may seem relatively bland considering it holds the
// entirety of the app, I think it is important to componentize the
// pieces of an app as much as possible. It leads to better readability
// and organization.

function SunData() {
  return (
    <>
      <NavBar />
      <main className="container" role="main">
        <PageHeader />
        <PageLayout />
      </main>
    </>
  );
}

export default SunData;
