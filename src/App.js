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
      Personal: this.newPersonal([]),
      Experience: [this.newExperience([])],
      Education: [this.newEducation([])],
    };
  }

  pushEmptyStrings = (myArray, totalNumberOfInputs) => {
    for (let i = 0; i < totalNumberOfInputs; i++) {
      if (!myArray[i]) {
        myArray.push("");
      }
    }
    return myArray;
  };

  newPersonal = (defaultValues) => {
    let values = this.pushEmptyStrings(defaultValues, 7);

    let personal = {
      Inputs: {
        firstName: {
          text: values[0],
          keyCode: uniqid(),
          placeHolder: "First Name",
        },
        lastName: {
          text: values[1],
          keyCode: uniqid(),
          placeHolder: "Last Name",
        },
        title: {
          text: values[2],
          keyCode: uniqid(),
          placeHolder: "Title",
        },
        address: { text: values[3], keyCode: uniqid(), placeHolder: "Address" },
        phone: {
          text: values[4],
          keyCode: uniqid(),
          placeHolder: "Phone Number",
        },
        email: { text: values[5], keyCode: uniqid(), placeHolder: "Email" },
      },
      description: {
        text: values[6],
        keyCode: uniqid(),
        placeHolder: "Description",
      },
    };
    return personal;
  };

  personalExample = () => {
    let personal = this.newPersonal();
  };

  newEducation = (defaultValues) => {
    let values = this.pushEmptyStrings(defaultValues, 5);
    let education = {
      keyCode: uniqid(),
      Inputs: {
        school: {
          text: values[0],
          keyCode: uniqid(),
          placeHolder: "School Name",
        },
        degree: { text: values[1], keyCode: uniqid(), placeHolder: "Degree" },
        city: { text: values[2], keyCode: uniqid(), placeHolder: "City" },
        startDate: {
          text: values[3],
          keyCode: uniqid(),
          placeHolder: "Start Date",
        },
        endDate: {
          text: values[4],
          keyCode: uniqid(),
          placeHolder: "End Date",
        },
      },
    };
    return education;
  };

  newExperience = (defaultValues) => {
    let values = this.pushEmptyStrings(defaultValues, 5);
    let Experience = {
      keyCode: uniqid(),
      Inputs: {
        position: {
          text: values[0],
          keyCode: uniqid(),
          placeHolder: "Position",
        },
        company: { text: values[1], keyCode: uniqid(), placeHolder: "Company" },
        city: { text: values[2], keyCode: uniqid(), placeHolder: "City" },
        startDate: {
          text: values[3],
          keyCode: uniqid(),
          placeHolder: "Start Date",
        },
        endDate: {
          text: values[4],
          keyCode: uniqid(),
          placeHolder: "End Date",
        },
      },
    };
    return Experience;
  };

  resetState = () => {
    this.setState({
      Personal: this.newPersonal([
        "John",
        "Dohne",
        "Front End Web Developer",
        "Denver, CO",
        "555-555-5555",
        "example@email.com",
        "tristique senectus et netus et malesuada fames ac turpis egestas sed tempus urna et pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna eget est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas integer eget aliquet nibh praesent tristique magna sit amet purus gravida.",
      ]),
      Experience: [
        this.newExperience([
          "Senior Developer",
          "Google",
          "Seattle, WA",
          "2021",
          "Present",
        ]),
        this.newExperience([
          "Junior Developer",
          "Mcmanus Podiatry Group",
          "Dallas, TX",
          "2019",
          "2021",
        ]),
        this.newExperience([
          "Freelance Developer",
          "Dohne International Worldwide",
          "Dallas, TX",
          "2019",
          "Present",
        ]),
      ],
      Education: [
        this.newEducation([
          "The Odin Project",
          "Full Stack Javascript Curriculum",
          "Remote",
          "2018",
          "2019",
        ]),
        this.newEducation([
          "Southern Methodist University",
          "Business Management",
          "Dallas, TX",
          "2014",
          "2018",
        ]),
      ],
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
