import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./assets/styles/reset.scss"
import "./index.css"
import "./assets/styles/header.scss"
import "./assets/styles/footer.scss"
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
