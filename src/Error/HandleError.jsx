import React from "react";

const HandleError = () => {
  const errorStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "100vh",
    width: "100vw",
    color: "red",
  };

  return (
    <div style={errorStyle}>
      <h1>Hey... Are You Okay? This is not the right route.</h1>
    </div>
  );
};

export default HandleError;
