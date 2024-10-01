import React from 'react';
import s from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={s.footer} id={'contacts'}>
            <div className={'custom_cont'}>
                <div className={s.row}>
                    <div className={s.col}>
                        <h2>Наши контакты</h2>
                        <a href="tel:+74996785000">+7(499)678 5000</a>
                        <a href="mailto:info@spexpress.ru">Письмо на info@spexpress.ru</a>
                    </div>
                    <div className={s.col}>
                        <h2>Документы</h2>
                        <a href="tel:+74996785000">Руководство по услугам</a>
                        <a href="mailto:info@spexpress.ru">Пример договора</a>
                        <a href="mailto:info@spexpress.ru">Заключить договор</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;