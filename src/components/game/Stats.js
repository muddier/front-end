import React from 'react';
import'../styles/Stats.css';

function Stats(props) {            

    return(
        <div className="stats-display">
            <div className="monster-stats">
                <h4>Monster Stats:</h4>            
                <p>Species: {props.charactersData.monster.name}</p>    
                <p>Info: {props.charactersData.monster.description}</p>
                <p>XP: {props.charactersData.monster.xp}</p>
            </div>
        <p>Battle Arena:
        <p>Results: {props.battleRes.message}</p>
        </p>
        </div>
    )
}

export default Stats;