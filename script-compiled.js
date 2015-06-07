//function declaration using the fat arrow
'use strict';

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var sayHello = function sayHello(firstName, lastName) {
  return 'Hello ' + firstName + ' ' + lastName + '!';
};

var sayHola = function sayHola(firstName, lastName) {
  return 'Hola ' + firstName + ' ' + lastName + '!';
};

var sayAloha = function sayAloha(firstName, lastName) {
  return 'Aloha ' + firstName + ' ' + lastName + '!';
};

//default parameters
var getArea = function getArea() {
  var height = arguments[0] === undefined ? 30 : arguments[0];
  var width = arguments[1] === undefined ? 50 : arguments[1];

  return height * width;
};

//string template
var name = 'Jeremiah',
    feeling = 'a little strange'(_taggedTemplateLiteral(['Hello ', ', are you feeling ', '?'], ['Hello ', ', are you feeling ', '?']), name, feeling);

//object shorthand
var getDate = function getDate() {
  return '' + undefined.month + ' ' + undefined.dayNumber;
};

var month = 'June';
var dayNumber = 8;

module.exports = practice;
