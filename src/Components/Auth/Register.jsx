import { useState } from "react";
import axios from 'axios';
import styles from './Register.module.css'; // Импортируйте модульные стили
import logo from '/logo.svg';
import { Link } from 'react-router-dom';

export default function Register() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        if (password !== repassword) {
            setError('Пароли не совпадают');
            return;
        }
        try {
            const response = await axios.post('http://localhost:3000/auth/register', {
                fullName,
                email,
                phoneNumber,
                dateOfBirth,
                password,
                repassword
            });
            setSuccess('Вы успешно зарегистрировались!');
        } catch (err) {
            if (err.response) {
                setError(err.response.data.message || 'Ошибка при регистрации');
            }
        }
    }

    return (
        <div className={styles.registerForm}>
            <div className={styles.container}>
                <div className={styles.leftSide}>
                    <img src={logo} alt="" className={styles.logoLeft} />
                    <h1 className={styles.haveAccount}>Уже есть аккаунт? <Link to="/login" className={styles.link}><span>Войти!</span></Link></h1>
                </div>
                <div className={styles.rightSide}>
                    <h1 className={styles.regH}>Регистрация</h1>
                    <form onSubmit ={handleSubmit}>
                        <div className={styles.inputLabel}>
                            <label>ФИО</label>
                            <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                        </div>
                        <div className={styles.inputLabel}>
                            <label>Почта</label>
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className={styles.inputLabel}>
                            <label>Номер телефона</label>
                            <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
                        </div>
                        <div className={styles.inputLabel}>
                            <label>Дата рождения</label>
                            <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} required />
                        </div>
                        <div className={styles.inputLabel}>
                            <label>Пароль</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <div className={styles.inputLabel}>
                            <label>Повторите пароль</label>
                            <input type="password" value={repassword} onChange={(e) => setRepassword(e.target.value)} required />
                        </div>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        {success && <p style={{ color: 'green' }}>{success}</p>}
                        <button type="submit" className={styles.regButton}>Зарегистрироваться</button>
                    </form>
                </div>
            </div>
        </div>
    );
}