import useSound from 'use-sound';

import music from "../public/assets/Pokerap.mp3"

const SoundButton = () => {
  const [play] = useSound(music);

  return <button onClick={play}>Boop!</button>;
};

export default SoundButton;