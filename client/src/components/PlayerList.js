import React, { useEffect } from 'react';

import PlayerCard from './PlayerCard'
import { useLocalStorage } from '../hooks/useLocalStorage';

const PlayerList = props => {
    // local storage hook
    const [data, setData] = useLocalStorage("player data", props.data);

    useEffect(() => {
        setData(props.data);
        // console.log("effect run");
    }, [props.data, setData]);


    return (
        <div className="player-list">
        <h2>Player List</h2>
        {data.map(player => <PlayerCard key={player.id} player={player} />)}
        </div>
    );  
  }

export default PlayerList