import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

export default function NavBar() {
    return (
        <header className={styles.header}>
            <div className={styles.brand}>Loja Tech</div>

            <nav className={styles.nav}>
                <NavLink to="/" end className={({ isActive }) => isActive ? styles.active : ''}>Home</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ''}>Sobre</NavLink>
                <NavLink to="/products" className={({ isActive }) => isActive ? styles.active : ''}>Produtos</NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? styles.active : ''}>Contato</NavLink>
            </nav>

        </header>
    );
}