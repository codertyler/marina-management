import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./Dock.css";
import axios from "axios";

export default function Dock() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  //Fetching the data from the server and setting/updating the data
  useEffect(() => {
    axios.get("/api/v1/boats").then((response) => {
      setData(response.data);
      setLoading(false);
    });
  }, []);

  //Initial grid display array
  const gridDisplay = [];

  //Find boat's index in the array by ID

  //Wait til the axios call is finished loading and loading state
  if (isLoading) {
    return <div>LOADING..</div>;
  }

  //Display the name by the docker number
  const findRecord = (docker_number) => {
    const dataLength = data.data.length;
    for (let i = 0; i < dataLength; i++) {
      if (data.data[i].attributes.docker_number === docker_number) {
        return data.data[i].attributes.name;
      } else {
        continue;
      }
    }
  };

  
  for (let i = 1; i <= 10; i++) {
    
    const row = (
      <tr key={i}>
        <td>{findRecord(i) ? i + " " + findRecord(i) : i }</td>
        <td>{findRecord(i + 10) ? (i + 10) + " " + findRecord(i + 10) : i + 10}</td>
        
      </tr>
    );
    
    
    // const checkingIfBoatExists = row.props.children[1].props.children;
    
    
    
    gridDisplay.push(row);
    
  }

  return (
    <div className="dock_container">
      {/* {data.data.map((item) => (
        <li key={item.attributes.id}>
          {item.attributes.name} {item.attributes.docker_number}{" "}
        </li>
      ))} */}
      <h1>Marina Management Dock</h1>
      <table>
        <thead>
          <tr>
            <th>Left Wing</th>
            <th>Right Wing</th>
          </tr>
        </thead>
        <tbody>{gridDisplay}</tbody>
      </table>
    </div>
  );
}
