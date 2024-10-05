import React, { useState, useEffect } from "react";
import "./Styles.css";
import Heading from "../components/Heading/Heading";
import Controls from "../components/Controls/Controls";
import About from "../components/About/About";
import { GenRandomArray } from "../components/Utils/RandomArray";
import { sortingAlgorithmsData } from "../components/Utils/SortingData";

const MergeSortVisualizer = () => {
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

  const merge = async (arr, left, mid, right) => {
    const n1 = mid - left + 1;
    const n2 = right - mid;

    const L = new Array(n1);
    const R = new Array(n2);

    for (let i = 0; i < n1; i++) L[i] = arr[left + i];
    for (let j = 0; j < n2; j++) R[j] = arr[mid + 1 + j];

    let i = 0,
      j = 0,
      k = left;
    while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
        arr[k] = L[i];
        setCurrentIndices([k, left + i]);
        i++;
      } else {
        arr[k] = R[j];
        setCurrentIndices([k, mid + 1 + j]);
        j++;
      }
      k++;
      setArray(arr.slice());
      await new Promise((resolve) => setTimeout(resolve, speed));
    }

    while (i < n1) {
      arr[k] = L[i];
      setCurrentIndices([k, left + i]);
      i++;
      k++;
      setArray(arr.slice());
      await new Promise((resolve) => setTimeout(resolve, speed));
    }

    while (j < n2) {
      arr[k] = R[j];
      setCurrentIndices([k, mid + 1 + j]);
      j++;
      k++;
      setArray(arr.slice());
      await new Promise((resolve) => setTimeout(resolve, speed));
    }
  };

  const mergeSort = async (arr, left, right) => {
    if (left >= right) return;

    const mid = Math.floor((left + right) / 2);
    await mergeSort(arr, left, mid);
    await mergeSort(arr, mid + 1, right);
    await merge(arr, left, mid, right);

    if (left === 0 && right === arr.length - 1) {
      setSortedIndices([...Array(arr.length).keys()]);
      setIsSorting(false);
    }
  };

  const startMergeSort = async () => {
    setIsSorting(true);
    const arr = array.slice();
    await mergeSort(arr, 0, arr.length - 1);
  };

  const { description, complexity, implementationCode } = sortingAlgorithmsData.mergeSortData;

  return (
    <div className="visualizer-container">
      <Heading title="Merge Sort" />
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
        sortAlgorithm={startMergeSort}
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

export default MergeSortVisualizer;