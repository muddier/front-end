import React from 'react';
import'../styles/Stats.css';

function Stats(props) {            
    console.log('STATTTSSSS', props)
    return(
        <div className="stats-display">
            <div className="monster-stats">
                <h5>Monster Stats:</h5>            
                <p>Species: {props.charactersData.monster.name}</p>    
                <p>Info: {props.charactersData.monster.description}</p>
                <p>XP: {props.charactersData.monster.xp}</p>
            </div>
        <p>Battle Arena:
            <p>{props.resultsMsg}</p>
                        
        </p>
        </div>
    )
}

export default Stats;