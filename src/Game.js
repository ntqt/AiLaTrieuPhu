import React from "react";

const numToChar = ["A", "B", "C", "D"];

export const Game = props => {
  const question = props.question;
  return (
    <div style={{ borderTop: "1px solid white" }}>
      <div
        style={{
          padding: "10px 20px"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid white",
            borderRadius: "100px",
            fontSize: 32,
            padding: "10px 20px",
            background: "#152D7A"
          }}
        >
          {question.question}
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", padding: "10px 20px" }}>
        {question.answers.map((item, index) => (
          <Answer content={item} answerIndex={numToChar[index]} />
        ))}
      </div>
    </div>
  );
};

const Answer = props => {
  const content = props.content;
  const answerIndex = props.answerIndex;
  return (
    <div
      style={{
        width: "50%",
        border: "1px solid white",
        borderRadius: "100px",
        padding: "10px 20px",
        fontSize: 20,
        boxSizing: "border-box",
        marginBottom: 2,
        cursor: "pointer",
        background: "#152D7A"
      }}
    >
      <span style={{ marginRight: 10, color: "yellow" }}>{answerIndex}:</span>
      {content}
    </div>
  );
};
