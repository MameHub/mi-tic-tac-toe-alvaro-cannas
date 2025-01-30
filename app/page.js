'use client'

import styles from "./page.module.css";
import { useState } from "react";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Álvaro Cañas González</h1>
        <div className="board-row">
          <Square value={squares[1]}/>
          <Square value={squares[2]}/>
          <Square value={squares[3]}/>
        </div>
        <div className="board-row">
          <Square value={squares[4]}/>
          <Square value={squares[5]}/>
          <Square value={squares[6]}/>
        </div>
        <div className="board-row">
          <Square value={squares[7]}/>
          <Square value={squares[8]}/>
          <Square value={squares[9]}/>
        </div>
      </main>
    </div>
  );
}

export function Square() {
  const [value, setValue] = useState(null);
    function handleClick() {
      setValue('X');
      console.log("Jugada realizada");
    }
  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}