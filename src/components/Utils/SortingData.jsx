export const sortingAlgorithmsData = {
  
    bubbleSortData: {
      description: `Bubble Sort is an iterative sorting algorithm that imitates the movement of bubbles in sparkling water. The bubbles represent the elements of the data structure.
  
  The bigger bubbles reach the top faster than smaller bubbles, and this algorithm works in the same way. It iterates through the data structure and for each cycle compares the current element with the next one, swapping them if they are in the wrong order.
  
  It's a simple algorithm to implement, but not very efficient. On average, quadratic sorting algorithms with the same time complexity, such as Selection Sort or Insertion Sort, perform better.`,
  
      complexity: {
        average: "O(n^2)",
        worst: "O(n^2)",
        best: "O(n)",
        space: "O(1)",
      },
  
      implementationCode: `
  function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
      `,
    },
  
    selectionSortData: {
      description: `Selection Sort is a simple comparison-based sorting algorithm. It works by dividing the input list into two parts: the sublist of items already sorted, which is built up from left to right, and the sublist of items remaining to be sorted.
  
  Initially, the sorted sublist is empty, and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest (or largest, depending on the sorting order) element in the unsorted sublist, exchanging it with the leftmost unsorted element, and moving the sublist boundaries one element to the right.
  
  It's a really simple and intuitive algorithm that does not require additional memory, but it's not really efficient on big data structures due to its quadratic time complexity.`,
  
      complexity: {
        average: "O(n^2)",
        worst: "O(n^2)",
        best: "O(n^2)",
        space: "O(1)",
      },
  
      implementationCode: `
  function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      let minIdx = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIdx]) {
          minIdx = j;
        }
      }
      if (minIdx !== i) {
        let temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
      }
    }
    return arr;
  }
      `,
    },
  
    insertionSortData: {
      description: `Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.
  
  Insertion sort iterates, consuming one input element each repetition and growing a sorted output list. At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there. It repeats until no input elements remain.`,
  
      complexity: {
        average: "O(n^2)",
        worst: "O(n^2)",
        best: "O(n)",
        space: "O(1)",
      },
  
      implementationCode: `
  function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = key;
    }
    return arr;
  }
      `,
    },
  
    mergeSortData: {
      description: `Merge Sort is a divide and conquer algorithm that was invented by John von Neumann in 1945. Most implementations produce a stable sort, meaning that the implementation preserves the input order of equal elements in the sorted output.
  
  The algorithm divides the data structure recursively until the subsequences contain only one element. At this point, the subsequences get merged and ordered sequentially. To do so, the algorithm progressively builds the sorted sublist by adding each time the minimum element of the next two unsorted subsequences until there is only one sublist remaining. This will be the sorted data structure.`,
  
      complexity: {
        average: "O(n log n)",
        worst: "O(n log n)",
        best: "O(n log n)",
        space: "O(n)",
      },
  
      implementationCode: `
  function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
  
    return merge(
      mergeSort(left), mergeSort(right)
    );
  }
  
  function merge(left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex]);
        leftIndex++;
      } else {
        resultArray.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    return resultArray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
  }
      `,
    },
  
    quickSortData: {
      description: `Quick Sort is a highly efficient sorting algorithm and is based on partitioning of array of data into smaller arrays. A large array is partitioned into two arrays one of which holds values smaller than the specified value, say pivot, based on which the partition is made and another array holds values greater than the pivot value.
  
  Quick Sort partitions an array and then calls itself recursively twice to sort the two resulting subarrays. This partition technique based on the pivot is called Divide and conquer.`,
  
      complexity: {
        average: "O(n log n)",
        worst: "O(n^2)",
        best: "O(n log n)",
        space: "O(log n)",
      },
  
      implementationCode: `
  function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
  
    for (const el of arr.slice(0, arr.length - 1)) {
      el < pivot ? left.push(el) : right.push(el);
    }
  
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
      `,
    },
  };