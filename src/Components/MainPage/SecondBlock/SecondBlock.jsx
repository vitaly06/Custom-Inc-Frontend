import React from 'react';
import styles from './SecondBlock.module.css'; // Импортируйте модульные стили
import shirts2 from '/t-shirts2.svg';

export default function SecondBlock() {
    return (
        <div className={styles.secondBlock}>
            <div className={styles.aboutUs}>
                <p>Немного о нас</p>
            </div>
            <div className={styles.welcomeBlock}>
                <div className={styles.leftShirts}>
                    <img src={shirts2} alt="" />
                </div>
                <div className={styles.rightWelcome}>
                    <p className={styles.pWelcome}>Добро пожаловать в мир Castom Ink</p>
                    <p className={`${styles.textWelcome} ${styles.default}`}>
                        современного бренда, который трансформирует вашу индивидуальность в уникальные дизайны на одежде, сумках и кроссовках! Мы специализируемся на печати актуальных и стильных принтов, а также создании термонаклеек, которые добавят изюминку в ваш гардероб. Наша команда мастеров использует передовые технологии и качественные материалы, чтобы ваши идеи обрели жизнь. Мы можем напечатать ваши дизайнерские решения или фотографии на любой ткани, что позволяет вам создавать поистине уникальные и персонализированные вещи. Кроме того, у нас вы можете приобрести одежду для печати собственных принтов — выберите базу, добавьте свой дизайн и наслаждайтесь результатом!
                    </p>
                </div>
            </div>
            <div className={styles.welcomeBlock}>
                <div className={styles.rightWelcome}>
                    <p className={styles.textWelcome}>
                        Что отличает нас от других? Уникальность и универсальность! Мы гордимся тем, что можем напечатать принт абсолютно на любом изделии. Любой дизайн, который вы хотите, — это всего лишь вопрос вашего воображения. Кроме того, наш каталог актуальных и современных принтов пополняется регулярно, так что у вас всегда будет возможность приобрести что-то новое и стильное.
                    </p>
                </div>
                <div className={styles.leftShirts}>
                    <img src={shirts2} alt="" />
                </div>
            </div>
        </div>
    );
}