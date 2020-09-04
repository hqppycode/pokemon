import React from "react";

const GameOver = ({ current, reset }) => {
  return (
    <div className="container">
      <img className="gameover-img" src="/assets/images/happy-pikachu.png" />
      <p className="text">Wow! You got {current} pokemon!</p>
      <button onClick={() => reset()} className="button">Play Again?</button>
      {/* Styles */}
      <style jsx>{`
        .gameover-img {
          width: 50%;
          display: block;
        }
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          height: 100vh;
          margin-top: 2rem;
        }
        .text {
          font-size: 4rem;
          font-weight: 500;
          margin: 0;
        }
        .button {
          background-color: #3a5da8;
          color: #fff;
          border: none;
          outline: none;
          font-size: 1.5rem;
          padding: 0.3em 0.6em;
          width: 180px;
          margin-top: 1.5rem;
        }
      `}</style>
    </div>
  );
};

export default GameOver;
