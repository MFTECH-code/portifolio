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