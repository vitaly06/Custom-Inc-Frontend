import React from 'react';
import styles from './Contacts.module.css'; // Импортируйте модульные стили
import logo from '/logo.svg';
import phone from '/phone.svg';
import email from '/email.svg';
import address from '/address.svg';

export default function Contacts() {
    return (
        <div className={styles.contacts}>
            <div className={styles.weGives}>
                <img src={logo} alt="" />
                <p>Мы предлагаем товар высокого качества, ориентированного на комфорт и стиль. Наша разнообразная коллекция соответствует высоким стандартам дизайна и долговечности. Откройте для себя мир фантазий Castom Ink!</p>
            </div>
            <div className={styles.data}>
                <div className={styles.connect}>
                    <div className={styles.iconData}>
                        <img src={phone} alt="" />
                        <p className={styles.dataP}>+ 7 (987)-899-38-45</p>
                    </div>
                    <div className={styles.iconData}>
                        <img src={email} alt="" />
                        <p className={styles.dataP}>tgflk_tuv@mail.ru</p>
                    </div>
                </div>
                <div className={styles.address}>
                    <div className={styles.iconData}>
                        <img src={address} alt="" />
                        <div className={styles.addressData}>
                            <p className={styles.city}>Россия, город Оренбург</p>
                            <p className={styles.dataP}>улица 9 линия дом 16</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}