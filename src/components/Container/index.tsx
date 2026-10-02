import styles from './styles.module.css';

type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className={styles.containerFluid}>
      <div className={styles.container}>
        <div className={styles.content}>
          <section>{children}</section>
        </div>
      </div>
    </div>
  );
}
