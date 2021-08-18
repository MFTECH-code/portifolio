import React from 'react';

const Cabecalho = (props) => {

    const trocaEstadoMinhaHistoria = () => {
        props.setMinhaHistoria(!props.minhaHistoria)
        props.setConhecimentos(false)
        props.setExperiencias(false)
        props.setFormacao(false)
        props.setRedes(false)
    }

    const trocaEstadoConhecimentos = () => {
        props.setConhecimentos(!props.conhecimentos)
        props.setMinhaHistoria(false)
        props.setExperiencias(false)
        props.setFormacao(false)
        props.setRedes(false)
    }

    const trocaEstadoFormacao = () => {
        props.setFormacao(!props.formacao)
        props.setMinhaHistoria(false)
        props.setExperiencias(false)
        props.setConhecimentos(false)
        props.setRedes(false)
    }

    const trocaEstadoExperiencias = () => {
        props.setExperiencias(!props.experiencias)
        props.setMinhaHistoria(false)
        props.setFormacao(false)
        props.setConhecimentos(false)
        props.setRedes(false)
    }

    const trocaEstadoRedes = () => {
        props.setRedes(!props.redes)
        props.setMinhaHistoria(false)
        props.setFormacao(false)
        props.setConhecimentos(false)
        props.setExperiencias(false)
    }



    return (
        <header>
            <h1>Olá, meu nome é Matheus...</h1>
            <nav>
                <ul>
                    <li><a href="#minhaHistoria" onClick={() => trocaEstadoMinhaHistoria()}>Minha História</a></li>
                    <li><a href="#conhecimentos" onClick={() => trocaEstadoConhecimentos()}>Conhecimentos</a></li>
                    <li><a href="#formacao" onClick={() => trocaEstadoFormacao()}>Formação</a></li>
                    <li><a href="#experiencias" onClick={() => trocaEstadoExperiencias()}>Experiências</a></li>
                    <li><a href="#redesSociais" onClick={() => trocaEstadoRedes()}>Redes Sociais</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Cabecalho;
