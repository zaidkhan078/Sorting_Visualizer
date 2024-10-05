import React, { useState, useEffect } from "react";
import "./Styles.css";
import Heading from "../components/Heading/Heading";
import Controls from "../components/Controls/Controls";
import About from "../components/About/About";
import { GenRandomArray } from "../components/Utils/RandomArray";
import { sortingAlgorithmsData } from "../components/Utils/SortingData"

const QuickSortVisualizer = () => {
  const [array, setArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [speed, setSpeed] = useState(500);
  const [arraySize, setArraySize] = useState(20);
  const [pivotIndex, setPivotIndex] = useState(-1);
  const [leftIndices, setLeftIndices] = useState([]);
  const [rightIndices, setRightIndices] = useState([]);
  const [sortedIndices, setSortedIndices] = useState([]);

  useEffect(() => {
    resetArray();
  }, [arraySize]);

  const resetArray = () => {
    const arr = GenRandomArray(arraySize);
    setArray(arr);
    setPivotIndex(-1);
    setLeftIndices([]);
    setRightIndices([]);
    setSortedIndices([]);
  };

  const partition = async (arr, low, high) => {
    const pivot = arr[high];
    let i = low - 1;
    setPivotIndex(high);

    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        setLeftIndices([i]);
        setRightIndices([j]);
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, speed));
      }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    setLeftIndices([]);
    setRightIndices([]);
    setArray([...arr]);
    await new Promise((resolve) => setTimeout(resolve, speed));

    return i + 1;
  };

  const quickSort = async (arr, low, high) => {
    if (low < high) {
      const pi = await partition(arr, low, high);

      await quickSort(arr, low, pi - 1);
      await quickSort(arr, pi + 1, high);

      if (low === 0 && high === arr.length - 1) {
        setSortedIndices([...Array(arr.length).keys()]);
        setIsSorting(false);
      }
    }
  };

  const startQuickSort = async () => {
    setIsSorting(true);
    const arr = array.slice();
    await quickSort(arr, 0, arr.length - 1);
  };

  const { description, complexity, implementationCode } = sortingAlgorithmsData.quickSortData;

  return (
    <div className="visualizer-container">
      <Heading title="Quick Sort" />
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
                  : leftIndices.includes(idx)
                  ? "yellow"
                  : rightIndices.includes(idx)
                  ? "blue"
                  : pivotIndex === idx
                  ? "gold"
                  : "black",
              }}
            ></div>
            <div className="array-value">{value}</div>
          </div>
        ))}
      </div>
      <Controls
        resetArray={resetArray}
        sortAlgorithm={startQuickSort}
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
export default QuickSortVisualizer;