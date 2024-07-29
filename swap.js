function palindromeSwapper(str) {
    for(let i = 0; i < str.length - 1; i++){
        let adjswap = str[i + 1] + str[i];
        let palindrome = str.substr(0, i) + adjswap + str.substr(i + 2);
        let revpalindrome = palindrome.split('').reverse().join('');
        if (revpalindrome == palindrome) return palindrome;
    }
    return -1;

};

console.log(palindromeSwapper('rcaecar'));