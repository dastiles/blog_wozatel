import NavBar from "./components/NavBar";
import Jumbotron from "./components/appPage/Jumbotron";
import AboutUs from "./components/appPage/AboutUs";
import ChooseUs from "./components/appPage/ChooseUs";
import JoinUs from "./components/appPage/JoinUs";
import WhatUWillGet from "./components/appPage/WhatUWillGet";
import StudentSays from "./components/appPage/StudentSays";
import Faqs from "./components/appPage/Faqs";
import Footer from "./components/appPage/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Jumbotron />
      <AboutUs />
      <ChooseUs />
      <JoinUs />
      <WhatUWillGet />
      <StudentSays />
      <Faqs />
      <Footer />
    </>
  );
}

export default App;
