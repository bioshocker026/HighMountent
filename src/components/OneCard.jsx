import React from 'react';

export default function OneCard({ oneCard }) {
  return (
    <div className="card" style={{ width: '18rem', margin: '1rem' }}>
      <div className="card-body ">
        <h5 className="card-title">Имя кандидата</h5>
        <h6 className="card-subtitle mb-2 text-muted">{oneCard.workerName}</h6>
        <h5 className="card-title">Имя ментора</h5>
        <h6 className="card-subtitle mb-2 text-muted">{oneCard.mentor}</h6>
        <div className="progress" style={{ margin: '0 0 0.5rem 0' }}>
          <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" />
        </div>
        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
        <a href="#" className="card-link">
          Ссылка на сам лист адаптации
        </a>
      </div>
    </div>
  );
}
