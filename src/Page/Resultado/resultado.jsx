import participantes from "../../assets/participante.json";
import { Lista } from "../../components";
import styles from "./resultado.module.css";
import { useContext } from "react";
import { counterContext } from "../../context/counterContex";

export function Resultado({ puntaje }) {
  const { nombre } = useContext(counterContext);

  participantes.push({
    Id: 5,
    Nombre: nombre,
    Puntaje_Total: puntaje,
  });
  const participantesOrdenados = [...participantes].sort(
    (a, b) => b.puntaje_total - a.puntaje_total
  );
  return (
    <div className={styles.resultado}>
      <h1>{`Juego Terminado ${nombre}`}</h1>
      <h2>Puntaje Final: {puntaje}</h2>
      <Lista
        className={styles.tabla}
        tabla={participantesOrdenados}
        nombre="Participantes"
      />
    </div>
  );
}
