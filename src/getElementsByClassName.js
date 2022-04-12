// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className
) {
  var body;
  if (arguments[1] !== undefined) {
    body = arguments[1]
  } else {
    body = document.body;
  }

  var children = body.childNodes;
  var classlist = body.classList;
  var result = [];
  if (classlist === undefined) {

  } else if (classlist.contains(className)) {
    result.push(body)
  }
  for (var i = 0; i < children.length; i++) {
    result = result.concat(getElementsByClassName(className, children[i]))
  }
  return result;
};
