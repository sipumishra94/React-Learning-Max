import React, { Component } from "react";
import Classes from "./App.css";
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
    let persons = null;
    let btnCLass = '';

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
      btnCLass = Classes.Red;
    }
    let classes = [];

    if (this.state.Persions.length <= 2) {
      classes.push(Classes.red);
    }

    if (this.state.Persions.length <= 1) {
      classes.push(Classes.bold);
    }

    return (
      <div className={Classes.App}>
        <h1>Hi, I am a react app.</h1>
        <p className={classes.join(" ")}>This is really working.</p>
        <button className = {btnCLass} onClick={this.togglePersonHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
