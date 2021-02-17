import React, { useState, useEffect } from "react";
import "./App.css";
import Table from "./Table.js";
import getResponse from "./getResponse.js";

function App() {
  const [deviceTaskData, setDeviceTaskData] = useState([]);

  useEffect(() => {
    let newData = reloadData();
    console.log(newData);
    setDeviceTaskData(newData);
  }, []);

  const reloadData = () => {
    let oldData = [...deviceTaskData];
    let newData = getResponse();
    console.log("oldData ", oldData, " newData ", newData);
    if (oldData.length === 0) {
      return newData; 
    }
    for (var i = 0; i < newData.length; i++) {
      let deviceExists = false;

      for (var j = 0; j < oldData.length; j++) {
        // console.log(i, j, oldData[j].device, newData[i].device)
        if (oldData[j].device === newData[i].device) {
          oldData[j].tasks = [...oldData[j].tasks, ...newData[i].tasks];
          deviceExists = true
        }
      }
      if (!deviceExists) {
        oldData.push(newData[i]);
      }
    }
    let timeInterval = Math.floor(Math.random()* (10 - 1) + 1) * 1000
    setInterval(reloadData, timeInterval)
    return oldData;
    // console.log("fired")
  };

  const handleDelete = (deviceIndex, taskIndex) => {
    let checking = [...deviceTaskData];
    checking[deviceIndex].tasks.splice(taskIndex, 1);
    setDeviceTaskData(checking);
  };

  return (
    <div>
      <div className="App">
        <header className="App-header">
          <h1>Device Task Table</h1>
        </header>
      </div>
      <div className="appBody">
        <Table data={deviceTaskData} handleDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
