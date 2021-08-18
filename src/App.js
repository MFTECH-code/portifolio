import React, {useState} from "react";
import Cabecalho from "./componentes/cabecalho/Cabecalho";
import MinhaHistoria from "./componentes/minha_historia/MinhaHistoria";
import Conhecimentos from "./componentes/conhecimentos/Conhecimentos";
import Formacao from "./componentes/formacao/Formacao";
import Experiencias from "./componentes/experiencias/Experiencias";
import Redes from "./componentes/redes/Redes";
import "./App.css";

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
        <section className="bem-vindo">
          <h1 className="ola">Olá!</h1>
          <img src="./img/ola.jpg" alt="Saudação" />
          <div className="texto">
            <p>Seja bem vindo ao meu portifólio, onde eu apresento um resumo da minha história, conhecimentos e experiências.</p>
            <p>E sim eu sou muito fã do Jackie Chan, você vai ver várias imagens dele por aqui &#x1F604;.</p>
            </div>
            <h1>Agradecimentos</h1>
            <div className="texto">
              <p>Primeiramente agradeço o meu pai que nunca desistiu de me dar uma educação de qualidade, mesmo quando me mostrei não merecedor ele sempre me apoiou com seus sábios conselhos. Que ele descanse em paz &#x1F64F;.</p>
            </div>
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

