class MinHeap {
  constructor() {
    this.heap = new Array();
  }

  getMin() {
    return this.heap[0];
  }

  insert(node) {
    this.heap.push(node);

    if (this.heap.length > 1) {
      var current = this.heap.length - 1;
    }

    while (
      current > 0 &&
      this.heap[Math.floor((current - 1) / 2)] > this.heap[current]
    ) {
      [this.heap[current], this.heap[Math.floor((current - 1) / 2)]] = [
        this.heap[Math.floor((current - 1) / 2)],
        this.heap[current],
      ];

      current = Math.floor((current - 1) / 2);
    }
  }

  remove() {
    if (this.heap.length > 1) {
      [this.heap[0], this.heap[this.heap.length - 1]] = [
        this.heap[this.heap.length - 1],
        this.heap[0],
      ];

      let minimum = this.heap.pop();

      if (this.heap.length > 1) {
        let parentIndex = 0;
        let leftChildIndex = parentIndex * 2 + 1;
        let rightChildIndex = parentIndex * 2 + 2;

        while (
          this.heap[parentIndex] >= this.heap[leftChildIndex] ||
          this.heap[parentIndex] >= this.heap[rightChildIndex]
        ) {
          if (this.heap[leftChildIndex] <= this.heap[rightChildIndex]) {
            [this.heap[parentIndex], this.heap[leftChildIndex]] = [
              this.heap[leftChildIndex],
              this.heap[parentIndex],
            ];

            parentIndex = leftChildIndex;
            leftChildIndex = parentIndex * 2 + 1;
            rightChildIndex = parentIndex * 2 + 2;
          } else if (
            leftChildIndex < this.heap.length &&
            rightChildIndex >= this.heap.length
          ) {
            [this.heap[parentIndex], this.heap[leftChildIndex]] = [
              this.heap[leftChildIndex],
              this.heap[parentIndex],
            ];
            parentIndex = leftChildIndex;
            leftChildIndex = parentIndex * 2 + 1;
          } else {
            [this.heap[parentIndex], this.heap[rightChildIndex]] = [
              this.heap[rightChildIndex],
              this.heap[parentIndex],
            ];

            parentIndex = rightChildIndex;
            leftChildIndex = parentIndex * 2 + 1;
            rightChildIndex = parentIndex * 2 + 2;
          }
        }

        return minimum;
      } else {
        return minimum;
      }
    } else {
      let minimum = this.heap.pop();
      return minimum;
    }
  }
}

class MaxHeap {
  constructor() {
    this.heap = new Array();
  }

  getMax() {
    return this.heap[0];
  }

  insert(node) {
    this.heap.push(node);

    if (this.heap.length > 1) {
      let childIndex = this.heap.length - 1;

      let parentIndex = Math.floor((childIndex - 1) / 2);

      while (
        parentIndex >= 0 &&
        this.heap[childIndex] > this.heap[parentIndex]
      ) {
        [this.heap[childIndex], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[childIndex],
        ];
        childIndex = parentIndex;
        parentIndex = Math.floor((childIndex - 1) / 2);
      }

      return this.heap;
    }

    return this.heap;
  }

  remove() {
    if (this.heap.length > 2) {
      [this.heap[0], this.heap[this.heap.length - 1]] = [
        this.heap[this.heap.length - 1],
        this.heap[0],
      ];
      let maximum = this.heap.pop();

      let parentIndex = 0;
      let leftChildIndex = parentIndex * 2 + 1;
      let rightChildIndex = parentIndex * 2 + 2;

      while (
        this.heap[parentIndex] < this.heap[leftChildIndex] ||
        this.heap[parentIndex] < this.heap[rightChildIndex]
      ) {
        if (this.heap[leftChildIndex] >= this.heap[rightChildIndex]) {
          [this.heap[parentIndex], this.heap[leftChildIndex]] = [
            this.heap[leftChildIndex],
            this.heap[parentIndex],
          ];
          parentIndex = leftChildIndex;
          leftChildIndex = parentIndex * 2 + 1;
          rightChildIndex = parentIndex * 2 + 2;
        } else if (
          leftChildIndex < this.heap.length &&
          rightChildIndex >= this.heap.length
        ) {
          [this.heap[parentIndex], this.heap[leftChildIndex]] = [
            this.heap[leftChildIndex],
            this.heap[parentIndex],
          ];
          parentIndex = leftChildIndex;
          leftChildIndex = parentIndex * 2 + 1;
        } else {
          [this.heap[parentIndex], this.heap[rightChildIndex]] = [
            this.heap[rightChildIndex],
            this.heap[parentIndex],
          ];
          parentIndex = rightChildIndex;
          leftChildIndex = parentIndex * 2 + 1;
          rightChildIndex = parentIndex * 2 + 2;
        }
      }

      return maximum;
    } else {
      let maximum = this.heap.shift();
      return maximum;
    }
  }
}

var MedianFinder = function () {
  this.minHeap = new MinHeap();
  this.maxHeap = new MaxHeap();
};

MedianFinder.prototype.addNum = function (num) {
  if (this.maxHeap.heap.length == 0) {
    this.maxHeap.insert(num);
    return;
  } else if (num > this.maxHeap.heap[0]) {
    this.minHeap.insert(num);
  } else {
    this.maxHeap.insert(num);
  }

  if (this.minHeap.heap.length == this.maxHeap.heap.length) {
    return;
  } else if (this.maxHeap.heap.length - this.minHeap.heap.length == 1) {
    return;
  } else if (this.minHeap.heap.length > this.maxHeap.heap.length) {
    while (this.minHeap.heap.length > this.maxHeap.heap.length) {
      let minimum = this.minHeap.remove();
      this.maxHeap.insert(minimum);
    }

    return;
  } else if (this.maxHeap.heap.length > this.minHeap.heap.length) {
    while (this.maxHeap.heap.length - this.minHeap.heap.length > 1) {
      let maximum = this.maxHeap.remove();
      this.minHeap.insert(maximum);
    }

    return;
  }

  return;
};

MedianFinder.prototype.findMedian = function () {
  if (this.minHeap.heap.length == this.maxHeap.heap.length) {
    let sum = this.minHeap.getMin() + this.maxHeap.getMax();
    return sum / 2;
  }

  return this.maxHeap.getMax();
};

let medianFinder = new MedianFinder();

medianFinder.addNum(-1);
medianFinder.addNum(-2);
medianFinder.addNum(-3);
medianFinder.addNum(-4);
medianFinder.addNum(-5);

console.log(medianFinder.findMedian());
