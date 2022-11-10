import React, { useState } from 'react';
import OneCard from './OneCard';

export default function AllCards({ checkboxes }) {
  const [allEntries, setAllEntries] = useState(checkboxes);
  return (
    <div className="container">
      <div>Все карточки</div>
      <ul className="list-group d-flex justify-content-center flex-row flex-wrap">
        {allEntries?.length ? allEntries.map((el) => <OneCard oneCard={el} key={el.id} />) : 'Пока нет карточек в БД'}
      </ul>
    </div>
  );
}
