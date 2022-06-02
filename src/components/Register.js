import React from "react";
import {withRouter, Link } from "react-router-dom";

function Register(props) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    function handleChangeEmail(evt) {
        setEmail(evt.target.value);
    }

    function handleChangePassword(evt) {
        setPassword(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        if (!email || !password) {
            return;
        }
        props.onSubmit(email, password);
    }

    return (
        <div className="auth">
            <p className="auth__entry">Регистрация</p>
            <form onSubmit={handleSubmit} className="auth__form">
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="popup__text popup__text_type_auth popup__text_type_email"
                    required
                    id="email-input"
                    value={email}
                    onChange={handleChangeEmail}
                />
                <span className="popup__text-error email-input-error"></span>
                <input
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    className="popup__text popup__text_type_auth popup__text_type_password"
                    required
                    id="password-input"
                    value={password}
                    onChange={handleChangePassword}
                    minLength="6"
                    maxLength="15"
                />
                <span className="popup__text-error password-input-error"></span>
                <button type="submit" className="auth__btn">
                    Зарегистрироваться
                </button>
                <p className="auth__text">
                    Уже зарегистрированы?
                    <Link className="auth__text" to="/sign-in">
                        {" "}
                        Войти
                    </Link>
                </p>
            </form>
        </div>
    );

}

export default withRouter(Register);
