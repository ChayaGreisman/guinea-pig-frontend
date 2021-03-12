import React from 'react';

export default function renderCard(room){

    function getTimePassed(updatedTime){
        let milliseconds=Date.now() - new Date(updatedTime)
        let timePassed
         let seconds = Math.round(milliseconds/1000)
         let minutes=Math.round(milliseconds/(1000*60))
         let hours=Math.round(minutes/60)
         let days=Math.round(hours/24)
         let weeks=Math.round(days/7)
         let years=Math.round(weeks/52)
         if(years>0){
             timePassed=`${years} year${years>1 ? 's': ''}` 
         }else if(weeks>0){
             timePassed=`${weeks} week${weeks>1 ? 's': ''}`
         }else if(days>0){
             timePassed=`${days} day${days>1 ? 's': ''}`
         }else if(hours>0){
             timePassed=`${hours} hour${hours>1 ? 's': ''}`
         }else if(minutes>0){
             timePassed=`${minutes} minute${minutes>1 ? 's': ''}`
         }else timePassed=`${seconds} second${seconds>1 ? 's': ''}`
         return timePassed
    }
    
    return (
        <div className="ui card room-card" >
          <div className="content">
              <div className="right floated meta">{getTimePassed(room.created_at)} ago</div>
              <img className="ui avatar image" src={room.user.image_url} alt="user"/> @{room.user.username}
          </div>
          <div className="image">
              <img className='room-image' src={room.img_url} alt={room.name}/>
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
              <h5><strong>{room.name}</strong></h5>
              {room.description}
          </div>
          <div className="content">
              <span className="right floated">
              <i onClick={(e)=>this.handleLikeClick()} className=  "heart outline red like icon"></i>
              {room.likes.length}
              </span>
              <span>
                  <i className="comment icon"></i>
                  {room.comments.length} comment{room.comments.length!==1 ? 's' : ''}
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
    )
}