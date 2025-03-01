import React from 'react'
import "./Contacts.css"
import logo from "/logo.svg"
import phone from "/phone.svg"
import email from "/email.svg"
import address from "/address.svg"

export default function Contacts(){
    return (
        <div className="contacts">
            <div className="we-gives">
                <img src={logo} alt="" />
                <p>Мы предлагаем товар высокого качества, ориентированного на комфорт и стиль. Наша разнообразная коллекция, соответствует высоким стандартам дизайна и долговечности. Откройте для себя мир фантазий Castom Ink!</p>
            </div>
            <div className="data">
                <div className="connect">
                    <div className="icon-data">
                        <img src={phone} alt="" />
                        <p className='data-p'>+ 7 (987)-899-38-45</p>
                    </div>
                    <div className="icon-data">
                        <img src={email} alt="" />
                        <p className='data-p'>tgflk_tuv@mail.ru</p>
                    </div>
                </div>
                <div className="address">
                <div className="icon-data">
                    <img src={address} alt="" />
                    <div className="address-data">
                        <p className="city">Россия, город Оренбург</p>
                        <p className='data-p'>улица 9 линия дом 16</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}