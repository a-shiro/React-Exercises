import { useState, useEffect } from "react";

export const CatFact = () => {
  const [fact, setFact] = useState("");
  const [factColor, setFactColor] = useState("");

  const fetchData = () =>
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => setFact(data.fact));

  useEffect(() => {
    const colors = [
      "red",
      "green",
      "teal",
      "brown",
      "purple",
      "yellow",
      "orange",
      "blue",
    ];

    setFactColor(colors[Math.floor(Math.random() * 7) + 1]);
  }, [fact]);

  return (
    <div>
      <button className="universal-btn" onClick={fetchData}>
        Generate Cat Fact
      </button>
      <h1 style={{ color: factColor }}>{fact}</h1>
    </div>
  );
};
