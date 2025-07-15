export function Botton({label, metodo}) {
  return (
    <button
      className="botton"
      onClick={metodo}
    >
      {label}
    </button>
  );

}