import useSound from "use-sound";
import quicksound from "../assets/StoneDrop.mp3"


    const SoundEffect = () => {
        const [play] = useSound(quicksound);

        return(
            <playSoundEffect
            onClick={play}
            />
        )
    }

    export default SoundEffect;

