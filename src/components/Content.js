import React from 'react'


function Content(props) {
  return (
    <div className='card1'>
      <img src={props.item.imageUrl}></img>
      <div className="info">

          <div className='link'>
            <img className="locimg" src="https://w7.pngwing.com/pngs/457/630/png-transparent-location-logo-location-computer-icons-symbol-location-miscellaneous-angle-heart.png" />
            <p className="location">{props.item.location}</p>
            <a href={props.item.googleMapsUrl} target="_blank">View on Google Maps</a>
          </div>
        <h1>{props.item.title}</h1>
        <p className='date'>{props.item.startDate}-{props.item.endDate}</p>
        
        <p>{props.item.description}</p>
      </div>
 
    </div>
  
    
  )
}

export default Content

