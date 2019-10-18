import React from 'react';

class PlayerCard extends React.Component {
  // constructor(props) {
  //   super(props);
  //   console.log("props from inside PlayerCard", this.props);
  // }
  
  render() {
    return (
      <div className="player-card">
        <h4>{this.props.player.name}</h4>
        <p>{`Player from ${this.props.player.country} was searched ${this.props.player.searches} ${this.props.player.searches === 1 ? "time" : "times"}`}</p>
      </div>
    );
  }
}

export default PlayerCard