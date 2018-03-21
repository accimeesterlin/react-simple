
import React from "react";

// Functional Component
const Header = (props) => {
  // TODO

  // No State
  // No Ajax
  // No Functions
  console.log("Props: ", props);

  // props.name
  // props.age
  // props.user

  // JSX
  return (
    <div>
      <p>Age: {props.age}</p>
      <p>User: {props.user}</p>
    </div>
  );
};









// #2 Class Component
class App extends React.Component {

  // #1 
  // state = {
  //   username: "accimeesterlin",
  //   age: 5
  // }


  //#2
  constructor() {
    super(); // required

    this.state = {
      username: "accimeesterlin",
      age: 5,
      count: 0
    }

    // Give access
    // this.sendData = this.sendData.bind(this);

  }



  sendData = () => {
    // TODO
    const count = this.state.count; // current state 


    this.setState({
      username: "Patrick Peterson",
      age: 20,
      count: count + 1
    }); // Change data inside the State
    console.log("Hello World");

  }


  render() {

    const arr = [1, 2, 3, 5, 7];
    console.log("State: ", this.state);

    // JSX
    return (
      <div>

        { 2 === 3 ? <p> Welcome to LA </p> : <p> Sorry, we move out to Atlanta </p>}

        {this.state.count >= 5 ? <Header
          user={this.state.username}
          age={this.state.age} /> : " No"}

        { arr.map((el, index) => (
          <p key = {index}> { el } </p>
        )) }

        <h2>This is the App Component</h2>
        <p>{this.state.username}</p>
        <p>{this.state.age}</p>

        <p>{this.state.count}</p>

        <button onClick={this.sendData}>Change</button>
      </div>
    );
  }
};


// State
// Is just an object
// Props
// 
// Conditional Rendering
  // Conditional statement
// map
  // Loop through items inside react
// declare a function
  // 




// // #1 Functional Component
// const Header = () => {
//   // TODO

//   // No State
//   // No Ajax
//   // No Functions


//   // JSX
//   return (
//     <div>
//       {2 + 2}
//     </div>
//   );
// };


// // #2 Class Component
// class Main extends React.Component {
//   // TODO

//   render() {

//     // JSX
//     return (
//       <div>

//       </div>
//     );
//   }
// }

// // #3 Higher Order Component
// const MainApp = () => class SubComponent extends React.Component {

//   // TODO
// };
export default App;