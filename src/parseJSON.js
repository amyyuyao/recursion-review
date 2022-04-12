// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here

  if (json.includes('[')) {
    var arr = [];
    var sub = json.substring(0, json.length -2)
    var spl = sub.split(',')
    if (sub.length === 0) {
      return [];
    }
    spl.forEach(function (item) {
       arr.push(item)
    });
    return arr;
  } else if (json.includes('{')) {
    var obj = {};
    var sub = json.substring(1, json.length -2)
    var spl = sub.split(',')
    for (var i = 0; i < spl.length; i++) {
      var s = spl[i].split(':')
      obj[s[0]] = s[1]
    }
    return obj;
  }

};
