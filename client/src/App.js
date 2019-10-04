import React from 'react';
import axios from 'axios';

import PlayerList from './components/PlayerList'

import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = { data: [] };
  }

  componentDidMount () {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => {
        this.setState({ data: res.data });
        // console.log("state from axios call", this.state);
        })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <PlayerList data={this.state.data} />

        </header>
      </div>
    );

  }
}

export default App;
