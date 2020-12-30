import axios from 'axios';
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function ChangeForm(props) {
  
  
  
  const onClick = (event) => {
    event.preventDefault();
    const name = props.name;

    axios.patch(`/api/v1/boats/${name}`, {
      docker_number: event.target[0].value

    })

    window.location.reload(false);


  }

  
  return (
    <Popup trigger={<button>change</button>} position="center">
    <div className="form_container">
      <h4>Change Dock # for {props.name} </h4>
      <form onSubmit={onClick}>
        <input type="number" placeholder="dock number" name="dock_number" requred></input>

      <button type="submit">Update Dock</button>
      </form>

    </div>
  </Popup>
  )
}
