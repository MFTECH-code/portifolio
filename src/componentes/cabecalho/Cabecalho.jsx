import React from 'react';
import MinhaHistoria from "../minha_historia/MinhaHistoria";
import Conhecimentos from "../conhecimentos/Conhecimentos";
import Formacao from "../formacao/Formacao";
import Experiencias from "../experiencias/Experiencias";
import Redes from "../redes/Redes";
import {Link, Switch, Route} from "react-router-dom";
import "./cabecalho.css";

const Cabecalho = () => {

    return (
        <>
            <header className="cabecalho">
                <Link to="/">
                    <h1>Olá, meu nome é Matheus...</h1>
                </Link>
                <nav className="navBar">
                    <ul>
                        <li><Link to="/conhecimentos">Conhecimentos</Link></li>
                        <li><Link to="/formacao">Formacão</Link></li>
                        <li><Link to="/experiencias">Experiências</Link></li>
                        <li><Link to="/redes">Redes</Link></li>
                        <li></li>
                    </ul>
                </nav>
            </header>
            <section>
                <Switch>
                    <Route path="/conhecimentos">
                        <Conhecimentos />
                    </Route>
                    <Route path="/formacao">
                        <Formacao />
                    </Route>
                    <Route path="/experiencias">
                        <Experiencias />
                    </Route>
                    <Route path="/redes">
                        <Redes />
                    </Route>
                    <Route path="/">
                        <MinhaHistoria />
                    </Route>
                </Switch>
            </section>
        </>
    );
}

export default Cabecalho;
