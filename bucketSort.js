let array = [0.42, 0.32, 0.23, 0.52, 0.25, 0.47, 0.51];

const bucketSort = (arr, size = 10) => {
  let buckets = new Array(size).fill(0).map((e) => new Array());

  for (let i = 0; i < arr.length; i++) {
    buckets[Math.floor(arr[i] * size)].push(arr[i]);
  }
  let k = 0;
  for (let i = 0; i < buckets.length; i++) {
    if (buckets[i].length) {
      insertionSort(buckets[i]);
      let j = 0;
      for (let j = 0; j < buckets[i].length; j++) {
        arr[k] = buckets[i][j];
        k++;
      }
    }
  }

  return arr;
};

const insertionSort = (bucket) => {
  for (let i = 1; i < bucket.length; i++) {
    let j = i - 1;
    while (j >= 0) {
      if (bucket[i] < bucket[j]) {
        [bucket[i], bucket[j]] = [bucket[j], bucket[i]];
      }
      j--;
    }
  }
};

console.log(bucketSort(array));
