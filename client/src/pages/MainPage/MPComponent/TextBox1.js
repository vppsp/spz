import React from 'react'
import Container from 'react-bootstrap/Container';

const TextBox1 = () => {

    return (
        <Container>
            <p><strong>Наши услуги:</strong></p>
            <ul>
                <li><strong>Курьерская доставка</strong> &ndash; Быстрая и точная доставка по городу и регионам.</li>
                <li><strong>Транспортно-экспедиционные услуги</strong> &ndash; Мы заботимся о перевозке вашего груза на всех этапах пути.</li>
                <li><strong>Складское хранение</strong> &ndash; Надежные складские площади с возможностью хранения любых типов грузов.</li>
                <li><strong>Упаковка грузов</strong> &ndash; Качественная упаковка для максимальной сохранности.</li>
                <li><strong>Фулфилмент</strong> &ndash; Полный цикл обслуживания заказов, от приема до доставки конечному потребителю.</li>
            </ul>

        </Container>
    )
}

export default TextBox1