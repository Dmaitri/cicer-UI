export function changeProject(){
    return {type:'GET_DATA',}
}

export function updateData(payload){
    return {type:'GET_CONFIGDATA_FORPROJECT',payload}
}