import { useEffect, useState } from 'react';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import Header from '../MainPage/Header/Header';
import styles from "./Profile.module.css";
import logo from "/logo.svg";

export default function Profile() {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token'); // Получите токен из localStorage
        if (token) {
            const decodedToken = jwtDecode(token); 
            const userId = decodedToken.sub; 

            axios.get(`http://localhost:3000/user/${userId}`)
                .then(response => {
                    setUserData(response.data); // Установите данные пользователя
                })
                .catch(err => {
                    setError('Ошибка при получении данных пользователя');
                    console.error(err);
                });
        }
    }, []);

    return (
        <div className={styles.profilePage}>
            <Header />
            <div className={styles.profileContainer}>
                <h1 className={styles.hProfile}>Профиль</h1>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {userData ? (
                    <div className={styles.firstLine}>
                        {/* <img src={logo} alt="" className={styles.logo}/> */}
                        <div className={styles.fullNameAddress}>
                            <h1 className={styles.hInfo}>ФИО: {userData.fullName}</h1>
                            <h1 className={styles.hInfo}>Адрес: {userData.address || "не указан"}</h1>
                        </div>
                    </div>
                ) : (
                    <p>Загрузка данных...</p>
                )}
                <h1 className={styles.underInfo}>Почта: {userData ? userData.email : 'Загрузка...'}</h1>
                <h1 className={styles.underInfo}>Номер телефона: {userData ? userData.phoneNumber : 'Загрузка...'}</h1>
                <h1 className={styles.changePassword}>Сменить пароль</h1>
            </div>
        </div>
    );
}