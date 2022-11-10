import React, { useState } from 'react';

export default function AddCheckbox({ user }) {
  const [data, setData] = useState({
    mentor: '',
    workerName: '',
    userId: user?.id,
  });
  const changeHandler = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  // console.log(data, 'data');
  const submitHandler = async () => {
    const response = await fetch('/checkbox', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const res = await response.json();
      window.location.href = `/checkbox/${res.id}`;
    }
  };
  return (
    <div className="container" style={{ width: 500, margin: 'auto', color: 'white' }}>
      <form onSubmit={submitHandler}>
        <div>
          <label className="form-check-label" htmlFor="flexCheckDefault">
            <input
              style={{
                width: 500, margin: 15, color: 'black',
              }}
              onChange={changeHandler}
              className="form-control"
              name="workerName"
              type="text"
              id="flexCheckDefault"
              placeholder="Фамилия и имя сотрудника"
            />
          </label>
        </div>
        <div>
          <label className="form-check-label" htmlFor="flexCheckDefault">
            <input
              style={{ width: 500, margin: 15, color: 'black' }}
              onChange={changeHandler}
              className="form-control"
              type="text"
              name="mentor"
              id="flexCheckDefault"
              placeholder="Фамилия и имя наставника"
            />
          </label>
        </div>
        <div>
          <button style={{ textAlign: 'center', width: 250, margin: 15 }} className="button" type="submit"> отправить</button>
        </div>
      </form>
    </div>
  );
}
