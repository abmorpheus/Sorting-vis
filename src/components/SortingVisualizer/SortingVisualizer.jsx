import React, {useState, useEffect} from "react"
import "./SortingVisualizer.css"
import {doBubbleSort} from "../Algorithms/BubbleSort";
import {doInsertionSort} from "../Algorithms/InsertionSort";

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


    const doAnimations = animations => {
        for(let i = 0; i<animations.length; ++i) {
            let type = animations[i].type;
            let arrBars = document.getElementsByClassName("arr-bar");
            if(type === "comp") {
                let [barOneIdx, barTwoIdx] = animations[i].indices;
                let color = animations[i].color;
                let barOneStyle = arrBars[barOneIdx].style;
                let barTwoStyle = arrBars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = barTwoStyle.backgroundColor = color;
                },  i*1);
            }
            else {
                let [barIdx, newHeight] = animations[i].indices;
                let barStyle = arrBars[barIdx].style;
                setTimeout(() => {
                    barStyle.height = newHeight + "px";
                }, i*1); 
            }
        }
    }

    const bubbleSort = () => {
        let [animations, sortedArr] = doBubbleSort(arr);
        doAnimations(animations);
        setTimeout(() => {
            setArr(sortedArr);
        }, animations.length*1);
    }
    
    const insertionSort = () => {
        let [animations, sortedArr] = doInsertionSort(arr);
        doAnimations(animations);
        setTimeout(() => {
            setArr(sortedArr);
        }, animations.length*1);
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
        <button onClick={insertionSort}>Insertion Sort</button>
        <button onClick={bubbleSort}>Selection Sort</button>
        <button onClick={bubbleSort}>Merge Sort</button>
        <button onClick={bubbleSort}>Quick Sort</button>
        <button onClick={bubbleSort}>Heap Sort</button>
    </>
}

export default SortingVisualizer;