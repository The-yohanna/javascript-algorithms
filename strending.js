function confirmEnding(str, target) {
    const strend = str.substr(str.length - target.length, target.length);
    return strend == target;
  }
  
  confirmEnding("Bastian", "n");