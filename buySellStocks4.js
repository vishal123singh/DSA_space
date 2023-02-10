/**
 * @param {number[]} prices
 * @return {number}
 */ //6 1 3 2 4 7

var maxProfit = function (prices) {
  let bd = 0,
    sd = [],
    maxProfit = 0,
    profit = 0,
    first_profits = [];

  let sd2 = prices.length - 1,
    maxProfit2 = 0,
    sec_profits = [],
    bd2 = [],
    j = sd2 - 1;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[bd]) {
      profit = prices[i] - prices[bd];
      if (profit > maxProfit) {
        first_profits.push(profit);
        maxProfit = profit;
        sd.push(i);
      }
    } else {
      bd = i;
    }

    if (prices[j] < prices[sd2]) {
      profit = prices[sd2] - prices[j];
      if (profit > maxProfit2) {
        sec_profits.push(profit);
        maxProfit2 = profit;
        bd2.push(j);
      }
    } else {
      sd2 = j;
    }
    j--;
  }

  let i = 0;
  if (first_profits.length) {
    maxProfit = first_profits[first_profits.length - 1];
  }

  while (i < sd.length) {
    for (let j = bd2.length - 1; j >= 0; j--) {
      if (bd2[j] >= sd[i]) {
        profit = first_profits[i] + sec_profits[j];
        if (profit > maxProfit) {
          maxProfit = profit;
        }
        break;
      }
    }
    i++;
  }
  return maxProfit;
};

console.log(maxProfit([6, 1, 3, 2, 4, 7]));
