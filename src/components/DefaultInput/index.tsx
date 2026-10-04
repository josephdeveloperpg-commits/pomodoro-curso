import styles from './styles.module.css';
// Tipando as props do componente DefaultInput, que são o id e o type do input,
// e o restante das props que são passadas para o componente, serão passadas para o input.
type DefaultInputProps = {
  id: string;
  label?: string;
} & React.ComponentProps<'input'>;

// Usando a desestruruturação de props, podemos pegar o id e o type do input,
// e o restante das props que são passadas para o componente, serão passadas para o input.
export function DefaultInput({ id, type, label, ...rest }: DefaultInputProps) {
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <input className={styles.input} id={id} type={type} {...rest} />
    </>
  );
}
