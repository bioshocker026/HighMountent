import React from 'react';

export default function Navbar({ user, setUser }) {
  // console.log(user);
  const logOut = async (e) => {
    e.preventDefault();
    const response = await fetch('auth/logout');
    if (response.ok) {
      window.location.href = '/';
      // navigate('/');
      setUser(null);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="../../public/image/mountain.png" width="30" height="24" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Высокая гора</a>
            </li>
            {!user && (
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/auth/login">Авторизация</a>
            </li>
            )}
            {user && (
            <>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/checkbox">Все листки адаптации</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/users">Все пользователи</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/auth/reg">Добавить пользователя</a>
              </li>
              <li className="nav-item">
                <a onClick={logOut} className="nav-link active" aria-current="page" href="/">Выход</a>
              </li>
            </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
