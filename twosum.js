function twosum(arr){
    let goal = arr.shift();
    let pairs = '';
    for(let i = 1; i < arr.length; i++){
        let diff = goal - arr[i];
        if(arr.includes(diff) && !pairs.includes(diff)){
            pairs += `${arr[i]},${diff} `;
        }
    }
    return pairs.length > 0 ? pairs : -1;
};

console.log(twosum([7, 3, 5, 2, -4, 8, 11]));
