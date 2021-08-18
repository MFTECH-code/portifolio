import React from 'react';
import "./conhecimentos.css";

const Conhecimentos = () => {
    return (
        <section className="conhecimentos">
            <h1>Meus conhecimentos</h1>
            <div className="img-conhecimentos">
                <img src="./img/conhecimentos.jpg" alt="Meus conhecimentos"/>
            </div>
            <p>Aqui vai uma lista das tecnologias que estou mais familiarizado.</p>
            <div className="listas-conhecimentos">
                <ul className="start-lista">
                    <li><img src="./img/html.png" alt="html icone" width="25px"/> HTML</li>
                    <li><img src="./img/css.png" alt="css icone" width="25px"/> CSS</li>
                    <li><img src="./img/javascript.png" alt="javaScript icone" width="25px"/> JavaScript</li>
                    <li><img src="./img/javascript.png" alt="javaScript icone" width="25px"/> NodeJS</li>
                    <li><img src="./img/atom.png" alt="react icone" width="25px"/> React</li>
                    <li><img src="./img/java.png" alt="java icone" width="25px"/> Java</li>
                </ul>
                <ul className="end-lista">
                    <li><img src="./img/python.png" alt="python icone" width="25px"/> Python</li>
                    <li><img src="./img/git.png" alt="git icone" width="25px"/> Git</li>
                    <li><img src="./img/nodered.png" alt="nodered icone" width="25px"/> Nodered</li>
                    <li><img src="./img/chatbot.png" alt="chatbot icone" width="25px"/> IBM cloud (Watson Assistant)</li>
                    <li><img src="./img/sql.png" alt="sql icone" width="25px"/> SQL</li>
                    <li><img src="./img/database.png" alt="database icone" width="25px"/> Oracle DB</li>
                    <li><img src="./img/datamodelling.png" alt="data modelling icone" width="25px"/> Modelagem de banco de dados</li>
                </ul>
            </div>
        </section>
    );
}

export default Conhecimentos;
