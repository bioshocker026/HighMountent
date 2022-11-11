import React, { useEffect, useState } from 'react';

export default function Checkbox({ info }) {
  // console.log('INFO СЕРВЕРА----->', info);
  // useEffect(() => {
  //   fetch()
  //   return () => {
  //   }
  // }, [data])

  const [data, setData] = useState(
    info,
    // {
    // answer1: false,
    // answer2: false,
    // answer3: false,
    // answer4: false,
    // answer5: false,
    // answer6: false,
    // answer7: false,
    // answer8: false,
    // answer10: false,
    // answer11: false,
    // answer12: false,
    // answer13: false,
  // }
  );

  // console.log(data, '1');
  const submitHandler = async (e) => {
    e.preventDefault();
    await fetch(`/update-checkbox/${info.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target.value))),
    });
  };

  const changeHandler = async (e) => {
    setData((prev) => ({
      ...prev,
      // [e.target.name]: (!!e.target.checked),
      [e.target.name]: !data[e.target.name],
    }));
  };

  useEffect(() => {
    console.log('----->>', data);
    fetch(`/update-checkbox/${info.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    // fetch(`/checkbox/${info.id}`, {
    //   method: 'GET',
    // });
  }, [data]);

  // const [i, setI] = useState(info || null);
  // useEffect(() => {
  //   fetch(`/api/posts/${id}`)
  //     .then((response) => response.json())
  //     .then((data) => setI(data));
  // }, [data]);

  return (

    <div className="container">
      <form>
        <div>
          <p>
            Привет,
            {' '}
            <strong>
              { info.workerName }
            </strong>
            !

          </p>
          <p>
            И добро пожаловать в команду Высокогорья!
            Впереди нас ждет интересное путешествие в мир нашей компании, и самым главным проводником будет -
            {' '}
            <strong>
              { info.mentor }
            </strong>
            {'. '}

          </p>
          <p>
            Мы подготовили для тебя чек-лист на первый день. Процесс выполнения будет сохраняться, поэтому ты можешь закрывать пункты в удобном для тебя порядке.

          </p>
        </div>
        {/* {' '} */}
        <div className="">Нужно подготовить твое рабочее место:</div>
        <div className="form-check">

          <label className="form-check-label" htmlFor="flexCheckDefault">
            <input onChange={changeHandler} name="answer1" className="form-check-input" type="checkbox" checked={data.answer1} id="flexCheckDefault" />
            Наставник выдал мне пропуск
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label" htmlFor="flexCheckDefault">
            <input onChange={changeHandler} name="answer2" className="form-check-input" type="checkbox" checked={data.answer2} id="flexCheckDefault" />
            Наставник сообщил пароль от Wi-Fi
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label" htmlFor="flexCheckDefault">
            <input onChange={changeHandler} name="answer3" className="form-check-input" type="checkbox" checked={data.answer3} id="flexCheckDefault" />
            Системный администратор выдал мне ноутбук
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label" htmlFor="flexCheckDefault">
            <input onChange={changeHandler} name="answer4" className="form-check-input" type="checkbox" checked={data.answer4} id="flexCheckDefault" />
            Системный администратор выдал мне доступы к почте
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label" htmlFor="flexCheckDefault">
            <input onChange={changeHandler} name="answer5" className="form-check-input" type="checkbox" checked={data.answer5} id="flexCheckDefault" />
            Ты отправил(-а) офис-менеджеру на почту список необходимой для тебя канцелярии
          </label>
        </div>
        <div>
          Важно познакомиться с коллегами:
        </div>

        <div className="form-check">
          <label className="form-check-label" htmlFor="flexCheckDefault">
            <input onChange={changeHandler} name="answer6" className="form-check-input" type="checkbox" checked={data.answer6} id="flexCheckDefault" />
            Ты познакомился (-ась) со своим руководителем
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label" htmlFor="flexCheckDefault">
            <input onChange={changeHandler} name="answer7" className="form-check-input" type="checkbox" checked={data.answer7} id="flexCheckDefault" />
            Ты написал(-а) сообщение в командный чат
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label" htmlFor="flexCheckDefault">
            <input onChange={changeHandler} name="answer8" className="form-check-input" type="checkbox" checked={data.answer8} id="flexCheckDefault" />
            Ты проверил своё рабочее место
          </label>
        </div>
        <div className="input-group flex-nowrap">
          <form onSubmit={submitHandler}>
            <span className="input-group-text" id="addon-wrapping">
              Напиши имена трех твоих коллег по отделу:
              <input style={{ margin: '0 1rem' }} type="text" className="form-control" placeholder="Имена" name="answer9" aria-label="Username" aria-describedby="addon-wrapping" />
              <button type="submit" className="btn btn-outline-success">Отправить</button>
            </span>
          </form>
        </div>

        <div>Важно пройти оформление в отделе кадров:</div>

        <div className="form-check">
          <label className="form-check-label" htmlFor="flexCheckDefault">
            <input onChange={changeHandler} name="answer10" className="form-check-input" type="checkbox" checked={data.answer10} id="flexCheckDefault" />
            Ты отправил (-а)  сканы документы на оформление в отдел кадров
          </label>
        </div>

        <div className="form-check">
          <label className="form-check-label" htmlFor="flexCheckDefault">
            <input onChange={changeHandler} name="answer11" className="form-check-input" type="checkbox" checked={data.answer11} id="flexCheckDefault" />
            Ты подписал (-а) соглашение о коммерческой тайне
          </label>
        </div>

        <div>А теперь самое время работать:</div>

        <div className="form-check">
          <label className="form-check-label" htmlFor="flexCheckDefault">
            <input onChange={changeHandler} name="answer12" className="form-check-input" type="checkbox" checked={data.answer12} id="flexCheckDefault" />
            Получи свою первую задачу у руководителя
          </label>
        </div>

        <div className="form-check">
          <label className="form-check-label" htmlFor="flexCheckDefault">
            <input onChange={changeHandler} name="answer13" className="form-check-input" type="checkbox" checked={data.answer13} id="flexCheckDefault" />
            Создай подпись в почте по корпоративному шаблону
          </label>
        </div>

        <div>
          Классного путешествия!
          Команда Высокой горы 💚
        </div>

      </form>
    </div>

  );
}
