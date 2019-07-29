import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent'
import CharComponent from './CharComponent'

class App extends Component {
  state = {
    text: '',
    length: 0
  }

  inputText = (event) => {
    let newText = event.target.value;
    let length = newText.length;
    this.setState({text: newText, length: length});
    console.log('state.text: ', this.state.text.split(''))
  }

  deleteText = (letterIndex) => {
    const textArray = [...this.state.text];
    textArray.splice(letterIndex, 1);
    const newText = textArray.join('')
    this.setState({text: newText});
  }

  render () {
    // let copyTextArray = [...this.state.text];
    let listOfText = this.state.text.split('').map((letter, index) => {
      return <CharComponent 
            click={() => this.deleteText(index)}
            letter={letter}
            key={index}
            />
    });

    return (
      <div className="App">
        <input type="text" 
        onChange={(event) => this.inputText(event)}
        value={this.state.text}
        />
        <ValidationComponent 
        total={this.state.length}/>
        {listOfText}
      </div>
    );

  }
}

export default App;
