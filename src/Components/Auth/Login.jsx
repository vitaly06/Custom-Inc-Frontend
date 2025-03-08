import { useState } from "react";
import axios from 'axios';
import styles from './Login.module.css'; 
import logo from '/logo.svg';
import { Link } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        try {
            const response = await axios.post('http://localhost:3000/auth/login', {
                email,
                password,
            });
            console.log(response);
            setSuccess('Вы успешно авторизовались!');
        } catch (err) {
            if (err.response) {
                setError(err.response.data.message || 'Ошибка при авторизации');
            }
        }
    }

    return (
        <div className={styles.registerForm}>
            <div className={styles.container}>
                <div className={styles.rightSide}>
                    <h1 className={styles.regH}>Войти</h1>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.inputLabel}>
                            <label>Почта</label>
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className={styles.inputLabel}>
                            <label>Пароль</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        {success && <p style={{ color: 'green' }}>{success}</p>}
                        <button type="submit" className={styles.regButton}>Войти</button>
                    </form>
                </div>
                <div className={styles.leftSide}>
                    <img src={logo} alt="" className={styles.logoLeft} />
                    <h1 className={styles.haveAccount}>Ещё нет аккаунта? <Link to={"/register"} className={styles.link}><span>Создай!</span></Link></h1>
                </div>
            </div>
        </div>
    );
}