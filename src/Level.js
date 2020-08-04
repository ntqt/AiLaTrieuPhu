import React from "react";

export const Level = props => {
  const { total, checkPoint } = props;
  return (
    <div style={{ display: "flex", flexDirection: "column-reverse" }}>
      {new Array(total).fill(undefined).map((_, index) => {
        return (
          <LevelItem
            number={index + 1}
            isCheckPoint={checkPoint.indexOf(index) > -1}
          />
        );
      })}
    </div>
  );
};

const LevelItem = props => {
  const { number, isCheckPoint } = props;
  return (
    <div style={{ padding: "10px 20px" }}>
      <div
        className="center"
        style={{
          color: "white",
          fontSize: 24,
          background: isCheckPoint ? "yellow" : "#152D7A",
          border: "1px solid white",
          borderRadius: 100,
          padding: "10 20"
        }}
      >
        {number}
      </div>
    </div>
  );
};
