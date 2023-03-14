import React from "react"
//import { useLocation } from "react-router-dom";
import logo from "../../assets/images/yuo.png"
import Auth from "../../pages/Auth/Auth"
import Button from "../../ui/button/Button"
import Navigation from "./Navigation"

const PageHeader: React.FC = () => {
  return (
    <>
      <header className="bg-fixed top-0 z-30 w-full shadow-sm">
        <div className="flex items-center max-w-full mx-10">
          <a href="/">
            <img
              src={logo}
              height="96"
              width="90"
              className="d-inline-block align-top"
              alt="Logo"
            />
            <span className="logo"></span>
          </a>
          <div className="title font-bold">
            <h1>Южный округ</h1>
            <h3>войск национальной гвардии Российской Федерации</h3>
          </div>
        </div>
      </header>
      <main
        id="topBar"
        className="flex items-center justify-between mx-10 max-h-max"
      >
        <nav className="top-nav flex items-center h-10S mr-8">
          <a href="/">
            <Button>Главная</Button>
          </a>
          <a href="/">
            <Button>Тех.поддержка</Button>
          </a>
          <a href="/">
            <Button>СЭД</Button>
          </a>
          <a href="/">
            <Button>Почта</Button>
          </a>
          <a href="/">
            <Button>Справочные системы</Button>
          </a>

          <a href="/">
            <Button>Справочные материалы</Button>
          </a>
          <a href="/">
            <Button>Образцы документов</Button>
          </a>
          <a href="/">
            <Button>Центр ИТ ЮО</Button>
          </a>
          <a href="/">
            <Button>Военный совет ЮО</Button>
          </a>
        </nav>
        <nav className="flex items-end justify-end">
          <a href="/authorization">
            <Button>Вход</Button>
          </a>
        </nav>

        {/* <Menu menuButton={<MenuButton>Open menu</MenuButton>}>
        <MenuItem>New File</MenuItem>
        <SubMenu label="Open">
          <MenuItem>index.html</MenuItem>
          <MenuItem>example.js</MenuItem>
          <SubMenu label="Styles">
            <MenuItem>about.css</MenuItem>
            <MenuItem>home.css</MenuItem>
            <MenuItem>index.css</MenuItem>
          </SubMenu>
        </SubMenu>
        <MenuItem>Save</MenuItem>
        </Menu> */}
      </main>

      <hr className="border-1.5 border-red-900" />
    </>
  )
}

export default PageHeader
