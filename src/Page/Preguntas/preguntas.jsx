import { useState, useEffect } from "react";
import preguntas from "../../assets/preguntas.json";
import { Botton } from "../../components";

export function Preguntas({
  preguntaNumero,
  setPreguntaNumero,
  puntaje,
  setPuntaje,
  setFinal,
  final,
}) {
  const [boto, setBoto] = useState(false);
  let segundosTrascurridos = 0;

  const metodoComenzarJuego = () => {
    setTimeout(() => {
      setInterval(() => {
        segundosTrascurridos++;
      }, 1000);
    }, 1000);
  };
  const cambiarPregunta = () => {
    setPreguntaNumero(preguntaNumero + 1);
    setBoto(false);
    console.log(`Pregunta numero: ${preguntaNumero + 1}`);
    console.log(preguntas.length);
    if (preguntaNumero + 1 >= preguntas.length) {
      setFinal(true);
      console.log("Juego terminado, reiniciando...");
    }
  };
  const caculaPuntaje = (indexSeleccionado) => {
    if (
      boto === false &&
      indexSeleccionado === preguntas[preguntaNumero].respuesta_correcta
    ) {
      setPuntaje(puntaje + 3000 - segundosTrascurridos * 8);
      setBoto(true);
    } else if (boto === false) {
      setPuntaje(puntaje + -500 - segundosTrascurridos * 8);
      setBoto(true);
    }
  };

  useEffect(() => {
    metodoComenzarJuego();
  }, [preguntas[preguntaNumero]]);

  if (final === false) {
    return (
      <div className="preguntas">
        <h1>{preguntas[preguntaNumero].pregunta}</h1>
        <h3>{puntaje}</h3>
        <div>
          {preguntas[preguntaNumero].opciones.map((respuestas, index) => (
            <div
              id={index}
              onClick={() => caculaPuntaje(index)}
              style={{
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "black",
                textAlign: "center",
                alignItems: "center",
                margin: "10px",
              }}
              key={index}
            >
              <p style={{ textAlign: "center", width: "100%" }}>{respuestas}</p>
            </div>
          ))}
        </div>
        <Botton label="Cambiar" metodo={cambiarPregunta} />
      </div>
    );
  }
}
