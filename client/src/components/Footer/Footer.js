import React from 'react';
import s from './Footer.module.css'
import RPU from '../../pages/MainPage/MPComponent/Руководство по услугам 2024 (Ред1-3).pdf'
import DOG from '../../pages/MainPage/MPComponent/Договор Образец.pdf'

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
                        <a href={RPU} target='_blank' rel='noreferrer'>Руководство по услугам</a>
                        <a href={DOG} target='_blank' rel='noreferrer'>Образец договора</a>
                        <a href="mailto:info@spexpress.ru">Заключить договор</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;