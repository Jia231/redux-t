import {applyMiddleware,createStore} from 'redux';
import thunk from "redux-thunk";
import rootReducer from '../reducers/rootReducer'
import IStoreState from './IStoreState'

export default function configureStore (){
    return createStore<IStoreState>(
        rootReducer,
        applyMiddleware(thunk)
    )
}
