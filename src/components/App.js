import React, { useState } from "react";
import ColourSelector from "./ColourSelector";
import Selection from "./Selection";
import '../styles/App.js'

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");

  const handleColorChange = (color) => {
    setSelectedColor(color); // Updates the selected color for all boxes
  };

  return (
    <div>
      <h1>Color Selector</h1>
      <ColourSelector onColorChange={handleColorChange} />
      <div className="box-container">
        <Selection color={selectedColor} />
        <Selection color={selectedColor} />
        <Selection color={selectedColor} />
      </div>
    </div>
  );
};

export default App;




