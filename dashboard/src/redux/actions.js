import * as actionTypes from './types.js';

export const buyStock=(stockId,value)=>{
    return{  type:actionTypes.BUY,
    payload:{
        id:stockId,
        qty:value
    }}
}
export const sellStock=(stockId,value)=>{
    return{  type:actionTypes.SELL,
    payload:{
        id:stockId,
        qty:value
    }}
}
export const viewStock=(stockId)=>{
    return{  type:actionTypes.VIEW,
    payload:{
        id:stockId
    }}
}
export const removeStock=()=>{
    return{  type:actionTypes.REMOVE}
    
}
export const updateData=(object)=>{
    return {
        type:actionTypes.UPDATE,
        payload:object
    }
}






