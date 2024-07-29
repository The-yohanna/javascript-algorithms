function mutation(arr) {
    const notIncluded = arr[1].toLowerCase().split('').filter(elm => !arr[0].toLowerCase().includes(elm));
    return notIncluded.length === 0;
  }
  
console.log(mutation(["Hello", "hey"]));