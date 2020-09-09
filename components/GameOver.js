import { useState } from "react";

//Firebase
import db from "../firebase";

const GameOver = ({ current, reset }) => {
  const [player, setPlayer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("Poketype").add({ player: player, score: current });
    reset();
    setPlayer("");
  };

  return (
    <div className="container">
      <img
        className="gameover-img"
        height="913"
        width="1026"
        src="/assets/images/pikachu.png"
      />
      <p className="text">
        You caught <span>{current}</span> pokemon!
      </p>
      {/* <button onClick={() => reset()} className="button">
        Play Again?
      </button> */}

      <form className="form" onSubmit={handleSubmit}>
        <label>
          <input
            className="input-box"
            placeholder="What's your name?"
            type="text"
            value={player}
            onChange={(e) => setPlayer(e.target.value)}
          />
        </label>
        <input className="submit-button" type="submit" value="High Score Me!" />
      </form>

      {/* Styles */}
      <style jsx>{`
        .gameover-img {
          width: 50%;
          height: auto;
          display: block;
        }
        .form {
          display: flex;
          flex-flow: column;
          align-items: center;
        }

        .input-box {
          font-size: 2rem;
          text-align: center;
          margin-top: 1rem;
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
          font-size: 3rem;
          font-weight: 500;
          margin: 0;
          text-align: center;
          color: #333;
        }

        span {
          color: #ff0000;
          font-weight: 700;
          font-size: 5rem;
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

        .submit-button {
          background-color: #3a5da8;
          color: #fff;
          border: none;
          outline: none;
          font-size: 1.5rem;
          padding: 0.3em 0.6em;
          width: 200px;
          margin-top: 1.5rem;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default GameOver;
