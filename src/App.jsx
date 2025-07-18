import "./App.css";
import { Inicio, Preguntas, Resultado } from "./Page";
import { useState } from "react";

function App() {
  const [comenzo, setComenzo] = useState(false);
  const [activo, setActivo] = useState(false);
  const [preguntaNumero, setPreguntaNumero] = useState(0);
  const [puntaje, setPuntaje] = useState(0);
  const [final, setFinal] = useState(false);
  const [nombre, setNombre] = useState("");

  const comenzarJuego = () => {
    setComenzo(true);
  };
  const Activar = () => {
    setActivo(true);
  };

  if (comenzo === true && activo === true && final === false) {
    return (
      <Preguntas
        preguntaNumero={preguntaNumero}
        setPreguntaNumero={setPreguntaNumero}
        puntaje={puntaje}
        setPuntaje={setPuntaje}
        setFinal={setFinal}
        final={final}
      />
    );
  }
  if (final === true) {
    return <Resultado puntaje={puntaje} nombre={nombre} />;
  }
  return (
    <>
      <Inicio
        metodoComenzarJuego={comenzarJuego}
        metodoActivar={Activar}
        activo={activo}
        nombre={nombre}
        setNombre={setNombre}
      />
    </>
  );
}

export default App;
