import styles from '../App.module.css';
import logo from '../STLPPlus.png';

function Header() {
  return (
    <div>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p class={styles.withpadding}>
          Welcome to STLP+
        </p>
        <a class={styles.link} href="https://github.com/stlp-plus">
          View Our GitHub
        </a>
      </header>
    </div>
  )
}

export default Header