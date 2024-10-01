import React from 'react'
import s from './MainLayout.module.css'
import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";

const MainLayout = ({ children }) => {
    return (
        <div className={s.cont}>
            <NavBar />

            <div className={s.content}>
                {children}
            </div>
            <Footer />

        </div>
    )
}

export default MainLayout