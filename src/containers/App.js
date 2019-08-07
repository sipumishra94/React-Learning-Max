import React, { Component } from "react";
import Classes from "./App.css";
import Persions from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import Aux from '../hoc/Auxiliary'
import withClass from "../hoc/withClass";
import AuthContext from '../context/auth-context';

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }

  state = {
    Persions: [
      { id: "abc", name: "max", age: "28" },
      { id: "abcd", name: "manu", age: "29" },
      { id: "abcde", name: "Gobind", age: "30" }
    ],
    otherState: "Some other value",
    showPersons: false,
    showCokpit: true,
    authenticated: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
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

  loginHandler = ()=>{
    this.setState({authenticated: true});
  };

  render() {
    console.log("[App.js] render");
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persions
            persons={this.state.Persions}
            clicked={this.deletePersionHandler}
            changed={this.nameChangeHandler}
            isAuthenticated = {this.state.authenticated}
          />
        </div>
      );
    }

    return (
      <Aux classes={Classes.App}>
        <button
          onClick={() => {
            this.setState({ showCokpit: !this.state.showCokpit });
          }}
        >
          Remove Cockpit
        </button>
        {this.state.showCokpit ? (
          <Cockpit
            title={this.props.title}
            showPersons={this.state.showPersons}
            Persions={this.state.Persions}
            clicked={this.togglePersonHandler}
            login = {this.loginHandler}
          />
        ) : null}
        {persons}
      </Aux>
    );
  }
}

export default withClass(App,Classes.App);
