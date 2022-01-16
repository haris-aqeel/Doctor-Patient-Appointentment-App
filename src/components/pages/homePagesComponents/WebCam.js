import React from 'react';
import Webcam from 'react-webcam';
import Button from '@material-ui/core/Button';

const WebcamCapture = () => {
	const webcamRef = React.useRef(null);
	const [imgSrc, setImgSrc] = React.useState(null);

	const capture = React.useCallback(() => {
		const imageSrc = webcamRef.current.getScreenshot();
		localStorage.setItem('link', imageSrc);
		setImgSrc(imageSrc);
	}, [webcamRef, setImgSrc]);

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			{!imgSrc && (
				<div>
					<Webcam
						audio={false}
						ref={webcamRef}
						width={400}
						height={200}
						screenshotFormat="image/jpeg"
						style={{ borderRadius: '50px' ,paddingTop:"10px",paddingBottom:"10px"}}
					/>
					<Button fullWidth variant="contained" color="secondary" onClick={capture}>
						Capture Photo
					</Button>
				</div>
			)}
			{imgSrc && <img src={imgSrc} width="100px" />}
		</div>
	);
};

export default WebcamCapture;
