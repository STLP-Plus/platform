import logo from './STLPPlus.png';
import styles from './App.module.css';

function App() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p class={styles.withpadding}>
          Welcome to STLP+
        </p>
        <a
          class={styles.link}
          href="https://github.com/stlp-plus"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Our GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
