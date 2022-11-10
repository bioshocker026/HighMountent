import React from 'react';

export default function Checkbox() {
  return (

    <>
      <div>
        Привет,
        { User }
        !
        И добро пожаловать в команду Высокогорья!
        Впереди нас ждет интересное путешествие в мир нашей компании, и самым главным проводником будет- Имя Фамилия
        Мы подготовили для тебя чек-лист на первый день. Процесс выполнения будет сохраняться, поэтому ты можешь закрывать пункты в удобном для тебя порядке.
      </div>
      <div className="">Нужно подготовить твое рабочее место:</div>
      <div className="form-check">
        <label className="form-check-label" htmlFor="flexCheckDefault">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          Наставник выдал мне пропуск
        </label>
      </div>
      <div className="form-check">
        <label className="form-check-label" htmlFor="flexCheckDefault">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          Наставник сообщил пароль от Wi-Fi
        </label>
      </div>
      <div className="form-check">
        <label className="form-check-label" htmlFor="flexCheckDefault">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          Системный администратор выдал мне ноутбук
        </label>
      </div>
      <div className="form-check">
        <label className="form-check-label" htmlFor="flexCheckDefault">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          Системный администратор выдал мне доступы к почте
        </label>
      </div>
      <div className="form-check">
        <label className="form-check-label" htmlFor="flexCheckDefault">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          Ты отправил(-а) офис-менеджеру на почту список необходимой для тебя канцелярии
        </label>
      </div>

      <div>
        Важно познакомиться с коллегами:
      </div>

      <div className="form-check">
        <label className="form-check-label" htmlFor="flexCheckDefault">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          Ты познакомился (-ась) со своим руководителем
        </label>
      </div>
      <div className="form-check">
        <label className="form-check-label" htmlFor="flexCheckDefault">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          Ты написал(-а) сообщение в командный чат
        </label>
      </div>
      <div className="form-check">
        <label className="form-check-label" htmlFor="flexCheckDefault">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
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
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          Ты отправил (-а)  сканы документы на оформление в отдел кадров
        </label>
      </div>

      <div className="form-check">
        <label className="form-check-label" htmlFor="flexCheckDefault">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          Ты подписал (-а) соглашение о коммерческой тайне
        </label>
      </div>

      <div>А теперь самое время работать:</div>

      <div className="form-check">
        <label className="form-check-label" htmlFor="flexCheckDefault">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          Получи свою первую задачу у руководителя
        </label>
      </div>

      <div className="form-check">
        <label className="form-check-label" htmlFor="flexCheckDefault">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          Создай подпись в почте по корпоративному шаблону
        </label>
      </div>

      <div>
        Классного путешествия!
        Команда Высокой горы 💚
      </div>

    </>
  );
}
