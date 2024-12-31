import React, { useState } from "react";

const Selection = ({ selectedColor }) => {
  const [backgroundColor, setBackgroundColor] = useState("");

  const handleClick = () => {
    if (selectedColor) {
      setBackgroundColor(selectedColor);
    } else {
      alert("Please select a color first!");
    }
  };

  return (
    <div
      className="fix-box"
      style={{ backgroundColor }}
      onClick={handleClick}
    ></div>
  );
};

export default Selection;


