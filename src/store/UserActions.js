import {LOGIN_FAILED,LOGIN_SUCCESS,USER_DATA} from './Actiontypes'
import ActionButton from 'antd/lib/modal/ActionButton'


export const Loginfailed = (error)=>{
    return {
        type:LOGIN_FAILED,
        error
    }
} 

export const LogedSuccess = ()=>{
    return {
        type:LOGIN_SUCCESS,
        error:'',
        UserLoged:true
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



export const sendUserData =(email,password)=>{
    return (dispatch)=>{
        console.log('email'+email,'Password'+password)
        // dispatch(LogedSuccess())      
          // axios({
        //     method: 'post',
        //     url: 'http://api-tester.shubhamschahar.com/api/faked/chahar/react-test-1/login',
        //     data: {
        //       email,
        //       password
        //     }})
        // .then(res=>{
        //   localStorage.setItem('key',res.data.token)
        //   window.location = '/profile'
        // })
        // .catch((e=>{
        //     dispatch(Loginfailed(e.response.data.error))
        // }))
    }
}

export const getUsersInfo = ()=>{
   return (dispatch)=>{

    }
}
