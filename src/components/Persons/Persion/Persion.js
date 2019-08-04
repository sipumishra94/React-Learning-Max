import React, { Component } from "react";
import Classes from "./Persion.css";

class Persion extends Component {
  render() {
    console.log("[Person.js] rendering...");
    return (
      <div className={Classes.Persion}>
        <p onClick={this.props.click}>
          I am {this.props.name} of age {this.props.age}
        </p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </div>
    );
  }
}

export default Persion;
