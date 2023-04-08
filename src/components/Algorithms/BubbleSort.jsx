const doBubbleSort = (array) => {
    let animations = [];
    let auxArr = [...array];
    bubbleSort(animations, auxArr);
    return [animations, auxArr];
}

const bubbleSort = (animations, auxArr) => {
    const n = auxArr.length;
    for(let i = 0; i<n-1; ++i) {
        let swapped = false;
        for(let j = 0; j<n-i-1; ++j) {
            animations.push({indices:[j, j+1], type: "comp", color: "tomato"});
            animations.push({indices:[j, j+1], type: "comp", color: "#865DFF"});
            if(auxArr[j] > auxArr[j+1]) {
                swapped = true;
                animations.push({indices:[j, auxArr[j+1]], type: "swap", color: ""});
                animations.push({indices:[j+1, auxArr[j]], type: "swap", color: ""});
                swap(auxArr, j, j+1);
            }
        }
        if(swapped === false) {
            break;
        }
    }
}

const swap = (auxArr, first, second) => {
    [auxArr[first], auxArr[second]] = [auxArr[second], auxArr[first]];
}

export default doBubbleSort;