import React from 'react';
import './App.scss';
import CountDownTimer from './Components/CountDownTimer/CountDownTimer';

export const App: React.FC = () => {
  return (
    <div className="App">
      <CountDownTimer countDownTimeStampMs={(Date.now())} />
    </div>
  );
};
