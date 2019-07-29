import React, {Component} from 'react';
  import './App.css';
  import Persion from './Persion/Persion';

class App extends Component {
  state = {
    Persions: [
      { name: "max", age: "28" },
      { name: "manu", age: "29" },
      { name: "Gobind", age: "30" }
    ],
    otherState: "Some other value",
    showPersons: false
  };

  switchNameHandler = (newName) => {
    this.setState({
      //this.state.Per[0].name = "Max millian";
      Persions: [
        { name: newName, age: "28" },
        { name: "Manu", age: "29" },
        { name: "Gobind", age: "26" }
      ]
    });
  };

  nameChangeHandler = (event) =>{
    this.setState({
      //this.state.Per[0].name = "Max millian";
      Persions: [
        { name: event.target.value, age: "28" },
        { name: "manu", age: "29" },
        { name: "Gobind", age: "27" }
      ]
    });
  }

  togglePersonHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  }

  render() {

    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

 let persons = null;
 if (this.state.showPersons){
   persons = (   
     <div>
       {this.state.persons.map(person => {
         return <Person name = {person.name} age = {person.age}></Person>
       })}
       />
     </div>
   );
 }

    return (
      <div className="App">
        <h1>Hi, I am a react app.</h1>
        <p>This is really working.</p>
        <button 
        style = {style}
        onClick={this.togglePersonHandler}>Toggle Persons</button>
        { persons}
      </div>
    );
  }
}


export default App;
