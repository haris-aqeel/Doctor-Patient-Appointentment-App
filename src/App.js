import React, {useEffect} from 'react';
import './App.css';
import Routes from './components/Routes';
import { UserProvider } from './components/useAuth';
import { toast } from 'react-toastify';
import {auth} from './firebase/service'

toast.configure({
	autoClose: 3000,
	draggable: false,
	//etc you get the idea
});



function App() {
	useEffect(()=> {
		auth.signOut().then(() => {
			localStorage.clear();
			localStorage.setItem('status_login', 'false');
		}).catch((error) => {
		  });
	},[])
	return (
		<UserProvider>
			<Routes />
		</UserProvider>
	);
}

export default App;
