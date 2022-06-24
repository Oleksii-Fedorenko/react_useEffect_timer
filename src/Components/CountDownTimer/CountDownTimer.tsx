import React, { useEffect, useRef, useState } from 'react';
import './CountDownTimer.scss';

const CountDownTimer: React.FC = () => {
  const [timerDays, setTimerDays] = useState(0);
  const [timerHours, setTimerHours] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);

  const interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date('Jule 1 2022 00:00:00').getTime();

    setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  function checkLength(value: number) {
    if (value < 10) {
      return `0${value}`;
    }

    return value;
  }

  useEffect(() => {
    startTimer();

    return () => {
      clearInterval(interval.current);
    };
  }, [interval]);

  return (
    <section className="timer-container">
      <section className="timer">
        <div className="">
          <span className="mdi mdi-calendar-clock timer-icon"></span>
          <h2>Countdown Timer</h2>
          <p>Countdown to important and special date!</p>
        </div>
        <div>
          <section>
            <p>{checkLength(timerDays)}</p>
            <p><small>Days</small></p>
          </section>
          <span>:</span>
          <section>
            <p>{checkLength(timerHours)}</p>
            <p><small>Hours</small></p>
          </section>
          <span>:</span>
          <section>
            <p>{checkLength(timerMinutes)}</p>
            <p><small>Munutes</small></p>
          </section>
          <span>:</span>
          <section>
            <p>{checkLength(timerSeconds)}</p>
            <p><small>Seconds</small></p>
          </section>
        </div>
      </section>
    </section>
  );
};

export default CountDownTimer;
