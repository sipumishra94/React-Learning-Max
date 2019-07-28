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
    otherState: "Some other value"
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

  render() {

    const style = {
      backgroundColor : 'white',
      font : 'inherit',
      border : '1px solid blue',
      padding : '8px',
      cursor : 'pointer'
    };
    return (
      <div className="App">
        <h1>Hi, I am a react app.</h1>
        <p>This is really working.</p>
        <button 
        style = {style}
        onClick={this.switchNameHandler.bind(this,'maxmillian')}>Switch Name</button>
        <Persion
          name={this.state.Persions[1].name}
          age={this.state.Persions[1].age}
        >
          my hobies: swimming
        </Persion>
        <Persion
          name={this.state.Persions[0].name}
          age={this.state.Persions[0].age}
          click = {this.switchNameHandler.bind(this,'max!')}
          changed = {this.nameChangeHandler}
        />
        <Persion
          name={this.state.Persions[2].name}
          age={this.state.Persions[2].age}
        />
      </div>
    );
  }
}


export default App;
