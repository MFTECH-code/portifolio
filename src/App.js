import React, {useState} from "react";
import Cabecalho from "./componentes/cabecalho/Cabecalho";
import MinhaHistoria from "./componentes/minha_historia/MinhaHistoria";
import Conhecimentos from "./componentes/conhecimentos/Conhecimentos";
import Formacao from "./componentes/formacao/Formacao";
import Experiencias from "./componentes/experiencias/Experiencias";
import Redes from "./componentes/redes/Redes";

export default function App() {

  const [minhaHistoria, setMinhaHistoria] = useState(false);
  const [conhecimentos, setConhecimentos] = useState(false);
  const [formacao, setFormacao] = useState(false);
  const [experiencias, setExperiencias] = useState(false);
  const [redes, setRedes] = useState(false);

  const mostraConteudo = () => {
    if (minhaHistoria) {
      return <MinhaHistoria/>
    } else if (conhecimentos) {
      return <Conhecimentos/>
    } else if (formacao) {
      return <Formacao/>
    } else if (experiencias) {
      return <Experiencias/>
    } else if (redes){
      return <Redes/>
    } else {
      return(
        <section>
          <h1>Olá!</h1>
        </section>
      )
    }
  }

  return (
    <>
      <Cabecalho 
        minhaHistoria={minhaHistoria}
        conhecimentos={conhecimentos}
        formacao={formacao}
        experiencias={experiencias}
        redes={redes}
        setMinhaHistoria={setMinhaHistoria}
        setConhecimentos={setConhecimentos}
        setFormacao={setFormacao}
        setExperiencias={setExperiencias}
        setRedes={setRedes}/>
        {mostraConteudo()}
    </>
  );
}

