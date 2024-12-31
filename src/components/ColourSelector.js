import React from "react";

const ColourSelector = ({ onColorChange }) => {
  const colors = ["red", "blue", "green"];

  return (
    <div className="color-selector">
      {colors.map((color) => (
        <button
          key={color}
          style={{ backgroundColor: color }}
          onClick={() => onColorChange(color)}
        >
          {color}
        </button>
      ))}
    </div>
  );
};

export default ColourSelector;


