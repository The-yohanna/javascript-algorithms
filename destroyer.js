function destroyer(arr) {
    const remove = Array.from(arguments).slice(1);
    return arr.filter(item => !remove.includes(item));
  }
  
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));