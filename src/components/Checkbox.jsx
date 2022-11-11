import React, { useEffect, useState } from 'react';

export default function Checkbox({ info }) {
  console.log(info);
  // useEffect(() => {
  //   fetch()
  //   return () => {
  //   }
  // }, [data])

  const [data, setData] = useState({
    answer1: false,
    answer2: false,
    answer3: false,
    answer4: false,
    answer5: false,
    answer6: false,
    answer7: false,
    answer8: '',
    answer9: false,
    answer10: false,
    answer11: false,
    answer12: false,
  });
  // console.log(data, '1');
  const changeHandler = async (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    const ass = await fetch(`/update-checkbox/${info.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }); // console.log(data, '3');
  };

  return (

    <div className="container">
      <form>
        <div>
          Привет,
          {/* { User } */}
          !
          И добро пожаловать в команду Высокогорья!
          Впереди нас ждет интересное путешествие в мир нашей компании, и самым главным проводником будет-
          {' '}
          {/* { mentor } */}
          Мы подготовили для тебя чек-лист на первый день. Процесс выполнения будет сохраняться, поэтому ты можешь закрывать пункты в удобном для тебя порядке.
        </div>
        <div className="">Нужно подготовить твое рабочее место:</div>
        <div className="form-check">
          <label className="form-check-label" htmlFor="flexCheckDefault">
            <input onChange={changeHandler} name="answer1" className="form-check-input" type="checkbox" value={Boolean(data.answer1)} id="flexCheckDefault" />
            Наставник выдал мне пропуск
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label" htmlFor="flexCheckDefault">
            <input onChange={changeHandler} name="answer2" className="form-check-input" type="checkbox" checked={info.answer2} value="" id="flexCheckDefault" />
            Наставник сообщил пароль от Wi-Fi
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label" htmlFor="flexCheckDefault">
            <input onChange={changeHandler} name="answer3" className="form-check-input" type="checkbox" value={data.answer3} id="flexCheckDefault" />
            Системный администратор выдал мне ноутбук
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label" htmlFor="flexCheckDefault">
            <input onChange={changeHandler} name="answer3" className="form-check-input" type="checkbox" value="true" id="flexCheckDefault" />
            Системный администратор выдал мне доступы к почте
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label" htmlFor="flexCheckDefault">
            <input onChange={changeHandler} name="answer4" className="form-check-input" type="checkbox" value="true" id="flexCheckDefault" />
            Ты отправил(-а) офис-менеджеру на почту список необходимой для тебя канцелярии
          </label>
        </div>
        <div>
          Важно познакомиться с коллегами:
        </div>

        <div className="form-check">
          <label className="form-check-label" htmlFor="flexCheckDefault">
            <input onChange={changeHandler} name="answer5" className="form-check-input" type="checkbox" value="true" id="flexCheckDefault" />
            Ты познакомился (-ась) со своим руководителем
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label" htmlFor="flexCheckDefault">
            <input onChange={changeHandler} name="answer6" className="form-check-input" type="checkbox" value="true" id="flexCheckDefault" />
            Ты написал(-а) сообщение в командный чат
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label" htmlFor="flexCheckDefault">
            <input onChange={changeHandler} name="answer7" className="form-check-input" type="checkbox" value="true" id="flexCheckDefault" />
            Ты написал(-а) сообщение в командный чат
          </label>
        </div>

        <div className="form-check">
          <label className="form-check-label" htmlFor="flexCheckDefault">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          </label>
        </div>
        <div className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">
            Напиши имена трех твоих коллег по отделу:
            <input type="text" className="form-control" placeholder="Names" aria-label="Username" aria-describedby="addon-wrapping" />
          </span>
        </div>

        <div>Важно пройти оформление в отделе кадров:</div>

        <div className="form-check">
          <label className="form-check-label" htmlFor="flexCheckDefault">
            <input onChange={changeHandler} name="answer9" className="form-check-input" type="checkbox" value="true" id="flexCheckDefault" />
            Ты отправил (-а)  сканы документы на оформление в отдел кадров
          </label>
        </div>

        <div className="form-check">
          <label className="form-check-label" htmlFor="flexCheckDefault">
            <input onChange={changeHandler} name="answer10" className="form-check-input" type="checkbox" value="true" id="flexCheckDefault" />
            Ты подписал (-а) соглашение о коммерческой тайне
          </label>
        </div>

        <div>А теперь самое время работать:</div>

        <div className="form-check">
          <label className="form-check-label" htmlFor="flexCheckDefault">
            <input onChange={changeHandler} name="answer11" className="form-check-input" type="checkbox" value="true" id="flexCheckDefault" />
            Получи свою первую задачу у руководителя
          </label>
        </div>

        <div className="form-check">
          <label className="form-check-label" htmlFor="flexCheckDefault">
            <input onChange={changeHandler} name="answer12" className="form-check-input" type="checkbox" value="true" id="flexCheckDefault" />
            Создай подпись в почте по корпоративному шаблону
          </label>
        </div>

        <div>
          Классного путешествия!
          Команда Высокой горы 💚
        </div>
        <button type="submit">Отправить</button>
      </form>
    </div>

  );
}
