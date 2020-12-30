import React from 'react'
import small from './images/small.png'
import medium from './images/medium.png'
import large from './images/large.png'


export default function Boat(props) {
  
  const boatType = length => {
    if (length > 10) {
      return large;
    } else if (length >= 8.5 && length <= 10 ) {
      return medium;
    } else {
      return small;
    }
  }

  fetch('/api/boats')
  
  return (
    <div className="boat_continer">
      
    </div>
  )
}
