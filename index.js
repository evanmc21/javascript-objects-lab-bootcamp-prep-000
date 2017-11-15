var recipes = {}
<<<<<<< HEAD

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value})
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}
function deleteFromObjectByKey(object, key) {
  var clone = Object.assign({}, object);
  delete clone [key];
  return clone;
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object
}
=======
>>>>>>> e41c547bdde6eef6c5d1c8b720787c1e7e47d670
