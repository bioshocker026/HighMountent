import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

export default function Login({ setUser }) {
  const [error, setError] = useState(null);
  // const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    });
    const data = await response.json();
    if (response.ok) {
      setUser(data);
      window.location.href = '/';
      // navigate('/');
    } else {
      // console.log(data.message);
      setError(data.message);
    }
  };

  return (
    <div className="container" style={{ width: 400, margin: 'auto', color: 'white' }}>
      <h1 className="is-size-2">Авторизация</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={submitHandler}>
        <div className="field">
          <label className="label">
            Введите логин
          </label>
          <div className="control has-icons-left has-icons-right">
            <input name="username" className="input is-medium" type="text" placeholder="Логин" />
            <span className="icon is-left">
              <i className="rbc-icon github" />
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label">
            Введите пароль
          </label>
          <div className="control has-icons-left">
            <input name="password" className="input is-medium" type="password" placeholder="Пароль" />
            <span className="icon is-left">
              <i className="rbc-icon lock" />
            </span>
          </div>
        </div>
        <div className="buttons">
          <button style={{ marginTop: '1rem' }} type="submit" className="is-primary is-focused is-fullwidth button" tabIndex="0">Войти</button>
        </div>
      </form>
    </div>
  );
}
