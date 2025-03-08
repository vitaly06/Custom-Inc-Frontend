import React from 'react';
import styles from './FirstBlock.module.css'; // Импортируйте модульные стили
import shirts from '/t-shirts.svg';

export default function FirstBlock() {
    return (
        <div className={styles.firstBlock}>
            <div className={styles.yourStyleBlock}>
                <p className={styles.yourStyleP}>Ваш<br />стиль</p>
                <p className={styles.ourHolstP}>Наш холст</p>
                <div className={styles.socialsButtons}>
                    <div className={styles.toCatalog}>
                        <a>Перейти в каталог</a>
                    </div>
                    <div className={styles.socials}>
                    <a href="https://vk.com/custominkorb" target='_blank'><div className={`${styles.instagram} ${styles.linkButton}`}></div></a>
                        <a href="https://t.me/castominkorb" target='_blank'><div className={`${styles.telegram} ${styles.linkButton}`}></div></a>
                        <a href="https://vk.com/custominkorb" target='_blank'><div className={`${styles.vk} ${styles.linkButton}`}></div></a>
                    </div>
                </div>
            </div>
            <div className={styles.tShirts}>
                <img src={shirts} alt="" />
            </div>
        </div>
    );
}