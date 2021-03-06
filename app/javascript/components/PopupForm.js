import axios from 'axios';
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function PopupForm() {
  
//This is the form for Adding new boats to the database
  
  const onClick = (event) => {
    event.preventDefault();

    if (event.target[3].value > 20) {
      alert('Only 20 Docks available. Enter an available dock number.')
    }

    axios.post('/api/v1/boats', {
      name: event.target[0].value,
      length: event.target[1].value,
      color: event.target[2].value,
      docker_number: event.target[3].value

    })
    window.location.reload(false);

  }
  
  return (
    <Popup trigger={<button> Add a Boat</button>} position="center">
    <div className="form_container">
      <h3>Boat Form</h3>
      <form onSubmit={onClick}>
        <input type="text" placeholder="name" name="name" required></input>
        <input type="number" step="any" placeholder="length" name="length" required></input>
        <input type="text" placeholder="color" name="color" requred></input>
        <input type="number" placeholder="dock number" name="dock_number" requred></input>

      <button type="submit">Add the boat</button>
      </form>

    </div>
  </Popup>
  )
}
