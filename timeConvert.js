function timeConverter(num){
    let hour = Math.floor(num / 60);
    let mins = num % 60;
    return `${hour}:${mins}`;

};

console.log(timeConverter(133));