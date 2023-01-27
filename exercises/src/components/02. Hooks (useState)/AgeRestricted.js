import { useState } from "react";

export const AgeRestricted = () => {
  const randomNumber = () => {
    return Math.floor(Math.random() * 10);
  };

  const [age, setAge] = useState(randomNumber);
  const isGreen = age >= 5 ? true : false;

  return (
    <div style={isGreen ? { color: "green" } : { color: "red" }}>
      <h2>
        {age} - {age >= 5 ? "Above age" : "Under Age"}
      </h2>
      <button
        onClick={() => {
          setAge(randomNumber);
        }}
      >
        Generate Random Number
      </button>
    </div>
  );
};
