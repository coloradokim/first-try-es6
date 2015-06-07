//function declaration using the fat arrow
var sayHello = (firstName, lastName) => {
  return "Hello " + firstName + ' ' + lastName + '!' ;
}

var sayHola = (firstName, lastName) => {
  return "Hola " + firstName + ' ' + lastName + '!' ;

}

var sayAloha = (firstName, lastName) => {
  return "Aloha " + firstName + ' ' + lastName + '!' ;
}

//default parameters
var getArea = (height = 30, width = 50) => {
  return height * width;
}

//string template
var name = "Jeremiah", feeling = "a little strange"
`Hello ${name}, are you feeling ${feeling}?`


//object shorthand
let getDate = () => {
  return `${this.month} ${this.dayNumber}`
}

let month = 'June'
let dayNumber = 8




module.exports = practice;
