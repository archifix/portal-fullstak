import React from "react"
<<<<<<< HEAD
import { Route, RouterProvider, Routes } from "react-router-dom"
import { authRoutes, publicRoutes } from "./routes"

const AppRouter = () => {
  const isAuth = false
  return (
    <Routes>
      {isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} exact />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
    </Routes>
  )
}

export default AppRouter
=======
import { Route, Routes } from "react-router-dom"
import Acordion from "../../pages/Acordion"
import Admin from "../../pages/Admin/Admin"
import Auth from "../../pages/Auth/Auth"
import Home from "../../pages/Home"
import News from "../../pages/News/News"
import { ADMIN_ROUTE, HOME_ROUTE, LOGIN_ROUTE, NEWS_CREATE_ROUTE, NEWS_ROUTE, REGISTRATION_ROUTE } from "../utils/const"

export const AppRouter = () => {
  return (
   <Routes>
    <Route path={HOME_ROUTE} element={<Home />}/>
    <Route path={ADMIN_ROUTE} element={<Admin />}/>
    <Route path={LOGIN_ROUTE} element={<Auth />}/>
    <Route path={REGISTRATION_ROUTE} element={<Auth />}/>
    <Route path={NEWS_ROUTE} element={<News />}/>
    <Route path={NEWS_CREATE_ROUTE} element={<News />}/>
    <Route path="accordion" element={<Acordion/>}/>
   </Routes>
  )
}


>>>>>>> 0e5a80557de103005bea356e3a8e77cb9fbea83f
