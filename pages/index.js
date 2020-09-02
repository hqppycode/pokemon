import { useState } from "react";

// Components
import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Timer from "../components/Timer";
import Input from "../components/Input";
import Footer from "../components/Footer";
import arr from "../pages/api/pokemon-array";

const Home = () => {
  const [image, setImage] = useState(arr[0]);

  return (
    <div className="container">
      <Head>
        <title>Pokémon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="app">
        <Header />
        <Main image={image} />
        <Timer setImage={setImage} />
        <Input image={image} setImage={setImage} />
        <Footer />
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
