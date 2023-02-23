import "./Main.css";
import React from "react";

function Main({Data1, Data2, Data3}) {
  return (
    <div className="container">
      <div className="leftSide">
        <p className="toptext">{Data1}</p>
        <p className="text2">{Data2}</p>
        <p className="text3">{Data3}</p>
      </div>

          <div className="rightSide">
              <p className="circle">EXPLORE</p>
      </div>
    </div>
  );
}

export default Main;