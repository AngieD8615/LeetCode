import React from "react";
import { uuid } from "uuidv4";
import "./App.css";

export default function TableRow(props) {
  const { deviceElement, deviceIndex, handleDelete } = props
  return (
    <> 
      <td>{deviceElement.device}</td>
      <td>
        <div>
          {deviceElement.tasks.length === 0
            ? null
            : deviceElement.tasks.map((task, taskIndex) => {
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
                    <span
                      className="task"
                      onClick={() => handleDelete(deviceIndex, taskIndex)}
                    >
                      {task}
                    </span>
                    <span>, </span>
                  </React.Fragment>
                );
              })}
        </div>
      </td>
    </>
  );
}
