import {createStore} from 'redux' 
import ReducerStore from "./Reducer"

const store = createStore(
    ReducerStore , 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store; 