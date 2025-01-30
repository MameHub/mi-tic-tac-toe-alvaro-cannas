import styles from "./page.module.css";

export default function Game() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Álvaro Cañas González</h1>
        <Square/>
      </main>
    </div>
  );
}

export function Square() {
  return (
    <>
      <div className="board-row">
        <button className="square"></button>
        <button className="square"></button>
        <button className="square"></button>
      </div>
      <div className="board-row">
        <button className="square"></button>
        <button className="square"></button>
        <button className="square"></button>
      </div>
      <div className="board-row">
        <button className="square"></button>
        <button className="square"></button>
        <button className="square"></button>
      </div>
    </>
  );
}