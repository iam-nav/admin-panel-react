import {LOGIN_SUCCESS,LOGIN_FAILED,CURRENT_PAGE} from './Actiontypes'


const initialState = {
    error:'',
    UserLoged:false,
    Users:[],
    currentPage:1
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
            case CURRENT_PAGE:
            return{
                ...state,
                Currentpage:action.currentPage
            }     
        default: return state
    }
}