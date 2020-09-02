export default() => {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((response) => response.json())
    .then((allpokemon) => console.log(allpokemon));
}

Home.getInitialProps = async () => {
  const number = 1;
  const pokemon = await Axios.get(
    `https://pokeapi.co/api/v2/pokemon/${number}`
  ).then((response) => response.data);
  return { pokemon };
};

export default Home;