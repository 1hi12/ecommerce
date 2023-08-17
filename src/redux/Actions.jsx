

import { ADD_CART , REMOVE_CART ,CHANGE_QUANTITY , ADD_FAVORITE , REMOVE_FAVORITE} from "./ActionTypes";


export const AddToCart=(payload)=>{
    return {
        type : ADD_CART , 
        payload : payload , 
    }
} 

export const RemoveCart=(payload)=>{
    return {
        type:REMOVE_CART , 
        payload:payload ,
    }
}