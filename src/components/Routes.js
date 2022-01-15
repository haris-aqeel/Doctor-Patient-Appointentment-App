import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import AppointmentPage from './pages/AppointmentPage';
import AppointmentForm from './pages/homePagesComponents/AppointmentForm';
import Login from './pages/dashboard/Login';
import SignUp from './pages/dashboard/SignUp';
import DashboardAppointmentPage from './pages/dashboard/Appointments/DashboardAppointmentPage';
import Patients from './pages/dashboard/patients/Patients';
import PrivateRoute from './privateRoute/PrivateRoute';
import NotFoundPage from './pages/NotFoundPage';
import Chat from './Chat';
import Webcam from './pages/homePagesComponents/WebCam';
import PatientInfo from './pages/homePagesComponents/DoctorDetails';
import VideoCall from '../client/Home';

const Routes = () => {
	return (
		<div style={{ backgroundColor: '#efefef' }}>
			<Switch>
				<Route exact path="/" component={Home} />;
				<Route path="/create-appointment" component={AppointmentPage} />;
				<Route path="/appointment-form" component={AppointmentForm} />;
				<PrivateRoute path="/dashboard/appointment">
					<DashboardAppointmentPage />
				</PrivateRoute>
				<PrivateRoute path="/dashboard/patients">
					<Patients />
				</PrivateRoute>
				<Route path="/login" component={Login} />;
				<Route path="/signup" component={SignUp} />;
				<Route path="/chat" component={Chat} />;
				<Route path="/webcam" component={Webcam} />;
				<Route path="/patientinfo" component={PatientInfo} />;
				<Route path="/Videocall" component={VideoCall} />;
				<Route path="*" component={NotFoundPage} />
			</Switch>
		</div>
	);
};

export default Routes;
