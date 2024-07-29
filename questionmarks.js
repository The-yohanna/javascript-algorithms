
const questionmark = (str) => {
    const matches = str.match(/\d[\w\?]*?\d/g);

    if(!matches) return false;

    let result = false;

    for(let match of matches){
      if(Number(match[0]) + Number(match[match.length - 1]) === 10) {
        if(match.split('').filter(char => char === '?').length === 3){
            result = true;
        }
      }  
    }

    return result;


}


console.log(questionmark('69arrb6???4xxbl5a???eee5'));