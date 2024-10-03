import React from 'react'
import styles from '../MainPage.module.css';
import Container from 'react-bootstrap/Container';
import Logo from './logo.png'

const TextBoxAbout = () => {
    return (
        <Container>
            <div >
                <h4><strong>Добро пожаловать в </strong>
                    <img src={Logo} alt="SP Express" className={styles.companyLogo} />
                </h4>
                <p><strong>"Доставка в срок, доставка в удовольствие"</strong> &ndash; это не просто наш слоган, это наша философия. Опыт SP Express в сфере логистики не ограничивается организацией и управлением транспортными сетями, но также охватывает сферу управления цепями поставок. Мы поможем Вам спроектировать и создать Вашу цепь поставок, а также добиться максимально эффективного ее использования.</p>
                <p>Мы делаем всё, чтобы ваши грузы всегда были в нужном месте в нужное время, а вы могли быть уверены в надежности и качестве наших услуг.</p>
            </div>
        </Container>
    )
}

export default TextBoxAbout