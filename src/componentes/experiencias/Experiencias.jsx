import React from 'react';
import { ExperienciasStyled } from '../../styled';

const Experiencias = () => {
    return (
        <ExperienciasStyled>
            <h1>Minhas experiências</h1>
            <div className="img-experiencias">
                <img src="./img/experiencias.jpg" alt="minhas experiências" />
            </div>
            <ul>
                <li><img src="./img/atendente.png" alt="atendente icone" /><a href="https://www.liq.com.br/" target="_blank" rel="noreferrer"><span>Atendimento ao cliente e vendas | Liq | 2021 - Atual Emprego</span></a></li>
                <li><img src="./img/game.png" alt="game icone" /><a href="https://itch.io/jam/proficionaljam/rate/735882" target="_blank" rel="noreferrer"><span>Participação de game JAM | None JAM | 2020</span></a></li>
                <li><img src="./img/project.png" alt="project icone" /><a href="https://github.com/ZenGroup-FIAP/GlobalSolution2021.1" target="_blank" rel="noreferrer"><span>Projeto Gulliver Global Solution | FIAP | 2021</span></a></li>
                <li><img src="./img/project.png" alt="project icone" /><a href="https://github.com/ZenGroup-FIAP/projeto-ibm-zenspaceon" target="_blank" rel="noreferrer"><span>ZenSpaceOn | FIAP | 2021</span></a></li>
                <li><img src="./img/project.png" alt="project icone" /><a href="https://calculadora-imc-react.vercel.app/" target="_blank" rel="noreferrer"><span>Calculadora de IMC com ReactJS</span></a></li>
            </ul>
        </ExperienciasStyled>
    );
}

export default Experiencias;
