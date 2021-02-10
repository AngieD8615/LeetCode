import React from "react";
import { uuid } from "uuidv4";
import "./App.css";
import TableRow from "./TableRow";

export default function Table(props) {
  const { data } = props;
  return (
    <table>
      <thead>
        <tr>
          <th>Device</th>
          <th>Tasks</th>
        </tr>
      </thead>
      <tbody>
        {data.map((deviceElement, deviceIndex) => {
          return (
            <tr key={uuid()}>
              <TableRow
                deviceElement={deviceElement}
                deviceIndex={deviceIndex}
                handleDelete={props.handleDelete}
              />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
