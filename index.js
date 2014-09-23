var zipObject = require('lodash.zipobject');

var exports = module.exports = function stripExtension (pathname) {
  
  var u = parsePath(pathname);
  var extlessPath = u.pathname.slice(0, u.pathname.lastIndexOf('.'));
  
  return u.query ? extlessPath + '?' + u.query : extlessPath;
}

var parsePath = exports.parsePath = function (pathname) {
  
  return zipObject(['pathname', 'query'], pathname.split('?'));
}