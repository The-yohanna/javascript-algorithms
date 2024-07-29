function ArrayChallenge(arr) {
    let enemypos = 0;
    if(arr.indexOf(2) == -1){
        return enemypos;
    }
    let diff = Math.abs(arr.indexOf(2) - arr.indexOf(1));
    let diff2 = Math.abs(arr.lastIndexOf(2) - arr.indexOf(1));
    enemypos = (diff < diff2) ? diff : diff2;
    let challengetoken = "tchw5n6072";
    return enemypos + challengetoken;
}

console.log(ArrayChallenge([2, 0, 0, 0, 1, 0, 2, 0, 2]))