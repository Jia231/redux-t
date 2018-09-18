import ActionTypeKeys from '../actions/ActionTypeKeys';
import ActionTypes from '../actions/ActionTypes';
import {IGetUsersSuccessAction} from '../actions/users/get';
import IStoreState from '../store/IStoreState';
import initialState from './initialState';

export default function userReducer (
    state:IStoreState = initialState,
    action : ActionTypes
)
{
    switch(action.type){
        case ActionTypeKeys.GET_USERS_SUCCESS:
            return onGetUserSuccess(action)
        default : 
            return state;
    }
}

function onGetUserSuccess(action:IGetUsersSuccessAction){
    return {
        users:action.payload.users
    }
}