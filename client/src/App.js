import React from 'react';
import axios from 'axios';

import PlayerList from './components/PlayerList'
import SearchChart from './components/SearchChart'

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
        <SearchChart data={this.state.data} />
        <PlayerList data={this.state.data} />
      </div>
    );

  }
}

export default App;
