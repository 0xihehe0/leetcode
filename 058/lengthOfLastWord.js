var lengthOfLastWord = function(s) {
  if(s.length === 1 && s !== ' '){
    return s.length
  }
  let arr = []
  for (var i = s.length; i >= 0; i--) {
    console.log(arr,s[i]);
    if(s[i] && s[i] !== ' '){
      arr.push(s[i])
    }
    if(s[i] === ' ' && arr.length > 0){
      return arr.length
    }
    console.log(arr,s[i]);
  }
  return arr.length
};

let str = "a "
console.log(lengthOfLastWord(str));
