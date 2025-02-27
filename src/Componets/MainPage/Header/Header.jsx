import React from 'react'
import  "./Header.css"

export default function Header() {
  return (
    <header className='header'>
        <div className="menu">
            <hr/>
            <hr/>
            <hr/>
        </div>
        <div className="header-buttons">
            <div className="main-div">
            <p className='main-p'>Главная</p>
            </div>
            <p>О нас</p>
            <hr className='hr-menu'/>
            <img src="/logo.svg" alt="" className="logo" />
            <hr className='hr-menu'/>
            <p>Каталог</p>
            <p>Контакты</p>
        </div>
        <div className="header-right-side">
            <img src="/trash.svg" alt="" className="trash" />
            <img src="/profile.svg" alt="" />
        </div>
    </header>
  )
}
