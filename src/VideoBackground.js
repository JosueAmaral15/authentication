import { useEffect, useState, useRef } from 'react';
import "./videoBackground.css";

export default function VideoBackground({ media }) {
  const [count, setCount] = useState(0);
  const videoRef = useRef(null);
  const videoTimeOutRef = useRef(null);

  useEffect(() => {
    videoRef.current.src = media[count].source;
    let playPromise = videoRef.current.play();
    if (playPromise !== undefined) {
        playPromise.then(() => {
          videoTimeOutRef.current = setTimeout(() => {
            setCount(prevCount => (prevCount + 1) % media.length);
          }, media[count].duration);
        })
        .catch(error => {
            clearTimeout(videoTimeOutRef.current);
        });
      }

    return () => {
      clearTimeout(videoTimeOutRef.current);
    };
  }, [count, media]);

  return (
    <div>
      <video ref={videoRef} autoPlay muted loop className="myVideo">
        <source src={media[count].source} type={`video/${media[count].type}`} />
      </video>
    </div>
  );
}