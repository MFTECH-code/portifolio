import React from 'react';
import "./experiencias.css";

const Experiencias = () => {
    return (
        <section className="experiencias">
            <h1>Minhas experiências</h1>
            <div className="img-experiencias">
                <img src="./img/experiencias.jpg" alt="minhas experiências" />
            </div>
            <ul>
                <li><a href="https://www.liq.com.br/" target="_blank" rel="noreferrer"><img src="./img/atendente.png" alt="atendente icone" /><span>Atendimento ao cliente e vendas | Liq | 2021 - Atual Emprego</span></a></li>
                <li><a href="https://itch.io/jam/proficionaljam/rate/735882" target="_blank" rel="noreferrer"><img src="./img/game.png" alt="game icone" /><span>Participação de game JAM | None JAM | 2020</span></a></li>
                <li><a href="https://github.com/ZenGroup-FIAP/GlobalSolution2021.1" target="_blank" rel="noreferrer"><img src="./img/project.png" alt="project icone" /><span>Projeto Gulliver Global Solution | FIAP | 2021</span></a></li>
                <li><a href="https://github.com/ZenGroup-FIAP/projeto-ibm-zenspaceon" target="_blank" rel="noreferrer"><img src="./img/project.png" alt="project icone" /><span>ZenSpaceOn | FIAP | 2021</span></a></li>
            </ul>
        </section>
    );
}

export default Experiencias;
