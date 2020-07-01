import {LOGIN_SUCCESS,LOGIN_FAILED} from './Actiontypes'


const initialState = {
    error:'',
    UserLoged:false,
    Users:[]
}


export const UserReducer = (state=initialState,action)=>{
    switch(action.type){
        case LOGIN_FAILED:
            return{
                ...state,
               error:action.error,
               UserLoged:false
            }
        case LOGIN_SUCCESS:
            return{
                ...state,
               UserLoged:true,
               error:''
            }     
        default: return state
    }
}