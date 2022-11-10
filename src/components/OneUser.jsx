import React, { useState, useEffect } from 'react';

export default function OneUser({ oneUser, onDelete }) {
  const [userStatus, setUserStatus] = useState(oneUser.isAdmin);
  const [showInput, setShowInput] = useState(false);
  const [value, setValue] = useState(oneUser.username);
  const [text, setText] = useState(oneUser.username);
  //   console.log(oneUser);

  const changeStatus = () => {
    fetch('/change', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(oneUser),
    }).then((response) => response.json()).then((data) => {
      setUserStatus(data);
    });
  };

  //   useEffect(() => {
  //     fetch('/change', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(oneUser),
  //     }).then((response) => response.json())
  //       .then((data) => {
  //         setUserStatus(data);
  //       });
  //   }, []);

  function deleteHandler() {
    onDelete(oneUser.id);
  }

  function changeHandler(e) {
    setValue(e.target.value);
  }

  const saveHandler = async () => {
    const respose = await fetch('/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ oneUser, value }),
    });
    const status = await respose.json();
    console.log(status);
    if (status === 'OK') {
      setText(status);
      setShowInput(false);
      window.location.href = '/users';
    }
  };

  const cancelHandler = () => {
    setShowInput(false);
  };

  return (
    <div>
      {showInput ? (
        <li className="list-group-item">
          <button onClick={saveHandler} style={{ marginRight: '.5rem' }} type="button" className="btn btn-success btn-sm">Сохранить</button>
          <button onClick={cancelHandler} style={{ marginRight: '.5rem' }} type="button" className="btn btn-dark btn-sm">Закрыть</button>
          <input style={{ fontSize: '1.2rem' }} className="form-check-label" htmlFor="firstCheckbox" value={value} onChange={changeHandler} />
        </li>
      )
        : (
          <li className="list-group-item">
            <label style={{ fontSize: '2rem', color: `${userStatus ? 'green' : 'black'}` }} className="form-check-label" htmlFor="firstCheckbox">
              {oneUser.username}
            </label>
            <div className="d-flex justify-content-around">
              <button onClick={() => { setShowInput(true); }} style={{ marginRight: '.5rem' }} type="button" className="btn btn-warning btn-sm">Изменить имя сотрудника</button>
              <button onClick={changeStatus} style={{ margin: '0 .5rem' }} type="button" className="btn btn-primary btn-sm">Сделать админом</button>
              <button onClick={deleteHandler} style={{ marginRight: '.5rem' }} type="button" className="btn btn-danger btn-sm">Удалить</button>
            </div>
          </li>
        )}
    </div>
  );
}
