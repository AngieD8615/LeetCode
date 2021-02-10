import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import "./App.css";
import getResponse from "./getResponse.js";

function App() {
  
  const [deviceTaskData, setDeviceTaskData] = useState([]);

  useEffect(() => {
    let newData = getResponse();
    console.log(newData);
    setDeviceTaskData(newData);
  }, []);

  const reloadData = () => {
    let oldData = [...deviceTaskData];
    let newData = getResponse();
    console.log("oldData ", [...deviceTaskData], " newData ", newData);

    for (var i = 0; i < newData.length; i++) {
      for (var j = 0; j < oldData.length; j++) {
        console.log(i, j, oldData[j].device, newData[j].device);
        if (oldData[j].device === newData[j].device) {
          oldData[j].tasks = oldData[j].tasks.concat(newData[j].tasks);
        }
        oldData.push(newData[j]);
      }
    }
    console.log("post", oldData);
    setDeviceTaskData(oldData);
  };

  const handleDelete = (deviceIndex, taskIndex) => {
    let checking = [...deviceTaskData];
    checking[deviceIndex].tasks.splice(taskIndex, 1);
    setDeviceTaskData(checking)
    console.log("clicked ", deviceIndex, taskIndex, deviceTaskData, checking);
  };

  return (
    <div>
      <div className="App">
        <header className="App-header">
          <h1>Device Task Table</h1>
        </header>
      </div>
      <div className="appBody">
        <table>
          <thead>
            <tr>
              <th>Device</th>
              <th>Tasks</th>
            </tr>
          </thead>
          <tbody>
            {deviceTaskData.map((deviceElement, deviceIndex) => {
              return (
                <tr key={uuid()}>
                  <td>{deviceElement.device}</td>
                  <td>
                    <div>
                      {deviceElement.tasks.length === 0 ? null : deviceElement.tasks.map((task, taskIndex) => {
                        let uniqueKey = uuid();
                        return taskIndex === deviceElement.tasks.length - 1 ? (
                          <span
                            key={uniqueKey}
                            onClick={() => handleDelete(deviceIndex, taskIndex)}
                            className="task"
                          >
                            {task}
                          </span>
                        ) : (
                          <React.Fragment key={uniqueKey}>
                            <span className="task" onClick={() => handleDelete(deviceIndex, taskIndex)}>
                              {task}
                            </span>
                            <span>, </span>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
