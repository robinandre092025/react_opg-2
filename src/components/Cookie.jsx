import cookie from "/cookie.png";
import cookieBg from "/cookie-bg.png";
import "./Cookie.css";
import { useState } from "react";

export default function Cookie() {
  const [count, setCount] = useState(0);

  return (
    <div className="cookie-container">
      <img
        src={cookieBg}
        alt="Background shine for cookie"
        className="cookie-bg"
      />
      <img
        onClick={() => {
          setCount(count + 1);
        }}
        src={cookie}
        alt="Cookie"
        className="cookie-image"
      />
      <h3 className="cookie-count">Cookies created: {count}</h3>
    </div>
  );
}
