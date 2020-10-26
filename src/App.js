import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Canvas from './components/Canvas'


function App() {

  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    ctx.fill()
  }
  
  return (
    <div className="App">
      <br/>
      <Canvas draw={draw}/>
      <br/>
      <img src = './guineaPigGIF.gif'/> 
    </div>
  );
}

export default App;
