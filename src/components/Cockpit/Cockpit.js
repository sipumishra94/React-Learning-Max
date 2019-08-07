import React, {useEffect} from "react";
import Classes from './Cockpit.css';

const Cokpit = props => {

  useEffect(() => {
    console.log('[Cockpit.js] useEffect.')
    setTimeout(()=>{
      alert('saved data to cloud');
    },1000);
    return () => {
      console.log('[Cockpit.js] cleanup work in progress.');
    };
  }, []);

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

export default React.memo(Cokpit);
