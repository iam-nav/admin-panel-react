export const validation = (email,password)=>{
    if(email===""&&password!==""){
        return "Please Enter Your Email"
    }else if(email!==""&&password===""){
        return "please Enter your Password"
    }else if(email!==""&&password!==""){
        return undefined
    }
    else{
        return "All Credentials Necessary"
    }
}