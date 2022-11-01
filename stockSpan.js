const StockSpanner = function () {
  this.stack = [];
  this.index = -1;
  this.count = 0;
};

StockSpanner.prototype.next = function (price) {
  if (this.stack.length == 0) {
    this.index++;
    this.stack.push([price, this.index]);
    return 1;
  } else {
    if (this.stack[this.stack.length - 1][0] > price) {
      this.index++;
      let index = this.index - this.stack[this.stack.length - 1][1];
      this.stack.push([price, this.index]);
      return index;
    } else {
      this.index++;
      while (this.stack[this.stack.length - 1][0] <= price) {
        this.stack.pop();
        this.count++;
        if (this.stack.length == 0) {
          this.stack.push([price, this.index]);
          return this.count + 1;
        }
      }

      let index = this.index - this.stack[this.stack.length - 1][1];
      this.stack.push([price, this.index]);
      return index;
    }
  }
};

const obj = new StockSpanner(); 
console.log(obj.next(29));
console.log(obj.next(91));
console.log(obj.next(62));
console.log(obj.next(76));
console.log(obj.next(51));
