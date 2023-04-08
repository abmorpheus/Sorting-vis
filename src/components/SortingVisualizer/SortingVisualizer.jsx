import React, {useState, useEffect} from "react"
import "./SortingVisualizer.css"
import {doBubbleSort} from "../Algorithms/BubbleSort";
const SortingVisualizer = () => {
    const [arr, setArr] = useState([]);
    const [arrSize, setArrSize] = useState(10);
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
        // console.log(animations.length);
        for(let i = 0; i<animations.length; ++i) {
            const isColorChange = (i%4 == 0) || (i%4 == 1);
            const arrBars = document.getElementsByClassName("arr-bar");
            if(isColorChange) {
                const color = (i%4 == 0) ? "green" : "coral";
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrBars[barOneIdx].style;
                const barTwoStyle = arrBars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = barTwoStyle.backgroundColor = color;
                },  i*50);

            }
            else {
                const [barIdx, newHeight] = animations[i];
                if(barIdx == -1) {
                    continue;
                }
                const barStyle = arrBars[barIdx].style;
                setTimeout(() => {
                    barStyle.height = newHeight + "px";
                }, i*10); 
            }
        }
        setArr(sortedArr);
    }
   
    return <>
        hello
        <div className = "array">
                {arr.map((val, idx) => {
                return (
                    <div className = "arr-bar" style = {{height: arr[idx]+"px"}} key = {idx} />
                )
            })}
        </div>
        <button onClick={() => generateArray(500)}>Generate new array</button>
        <button onClick={bubbleSort}>Bubble Sort</button>
    </>
}

export default SortingVisualizer;