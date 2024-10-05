import React from "react";
import "./Controls.css";

const Controls = ({ resetArray, sortAlgorithm, isSorting, speed, setSpeed, arraySize, setArraySize }) => {
  return (
    <div className="controls">
      <button onClick={resetArray} disabled={isSorting}>
        Generate New Array
      </button>
      <button onClick={sortAlgorithm} disabled={isSorting}>
        Start Sorting
      </button>
      <div className="control-group">
        <div className="label">Speed:</div>
        <input
          type="range"
          min="30"
          max="900"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          disabled={isSorting}
        />
      </div>
      <div className="control-group">
        <div className="label">Array Size:</div>
        <input
          type="range"
          min="5"
          max="45"
          value={arraySize}
          onChange={(e) => setArraySize(Number(e.target.value))}
          disabled={isSorting}
        />
      </div>
    </div>
  );
};

export default Controls;