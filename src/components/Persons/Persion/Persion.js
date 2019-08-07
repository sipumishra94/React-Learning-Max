import React, { Component } from "react";
import Aux from "../../../hoc/Auxiliary";
import withClass from '../../../hoc/withClass';
import Classes from './Persion.css';

class Persion extends Component {
  render() {
    console.log("[Person.js] rendering...");
    return (
      <Aux>
        <p onClick={this.props.click}>
          I am {this.props.name} of age {this.props.age}
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

export default withClass(Persion,Classes.Persion);
