import React from "react";
import "./styles/barProgress.css";
function BarProgress({ number, marginT }) {
  const stylesBar = {
    "stroke-dashoffset": 440 - (440 * number) / 100,
    stroke: "blue",
    "stroke-dasharray": 440,
  };

  return (
    <>
      <div className="porcentaje" style={{ marginTop: marginT }}>
        <div className="container">
          <div className="card">
            <div className="box">
              <div className="porcent">
                <svg>
                  <circle cx="70" cy="70" r="40" />
                  <circle cx="70" cy="70" r="40" style={stylesBar} />
                </svg>
                <div className="number">
                  <h2>{number}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BarProgress;
