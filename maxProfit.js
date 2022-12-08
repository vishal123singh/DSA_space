/* Q.121. Best Time to Buy and Sell Stock(Easy)

You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction.If you cannot achieve any profit, return 0.

logic: choose price of a stock on the first day as your buying price. Now,compare your current
buying price with the price of the stock on the next day.If the price is higher than your
current buying price ,then sell it and calculate the profit, but if the price is lower than your
current buying price,then just update the current buying price with the lower price of the stock. */


var maxProfit = function (prices) {
  let buyingPrice = prices[0]; 

    let profit = 0,
    maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > buyingPrice) {
      profit = prices[i] - buyingPrice;
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    } else {
      buyingPrice = prices[i];
    }
  }

  return maxProfit;
};


console.log(maxProfit([7, 1, 5, 3, 6, 4]));// op-5