//swap numbers in an array without the use of a temp variable
function swapNumbersNoTemp(a, b){

    let swapped = [a, b] = [b, a];

    return swapped
};

console.log(swapNumbersNoTemp(5, 6))