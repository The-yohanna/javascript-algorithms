function largestOfFour(arr) {
    let arrOfLargest = [];
  
    arr.map(item => {
      item.sort((a, b) => b - a);
      arrOfLargest.push(item[0]);
    })
  
    return arrOfLargest;
  }
  
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));