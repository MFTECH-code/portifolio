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