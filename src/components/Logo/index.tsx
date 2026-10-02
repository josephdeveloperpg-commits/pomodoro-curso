import { TimerIcon } from 'lucide-react';
import styles from './styles.module.css';

export function Logo() {
  return (
    <div className={styles.logo}>
      <a className={styles.logoLink} href='#'>
        {/* O icone que veio do lucide se trnsforma em svg */}
        <TimerIcon />
        <span>Chronos</span>
      </a>
    </div>
  );
}
