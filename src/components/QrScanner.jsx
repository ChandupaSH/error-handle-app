import React, { useRef, useEffect, useState } from 'react';
import jsQR from 'jsqr';
import { useMediaQuery } from '@mui/material'
// import { useDispatch, useSelector } from 'react-redux';
// import { qrresultSelector, qrresultadd } from '../slices/slice';


const QrScanner = () => {
//   const dispatch = useDispatch()
//   const resultSelector = useSelector(qrresultSelector)
  const isTablet = useMediaQuery('(min-width: 500px )')
  const widthIs = isTablet? '50%':'80%'
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const initCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
        videoRef.current.srcObject = stream;
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    initCamera();
  }, []);

  const handleScan = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    
    if (!video.videoWidth || !video.videoHeight) {
      // Wait for video dimensions to be available
      requestAnimationFrame(handleScan);
      return;
    }

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const code = jsQR(imageData.data, imageData.width, imageData.height, {
      inversionAttempts: 'dontInvert',
    });

    if (code) {
      setResult(code.data);
      // dispatch(qrresultadd(code.data))
      
    }

    requestAnimationFrame(handleScan);
  };

  useEffect(() => {
    handleScan();
  }, []);

  return (
    <div style={{}} >
      <h2 style={{textAlign: 'center' ,color: '#3B1237'}}>Scan The QR Code</h2>
      <video ref={videoRef} autoPlay playsInline muted 
      style={{
        border: '3px solid red', 
        width: widthIs,
        marginLeft: '10%',
        marginTop: '37%'}}
        />
      <canvas ref={canvasRef} style={{ display: 'none' }} />

      {
        result ? 
        <span style={{color :'#3B1237', margin: '10%'}}>{result}</span> : null
      }
    </div>
  );
};

export default QrScanner








