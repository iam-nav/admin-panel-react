import React, { useState } from 'react'
import {connect} from 'react-redux'
import {sendUserData} from '../../store/UserActions'
import Alert from '../validation/Alert'
import './login.css'

function Login(props) {
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')

    
const sendData = ()=>{
    props.SendCredentials(email,password)
}

    return (
        <div>
        <div className="content">
            <h1 className="header">Login</h1>
            <div className="login-card">
            <input type="email" onChange={(e)=>setemail(e.target.value)} value={email} className="input1"></input><br />
            <label className="User_label">Username</label>
            <input type="password"  onChange={(e)=>setpassword(e.target.value)}  value={password}  className="input2"></input><br />
            <label className="label" >Password</label>
            <button className="btns" onClick={sendData}>Login</button>
            </div>
        </div>
        {props.error?<Alert Error={props.error} left="530px" top="-50px"  ></Alert>:null}
        </div>
    )
}



const mapStateToProp = state =>{
    return{
       error:state.error,
       token:state.token,
       UserLoged:state.UserLoged
    }
}


const mapDispatchToProps = dispatch=>{
    return{
        SendCredentials: (email,password) =>dispatch(sendUserData(email,password))
    }
}

export default  connect(mapStateToProp,mapDispatchToProps) (Login) 
