import React, { useState } from "react";
import "./styles.css";
import { Game } from "./Game";
import data from "./data.json";
import { Level } from "./Level";

const checkPoint = [4, 9, 14];

export default function App() {
  const [level, setLevel] = useState(0);
  return (
    <div style={{ display: "flex", width: "100%", height: "100%" }}>
      <div style={{ flex: 3, display: "flex", flexDirection: "column" }}>
        <div style={{ flex: 3 }}>Infor</div>
        <div style={{ flex: 2 }}>
          <Game question={data[level]} />
        </div>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <div>Help</div>
        <div style={{ flex: 1 }}>
          <Level total={data.length} checkPoint={checkPoint} />
        </div>
      </div>
    </div>
  );
}
