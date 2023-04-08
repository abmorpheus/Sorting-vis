export const doBubbleSort = (array) => {
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
            animations.push([j, j+1]);
            animations.push([j, j+1]);
            if(auxArr[j] > auxArr[j+1]) {
                swapped = true;
                animations.push([j, auxArr[j+1]]);
                animations.push([j+1, auxArr[j]]);
                swap(auxArr, j, j+1);
            }
            else {
                animations.push([-1, -1]);
                animations.push([-1, -1]);
            }
        }
        if(swapped == false) {
            break;
        }
    }
}

const swap = (auxArr, first, second) => {
    // let temp = auxArr[first];
    // auxArr[first] = auxArr[second];
    // auxArr[second] = temp;
    [auxArr[first], auxArr[second]] = [auxArr[second], auxArr[first]];
}