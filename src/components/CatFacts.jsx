import { useEffect, useState } from "react";
import "./CatFacts.css";

export default function CatFacts(props) {
  const [data, setData] = useState([]);

  function fetchCatFact(amount) {
    // Easy way to show that its loading
    setData([{ fact: "Loading..." }]);

    fetch(`https://catfact.ninja/facts?limit=${amount}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Response error: " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        setData(data.data);
      })
      .catch((error) => {
        console.error("Error fetching cat facts: ", error);
      });
  }

  useEffect(() => {
    fetchCatFact(props.amount);
  }, []);

  return (
    <>
      <ul>
        {data.map((item, index) => (
          <li className="fact" key={index}>
            {item.fact}
          </li>
        ))}
      </ul>
    </>
  );
}
