import "./App.css";
import Personal from "./componenets/Personal";
import PrintCV from "./componenets/PrintCV";
import React, { Component } from "react";
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();
    this.state = {
      Personal: {
        firstName: { text: "", keyCode: uniqid() },
        lastName: { text: "", keyCode: uniqid() },
        title: { text: "", keyCode: uniqid() },
        address: { text: "", keyCode: uniqid() },
        phone: { text: "", keyCode: uniqid() },
        email: { text: "", keyCode: uniqid() },
        description: { text: "", keyCode: uniqid() },
      },
    };
  }
  printName = (e) => {
    console.log(this.state.Personal);
    let newState = this.state.Personal;
    const keys = Object.keys(this.state.Personal);
    keys.forEach((key) => {
      newState[key].keyCode = this.state.Personal[key].keyCode;
      if (e.target.id === key) {
        newState[key].text = e.target.value;
        this.setState({
          Personal: newState,
        });
      }
    });
  };

  render() {
    return (
      <div className="App">
        <div className="input-section">
          <Personal printName={this.printName} values={this.state.Personal} />
        </div>
        <PrintCV values={this.state.Personal} />
      </div>
    );
  }
}

export default App;
