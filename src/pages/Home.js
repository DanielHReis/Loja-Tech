import React from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <section className={styles.home}>
            <h1>Loja Tech - Produtos Eletrônicos</h1>
            <p>Encontre os melhores produtos com os melhores preços!</p>

            <div className={styles.hero}>
                <h3>🌟 Produto em Destaque</h3>
                <p><strong>Smartphone Android</strong> - apenas R$ 999,90</p>
                <Link to="/products">Ver todos os produtos</Link>
            </div>

            <div>
                <h3>Por que comprar conosco?</h3>
                <ul>
                    <li>✅ Preços baixos</li>
                    <li>✅ Entrega rápida</li>
                    <li>✅ Garantia de 1 ano</li>
                </ul>
            </div>
        </section>
    );
}