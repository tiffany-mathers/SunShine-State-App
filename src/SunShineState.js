import React, { Component } from 'react';
import './css/App.css';
import MessageList from "./MessageList";

class App extends Component {
  render() {

    return (
      <div className="App">
        <div className='App-header'>
          SunShine State
        </div>
        <MessageList/>
      </div>
    );
  }
}

export default App;
