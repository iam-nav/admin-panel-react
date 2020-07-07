import {LOGIN_FAILED,LOGIN_SUCCESS,USER_DATA,CURRENT_PAGE} from './Actiontypes'
import ActionButton from 'antd/lib/modal/ActionButton'
import axios from 'axios'
import {validation} from '../components/validation/validation'



export const Loginfailed = (error)=>{
    return {
        type:LOGIN_FAILED,
        error
    }
} 

export const LogedSuccess = (token)=>{
    return {
        type:LOGIN_SUCCESS,
        token
    }
}

export const userData = (users)=>{
    return {
        type:USER_DATA,
        error:'',
        UserLoged:true,
        users
    }
}

export const CurrentPage = (currentPage)=>{
    return {
        type:CURRENT_PAGE,
        currentPage
    }
}



export const sendUserData =(email,password)=>{
    return (dispatch)=>{ 
        const Error = validation(email,password)
        Error?dispatch(Loginfailed(Error)):
          axios({
            method: 'post',
            url: "http://localhost:8000/api/login",
            params: {
                "email": email,
                "password": password
              }
        })
        .then(res=>{
            localStorage.setItem('key',res.data.success.access_token)
            dispatch(LogedSuccess(res.data.success.access_token))
             window.location = '/home'
        }).catch((e)=>{
            dispatch(Loginfailed('Account Not found'))
        })
    }
}



export const getUsersInfo = ()=>{
   return (dispatch)=>{

    }
}
