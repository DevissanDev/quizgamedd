import { Botton, Lista, TuNombre } from "../../components";
import participante from "../../assets/participante.json";
import { useState } from "react";

export function Inicio({ metodoComenzarJuego, metodoActivar, activo }) {
  const [nombre, setNombre] = useState("");

  const metodoCambiarNombre = () => {
    let nuevoNombre = document.querySelector("#nombre").value;
    setNombre(nuevoNombre);

    console.log(` estado : ${activo}`);
  };

  return (
    <div className="inicio">
      <TuNombre nombre={nombre} />
      <h3>{`estas activo: ${activo}`}</h3>
      <h1>JUEGO ZZZ</h1>
      <Botton label="Comenzar" metodo={metodoComenzarJuego} />
      <Lista tabla={participante} nombre="Participantes" />
      <div>
        <input type="text" id="nombre" />
        <Botton
          label="GUARDAR"
          metodo={() => {
            metodoCambiarNombre();
            metodoActivar();
          }}
        />
      </div>
    </div>
  );
}
