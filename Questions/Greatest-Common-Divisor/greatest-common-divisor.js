//Find the greatest common divisor between two numbers

function greatestCommonDivisor(a, b){

    let divisor = 2,
    greatestDivisor = 1;

    if (a < 2 || b < 2){
        return 1
    }
    //keeps looping until the divisor is equal to either number a or b and uses the last number which passed the if statement
    while(a >= divisor && b >= divisor){
        if(a %divisor == 0 && b% divisor ==0){
            greatestDivisor = divisor;
        }
        divisor++
    }
    return greatestDivisor
}

console.log(greatestCommonDivisor(14, 21))
console.log(greatestCommonDivisor(69, 169));
console.log(greatestCommonDivisor(6, 12));