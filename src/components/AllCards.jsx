import React, { useState } from 'react';
import OneCard from './OneCard';

export default function AllCards({ checkboxes }) {
  const [allEntries, setAllEntries] = useState(checkboxes);
  const onDelete = async (id) => {
    const response = await fetch('/deleteCard', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    const status = await response.json();
    if (status === 'OK') {
      setAllEntries(allEntries.filter((el) => el.id !== id));
    }
  };

  return (
    <div className="container">
      <div>Все карточки</div>
      <ul className="list-group d-flex justify-content-center flex-row flex-wrap">
        {allEntries?.length ? allEntries.map((el) => <OneCard onDelete={onDelete} oneCard={el} key={el.id} />) : 'Пока нет карточек в БД'}
      </ul>
    </div>
  );
}
