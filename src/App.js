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


      <div className="ui card room-card" >
            <div className="content">
                <div className="right floated meta">2 sec ago</div>
                <img className="ui avatar image"  alt="user"/> @chaya
            </div>
            <div className="image">
                <img className='room-image' />
            </div>

            <div className="extra content" style={{backgroundColor: 'lightGrey'}}>
                <div className="center aligned">
                    <button className="ui basic button ">
                    <i className="eye icon"></i>
                        View Room
                    </button>
                </div>
            </div>
            
            <div className="content">
                <h5><strong>hjvjg</strong></h5>
                hgcxhfgxn
            </div>
            <div className="content">
                <span className="right floated">
                <i className=  "heart outline red like icon"></i>
                2
                </span>
                <span >
                    <i className="comment icon"></i>
                    3 comments
                </span>
                <br/>
                <hr/>
               
                
            </div>
            <div className="extra content">
                <div className="ui large transparent left icon input">
                <i className="heart outline icon"></i>
                <input type="text"   placeholder="Add Comment..."/>
                </div>
            </div>
        </div>


    </div>
  );
}

export default App;
