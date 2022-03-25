//Verify if a given integer is a prime number. (A prime number is only divisible by itself and 1)

function isPrime(num){

    let count = 2;

    while(count < num){
        if (num % count === 0){
            return false
        } else {
            count++
        }
        return true
    }
}

console.log(isPrime(7))
console.log(isPrime(12))