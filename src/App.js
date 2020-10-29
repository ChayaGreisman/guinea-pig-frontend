import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <br/>
      {[...Array(count)].map((e, i) => <img src='./guineaPigGIF.gif' onClick={()=>setCount(count+1)} /> )}
      <img src='./guineaPigGIF.gif' onClick={()=>setCount(count+1)} /> 
    </div>
  );
}

export default App;
