import "./App.css";
import InputSection from "./componenets/InputField/InputSection";
import PrintCV from "./componenets/CV/PrintCV";
import React, { Component } from "react";
import uniqid from "uniqid";
import Header from "./componenets/header/Header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      Personal: this.newPersonal(),
      Experience: [this.newExperience()],
      Education: [this.newEducation()],
    };
  }

  newPersonal = () => {
    let personal = {
      Inputs: {
        firstName: { text: "", keyCode: uniqid(), placeHolder: "First Name" },
        lastName: { text: "", keyCode: uniqid(), placeHolder: "Last Name" },
        title: { text: "", keyCode: uniqid(), placeHolder: "Title" },
        address: { text: "", keyCode: uniqid(), placeHolder: "Address" },
        phone: { text: "", keyCode: uniqid(), placeHolder: "Phone Number" },
        email: { text: "", keyCode: uniqid(), placeHolder: "Email" },
      },
      description: {
        text: "",
        keyCode: uniqid(),
        placeHolder: "Description",
      },
    };
    return personal;
  };

  newEducation = () => {
    let education = {
      keyCode: uniqid(),
      Inputs: {
        school: { text: "", keyCode: uniqid(), placeHolder: "School Name" },
        degree: { text: "", keyCode: uniqid(), placeHolder: "Degree" },
        city: { text: "", keyCode: uniqid(), placeHolder: "City" },
        startDate: {
          text: "",
          keyCode: uniqid(),
          placeHolder: "Start Date",
        },
        endDate: { text: "", keyCode: uniqid(), placeHolder: "End Date" },
      },
    };
    return education;
  };

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

  resetState = () => {
    this.setState({
      Personal: this.newPersonal(),
      Experience: [this.newExperience()],
      Education: [this.newEducation()],
    });
  };

  addItem = (parent) => {
    parent === "Experience"
      ? this.setState({
          Experience: this.state[parent].concat(this.newExperience()),
        })
      : this.setState({
          Education: this.state[parent].concat(this.newEducation()),
        });
  };

  removeItem = (parent, e) => {
    console.log(parent, e.target);
    parent === "Experience"
      ? this.setState({
          Experience: this.state["Experience"].filter(
            (item) => item.keyCode !== e.target.dataset.code
          ),
        })
      : this.setState({
          Education: this.state["Education"].filter(
            (item) => item.keyCode !== e.target.dataset.code
          ),
        });
  };

  updatePersonal = (e) => {
    let newState = this.state.Personal;
    if (e.target.id === "description") {
      newState["description"].text = e.target.value;
    } else {
      const keys = Object.keys(this.state.Personal.Inputs);
      keys.forEach((key) => {
        newState.Inputs[key].keyCode = this.state.Personal.Inputs[key].keyCode;
        if (e.target.id === key) {
          newState.Inputs[key].text = e.target.value;
        }
      });
    }
    this.setState({
      Personal: newState,
    });
  };

  updateItem = (e, section) => {
    console.log(this.state.Education);
    let newState = this.state[section];
    newState.forEach((item) => {
      if (
        item.keyCode === e.target.parentElement.parentElement.dataset.keycode
      ) {
        for (const property in item.Inputs) {
          if (property === e.target.id) {
            item.Inputs[property].text = e.target.value;
            section === "Experience"
              ? this.setState({
                  Experience: newState,
                })
              : this.setState({
                  Education: newState,
                });
          }
        }
      }
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <InputSection
          printName={this.updatePersonal}
          printItem={this.updateItem}
          values={this.state}
          deleteItem={this.removeItem}
          addItem={this.addItem}
        />
        <button onClick={this.resetState}>Reset</button>
        <PrintCV values={this.state} />
      </div>
    );
  }
}

export default App;
