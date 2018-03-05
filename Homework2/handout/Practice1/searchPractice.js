'use strict'

function search(input, target) {
  var k = input.length;
  var first = 0 , end = k-1;
  for(var i = 0 ; i < k ;i++){
    if(input[i] == target) return i;
  }
  return -1;
}
module.exports = search

