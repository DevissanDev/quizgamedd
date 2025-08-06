import { Botton, Lista, TuNombre } from "../../components";
import participante from "../../assets/participante.json";
import styles from "./inicio.module.css";
import { useContext } from "react";
import { counterContext } from "../../context/counterContex";

export function Inicio({ metodoComenzarJuego, metodoActivar, activo }) {
  const { nombre, setNombre } = useContext(counterContext);

  const metodoCambiarNombre = () => {
    let nuevoNombre = document.querySelector("#nombre").value;
    setNombre(nuevoNombre);

    console.log(` estado : ${activo}`);
  };

  return (
    <div className={styles.inicio}>
      <h1>QUIZZ GAME</h1>
      {!activo ? (
        <div className={styles.fomrulario}>
          <input type="text" id="nombre" placeholder="NOMBRE" />
          <Botton
            label="GUARDAR"
            metodo={() => {
              metodoCambiarNombre();
              metodoActivar();
            }}
          />
        </div>
      ) : (
        <div className={styles.bienvenida}>
          <h2>{`Bienvenido ${nombre}`}</h2>
          <Botton label="Comenzar" metodo={metodoComenzarJuego} />
        </div>
      )}

      <Lista tabla={participante} nombre="Participantes" />
    </div>
  );
}
