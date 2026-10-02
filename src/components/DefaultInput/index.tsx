// Tipando as props do componente DefaultInput, que são o id e o type do input,
// e o restante das props que são passadas para o componente, serão passadas para o input.
type DefaultInputProps = {
  id: string;
} & React.ComponentProps<'input'>;

// Usando a desestruruturação de props, podemos pegar o id e o type do input,
// e o restante das props que são passadas para o componente, serão passadas para o input.
export function DefaultInput({ id, type }: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}>task</label>
      <input id={id} type={type} placeholder='Enter a new task' />
    </>
  );
}
