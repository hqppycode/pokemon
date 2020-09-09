import { useState } from "react";
import arr from "../pages/api/pokemon-array";

const Input = ({ image, setImage }) => {
  const [current, setCurrent] = useState(1);
  const [text, setText] = useState("");

  const handleKeyPress = (e) => {
    if (image === e.target.value.toLowerCase()) {
      setImage(arr[current]);
      setCurrent(current + 1);
      setText("");
    }
  };

  return (
    <div>
      <input
        onKeyUp={handleKeyPress}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onFocus={console.log("here")}
        className="answer"
        type="text"
        placeholder="Good luck!"
      />

      {/* Styles */}
      <style jsx>{`
        .answer {
          font-size: 2rem;
          width: 216px;
          margin-top: 0.5rem;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Input;
