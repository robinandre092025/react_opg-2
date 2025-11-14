import "./App.css";
import { useState } from "react";
import Cookie from "./components/Cookie";
import CatFacts from "./components/CatFacts";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section id="cookie-section">
        <Cookie />
      </section>
      <section id="facts-section">
        <CatFacts amount={5} />
      </section>
      <section id="users-section"></section>
    </>
  );
}

export default App;
