'use strict'

function search(input, target) {
  var k = input.length;
  for(var i = 0 ; i < k ;i++ ){
    if(input[i] == target) return i;
  }
  return -1;
}

module.exports = search
