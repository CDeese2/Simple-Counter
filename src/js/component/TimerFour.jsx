import React, { useState, useEffect } from "react";


//include images into your bundle

const TimerFour = () => {
  const [seconds, setSeconds] = useState(0);

  const oneDigit = Math.floor((seconds / 1) % 10);
  const tenDigit = Math.floor((seconds / 10) % 10);
  const hundredDigit = Math.floor((seconds / 100) % 10);
  const thousandDigit = Math.floor((seconds / 1000) % 10);
  const tenthousandDigit = Math.floor((seconds / 10000) % 10);
  const hundredthousandDigit = Math.floor((seconds / 100000) % 10);

  useEffect(() => {
    setTimeout(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
  });

  return (
    <div className="d-flex flex-row clock-BG">
      <div className="clock-indices">
      <h1><i class="fas fa-clock fa-2x m-4 pt-3"></i></h1>
      </div>
      <div className="digits">{hundredthousandDigit}</div>
      <div className="digits">{tenthousandDigit}</div>
      <div className="digits">{thousandDigit}</div>
      <div className="digits">{hundredDigit}</div>
      <div className="digits">{tenDigit}</div>
      <div className="digits">{oneDigit}</div>
      {/* <ClockDigits value={hundredthousandDigit}/>
      <ClockDigits value={tenthousandDigit}/>
      <ClockDigits value={thousandDigit}/>
      <ClockDigits value={hundredDigit}/>
      <ClockDigits value={tenDigit}/>
      <ClockDigits value={oneDigit}/> */}
    </div>
  );
};

export default TimerFour;