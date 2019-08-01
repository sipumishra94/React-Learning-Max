import React, { Component } from "react";
import "./App.css";
import Persion from "./Persion/Persion";

class App extends Component {
  state = {
    Persions: [
      { id: "abc", name: "max", age: "28" },
      { id: "abcd", name: "manu", age: "29" },
      { id: "abcde", name: "Gobind", age: "30" }
    ],
    otherState: "Some other value",
    showPersons: false
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.Persions.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.Persions[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.Persions];
    persons[personIndex] = person;

    this.setState(() => ({
      Persions: persons
    }));
  };
  deletePersionHandler = personIndex => {
    const persons = [...this.state.Persions];
    persons.splice(personIndex, 1);
    this.setState(() => ({ Persions: persons }));
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
          <div>
            {this.state.Persions.map((person, index) => {
              return (
                <Persion
                  click={() => this.deletePersionHandler(index)}
                  name={person.name}
                  age={person.age}
                  key={person.id}
                  changed={event => this.nameChangeHandler(event, person.id)}
                />
              );
            })}
          </div>
      );
      style.backgroundColor = "Red";
    }
    let classes = [];

    if (this.state.Persions.length <= 2) {
      classes.push("red");
    }

    if (this.state.Persions.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1>Hi, I am a react app.</h1>
        <p className={classes.join(" ")}>This is really working.</p>
        <button style={style} onClick={this.togglePersonHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
