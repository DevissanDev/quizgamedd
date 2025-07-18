import participantes from "../../assets/participante.json";
import { Lista } from "../../components";

export function Resultado({ puntaje, nombre }) {
  participantes.push({
    id: 5,
    nombre: nombre,
    puntaje_total: puntaje,
  });
  const participantesOrdenados = [...participantes].sort(
    (a, b) => b.puntaje_total - a.puntaje_total
  );
  return (
    <div className="resultado">
      <h1>{`Juego Terminado ${nombre}`}</h1>
      <h2>Puntaje Final: {puntaje}</h2>
      <Lista tabla={participantesOrdenados} nombre="Participantes" />
    </div>
  );
}
