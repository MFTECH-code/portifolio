import React from 'react';
import "./formacao.css";

const Formacao = () => {
    return (
        <section className="formacao">
            <h1>Minha formação</h1>
            <div className="img-formacao">
                <img src="./img/formacao.jpg" alt="formação"/>
            </div>
            <ul>
                <li><img src="./img/graduate.png" alt="icone graduação" /><span>Análise e desenvolvimento de sistemas | FIAP | 2021 - 2022</span></li>
                <li><img src="./img/graduate.png" alt="icone graduação" /><span>Ensino médio completo | Colégio São Judas Tadeu | 2018 - 2020</span></li>
            </ul>
            <h2>Certificados</h2>
            <ul>
                <li><img src="./img/certificate.png" alt="icone certificado" /><span>Java Fundamentos | Nano Course FIAP | 2021</span></li>
                <li><img src="./img/certificate.png" alt="icone certificado" /><span>Autoridade em algorítimos | DevMedia | 2021</span></li>
                <li><img src="./img/certificate.png" alt="icone certificado" /><span>Autoridade em javaScript | DevMedia | 2021</span></li>
                <li><img src="./img/certificate.png" alt="icone certificado" /><span>Formação Social e Sustentabilidade | Nano course FIAP | 2021</span></li>
            </ul>
        </section>
    );
}

export default Formacao;
