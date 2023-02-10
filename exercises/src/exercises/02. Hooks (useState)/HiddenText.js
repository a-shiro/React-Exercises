import { useState } from "react";

export const HiddenText = () => {
  const [textVisible, setVisibility] = useState(true);

  return (
    <div>
      <p style={{ display: textVisible ? "block" : "none" }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit nam
        vitae, consequuntur provident laudantium aperiam dolore eos aspernatur
        placeat doloremque.
      </p>
      <button
        className="universal-btn"
        onClick={() => {
          setVisibility(!textVisible);
        }}
      >
        Toggle Text
      </button>
    </div>
  );
};
