import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const App = () => {
  //Consts
  const [rows, setRows] = useState([
    {
      num: " ",
      off: false,
    },
  ]);

  const [sum, setSum] = useState(0);

  const rowAddHandler = () => {
    var newRow = {
      num: 0,
      off: false,
    };

    setRows((old) => old.concat(newRow));
  };

  const valChangeHandler = (v, i) => {
    var newRows = [...rows];
    var newRow = { ...newRows[i], num: v };
    newRow[i] = newRow;
    setRows(newRows);
    calcSum(rows); //ogni qualvolta cambia il valore in input, aggiorno il risultato
  };

  const calcSum = (r) => {
    var i,
      tot = 0;

    /* Potevo usare un foreach, ma volevo essere sicuro che faceva esattamente ciò che chiedevo */

    for (i = 0; i < r.length; i++) {
      tot += r.num;
    }

    setSum(tot);
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
          <input
            type="number"
            onChange={(event) => valChangeHandler(event.target.value, i)}
          ></input>
          <Button className="bg__btn">Delete</Button>
          <Button className="bg__btn">Disable</Button>
        </div>
      ))}

      {/*Result handling*/}
      <div className="bg__result"> Result is : {sum} </div>
    </div>
  );
};

export default App;
