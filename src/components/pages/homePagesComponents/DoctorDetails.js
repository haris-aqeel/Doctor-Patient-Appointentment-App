import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import HeaderBottom from './HeaderBottom';

const Header = (props) => { 
    const [patientData,setpatientData] = useState(null);
    const [picture,setpicture] = useState(null);

    
    useEffect(()=>{
       const patient=JSON.parse(localStorage.getItem("patient_data"))
       const images=localStorage.getItem("link")
       console.log(patient,images)
    if(patient){
        setpatientData(patient)
    }
    if(images){
        setpicture(images)
    }
    },[]) 
  return (
    <section className="App" style={{"backgroundImage":"linear-gradient(to right, #0FCFE8)"}}>
      <div className="container">
        <header>
          {/* <Navbar /> */}
        </header>
        <div>
            <h1 style={{"textAlign":"center",paddingTop:"30px"}}>Patient Info</h1>
            {!patientData && !picture &&
            <div>
            <h3 style={{"textAlign":"center"}}>No appoinment has been booked yet</h3>
            </div>}
            {!patientData && picture &&
            <div>
            <img src={picture} style={{"textAlign":"center"}}></img>
            </div>}
            {patientData && picture &&
            <div style={{"textAlign":"center"}}>
            <img src={picture} style={{"textAlign":"center",paddingTop:"30px"}}></img>
            <div style={{paddingTop:"20px"}}>
            <h3 style={{"textAlign":"center"}}>Following are the details of patients who have booked the appoinment</h3></div>
            <div style={{"textAlign":"center",paddingTop:"10px","fontWeight":"30px"}}>
            <h2>{patientData.name}</h2>
            <br></br>
            <h2>{patientData.email}</h2>
            <br></br>
            <h2>{patientData.phone}</h2>
            </div>
            
            </div>}
        </div>
      </div>
    </section>
  );
};

export default Header;