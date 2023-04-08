const doInsertionSort = (array) => {
    let animations = [];
    let auxArr = [...array];
    insertionSort(animations, auxArr);
    return [animations, auxArr];
}

const insertionSort = (animations, auxArr) => {
    const n = auxArr.length;
    for(let i = 1; i<n; ++i) {
        let temp = auxArr[i];
        let j = i-1;
        while(j >= 0) {
            animations.push({indices:[j, j+1], type: "comp", color: "tomato"});
            animations.push({indices:[j, j+1], type: "comp", color: "#865DFF"});
            if(auxArr[j] > temp) {
                animations.push({indices:[j, auxArr[j+1]], type: "swap", color: ""});
                animations.push({indices:[j+1, auxArr[j]], type: "swap", color: ""});
                swap(auxArr, j, j+1);
                j--;
            }
            else {
                break;
            }
        }
        auxArr[j+1] = temp;
    }
}


const swap = (auxArr, first, second) => {
    [auxArr[first], auxArr[second]] = [auxArr[second], auxArr[first]];
}

export default doInsertionSort;