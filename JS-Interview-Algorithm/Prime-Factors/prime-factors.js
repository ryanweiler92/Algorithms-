//find all prime factors of a number

function primeFactor(num){
    let factors = []
    let divisor = 2;

    while(num>2){
        if(num % divisor === 0){
            factors.push(divisor)
            num = num / divisor
        } else {
            divisor++
        }
    }
    return factors
}

console.log(primeFactor(69))

//Interviewer:What is the run time complexity? can you make this better

//You: this is O(n). you can increase divisor by 2 from divisor = 3. Because, if a number is divisible by any even number it would divisible by 2. 
//Hence, you dont need to divide by even numbers. Besides, you will not have a factor bigger than half of its value. 
//if you want make it complex use tough concept in no. 1 (try-2. if u get it)