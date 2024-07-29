function findElement(arr, func) {
    const truenum = arr.find(item => func(item));
    return truenum ? truenum : undefined;
  }
  
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));