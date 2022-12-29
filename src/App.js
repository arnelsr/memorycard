import './styles/App.css';

import React, {useState} from 'react';
import cat from './images/cat.png';
import dog from './images/dog.png';
import eagle from './images/eagle.png';
import elephant from './images/elephant.png';
import tiger from './images/tiger.png';
import Images from './components/Images';
import Scores from './components/Scores';



const App=()=>{
  //scores
  const[scores,setScores]=useState({
    score:0,
    bestScore:0
  });
  //image parameters

  const imageSourceArray=[cat,dog,eagle,elephant,tiger]
    //initialize array
    let initialArray=[]
    for (let i=0; i<imageSourceArray.length;i++)
    initialArray[i] = {
      id:i,
      clicked:false,
      source:imageSourceArray[i]
    }
  //image parameters array
  const[imageParametersArray,setImageParametersArray]=useState(initialArray);
  //force render
  const[forceRender,setForceRender]=useState(0);
 

 

 const shuffleImages =(e)=>{
  
 //shuffle images
  const shuffledArray=imageParametersArray;
  
  for (let i =0; i<shuffledArray.length;i++) {
      //check if clicked
      
    if (shuffledArray[i].id==e.target.dataset.id){
      let newScores=scores;
        if (shuffledArray[i].clicked===false){
          //set to clicked
          shuffledArray[i].clicked=true;
          //store old scores
          
          //set new scores
          newScores.score=newScores.score+1;
          if (newScores.score>newScores.bestScore){
              newScores.bestScore=newScores.score;
          }
          
         
        }else{
          //reset scores
          newScores.score=1
          //reset clicked
          for (let k =0; k<shuffledArray.length;k++) {
            shuffledArray[k].clicked=false;
          }
        }
        setScores(newScores);
    }
    const j = Math.floor(Math.random() * (i + 1));
    const temp = shuffledArray[i];
    shuffledArray[i] = shuffledArray[j];
    shuffledArray[j] = temp;
  };
  //set new array
  setImageParametersArray(shuffledArray);

  
  //set force render
  if (forceRender===0){
    setForceRender(1)
  }else{
    setForceRender(0)
  }
 
 };
  return (
  <div className="App">
    <header className="App-header">
     <div className="App-header-1">
      <h1>Animals Memory Game</h1>
      <Scores scores={scores} />
     </div>
     <div className="App-header-2">
          <div>Get points by clicking on an image but don't click on any more than once!</div>
     </div>
    </header>
    <Images imageParametersArray={imageParametersArray} shuffleImages={shuffleImages} 
    />

            
    <footer className="App-footer">
          @arnelsr
    </footer>
  </div>
  );
};
export default App;
