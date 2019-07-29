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
  deletePersionHandler = (personIndex)=>{
    const persons = this.state.Persions;
    persons.splice(personIndex,1);
    this.setState({persons: persons});
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
       {this.state.Persions.map((person,index) => {
         return <Persion 
         click = {() =>this.deletePersionHandler(index)}
         name = {person.name} 
         age = {person.age}>
         </Persion>
       })}
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
