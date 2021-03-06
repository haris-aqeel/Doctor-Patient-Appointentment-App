import React, { useContext, useEffect, useState } from 'react';
import './AppoitmentForm.css';
import { UserContext } from '../../useAuth';
import axios from 'axios';
import Loading from '../../uttiles/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WebcamCapture from './WebCam';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import { Button } from '@material-ui/core';

const AppointmentForm = (props) => {
	const notify = () => toast('Your Appoitnment Add Successfully!');
	const { selectTedDate, cleaning } = useContext(UserContext);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const onCangeHandler = (e) => {
		const { name, value } = e.target;
		if (name === 'name') {
			setName(value);
		}
		if (name === 'email') {
			setEmail(value);
		}
		if (name === 'phone') {
			setPhone(value);
		}
	};

	const handleRouteVideo = () => {
		props.history.push('/Videocall');
	};

	const submitHandler = async (e) => {
		e.preventDefault();
		if (selectTedDate && cleaning && name && email && phone) {
			setIsLoading(true);
			const formData = {
				clinicName: cleaning.name,
				name,
				email,
				phone,
				time: cleaning.time,
				date: selectTedDate,
			};

			try {
				await axios.post(`https://edoctor-portal.herokuapp.com/api/v1/appointments`, formData);
				notify();
				setIsLoading(false);
				localStorage.setItem('patient_data', JSON.stringify(formData));
				props.history.push('/create-appointment');
			} catch (error) {
				setIsLoading(false);
				alert(error.message);
			}
		} else {
			alert('Invalid Form data');
		}
	};

	if (isLoading) {
		return <Loading />;
	}
	const clear = () => {
		setName('');
		setEmail('');
		setPhone('');
	};

	return (
		<section id="appointment-form-page">
			<div className="container">
				<div className="row">
					<div className="col-5">
						<div className="appointment-form-page-container">
							<div className="appointment-form shadow">
								<Button
									variant="contained"
									color="primary"
									fullWidth
									onClick={handleRouteVideo}
									startIcon={<VideoCallIcon />}
								>
									Start Video Call
								</Button>
								<WebcamCapture />
								<h2 className="text-center pb-4">{cleaning.name}</h2>
								<form autoComplete="off" className="mt-4" onSubmit={submitHandler} id="create-course-form">
									<div className="form-group">
										<input
											type="text"
											className="form-control"
											required
											readOnly
											defaultValue={cleaning.time}
											placeholder="Time"
										/>
									</div>
									<div className="form-group">
										<input
											type="text"
											className="form-control"
											required
											name="name"
											value={name}
											onChange={onCangeHandler}
											placeholder="Your Name"
										/>
									</div>
									<div className="form-group">
										<input
											type="text"
											className="form-control"
											required
											name="phone"
											value={phone}
											onChange={onCangeHandler}
											placeholder="Phone Number"
										/>
									</div>
									<div className="form-group">
										<input
											type="email"
											className="form-control"
											required
											name="email"
											value={email}
											onChange={onCangeHandler}
											placeholder="Email"
										/>
									</div>
									<div className="form-group">
										<input
											type="text"
											className="form-control"
											required
											defaultValue={selectTedDate}
											readOnly
										/>
									</div>
									<div>
										<Button type="submit" className="btn text-uppercase text-white" fullWidth variant="contained" color="primary">Submit</Button>
										<Button
											fullWidth
											className="btn text-uppercase  text-white mt-2" variant="contained" color="primary" 
											onClick={() => {
												clear();
											}}
										>
											Clear
										</Button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AppointmentForm;
