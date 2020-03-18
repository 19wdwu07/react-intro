import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Person2 from "./Person2.js";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//ReaactDOM must be imported first in order to use as below


//render method is a requirement to render anything to the browser- 2 parameters what and where
ReactDOM.render(<h1> Hello React user from a simple render method</h1>, document.getElementById('root'));

//declaring a html element as constant- example 1
const myHtmlElement = <h1> Hello Yoobee!  from a constant declaration of html element</h1>
ReactDOM.render(myHtmlElement, document.getElementById('h1'));

//declaring a html element as constant- example 2
const unorderedList = (
  <ul className="red">
    <li> Home </li>
    <li> About </li>
    <li> Contact </li>
    <li> All the red ones from an unorderedList declared as constant</li>
  </ul>
)
ReactDOM.render(unorderedList, document.getElementById('h2'));

//JSX - JS expression inside a html eleemnt . A combination of js and xml is jsx
const mySum = <h2> the sum of 12 and 36 is {12+36}. This is a JSX expression</h2>
ReactDOM.render(mySum, document.getElementById('mySum'));

// components are of two types - class and function components
class Person extends React.Component{
  render(){
    return(
      <div>
        <h1> This is a class Component</h1>
      </div>
    )
  }
}
ReactDOM.render(<Person/>, document.getElementById('personClass'));

//function component
function App() {
  return (
    <div>
      <h1> HELLO! This is a function Component</h1>
    </div>
  );
}
ReactDOM.render(<App/>, document.getElementById('appFunction'));


//component constructor with state
//state is where you store the object properties and its values.
//super will inherit everything from its parent class

class Car extends React.Component{
  constructor(){
    super();
    this.state = {
      carName : "Ford"
    };
  }

  render(){
    return <h1> The name of my car is {this.state.carName}. </h1>
  }
}
ReactDOM.render(<Car/>, document.getElementById('carName'));


//props

class Car2 extends React.Component{
  render(){
    return (
      <div>
      <h1 className="blue"> The Car is {this.props.color} </h1>
      <Car/>
      </div>
    );
  }
}
ReactDOM.render(<Car2 color="blue"/>, document.getElementById('car2'));


//calling from external file which is imported here
ReactDOM.render(<Person2/>, document.getElementById('person2'));
