module.exports = function longestConsecutiveLength(array) {
  array.sort();
  array.sort(compareNumbers);
  function compareNumbers(a, b) {
    return a - b;
  }
    
  var counter =1;
  var maxCount = (array.length ==0) ? 0 : 1;
  for (var i=0; i<array.length-1; i++){
    if (array[i+1]==array[i]+1){
      //если +1, то счетчик +1
      counter++;
    } else if (array[i+1]==array[i]) {
      //если равно, то пропускаем (ничего не делаем)
    } else {
      //в остальных случаях выполняем код ниже
            if (maxCount<counter){
              maxCount = counter;
            }
            counter = 1;
    }
        
  }
     
  return maxCount;
}
