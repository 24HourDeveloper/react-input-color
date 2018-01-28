import React, { Component } from 'react';
import './App.css';

// This is the Card function that will retun the Color function
const Card = (props) =>{
  return(
    <Color  colors={props.colors}/>
  );
}
// Here the Color function is being styled by the color object
const Color = (props) =>{
    const color = {
      height: 350,
      marginBottom: 10,
      backgroundColor: props.colors
    }
    return(
      <div style={color}>
      </div>
    );
}

class App extends Component {
  //Here the initial state is being set
  state = {
    color: '#98a4b7'
  }
  // With the changeInput() function we take the color setState
  //And set it to the value of the input box
  changeInput = (event) =>{
    this.setState({color: event.target.value});
  }

  render() {
    //The cardStyle object for the Card styling.
    const cardStyle = {
      height: 400,
      width: 250,
      border: '1px solid black',
      margin:'auto',
      marginTop:50,
      boxShadow: '5px 10px 10px #888888'
    }

    return (
      <div className="App">
        <div style={cardStyle}>
          <Card colors= {this.state.color}/>
          <input type='text' value={this.state.color} onChange={this.changeInput}/>
        </div>
      </div>
    );
  }
}

export default App;
