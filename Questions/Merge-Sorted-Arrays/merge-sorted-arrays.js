//merge two sorted arrays into one array EX. [1, 3, 5, 7], [2, 4, 6, 8] = [1,2,3,4,5,6,7,8]
function mergeSortedArrays(array1, array2){

    let mergedArray = []
    let index1 = 0;
    let index2 = 0;
    let current = 0;

    while (current < (array1.length + array2.length)){
        let unmerged1 = array1[index1];
        let unmerged2 = array2[index2];

        //if next comes from arr1
        if (unmerged1 < unmerged2){
            mergedArray[current] = unmerged1;
            index1++;
        //if next comes from arr2
        } else {
            mergedArray[current] = unmerged2;
            index2++
        }
        current++
    };
    return mergedArray;
};

console.log(mergeSortedArrays([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]))