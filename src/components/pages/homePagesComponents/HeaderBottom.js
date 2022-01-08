import React, { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { format } from 'date-fns'
import { enGB } from 'date-fns/locale'
import { DatePickerCalendar } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import { useEffect } from 'react';
import Speech from './Speech';
import { UserContext } from '../../useAuth';
import WebCamCapture from "./WebCam"
import {useHistory} from 'react-router-dom'

const Calender = () => {
  const {handleSelectDate} = useContext(UserContext)
  const [date, setDate] = useState()

  // first time set date
  useEffect(() => {
    setDate(new Date())
  }, [])

  useEffect(() => {
    let formatDate = `${date ? format(date, 'MMM dd, yyyy', { locale: enGB }) : ''}`
    handleSelectDate(formatDate)
  }, [date])


  
  return (
    <>
      <div className="bg-white sidebar-content shadow p-2 text-center">
        <h2 className="text-capitalize fwb">Appointment</h2>
        <DatePickerCalendar date={date} onDateChange={setDate} locale={enGB} />
      </div>
    </>
  )
}


const HeaderBottom = ({ history }) => {

  const [appointment, setAppointment] = useState(false)

  const routeDecide = () => {
    const statusOfLogin = localStorage.getItem('status_login');

    if (statusOfLogin === 'true'){
      history.push('/create-appointment');
    }else{
      history.push('/login');
    }
  }
  const chatBot=()=>{
    history.push('/chat')
  }
  const webcam=()=>{
    history.push('/webcam')
  }

  const patient=()=>{
    history.push('/patientinfo')
  }
  useEffect(() => {
    if (history.location.pathname === '/create-appointment') {
      setAppointment(true)
    }
  }, [history])

  return (
    <section className="header-content">
      <div className="row">
        <div className="col-xl-5">
          {appointment ? <Calender  /> : (
            <div className="sidebar-content">
              <h2 className="text-capitalize fwb">Your new smile <br /> starts here</h2>
              <p className="py-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi veniam optio
              consenter quod beatae, atque quae ipsam, alias est reprehenderit debitis explicabo itaque pariatur
          nisi!</p>

          <button type="button"
                onClick={patient}
                className="btn mybtn">Patient Info</button>
                <br></br>
                <br></br>
              <button type="button"
                onClick={routeDecide}
                className="btn mybtn">GET APPOINTMENT</button>
                {/* <ChatIcon /> */}
                <br></br>
                <br></br>
                
                <button type="button"
                onClick={chatBot}
                className="btn mybtn">Click here to chat with the doctor</button>
                <br></br>
                <br></br>

                <Speech />
                <br />
                
                
                <button type="button"
                onClick={webcam}
                className="btn mybtn">Webcam</button>
            </div>
          )}

        </div>
        <div className="col-xl-7">
          <div className="sidebar-image mr-2">
          </div>
        </div>
      </div>
    </section>
  );
};

export default withRouter(HeaderBottom);