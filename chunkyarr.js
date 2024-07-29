function chunkArrayInGroups(arr, size) {
    let arr2d = [];
    for(let i = 0; i < arr.length; i += size) {
      let newarr = arr.slice(i, i + size);
      arr2d.push(newarr);
    }
    return arr2d;
  }
  
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));