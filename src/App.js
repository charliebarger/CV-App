import "./App.css";
import UserInformation from "./componenets/UserInformation";
import PrintCV from "./componenets/PrintCV";
import React, { Component } from "react";
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();
    this.state = {
      Personal: {
        firstName: { text: "", keyCode: uniqid(), placeHolder: "First Name" },
        lastName: { text: "", keyCode: uniqid(), placeHolder: "Last Name" },
        title: { text: "", keyCode: uniqid(), placeHolder: "Title" },
        address: { text: "", keyCode: uniqid(), placeHolder: "Address" },
        phone: { text: "", keyCode: uniqid(), placeHolder: "Phone Number" },
        email: { text: "", keyCode: uniqid(), placeHolder: "Email" },
        description: {
          text: "",
          keyCode: uniqid(),
          placeHolder: "Description",
        },
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
          <UserInformation
            printName={this.printName}
            values={this.state.Personal}
          />
        </div>
        <PrintCV values={this.state.Personal} />
      </div>
    );
  }
}

export default App;
