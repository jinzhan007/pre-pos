'use strict';

function collectSameElements(collectionA, objectB) {
  let result = [];
  collectionA.forEach(function (e) {
    objectB.value.findIndex(function (f) {
      return f=== e.key;
    }) !== -1 && result.push(e.key);
  });
  return result;
}
