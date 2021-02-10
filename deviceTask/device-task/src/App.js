import React, { useState, useEffect } from "react";
import "./App.css";
import getResponse from "./getResponse.js";

function App() {
  const [deviceTaskData, setDeviceTaskData] = useState([]);

  useEffect(() => {
    let newData = getResponse();
    console.log(newData)
    setDeviceTaskData(newData);
  }, []);

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
            {deviceTaskData.map((deviceElement) => {
              return (
                <tr>
                  <td>{deviceElement.device}</td>
                  <td>{deviceElement.tasks.map((task) => <p>{task},</p>)}</td>
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
