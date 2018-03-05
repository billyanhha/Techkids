'use strict'

function sort(input) {
  var k = input.length;
  for(var i = 0; i < k ; i++){
    var min = i;
    for(var j = i; j < k ; j++){
      if(input[j] < input[min]) min = j;
    }
    var temp = input[i];
    input[i] = input[min];
    input[min] = temp;
  }
  return input;
}

module.exports = sort
