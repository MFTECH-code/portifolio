import React from 'react';
import {ConhecimentosStyled} from "../../styled.js"

const Conhecimentos = () => {
    return (
        <ConhecimentosStyled>
            <h1>Meus conhecimentos</h1>
            <div className="img-conhecimentos">
                <img src="./img/conhecimentos.jpg" alt="Meus conhecimentos"/>
            </div>
            <p>Aqui vai uma lista das tecnologias que estou mais familiarizado.</p>
            <div className="listas-conhecimentos">
                <ul className="start-lista">
                    <li><img src="./img/html.png" alt="html icone"/><span>HTML</span></li>
                    <li><img src="./img/css.png" alt="css icone"/><span>CSS</span></li>
                    <li><img src="./img/javascript.png" alt="javaScript icone"/><span>JavaScript</span></li>
                    <li><img src="./img/javascript.png" alt="javaScript icone"/><span>NodeJS</span></li>
                    <li><img src="./img/atom.png" alt="react icone"/><span>React</span></li>
                    <li><img src="./img/java.png" alt="java icone"/><span>Java</span></li>
                </ul>
                <ul className="end-lista">
                    <li><img src="./img/python.png" alt="python icone"/><span>Python</span></li>
                    <li><img src="./img/git.png" alt="git icone"/><span>Git</span></li>
                    <li><img src="./img/nodered.png" alt="nodered icone"/><span>Nodered</span></li>
                    <li><img src="./img/chatbot.png" alt="chatbot icone"/><span>Chat Bot</span></li>
                    <li><img src="./img/sql.png" alt="sql icone"/><span>SQL</span></li>
                    <li><img src="./img/database.png" alt="database icone"/><span>Oracle DB</span></li>
                    <li><img src="./img/datamodelling.png" alt="data modelling icone"/><span>MDLSQL</span></li>
                </ul>
            </div>
        </ConhecimentosStyled>
    );
}

export default Conhecimentos;
