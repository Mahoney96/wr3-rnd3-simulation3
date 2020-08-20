import React, {Component} from 'react';
import './App.css';
import './Components/Dashboard/Dashboard';
import Nav from './Components/Nav/Nav';
import Form from './Components/Form/Form';
import Dashboard from './Components/Dashboard/Dashboard';

class App extends Component{
  constructor(){
    super(); 

  };

}

export default App;


//FUNCTION NOTES:

// function sum(a, b){
//   return a + b
// }

// function sum(a, b)

// let sum2 = (a, b) => a + b



// function isPositive(number) {
//   return number >= 0
// }

// let isPositive2 = number => number >= 0

// //When you have a single parameter arrow function (=>) like the function above, where the only parameter is ' number ' , you are able to write the function without needing any () around the single parameter. Will need if mult parameters used in the function.

// let exampleArrow = arrow => arrow >= 0



// function randomNumber(){
//   return Math.random
// }

// // document.addEventListener('click', => () console.log('click'));


// IMPORT CORDE FROM ANOTHER APP //
import React from 'react';
import App from '../../app-3/src/App';
class Person {
  constructor(name) {
      this.name = name
  }


  printNameArrow(){
      setTimeout(()=>{
          console.log('Arrow: ' + this.name)
      }, 100)
  }

  printNameFunction() {
      setTimeout(function() {
          console.log('Function: ' + this.name)
      }, 100)
  }
}

let person = new Person('Bob')
person.printNameArrow()
person.printNameFunction()
console.log(this.name)

export default App;