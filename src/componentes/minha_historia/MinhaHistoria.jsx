import React from 'react';
import "./minhaHistoria.css";

const MinhaHistoria = () => {
    return (
        <>
            <section className="content-my-history">
                <h1>Minha história</h1>
                <section className="img-my-history">
                    <img src="./img/jackieChan.jpg" alt="meu ídolo" />
                </section>
                <div className="text-my-history">
                    <p>Tudo começou em 2019 quando conheci o canal <a href="https://www.cursoemvideo.com/" target="_blank" rel="noreferrer">Curso em video</a>, onde aprendi minha primeira linguagem de programação, python, aprendi muita lógica de programação, foi quando comecei a entender como funcionava um laço de repetição e como funcionavam os algoritimos.</p>
                    <p>Em 2020 com a <a href="https://pt.wikipedia.org/wiki/Pandemia_de_COVID-19" target="_blank" rel="noreferrer">grande pandemia</a> que nos assolava, tive que estudar em casa, mas isso não me impediu de estudar cada vez mais, pelo contrário! Foi o ano que mais me desenvolvi em programação, esse foi o ano que aprendi JavaScript. Fiz um curso de desenvolvimento web da <a href="https://www.cod3r.com.br/" target="_blank" rel="noreferrer">Cod3r</a> na <a href="https://www.udemy.com/" target="_blank" rel="noreferrer">udemy</a> e apartir de então comecei a focar mais meus estudos em desenvolvimento web.</p>
                    <p>E não para por aí. Em 2020 também comecei a desenvolver jogos! Utilizando a engine <a href="https://www.yoyogames.com/en/gamemaker" target="_blank" rel="noreferrer">Game Maker Studio 2</a>, aprendi a desenvolver meus primeiros jogos, e foi com engine que participei da minha primeira Game JAM a <a href="https://itch.io/jam/proficionaljam/entries" target="_blank" rel="noreferrer">None JAM</a>.</p>
                    <p>Em 2021 comecei meus estudos na faculdade e estou me desenvolvendo muito mais do que antes, e meu objetivo até o final desse ano é conseguir meu primeiro estágio em desenvolvimento web!</p>
                </div>
            </section>
        </>
    );
}

export default MinhaHistoria;
