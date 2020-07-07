import React from 'react'
import {Redirect,Route} from 'react-router'


const Protected=({component:Component,token,...rest}) =>(
<Route
{...rest}
render={(props)=>
     localStorage.getItem('key')?(<Component {...props} />):
    <Redirect to="/"/>
}
/>
)
const mapStateToProp = state =>{
    return{
       token:state.token,
    }
}

export default  Protected
