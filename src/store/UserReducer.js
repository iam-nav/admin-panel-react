import {LOGIN_SUCCESS,LOGIN_FAILED,CURRENT_PAGE} from './Actiontypes'


const initialState = {
    error:'',
    UserLoged:false,
    Users:[],
    token:'',
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
               token:action.token,
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