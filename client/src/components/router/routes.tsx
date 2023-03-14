import { Component } from "react"
import Admin from "../../pages/Admin/Admin"
import Auth from "../../pages/Auth/Auth"
import Home from "../../pages/Home/home"
import News from "../../pages/News/News"
import NewsPage from "../../pages/News/NewsPage"
import {
  ADMIN_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  NEWS_CREATE_ROUTE,
  NEWS_ROUTE,
  REGISTRATION_ROUTE,
} from "../utils/const"

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  {
    path: NEWS_CREATE_ROUTE,
    Component: NewsPage,
  },
]

export const publicRoutes = [
  {
    path: HOME_ROUTE,
    Component: Home,
  },
  {
    path: NEWS_ROUTE,
    Component: News,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: NEWS_ROUTE + "/:id",
    Component: NewsPage,
  },
]
