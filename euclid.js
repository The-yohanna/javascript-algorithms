
const gcd = (a, b) => {
    while(b != 0) {
        let t = a;
        a = b;
        b = t % a;
    }
    return a;
}

console.log(gcd(20,8));
console.log(gcd(48,36));