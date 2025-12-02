import React from 'react';
import styles from './Contact.module.css';

export default function Contact() {
    return (
        <section className={styles.contact}>
            <h2>Entre em Contato</h2>
            
            <div className={styles.contactInfo}>
                <p><strong>📧 Email:</strong> contato@lojatech.com</p>
                <p><strong>📞 Telefone:</strong> (11) 99999-9999</p>
                <p><strong>📍 Endereço:</strong> Rua Exemplo, 123 - São Paulo, SP</p>
            </div>
            
            <h3>Horário de Atendimento:</h3>
            <p>Segunda a Sexta: 9h às 18h</p>
            <p>Sábado: 9h às 13h</p>
            
            <h3>Envie sua mensagem:</h3>
            <form className={styles.form} onSubmit={e => e.preventDefault()}>
                <label>
                    Seu nome
                    <input type="text" name="name" placeholder="Digite seu nome" />
                </label>
                <label>
                    Seu email
                    <input type="email" name="email" placeholder="seu@email.com" />
                </label>
                <label>
                    Mensagem
                    <textarea name="message" rows={4} placeholder="Escreva sua mensagem..." />
                </label>
                <button type="submit">Enviar Mensagem</button>
            </form>
        </section>
    );
}