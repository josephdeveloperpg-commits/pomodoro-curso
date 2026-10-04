import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href='https://pt.wikipedia.org/wiki/Técnica_pomodoro'
        target='_blank'
        rel='noopener noreferrer'
      >
        Entenda como funciona a técnica pomodoro
      </a>
      <a>Chornos Pomodoro &copy; {new Date().getFullYear()} - Feito com 💚</a>
    </footer>
  );
}
