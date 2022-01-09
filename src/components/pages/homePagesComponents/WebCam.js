import React from 'react';
import Webcam from "react-webcam";
import Button from '@material-ui/core/Button';

const WebcamCapture = () => {
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);

    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
    }, [webcamRef, setImgSrc]);

    return (
        <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center'}}>
            <Webcam
                audio={false}
                ref={webcamRef}
                width={100}
                height={100}
                screenshotFormat="image/jpeg"
                style={{borderRadius: '50px'}}
            />
            <Button fullWidth variant="contained" color="secondary" onClick={capture} style={{margin: '50px'}}>
                Capture Photo
            </Button>
            {imgSrc && (
                <img
                    src={imgSrc}
                    width="100px"
                />
            )}
        </div>
    );
};

export default WebcamCapture;