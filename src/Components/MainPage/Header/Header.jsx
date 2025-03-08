import React from 'react';
import styles from './Header.module.css'; // Импортируйте модульные стили
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.menu}>
            <hr />
            <hr />
            <hr />
        </div>
        <div className={styles.headerButtons}>
            <div className={styles.mainDiv}>
                <p className={styles.mainP}>Главная</p>
            </div>
            <p>О нас</p>
            <hr className={styles.hrMenu} />
            <img src="/logo.svg" alt="" className="logo" />
            <hr className={styles.hrMenu} />
            <p>Каталог</p>
            <p>Контакты</p>
        </div>
        <div className={styles.headerRightSide}>
            <img src="/trash.svg" alt="" className="trash" />
            <Link to="/register" className="link"><img src="/profile.svg" alt="" /></Link>
        </div>
    </header>
  );
}