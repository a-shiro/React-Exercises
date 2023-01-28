import { useState } from "react";

export const AgePrediction = () => {
  const [inputValue, setInputValue] = useState("");
  const [predictedAge, setPredictedAge] = useState(0);

  const fetchData = () => {
    fetch(`https://api.agify.io?name=${inputValue}`)
      .then((res) => res.json())
      .then((data) => {
        setPredictedAge(data.age);
      });
  };

  return (
    <div>
      <input
        placeholder="Ex. Josh"
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
      <button className="universal-btn" onClick={fetchData}>
        Show Results
      </button>
      <div>
        <h1>Predicted Age: {predictedAge}</h1>
      </div>
    </div>
  );
};
