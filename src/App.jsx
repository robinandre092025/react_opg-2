import "./App.css";
import { useState } from "react";
import Cookie from "./components/Cookie";
import CatFacts from "./components/CatFacts";
import UserList from "./components/UserList";
import CardTitle from "./components/CardTitle";

function App() {
  const [count, setCount] = useState(0);

  const mockData = [
    { username: "Ola Normann", email: "ola.normann@norge.no" },
    { username: "Torleif", email: "torleif@kodehode.no" },
    { username: "Jan Egil", email: "jan.egil@kodehode.no" },
    { username: "Sander", email: "sander@kodehode.no" },
  ];

  const [users, setUsers] = useState(mockData);

  function handleNewUser(newUser) {
    setUsers((prev) => [newUser, ...prev]);
  }

  return (
    <>
      <section id="cookie-section">
        <CardTitle text="Click the cookie!" />
        <Cookie />
      </section>
      <section id="facts-section">
        <CardTitle text="Random cat facts" />
        <CatFacts amount={5} />
      </section>
      <section id="users-section">
        <CardTitle text="User management" />
        <UserList userdata={users} onAddUser={handleNewUser} />
      </section>
    </>
  );
}

export default App;
