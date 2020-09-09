// useInterval in React is dumb
// https://upmostly.com/tutorials/build-a-react-timer-component-using-hooks

import { useEffect } from "react";
import arr from "../pages/api/pokemon-array";

const Timer = ({
  image,
  setImage,
  seconds,
  setSeconds,
  current,
  setCurrent,
  isActive,
  setIsActive,
  text,
  setText,
  reset,
}) => {
  const handleKeyPress = (e) => {
    if (image === e.target.value.toLowerCase()) {
      setImage(arr[current + 1]);
      setCurrent(current + 1);
      setText("");
    }
  };

  function toggle() {
    setIsActive(!isActive);
    !isActive ? setImage(arr[current]) : setImage(arr[151]);
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

  const handleFocus = () => {
    setIsActive(true);
    image === "ash" ? setImage(arr[current]) : console.log("other");
  };

  // useEffect(() => {
  //   console.log(current, image);
  // }, [current, image]);

  return (
    <div className="app">
      <div className="time">{seconds}</div>
      <div className="row">
        <button className="button" onClick={toggle}>
          {isActive ? "Pause" : "Start"}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>

      <input
        onKeyUp={handleKeyPress}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="answer"
        type="text"
        placeholder="Catch 'em!"
        onFocus={() => handleFocus()}
      />

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

        .answer {
          font-size: 2rem;
          width: 216px;
          margin-top: 0.5rem;
          text-align: center;
          display: block;
        }
      `}</style>
    </div>
  );
};

export default Timer;
