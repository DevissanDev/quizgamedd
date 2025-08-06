import style from "./botton.module.css";

export function Botton({ label, metodo }) {
  return (
    <button className={style.botton} onClick={metodo}>
      {label}
    </button>
  );
}
