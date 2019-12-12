export const loggin =(payload)=>{
    return {
        type:"LOGIN_IN",
        data:payload
    }
}

export const logout=(payload)=>{
    return {
        type:"LOGIN_OUT",
        data:payload
    }
}