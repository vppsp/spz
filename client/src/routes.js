import { Component } from "react"
import { MAIN_ROUTE } from "./utils/consts"
import main from "./pages/MainPage/main"


export const authRoutes = [

]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: main
    }
]