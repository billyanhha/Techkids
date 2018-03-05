'use strict'
function sort(input) {
  var k = input.length;
  for (var i = 0; i < k; i++) {
    var min = i;
    for (var j = i; j < k; j++) {
      if (input[j] < input[min]) min = j;
    }
    var temp = input[min];
    input[min] = input[i];
    input[i] = temp;
  }
  return input;
}
function generate(testLengthArray) {
  var result = [] ;
  
  for (var i = 0; i < testLengthArray.length; i++) {
    var range = [];
    var target;
    var out;
    var check = true;
    for (var j = 0; j < testLengthArray[i]; j++) {
      range[j] = Math.floor(Math.random() * (-2001) + 1000);     
    }
    sort(range);
    var k = Math.floor(Math.random() * 2);
    if(k == 0){
    var temp = Math.floor(Math.random() * (testLengthArray[i]) );
    target = range[temp];
    } else{
      target = 12345;
    }

    result.push({"input":range , "target":target , "output":range.indexOf(target)});
    }
    return result;
}


 


module.exports = generate


