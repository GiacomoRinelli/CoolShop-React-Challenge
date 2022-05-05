import React, { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container,  } from 'react-bootstrap';


const App = () => {
  //Consts
  const [rows, setRows] = useState([
    {
      num: 0,
      off: false,
    },
  ]);

  const rowAddHandler = () => {
    var newRow = {
      num: 0,
      off: false,
    };

    setRows((old) => old.concat(newRow));
  };

  return (
    <div className="bg">
      <div className="title">--- CALCULATOR ---</div>

      {/* RowAdding */}
      <button className="bg__addRowBtn" onClick={rowAddHandler}>
        Add Row
      </button>

      {rows.map((v, i) => (
        /* Single row */
        <div className="line">
          <select>
            <option>+</option>
            <option>-</option>
          </select>
          <input placeholder="input number"></input>
          <Button className="bg__btn">Delete</Button>
          <Button className="bg__btn">Disable</Button>
        </div>
      ))}

      {/*Result handling*/}
      <div className="bg__result"> Result is : (var)</div>
    </div>
  );
};

export default App;
