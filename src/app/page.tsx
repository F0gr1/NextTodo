import TodoList from "./Components/TodoList";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1> Todo </h1>
      <TodoList />
    </main>
  );
}
