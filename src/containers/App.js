import React, { Component } from "react";
import Classes from "./App.css";
import Persions from "../components/Persons/Persons";
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    Persions: [
      { id: "abc", name: "max", age: "28" },
      { id: "abcd", name: "manu", age: "29" },
      { id: "abcde", name: "Gobind", age: "30" }
    ],
    otherState: "Some other value",
    showPersons: false
  };

  static getDerivedStateFromProps(props,state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

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
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persions
            persons={this.state.Persions}
            clicked={this.deletePersionHandler}
            changed={this.nameChangeHandler}
          />
        </div>
      );
    }
   
    return <div className={Classes.App}>
      <Cockpit
      title = {this.props.title}
       showPersons = {this.state.showPersons}
       Persions = {this.state.Persions}
       clicked = {this.togglePersonHandler}
      />
    {persons}
    </div>;
  }
}

export default App;
