import React, {useState, useEffect} from "react"
import "./SortingVisualizer.css"
import {doBubbleSort} from "../Algorithms/BubbleSort";
// import {doInsertionSort} from "../Algorithms/InsertionSort";

const SortingVisualizer = () => {
    const [arr, setArr] = useState([]);
    const [arrSize, setArrSize] = useState(100);
    useEffect(() => {
        generateArray(100)
    }, []);

    const generateArray = (range) => {
        const n = arrSize;
        const a = [];
        for(let i = 0; i<n; ++i) {
            a.push(5+Math.floor(Math.random()*range))
        }
        setArr(a);
    }

    const bubbleSort = () => {
        let [animations, sortedArr] = doBubbleSort(arr);
        for(let i = 0; i<animations.length; ++i) {
            let isColorChange = (i%4 == 0) || (i%4 == 1);
            let arrBars = document.getElementsByClassName("arr-bar");
            if(isColorChange) {
                let color = (i%4 == 0) ? "tomato" : "#865DFF";
                let [barOneIdx, barTwoIdx] = animations[i];
                let barOneStyle = arrBars[barOneIdx].style;
                let barTwoStyle = arrBars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = barTwoStyle.backgroundColor = color;
                },  i*1);

            }
            else {
                let [barIdx, newHeight] = animations[i];
                if(barIdx == -1) {
                    continue;
                }
                let barStyle = arrBars[barIdx].style;
                setTimeout(() => {
                    barStyle.height = newHeight + "px";
                }, i*1); 
            }
        }
        setArr(sortedArr);
    }
   
    return <>
        <h1 style = {{color: "wheat"}}>Sorting Visualizer</h1>
        <div className = "array">
                {arr.map((val, idx) => {
                return (
                    <div className = "arr-bar" style = {{height: arr[idx]+"px"}} key = {idx} />
                )
            })}
        </div>
        <button onClick={() => generateArray(450)}>NEW ARRAY</button>
        <button onClick={bubbleSort}>Bubble Sort</button>
        <button onClick={bubbleSort}>Selection Sort</button>
        <button onClick={bubbleSort}>Insertion Sort</button>
        <button onClick={bubbleSort}>Merge Sort</button>
        <button onClick={bubbleSort}>Quick Sort</button>
        <button onClick={bubbleSort}>Heap Sort</button>
    </>
}

export default SortingVisualizer;