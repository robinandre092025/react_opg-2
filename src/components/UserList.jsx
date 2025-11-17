import { useState } from "react";
import "./UserList.css";

export default function UserList(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newUser = {
      username: username.trim(),
      email: email.trim(),
    };

    if (newUser.username && newUser.email) {
      props.onAddUser(newUser);
    }

    setUsername("");
    setEmail("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="username-field">
          <label htmlFor="username-field">Name</label>
          <input
            type="text"
            id="username-field"
            required
            placeholder="Type your name.."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="useremail-field">
          <label htmlFor="email-field">E-Mail</label>
          <input
            type="email"
            id="email-field"
            required
            placeholder="Type your e-mail.."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="submit-btn" type="submit">
          Add user
        </button>
      </form>
      <ul id="user-list">
        {props.userdata.map((item, index) => (
          <li className="user-card" key={index}>
            <p>
              Name: <span className="user-name">{item.username}</span>
            </p>
            <p>
              E-Mail: <span className="user-email">{item.email}</span>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
