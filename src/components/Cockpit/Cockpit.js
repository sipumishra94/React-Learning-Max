import React, { useEffect, useRef, useContext } from "react";
import Classes from "./Cockpit.css";
import AuthContext from "../../context/auth-context";

const Cokpit = props => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    // console.log('[Cockpit.js] useEffect.')
    // setTimeout(()=>{
    //   alert('saved data to cloud');
    // },1000);
    toggleBtnRef.current.click();
    return () => {
      console.log("[Cockpit.js] cleanup work in progress.");
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
      <button ref={toggleBtnRef} className={btnCLass} onClick={props.clicked}>
        Toggle Persons
      </button>
      <button onClick={authContext.login}>Log in</button>
    </div>
  );
};

export default React.memo(Cokpit);
