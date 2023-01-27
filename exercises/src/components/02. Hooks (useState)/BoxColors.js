import { useState } from "react";

export const BoxColors = () => {
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

  const randomColor = () => colors[Math.floor(Math.random() * 7) + 1];
  const [boxColor, setBoxColor] = useState(randomColor);

  return (
    <div>
      <div style={{ backgroundColor: boxColor }}>This is a box</div>
      <button
        onClick={() => {
          setBoxColor(randomColor);
        }}
      >
        Change Color
      </button>
    </div>
  );
};
