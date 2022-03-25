import React from "react";
import * as  Loader from "react-loader-spinner";
import "./Loading.css" ;

const Loading_Screen = () => {
  return (
    <div className="loading">
      <h1 className="blue" style={{ fontSize: "5rem" }}>
        <b>Quiz</b>dom
      </h1>
     
      <Loader color="#29455a" width={130} height={130} type="BallTriangle" />
    </div>
  );
};

export default Loading_Screen;