import React from 'react';
import Classes from './Persion.css';

const Persion = props => {
  return (
    <div className ={Classes.Persion}>
      <p onClick = {props.click}>
        I am {props.name} of age {props.age}
      </p>
      <p>{props.children}</p>
      <input type = "text" onChange = {props.changed} value = {props.name} />
    </div>
  );
};

export default Persion;