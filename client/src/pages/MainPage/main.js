import React from 'react'
import MainLayout from '../../layouts/MainLayout/MainLayout'
import s from './MainPage.module.css'
import imgRes from '../../static/imgs/res.png'
import img3 from '../../static/imgs/3.png'
import img5 from '../../static/imgs/5.png'
import img7 from '../../static//imgs/7.png'
import { Parallax } from 'react-parallax';
import TextBoxAbout from './MPComponent/TextBoxAbout';


const main = () => {
    return (
        <MainLayout>
            <div className={s.content}>
                <Parallax
                    className={s.image} bgImage={imgRes} strength={500}>

                </Parallax>

                <TextBoxAbout />

                <Parallax
                    className={s.image} bgImage={img3} strength={500}>

                </Parallax>

                <TextBoxAbout />

                <Parallax
                    className={s.image} bgImage={img5} strength={500}>

                </Parallax>

                <TextBoxAbout />

                <Parallax
                    className={s.image} bgImage={img7} strength={200}>

                </Parallax>


            </div>
        </MainLayout>
    )
}

export default main