import "./App.css";
import { Inicio, Preguntas } from "./Page";
import { useState } from "react";

function App() {
  const [comenzo, setComenzo] = useState(false);
  const [activo, setActivo] = useState(false);

  const comenzarJuego = () => {
    setComenzo(true);
  };
  const Activar = () => {
    setActivo(true);
  };

  if (comenzo === true && activo === true) {
    return <Preguntas />;
  }
  return (
    <>
      <Inicio
        metodoComenzarJuego={comenzarJuego}
        metodoActivar={Activar}
        activo={activo}
      />
    </>
  );
}

export default App;
