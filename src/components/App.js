import React, { useState } from "react";
import ColourSelector from "./ColourSelector";
import Selection from "./Selection";
import '../styles/App.css'

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div>
      <h1>Color Selector</h1>
      <ColourSelector onColorChange={handleColorChange} />
      <div className="box-container">
        <Selection selectedColor={selectedColor} />
        <Selection selectedColor={selectedColor} />
        <Selection selectedColor={selectedColor} />
      </div>
    </div>
  );
};

export default App;


