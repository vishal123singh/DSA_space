// leetcode
// q.no.-135

var candy = function (ratings) {
  let candies = Array(ratings.length).fill(1);

  for (let i = 0; i < candies.length - 1; i++) {
    if (ratings[i] > ratings[i + 1]) {
      if (candies[i] <= candies[i + 1]) {
        candies[i] = candies[i + 1] + 1;
      }
    } else if (ratings[i] < ratings[i + 1]) {
      if (candies[i] >= candies[i + 1]) {
        candies[i + 1] = candies[i] + 1;
      }
    }
  }

  for (let j = candies.length - 1; j > 0; j--) {
    if (ratings[j] > ratings[j - 1]) {
      if (candies[j] <= candies[j - 1]) {
        candies[j] = candies[j - 1] + 1;
      }
    } else if (ratings[j] < ratings[j - 1]) {
      if (candies[j] >= candies[j - 1]) {
        candies[j - 1] = candies[j] + 1;
      }
    }
  }

  let candy_count = candies.reduce((pre, curr) => pre + curr);

  return candy_count;
};

console.log(candy([1,2,2]))