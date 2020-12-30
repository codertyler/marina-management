import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./Dock.css";
import axios from "axios";
import Popup from "./PopupForm";
import ChangeDock from "./ChangeForm";

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

  const findColor = (docker_number) => {
    const dataLength = data.data.length;
    for (let i = 0; i < dataLength; i++) {
      if (data.data[i].attributes.docker_number === docker_number) {
        return data.data[i].attributes.color;
      } else {
        continue;
      }
    }
  };

  const findLength = (docker_number) => {
    const dataLength = data.data.length;
    for (let i = 0; i < dataLength; i++) {
      if (data.data[i].attributes.docker_number === docker_number) {
        return data.data[i].attributes.length;
      } else {
        continue;
      }
    }
  };

  const deleteBoat = (docker_number) => {
    const dataLength = data.data.length;
    for (let i = 0; i < dataLength; i++) {
      if (data.data[i].attributes.docker_number === docker_number) {
        axios.delete(`/api/v1/boats/${data.data[i].attributes.name}`)
        window.location.reload(false);

      } else {
        continue;
      }
    }
  };

  const onDockChangeClick = (event) => {
    event.preventDefault();

    console.log(event.target)

  }

  for (let i = 1; i <= 10; i++) {
    const row = (
      <tr key={i}>
        <td className="cell_container">
          {findRecord(i)
            ? i + " " + findRecord(i) + ", " + findLength(i) + "m"
            : i}{" "}
          <div className="boat_color" style={{ "background-color": `${findColor(i)}` }}> {" "} &nbsp; &nbsp; &nbsp;{" "}</div>{" "}
          {findRecord(i) ? <div className="button_container"><button onClick={() => deleteBoat(i)}>delete</button>  <ChangeDock name={findRecord(i)} /></div> : ""}
        </td>
        <td className="cell_container">
          {findRecord(i + 10)
            ? i +
              10 +
              " " +
              findRecord(i + 10) +
              ", " +
              findLength(i + 10) +
              "m"
            : i + 10}{" "}
          <div className="boat_color" style={{ "background-color": `${findColor(i + 10)}` }}>{" "}&nbsp; &nbsp; &nbsp;{" "}</div>{" "}
          {findRecord(i + 10) ? <div className="button_container"><button onClick={() => deleteBoat(i + 10)}>delete</button>  <ChangeDock /></div> : ""}

        </td>
      </tr>
    );


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
      <Popup />
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
