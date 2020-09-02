const Main = ({ image }) => {
  return (
    <div className="box">
      <img className="image" src={`/assets/images/${image}.png`} />

      {/* Styles */}
      <style jsx>{`
        .box {
          display: flex;
          justify-content: center;
          width: 100%;
        }
        .image {
          display: block;
          height: 250px;
        }
      `}</style>
    </div>
  );
};

export default Main;
