import React from "react";
import Classes from './Cockpit.css';

const cokpit = props => {
  const classes = [];
  let btnCLass = "";
  if (props.showPersons) {
    btnCLass = Classes.Red;
  }

  if (props.Persions.length <= 2) {
    classes.push(Classes.red);
  }

  if (props.Persions.length <= 1) {
    classes.push(Classes.bold);
  }

  return (
    <div className={Classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={classes.join(" ")}>This is really working.</p>
      <button className={btnCLass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cokpit;
