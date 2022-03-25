//alternate 2 is the best solution: starts on line 73: https://www.youtube.com/watch?v=ppNZ4bmrmGs

function mergeSortTopDown(array){
    if(array.length <= 1){
        return array
    }
    
    const middle = Math.floor(array.length / 2)
    const left = array.slice(0, middle)
    const right = array.slice(middle)

    return mergeTopDown(mergeSortTopDown(left), mergeSortTopDown(right))
}

function mergeTopDown(left, right) {
    const array = []

    while(left.length && right.length){
            if(left[0] < right[0]){
            array.push(left.shift())
        } else {
            array.push(right.shift())
        }
    }
    return array.concat(left.slice()).concat(right.slice());
}

// (function test() {
//     const testArray1 = [4, 5, 2, 1, 3, 8];

//     console.log(mergeSortTopDown(testArray1) + " MergeSortTopDown")
// })()


//ALTERNATE
function mergeSort(array){
    if(array.length <= 1){
        return array
    }

    const middle = Math.floor(array.length/2)
    const left = array.slice(0, middle)
    const right = array.slice(middle)

    return mergeArrays(mergeSort(left), mergeSort(right))
}

function mergeArrays(left, right){
    const final = []

    console.log(left  + " left")
    console.log(right + " right")
    

    while(left.length && right.length){
        if(left[0] < right[0]){
            final.push(left.shift())
        } else {
            final.push(right.shift())
        }
        console.log(final + " final")
    }
    return [...final, ...left, ...right]
}

// (function test2() {
//     const testArray1 = [2, -4, 7, 3, 9, 12, 0];

//     console.log(mergeSort(testArray1) + " Merge Sort")
// })()

//alternate 2
function mergeSort2(array){
    //Check if array can be split
    if(array.length < 2){
        return array;
    }
    //Get Middle Index
    const middle = Math.floor(array.length / 2);
    //Split Array into two sides
    const leftSide = array.slice(0, middle)
    const rightSide = array.slice(middle)
    //Use recursion to continue splitting
    console.log('split: ', leftSide, rightSide)
    return merge(mergeSort2(leftSide), mergeSort2(rightSide));
}

function merge(left, right){
    //Create New Array
    const result = [];
    //Check if either left array or right array is empty
    while(left.length && right.length){
        //Find lower value
        if(left[0] <= right[0]){
            //Add left value
            result.push(left.shift());
        } else {
            //Add right value
            result.push(right.shift());
        }
    }

    //Merge left array
    while(left.length) result.push(left.shift());

    //Merge right array
    while(right.length) result.push(right.shift());

    //return result array
    console.log('result: ', result)
    return result;
};

(function test2() {
    // const testArray1 = [2, -4, 7, 3, 9, 12, 0];
    const testArray1 = [5, 3, 7, 10, 4, 1, 5];

    console.log(mergeSort2(testArray1) + " Merge Sort")
})()