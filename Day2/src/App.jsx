import { useState, useRef } from 'react';
import './App.css';
import MusicVideo from './Video/Music.mp4';
import MusicVideo2 from './Video/Music2.mp4';
import nuotrauka from './Image/nuotrauka.gif';
import nuotrauka1 from './Image/backgroundDarker.png';
import nuotrauka2 from './Image/stars.gif';

function App() {
  const [showVideo, setShowVideo] = useState(false);
  const [showVideo1, setShowVideo1] = useState(false);
  const [volume, setVolume] = useState(0.5);

  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  const handleButtonClick = () => setShowVideo(!showVideo);
  const handleButtonClick1 = () => setShowVideo1(!showVideo1);

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    if (videoRef1.current) videoRef1.current.volume = newVolume;
    if (videoRef2.current) videoRef2.current.volume = newVolume;
  };

  return (
    <>
      <button onClick={handleButtonClick}>Toi Et Moi</button>
      {showVideo && (
        <div>
          <input
            className="slider"
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
          />
          <div>
            <img className="nuotrauka" src={nuotrauka} alt="Nuotrauka" />
            <img className="nuotrauka1" src={nuotrauka1} alt="Nuotrauka1" />
            <img className="nuotrauka2" src={nuotrauka2} alt="Nuotrauka2" />
            <video ref={videoRef1} autoPlay>
              <source src={MusicVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      <button className="buttonas" onClick={handleButtonClick1}>Asal - Headache</button>
      {showVideo1 && (
        <div>
          <input
            className="slider"
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
          />
          <div>
            <img className="nuotrauka" src={nuotrauka} alt="Nuotrauka" />
            <img className="nuotrauka1" src={nuotrauka1} alt="Nuotrauka1" />
            <img className="nuotrauka2" src={nuotrauka2} alt="Nuotrauka2" />
            <video ref={videoRef2} autoPlay>
              <source src={MusicVideo2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
