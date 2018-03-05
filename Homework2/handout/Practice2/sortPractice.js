'use strict'

function sort(input) {
  var k = input.length;
  for(var i = 0 ; i < k ; i++ ){
    var min = i;
    for(var j = i ; j < k ; j++ ){
      if(input[j] < input[min] ) min = j;
    }
    var temp = input[min];
    input[min] = input[i];
    input[i] = temp;
  }
  return input;
}

module.exports = sort
