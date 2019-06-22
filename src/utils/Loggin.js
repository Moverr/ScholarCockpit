
function logging(message = null){
    if(message != null){
        console.log(message);
    }
}

function loggingTable(section,message,params){
    console.table({
        "SECTION":section,
        "MESSAGE":message,
        "PARAMS" : params
    })
}