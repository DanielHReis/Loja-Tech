import React from 'react';
import styles from './Products.module.css';

export default function Products({ items = [] }) {
    return (
        <section className={styles.products}>
            <h2>Nossos Produtos</h2>
            <p>Confira nossa seleção de produtos:</p>

            <div className={styles.grid}>
                {items.map(p => (
                    <article key={p.id} className={styles.card}>
                        <h3>{p.name}</h3>
                        <p className={styles.category}>Categoria: {p.category}</p>
                        <p className={styles.description}>
                            {p.category === 'Eletrônicos' ? 'Produto com garantia de 1 ano' :
                                p.category === 'Roupas' ? 'Tecido de alta qualidade' :
                                    'Produto de excelente acabamento'}
                        </p>
                        <div className={styles.price}>R$ {p.price.toFixed(2)}</div>
                        <button className={styles.buyButton}>Adicionar ao Carrinho</button>
                    </article>
                ))}
            </div>

            <div className={styles.info}>
                <p><strong>Frete grátis</strong> para compras acima de R$ 200,00</p>
                <p>Pagamento via PIX tem <strong>5% de desconto</strong></p>
            </div>
        </section>
    );
}