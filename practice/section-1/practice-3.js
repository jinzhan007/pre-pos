'use strict';

function collectSameElements(collectionA, objectB) {
  let result = [];
  collectionA.forEach(function (e) {
    objectB.value.findIndex(function (f) {
      return f=== e;
    }) !== -1 && result.push(e);
  });

  return result;
}
