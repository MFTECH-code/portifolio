import React from 'react';
import "./redes.css";

const Redes = () => {
    return (
        <section className="redes">
            <h1>Me siga nas redes sociais!</h1>
            <div className="img-redes">
                <img src="./img/redes.jpg" alt="minhas redes sociais" />
            </div>
            <ul>
                <li><a href="https://www.linkedin.com/in/matheus-feitosa-6684381b3/" target="_blank" rel="noreferrer"><img src="./img/linkedin.png" alt="linkedin icone" /><span>Linkedin</span></a></li>
                <li><a href="https://github.com/MFTECH-code" target="_blank" rel="noreferrer"><img src="./img/github.png" alt="github icone" /><span>GitHub</span></a></li>
                <li><a href="https://www.instagram.com/silvamatheusfeitosa/" target="_blank" rel="noreferrer"><img src="./img/instagram.png" alt="instagram icone" /><span>Instagram</span></a></li>
            </ul>
        </section>
    );
}

export default Redes;
