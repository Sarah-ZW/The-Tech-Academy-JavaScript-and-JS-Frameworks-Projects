import React, { useState } from 'react';
import Sound from 'react-sound';
import Music1 from '../assets/music1.mp3'



const PlaySound = (
    handleSongLoading,
    handleSongPlaying,
    handleSongFinishedPlaying,
) => {
        const [isPlaying, setIsPlaying] = useState(false);
    return(
        <div>
            <button onClick={() => setIsPlaying(!isPlaying)} > {!isPlaying ? 'Play Music' : 'Stop Music'}</button>
            <Sound
            url={Music1}
            playStatus= {
                isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED
            }
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