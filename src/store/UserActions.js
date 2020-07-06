import {LOGIN_FAILED,LOGIN_SUCCESS,USER_DATA,CURRENT_PAGE} from './Actiontypes'
import ActionButton from 'antd/lib/modal/ActionButton'
import axios from 'axios'



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
          axios({
            method: 'post',
            url: "http://localhost:8000/api/login",
            params: {
                "email": "random@example.com",
                "password": "123456789"
              }
        })
        .then(res=>{
            localStorage.setItem('key',res.data.success.access_token)
            dispatch(LogedSuccess(res.data.success.access_token))
        //   localStorage.setItem('key',res.data.token)
        //   window.location = '/profile'
        }).catch((e)=>{
            console.log(e)
        })
        // .catch((e=>{
        //     dispatch(Loginfailed(e.response.data.error))
        // }))
    }
}




// axios({
//     method: 'post',
//     url: 
//    .then(res=>{
// console.log(res.data)
//     //   localStorage.setItem('key',res.data.token)
// //   window.location = '/profile'
// })




export const getUsersInfo = ()=>{
   return (dispatch)=>{

    }
}
