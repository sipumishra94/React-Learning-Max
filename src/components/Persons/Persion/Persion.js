import React, { Component } from "react";
import Aux from "../../../hoc/Auxiliary";
import withClass from "../../../hoc/withClass";
import Classes from "./Persion.css";
import propTypes from "prop-types";
import AuthContext from "../../../context/auth-context";

class Persion extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    this.inputElementRef.current.focus();
  }

  render() {
    console.log("[Person.js] rendering...");
    return (
      <Aux>
        {this.context.authenticated ? (
          <p>Authenticated</p>
        ) : (
          <p>Please log in</p>
        )}

        <p onClick={this.props.click}>
          I am {this.props.name} of age {this.props.age}
        </p>
        <p>{this.props.children}</p>
        <input
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

Persion.protoTypes = {
  click: propTypes.func,
  name: propTypes.string,
  age: propTypes.number,
  changed: propTypes.func
};

export default withClass(Persion, Classes.Persion);
