import { ADD_CART , REMOVE_CART ,CHANGE_QUANTITY , ADD_FAVORITE , REMOVE_FAVORITE} from "./ActionTypes";

const newState = {
    ShoppingCart:[

    ] ,
    Favorites:[

    ]
}
//payload {id:1 , description:"work"}
const ReducerStore=(state = newState , action)=>{
    switch(action.type){
        case ADD_CART : return {...state  , ShoppingCart:[...state.ShoppingCart , action.payload]}
        case REMOVE_CART : return {...state , ShoppingCart:state.ShoppingCart.filter(e=>e.id!==action.payload) }
        default : return state ;
    }
   
    }

export default ReducerStore ;