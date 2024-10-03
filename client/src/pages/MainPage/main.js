import React from 'react'
import MainLayout from '../../layouts/MainLayout/MainLayout'
import s from './MainPage.module.css'
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

                <TextBox1 />

                <Parallax
                    className={s.image} bgImage={img5} strength={500}>

                </Parallax>

                <TextBox2 />

                <Parallax
                    className={s.image} bgImage={img7} strength={500}>

                </Parallax>

                <TextBox3 />

                <Parallax
                    className={s.image} bgImage={img9} strength={500}>

                </Parallax>

                <TextBox4 />

            </div>
        </MainLayout>
    )
}

export default main