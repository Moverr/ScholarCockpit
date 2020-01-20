export const loggin =(payload)=>{
    return {
        type:"LOGIN_IN",
        payload:payload
    }
}

export const logout=(payload)=>{
    return {
        type:"LOGIN_OUT",
        payload:payload
    }
}


export const nextscreen=(payload)=>{
    return {
        type:"ADD_NEXT_SCREEN",
        payload:payload
    }
}

export const prevscreen=(payload)=>{
    return {
        type:"ADD_PREVIOUS_SCREEN",
        payload:payload
    }
}

export const currentscreen=(payload)=>{
    return {
        type:"ADD_CURRENT_SCREEN",
        payload:payload
    }
}


// return current screen status  
export const screenstatus=()=>{
    return {
        type:"SCREEN_STATUS"
       
    }
}


export const addAuthentication=()=>{
    return {
        type:"ADD_AUTHENTICATION"
       
    }
}




export const addRoles=()=>{
    return {
        type:"ADD_ROLES"
       
    }
}



 