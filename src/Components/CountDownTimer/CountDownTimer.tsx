import React, { useEffect, useState } from 'react';
import { clearInterval } from 'timers';
import './CountDownTimer.scss';
import { getReamainingTimeUntilMsTimeStamp } from './Utils/CountDownTimerUtils';

const defaultRemainingTime = {
  seconds: '00',
  minutes: '00',
  hours: '00',
  days: '00',
};

type Props = {
  countDownTimeStampMs: number;
};

const CountDownTimer: React.FC<Props> = ({ countDownTimeStampMs }) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  function updateRemainingTime(countDown: number) {
    setRemainingTime(getReamainingTimeUntilMsTimeStamp(countDown));
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countDownTimeStampMs);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [countDownTimeStampMs]);

  const {
    days, hours, minutes, seconds,
  } = remainingTime;

  return (
    <div className="timer">
      <span>{days}</span>
      <span>days</span>
      <span>{hours}</span>
      <span>hours</span>
      <span>{minutes}</span>
      <span>minutes</span>
      <span>{seconds}</span>
      <span>seconds</span>
    </div>
  );
};

export default CountDownTimer;
