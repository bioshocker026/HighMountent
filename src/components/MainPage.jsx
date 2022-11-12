import React from 'react';

export default function MainPage() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      textAlign: 'center',
      alignItems: 'center',
      height: '100vh',
    }}
    >
      <div>
        <p>
          <h1>Привет! Это корпоративный портал ООО “Высокая Гора”.</h1>
        </p>
        <h3>Чтобы получить доступ к сайту - обратись в департамент HR.</h3>
      </div>
      <div style={{
        width: '30em',
        minHeight: '80%',
        backgroundImage: 'url(/image/mountain.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
      }}
      />
    </div>
  );
}
