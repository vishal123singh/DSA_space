
const asteroidCollision = function (asteroids) {
  let stack = [];

  for (let i = 0; i < asteroids.length; i++) {
    if (
      (asteroids[i] < 0 && stack.length === 0) ||
      stack[stack.length - 1] < 0
    ) {
      stack.push(asteroids[i]);
    } else if (asteroids[i] > 0) {
      stack.push(asteroids[i]);
    } else {
      if (asteroids[i] < 0 && stack[stack.length - 1] > 0) {
        if (
          asteroids[i] * -1 > stack[stack.length - 1] &&
          stack[stack.length - 1] > 0
        ) {
          stack.pop();
          while (
            stack[stack.length - 1] > 0 &&
            asteroids[i] * -1 > stack[stack.length - 1]
          ) {
            stack.pop();
          }
          if (stack[stack.length - 1] < 0) {
            stack.push(asteroids[i]);
          } else if (stack[stack.length - 1] === asteroids[i] * -1) {
            stack.pop();
          } else if (stack.length === 0) {
            stack.push(asteroids[i]);
          }
        } else if (asteroids[i] * -1 == stack[stack.length - 1]) {
          stack.pop();
        } else {
          //do nothing
        }
      }
    }
  }

  return stack;
};

console.log(asteroidCollision(asteroids));