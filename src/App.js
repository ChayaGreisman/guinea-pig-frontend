import React, {useState, useEffect} from 'react';
import './App.css';
import {} from 'react-popper'
import renderCard from './components/roomCard'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';




function App() {

  const [count, setCount] = useState(0);

  const [rooms, setRooms] = useState([])

// componentDidMount equivalent - takes second argument - dependency array (when it should run). 
// For componentDidMount, just want it to run once, so empty array
  useEffect(() => {
    fetch("http://localhost:3000/rooms")
    .then(resp=>resp.json())
    .then(rooms=> setRooms(rooms))
  }, []);
// ----------------------------------------------------------------------------


  function randomPig(){
    let pigs = ['./guineaPigGIF.gif', './guineaPig1.png', './guineaPig2.gif', './guineaPig3.png']
    return pigs[Math.floor(Math.random() * pigs.length)];
  }


  

  return (
    <div className="App">
      
      {[...Array(count)].map((e, i) => <img src={randomPig()} onClick={()=>setCount(count+1)} /> )}
      <img src={randomPig()} onClick={()=>setCount(count+1)} /> 
      
      {rooms && rooms.map(room=>renderCard(room))}

      
  
    </div>  
  );
}

export default App;
