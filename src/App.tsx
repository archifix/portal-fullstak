import { BrowserRouter, Route, Routes } from "react-router-dom"
import Admin from "./pages/Admin/Admin"
import Auth from "./pages/Auth/Auth"
import Home from "./pages/Home/home"
import News from "./pages/News/News"

import "./assets/styles/App.scss"

const App: React.FC = () => {
  return (
    // <BrowserRouter>
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<News />} path="/news" />
      <Route element={<Auth />} path="/authorization" />
      <Route element={<Admin />} path="/admin" />
      {/* <Route element={<Home />} path="/" /> */}
    </Routes>
    // </BrowserRouter>
  )
}

export default App
