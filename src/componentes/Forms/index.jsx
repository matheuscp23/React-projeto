import React, { useState } from "react";
import "./index.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
function Formulario(props) {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (e) => {
    e.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    });
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  };
  return (
    <section className="forms">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholde="Digite seu nome"
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />

        <ListaSuspensa 
          obrigatorio={true}
          itens={props.times} 
          valor={time}
          label="Time"
          aoAlterado={valor => setTime(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
}

export default Formulario;
