// useInterval in React is dumb
// https://upmostly.com/tutorials/build-a-react-timer-component-using-hooks

import { useState, useEffect } from "react";
import arr from "../pages/api/pokemon-array";

const Timer = ({ setImage }) => {
  const [seconds, setSeconds] = useState(151);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(151);
    setIsActive(false);
    setImage(arr[0]);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="app">
      <div className="time">{seconds}</div>
      <div className="row">
        <button
          className={`button button-primary button-primary-${
            isActive ? "active" : "inactive"
          }`}
          onClick={toggle}
        >
          {isActive ? "Pause" : "Start"}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>

      {/*  Styles */}
      <style jsx>{`
        .button {
          background-color: #3a5da8;
          color: #fff;
          border: none;
          outline: none;
          font-size: 1.5rem;
          padding: 0.3em 0.6em;
          width: 100px;
        }

        .row {
          display: flex;
          justify-content: space-around;
          width: 230px;
        }

        .app {
          display: flex;
          align-items: center;
          flex-direction: column;
        }

        .time {
          font-size: 7rem;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
};

export default Timer;
