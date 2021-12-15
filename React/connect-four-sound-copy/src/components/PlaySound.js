import Sound from 'react-sound';
import Music1 from '../assets/music1.mp3';


const PlaySound = (
    handleSongLoading,
    handleSongPlaying,
    handleSongFinishedPlaying
) => {
    return(
        <div>
            <Sound
            url={Music1}
            playStatus={Sound.status.PLAYING}
            playFromPosition={300}
            onLoading={handleSongLoading}
            onPlaying={handleSongPlaying}
            onFinishedPlaying={handleSongFinishedPlaying}
            loop= {true}
            />
        </div>
    );
};

export default PlaySound;