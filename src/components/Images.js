

import '../styles/App.css';

import React, {useState} from 'react';



const Images=(props)=>{
      //image parameters array
    const[imageParametersArray]=useState(props.imageParametersArray);
    
    //const imageParametersArray=props.imageParametersArray;
    return(
        <div className="App-content">
        {imageParametersArray.map((imageParameters)=>
          <img src={imageParameters.source} onClick={props.shuffleImages}
          data-id={imageParameters.id} key={imageParameters.id}/>
        )}
        </div>
    )
}

export default Images;
