//this solution works unless given a bazzillion prices in the parameter, then it times out. But it is helpful to see how to use 2 loops in this solution..

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    
    //place keeper for the maximum profit price
    let maxProfit = 0 ;
    
    //loop through prices array 
    //i will represent the lowest price that we buy at
    for(let i = 0; i < prices.length; i++){
        
        //loop through the prices array again except one index ahead of i
        for(let z = [i + 1]; z < prices.length; z++){
            
            //variable holds the differnce between buy and sell
            let profit = prices[z] - prices[i]
            
            //if the profit for the indexes of the current loop is higher than the current maxProfit we reasssign
            maxProfit = Math.max(maxProfit, profit)
        }
    }
    return maxProfit
};


//this solution uses only 1 forloop and passes the submission on leetcode

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    
    //variable to track maxProfit
    let maxProfit = 0;
    
    //variable to track the minimum price
    let minimumPrice = prices[0];
    
    //loop through the prices array start at the second index
    for(let i = 1; i < prices.length; i++){

    //sell price changes every loop to equal the current index
    let sellPrice = prices[i]
    
    //profit changes every loop to equal the difference between the sellPrice and minimum price
    let profit = sellPrice - minimumPrice
    
    //if the sell price is less than our global mimimum price we set the variable to the new sell price
    if(sellPrice < minimumPrice) minimumPrice = sellPrice
    
    //setting the maxProfit variable to the profit value if it is higher    
    maxProfit = Math.max(maxProfit, profit)
    
    }
    return maxProfit
    
};