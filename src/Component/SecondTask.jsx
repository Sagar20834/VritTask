import React, { useState } from "react";

function SecondTask() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);

  const countSmaller = (nums) => {
    const counts = new Array(nums.length).fill(0);
    const indices = nums.map((_, i) => i);

    function mergeSort(start, end) {
      if (end - start <= 1) return;

      const mid = Math.floor((start + end) / 2);
      mergeSort(start, mid);
      mergeSort(mid, end);

      let i = start;
      let j = mid;
      const temp = [];

      while (i < mid && j < end) {
        if (nums[indices[i]] <= nums[indices[j]]) {
          temp.push(indices[i]);
          counts[indices[i]] += j - mid;
          i++;
        } else {
          temp.push(indices[j]);
          j++;
        }
      }

      while (i < mid) {
        temp.push(indices[i]);
        counts[indices[i]] += j - mid;
        i++;
      }

      while (j < end) {
        temp.push(indices[j]);
        j++;
      }

      for (let k = start; k < end; k++) {
        indices[k] = temp[k - start];
      }
    }

    mergeSort(0, nums.length);
    return counts;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nums = input.split(",").map(Number);
    setResult(countSmaller(nums));
  };

  return (
    <div>
      <h1 className="mt-8">Count Smaller Elements</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter numbers separated by commas:
          <input
            type="text"
            className="border-2 border-gray-500  outline-1 p-2 rounded-md mx-4"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g., 5,2,6,1"
          />
        </label>
        <button
          type="submit"
          className="text-xl font-semibold bg-green-500 p-2 rounded-md"
        >
          Calculate
        </button>
      </form>
      {result.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold">Result:</h2>
          <p className="text-xl font-semibold">{result.join(", ")}</p>
        </div>
      )}
    </div>
  );
}

export default SecondTask;
