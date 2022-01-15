import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Speech from '../../pages/homePagesComponents/Speech'

import './Auth.css'


const Dashboard = () => {

  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const notify = (message) => toast(message);




  const loginHandler = (e) => {
    e.preventDefault();
    if (email === '') {
      notify('Username/Email is required!');
      localStorage.setItem('status_login', 'false');
    }else if (password === ''){
      notify('Password is required!');
      localStorage.setItem('status_login', 'false');
    }else{
      localStorage.setItem('status_login', 'true');
      history.push('/');
    }
  };

  return (
    <div className="containers">
      <div className="screen">
        <div className="screen__content">
          <form className="login" onSubmit={loginHandler}>
            <div className="login__field">
              <i className="login__icon fas fa-user" />
              <input type="text" className="login__input" placeholder="User name / Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <Speech />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock" />
              <input type="password" className="login__input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <Speech />
            </div>
            <button className="button login__submit" type="submit">
              <span className="button__text">Log In Now</span>
              <i className="button__icon fas fa-chevron-right" />
              
            </button>
            <Speech />
          </form>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4" />
          <span className="screen__background__shape screen__background__shape3" />
          <span className="screen__background__shape screen__background__shape2" />
          <span className="screen__background__shape screen__background__shape1" />
        </div>
      </div>
    </div>

  );
};

export default Dashboard;