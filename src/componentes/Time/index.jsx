import React from "react";
import "./index.css";
import Card from "../Card";

function Time(props) {
  const css = { backgroundColor: props.background };
  const estilo = { borderColor: props.color };
  return (
    props.colaboradores.length > 0 && (
      <section className="time" style={css}>
        <h3 style={estilo}>{props.nome}</h3>
        <div className="colaboradores">
          {props.colaboradores.map((colaborador) => (
            <Card
              key={colaborador.nome}
              corDeFundo={props.color}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
            />
          ))}
        </div>
      </section>
    )
  );
}

export default Time;
