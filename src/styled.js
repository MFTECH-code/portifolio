import styled from "styled-components";

export const CabecalhoStyled = styled.header`
    display: flex;
    justify-content: space-between;
    color: white;
    background-color: black;

    
    .header-title {
        margin: 20px 50px;
        color: white;
    }
    
    a {
        text-decoration: none;
    }

    .navBar ul {
        display: flex;
        list-style: none;
        margin: 30px 50px;
    }

    .navBar ul li {
        margin-left: 20px;
    }

    .navBar ul li a {
        color: white;
        text-decoration: none;
        font-weight: 600;
    }

    .navBar ul li a:hover {
        text-decoration: underline;
    }

    @media (max-width: 1100px) {
        flex-direction: column;

        align-items: center;
        padding-top: 40px;

        h1 {
            margin: 50px 50px;
            width: 100%;
        }

        .navBar ul {
            list-style: none;
            margin: 30px 0px;
            margin-left: 0;
            padding: 0;
        }        
    }
` 

export const ConhecimentosStyled = styled.section`

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0px;


    p {
        padding: 10px;
        margin-bottom: 10px;
    }

    .img-conhecimentos {
        display: flex;
        justify-content: center;
    }

    .img-conhecimentos img {
        width: 35%;
        border-radius: 14px;
    }

    .listas-conhecimentos {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .listas-conhecimentos ul {
        display: flex;
        list-style: none;
        margin: 0 50px;
    }

    .listas-conhecimentos ul li {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 15px;
        margin: 5px 10px;
    }

    .listas-conhecimentos ul li span  {
        margin: 0 5px;
        font-weight: bold;
    }

    .listas-conhecimentos ul li img {
        width: 30px;
    }

    @media (max-width: 1100px) {
        
        .img-conhecimentos img {
            width: 379.75px;
        }
        
        .listas-conhecimentos {
            flex-direction: row;
        }

        .listas-conhecimentos ul {
            flex-direction: column;
        }

    }

`

export const ExperienciasStyled = styled.section`

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0px;


    .img-experiencias {
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
    }

    .img-experiencias img {
        width: 55%;
        border-radius: 14px;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    ul li {
        display: flex;
        align-items: center;
        margin-bottom: 10px;    
    }

    ul li a {
        text-decoration: none;
        color: black;
    }

    ul li a:hover {
        text-decoration: underline;
    }

    ul li img {
        width: 25px;
        margin: 0 5px;
    }

    @media (max-width: 1100px) {
        .img-experiencias img {
            width: 379px;
        }
    }
`

export const FormacaoStyled = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0px;


    h2 {
        margin-top: 0;
        margin-bottom: 10px;
    }

    .img-formacao {
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
    }

    .img-formacao img {
        width: 40%;
        border-radius: 14px;
    }

    ul {
        list-style: none;
        margin: 5px 0;
        padding: 0 20px;
    }

    ul li {
        display: flex;
        align-items: center;
        margin-bottom: 5px;
    }

    ul li img {
        width: 25px;
        margin: 0 5px;
    }

    @media (max-width: 1100px) {
        .img-formacao img {
            width: 370px;
        }
    }
`

export const RedesStyled = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0px;


    .img-redes {
        display: flex;
        justify-content: center;
    }

    .img-redes img {
        width: 35%;
        border-radius: 14px;
    }

    ul {
        list-style: none;
        display: flex;
        padding: 15px;
    }


    ul li a {
        margin: 0 10px;
        display: flex;
        text-decoration: none;
        color: black;
    }

    ul li a:hover {
        text-decoration: underline;
    } 

    ul li a img {
        width: 25px;
        margin-right: 5px;
    }

    @media (max-width: 1100px) {
        .img-redes img {
            width: 371px;
        }
    }
`

export const MinhaHistoriaStyled = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 0px;

    h1 {
        margin: 10px;
    }

    .img-my-history {
        display: flex;
        justify-content: center;
        margin-top: 0;
        margin-bottom: 50px;
    }

    .img-my-history img {
        width: 50%;
        border-radius: 14px;
    }

    .text-my-history {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 80%;
    }

    .text-my-history p {
        margin: 5px;
    }

    .text-my-history a {
        text-decoration: none;
        font-weight: 600;
        color: black;
    }

    .text-my-history a:hover {
        text-decoration: underline;
    } 

    @media (max-width: 1100px) {
        .img-my-history img {
            width: 380px;
        }
    }
`
