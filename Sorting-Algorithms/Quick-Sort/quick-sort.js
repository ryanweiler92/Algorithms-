function quickSort(array){

    if(array.length < 2){
        return array
    }

    const pivot = array.slice(-1);
    const leftArray = []
    const rightArray = []

    //loop through all elements of the array except the pivot (last element)
    for(const el of array.slice(0, array.length -1)){
        if(el < pivot){
            leftArray.push(el)
        } else {
            rightArray.push(el)
        }
    }
    // console.log(leftArray + " left array", rightArray + " right array")
    // console.log(pivot + " pivot")

    //recursion statements
    if (leftArray.length > 0 && rightArray.length > 0){
        return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
    } else if (leftArray.length > 0){
        return [...quickSort(leftArray), pivot]
    } else {
        return [pivot, ...quickSort(rightArray)]
    } 
};

(function test2() {
    
    const testArray1 = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];

    console.log(quickSort(testArray1) + " Quick Sort")
})()