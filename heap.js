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

      this.heap.pop();

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

        return this.heap;
      } else {
        return this.heap;
      }
    } else {
      this.heap.pop();
      return this.heap;
    }
  }
}

let minHeap = new MinHeap();

// minHeap.insert(10);
// minHeap.insert(23);
// minHeap.insert(36);
// minHeap.insert(32);
// minHeap.insert(38);
// minHeap.insert(45);
// minHeap.insert(57);

// console.log(minHeap.remove());

class MaxHeap{
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

            while (parentIndex >= 0 && this.heap[childIndex] > this.heap[parentIndex]) {
                [this.heap[childIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[childIndex]];
                childIndex = parentIndex;
                parentIndex = Math.floor((childIndex - 1) / 2);
            }

            return this.heap;

        }
        
        return this.heap;
    }

    remove() {
        if (this.heap.length > 1) {
            [this.heap[0], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[0]];
            this.heap.pop();

            let parentIndex = 0;
            let leftChildIndex = (parentIndex * 2) + 1;
            let rightChildIndex = (parentIndex * 2) + 2;

            while (this.heap[parentIndex] < this.heap[leftChildIndex] || this.heap[parentIndex] < this.heap[rightChildIndex]) {
                if (this.heap[leftChildIndex] >= this.heap[rightChildIndex]) {
                    [this.heap[parentIndex], this.heap[leftChildIndex]] = [this.heap[leftChildIndex], this.heap[parentIndex]];
                    parentIndex = leftChildIndex;
                    leftChildIndex = parentIndex * 2 + 1;
                    rightChildIndex = parentIndex * 2 + 2;
                }
                else {
                     [this.heap[parentIndex], this.heap[rightChildIndex]] = [
                       this.heap[rightChildIndex],
                       this.heap[parentIndex],
                     ];
                     parentIndex = rightChildIndex;
                     leftChildIndex = parentIndex * 2 + 1;
                     rightChildIndex = parentIndex * 2 + 2;
                }
            }

            return this.heap;
        }
        else {
            this.heap.pop();
            return this.heap;
        }
    }
}

let maxHeap = new MaxHeap();

// maxHeap.insert(10);
// maxHeap.insert(23);
// maxHeap.insert(36);
// maxHeap.insert(32);
// maxHeap.insert(38);
// maxHeap.insert(45);
// maxHeap.insert(57);

// console.log(maxHeap.remove());
// console.log(maxHeap.remove());
// console.log(maxHeap.remove());
// console.log(maxHeap.remove());
// console.log(maxHeap.remove());
// console.log(maxHeap.remove());
// console.log(maxHeap.remove());