function palindrome(str) {
    const nomstr = str.toLowerCase().replace(/[\W_]/g, '');
    const reversestr = nomstr.split('').reverse().join('');
    return nomstr == reversestr;
}
  
console.log(palindrome("eyes"));