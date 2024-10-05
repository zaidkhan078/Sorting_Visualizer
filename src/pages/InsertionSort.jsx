import React, { useState, useEffect } from "react";
import "./Styles.css";
import Heading from "../components/Heading/Heading";
import Controls from "../components/Controls/Controls";
import About from "../components/About/About";
import { GenRandomArray } from "../components/Utils/RandomArray";
import { sortingAlgorithmsData } from "../components/Utils/SortingData";

const InsertionSortVisualizer = () => {
  const [array, setArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [speed, setSpeed] = useState(500);
  const [arraySize, setArraySize] = useState(20);
  const [currentIndices, setCurrentIndices] = useState([]);
  const [sortedIndices, setSortedIndices] = useState([]);

  useEffect(() => {
    resetArray();
  }, [arraySize]);

  const resetArray = () => {
    const arr = GenRandomArray(arraySize);
    setArray(arr);
    setCurrentIndices([]);
    setSortedIndices([]);
  };

  const insertionSort = async () => {
    setIsSorting(true);
    const arr = array.slice();
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
      setCurrentIndices([i]);
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
        setCurrentIndices([j + 1, i]);
        setArray(arr.slice());
        await new Promise((resolve) => setTimeout(resolve, speed));
      }
      arr[j + 1] = key;
      setArray(arr.slice());
      setSortedIndices((prev) => [...prev, i]);
      await new Promise((resolve) => setTimeout(resolve, speed));
    }
    setSortedIndices((prev) => [...prev, 0]);
    setIsSorting(false);
  };

  const { description, complexity, implementationCode } = sortingAlgorithmsData.insertionSortData;

  return (
    <div className="visualizer-container">
      <Heading title="Insertion Sort" />
      <div className="array-container">
        {array.map((value, idx) => (
          <div className="array-bar-container" key={idx}>
            <div
              className="array-bar"
              style={{
                height: `${value * 3}px`,
                width: `${600 / arraySize}px`,
                backgroundColor: sortedIndices.includes(idx)
                  ? "green"
                  : currentIndices.includes(idx)
                  ? "yellow"
                  : "black",
              }}
            ></div>
            <div className="array-value">{value}</div>
          </div>
        ))}
      </div>
      <Controls
        resetArray={resetArray}
        sortAlgorithm={insertionSort}
        isSorting={isSorting}
        speed={speed}
        setSpeed={setSpeed}
        arraySize={arraySize}
        setArraySize={setArraySize}
      />
      <div className="about-container">
        <About
          description={description}
          complexity={complexity}
          implementationCode={implementationCode}
        />
      </div>
    </div>
  );
};
export default InsertionSortVisualizer;