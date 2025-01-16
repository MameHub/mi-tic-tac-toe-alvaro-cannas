import styles from "./page.module.css";

function Square({ value }) {
  return <button className="square">{value}</button>;
}

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Álvaro Cañas González</h1>
      </main>
    </div>
  );
}