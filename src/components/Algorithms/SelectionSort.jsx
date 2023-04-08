const doSelectionSort = (array) => {
    let animations = []
    let auxArr = [...array]
    selectionSort(animations, auxArr);
    return [animations, auxArr];
}

const selectionSort = (animations, auxArr) => {
    const n = auxArr.length;
    for(let i = 0; i<n-1; ++i) {
        let minIdx = i;
        for(let j = i+1; j<n; ++j) {
            animations.push({indices:[j, minIdx], type: "comp", color: "tomato"});
            animations.push({indices:[j, minIdx], type: "comp", color: "#865DFF"});
            if(auxArr[j]<auxArr[minIdx]) {
                minIdx = j;
            }
        }
        animations.push({indices:[i, auxArr[minIdx]], type: "swap", color: ""});
        animations.push({indices:[minIdx, auxArr[i]], type: "swap", color: ""});
        swap(auxArr, i, minIdx);
    }
}

const swap = (auxArr, first, second) => {
    [auxArr[first], auxArr[second]] = [auxArr[second], auxArr[first]]
}

export default doSelectionSort;