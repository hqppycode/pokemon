import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <Link href="/scores">
        <a className="button">High Scores</a>
      </Link>

      <style jsx>{`
        .button {
          background-color: #3a5da8;
          color: #fff;
          border: none;
          outline: none;
          font-size: 1.5rem;
          width: 216px;
          text-decoration: none;
          text-align: center;
          font-family: arial;
          margin-top: 0.3rem;
          padding: 0.3em 0;
        }
      `}</style>
    </>
  );
};

export default Footer;
