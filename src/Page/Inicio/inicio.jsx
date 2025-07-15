import { Botton, Lista, TuNombre } from "../../components";
import participante from "../../assets/participante.json";
import { useState } from "react";

export function Inicio() {
  const [nombre, setNombre] = useState("");
  const [activo, setActivo] = useState(false);

  const metodoCambiarNombre = () => {
    let nuevoNombre = document.querySelector("#nombre").value;
    setNombre(nuevoNombre);
    setActivo(true);
    console.log(` estado : ${activo}`);
  };

  return (
    <div className="inicio">
      <TuNombre nombre={nombre} />
      <h3>{`estas activo: ${activo}`}</h3>
      <h1>JUEGO ZZZ</h1>
      <Botton label="Comenzar" />
      <Lista tabla={participante} nombre="Participantes" />
      <div>
        <input type="text" id="nombre" />
        <Botton label="GUARDAR" metodo={metodoCambiarNombre} />
      </div>
    </div>
  );
}
