 
export function log(message = null){
    if(message != null){
        console.log(message);
    }
}

export function logTable(section,message,params){
    console.table({
        "SECTION":section,
        "MESSAGE":message,
        "PARAMS" : params
    })
}

