import { useState, useEffect } from "react";
import Link from "next/link";

// Firebase
import db from "../firebase";

const HighScores = () => {
  const [winners, setWinners] = useState(null);

  useEffect(() => {
    db.collection("Poketype").onSnapshot((snap) => {
      const champs = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const newChamps = champs;
      setWinners(newChamps);
    });
  }, []);

  const sortedAndMapped = (winners) => {
    const sorted = winners.sort(function (a, b) {
      return b.score - a.score;
    });
    return sorted.map((win) => {
      if (win.player && win.score > 4) {
        return (
          <div className="flex-container" key={win.id}>
            <span className="span-left">{win.player.toUpperCase()}</span>
            <span className="span-right">{win.score}</span>

            <style jsx>{`
              .flex-container {
                margin-bottom: 1rem;
                font-family: arial;
                font-weight: 100;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-flow: column nowrap;
              }
              .span-right {
                font-size: 4rem;
                font-weight: 700;
                color: red;
                margin-bottom: 1rem;
              }

              .span-left {
                font-size: 1.5rem;
                font-weight: 700;
                color: #333;
              }
            `}</style>
          </div>
        );
      }
    });
  };

  return (
    <div className="wrapper">
      <img className="master" src="assets/masters.png" alt="High Scores" />
      <div className="order">{winners && sortedAndMapped(winners)}</div>
      <Link href="/">
        <a className="button">Play again?</a>
      </Link>
      {/* Styles */}
      <style jsx>{`
        .order {
          font-size: 2rem;
          font-weight: 500;
          list-style: none;
          width: 50%;
        }

        .master {
          max-width: 360px;
          display: block;
          margin-bottom: 1.6rem;
        }

        .wrapper {
          max-width: 540px;
          display: flex;
          flex-flow: column;
          align-items: center;
          margin: 0 auto;
          font-size: 36px;
          list-style: none;
        }

        .button {
          background-color: #3a5da8;
          color: #fff;
          border: none;
          outline: none;
          font-size: 1.5rem;
          padding: 0.3em 0em;
          width: 180px;
          text-decoration: none;
          text-align: center;
          font-family: arial;
        }
      `}</style>
    </div>
  );
};

export default HighScores;

// player & score

// var items = [
//   { name: 'Edward', value: 21 },
//   { name: 'Sharpe', value: 37 },
//   { name: 'And', value: 45 },
//   { name: 'The', value: -12 },
//   { name: 'Magnetic', value: 13 },
//   { name: 'Zeros', value: 37 }
// ];

// // sort by value
// items.sort(function (a, b) {
//   return a.value - b.value;
// });

// const sortedAndMapped = (winners) => {
//   const sorted = winners.sort(function (a, b) {
//     return a.score - b.score;
//   });
//   return sorted.map((win) => (
//     <li>
//       {win.player} {win.score}
//     </li>
//   ));
// };
