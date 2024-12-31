import React from "react";

const ColourSelector = ({ onColorChange }) => {
  const colors = ["blue", "orange", "green"]; // Include the required colors

  return (
    <div className="color-selector">
      {colors.map((color) => (
        <button
          key={color}
          data-testid={color} // For test case validation
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



