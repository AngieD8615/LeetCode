import React, { useState, useEffect } from "react";
import "./App.css";
import Table from "./Table.js"
import getResponse from "./getResponse.js";

function App() {
  
  const [deviceTaskData, setDeviceTaskData] = useState([]);

  useEffect(() => {
    let newData = getResponse();
    console.log(newData)
    setDeviceTaskData(newData);
  }, []);

  const reloadData = () => {
    let oldData = [...deviceTaskData];
    let newData = getResponse();
    // console.log("oldData ", oldData, " newData ", newData);

    for (var i = 0; i < newData.length; i++) {
      for (var j = 0; j < oldData.length; j++) {
        if (oldData[j].device === newData[i].device) {
          oldData[j].tasks = oldData[j].tasks.concat(newData[i].tasks);
          break;
        }
        oldData.push(newData[j]);
      }
    }
    console.log("post", oldData);
    //setDeviceTaskData(oldData);
    // setInterval(reloadData, 2000)
  };
  // reloadData()

  const handleDelete = (deviceIndex, taskIndex) => {
    let checking = [...deviceTaskData];
    checking[deviceIndex].tasks.splice(taskIndex, 1);
    setDeviceTaskData(checking)
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
