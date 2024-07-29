function ArrayChallenge(arr) {
    // code goes here
    let maxprofit = 0;
    for(let i = 0; i < arr.length; i++){
        let buyday = arr[i];
        for(let j = i + 1; j < arr.length; j++){
            let sellday = arr[j];
            let profit = sellday - buyday;
            maxprofit = (profit > maxprofit) ? profit : maxprofit;
        }
    }
    let challengetoken = "tchw5n6072";
    maxprofit = maxprofit == 0 ? -1 : maxprofit;
    let output = maxprofit.toString();
    let matchtoken = challengetoken.substring(0, output.length);
    let lefttoken = challengetoken.substring(output.length);
    let finaloutput = '';
    for(let i = 0; i < output.length; i++){
        finaloutput += output[i] + matchtoken[i];
    }
    return finaloutput + lefttoken;
}

console.log(ArrayChallenge([10, 9, 8, 2]))