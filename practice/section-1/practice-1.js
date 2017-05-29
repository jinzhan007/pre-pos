'use strict';

function collectSameElements(collectionA, collectionB) {
  let result = [];
  var c = collectionB.toString();
  for (var i = 0; i < collectionA.length; i++){
    if (c.indexOf(collectionA[i].toString()) > -1){
      for (var j = 0; j < collectionB.length; j++){
        if (collectionA[i] == collectionB[j]){
          result.push(collectionA[i]);
          break;
        }
      }
    }
  }
  return result;
}
