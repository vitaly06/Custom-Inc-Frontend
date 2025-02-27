import React from 'react'
import './FirstBlock.css'
import shirts from '/t-shirts.svg'

export default function FirstBLock(){
    return (
        <div className="first-block">
            <div className="your-style-block">
                <p className='your-style-p'>Ваш<br></br>стиль</p>
                <p className="our-holst-p">Наш холст</p>
                <div className="socials-buttons">
                    <div className="to-catalog">
                        <a>Перейти в каталог</a>
                    </div>
                    <div className="socials">
                        <div className="instagram link-button"><a href=""></a></div>
                        <div className="telegram link-button"><a href=""></a></div>
                        <div className="vk link-button"><a href=""></a></div>
                    </div>
                </div>
            </div>
            <div className="t-shirts">
                <img src={shirts} alt="" />
            </div>
           
        </div>
    )
}