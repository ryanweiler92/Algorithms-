//Get to the nth Fibonacci number. A fibonacci number is when each number is added together with the previous number. 12 Fibonacci = 1 + 1 + 2 + 3 + 5 + 8 + 13 + 21 + 34 + 55 + 89, 144   

//non-recursive answer
function fibonacci(num){
    var fibo = [0, 1]

    if (num <= 2){ 
        return 1
    };

    for (let i = 2; i <= num; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
        //console.log(fibo[i])
    }
    return fibo[num]
}
console.log(fibonacci(12))

// Interviewer: What is the run time complexity?

// you: O(n)

//recursive answer
function fibonacciRecursive(num){
    if(num<=1){
        return num
    } else {
        return fibonacciRecursive(num-1) + fibonacciRecursive(num-2)
    }
}
console.log(fibonacciRecursive(12))

//Interviewer: What is the run time complexity?

//You: O(2n)