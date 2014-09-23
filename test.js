var strip = require('./index.js');
var test = require('tape');

test('strips extension from path', function (t) {
  
  var basicUrl = '/index.html';
  var deepUrl = '/some/path/to/file.html';
  var fullUrl = 'http://example.com/about.html';
  
  t.equal(strip(basicUrl), '/index', 'removed extension from basic url');
  t.equal(strip(deepUrl), '/some/path/to/file', 'removed extension from deep url');
  t.equal(strip(fullUrl), 'http://example.com/about', 'removed extension from full url');
  
  t.end();
});

test('strips extension from path with query parameters', function (t) {
  
  var basicUrl = '/index.html?param=test';
  var deepUrl = '/some/path/to/file.html?param=test';
  
  t.equal(strip(basicUrl), '/index?param=test', 'removed extension from basic url');
  t.equal(strip(deepUrl), '/some/path/to/file?param=test', 'removed extension from deep url');
  
  t.end();
});