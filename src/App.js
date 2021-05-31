import "./App.css";
import InputSection from "./componenets/InputField/InputSection";
import PrintCV from "./componenets/CV/PrintCV";
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
      Experience: [this.newExperience()],
    };
  }

  newExperience = () => {
    let Experience = {
      keyCode: uniqid(),
      Inputs: {
        position: { text: "", keyCode: uniqid(), placeHolder: "Position" },
        company: { text: "", keyCode: uniqid(), placeHolder: "Company" },
        city: { text: "", keyCode: uniqid(), placeHolder: "City" },
        startDate: {
          text: "",
          keyCode: uniqid(),
          placeHolder: "Start Date",
        },
        endDate: { text: "", keyCode: uniqid(), placeHolder: "End Date" },
      },
    };
    return Experience;
  };

  addExperience = () => {
    this.setState({
      Experience: this.state.Experience.concat(this.newExperience()),
    });
  };

  removeExperience = (e) => {
    this.setState({
      Experience: this.state.Experience.filter(
        (item) => item.keyCode !== e.target.dataset.code
      ),
    });
  };

  updatePersonal = (e) => {
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

  updateExperience = (e) => {
    let newState = this.state.Experience;
    newState.forEach((item) => {
      if (
        item.keyCode === e.target.parentElement.parentElement.dataset.keycode
      ) {
        for (const property in item.Inputs) {
          if (property === e.target.id) {
            item.Inputs[property].text = e.target.value;
            this.setState({
              Experience: newState,
            });
          }
        }
      }
    });
  };

  render() {
    return (
      <div className="App">
        <InputSection
          printName={this.updatePersonal}
          printExperience={this.updateExperience}
          values={this.state}
          deleteExperience={this.removeExperience}
          addExperience={this.addExperience}
        />
        <PrintCV values={this.state} />
      </div>
    );
  }
}

export default App;
