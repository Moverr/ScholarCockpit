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