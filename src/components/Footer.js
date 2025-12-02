import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div>© {new Date().getFullYear()} Loja Tech - Projeto React SPA</div>
            <div className={styles.small}>Feito com React</div>
        </footer>
    );
}