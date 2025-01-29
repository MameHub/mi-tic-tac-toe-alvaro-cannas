import styles from "./page.module.css";

export default function Name() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Álvaro Cañas González</h1>
      </main>
    </div>
  );
}

export function Square() {
  return (
    <>
      <div className="board-row">
        <button className="square">1</button>
        <button className="square">2</button>
        <button className="square">3</button>
      </div>
      <div className="board-row">
        <button className="square">4</button>
        <button className="square">5</button>
        <button className="square">6</button>
      </div>
      <div className="board-row">
        <button className="square">7</button>
        <button className="square">8</button>
        <button className="square">9</button>
      </div>
    </>
  );
}