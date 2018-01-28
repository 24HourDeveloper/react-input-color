import React from 'react';

var person = (props) =>{
  return(
    <p onClick={props.toggle}>My name is {props.name} and I am {props.age} years old.</p>
  );
   //return React.createElement('p', null, 'This code come from the create element');
}

export default person;
