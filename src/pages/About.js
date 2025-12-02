import React from 'react';
import styles from './About.module.css';

export default function About() {
    return (
        <section className={styles.about}>
            <h2>Sobre a Nossa Loja</h2>
            <p>Somos uma loja especializada em produtos eletrônicos e acessórios tecnológicos.</p>

            <h3>Nossa Missão</h3>
            <p>Oferecer produtos de qualidade com os melhores preços do mercado.</p>

            <h3>Nossa História</h3>
            <p>Começamos em 2020 vendendo pela internet e hoje entregamos para todo o Brasil.</p>

            <h3>Valores</h3>
            <ul>
                <li>Qualidade nos produtos</li>
                <li>Atendimento ao cliente</li>
                <li>Preço justo</li>
                <li>Entrega rápida</li>
            </ul>
        </section>
    );
}