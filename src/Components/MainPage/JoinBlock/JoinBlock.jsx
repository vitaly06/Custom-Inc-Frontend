import React from 'react'
import styles from  "./JoinBlock.module.css"

export default function JoinBlock(){
    return (
        <div className={styles.joinBlock}>
            <div className={styles.joinText}>
                <p className={styles.comeUs}>Присоединяйтесь к нам</p>
                <p className={styles.comeP}>Станьте участником наших социальных сетей, чтобы первым узнавать о новых поступлениях и получать уникальные предложения!</p>
                <p className={styles.comeP}>С Castom Ink ваш стиль станет уникальным и неповторимым. Присоединяйтесь к нам и воплотите свои идеи в жизнь!</p>
                <div className={styles.comeButton}>Присоединиться!</div>
            </div>
        </div>
    )
}