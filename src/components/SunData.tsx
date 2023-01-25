import PageLayout from "./PageLayout";
import PageHeader from "./PageHeader";
import NavBar from "./NavBar";
import { AppProvider } from "../state/AppContext";

// While this file may seem relatively bland considering it holds the
// entirety of the app, I think it is important to componentize the
// pieces of an app as much as possible. It leads to better readability
// and organization.

function SunData() {
  return (
    // Provider makes it so any child can access that data it contains
    // without having to prop drill
    <AppProvider>
      <NavBar />
      <main className="container" role="main">
        <PageHeader />
        <PageLayout />
      </main>
    </AppProvider>
  );
}

export default SunData;
