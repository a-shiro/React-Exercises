import { useState } from "react";

export const BoxColors = () => {
  const [boxColor, setBoxColor] = useState("green");

  return (
    <div>
      <div style={{ backgroundColor: boxColor }}>This is a box</div>
      <button
        onClick={() => {
          setBoxColor(boxColor === "green" ? "red" : "green");
        }}
      >
        Change Color
      </button>
    </div>
  );
};
