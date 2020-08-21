import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super(); //--NOTE: Super() Here is allowing for reference to any of the parent elements imported at top)
    this.state = {
      foods: ["watermelon", "strawberries", "bananas", "mango", "dragonfruit", "blueberries"]
    };
  }

  render() {
    let foodsToDisplay = this.state.foods.map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    }); 

    return <div className="App">{foodsToDisplay}</div> //Here you are referencing the foodsToDisplay array index, and using render 'ToDisplay' 
  }
}

export default App;

// Need to add a stateful part to App component
// Need data to be in an array.
// This is showing an array of data on state, that is then shown on the DOM as a list. 
// AXIOS -  makes requests to your server from your front-end


// RENDER - whenever a component renders => it's sending an AXIOS request for those variables from the parent 
//  =>  (that's why you import the necessary files/componentns at the top of App.js in src; 
// AS the files and/or the componenents from other other files that'll be used, need to be accesiable further down using SUPER & CONSTRUCTOR

//Just like with Axios - 


// If <Login /> was actually <Header />, I would put <Nav /> inside of <Header />. So then <Header /> would be a child of <App /> and <Nav /> would be a child of <Header />.









// REFERENCE  CODE BELOW//

// import React from 'react';
// import './App.css';
// import './reset.css';
// import {Switch, Route} from 'react-router-dom';
// import Auth from './Components/Auth/Auth';
// import DashBoard from './Components/DashBoard/DashBoard';
// import Form from './Components/Form/Form';
// import Nav from './Components/Nav/Nav';
// import Post from './Components/Post/Post';

// class App extends React.Component {
//   render(){
//     return <div>

//     <Switch>
//       <Route exact path="/Auth" component={Auth}/>
//       <Route path="/Dashboard" component={DashBoard}/>
//       <Route path="/Form" component={Form}/>
//       <Route path="/Post" component={Post}/>
//       <Route path="/Nav" component={Nav}/>
//   </Switch>
//     </div>
//   }
// }

// export default App;

