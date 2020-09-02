const Header = ({ timer }) => {
  return (
    <div>
      <h1>
        <img src="assets/pokemon-name.png" alt="my image" />
        {timer}
      </h1>
    </div>
  );
};

export default Header;
