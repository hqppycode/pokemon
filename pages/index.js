import { useState } from "react";

// Components
import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Timer from "../components/Timer";
import Footer from "../components/Footer";
import arr from "../pages/api/pokemon-array";
import GameOver from "../components/GameOver";

const Home = () => {
  const [image, setImage] = useState(arr[137]);
  const [seconds, setSeconds] = useState(151); // change this so you don't have to wait. Original is 151s
  const [current, setCurrent] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [text, setText] = useState("");

  function reset() {
    setSeconds(151);
    setIsActive(false);
    setImage(arr[137]);
    setCurrent(0);
    setText("");
  }

  return (
    <div className="container">
      <Head>
        <title>Pokémon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="app">
        {seconds >= 0 ? (
          <>
            <Header />
            <Main image={image} />
            <Timer
              seconds={seconds}
              setSeconds={setSeconds}
              image={image}
              setImage={setImage}
              current={current}
              setCurrent={setCurrent}
              isActive={isActive}
              setIsActive={setIsActive}
              text={text}
              setText={setText}
              reset={reset}
            />
            <Footer />
          </>
        ) : (
          <GameOver current={current} reset={reset} />
        )}
      </div>

      {/* Styles */}
      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
        }
        .app {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>

      {/* Global Styles */}
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default Home;
