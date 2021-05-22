import "./App.css";
import Personal from "./componenets/Personal";
import PrintCV from "./componenets/PrintCV";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      Personal: {
        firstName: "",
        lastName: "",
        // title: "",
        // address: "",
        // phone: "",
        // email: "",
        // descriprion: "",
      },
    };
  }
  printName = (e) => {
    console.log(this.state.Personal);
    let newState = this.state.Personal;
    const keys = Object.keys(this.state.Personal);
    keys.forEach((key) => {
      if (e.target.id === key) {
        newState[key] = e.target.value;
        this.setState({
          Personal: newState,
        });
      }
    });
  };

  render() {
    return (
      <div className="App">
        <Personal printName={this.printName} />
        <PrintCV values={this.state.Personal} />
      </div>
    );
  }
}

export default App;
