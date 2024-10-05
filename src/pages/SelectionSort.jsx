import React, { useState, useEffect } from "react";
import "./Styles.css";
import Heading from "../components/Heading/Heading";
import Controls from "../components/Controls/Controls";
import About from "../components/About/About";
import { GenRandomArray } from "../components/Utils/RandomArray";
import { sortingAlgorithmsData } from "../components/Utils/SortingData";

const SelectionSortVisualizer = () => {
  const [array, setArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [speed, setSpeed] = useState(500);
  const [arraySize, setArraySize] = useState(20);
  const [currentIndices, setCurrentIndices] = useState([]);
  const [minIndex, setMinIndex] = useState(null);
  const [sortedIndices, setSortedIndices] = useState([]);

  useEffect(() => {
    resetArray();
  }, [arraySize]);

  const resetArray = () => {
    const arr = GenRandomArray(arraySize);
    setArray(arr);
    setCurrentIndices([]);
    setMinIndex(null);
    setSortedIndices([]);
  };

  const selectionSort = async () => {
    setIsSorting(true);
    const arr = array.slice();
    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i;
      setCurrentIndices([i]);
      setMinIndex(minIndex);
      for (let j = i + 1; j < arr.length; j++) {
        setCurrentIndices([i, j]);
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
          setMinIndex(minIndex);
        }
        await new Promise((resolve) => setTimeout(resolve, speed));
      }
      if (minIndex !== i) {
        const temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
        setArray(arr.slice());
        await new Promise((resolve) => setTimeout(resolve, speed));
      }
      setSortedIndices((prev) => [...prev, i]);
    }
    setSortedIndices((prev) => [...prev, arr.length - 1]);
    setIsSorting(false);
  };

  const { description, complexity, implementationCode } = sortingAlgorithmsData.selectionSortData;

  return (
    <div className="visualizer-container">
      <Heading title="Selection Sort" />
      <div className="array-container">
        {array.map((value, idx) => (
          <div className="array-bar-container" key={idx}>
            <div
              className="array-bar"
              style={{
                height: `${value * 3}px`,
                width: `${600 / arraySize}px`, // Adjust width based on array size
                backgroundColor: sortedIndices.includes(idx)
                  ? "green"
                  : idx === minIndex
                    ? "blue"
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
        sortAlgorithm={selectionSort}
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

export default SelectionSortVisualizer;