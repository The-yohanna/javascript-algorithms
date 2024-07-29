
const longestword = (sen) => {
    const arr = sen.match(/\w+/gi);

    const sorted = arr.sort((a, b) => b.length - a.length);

    return sorted[0];
};

console.log(longestword('fun&!! time'));