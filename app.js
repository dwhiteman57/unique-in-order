function uniqueInOrder(iterable) {
  var result = [];
  var last = '';

  for(var i = 0; i < iterable.length; i++){
    if(iterable[i] !== last){
      last = iterable[i]
      result.push(last);
    }
  }
  return result;
}



console.log(uniqueInOrder('AAAABBBCCDAABBB'));
console.log(uniqueInOrder(1,2,2,3,3));
