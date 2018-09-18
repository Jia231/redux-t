import {combineReducers} from 'redux';
import IStoreState from '../store/IStoreState';
import users from './userReducer';


const rootReducer = combineReducers<IStoreState>({
    users
})

export default rootReducer;