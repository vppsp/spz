import React, { useEffect, useState } from 'react';
import MainLayout from '../../layouts/MainLayout/MainLayout'
import Stl from './MainPage.module.css'
import imgRes from '../../static/imgs/res.png'
import img3 from '../../static/imgs/3.png'
import img5 from '../../static/imgs/5.png'
import img7 from '../../static//imgs/7.png'
import img9 from '../../static//imgs/9.png'
import { Parallax } from 'react-parallax';
import TextBoxAbout from './MPComponent/TextBoxAbout';
import TextBox1 from './MPComponent/TextBox1'
import TextBox2 from './MPComponent/TextBox2'
import TextBox3 from './MPComponent/Textbox3'
import TextBox4 from './MPComponent/TextBox4'


const parallaxSections = [
    { img: imgRes, component: <TextBoxAbout /> },
    { img: img3, component: <TextBox1 /> },
    { img: img5, component: <TextBox2 /> },
    { img: img7, component: <TextBox3 /> },
    { img: img9, component: <TextBox4 /> },
];

const Main = () => {

    const [isParallaxEnabled, setIsParallaxEnabled] = useState(true);

    // Определение ширины экрана и отключение параллакса на мобильных устройствах
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) { // Условие для отключения параллакса на мобильных (до 768px)
                setIsParallaxEnabled(false);
            } else {
                setIsParallaxEnabled(true);
            }
        };
        // Вызов функции при загрузке и при изменении размера окна
        handleResize();
        window.addEventListener('resize', handleResize);

        // Очистка обработчика при размонтировании компонента
        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);

    return (
        <MainLayout>
            <div className={Stl.content}>
                {parallaxSections.map(({ img, component }, index) => (
                    <React.Fragment key={index}>
                        {isParallaxEnabled ? (
                            <Parallax
                                className={Stl.image}
                                bgImage={img}
                                strength={500}
                                bgImageStyle={{ width: '100%', height: 'auto' }} // Масштабирование изображения
                            >
                                {/* Пустой div для содержания параллакса */}
                            </Parallax>
                        ) : (
                            <div
                                className={Stl.image}
                                style={{
                                    backgroundImage: `url(${img})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    height: '220px',
                                    width: '100%',
                                }}
                            />
                        )}
                        {component}
                    </React.Fragment>
                ))}
            </div>
        </MainLayout>
    )
}

export default Main