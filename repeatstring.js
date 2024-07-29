function repeatStringNumTimes(str, num) {
  let repeatstring = str;
  if(num <= 0) return '';

  while(num > 1) {
    repeatstring += str;
    num--;
  }

  return repeatstring;
}

repeatStringNumTimes("abc", 3);