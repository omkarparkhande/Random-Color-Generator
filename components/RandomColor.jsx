import React, { useEffect, useState } from "react";

function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");

  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function generateHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
    console.log(hexColor);
  }

  function generateRgbColor() {
    let rgbColor = `rgb(${randomColorUtility(256)},${randomColorUtility(
      256
    )},${randomColorUtility(256)})`;

    console.log(rgbColor);

    setColor(rgbColor);
  }

  useEffect(() => {
    if (typeOfColor === "hex") {
      generateHexColor();
    } else {
      generateRgbColor();
    }
  }, [typeOfColor]);

  return (
    <div className="container" style={{ background: color }}>
      <div style={{ gap: "2rem", display: "flex" }}>
        <button onClick={() => setTypeOfColor("hex")}>Create Hex Color</button>
        <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
        <button
          onClick={() =>
            typeOfColor == "hex" ? generateHexColor() : generateRgbColor()
          }
        >
          Generate Random Color
        </button>
      </div>
      <div className="nameContainer">
        <h3>{typeOfColor === "hex" ? "HEX Color" : "RGB Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}

export default RandomColor;
