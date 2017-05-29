'use strict';

function collectSameElements(collectionA, collectionB){
  let result = [];
  collectionA.forEach(function (e) {
    collectionB.forEach(function (b_e){
      b_e.findIndex(function (f){
        return f === e;
      }) !== -1 && result.push(e);
    });
  });
  return result;
}


