var practice = require('../practice.js');

 describe('tests greeting functions', function() {
  it('returns a string saying hello/hola/aloha and firstName lastName', function() {
    expect(practice.sayHello('Kim', 'Schlesinger')).toEqual('Hello Kim Schlesinger!');
    expect(practice.sayHola('Kim', 'Schlesinger')).toEqual('Hola Kim Schlesinger!');
    expect(practice.sayAloha('Kim', 'Schlesinger')).toEqual('Aloha Kim Schlesinger!');
  });
});

describe('tests default parameters function', function() {
 it('accepts numbers for height and width and returns the area', function() {
   expect(practice.getArea(30, 50)).toEqual(150);
  });
});


describe('tests object shorthand function', function() {
 it('accepts month name and date number to give month and day', function() {
   expect(practice.getDate('June', 8)).toEqual(June 8);
  });
});
