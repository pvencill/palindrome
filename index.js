function palindrome(text){
  let str = text.toLowerCase().replace(/[^\w]|_/g, '');

  const len = str.length;

  for(let i=0;i< len; i++) {
    if (str[i] !== str[str.length - i - 1])
      return false
  }

  return true;
};

module.exports = palindrome;