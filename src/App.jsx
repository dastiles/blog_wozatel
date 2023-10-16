import { useCallback, useRef, useState } from "react";
import NavBar from "./components/NavBar";
import MessageTile from "./components/appPage/MessageTile";
import axios from "axios";
import Jumbotron from "./components/appPage/Jumbotron";
import AboutUs from "./components/appPage/AboutUs";
import ChooseUs from "./components/appPage/ChooseUs";
import JoinUs from "./components/appPage/JoinUs";
import WhatUWillGet from "./components/appPage/WhatUWillGet";
import StudentSays from "./components/appPage/StudentSays";
import Faqs from "./components/appPage/Faqs";
import Footer from "./components/appPage/Footer";

function App() {
  const promptRef = useRef("");
  const [promptInput, setPromptInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [context, setContext] = useState(false);

  const toggleContext = useCallback(() => setContext((value) => !value));
  const submitPrompt = async (e) => {
    e.preventDefault();

    try {
      axios
        .post("http://127.0.0.1:8888/", { promptInput, context })
        .then((response) => {
          console.log(response.data);
          setMessages((current) => [
            ...current,
            { user: promptInput, ai: response.data },
          ]);
        });
    } catch (error) {
      console.log(error);
    }
    console.log(promptInput);
    toggleContext();
  };
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
