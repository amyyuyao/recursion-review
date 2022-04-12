// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function (obj) {
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (Array.isArray(obj)) {
    var result = [];
    obj.forEach(function (item) {
      if (typeof item !== 'undefined' && typeof item !== 'function') {
        result.push(stringifyJSON(item));
      }
    });
    return '[' + result + ']';
  } else if (typeof obj === 'object' && obj !== null) {
    if (Object.keys(obj).length === 0) {
      return '{}'
    }
    var result = [];
    for (var key in obj) {
      if (typeof obj[key] === 'function' || obj[key] === undefined) {

      } else {
      result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
    }
    return '{' + result + '}';
  }
  return '' + obj;

};
