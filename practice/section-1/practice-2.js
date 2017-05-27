'use strict';

function collectSameElements(collectionA, collectionB) {
  var a1 = 0;
  var b1 = 0;
  var result = new Array();
  while  (a1 < collectionA.length && b1 < collectionB.length){
    if (a[a1] < b[b1]){
      a1++;
    }
    else if (a[a1] > b[b1]){
      b1++;
    }
    else/*equal*/{
      result.push(a[a1]);
      a1++;
      b1++;
    }
  }
  return results;
}
