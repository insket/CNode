import { createStore, compose} from "redux";
import combineReducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(combineReducers, composeEnhancers())
