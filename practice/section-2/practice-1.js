'use strict';

function countSameElements(collection) {
  let result = [];
  collection.forEach(function (e) {
    let ys = result.findIndex(function (f) {
      return f.key === e;
    });
    if(ys === -1){
      result.push({key:e,count:1});
    }else{
      result[ys].count++;
    }
  });
  return result;
}
