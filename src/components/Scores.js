import '../styles/App.css';

import React, {useState} from 'react';



const Scores=(props)=>{
    

    
    //const imageParametersArray=props.imageParametersArray;
    return(
       <div className="App-header-right">
          <h2>Score:</h2>
          <h2>{props.scores.score}</h2>
          <h2>Best Score:</h2>
          <h2>{props.scores.bestScore}</h2>
        </div>
    )
    
};

export default Scores;