import React from "react";

const root = ReactDOM.createRoot(document.getElementById('root'));

function TimerTwoT() {
  const element = (
    <div>
      <h1>TimerTwo</h1>
      <h2>{new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element);
}

setInterval(TimerTwoT, 1000);

export default TimerTwoT; 