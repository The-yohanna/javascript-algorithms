function StringChallenge(str) {
    // code goes here
    let strarr = str.split('');
    let dashed = '';
    let challengeToken = 'tchw5n6072';
    for(let i = 0; i < strarr.length; i++){
        let int = parseInt(strarr[i]);
        let nextint = parseInt(strarr[i + 1]);
        dashed += ((int % 2 !== 0 && int !== 0) && (nextint % 2 !== 0 && nextint !== 0)) ?  int + '-' : int;
    };
    let tokenmatch = challengeToken.substring(0, dashed.length);
    let tokenleft = challengeToken.substring(dashed.length);
    let finaloutput = '';
    for(let i = 0; i < dashed.length; i++){
        finaloutput += dashed[i] + tokenmatch[i];
    }
    return finaloutput + tokenleft;
}

console.log(StringChallenge('454793'))